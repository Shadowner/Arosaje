import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {PasswordModule} from "primeng/password";
import {InputTextModule} from "primeng/inputtext";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule} from "@angular/forms";
import {CardModule} from "primeng/card";
import {ButtonModule} from "primeng/button";
import {AngularSvgIconModule} from "angular-svg-icon";
import {HttpClientModule} from "@angular/common/http";
import {AccordionModule} from "primeng/accordion";
import {DividerModule} from "primeng/divider";
import {PanelModule} from "primeng/panel";
import {MenubarModule} from "primeng/menubar";
import {CarouselModule} from "primeng/carousel";
import {AvatarModule} from "primeng/avatar";
import {RippleModule} from "primeng/ripple";
import {RadioButtonModule} from "primeng/radiobutton";
import {AutoCompleteModule} from "primeng/autocomplete";
import {ProgressBarModule} from "primeng/progressbar";
import {TableModule} from "primeng/table";
import {SliderModule} from "primeng/slider";
import {DropdownModule} from "primeng/dropdown";
import {ToggleButtonModule} from "primeng/togglebutton";
import {MultiSelectModule} from "primeng/multiselect";
import {ToastModule} from "primeng/toast";
import {StepsModule} from "primeng/steps";
import {InputTextareaModule} from "primeng/inputtextarea";
import {MessageModule} from "primeng/message";
import {StyleClassModule} from "primeng/styleclass";
import {DashBoardComponent} from "./dash-board/dash-board.component";
import {ProductService} from "./dash-board/productservice";
import { UserProfileComponent } from './user-profile/user-profile.component';
import { FormulaireRechercheComponent } from './formulaire-recherche/formulaire-recherche.component';
import {TabMenuModule} from "primeng/tabmenu";
import {TabViewModule} from "primeng/tabview";
import { MessagerieComponent } from './messagerie/messagerie.component';
import { PlanteProfilComponent } from './plante-profil/plante-profil.component';
import {InputSwitchModule} from "primeng/inputswitch";
import { MyGardenComponent } from './my-garden/my-garden.component';
import {DataViewModule} from "primeng/dataview";
import {RatingModule} from "primeng/rating";
import {TagModule} from "primeng/tag";
import {DialogModule} from "primeng/dialog";
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashBoardComponent,
    UserProfileComponent,
    FormulaireRechercheComponent,
    MessagerieComponent,
    PlanteProfilComponent,
    MyGardenComponent
  ],
  imports: [
    HttpClientModule,
    AngularSvgIconModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    AccordionModule,
    PanelModule,
    ButtonModule,
    FormsModule,
    PasswordModule,
    DividerModule,
    InputTextModule,
    CardModule,
    StyleClassModule,
    MenubarModule,
    CarouselModule,
    AvatarModule,
    RippleModule,
    RadioButtonModule,
    AutoCompleteModule,
    BrowserAnimationsModule,
    ProgressBarModule,
    TableModule,
    SliderModule,
    DropdownModule,
    MultiSelectModule,
    ToggleButtonModule,
    ToastModule,
    StepsModule,
    InputTextareaModule,
    MessageModule,
    TabMenuModule,
    TabViewModule,
    InputSwitchModule,
    DataViewModule,
    RatingModule,
    TagModule,
    DialogModule,
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
