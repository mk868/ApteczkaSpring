import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";

@Component({
  selector: "app-add-medicine-to-pharmacy",
  templateUrl: "./add-medicine-to-pharmacy.component.html",
  styleUrls: ["./add-medicine-to-pharmacy.component.css"]
})
export class AddMedicineToPharmacyComponent implements OnInit {
  constructor(
    private httpClient: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      let id = params["id"];
      let id2 = params["id2"];

      let param = new HttpParams({
        fromObject: {
          id: id,
          id2: id2
        }
      });

      this.httpClient
        .get(environment.apiEndpoint + "/pharmacy/addmedicine", { params: param })
        .subscribe((data: any) => {
          this.router.navigate(["/avaliable_medicines/" + id]);
        });
    });
  }
}
