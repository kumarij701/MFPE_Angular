import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { ConsumerComponent } from './consumer/consumer.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PropertyComponent } from './property/property.component';
import { BusinessComponent } from './business/business.component';
import { MenuComponent } from './menu/menu.component';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PolicyComponent } from './policy/policy.component';


@NgModule({
  declarations: [
    AppComponent,
    ConsumerComponent,
    PropertyComponent,
    BusinessComponent,
    MenuComponent,
    LoginComponent,
    HomeComponent,
    PolicyComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
