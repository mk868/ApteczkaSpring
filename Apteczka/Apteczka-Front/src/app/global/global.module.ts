import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from '../Global/main/main.component';
import { ContactComponent } from '../Global/contact/contact.component';
import { AboutComponent } from '../Global/about/about.component';

@NgModule({
  declarations: [MainComponent, ContactComponent, AboutComponent],
  imports: [
    CommonModule
  ]
})
export class GlobalModule { }
