import { Component, OnInit } from '@angular/core';
import { AccidentService } from './../../accident.service';

import { ActivatedRoute, Router } from "@angular/router";
import { Accident } from './../../accident';
@Component({
  selector: 'app-accident-view',
  templateUrl: './accident-view.component.html',
  styleUrls: ['./accident-view.component.css']
})

export class AccidentViewComponent implements OnInit {
  submitted = false;

  Accident:any = [];

  constructor(
    private actRoute: ActivatedRoute,
    private accidentService: AccidentService,
    private router: Router
  ) {}

  ngOnInit() {
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getAccident(id);
  }




  getAccident(id) {
    this.accidentService.getAccident(id).subscribe(data => {
      this.Accident=data;
      });
    };






}
