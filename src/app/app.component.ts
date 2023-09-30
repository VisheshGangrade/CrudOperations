import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder ,FormArray, Validators, FormControl } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
  

   
export class AppComponent implements OnInit{
 
  isUpdate:boolean= true;
  
   title = 'CrudOP';
  persons:any[]=[];
  currentIndex:any;
  personForm!: FormGroup;
  tableData: any;

  constructor(private fb:FormBuilder){
   
  }
  ngOnInit() {
    this.personForm=this.fb.group({
      id: ['' , Validators.required],
      name: [''],
      class:[''],
      age:['']

    });
      
    
   }
     Submit(){
     
       let a=this.persons.find(p=>p.id==this.personForm.value.id)
       console.log(a);
       if(!a){
        
        
         this.persons.push(this.personForm.value);
         this.copy_tableData=JSON.parse(JSON.stringify(this.persons))
        
        
          
       }
       this.personForm.reset();
    }
      delete(index:any){
       this.persons.splice(index,1);
       
      }
        edit(person:any,index:any){
         this.isUpdate=true;
         this.currentIndex=index;
         this.personForm.setValue(person);
       }
        
      update(){
        this.persons[this.currentIndex]=this.personForm.value;
        this.isUpdate=true;
      }
       arr=[];
       copy_tableData=[];
       
       public search_type:any;
       search(){
       
         this.arr=[];
         this.persons.filter(p=> { 
          if(p.name==this.search_type|| p.id==this.search_type|| p.class==this.search_type || p.age==this.search_type)
          this.arr.push(p);

          
         })
            if(this.arr.length){
            this.persons=this.arr;
        }
         else{
               this.persons=this.copy_tableData;
         }
       }
       getFormData(event){
          console.log(event);
          this.tableData=event;
          //this.tableData.emit(event);
       }
}
