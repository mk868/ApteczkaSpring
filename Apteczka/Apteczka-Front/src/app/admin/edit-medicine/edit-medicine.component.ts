import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";

@Component({
  selector: "app-edit-medicine",
  templateUrl: "./edit-medicine.component.html",
  styleUrls: ["./edit-medicine.component.css"]
})
export class EditMedicineComponent implements OnInit {
  id = 0;
  name = "";
  company = "";
  description = "";
  composition = "";

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
        .get(environment.apiEndpoint + "/medicine/get", { params: param })
        .subscribe((data: any) => {
          (this.name = data.name),
            (this.company = data.company),
            (this.description = data.description),
            (this.composition = data.composition),
            (this.id = data.id);
        });
    });
  }

  onSubmit() {
    console.log("edycja leku");

    if (
      this.name == "" ||
      this.description == "" ||
      this.company == "" ||
      this.composition == ""
    ) {
      alert("Pola nie mogą być puste!");
      return;
    }

    var medicine = {
      name: this.name,
      company: this.company,
      description: this.description,
      composition: this.composition,
      id: this.id
    };

    this.httpClient
      .post(environment.apiEndpoint + "/medicine/add", medicine)
      .subscribe((data: any) => {
        this.router.navigate(["/medicines/list"]);
      });
  }
}
