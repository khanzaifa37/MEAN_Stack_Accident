import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccidentCreateComponent } from './components/accident-create/accident-create.component';
import { AccidentListComponent } from './components/accident-list/accident-list.component';
import { AccidentEditComponent } from './components/accident-edit/accident-edit.component';
import { AccidentViewComponent } from './components/accident-view/accident-view.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'create-employee' },
  { path: 'create-accident', component: AccidentCreateComponent },
  { path: 'edit-accident/:id', component: AccidentEditComponent },
  { path: 'accidents-list', component: AccidentListComponent },
  {path: 'accident/:id',component:AccidentViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule { }
