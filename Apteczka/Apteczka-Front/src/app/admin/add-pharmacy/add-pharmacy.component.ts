import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { environment } from '../../../environments/environment';
import { Router, ActivatedRoute, ParamMap } from "@angular/router";

@Component({
  selector: 'app-add-pharmacy',
  templateUrl: './add-pharmacy.component.html',
  styleUrls: ['./add-pharmacy.component.css']
})
export class AddPharmacyComponent implements OnInit {
  name = "";
  company = "";
  description = "";
  lat = "";
  lng = "";


  constructor(private httpClient: HttpClient, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log("dodawanie apteki");

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
      name: this.name,
      company: this.company,
      description: this.description,
      lat: this.lat,
      lon: this.lng
    }

    this.httpClient.post(environment.apiEndpoint + '/pharmacy/add', pharmacy).subscribe((data: any) => {
    this.router.navigate(["/add_place"])
    });
  }

}
