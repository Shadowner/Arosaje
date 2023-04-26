import { Component } from '@angular/core';
import {Product} from "../dash-board/product";
import {ProductService} from "../dash-board/productservice";

@Component({
  selector: 'app-my-garden',
  templateUrl: './my-garden.component.html',
  styleUrls: ['./my-garden.component.css']
})
export class MyGardenComponent {
  // @ts-ignore
  products: Product[];
  visible:boolean = false;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProducts().then((data) => (this.products = data.slice(0, 10)));
  }

  showDialog(){
    this.visible = true
  }
  expositionPlante: any;
  floraisonPlante: any;
  resistancePlante: any;
  famillePlante: any;
  nomPlante: any;
  // @ts-ignore
  getSeverity (status) {
    switch (status) {
      case 'INSTOCK':
        return 'success';

      case 'LOWSTOCK':
        return 'warning';

      case 'OUTOFSTOCK':
        return 'danger';

      default:
        return "danger";
    }
  };

  submitPlante() {
    this.products.push({name:this.nomPlante,price:this.resistancePlante,category:this.famillePlante});
    this.visible = false;
  }

  removePlante(product: any) {
    const index = this.products.findIndex(el => el.name === product.name)
    this.products.splice(index,1)
  }
}
