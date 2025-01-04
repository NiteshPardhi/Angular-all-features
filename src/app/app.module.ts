import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormGroupDirective, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TestComponent } from './test/test.component';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
import { NgxSpinnerModule } from 'ngx-spinner';
import { TemplateFormComponent } from './template-form/template-form.component';
import { FormArrayComponent } from './form-array/form-array.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DataComunicationModule } from './Data Communcation/data-communication.module';
import { PopupComponent } from './modal-popup/popup/popup.component';
import { GaurdModule } from './Guards/gaurd.module';
import { Form3Component } from './custom-validations/form3/form3.component';
import { Form5Component } from './custome-pipes/form5/form5.component';
import { EmailValidatorDirective } from './custom-directives/directives/email.directive';
import { Form4Component } from './custom-directives/form4/form4.component';
import { PanCardValidationDirective } from './custom-directives/directives/panCard.directive';
import { InputControllerComponent } from './common-controllers/input-controller/input-controller.component';
import { DropdownControllerComponent } from './common-controllers/dropdown-controller/dropdown-controller.component';
import { CheckboxControllerComponent } from './common-controllers/checkbox-controller/checkbox-controller.component';
import { CommonControlsComponent } from './common-controllers/common-controls/common-controls.component';
import { HighLightDirective } from './custom-directives/directives/highlight.directive';
import { FilterPipe } from './custome-pipes/pipes/filter.pipe';
import { TitlecasePipe } from './custome-pipes/pipes/underscoreToSapce.pipe';
import { TextareaControllerComponent } from './common-controllers/textarea-controller/textarea-controller.component';
import { AfterDecimalTwoDigitValidatorDirective } from './custom-directives/directives/afterDecimalTwoDigit.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegistrationComponent,
    AboutComponent,
    FooterComponent,
    DashboardComponent,
    TestComponent,
    TemplateFormComponent,
    FormArrayComponent,
    DataBindingComponent,
    PopupComponent,
    Form4Component,
    Form3Component,
    Form5Component,
    EmailValidatorDirective,
    PanCardValidationDirective,
    InputControllerComponent,
    DropdownControllerComponent,
    CheckboxControllerComponent,
    CommonControlsComponent,
    HighLightDirective,
    FilterPipe,
    TitlecasePipe,
    TextareaControllerComponent,
    AfterDecimalTwoDigitValidatorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    NgxSpinnerModule,
    DataComunicationModule,
    GaurdModule
  ],
  exports:[EmailValidatorDirective, FilterPipe, TitlecasePipe, HighLightDirective, AfterDecimalTwoDigitValidatorDirective,PanCardValidationDirective],
  providers: [FormGroupDirective],
  bootstrap: [AppComponent]
})
export class AppModule { }
