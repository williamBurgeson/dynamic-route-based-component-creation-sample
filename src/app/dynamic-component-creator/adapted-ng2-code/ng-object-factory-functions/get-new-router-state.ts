import {
  ActivatedRoute,
  RouterState,
  RouterStateSnapshot
} from "@angular/router";

import { TreeNode } from "../tree";
import { setRouterState } from '../router_state';

export function getNewRouterState(root: TreeNode<ActivatedRoute>, snapshot: RouterStateSnapshot): RouterState {
  var routerState = new RouterState(root);
  routerState.snapshot = snapshot;

  setRouterState(this, root);

  return routerState;
}
