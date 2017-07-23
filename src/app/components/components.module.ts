import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';

import { DynamicComponentCreatorService } from '../dynamic-component-creator/dynamic-component-creator.service';

@NgModule({
  imports: [
    CommonModule,
    ComponentsRoutingModule
  ],
  declarations: [],
  providers: [ DynamicComponentCreatorService ]
})
export class ComponentsModule { }
