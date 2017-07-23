import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';

import { DynamicComponentCreatorService } from '../../dynamic-component-creator/dynamic-component-creator.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  @ViewChild('contentContainer1', { read: ViewContainerRef })
    contentContainer1: ViewContainerRef;
  @ViewChild('contentContainer2', { read: ViewContainerRef })
    contentContainer2: ViewContainerRef;
  @ViewChild('contentContainer3', { read: ViewContainerRef })
    contentContainer3: ViewContainerRef;

  container1Url: string;
  container2Url: string;
  container3Url: string;

  constructor(private _dynamicComponentCreatorService: DynamicComponentCreatorService) { }

  ngOnInit() {
  }

  onInjectContainer1() {
    this
      ._dynamicComponentCreatorService
      .createComponentFromUrl(this.container1Url, 
        this.contentContainer1);
  }

  onInjectContainer2() {
    this
      ._dynamicComponentCreatorService
      .createComponentFromUrl(this.container2Url, 
        this.contentContainer2);
  }

  onInjectContainer3() {
    this
      ._dynamicComponentCreatorService
      .createComponentFromUrl(this.container3Url, 
        this.contentContainer3);    
  }

}
