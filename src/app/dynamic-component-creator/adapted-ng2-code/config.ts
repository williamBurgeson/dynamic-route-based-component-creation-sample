// from https://github.com/angular/angular/blob/master/packages/router/src/config.ts

import { UrlSegment } from "@angular/router";

export type UrlMatchResult = {
  consumed: UrlSegment[]; posParams?: { [name: string]: UrlSegment };
};