import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizationGuard } from './authorization.guard';
import { BusinessComponent } from './business/business.component';
import { ConsumerComponent } from './consumer/consumer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { PolicyComponent } from './policy/policy.component';
import { PropertyComponent } from './property/property.component';

const routes: Routes = [

  { path: 'test-consumer', component: ConsumerComponent, canActivate: [AuthorizationGuard] },
  { path: 'test-property', component: PropertyComponent, canActivate: [AuthorizationGuard] },
  { path: 'test-business', component: BusinessComponent, canActivate: [AuthorizationGuard] },
  { path: 'test-menu', component: MenuComponent, canActivate: [AuthorizationGuard] },
  { path: 'test-home', component: HomeComponent, canActivate: [AuthorizationGuard] },
  { path: 'test-login', component: LoginComponent },
  { path: 'test-policy', component: PolicyComponent, canActivate: [AuthorizationGuard] },
  { path: '', redirectTo: 'test-login', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

