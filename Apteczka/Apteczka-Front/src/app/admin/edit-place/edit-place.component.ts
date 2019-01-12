import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";

@Component({
  selector: "app-edit-place",
  templateUrl: "./edit-place.component.html",
  styleUrls: ["./edit-place.component.css"]
})
export class EditPlaceComponent implements OnInit {
  id = 0;
  name = "";
  company = "";
  description = "";
  lat = "";
  lng = "";

  constructor(
    private httpClient: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    console.log("edycja apteki");
    this.route.params.subscribe(params => {
      let id = params["id"];

      let param = new HttpParams({
        fromObject: {
          id: id
        }
      });

      this.httpClient
        .get(environment.apiEndpoint + "/pharmacy/get", { params: param })
        .subscribe((data: any) => {
          (this.name = data.name),
            (this.company = data.company),
            (this.description = data.description),
            (this.lat = data.lat),
            (this.lng = data.lon);
          this.id = data.id;
        });
    });
  }

  onSubmit() {
    console.log("edycja apteki");

    if (
      this.name == "" ||
      this.description == "" ||
      this.company == "" ||
      this.lat == "" ||
      this.lng == "" ||
      this.description == ""
    ) {
      alert("Pola nie mogą być puste!")
      return;
    }

    var pharmacy = {
      id: this.id,
      name: this.name,
      company: this.company,
      description: this.description,
      lat: this.lat,
      lon: this.lng
    };

    this.httpClient
      .post(environment.apiEndpoint + "/pharmacy/add", pharmacy)
      .subscribe((data: any) => {
        this.router.navigate(["/add_place"]);
      });
  }
}
