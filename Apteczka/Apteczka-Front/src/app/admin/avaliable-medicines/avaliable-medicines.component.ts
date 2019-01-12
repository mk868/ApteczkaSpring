import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";

@Component({
  selector: "app-avaliable-medicines",
  templateUrl: "./avaliable-medicines.component.html",
  styleUrls: ["./avaliable-medicines.component.css"]
})
export class AvaliableMedicinesComponent implements OnInit {
  items = [];
  isLogged: boolean = JSON.parse(localStorage.getItem("loggedIn"));
  pharmacyId = "";

  constructor(
    private httpClient: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    console.log("edycja apteki");
    this.route.params.subscribe(params => {
      this.pharmacyId = params["id"];

      let param = new HttpParams({
        fromObject: {
          id: this.pharmacyId
        }
      });

      this.httpClient
        .get(environment.apiEndpoint + "/medicine/available", { params: param })
        .subscribe((data: any) => {
          this.items = data;
        });
    });
  }
}
