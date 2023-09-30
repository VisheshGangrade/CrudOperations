
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//import { AppRoutingModule } from './app-routing.module';
import { FormGroup,FormBuilder,FormControl , Validators } from '@angular/forms';
import { AppComponent } from './app.component';
import {  FormsModule,ReactiveFormsModule } from '@angular/forms';
import { FieldComponent } from './field/field.component';
import { TableComponent } from './table/table.component';
// //import { ParentComponent } from './parent/parent.component';
// import { FieldComponent } from './field/field.component';
// import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    FieldComponent,
    TableComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

