import { Router } from '@angular/router';
import { AccidentService } from './../../accident.service';
import { Accident } from './../../accident';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-accident-create',
  templateUrl: './accident-create.component.html',
  styleUrls: ['./accident-create.component.css'],

})

export class AccidentCreateComponent implements OnInit {
  submitted = false;
  accidentForm: FormGroup;
  category:string;
  date:string;
  time:string;
  image:string;
  description:string;
  accidents:Accident[];
  accident:Accident;


  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private accidentService: AccidentService
  ) {
    this.mainForm();
  }

  ngOnInit() { }

  mainForm() {
    this.accidentForm = this.fb.group({
      category: ['', [Validators.required]],
      date: ['', [Validators.required]],
      time: ['', [Validators.required]],
      image: ['', [Validators.required]],
      description: ['', [Validators.required]],

    })
  }

  // // Choose designation with select dropdown
  // updateProfile(e){
  //   this.accidentForm.get('designation').setValue(e, {
  //     onlySelf: true
  //   })
  // }

  // Getter to access form control
  get myForm(){
    return this.accidentForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (!this.accidentForm.valid) {
      return false;
    } else {
      const newAccident={
        category:this.category,
        date:this.date,
        time:this.time,
        image:this.image,
        description:this.description
      }
      // this.accidentService.addAccident(newAccident).subscribe(accident=>{
      //   this.accidents.push(accident);
      //   this.accidentService.getAccidents().subscribe(accidents=>this.accidents=accidents);
      // })
      this.accidentService.addAccident(this.accidentForm.value).subscribe(
        (res) => {
          console.log('Details successfully created!')
          //this.accidents.push(res);
        //this.accidentService.getAccidents().subscribe(accidents=>this.accidents=accidents);
          this.ngZone.run(() => this.router.navigateByUrl('/accidents-list'))
        }, (error) => {
          console.log(error);
        });
    }
  }

}
