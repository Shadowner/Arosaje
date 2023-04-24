import {Component, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UserProfileComponent {
  constructor(private router:ActivatedRoute) {
  }
  checked: any = true;
  nomModel: any = "Chabrier";
  prenomModel: any = "Thibaut";
  ageModel: any = "20";
  addresseModel: any = "5 rue du test";
  descriptionModel: any = "Je suis une description";
  nomModelChange: any;
  prenomModelChange: any;
  ageModelChange: any;
  addresseModelChange: any;

  ngOnInit(){
    let user = this.router.snapshot.paramMap.get('id');
    console.log(user);
    /*this.nomModel = user.name
    this.prenomModel = ""
    this.ageModel = user.category
    this.descriptionModel = user.description*/
  }
  ChangeDataUser() {
    this.nomModel = this.nomModelChange;
    this.prenomModel = this.prenomModelChange;
    this.ageModel = this.ageModelChange;
    this.addresseModel = this.addresseModelChange;
    this.checked = true
  }
}
