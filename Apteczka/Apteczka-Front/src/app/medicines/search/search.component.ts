import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchText : string = '';
  items = [];

  constructor(private httpClient: HttpClient) { }

  search(){
    let param = new HttpParams({
      fromObject: {
        text: this.searchText,
      }
    });

    this.httpClient.get(environment.apiEndpoint + '/medicine/search', { params: param }).subscribe((data: any) => {
      this.items = data
    });
  }


  ngOnInit() {
  }
  
}
