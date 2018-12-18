import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-item",
  templateUrl: "./item.component.html",
  styleUrls: ["./item.component.css"]
})
export class ItemComponent implements OnInit {
  
  isLogged: boolean = JSON.parse(localStorage.getItem("loggedIn"));
  constructor() {}

  items = [];

  ngOnInit() {
    //TODO load from backend here
    this.items = [
      {
        id: 1,
        image: "/assets/medicine-128.png",
        company: "SuperLab xxx",
        name: "Lorem Impsum (Pagado)",
        shortDescription:
          "Ut enim ad minim veniam, quis nostrud exercitation..."
      },
      {
        id: 2,
        image: "/assets/medicine-128.png",
        company: "SuperLab xxx",
        name: "Lorem Impsum (Pendiente)",
        shortDescription:
          "Ut enim ad minim veniam, quis nostrud exercitation..."
      },
      {
        id: 3,
        image: "/assets/medicine-128.png",
        company: "ChinaLab 123",
        name: "Lorem Impsum (Cancelado)",
        shortDescription:
          "Ut enim ad minim veniam, quis nostrud exercitation..."
      },
      {
        id: 4,
        image: "/assets/medicine-128.png",
        company: "ChinaLab 123",
        name: "Lorem Impsum (Pagado)",
        shortDescription:
          "Ut enim ad minim veniam, quis nostrud exercitation..."
      },
      {
        id: 5,
        image: "/assets/medicine-128.png",
        company: "Febrero 13, 2016",
        name: "Lorem Impsum (Pendiente)",
        shortDescription:
          "Ut enim ad minim veniam, quis nostrud exercitation..."
      }
    ];
  }
}
