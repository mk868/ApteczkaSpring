import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  item = {}
  constructor() { }

  ngOnInit() {
    this.item = {
      id: 1,
      image: "/assets/medicine-128.png",
      company: "ChinaLab 123",
      name: "Lorem Impsum (Cancelado)",
      description: "Ut enim ad minim veniam, quis nostrud exercitation."
    };
  }

}
