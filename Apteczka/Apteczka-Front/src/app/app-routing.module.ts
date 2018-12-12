import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent }      	from './medicines/list/list.component';
import { ItemComponent }      	from './medicines/item/item.component';
import { SearchComponent }      from './medicines/search/search.component';
import { MainComponent }      from './global/main/main.component';
import { AboutComponent }      from './global/about/about.component';
import { ContactComponent }      from './global/contact/contact.component';

import { AppComponent }			from './app.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'medicines', component: null,
	children: [
		{ path: 'list', component: ListComponent },
		{ path: 'search', component: SearchComponent },
		{ path: 'item/:id', component: ItemComponent },
	]
  },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  {path: '**', redirectTo: ''}
];


@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}