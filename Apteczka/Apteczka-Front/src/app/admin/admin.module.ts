import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from '../Admin/main/main.component';
import { AddMedicineComponent } from '../Admin/add-medicine/add-medicine.component';
import { LoginComponent } from './login/login.component';
import { AddPlaceComponent } from './add-place/add-place.component';
import { AddPharmacyComponent } from './add-pharmacy/add-pharmacy.component';

@NgModule({
  declarations: [MainComponent, AddMedicineComponent, LoginComponent, AddPlaceComponent, AddPharmacyComponent],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
