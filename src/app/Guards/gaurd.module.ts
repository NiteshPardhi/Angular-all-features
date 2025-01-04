import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Form1Component } from './form1/form1.component';
import { ReactiveFormsModule } from "@angular/forms";
import { CanDeactivateGaurd } from "./canDeactivateGaurd";

const routes: Routes = [
    {path:'form1', component: Form1Component, canDeactivate:[CanDeactivateGaurd]}
]

@NgModule({
    declarations: [
    Form1Component
  ],
    imports: [RouterModule.forChild(routes), ReactiveFormsModule],
    exports:[
    ]
})

export class GaurdModule {}