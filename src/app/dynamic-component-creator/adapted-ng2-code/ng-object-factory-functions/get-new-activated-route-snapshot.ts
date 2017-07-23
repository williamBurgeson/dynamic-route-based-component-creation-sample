import { Type } from '@angular/core'
import {
  ActivatedRouteSnapshot,
  Data,
  Params,
  Route,
  RouterStateSnapshot,
  ResolveData,
  UrlSegment,
  UrlSegmentGroup
} from '@angular/router';

import { TreeNode } from '../tree';

export function getNewActivatedRouteSnapshot(url: UrlSegment[],
  params: Params,
  queryParams: Params,
  fragment: string,
  data: Data,
  outlet: string,
  component: Type<any> | string | null,
  routeConfig: Route | null,
  urlSegment: UrlSegmentGroup,
  lastPathIndex: number,
  resolve: ResolveData): ActivatedRouteSnapshot {

  var obj = new ActivatedRouteSnapshot__(url, params, queryParams,
    fragment, data, outlet, component,
    routeConfig, urlSegment, lastPathIndex, resolve);

  return obj;
}

class ActivatedRouteSnapshot__ extends ActivatedRouteSnapshot {
  constructor(
    public url: UrlSegment[], public params: Params,
    public queryParams: Params, public fragment: string,
    public data: Data, public outlet: string,
    public component: Type<any> | string | null,
    routeConfig: Route | null, urlSegment: UrlSegmentGroup,
    lastPathIndex: number, resolve: ResolveData) {
    super();
    var self = <any>this;
    self._routeConfig = routeConfig;
    self._urlSegment = urlSegment;
    self._lastPathIndex = lastPathIndex;
    self._resolve = resolve;
  }
}

