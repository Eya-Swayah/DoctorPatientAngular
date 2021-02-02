import { Component, OnInit } from '@angular/core';
declare function StartMeeting(obj:any) : any ;
@Component({
  selector: 'app-call',
  templateUrl: './call.component.html',
  styleUrls: ['./call.component.css']
})
export class CallComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    
  }


  makeCall(){
    console.log("maaake call");
    var apiObj = null;
    StartMeeting(apiObj);
  }
}
