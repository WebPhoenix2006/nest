import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  // Mock Categories
  categories = [
    {
      image: 'assets/images/categories/burger.png',
      name: 'Cake & Milk',
      quantity: 26,
      fillColor: 'olive',
    },
    {
      image: 'assets/images/categories/kiwi.png',
      name: 'Organic Kiwi',
      quantity: 26,
      fillColor: 'yellow',
    },
    {
      image: 'assets/images/categories/peach.png',
      name: 'Peach',
      quantity: 14,
      fillColor: 'light-green',
    },
    {
      image: 'assets/images/categories/red-apple.png',
      name: 'Red Apple',
      quantity: 54,
      fillColor: 'red-apple',
    },
    {
      image: 'assets/images/categories/snack.png',
      name: 'Snack',
      quantity: 56,
      fillColor: 'orange',
    },
    {
      image: 'assets/images/categories/vegetables.png',
      name: 'Vegetables',
      quantity: 72,
      fillColor: 'pink',
    },
    {
      image: 'assets/images/categories/strawberry.png',
      name: 'Strawberry',
      quantity: 36,
      fillColor: 'olive',
    },
    {
      image: 'assets/images/categories/blackberries.png',
      name: 'Black Plum',
      quantity: 123,
      fillColor: 'red-apple',
    },
    {
      image: 'assets/images/categories/custard-apple.png',
      name: 'Custard Apple',
      quantity: 34,
      fillColor: 'yellow',
    },
    {
      image: 'assets/images/categories/peach.png',
      name: 'Coffee & Tea',
      quantity: 89,
      fillColor: 'orange',
    },
  ];

  // Owl carousel options 
  // for banner
  bannerOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: [
      '', ''
    ],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      740: {
        items: 1,
      },
      940: {
        items: 1,
      },
      
    },
    nav: false,
  };

  // for categories
  categoryOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: [
      '<div class="prev"> <i class="fa fa-arrow-left"></i> </div>',
      '<div class="next"><i class="fa fa-arrow-right"></i></div>',
    ],
    responsive: {
      0: {
        items: 2,
      },
      400: {
        items: 3,
      },
      740: {
        items: 3,
      },
      940: {
        items: 6,
      },
      1320: {
        items: 7,
      },
    },
    nav: true,
  };
}
