import {Route, RouterModule, RouterOutlet} from "@angular/router";
import {AppComponent} from "./app.component";
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {CommonModule} from "@angular/common";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {DisplayhelloworldComponent} from "./components/displayhelloworld/displayhelloworld.component";
import {ShowhellobuttonComponent} from "./components/showhellobutton/showhellobutton.component";
import {DisplaynameComponent} from "./components/displayname/displayname.component";
import {FormsModule} from "@angular/forms";


const routes: Route[] = [
  {path: 'Displayhelloworld', component: DisplayhelloworldComponent},
  {path: 'Showhellobutton', component: ShowhellobuttonComponent},
  {path: 'Displayname', component: DisplaynameComponent}
]

@NgModule({

  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes, {enableTracing: true}),
    FormsModule,
  ],

  declarations: [
    AppComponent,
    DisplayhelloworldComponent,
    ShowhellobuttonComponent,
    DisplaynameComponent
  ],

  providers:[


  ],

  bootstrap: [
    AppComponent
  ]

})


export class  AppModule {}
