import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";


@Component({
  selector: 'app-delete-medicine-from-pharmacy',
  templateUrl: './delete-medicine-from-pharmacy.component.html',
  styleUrls: ['./delete-medicine-from-pharmacy.component.css']
})
export class DeleteMedicineFromPharmacyComponent implements OnInit {

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
        .get(environment.apiEndpoint + "/pharmacy/deletemedicine", { params: param })
        .subscribe((data: any) => {
          this.router.navigate(["/pharmacy/item/" + id]);
        });
    });
  }

}
