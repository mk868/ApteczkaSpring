import { Component, OnInit } from "@angular/core";
import { environment } from "../../../environments/environment";
import { HttpClient, HttpParams } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-item",
  templateUrl: "./item.component.html",
  styleUrls: ["./item.component.css"]
})
export class ItemComponent implements OnInit {
  isLogged: boolean = JSON.parse(localStorage.getItem("loggedIn"));
  pharmacId = "";
  constructor(private httpClient: HttpClient, private route: ActivatedRoute) {}

  pharmacy = {};

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.pharmacId = params["id"];

      let param = new HttpParams({
        fromObject: {
          id: this.pharmacId
        }
      });

      this.httpClient
        .get(environment.apiEndpoint + "/pharmacy/get", { params: param })
        .subscribe((data: any) => {
          this.pharmacy = data;
        });
    });
  }
}
