import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SimpleNoArgsComponent } from './simple-no-args/simple-no-args.component';
import { SingleUrlArgComponent } from './single-url-arg/single-url-arg.component';

const routes: Routes = [
  { path: "page", component: SimpleNoArgsComponent },
  { path: "page/:message", component: SingleUrlArgComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
