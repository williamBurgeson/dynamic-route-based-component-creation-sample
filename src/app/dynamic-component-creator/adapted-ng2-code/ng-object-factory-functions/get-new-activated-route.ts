import { Type } from "@angular/core";

import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  Data,
  Params,
  UrlSegment
} from "@angular/router";

import { Observable } from 'rxjs/Observable';

export function getNewActivatedRoute(
  url: Observable<UrlSegment[]>,
  params: Observable<Params>,
  queryParams: Observable<Params>,
  fragment: Observable<string>,
  data: Observable<Data>,
  outlet: string,
  component: Type<any> | string | null,
  futureSnapshot: ActivatedRouteSnapshot) {

  var obj = new ActivatedRoute__(url, params,
    queryParams, fragment, data, outlet,
    component, futureSnapshot);

  return obj;
}

class ActivatedRoute__ extends ActivatedRoute {
  constructor(
    url: Observable<UrlSegment[]>,
    params: Observable<Params>,
    queryParams: Observable<Params>,
    fragment: Observable<string>,
    data: Observable<Data>,
    outlet: string,
    component: Type<any> | string | null,
    futureSnapshot: ActivatedRouteSnapshot) {
    super();
    this.url = url;
    this.params = params;
    this.queryParams = queryParams;
    this.fragment = fragment;
    this.data = data;
    this.outlet = outlet;
    this.component = component;
    this['_futureSnapshot'] = futureSnapshot;
  }
}