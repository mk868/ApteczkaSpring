import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";
import { environment } from "../../../environments/environment";

@Component({
  selector: "app-add-place",
  templateUrl: "./add-place.component.html",
  styleUrls: ["./add-place.component.css"]
})
export class AddPlaceComponent implements OnInit {
  items = [];

  constructor(private httpClient: HttpClient, private route: ActivatedRoute) {}

  ngOnInit() {
    this.httpClient
      .get(environment.apiEndpoint + "/pharmacy/all")
      .subscribe((data: any) => {
        this.items = data;
      });
  }
}
