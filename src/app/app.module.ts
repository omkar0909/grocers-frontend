import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';
import { DeleteproductComponent } from './deleteproduct/deleteproduct.component';
import { AddempComponent } from './addemp/addemp.component';
import { DelempComponent } from './delemp/delemp.component';
import { UpdateempComponent } from './updateemp/updateemp.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { AdminsigninComponent } from './adminsignin/adminsignin.component';
import { ProductsComponent } from './products/products.component';
import { PaymentComponent } from './payment/payment.component';
import { ContactComponent } from './contact/contact.component';
import { CartComponent } from './cart/cart.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    WelcomeComponent,
    AddproductComponent,
    UpdateproductComponent,
    DeleteproductComponent,
    AddempComponent,
    DelempComponent,
    UpdateempComponent,
    SigninComponent,
    SignupComponent,
    AdminsigninComponent,
    ProductsComponent,
    PaymentComponent,
    ContactComponent,
    CartComponent,
    UserComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
