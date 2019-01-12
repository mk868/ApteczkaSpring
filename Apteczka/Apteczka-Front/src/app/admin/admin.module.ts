import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from '../Admin/main/main.component';
import { AddMedicineComponent } from '../Admin/add-medicine/add-medicine.component';
import { LoginComponent } from './login/login.component';
import { AddPlaceComponent } from './add-place/add-place.component';
import { AddPharmacyComponent } from './add-pharmacy/add-pharmacy.component';
import { RemovePlaceComponent } from './remove-place/remove-place.component';
import { EditPlaceComponent } from './edit-place/edit-place.component';
import { RemoveMedicineComponent } from './remove-medicine/remove-medicine.component';
import { EditMedicineComponent } from './edit-medicine/edit-medicine.component';
import { AvaliableMedicinesComponent } from './avaliable-medicines/avaliable-medicines.component';
import { AddMedicineToPharmacyComponent } from './add-medicine-to-pharmacy/add-medicine-to-pharmacy.component';
import { DeleteMedicineFromPharmacyComponent } from './delete-medicine-from-pharmacy/delete-medicine-from-pharmacy.component';

@NgModule({
  declarations: [MainComponent, AddMedicineComponent, LoginComponent, AddPlaceComponent, AddPharmacyComponent, RemovePlaceComponent, EditPlaceComponent, RemoveMedicineComponent, EditMedicineComponent, AvaliableMedicinesComponent, AddMedicineToPharmacyComponent, DeleteMedicineFromPharmacyComponent],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
