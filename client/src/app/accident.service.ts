import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Accident } from './accident';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AccidentService {

  constructor( private http:Http) { }

  //read method
  getAccidents(){
    return this.http.get('http://localhost:3000/api/accidents').pipe(map(res=> res.json()));
  }

  //add method
  addAccident(newAccident){
    console.log("Add method hit: Printing object");

    console.log(newAccident);
    var headers=new Headers();
    headers.append('Content-Type','application/json');
    console.log("Sending post request");
    return this.http.post('http://localhost:3000/api/accidents/create',newAccident,{headers:headers}).pipe(map(res=> res.json()));
  }

  //delete method
  deleteAccident(id)
  {
    return this.http.delete('http://localhost:3000/api/accidents/delete/'+id).pipe(map(res=> res.json()));
  }
}
