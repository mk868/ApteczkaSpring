import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from '../Admin/main/main.component';
import { AddMedicineComponent } from '../Admin/add-medicine/add-medicine.component';

@NgModule({
  declarations: [MainComponent, AddMedicineComponent],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
