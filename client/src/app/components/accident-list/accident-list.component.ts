import { Component, OnInit } from '@angular/core';
import { AccidentService } from './../../accident.service';

@Component({
  selector: 'app-accident-list',
  templateUrl: './accident-list.component.html',
  styleUrls: ['./accident-list.component.css']
})

export class AccidentListComponent implements OnInit {

  Accident:any = [];

  constructor(private accidentService: AccidentService) {
    this.readAccident();
  }

  ngOnInit() {}

  readAccident(){
    this.accidentService.getAccidents().subscribe((data) => {
     this.Accident = data;
    })
  }

  removeAccident(accident, index) {
    if(window.confirm('Are you sure?')) {
        this.accidentService.deleteAccident(accident._id).subscribe((data) => {
          this.Accident.splice(index, 1);
        }
      )
    }
  }

}
