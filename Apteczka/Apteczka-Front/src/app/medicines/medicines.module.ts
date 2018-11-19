import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from '../Medicines/search/search.component';
import { ListComponent } from '../Medicines/list/list.component';

@NgModule({
  declarations: [SearchComponent, ListComponent],
  imports: [
    CommonModule
  ]
})
export class MedicinesModule { }
