import {Component, ViewEncapsulation} from '@angular/core';
import {MenuItem, SortEvent} from "primeng/api";
// @ts-ignore
import  json from "../../assets/products-small.json";
import {Router} from "@angular/router";
@Component({
  selector: 'app-formulaire-recherche',
  templateUrl: './formulaire-recherche.component.html',
  styleUrls: ['./formulaire-recherche.component.css','./formulaire-recherche.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FormulaireRechercheComponent {
  constructor(private router: Router) {
  }
  items: MenuItem[] = [];

  activeItem: MenuItem = {};
  products: any = json['data'];
  public showTableUser: boolean  = false;
  public showTablePlante: boolean = false;
  checkedNomPlante: boolean = false;

  ngOnInit() {
    console.log(json['data'])
    this.items = [
      {label: 'Utilisateurs', icon: 'pi pi-fw pi-users'},
      {label: 'Plantes', icon: 'pi pi-fw pi-heart'},
    ];

    this.activeItem = this.items[0];
  }

  onActiveItemChange(event: MenuItem) {
    this.activeItem = event;
  }

  activateLast() {
    this.activeItem = this.items[this.items.length - 1];
  }

  submitUser() {
    this.showTableUser = true;
  }

  submitPlante() {
    this.showTablePlante = true;
  }

  goToPlant(product: any) {
    this.router.navigate(['plant',product.id])
  }

  goToUser(product: any) {
    this.router.navigate(['users',product.id])
  }

  customSort(event: SortEvent) {
    // @ts-ignore
    event.data.sort((data1, data2) => {
      // @ts-ignore
      let value1 = data1[event.field];
      // @ts-ignore
      let value2 = data2[event.field];
      let result = null;

      if (value1 == null && value2 != null) result = -1;
      else if (value1 != null && value2 == null) result = 1;
      else if (value1 == null && value2 == null) result = 0;
      else if (typeof value1 === 'string' && typeof value2 === 'string') result = value1.localeCompare(value2);
      else result = value1 < value2 ? -1 : value1 > value2 ? 1 : 0;

      // @ts-ignore
      return event.order * result;
    });
  }
}
