import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";

@Component({
  selector: "app-remove-medicine",
  templateUrl: "./remove-medicine.component.html",
  styleUrls: ["./remove-medicine.component.css"]
})
export class RemoveMedicineComponent implements OnInit {
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
        .get(environment.apiEndpoint + "/medicine/delete", { params: param })
        .subscribe((data: any) => {
          this.router.navigate(["/medicines/list"]);
        });
    });
  }
}
