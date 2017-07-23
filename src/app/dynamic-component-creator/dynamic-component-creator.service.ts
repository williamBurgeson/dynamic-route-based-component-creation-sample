import {
  ComponentFactoryResolver,
  Injectable,
  Type,
  ViewContainerRef
} from '@angular/core';

import {
  ActivatedRoute,
  ChildrenOutletContexts,
  Route,
  Router,
  RouterState,
  UrlTree
} from '@angular/router';

import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';

import { AppComponent } from '../app.component';

import { recognize } from './adapted-ng2-code/recognize';
import { createRouterState } from './adapted-ng2-code/create_router_state';
import { ActivateRoutes, parentLoadedConfig } from "./adapted-ng2-code/router";
import { TreeNode } from "./adapted-ng2-code/tree";
import { advanceActivatedRoute } from "./adapted-ng2-code/router_state";

import { CustomInjector } from "./custom-injector";

@Injectable()
export class DynamicComponentCreatorService {

  private _routes: Route[];
  constructor(
    private _resolver: ComponentFactoryResolver,
    private _router: Router) {
    this._routes = _router.config;
  }

  createComponentFromUrl(url: string, contentContainer: ViewContainerRef): any {

    var urlTree = this._router.parseUrl(url);
    recognize(AppComponent, this._routes, urlTree, url)
      .toPromise()
      .then(x => {
        var routerStateSnapshot = x;
        var urlAndSnapshot$ = { appliedUrl: urlTree, snapshot: routerStateSnapshot };

        // at this point, it appears the router would call the "should I activate?" handlers (route guards)
        // and other similar widgets, which at this stage I don't think would offer any value, so I'll skip 
        // it for the time being, however if it becomes obvious that we do need such functionality then this 
        // is probably where we'll need to put it... 

        var routerState = createRouterState(
          this._router['routeReuseStrategy'],
          routerStateSnapshot,
          this._router['currentRouterState']);

        var state = routerState;

        const storedState: RouterState = this._router['currentRouterState'];
        const storedUrl: UrlTree = this._router['currentUrlTree'];

        var currentUrlTree = urlTree
        this._router['currentUrlTree'] = currentUrlTree;
        // with the DefaultUrlHandlingStrategy, in router.runNavigate, the url and rawUrl args will be the same object
        this._router['rawUrlTree'] = this._router.urlHandlingStrategy.merge(currentUrlTree, urlTree); 

        this._router['currentRouterState'] = state;

        var rootContexts: ChildrenOutletContexts = this._router['rootContexts'];

        const futureRoot: TreeNode<ActivatedRoute> = state['_root'];
        const currRoot: TreeNode<ActivatedRoute> = storedState['_root'];

        var futureNode: TreeNode<ActivatedRoute> = futureRoot.children[0];

        var future = futureNode.value;

        advanceActivatedRoute(future);

        var componentDef = <Type<any>>future.component;

        var context = rootContexts.getOrCreateContext(future.outlet);

        var config = parentLoadedConfig(future.snapshot);

        var cmpFactoryResolver = config ? config.module.componentFactoryResolver : null;

        context.route = future;
        context.resolver = cmpFactoryResolver;

        var routerOutlet = context.outlet;

        // source code says locationinjector is deprecated as of v4; however don't see any obvious alternative
        var injector = routerOutlet.locationInjector;
        injector = new CustomInjector(future, context.children, injector);

        injector['route'] = future;

        var factory = this._resolver.resolveComponentFactory(componentDef);

        var componentRef = contentContainer.createComponent(factory, null, injector);

        //new ActivateRoutes(this._router['routeReuseStrategy'], state, storedState)
        //  .activate(this._router['rootContexts']);

      });

    return {};
  }
}