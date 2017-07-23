// from https://github.com/angular/angular/blob/master/packages/router/src/route_reuse_strategy.ts

import { ComponentRef } from "@angular/core";
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  DetachedRouteHandle,
  OutletContext,
  RouteReuseStrategy
} from "@angular/router";

import { TreeNode } from "./tree";

/** @internal */
export type DetachedRouteHandleInternal = {
  contexts: Map<string, OutletContext>,
  componentRef: ComponentRef<any>,
  route: TreeNode<ActivatedRoute>,
};

/**
 * Does not detach any subtrees. Reuses routes as long as their route config is the same.
 */
export class DefaultRouteReuseStrategy__ implements RouteReuseStrategy {
  shouldDetach(route: ActivatedRouteSnapshot): boolean { return false; }
  store(route: ActivatedRouteSnapshot, detachedTree: DetachedRouteHandle): void { }
  shouldAttach(route: ActivatedRouteSnapshot): boolean { return false; }
  retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null { return null; }
  shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
    return future.routeConfig === curr.routeConfig;
  }
}
