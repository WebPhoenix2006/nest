import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from "../main/main-routing.module";
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { HeaderComponent } from './components/header/header.component';
import { SvgIconsComponent } from './components/svg-icons/svg-icons.component';
import { ButtonComponent } from './components/button/button.component';
import { PopularProductsComponent } from './components/popular-products/popular-products.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ProgressComponent } from './components/progress/progress.component';



@NgModule({
  declarations: [
    SvgIconsComponent,
    HeaderComponent,
    DropdownComponent,
    ButtonComponent,
    PopularProductsComponent,
    ProgressComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    CarouselModule,
    
],
  exports: [
    HeaderComponent, SvgIconsComponent, DropdownComponent, ButtonComponent, PopularProductsComponent, ProgressComponent
  ]
})
export class SharedModule { }
