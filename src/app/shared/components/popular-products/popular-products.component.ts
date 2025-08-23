import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-popular-products',
  standalone: false,
  templateUrl: './popular-products.component.html',
  styleUrl: './popular-products.component.scss',
})
export class PopularProductsComponent implements OnInit {
  // Mock data for products
  products = [
    {
      title: 'Seeds of Change Organic Quinoa, Brown, & Red Rice',
      category: 'Snack',
      seller: 'NestFood',
      image: 'assets/images/products/product1.png',
      reviews: [
        { star: 4.0, comment: '' },
        { star: 5.0, comment: '' },
      ],
      avg: 0,
      price: 32.8,
      discount_price: 28.85,
      tagged: 'Hot',
      quantity: 182
    },
    {
      title: 'All Natural Italian-Style Chicken Meatballs',
      category: 'Hodo Foods',
      seller: 'Stouffer',
      image: 'assets/images/products/product2.png',
      reviews: [
        { star: 3.5, comment: '' },
        { star: 4.0, comment: '' },
      ],
      avg: 0,
      price: 55.8,
      discount_price: 52.85,
      tagged: 'Sale',
      quantity: 199
    },
    {
      title: 'Angie’s Boomchickapop Sweet & Salty Kettle Corn',
      category: 'Snack',
      seller: 'StarKist',
      image: 'assets/images/products/product3.png',
      reviews: [{ star: 4.0, comment: '' }],
      avg: 0,
      price: 52.8,
      discount_price: 48.85,
      tagged: 'New',
      quantity: 122
    },
    {
      title: 'Foster Farms Takeout Crispy Classic Buffalo Wings',
      category: 'Vegetables',
      seller: 'NestFood',
      image: 'assets/images/products/product4.png',
      reviews: [
        { star: 4.0, comment: '' },
        { star: 4.5, comment: '' },
      ],
      avg: 0,
      price: 19.8,
      discount_price: 17.85,
      quantity: 112
    },
    {
      title: 'Blue Diamond Almonds Lightly Salted Vegetables',
      category: 'Pet Foods',
      seller: 'NestFood',
      image: 'assets/images/products/product5.png',
      reviews: [{ star: 4.0, comment: '' }],
      avg: 0,
      price: 25.8,
      discount_price: 23.85,
      tagged: '-14%',
      quantity: 177
    },
    {
      title: 'Chobani Complete Vanilla Greek Yogurt',
      category: 'Hodo Foods',
      seller: 'NestFood',
      image: 'assets/images/products/product6.png',
      reviews: [{ star: 4.0, comment: '' }],
      avg: 0,
      price: 55.8,
      discount_price: 54.85,
      quantity: 167
    },
    {
      title: 'Canada Dry Ginger Ale – 2 L Bottle – 200ml – 400g',
      category: 'Meats',
      seller: 'NestFood',
      image: 'assets/images/products/product7.png',
      reviews: [
        { star: 5.0, comment: '' },
        { star: 4.5, comment: '' },
      ],
      avg: 0,
      price: 33.8,
      discount_price: 32.85,
      quantity: 134
    },
    {
      title: 'Encore Seafoods Stuffed Alaskan Salmon',
      category: 'Snack',
      seller: 'NestFood',
      image: 'assets/images/products/product8.png',
      reviews: [{ star: 4.0, comment: '' }],
      avg: 0,
      price: 37.8,
      discount_price: 35.85,
      tagged: 'Sale',
      quantity: 200
    },
    {
      title: 'Gorton’s Beer Battered Fish Fillets with soft paper',
      category: 'Coffes',
      seller: 'Old El Paso',
      image: 'assets/images/products/product9.png',
      reviews: [{ star: 4.0, comment: '' }],
      avg: 0,
      price: 25.8,
      discount_price: 23.85,
      tagged: 'Hot',
      quantity: 156
    },
    {
      title: 'Haagen-Dazs Caramel Cone Ice Cream Ketchup',
      category: 'Cream',
      seller: 'Tyson',
      image: 'assets/images/products/product10.png',
      reviews: [{ star: 2.0, comment: '' }],
      avg: 0,
      price: 24.8,
      discount_price: 22.85,
      quantity: 120
    },
  ];

  // Owl Carousel options for best sells
  bestSellsOptions: OwlOptions = {
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
        items: 1,
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
    },
    nav: true,
  };

  ngOnInit() {
    // attach avg rating to each product
    this.products = this.products.map((p) => {
      const total = p.reviews.reduce((sum, r) => sum + r.star, 0);
      const avg = p.reviews.length ? total / p.reviews.length : 0;
      return { ...p, avg }; // spread old product, add avg property
    });
  }
}
