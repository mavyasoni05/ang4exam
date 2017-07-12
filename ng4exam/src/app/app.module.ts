import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes,RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SiginComponent } from './sigin/sigin.component';
import { ForgotpasswordComponent } from "./forgotpassword/forgotpassword.component";

const appRoutes : Routes =[
  {path : '', component : LoginComponent },
  {path : 'signin', component : SiginComponent },
  {path : 'forgotpassword', component : ForgotpasswordComponent },
]


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SiginComponent,
    ForgotpasswordComponent,
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
