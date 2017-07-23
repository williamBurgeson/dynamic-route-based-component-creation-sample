import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-single-url-arg',
  templateUrl: './single-url-arg.component.html',
  styleUrls: ['./single-url-arg.component.css']
})
export class SingleUrlArgComponent implements OnInit {

  message = '[message]';

  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
  ) { 
    if (_activatedRoute
      && _activatedRoute.snapshot
      && _activatedRoute.snapshot.params
      && _activatedRoute.snapshot.params.message)
      this.message = _activatedRoute.snapshot.params.message;
  }

  /* Normally, we would use the activatedRoute.params.subscribe approach, however, 
  *  here, due to the fact that numerous instances of a single component may be  
  *  created, each under a different route (the angular router appears to take a "stack"
  *  approach in order to allow history to work), it is possible that by the time the 
  *  ngOnInit gets called, the actual route passed in will be reflecting a subsequent 
  *  route, inasmuch as it has been effectively superseded, therefore we need to grab 
  *  the routing param value snapshot in the constructor instead of at the ngOnInit stage.
  */

  ngOnInit() {
    //this._activatedRoute.params.subscribe(
    //  params => {
    //    this.message = params['message'];
    //  });
  }

}
