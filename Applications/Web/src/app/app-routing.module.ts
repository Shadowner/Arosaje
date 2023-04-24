import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {DashBoardComponent} from "./dash-board/dash-board.component";
import {UserProfileComponent} from "./user-profile/user-profile.component";
import {FormulaireRechercheComponent} from "./formulaire-recherche/formulaire-recherche.component";
import {MessagerieComponent} from "./messagerie/messagerie.component";
import {PlanteProfilComponent} from "./plante-profil/plante-profil.component";
import {MyGardenComponent} from "./my-garden/my-garden.component";

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path:"dashboard",
    component:DashBoardComponent
  },
  {
    path:'user',
    component:UserProfileComponent
  },
  {
    path:"users/:id",
    component:UserProfileComponent
  },
  {
    path:'search',
    component:FormulaireRechercheComponent
  },
  {
    path:"messagerie",
    component:MessagerieComponent
  },
  {
    path:"plant/:id",
    component:PlanteProfilComponent
  },
  {
    path:'',
    redirectTo:"login",
    pathMatch: 'full'
  },
  {
    path:'garden',
    component:MyGardenComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
