import {Component, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-plante-profil',
  templateUrl: './plante-profil.component.html',
  styleUrls: ['./plante-profil.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PlanteProfilComponent {
  constructor(private router: ActivatedRoute) {
  }
  checked: boolean = true;
  nomModel: string = "Curriculum";
  prenomModel: string = "Alveol";
  ageModel: string = "Forte";
  addresseModel: any = "5 rue de la Temeria";
  descriptionModel: any = "Je suis une description coucou";
  nomModelChange: any;
  prenomModelChange: any;
  ageModelChange: any;
  addresseModelChange: any;
  namePlante: any;
  ngOnInit(){
      // @ts-ignore
      let plante = this.router.snapshot.paramMap.get(('id'))
    console.log(plante)
  }
  ChangeDataUser() {
    this.nomModel = this.nomModelChange;
    this.prenomModel = this.prenomModelChange;
    this.ageModel = this.ageModelChange;
    this.addresseModel = this.addresseModelChange;
    this.checked = true
  }
}
