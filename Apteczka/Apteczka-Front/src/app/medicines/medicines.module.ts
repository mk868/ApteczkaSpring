import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from '../Medicines/search/search.component';
import { ListComponent } from '../Medicines/list/list.component';
import { ItemComponent } from './item/item.component';

@NgModule({
  declarations: [SearchComponent, ListComponent, ItemComponent],
  imports: [
    CommonModule
  ]
})
export class MedicinesModule { }
