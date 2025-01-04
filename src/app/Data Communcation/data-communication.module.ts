import { NgModule } from "@angular/core";
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
    {path: 'parent' , component:ParentComponent},
    {path: 'child', component: ChildComponent}
]

@NgModule({
    declarations: [
        ChildComponent,
        ParentComponent
    ],
    imports: [RouterModule.forChild(routes)],
    exports: [
        ChildComponent,
        ParentComponent
    ]
})

export class DataComunicationModule { }