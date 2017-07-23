import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';
import { ContainerComponent } from './components/container/container.component';
import { SimpleNoArgsComponent } from './components/simple-no-args/simple-no-args.component';
import { SingleUrlArgComponent } from './components/single-url-arg/single-url-arg.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    SimpleNoArgsComponent,
    SingleUrlArgComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
