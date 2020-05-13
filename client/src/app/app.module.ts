import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccidentsComponent } from './accidents/accidents.component';
import { AccidentService } from './accident.service';
@NgModule({
  declarations: [
    AppComponent,
    AccidentsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [AccidentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
