import { Component, OnInit , Inject } from '@angular/core';
import { ControlService } from 'app/control.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Control } from 'app/Control';
import { first } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable, ReplaySubject, defer } from 'rxjs';

@Component({
  selector: 'app-upgrade',
  templateUrl: './upgrade.component.html',
  styleUrls: ['./upgrade.component.css']
})
export class UpgradeComponent implements OnInit {
  
  
  //editForm :FormGroup ;
 id : number 
 isNew = true;
  constructor(private formBuilder: FormBuilder,
    private router: ActivatedRoute, 
    private controltApi : ControlService ,
    private route : Router
    ) { }
  
control :Control = new Control() ;
  ngOnInit() {
 
    let controlId = window.localStorage.getItem("editId");
    this.id = this.router.snapshot.params['id'];
    console.log(controlId)
    
      // get product by id from database 
      this.controltApi .getById(controlId)
      .subscribe((data : Control)=>{
        this.control = data;
        
      })

  }

editControl() {
  this.controltApi.edit(this.control)
    //.pipe(first())
    .subscribe(
      data => {
        console.log(data) ; 
       
        
  
      //  if(data.status === 200) {
         // alert('User updated successfully.');
          this.route.navigate(['table-list']);
      //  }else {
         // alert(data.message);
       // }
      },
      error => {
        alert(error);
      });
}





}
