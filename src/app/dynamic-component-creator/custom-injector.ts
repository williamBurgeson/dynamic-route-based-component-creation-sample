// based on the OutletInjector, which is in 
//https://github.com/angular/angular/blob/master/packages/router/src/router_outlet.ts

import { Injector } from "@angular/core";
import { ActivatedRoute, ChildrenOutletContexts } from "@angular/router";

export class CustomInjector implements Injector {
  constructor(
    private route: ActivatedRoute, private childContexts: ChildrenOutletContexts,
    private parent: Injector) { }

  get(token: any, notFoundValue?: any): any {
    if (this.isActivatedRoute(token)) {
      return this.route;
    }

    if (token === ChildrenOutletContexts) {
      return this.childContexts;
    }

    return this.parent.get(token, notFoundValue);
  }

  private isActivatedRoute(token: any): boolean {
    if (token === ActivatedRoute) {
      return true;
    } else if (typeof token !== 'function') {
      return false;
    } else if (token.prototype) {
      return this.isActivatedRoute(token.prototype);
    }

    return false;
  }
}