import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-add-place",
  templateUrl: "./add-place.component.html",
  styleUrls: ["./add-place.component.css"]
})
export class AddPlaceComponent implements OnInit {
  items = [];

  constructor() {}

  ngOnInit() {
    //TODO load from backend here
    this.items = [
      {
        id: 1,
        image: "/assets/laska-eskulapa_318-117971.jpg",
        company: "CeFarm",
        name: "Apteka rodzinna",
        shortDescription:
          "ul. Knyszyńskiego 31a"
      },
      {
        id: 2,
        image: "/assets/laska-eskulapa_318-117971.jpg",
        company: "CeFarm",
        name: "Twoja apteka",
        shortDescription:
          "ul. Wyszyńskiego 2"
      },
      {
        id: 3,
        image: "/assets/laska-eskulapa_318-117971.jpg",
        company: "AptekaMax",
        name: "Apteka Max",
        shortDescription:
          "ul. Kalickiego 1"
      },
      {
        id: 4,
        image: "/assets/laska-eskulapa_318-117971.jpg",
        company: "Pod Lwem",
        name: "Apteka pod Lwem",
        shortDescription:
          "ul. Wiejska 15b"
      },
      {
        id: 5,
        image: "/assets/laska-eskulapa_318-117971.jpg",
        company: "Pod Lwem",
        name: "Apteka rodzinna pod Lwem",
        shortDescription:
          "ul. Lipowa 12"
      }
    ];
  }
}
