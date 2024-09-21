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
import {CurrencyconverterComponent} from "./components/currencyconverter/currencyconverter.component";
import {EvenoddcheckerComponent} from "./components/evenoddchecker/evenoddchecker.component";
import {WordreverserComponent} from "./components/wordreverser/wordreverser.component";
import {ShowdateComponent} from "./components/showdate/showdate.component";
import {ShowusernameComponent} from "./components/showusername/showusername.component";
import {MultiplicationtableComponent} from "./components/multiplicationtable/multiplicationtable.component";
import {SimpleloginComponent} from "./components/simplelogin/simplelogin.component";
import {FarehnheittocelciusComponent} from "./components/farehnheittocelcius/farehnheittocelcius.component";
import {BookmarklistComponent} from "./components/bookmarklist/bookmarklist.component";
import {CharactercounterComponent} from "./components/charactercounter/charactercounter.component";
import {PalindromecheckerComponent} from "./components/palindromechecker/palindromechecker.component";
import {TemperatureconverterComponent} from "./components/temperatureconverter/temperatureconverter.component";
import {ShoppinglistComponent} from "./components/shoppinglist/shoppinglist.component";
import {FactorialcalculatorComponent} from "./components/factorialcalculator/factorialcalculator.component";
import {TodomanagerComponent} from "./components/todomanager/todomanager.component";


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
  {path: 'Currencyconverter', component: CurrencyconverterComponent},
  {path: 'Evenoddchecker', component: EvenoddcheckerComponent},
  {path: 'Wordreverser', component: WordreverserComponent},
  {path: 'Showdate', component: ShowdateComponent},
  {path: 'Showusername', component: ShowusernameComponent},
  {path: 'Multiplicationtable', component: MultiplicationtableComponent},
  {path: 'Simplelogin', component: SimpleloginComponent},
  {path: 'Farehnheittocelcius', component: FarehnheittocelciusComponent},
  {path: 'Bookmarklist', component: BookmarklistComponent},
  {path: 'Charactercounter', component: CharactercounterComponent},
  {path: 'Palindromechecker', component: PalindromecheckerComponent},
  {path: 'Temperatureconverter', component: TemperatureconverterComponent},
  {path: 'Shoppinglist', component: ShoppinglistComponent},
  {path: 'Factorialcalculator', component: FactorialcalculatorComponent},
  {path: 'Todomanager', component: TodomanagerComponent},

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
    CurrencyconverterComponent,
    EvenoddcheckerComponent,
    WordreverserComponent,
    ShowdateComponent,
    ShowusernameComponent,
    MultiplicationtableComponent,
    SimpleloginComponent,
    FarehnheittocelciusComponent,
    BookmarklistComponent,
    CharactercounterComponent,
    PalindromecheckerComponent,
    TemperatureconverterComponent,
    ShoppinglistComponent,
    FactorialcalculatorComponent,
    TodomanagerComponent,


  ],

  providers:[


  ],

  bootstrap: [
    AppComponent
  ]

})


export class  AppModule {}
