import {Route, RouterModule, RouterOutlet} from "@angular/router";
import {AppComponent} from "./app.component";
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {CommonModule} from "@angular/common";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {DisplayhelloworldComponent} from "./components/displayhelloworld/displayhelloworld.component";


const routes: Route[] = [
  {path: 'Displayhelloworld', component: DisplayhelloworldComponent}
]

@NgModule({

  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes, {enableTracing: true}),
  ],

  declarations: [
    AppComponent,
    DisplayhelloworldComponent,

  ],

  providers:[


  ],

  bootstrap: [
    AppComponent
  ]

})


export class  AppModule {}
