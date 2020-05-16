import { Component, OnInit } from '@angular/core';
import { Accident } from './../../accident';
import { ActivatedRoute, Router } from "@angular/router";
import { AccidentService } from './../../accident.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";


@Component({
  selector: 'app-accident-edit',
  templateUrl: './accident-edit.component.html',
  styleUrls: ['./accident-edit.component.css']
})

export class AccidentEditComponent implements OnInit {
  submitted = false;
  editForm: FormGroup;
  accidentData: Accident[];

  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private accidentService: AccidentService,
    private router: Router
  ) {}

  ngOnInit() {
    this.updateAccident();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getAccident(id);
    this.editForm = this.fb.group({
      category: ['', [Validators.required]],
      date: ['', [Validators.required]],
      time: ['', [Validators.required]],
      description: ['', [Validators.required]],
     image: ['', [Validators.required]],
     location: ['', [Validators.required]],
     resp: ['', [Validators.required]],
     aids: ['', [Validators.required]],



    })
  }



  // Getter to access form control
  get myForm() {
    return this.editForm.controls;
  }

  getAccident(id) {
    this.accidentService.getAccident(id).subscribe(data => {
      console.log("This is data");
      console.log(data[0]['category']);
      this.editForm.setValue({
        category: data[0]['category'],
        date: data[0]['date'],
        time: data[0]['time'],
        description: data[0]['description'],
        image: data[0]['image'],
        location:data[0]['location'],
        resp:data[0]['resp'],
        aids:data[0]['aids'],
      });
    });
  }

  updateAccident() {
    this.editForm = this.fb.group({
      category: ['', [Validators.required]],
      date: ['', [Validators.required]],
      time: ['', [Validators.required]],
      description: ['', [Validators.required]],
      image: ['', [Validators.required]],
      location: ['', [Validators.required]],
      resp: ['', [Validators.required]],
      aids: ['', [Validators.required]],
    })
  }

  onSubmit() {
    this.submitted = true;
    if (!this.editForm.valid) {
      return false;
    } else {
      if (window.confirm('Are you sure?')) {
        let id = this.actRoute.snapshot.paramMap.get('id');
        this.accidentService.updateAccident(id, this.editForm.value)
          .subscribe(res => {
            this.router.navigateByUrl('/accidents-list');
            console.log('Content updated successfully!')
          }, (error) => {
            console.log(error)
          })
      }
    }
  }

}
