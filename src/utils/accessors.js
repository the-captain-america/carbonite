import {
  pipe,
  map,
  toPairs,
  fromPairs,
  split,
  append,
  concat,
  lensPath,
  set as setter,
  over,
  view,
  when,
  type,
  equals
} from "ramda";

const isString = pipe(
  type,
  equals("String")
);

export const lensFrom = pipe(
  when(isString).then(split(".")),
  lensPath
);

export const set = (path, newValue) => setter(lensFrom(path), newValue);
export const setWith = (setterFn, path) => over(lensFrom(path), setterFn);
export const get = pipe(
  lensFrom,
  view
);

export const addToList = (path, newValue) =>
  setWith((currentValue = []) => append(newValue, currentValue), path);

export const toggle = path => setWith(currentValue => !currentValue, path);

export const concatWithList = (path, newValues) =>
  setWith((currentValue = []) => concat(currentValue, newValues), path);

export const mapPairs = mapHandler =>
  pipe(
    toPairs,
    map(mapHandler),
    fromPairs
  );

export const mapKeys = keyMapper =>
  mapPairs(([key, value]) => [keyMapper(key), value]);
export const mapKeyAndValue = (keyMapper, valueMapper) =>
  mapPairs(([key, value]) => [keyMapper(key), valueMapper(value)]);
