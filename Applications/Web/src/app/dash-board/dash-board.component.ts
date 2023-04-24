import { Component } from '@angular/core';
import {Product} from "./product";
import {ProductService} from "./productservice";
import {MenuItem} from "primeng/api";
import {Router} from "@angular/router";

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css','./dash-board.component.scss']
})
export class DashBoardComponent {
  // @ts-ignore
  products: Product[];
  // @ts-ignore
  items: MenuItem[];

  responsiveOptions;

  constructor(private productService: ProductService, private router: Router) {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }
  ngOnInit() {
    // @ts-ignore
    this.productService.getProductsSmall().then((products) => {
      this.products = products;
    });
  }

  redirectToPlantProfil(product: any) {
    console.log(product)
    this.router.navigate(['plant',product.id])
  }
}
