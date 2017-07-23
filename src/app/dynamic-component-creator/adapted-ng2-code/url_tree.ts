// from https://github.com/angular/angular/blob/master/packages/router/src/utils/url_tree.ts

import {
  PRIMARY_OUTLET,
  UrlSegmentGroup
} from "@angular/router";

import { forEach } from "./collection";

export function mapChildrenIntoArray<T>(
  segment: UrlSegmentGroup, fn: (v: UrlSegmentGroup, k: string) => T[]): T[] {
  let res: T[] = [];
  forEach(segment.children, (child: UrlSegmentGroup, childOutlet: string) => {
    if (childOutlet === PRIMARY_OUTLET) {
      res = res.concat(fn(child, childOutlet));
    }
  });
  forEach(segment.children, (child: UrlSegmentGroup, childOutlet: string) => {
    if (childOutlet !== PRIMARY_OUTLET) {
      res = res.concat(fn(child, childOutlet));
    }
  });
  return res;
}
