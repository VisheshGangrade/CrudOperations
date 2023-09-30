import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  isUpdate: boolean = true;
  currentIndex: any;
  personForm: any;
  
  


 // @Input() tableData: object;
 
  @Input('tableData')set get_tableData(value) {
    if(value){
      this.persons.push(value);
      console.log(this.persons);
    }
  }
    persons:any[]=[];
    ngOnInit(): void {
      //console.log(this.tableData + '0');
      
      
    }
    arr=[];
    copy_tableData=[];
  
  public search_type: any;
  search(){
  
     //this.arr=[];
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
   
   delete(index:any){
     this.persons.splice(index,1);
     
    }
    edit(person:any,index:any){
       this.isUpdate=true;
       this.currentIndex=index;
       this.personForm?.setValue(person);
    
      }
    
    
    }


  
 

