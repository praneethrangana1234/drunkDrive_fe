import { NgModule } from "@angular/core";
import { MaterialModule } from "./modules/material";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AddSlipNoComponent } from './component/dialog/add-slip-no/add-slip-no.component';

@NgModule({
    declarations: [
  
    AddSlipNoComponent
  ],
    imports: [
        MaterialModule
    ],
    exports: [
        MaterialModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [],
    
    schemas: []
})
export class SharedModule { }