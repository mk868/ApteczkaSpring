import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  medicine = {}
  constructor(private httpClient: HttpClient, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let id = params['id'];

      let param = new HttpParams({
        fromObject: {
          id: id,
        }
      });

      this.httpClient.get(environment.apiEndpoint + '/medicine/get', { params: param }).subscribe((data: any) => {
        this.medicine = data
      });
    });
  }

}
