import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TestComponent } from './test/test.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { FormArrayComponent } from './form-array/form-array.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { PopupComponent } from './modal-popup/popup/popup.component';
import { CanLoadGaurd } from './Guards/canLoadGuard';
import { CanActivateGuard } from './Guards/canActivateGaurd';
import { ResolveGuard } from './Guards/resolveGuard';
import { Form3Component } from './custom-validations/form3/form3.component';
import { Form4Component } from './custom-directives/form4/form4.component';
import { Form5Component } from './custome-pipes/form5/form5.component';
import { CommonControlsComponent } from './common-controllers/common-controls/common-controls.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  // {path: "**", redirectTo: '/home'},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent,
  children: [
      {path: '', component: DashboardComponent},
      {path: 'about', component: AboutComponent},
      {path: 'registration', component: RegistrationComponent},
      {path: 'registration/:id', component: RegistrationComponent},
      {path: 'dashboard', component: DashboardComponent},
      {path: 'test', component: TestComponent, resolve: [ResolveGuard]},
      {path: 'template-form', component: TemplateFormComponent},
      {path: 'template-form/:id', component: TemplateFormComponent},
      {path: 'formArray', component: FormArrayComponent},
      {path: 'formArray/:id', component: FormArrayComponent},
      {path: 'data-comunication',
        loadChildren: () => import('./Data Communcation/data-communication.module').then(a => a.DataComunicationModule)
      },
      {path: 'data-binding', component: DataBindingComponent},
      {path: 'popup', component: PopupComponent},
      //{path: 'popup', component: PopupComponent, canActivate: [CanActivateGuard]}, //for not redict without login
      {path: 'guardModule', //use canLoad:[CanLoadGaurd] to check its lazy loading or not and not redict without login
        loadChildren: () => import('./Guards/gaurd.module').then(b => b.GaurdModule)
      },
      {path: 'validators', component: Form3Component},
      {path: 'directives', component: Form4Component},
      {path: 'pipes', component: Form5Component},
      {path: 'commonControls', component: CommonControlsComponent}
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
