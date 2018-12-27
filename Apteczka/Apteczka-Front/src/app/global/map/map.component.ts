import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

//import TileLayer from 'ol/layer/Tile';
import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer';
import XYZ from 'ol/source/XYZ';
import { Map, View, Overlay, Feature } from 'ol';
import { Point } from 'ol/geom';
import VectorSource from 'ol/source/Vector';
import { Icon, Style } from 'ol/style';

import { fromLonLat } from 'ol/proj';

declare var $: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  map: Map;
  source: XYZ;
  layer: TileLayer;
  view: View;
  pharmacyName: string;

  selectedObject: any = null;
  objects = [];



  constructor(private httpClient: HttpClient) { }

  createMarkers() {
    var iconStyle = new Style({
      image: new Icon(/** @type {module:ol/style/Icon~Options} */({
        anchor: [12, 12],
        anchorXUnits: 'pixels',
        anchorYUnits: 'pixels',
        src: '/assets/plus-5-24.png'
      }))
    });

    var features = [];
    for (var i = 0; i < this.objects.length; i++) {
      var obj = this.objects[i];
      
      var iconFeature = new Feature({
        geometry: new Point(fromLonLat([obj.lon, obj.lat])),
        object: obj,
      });
      iconFeature.setStyle(iconStyle);
      features.push(iconFeature)
    }

    var vectorSource = new VectorSource({
      features: features
    });
    var vectorLayer = new VectorLayer({
      source: vectorSource
    });

    this.map.addLayer(vectorLayer);
  }


  ngOnInit() {
    this.source = new XYZ({
      url: 'http://tile.osm.org/{z}/{x}/{y}.png'
      //url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'
    });

    this.layer = new TileLayer({
      source: this.source
    });

    this.view = new View({
      center: fromLonLat([21.017532, 52.237049]),
      zoom: 5
    });

    this.map = new Map({
      target: 'map',
      layers: [this.layer],
      view: this.view
    });
    var $this = this;

    this.map.on('click', function (evt) {
      var feature = this.forEachFeatureAtPixel(evt.pixel, f => f);
      if (feature) {
        $this.selectedObject = feature.get('object');
      } else {
        $this.selectedObject = null;
      }
    });

    this.httpClient.get(environment.apiEndpoint + '/pharmacy/all').subscribe((data: any) => {
      this.objects = data;
      this.createMarkers();
    });
  }
}
