import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";

@Component({
  selector: "app-remove-place",
  templateUrl: "./remove-place.component.html",
  styleUrls: ["./remove-place.component.css"]
})
export class RemovePlaceComponent implements OnInit {
  constructor(
    private httpClient: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      let id = params["id"];

      let param = new HttpParams({
        fromObject: {
          id: id
        }
      });

      this.httpClient
        .get(environment.apiEndpoint + "/pharmacy/delete", { params: param })
        .subscribe((data: any) => {
          this.router.navigate(["/add_place"]);
        });
    });
  }
}
