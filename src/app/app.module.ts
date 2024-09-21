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
import {CounterComponent} from "./components/counter/counter.component";
import {SimpleformComponent} from "./components/simpleform/simpleform.component";
import {UserageComponent} from "./components/userage/userage.component";
import {UsergreetingComponent} from "./components/usergreeting/usergreeting.component";
import {CalculatorComponent} from "./components/calculator/calculator.component";
import {TextlengthComponent} from "./components/textlength/textlength.component";


const routes: Route[] = [
  {path: 'Displayhelloworld', component: DisplayhelloworldComponent},
  {path: 'Showhellobutton', component: ShowhellobuttonComponent},
  {path: 'Displayname', component: DisplaynameComponent},
  {path: 'Counter', component: CounterComponent},
  {path: 'Simpleform', component: SimpleformComponent},
  {path: 'Userage', component: UserageComponent},
  {path: 'Usergreeting', component: UsergreetingComponent},
  {path: 'Calculator', component: CalculatorComponent},
  {path: 'Textlength', component: TextlengthComponent},

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
    DisplaynameComponent,
    CounterComponent,
    SimpleformComponent,
    UserageComponent,
    UsergreetingComponent,
    CalculatorComponent,
    TextlengthComponent,

  ],

  providers:[


  ],

  bootstrap: [
    AppComponent
  ]

})


export class  AppModule {}
