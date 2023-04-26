import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router) {
  }
  title = 'Angular_frontend';
  items: any;

  ngOnInit(){
    this.items = [
      {
        label:'Recherche',
        icon:'pi pi-fw pi-file',
        routerLink:['/search'],
      },
      {
        label: "Mon Jardin",
        icon:"pi pi-fw pi-sun",
        routerLink: ['/garden']
      },
      {
        label:'Users',
        icon:'pi pi-fw pi-user',
        routerLink:['/user']
      },
      {
        label:'Messagerie',
        icon:'pi pi-fw pi-comments',
        routerLink:['/messagerie']
      }
    ];
  }

  goToDashBoard() {
    this.router.navigate(['/dashboard'])
  }
}
