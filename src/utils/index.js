/* eslint-disable */
import {
	curry,
	curryN,
	pipe,
	prop,
	keys,
	compose,
	type,
	isNil,
	complement,
	toLower,
	toUpper,
	toPairs,
	anyPass,
	allPass,
	propOr,
	contains,
	map,
	reduce,
	useWith,
	has,
	path,
	join,
	splitAt,
	split,
	flip,
	find,
	nth,
	head,
	last
} from 'ramda';

export const isType = curry(
	(expected, value) => toLower(type(value)) === toLower(expected)
);

export const isArray = isType('array');
export const isString = isType('string');
export const isFunction = isType('function');
export const isObjectLiteral = isType('object');

export const isDefined = complement(isNil);
export const isNotDefined = isNil;

export const isNotArray = complement(isArray);
export const isNotString = complement(isString);
export const isNotFunction = complement(isFunction);
export const isNotObjectLiteral = complement(isObjectLiteral);
export const firstItem = head;

export const includes = curry((comparator, value) =>
	value.includes(comparator)
);

export const findOneOf = lookingFor => itemsToSearch =>
	find(flip(includes)(itemsToSearch))(lookingFor);

// const activeSize rest |> matchPropToValue(choices, 'small');

export const matchPropToValue = (choices, defaultChoice) => toMatchAgainst =>
	prop(findOneOf(keys(choices))(keys(toMatchAgainst)), choices) ??
	defaultChoice;

const alice = {
	name: 'ALICE',
	age: 101
};

const favorite = prop('favoriteLibrary');
const favoriteWithDefault = propOr('Ramda', 'favoriteLibrary');

console.log(favorite(alice)); //=> undefined
console.log(favoriteWithDefault(alice)); //=> 'Ramda'

// Usage::
const choices = {
	small: 0,
	medium: 5,
	large: 10
};

console.log('choices :::', choices);
