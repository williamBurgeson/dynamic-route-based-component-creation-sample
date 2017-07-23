// from https://github.com/angular/angular/blob/master/packages/router/src/router_state.ts

import {
  ActivatedRouteSnapshot,
  Data,
  Params,
  ActivatedRoute,
  RouterStateSnapshot
} from "@angular/router";

import { TreeNode } from "./tree";
import {
  shallowEqual,
  shallowEqualArrays
} from "./collection";

/** @internal */
export type Inherited = {
  params: Params,
  data: Data,
  resolve: Data,
};

/** @internal */
export function inheritedParamsDataResolve(route: ActivatedRouteSnapshot): Inherited {
  const pathToRoot = route.pathFromRoot;

  let inhertingStartingFrom = pathToRoot.length - 1;

  while (inhertingStartingFrom >= 1) {
    const current = pathToRoot[inhertingStartingFrom];
    const parent = pathToRoot[inhertingStartingFrom - 1];
    // current route is an empty path => inherits its parent's params and data
    if (current.routeConfig && current.routeConfig.path === '') {
      inhertingStartingFrom--;

      // parent is componentless => current route should inherit its params and data
    } else if (!parent.component) {
      inhertingStartingFrom--;

    } else {
      break;
    }
  }

  return pathToRoot.slice(inhertingStartingFrom).reduce((res, curr) => {
    const params = { ...res.params, ...curr.params };
    const data = { ...res.data, ...curr.data };
    const resolve = { ...res.resolve, ...curr['_resolvedData']};
    return { params, data, resolve };
  }, <any>{ params: {}, data: {}, resolve: {} });
}

export function setRouterState<U, T /*extends { _routerState: U }*/>(state: U, node: TreeNode<T>): void {
  node.value['_routerState'] = state;
  node.children.forEach(c => setRouterState(state, c));
}

export function advanceActivatedRoute(route: ActivatedRoute): void {
  if (route.snapshot) {
    const currentSnapshot = route.snapshot;
    const nextSnapshot = route['_futureSnapshot'];
    route.snapshot = nextSnapshot;
    if (!shallowEqual(currentSnapshot.queryParams, nextSnapshot.queryParams)) {
      (<any>route.queryParams).next(nextSnapshot.queryParams);
    }
    if (currentSnapshot.fragment !== nextSnapshot.fragment) {
      (<any>route.fragment).next(nextSnapshot.fragment);
    }
    if (!shallowEqual(currentSnapshot.params, nextSnapshot.params)) {
      (<any>route.params).next(nextSnapshot.params);
    }
    if (!shallowEqualArrays(currentSnapshot.url, nextSnapshot.url)) {
      (<any>route.url).next(nextSnapshot.url);
    }
    if (!shallowEqual(currentSnapshot.data, nextSnapshot.data)) {
      (<any>route.data).next(nextSnapshot.data);
    }
  } else {
    route.snapshot = route['_futureSnapshot'];

    // this is for resolved data
    (<any>route.data).next(route['_futureSnapshot'].data);
  }
}
