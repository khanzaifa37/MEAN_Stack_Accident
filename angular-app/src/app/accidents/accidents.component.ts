import { Component, OnInit } from '@angular/core';
import { AccidentService } from '../accident.service';
import { Accident } from '../accident';
import { ActionSequence } from 'protractor';

@Component({
  selector: 'app-accidents',
  templateUrl: './accidents.component.html',
  styleUrls: ['./accidents.component.css'],
  providers:[AccidentService]
})
export class AccidentsComponent implements OnInit {

  accidents:Accident[];
  accident:Accident;
  category:string;
  date:string;
  time:string;
  constructor(private accidentService: AccidentService) { }
  //delete function
  deleteAccident(id:any){
    var accidents=this.accidents;
    this.accidentService.deleteAccident(id).subscribe(data=>{
      if(data.n==1)
      {
        for(var i=0;i<accidents.length;++i)
        {
          if(accidents[i]._id==id)
          {
            accidents.splice(i,1);
          }
        }
      }
    });

  }


  //add function
  addAccident(){
    const newAccident={
      category:this.category,
      date:this.date,
      time:this.time
    }
    this.accidentService.addAccident(newAccident).subscribe(accident=>{
      this.accidents.push(accident);
      this.accidentService.getAccidents().subscribe(accidents=>this.accidents=accidents);
    })
  }
  ngOnInit() {
    this.accidentService.getAccidents().subscribe(accidents=>this.accidents=accidents);
  }

}
