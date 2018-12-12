import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchText : string = '';
  items = [];

  constructor() { }
  search(){
    //TODO load from backend here
    let items = [{
      id: 1,
      image: "/assets/medicine-128.png",
      company: "SuperLab xxx",
      name: "Lorem Impsum (Pagado)",
      shortDescription: "Ut enim ad minim veniam, quis nostrud exercitation..."
    },{
      id: 2,
      image: "/assets/medicine-128.png",
      company: "SuperLab xxx",
      name: "Lorem Impsum (Pendiente)",
      shortDescription: "Ut enim ad minim veniam, quis nostrud exercitation..."
    },{
      id: 3,
      image: "/assets/medicine-128.png",
      company: "ChinaLab 123",
      name: "Lorem Impsum (Cancelado)",
      shortDescription: "Ut enim ad minim veniam, quis nostrud exercitation..."
    },{
      id: 4,
      image: "/assets/medicine-128.png",
      company: "ChinaLab 123",
      name: "Lorem Impsum (Pagado)",
      shortDescription: "Ut enim ad minim veniam, quis nostrud exercitation..."
    },{
      id: 5,
      image: "/assets/medicine-128.png",
      company: "Febrero 13, 2016",
      name: "Lorem Impsum (Pendiente)",
      shortDescription: "Ut enim ad minim veniam, quis nostrud exercitation..."
    }
    ];
    //fake search
    items.length =  Math.min(items.length, items.length - this.searchText.length/2 + 1);

    this.items = items;

  }


  ngOnInit() {
  }
  
}
