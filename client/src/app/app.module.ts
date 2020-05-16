import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccidentsComponent } from './accidents/accidents.component';
import { AccidentService } from './accident.service';
import { AccidentCreateComponent } from './components/accident-create/accident-create.component';
import { AccidentEditComponent } from './components/accident-edit/accident-edit.component';
import { AccidentListComponent } from './components/accident-list/accident-list.component';
import { AccidentViewComponent } from './components/accident-view/accident-view.component';
import {FilterPipe} from './components/accident-list/filter.pipe'
@NgModule({
  declarations: [
    AppComponent,
    AccidentsComponent,
    AccidentCreateComponent,
    AccidentEditComponent,
    AccidentListComponent,
    AccidentViewComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [AccidentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
