// from https://github.com/angular/angular/blob/master/packages/router/src/utils/collection.ts

export function shallowEqualArrays(a: any[], b: any[]): boolean {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; ++i) {
    if (!shallowEqual(a[i], b[i])) return false;
  }
  return true;
}

export function shallowEqual(a: { [x: string]: any }, b: { [x: string]: any }): boolean {
  const k1 = Object.keys(a);
  const k2 = Object.keys(b);
  if (k1.length != k2.length) {
    return false;
  }
  let key: string;
  for (let i = 0; i < k1.length; i++) {
    key = k1[i];
    if (a[key] !== b[key]) {
      return false;
    }
  }
  return true;
}

export function forEach<K, V>(map: { [key: string]: V }, callback: (v: V, k: string) => void): void {
  for (const prop in map) {
    if (map.hasOwnProperty(prop)) {
      callback(map[prop], prop);
    }
  }
}

export function last<T>(a: T[]): T | null {
  return a.length > 0 ? a[a.length - 1] : null;
}