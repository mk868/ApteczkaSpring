import { BrowserModule }	from '@angular/platform-browser';
import { NgModule }			from '@angular/core';

import { AppComponent }		from './app.component';
import { AppRoutingModule }	from './app-routing.module';

import { ListComponent }	from './medicines/list/list.component';
import { SearchComponent }	from './medicines/search/search.component';
import { MainComponent }    from './global/main/main.component';
import { AboutComponent }      from './global/about/about.component';
import { ContactComponent }      from './global/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
	ListComponent,
	SearchComponent,
	MainComponent,
	AboutComponent,
	ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
