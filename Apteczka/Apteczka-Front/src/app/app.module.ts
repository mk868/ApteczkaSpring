import { BrowserModule }	from '@angular/platform-browser';
import { NgModule }			from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent }		from './app.component';
import { AppRoutingModule }	from './app-routing.module';

import { ListComponent }	from './medicines/list/list.component';
import { SearchComponent }	from './medicines/search/search.component';
import { ItemComponent as MedicineItemComponent }      	from './medicines/item/item.component';
import { ItemComponent as PharmacyItemComponent }      	from './pharmacy/item/item.component';
import { MainComponent }    from './global/main/main.component';
import { AboutComponent }      from './global/about/about.component';
import { ContactComponent }      from './global/contact/contact.component';
import { MapComponent }      from './global/map/map.component';
import { AddMedicineComponent }      from './admin/add-medicine/add-medicine.component';
import { AddPlaceComponent }      from './admin/add-place/add-place.component';
import { AddPharmacyComponent }      from './admin/add-pharmacy/add-pharmacy.component';
import { LoginComponent }      from './admin/login/login.component';
import {AuthGuardService as AuthService} from './auth.service';
import {AuthGuardServiceLogin as AuthServiceLogin} from './auth.service_login';

@NgModule({
  declarations: [
    AppComponent,
	ListComponent,
	SearchComponent,
	MainComponent,
	AboutComponent,
  ContactComponent,
  MapComponent,
  AddMedicineComponent,
  AddPlaceComponent,
  AddPharmacyComponent,
  LoginComponent,
  MedicineItemComponent,
  PharmacyItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AuthService, AuthServiceLogin],
  bootstrap: [AppComponent]
})
export class AppModule { }
