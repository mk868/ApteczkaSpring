import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent }      	from './medicines/list/list.component';
import { ItemComponent as MedicineItemComponent }      	from './medicines/item/item.component';
import { ItemComponent as PharmacyItemComponent }      	from './pharmacy/item/item.component';
import { SearchComponent }      from './medicines/search/search.component';
import { MainComponent }      from './global/main/main.component';
import { AboutComponent }      from './global/about/about.component';
import { ContactComponent }      from './global/contact/contact.component';
import { MapComponent }      from './global/map/map.component';
import { AddMedicineComponent }      from './admin/add-medicine/add-medicine.component';
import { AddPlaceComponent }      from './admin/add-place/add-place.component';
import { RemovePlaceComponent }      from './admin/remove-place/remove-place.component';
import { RemoveMedicineComponent }      from './admin/remove-medicine/remove-medicine.component';
import { EditPlaceComponent }      from './admin/edit-place/edit-place.component';
import { EditMedicineComponent }      from './admin/edit-medicine/edit-medicine.component';
import { AvaliableMedicinesComponent }      from './admin/avaliable-medicines/avaliable-medicines.component';
import { AddMedicineToPharmacyComponent }      from './admin/add-medicine-to-pharmacy/add-medicine-to-pharmacy.component';
import { DeleteMedicineFromPharmacyComponent }      from './admin/delete-medicine-from-pharmacy/delete-medicine-from-pharmacy.component';
import { LoginComponent }      from './admin/login/login.component';
import {AuthGuardService as AuthService} from './auth.service';
import {AuthGuardServiceLogin as AuthServiceLogin} from './auth.service_login';
import { AddPharmacyComponent }      from './admin/add-pharmacy/add-pharmacy.component';

import { AppComponent }			from './app.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'medicines', component: null,
	children: [
		{ path: 'list', component: ListComponent },
		{ path: 'search', component: SearchComponent },
		{ path: 'item/:id', component: MedicineItemComponent },
	]
  },
  { path: 'pharmacy', component: null,
	children: [
		{ path: 'item/:id', component: PharmacyItemComponent },
	]
  },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'map', component: MapComponent },
  { path: 'login', component: LoginComponent, canActivate:[AuthServiceLogin] },
  { path: 'add_medicine', component: AddMedicineComponent, canActivate:[AuthService],data : {authGuardRedirect: '/about'} },
  { path: 'add_place', component: AddPlaceComponent, canActivate:[AuthService]},
  { path: 'remove_place/:id', component: RemovePlaceComponent, canActivate:[AuthService]},
  { path: 'remove_medicine/:id', component: RemoveMedicineComponent, canActivate:[AuthService]},
  { path: 'edit_place/:id', component: EditPlaceComponent, canActivate:[AuthService]},
  { path: 'edit_medicine/:id', component: EditMedicineComponent, canActivate:[AuthService]},
  { path: 'avaliable_medicines/:id', component: AvaliableMedicinesComponent, canActivate:[AuthService]},
  { path: 'add_medicine_to_pharmacy/:id/:id2', component: AddMedicineToPharmacyComponent, canActivate:[AuthService]},
  { path: 'delete_medicine_from_pharmacy/:id/:id2', component: DeleteMedicineFromPharmacyComponent, canActivate:[AuthService]},
  { path: 'add_pharmacy', component: AddPharmacyComponent, canActivate:[AuthService]},
  {path: '**', redirectTo: ''}
];


@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}