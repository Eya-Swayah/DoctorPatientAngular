import { Component, OnInit ,Inject} from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { Patient } from './Patient';
import { PatientService } from './patient-list.service';
//import Swal from 'sweetalert2';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {
  list : Patient[];
  list_copy : Patient[];
  body : Patient ;
route : ActivatedRoute
 control : Patient ;
 id : number 
  constructor(private controltApi : PatientService , private router : Router  ) { }

  ngOnInit() {
    this.getControls();
  
  
    
  }


  getControls(){
    this.controltApi.getAll()
    .subscribe(
      (data :Patient[])=> {
       console.log(data) 
      
       this.list = data
       this.list_copy = data },
      error=> console.log(error)
    )
  }
  delete(id){
    console.log (`delete todo ${id}`)
    this.controltApi.delete(id)
    .subscribe(data=>{
      this.router.navigate(['patient-list']);
     // window.location.reload();
      this.ngOnInit(); // updates data table
      //Swal.fire('deleted !' ,'' , 'success')
      window.location.reload();
      this.getControls() ;
    })
    //console.log(this.body) ; 
 }
 




  edit(control:Patient): void {
console.log (control)
    window.localStorage.removeItem("editId");
    window.localStorage.removeItem("place");
    window.localStorage.removeItem("temp");
    window.localStorage.removeItem("humidity");
    //console.log(control.id) ;
    // window.localStorage.setItem("editId", control.id.toString());
    //window.localStorage.setItem("place", control.place.toString());
    //window.localStorage.setItem("temp", control.temp.toString());
    //window.localStorage.setItem("humidity", control.humidity.toString());
    this.router.navigate(['upgrade']);
  };

  add(): void {
    this.router.navigate(['typography']);
  };







}
