import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Patient } from './Patient';

@Injectable({
  providedIn: 'root'
})


export class PatientService {

  constructor(private http : HttpClient) { }

  //url = 'http://localhost:8082/api';

  getAll(){
    return this.http.get("http://localhost:8080/gateway/doctor-service/api/template/patients");
  }
  getById(id){
    return this.http.get<Patient>(`http://localhost:8080/gateway/doctor-service/api/template/patients/${id}`);
  }
  save(body : Patient){
    return this.http.post('http://localhost:8080/gateway/doctor-service/api/patients/addPatient' , body);
  }
  edit( body ){
   // return this.http.put(this.url+'/patients' ,  body);
  }
  
  delete(id){
    return this.http.delete(`http://localhost:8080/gateway/doctor-service/api/template/deletePatient`);

  }

  
}
