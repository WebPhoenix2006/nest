import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from "../main/main-routing.module";
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { HeaderComponent } from './components/header/header.component';
import { SvgIconsComponent } from './components/svg-icons/svg-icons.component';



@NgModule({
  declarations: [
    SvgIconsComponent,
    HeaderComponent,
    DropdownComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    
],
  exports: [
    HeaderComponent, SvgIconsComponent, DropdownComponent
  ]
})
export class SharedModule { }
