import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder,  FormGroup, Validators , FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})
export class FieldComponent {
  persons:any[]=[];
  personForm!: FormGroup;
  arr=[];
  copy_tableData=[];
  currentIndex:any;
  isUpdate:boolean= true;

  constructor(private fb:FormBuilder){
   
  }
  @Output() formData = new EventEmitter<void>();

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
           this.formData.emit(this.personForm.value);
          //console.log(this.personForm.value) 
          console.log(this.personForm.value);
          this.personForm.reset(); 
           
      }
        

     // 
     
      }
       Update(){
        this.formData.emit(this.personForm.value);
       this.persons[this.currentIndex,0]=this.personForm.value;
       //this.persons[this.currentIndex]=this.personForm.value;
      this.isUpdate=true;
       }
      
      }
       
      //  update(){

        
    
  
  
    
  
    

