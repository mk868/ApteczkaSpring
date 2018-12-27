import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  items = [];

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get(environment.apiEndpoint + '/medicine/all').subscribe((data: any) => {
      this.items = data
    });
  }
}
