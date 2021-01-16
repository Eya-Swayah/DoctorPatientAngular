import { Component, OnInit ,Inject} from '@angular/core';
import { Control } from 'app/Control';
import { ControlService } from 'app/control.service';
import { Router, ActivatedRoute } from '@angular/router';
//import Swal from 'sweetalert2';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {
  list : Control[];
  list_copy : Control[];
  body : Control ;
route : ActivatedRoute
 control : Control 
 id : number 
  constructor(private controltApi : ControlService , private router : Router  ) { }

  ngOnInit() {
    this.getControls();
  
  
    
  }


  getControls(){
    this.controltApi.getAll()
    .subscribe(
      (data :Control[])=> {
      // console.log(data) 
      
       this.list = data
       this.list_copy = data },
      error=> console.log(error)
    )
  }
  delete(id){
    console.log (`delete todo ${id}`)
    this.controltApi.delete(id)
    .subscribe(data=>{
      this.router.navigate(['table-list']);
     // window.location.reload();
      this.ngOnInit(); // updates data table
      //Swal.fire('deleted !' ,'' , 'success')
      window.location.reload();
      this.getControls() ;
    })
    //console.log(this.body) ; 
 }
 




  edit(control:Control): void {
console.log (control)
    window.localStorage.removeItem("editId");
    window.localStorage.removeItem("place");
    window.localStorage.removeItem("temp");
    window.localStorage.removeItem("humidity");
    //console.log(control.id) ;
    window.localStorage.setItem("editId", control.id.toString());
    window.localStorage.setItem("place", control.place.toString());
    window.localStorage.setItem("temp", control.temp.toString());
    window.localStorage.setItem("humidity", control.humidity.toString());
    this.router.navigate(['upgrade']);
  };

  add(): void {
    this.router.navigate(['typography']);
  };







}
