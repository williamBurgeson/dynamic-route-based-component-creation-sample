import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

import { TreeNode } from '../tree';

import { setRouterState } from "../router_state";

export function getNewRouterStateSnapshot(
  url: string,
  root: TreeNode<ActivatedRouteSnapshot>):
  RouterStateSnapshot {
  return new RouterStateSnapshot__(url, root);
}

//function setRouterState<U, T /*extends { _routerState: U }*/>(state: U, node: TreeNode<T>): void {
//  node.value['_routerState'] = state;
//  node.children.forEach(c => setRouterState(state, c));
//}

class RouterStateSnapshot__ extends RouterStateSnapshot {
  //constructor(public url: string, root: TreeNode<ActivatedRouteSnapshot>) {
  //    super(root);
  //}
  constructor(url: string, root: TreeNode<ActivatedRouteSnapshot>) {
    try {
      super(root);
    } catch (e) {
      this['url'] = url;
      this['_root'] = root;
      setRouterState(<RouterStateSnapshot>this, root);
    }
  }

}

