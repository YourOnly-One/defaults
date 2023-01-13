/* Polyfill service v3.111.0
 * For detailed credits and licence information see https://github.com/financial-times/polyfill-service.
 *
 * Features requested: Intl,default,es2015,es2016,es2017,es2018,es2019,es2020,es2021,es2022,es5,es6,es7
 *
 * - _ESAbstract.ArrayCreate, License: CC0 (required by "Array.prototype.flatMap", "_ESAbstract.ArraySpeciesCreate", "es2019")
 * - _ESAbstract.Call, License: CC0 (required by "Object.fromEntries", "_ESAbstract.ToPropertyKey", "_ESAbstract.ToPrimitive", "_ESAbstract.OrdinaryToPrimitive", "es2019")
 * - _ESAbstract.Get, License: CC0 (required by "Object.fromEntries", "_ESAbstract.ToPropertyKey", "_ESAbstract.ToPrimitive", "_ESAbstract.OrdinaryToPrimitive", "es2019")
 * - _ESAbstract.HasOwnProperty, License: CC0 (required by "Array.from", "Map", "Object.create", "Object.defineProperties", "Object.getOwnPropertyDescriptor", "es6")
 * - _ESAbstract.HasProperty, License: CC0 (required by "Array.prototype.flatMap", "_ESAbstract.FlattenIntoArray", "es2019")
 * - _ESAbstract.IsArray, License: CC0 (required by "Array.prototype.flatMap", "_ESAbstract.FlattenIntoArray", "es2019")
 * - _ESAbstract.IsCallable, License: CC0 (required by "Object.fromEntries", "_ESAbstract.ToPropertyKey", "_ESAbstract.ToPrimitive", "_ESAbstract.OrdinaryToPrimitive", "es2019")
 * - _ESAbstract.RequireObjectCoercible, License: CC0 (required by "String.prototype.trimStart", "_ESAbstract.TrimString", "es2019")
 * - _ESAbstract.SameValueNonNumber, License: CC0 (required by "Intl.DateTimeFormat.~locale.en", "Intl.NumberFormat.~locale.en", "Intl.PluralRules.~locale.en", "Intl.PluralRules", "WeakMap", "_ESAbstract.SameValue", "Intl")
 * - _ESAbstract.ToBoolean, License: CC0 (required by "String.prototype.replaceAll", "_ESAbstract.IsRegExp", "es2021")
 * - _ESAbstract.ToNumber, License: CC0 (required by "TypedArray.prototype.at", "_ESAbstract.ToIntegerOrInfinity", "es2022")
 * - _ESAbstract.ToIntegerOrInfinity, License: CC0 (required by "TypedArray.prototype.at", "es2022")
 * - _ESAbstract.ToObject, License: CC0 (required by "String.prototype.matchAll", "_ESAbstract.Invoke", "_ESAbstract.GetV", "es2020")
 * - _ESAbstract.GetV, License: CC0 (required by "String.prototype.matchAll", "_ESAbstract.Invoke", "es2020")
 * - _ESAbstract.GetMethod, License: CC0 (required by "Object.fromEntries", "_ESAbstract.ToPropertyKey", "_ESAbstract.ToPrimitive", "es2019")
 * - _ESAbstract.Invoke, License: CC0 (required by "String.prototype.matchAll", "es2020")
 * - _ESAbstract.ToUint32, License: CC0 (required by "Math.imul", "es6")
 * - _ESAbstract.Type, License: CC0 (required by "Object.fromEntries", "_ESAbstract.ToPropertyKey", "_ESAbstract.ToPrimitive", "_ESAbstract.OrdinaryToPrimitive", "es2019")
 * - _ESAbstract.GetPrototypeFromConstructor, License: CC0 (required by "RegExp.prototype.@@matchAll", "_ESAbstract.Construct", "_ESAbstract.OrdinaryCreateFromConstructor", "es2020")
 * - _ESAbstract.GetSubstitution, License: CC0 (required by "String.prototype.replaceAll", "es2021")
 * - _ESAbstract.IsConstructor, License: CC0 (required by "RegExp.prototype.@@matchAll", "_ESAbstract.SpeciesConstructor", "es2020")
 * - _ESAbstract.IsRegExp, License: CC0 (required by "String.prototype.replaceAll", "es2021")
 * - _ESAbstract.IteratorClose, License: CC0 (required by "Object.fromEntries", "_ESAbstract.AddEntriesFromIterable", "es2019")
 * - _ESAbstract.IteratorComplete, License: CC0 (required by "WeakSet", "_ESAbstract.IteratorStep", "es6")
 * - _ESAbstract.IteratorNext, License: CC0 (required by "WeakSet", "_ESAbstract.IteratorStep", "es6")
 * - _ESAbstract.IteratorStep, License: CC0 (required by "Promise.any", "_ESAbstract.IterableToList", "es2021")
 * - _ESAbstract.IteratorValue, License: CC0 (required by "Promise.any", "_ESAbstract.IterableToList", "es2021")
 * - _ESAbstract.OrdinaryToPrimitive, License: CC0 (required by "Object.fromEntries", "_ESAbstract.ToPropertyKey", "_ESAbstract.ToPrimitive", "es2019")
 * - _ESAbstract.RegExpExec, License: CC0 (required by "RegExp.prototype.@@matchAll", "_ESAbstract.CreateRegExpStringIterator", "es2020")
 * - _ESAbstract.SameValue, License: CC0 (required by "Intl.DateTimeFormat.~locale.en", "Intl.NumberFormat.~locale.en", "Intl.PluralRules.~locale.en", "Intl.PluralRules", "WeakMap", "Intl")
 * - _ESAbstract.SameValueZero, License: CC0 (required by "Object.getOwnPropertyNames", "Array.prototype.includes", "es5")
 * - _ESAbstract.SpeciesConstructor, License: CC0 (required by "RegExp.prototype.@@matchAll", "es2020")
 * - _ESAbstract.StringIndexOf, License: CC0 (required by "String.prototype.replaceAll", "es2021")
 * - _ESAbstract.ToInteger, License: CC0 (required by "RegExp.prototype.@@matchAll", "_ESAbstract.ToLength", "es2020")
 * - _ESAbstract.ToLength, License: CC0 (required by "Array.prototype.at", "_ESAbstract.LengthOfArrayLike", "es2022")
 * - _ESAbstract.LengthOfArrayLike, License: CC0 (required by "Array.prototype.at", "es2022")
 * - _ESAbstract.ToPrimitive, License: CC0 (required by "Object.fromEntries", "_ESAbstract.ToPropertyKey", "es2019")
 * - _ESAbstract.ToString, License: CC0 (required by "RegExp.prototype.@@matchAll", "_ESAbstract.CreateRegExpStringIterator", "es2020")
 * - _ESAbstract.ToPropertyKey, License: CC0 (required by "Object.fromEntries", "es2019")
 * - _ESAbstract.TrimString, License: CC0 (required by "String.prototype.trimStart", "es2019")
 * - _ESAbstract.UTF16Decode, License: CC0 (required by "String.prototype.codePointAt", "es6")
 * - _ESAbstract.UTF16Encoding, License: CC0 (required by "String.fromCodePoint", "es6")
 * - ArrayBuffer, License: MIT (required by "TypedArray.prototype.at", "es2022")
 * - atob, License: MIT (required by "default")
 * - Date.now, License: CC0 (required by "requestAnimationFrame", "default")
 * - Date.prototype.toISOString, License: CC0 (required by "es5")
 * - document, License: CC0 (required by "Element.prototype.replaceWith", "_mutation", "default")
 * - ~html5-elements, License: MIT (required by "default")
 * - Element, License: CC0 (required by "Element.prototype.replaceWith", "_mutation", "default")
 * - _mutation, License: CC0 (required by "Element.prototype.replaceWith", "default")
 * - document.querySelector, License: CC0 (required by "Element.prototype.closest", "Element.prototype.matches", "default")
 * - Element.prototype.append, License: CC0 (required by "default")
 * - Element.prototype.cloneNode, License: CC0 (required by "default")
 * - Element.prototype.matches, License: CC0 (required by "Element.prototype.closest", "default")
 * - Element.prototype.closest, License: CC0 (required by "default")
 * - Element.prototype.prepend, License: CC0 (required by "default")
 * - Element.prototype.remove, License: CC0 (required by "default")
 * - Element.prototype.replaceWith, License: CC0 (required by "default")
 * - JSON, License: MIT (required by "default")
 * - Node.prototype.contains, License: CC0 (required by "default")
 * - Node.prototype.isSameNode, License: CC0 (required by "default")
 * - Object.defineProperty, License: CC0 (required by "Object.getOwnPropertyDescriptors", "Reflect.ownKeys", "Reflect", "es2017")
 * - _ESAbstract.CreateDataProperty, License: CC0 (required by "Array.from", "Set", "_ESAbstract.CreateIterResultObject", "es6")
 * - _ESAbstract.CreateDataPropertyOrThrow, License: CC0 (required by "Array.prototype.flatMap", "_ESAbstract.FlattenIntoArray", "es2019")
 * - _ESAbstract.FlattenIntoArray, License: CC0 (required by "Array.prototype.flatMap", "es2019")
 * - _ESAbstract.CreateIterResultObject, License: CC0 (required by "RegExp.prototype.@@matchAll", "_ESAbstract.CreateRegExpStringIterator", "es2020")
 * - _ESAbstract.CreateMethodProperty, License: CC0 (required by "RegExp.prototype.@@matchAll", "_ESAbstract.CreateRegExpStringIterator", "es2020")
 * - Array.isArray, License: CC0 (required by "Promise.any", "es2021")
 * - Array.prototype.at, License: CC0 (required by "es2022")
 * - Array.prototype.copyWithin, License: MIT (required by "es6")
 * - Array.prototype.every, License: CC0 (required by "es5")
 * - Array.prototype.fill, License: CC0 (required by "es6")
 * - Array.prototype.find, License: CC0 (required by "es6")
 * - Array.prototype.findIndex, License: CC0 (required by "es6")
 * - Array.prototype.forEach, License: CC0 (required by "DOMTokenList", "_DOMTokenList", "default")
 * - _DOMTokenList, License: ISC (required by "DOMTokenList", "default")
 * - DOMTokenList, License: CC0 (required by "Element.prototype.classList", "default")
 * - Array.prototype.includes, License: MIT (required by "Object.getOwnPropertyNames", "es5")
 * - Array.prototype.indexOf, License: CC0 (required by "Object.getOwnPropertyNames", "es5")
 * - Element.prototype.after, License: CC0 (required by "default")
 * - Element.prototype.before, License: CC0 (required by "default")
 * - Array.prototype.lastIndexOf, License: CC0 (required by "Intl.DateTimeFormat.~locale.en", "Intl.NumberFormat.~locale.en", "Intl.PluralRules.~locale.en", "Intl.PluralRules", "Intl")
 * - Array.prototype.reduce, License: CC0 (required by "Intl.DateTimeFormat.~locale.en", "Intl.NumberFormat.~locale.en", "Intl.PluralRules.~locale.en", "Intl.PluralRules", "Intl.getCanonicalLocales", "Intl")
 * - Array.prototype.reduceRight, License: CC0 (required by "es5")
 * - Array.prototype.some, License: CC0 (required by "es5")
 * - Function.prototype.bind, License: MIT (required by "String.prototype.@@iterator", "_StringIterator", "_Iterator", "es6")
 * - Math.acosh, License: CC0 (required by "es6")
 * - Math.asinh, License: CC0 (required by "es6")
 * - Math.atanh, License: CC0 (required by "es6")
 * - Math.cbrt, License: CC0 (required by "es6")
 * - Math.clz32, License: CC0 (required by "es6")
 * - Math.cosh, License: CC0 (required by "es6")
 * - Math.expm1, License: CC0 (required by "es6")
 * - Math.fround, License: CC0 (required by "es6")
 * - Math.hypot, License: CC0 (required by "es6")
 * - Math.imul, License: CC0 (required by "es6")
 * - Math.log10, License: CC0 (required by "es6")
 * - Math.log1p, License: CC0 (required by "es6")
 * - Math.log2, License: CC0 (required by "es6")
 * - Math.sign, License: CC0 (required by "es6")
 * - Math.sinh, License: CC0 (required by "es6")
 * - Math.tanh, License: CC0 (required by "es6")
 * - Math.trunc, License: CC0 (required by "es6")
 * - Number.isFinite, License: MIT (required by "es6")
 * - Number.isInteger, License: MIT (required by "es6")
 * - Number.isNaN, License: MIT (required by "es6")
 * - Number.isSafeInteger, License: MIT (required by "es6")
 * - Element.prototype.classList, License: ISC (required by "default")
 * - Function.prototype.name, License: MIT (required by "es6")
 * - Number.Epsilon, License: MIT (required by "es6")
 * - Number.MAX_SAFE_INTEGER, License: MIT (required by "RegExp.prototype.@@matchAll", "_ESAbstract.CreateRegExpStringIterator", "_ESAbstract.AdvanceStringIndex", "es2020")
 * - Number.MIN_SAFE_INTEGER, License: MIT (required by "es6")
 * - Object.freeze, License: CC0 (required by "Symbol.unscopables", "Symbol", "es6")
 * - Object.getOwnPropertyDescriptor, License: CC0 (required by "Object.entries", "_ESAbstract.EnumerableOwnProperties", "es2017")
 * - Object.getPrototypeOf, License: CC0 (required by "RegExp.prototype.@@matchAll", "_ESAbstract.Construct", "_ESAbstract.OrdinaryCreateFromConstructor", "es2020")
 * - Object.is, License: CC0 (required by "es6")
 * - Object.isExtensible, License: CC0 (required by "Array.from", "Map", "es6")
 * - Object.keys, License: MIT (required by "Object.entries", "_ESAbstract.EnumerableOwnProperties", "es2017")
 * - _ESAbstract.EnumerableOwnProperties, License: CC0 (required by "Object.entries", "es2017")
 * - Object.entries, License: CC0 (required by "es2017")
 * - Object.assign, License: CC0 (required by "String.prototype.@@iterator", "_StringIterator", "_Iterator", "es6")
 * - Object.defineProperties, License: CC0 (required by "String.prototype.@@iterator", "_StringIterator", "_Iterator", "es6")
 * - location.origin, License: CC0 (required by "default")
 * - Object.create, License: CC0 (required by "String.prototype.@@iterator", "_StringIterator", "es6")
 * - _ESAbstract.OrdinaryCreateFromConstructor, License: CC0 (required by "RegExp.prototype.@@matchAll", "_ESAbstract.Construct", "es2020")
 * - _ESAbstract.Construct, License: CC0 (required by "Array.prototype.flatMap", "_ESAbstract.ArraySpeciesCreate", "es2019")
 * - _ESAbstract.ArraySpeciesCreate, License: CC0 (required by "Array.prototype.flatMap", "es2019")
 * - Array.prototype.filter, License: CC0 (required by "Symbol.unscopables", "Symbol", "es6")
 * - Array.prototype.flat, License: CC0 (required by "es2019")
 * - Array.prototype.flatMap, License: CC0 (required by "es2019")
 * - Array.prototype.map, License: CC0 (required by "Promise.any", "es2021")
 * - Array.prototype.sort, License: MIT (required by "Intl.DateTimeFormat.~locale.en", "Intl.NumberFormat.~locale.en", "Intl.PluralRules.~locale.en", "Intl.PluralRules", "Intl.getCanonicalLocales", "Intl")
 * - Intl.getCanonicalLocales, License: MIT (required by "Intl.DateTimeFormat.~locale.en", "Intl.NumberFormat.~locale.en", "Intl.PluralRules.~locale.en", "Intl.PluralRules", "Intl")
 * - Array.of, License: CC0 (required by "es6")
 * - DocumentFragment, License: CC0 (required by "DocumentFragment.prototype.prepend", "default")
 * - DocumentFragment.prototype.append, License: CC0 (required by "default")
 * - DocumentFragment.prototype.prepend, License: CC0 (required by "default")
 * - Object.getOwnPropertyNames, License: CC0 (required by "Object.getOwnPropertyDescriptors", "Reflect.ownKeys", "es2017")
 * - Object.seal, License: MIT (required by "es6")
 * - Object.setPrototypeOf, License: MIT (required by "String.prototype.@@iterator", "_StringIterator", "es6")
 * - Object.values, License: CC0 (required by "es2017")
 * - Reflect, License: CC0 (required by "Object.getOwnPropertyDescriptors", "Reflect.ownKeys", "es2017")
 * - RegExp.prototype.flags, License: MIT (required by "String.prototype.replaceAll", "es2021")
 * - requestAnimationFrame, License: MIT (required by "default")
 * - String.fromCodePoint, License: MIT (required by "es6")
 * - String.prototype.at, License: CC0 (required by "es2022")
 * - String.prototype.codePointAt, License: MIT (required by "RegExp.prototype.@@matchAll", "_ESAbstract.CreateRegExpStringIterator", "_ESAbstract.AdvanceStringIndex", "es2020")
 * - _ESAbstract.AdvanceStringIndex, License: CC0 (required by "RegExp.prototype.@@matchAll", "_ESAbstract.CreateRegExpStringIterator", "es2020")
 * - String.prototype.endsWith, License: CC0 (required by "es6")
 * - String.prototype.includes, License: CC0 (required by "Array.prototype.@@iterator", "Array.prototype.values", "_ArrayIterator", "es6")
 * - String.prototype.padEnd, License: CC0 (required by "es7")
 * - String.prototype.padStart, License: CC0 (required by "es7")
 * - String.prototype.repeat, License: CC0 (required by "es6")
 * - String.prototype.startsWith, License: CC0 (required by "es6")
 * - String.prototype.trim, License: CC0 (required by "Number.parseInt", "es6")
 * - Number.parseFloat, License: MIT (required by "es6")
 * - Number.parseInt, License: MIT (required by "es6")
 * - String.prototype.trimEnd, License: CC0 (required by "es2019")
 * - String.prototype.trimStart, License: CC0 (required by "es2019")
 * - Symbol, License: MIT (required by "String.prototype.@@iterator", "_StringIterator", "_Iterator", "es6")
 * - Reflect.ownKeys, License: CC0 (required by "Object.getOwnPropertyDescriptors", "es2017")
 * - Object.getOwnPropertyDescriptors, License: CC0 (required by "es2017")
 * - Symbol.asyncIterator, License: MIT (required by "es2018")
 * - Symbol.hasInstance, License: MIT (required by "es6")
 * - Symbol.isConcatSpreadable, License: MIT (required by "es6")
 * - Symbol.iterator, License: MIT (required by "String.prototype.@@iterator", "_StringIterator", "_Iterator", "es6")
 * - _ESAbstract.GetIterator, License: CC0 (required by "Promise.any", "_ESAbstract.IterableToList", "es2021")
 * - _ESAbstract.AddEntriesFromIterable, License: CC0 (required by "Object.fromEntries", "es2019")
 * - _ESAbstract.IterableToList, License: CC0 (required by "Promise.any", "es2021")
 * - AggregateError, License: MIT (required by "Promise.any", "es2021")
 * - Symbol.match, License: MIT (required by "es6")
 * - Symbol.matchAll, License: MIT (required by "String.prototype.matchAll", "es2020")
 * - Symbol.replace, License: MIT (required by "String.prototype.replaceAll", "es2021")
 * - String.prototype.replaceAll, License: MIT (required by "es2021")
 * - Symbol.search, License: MIT (required by "es6")
 * - Symbol.species, License: MIT (required by "Array.from", "Set", "es6")
 * - Map, License: CC0 (required by "Array.from", "es6")
 * - Set, License: CC0 (required by "Array.from", "es6")
 * - Array.from, License: CC0 (required by "URL", "default")
 * - Symbol.split, License: MIT (required by "es6")
 * - Symbol.toPrimitive, License: MIT (required by "es6")
 * - Symbol.toStringTag, License: MIT (required by "String.prototype.@@iterator", "_StringIterator", "_Iterator", "es6")
 * - _ESAbstract.CreateRegExpStringIterator, License: CC0 (required by "RegExp.prototype.@@matchAll", "es2020")
 * - RegExp.prototype.@@matchAll, License: MIT (required by "String.prototype.matchAll", "es2020")
 * - String.prototype.matchAll, License: MIT (required by "es2020")
 * - _Iterator, License: MIT (required by "String.prototype.@@iterator", "_StringIterator", "es6")
 * - _ArrayIterator, License: MIT (required by "Array.prototype.@@iterator", "Array.prototype.values", "es6")
 * - Array.prototype.entries, License: CC0 (required by "es6")
 * - Array.prototype.keys, License: CC0 (required by "es6")
 * - Array.prototype.values, License: MIT (required by "Array.prototype.@@iterator", "es6")
 * - Array.prototype.@@iterator, License: CC0 (required by "Object.fromEntries", "es2019")
 * - Object.fromEntries, License: CC0 (required by "es2019")
 * - _StringIterator, License: MIT (required by "String.prototype.@@iterator", "es6")
 * - String.prototype.@@iterator, License: CC0 (required by "es6")
 * - Promise, License: MIT (required by "Promise.any", "es2021")
 * - Promise.allSettled, License: MIT (required by "es2020")
 * - Promise.any, License: MIT (required by "es2021")
 * - Promise.prototype.finally, License: MIT (required by "es2018")
 * - Symbol.unscopables, License: MIT (required by "es6")
 * - TypedArray.prototype.at, License: CC0 (required by "es2022")
 * - URL, License: CC0-1.0 (required by "default")
 * - WeakMap, License: MIT (required by "Intl.DateTimeFormat.~locale.en", "Intl.NumberFormat.~locale.en", "Intl.PluralRules.~locale.en", "Intl.PluralRules", "Intl")
 * - Intl.Locale, License: MIT (required by "Intl.DateTimeFormat.~locale.en", "Intl.NumberFormat.~locale.en", "Intl.PluralRules.~locale.en", "Intl.PluralRules", "Intl")
 * - Intl.PluralRules, License: MIT (required by "Intl.DateTimeFormat.~locale.en", "Intl.NumberFormat.~locale.en", "Intl.PluralRules.~locale.en", "Intl")
 * - Intl.NumberFormat, License: MIT (required by "Intl.DateTimeFormat.~locale.en", "Intl.NumberFormat.~locale.en", "Intl")
 * - Intl.DateTimeFormat, License: MIT (required by "Intl.DateTimeFormat.~locale.en", "Intl")
 * - Intl.PluralRules.~locale.en, License: MIT (required by "Intl.DateTimeFormat.~locale.en", "Intl.NumberFormat.~locale.en", "Intl")
 * - Intl.NumberFormat.~locale.en, License: MIT (required by "Intl.DateTimeFormat.~locale.en", "Intl")
 * - Intl.DateTimeFormat.~locale.en, License: MIT (required by "Intl")
 * - WeakSet, License: MIT (required by "es6")
 * - Window, License: CC0 (required by "Event.hashchange", "Event", "default")
 * - Event, License: CC0 (required by "XMLHttpRequest", "default")
 * - CustomEvent, License: CC0 (required by "document.visibilityState", "default")
 * - document.visibilityState, License: CC0 (required by "default")
 * - Event.focusin, License: CC0 (required by "default")
 * - Event.hashchange, License: CC0 (required by "default")
 * - XMLHttpRequest, License: CC0 (required by "default") */

(function(self, undefined) {

// _ESAbstract.ArrayCreate
// 9.4.2.2. ArrayCreate ( length [ , proto ] )
function ArrayCreate(length /* [, proto] */) { // eslint-disable-line no-unused-vars
	// 1. Assert: length is an integer Number ≥ 0.
	// 2. If length is -0, set length to +0.
	if (1 / length === -Infinity) {
		length = 0;
	}
	// 3. If length>2^32-1, throw a RangeError exception.
	if (length > (Math.pow(2, 32) - 1)) {
		throw new RangeError('Invalid array length');
	}
	// 4. If proto is not present, set proto to the intrinsic object %ArrayPrototype%.
	// 5. Let A be a newly created Array exotic object.
	var A = [];
	// 6. Set A's essential internal methods except for [[DefineOwnProperty]] to the default ordinary object definitions specified in 9.1.
	// 7. Set A.[[DefineOwnProperty]] as specified in 9.4.2.1.
	// 8. Set A.[[Prototype]] to proto.
	// 9. Set A.[[Extensible]] to true.
	// 10. Perform ! OrdinaryDefineOwnProperty(A, "length", PropertyDescriptor{[[Value]]: length, [[Writable]]: true, [[Enumerable]]: false, [[Configurable]]: false}).
	A.length = length;
	// 11. Return A.
	return A;
}

// _ESAbstract.Call
/* global IsCallable */
// 7.3.12. Call ( F, V [ , argumentsList ] )
function Call(F, V /* [, argumentsList] */) { // eslint-disable-line no-unused-vars
	// 1. If argumentsList is not present, set argumentsList to a new empty List.
	var argumentsList = arguments.length > 2 ? arguments[2] : [];
	// 2. If IsCallable(F) is false, throw a TypeError exception.
	if (IsCallable(F) === false) {
		throw new TypeError(Object.prototype.toString.call(F) + 'is not a function.');
	}
	// 3. Return ? F.[[Call]](V, argumentsList).
	return F.apply(V, argumentsList);
}

// _ESAbstract.Get
// 7.3.1. Get ( O, P )
function Get(O, P) { // eslint-disable-line no-unused-vars
	// 1. Assert: Type(O) is Object.
	// 2. Assert: IsPropertyKey(P) is true.
	// 3. Return ? O.[[Get]](P, O).
	return O[P];
}

// _ESAbstract.HasOwnProperty
// 7.3.11 HasOwnProperty (O, P)
function HasOwnProperty(o, p) { // eslint-disable-line no-unused-vars
	// 1. Assert: Type(O) is Object.
	// 2. Assert: IsPropertyKey(P) is true.
	// 3. Let desc be ? O.[[GetOwnProperty]](P).
	// 4. If desc is undefined, return false.
	// 5. Return true.
	// Polyfill.io - As we expect user agents to support ES3 fully we can skip the above steps and use Object.prototype.hasOwnProperty to do them for us.
	return Object.prototype.hasOwnProperty.call(o, p);
}

// _ESAbstract.HasProperty
// 7.3.10. HasProperty ( O, P )
function HasProperty(O, P) { // eslint-disable-line no-unused-vars
	// Assert: Type(O) is Object.
	// Assert: IsPropertyKey(P) is true.
	// Return ? O.[[HasProperty]](P).
	return P in O;
}

// _ESAbstract.IsArray
// 7.2.2. IsArray ( argument )
function IsArray(argument) { // eslint-disable-line no-unused-vars
	// 1. If Type(argument) is not Object, return false.
	// 2. If argument is an Array exotic object, return true.
	// 3. If argument is a Proxy exotic object, then
		// a. If argument.[[ProxyHandler]] is null, throw a TypeError exception.
		// b. Let target be argument.[[ProxyTarget]].
		// c. Return ? IsArray(target).
	// 4. Return false.

	// Polyfill.io - We can skip all the above steps and check the string returned from Object.prototype.toString().
	return Object.prototype.toString.call(argument) === '[object Array]';
}

// _ESAbstract.IsCallable
// 7.2.3. IsCallable ( argument )
function IsCallable(argument) { // eslint-disable-line no-unused-vars
	// 1. If Type(argument) is not Object, return false.
	// 2. If argument has a [[Call]] internal method, return true.
	// 3. Return false.

	// Polyfill.io - Only function objects have a [[Call]] internal method. This means we can simplify this function to check that the argument has a type of function.
	return typeof argument === 'function';
}

// _ESAbstract.RequireObjectCoercible
// 7.2.1. RequireObjectCoercible ( argument )
// The abstract operation ToObject converts argument to a value of type Object according to Table 12:
// Table 12: ToObject Conversions
/*
|----------------------------------------------------------------------------------------------------------------------------------------------------|
| Argument Type | Result                                                                                                                             |
|----------------------------------------------------------------------------------------------------------------------------------------------------|
| Undefined     | Throw a TypeError exception.                                                                                                       |
| Null          | Throw a TypeError exception.                                                                                                       |
| Boolean       | Return argument.                                                                                                                   |
| Number        | Return argument.                                                                                                                   |
| String        | Return argument.                                                                                                                   |
| Symbol        | Return argument.                                                                                                                   |
| Object        | Return argument.                                                                                                                   |
|----------------------------------------------------------------------------------------------------------------------------------------------------|
*/
function RequireObjectCoercible(argument) { // eslint-disable-line no-unused-vars
	if (argument === null || argument === undefined) {
		throw TypeError(Object.prototype.toString.call(argument) + ' is not coercible to Object.');
	}
	return argument;
}

// _ESAbstract.SameValueNonNumber
// 7.2.12. SameValueNonNumber ( x, y )
function SameValueNonNumber(x, y) { // eslint-disable-line no-unused-vars
	// 1. Assert: Type(x) is not Number.
	// 2. Assert: Type(x) is the same as Type(y).
	// 3. If Type(x) is Undefined, return true.
	// 4. If Type(x) is Null, return true.
	// 5. If Type(x) is String, then
		// a. If x and y are exactly the same sequence of code units (same length and same code units at corresponding indices), return true; otherwise, return false.
	// 6. If Type(x) is Boolean, then
		// a. If x and y are both true or both false, return true; otherwise, return false.
	// 7. If Type(x) is Symbol, then
		// a. If x and y are both the same Symbol value, return true; otherwise, return false.
	// 8. If x and y are the same Object value, return true. Otherwise, return false.

	// Polyfill.io - We can skip all above steps because the === operator does it all for us.
	return x === y;
}

// _ESAbstract.ToBoolean
// 7.1.2. ToBoolean ( argument )
// The abstract operation ToBoolean converts argument to a value of type Boolean according to Table 9:
/*
--------------------------------------------------------------------------------------------------------------
| Argument Type | Result                                                                                     |
--------------------------------------------------------------------------------------------------------------
| Undefined     | Return false.                                                                              |
| Null          | Return false.                                                                              |
| Boolean       | Return argument.                                                                           |
| Number        | If argument is +0, -0, or NaN, return false; otherwise return true.                        |
| String        | If argument is the empty String (its length is zero), return false; otherwise return true. |
| Symbol        | Return true.                                                                               |
| Object        | Return true.                                                                               |
--------------------------------------------------------------------------------------------------------------
*/
function ToBoolean(argument) { // eslint-disable-line no-unused-vars
	return Boolean(argument);
}

// _ESAbstract.ToNumber
// 7.1.3. ToNumber ( argument )
function ToNumber(argument) { // eslint-disable-line no-unused-vars
	return Number(argument);
}

// _ESAbstract.ToIntegerOrInfinity
/* global ToNumber */
// 7.1.5. ToIntegerOrInfinity ( argument )
function ToIntegerOrInfinity(argument) { // eslint-disable-line no-unused-vars
	// 1. Let number be ? ToNumber(argument).
	var number = ToNumber(argument);
	// 2. If number is NaN, +0𝔽, or -0𝔽, return 0.
	if (isNaN(number) || number === 0 || 1/number === -Infinity) return 0;
	// 3. If number is +∞𝔽, return +∞.
	if (number === Infinity) return Infinity;
	// 4. If number is -∞𝔽, return -∞.
	if (number === -Infinity) return -Infinity;
	// 5. Let integer be floor(abs(ℝ(number))).
	var integer = Math.floor(Math.abs(number));
	// 6. If number < +0𝔽, set integer to -integer.
	if (number < 0) integer = -integer;
	// 7. Return integer.
	return integer;
}

// _ESAbstract.ToObject
// 7.1.13 ToObject ( argument )
// The abstract operation ToObject converts argument to a value of type Object according to Table 12:
// Table 12: ToObject Conversions
/*
|----------------------------------------------------------------------------------------------------------------------------------------------------|
| Argument Type | Result                                                                                                                             |
|----------------------------------------------------------------------------------------------------------------------------------------------------|
| Undefined     | Throw a TypeError exception.                                                                                                       |
| Null          | Throw a TypeError exception.                                                                                                       |
| Boolean       | Return a new Boolean object whose [[BooleanData]] internal slot is set to argument. See 19.3 for a description of Boolean objects. |
| Number        | Return a new Number object whose [[NumberData]] internal slot is set to argument. See 20.1 for a description of Number objects.    |
| String        | Return a new String object whose [[StringData]] internal slot is set to argument. See 21.1 for a description of String objects.    |
| Symbol        | Return a new Symbol object whose [[SymbolData]] internal slot is set to argument. See 19.4 for a description of Symbol objects.    |
| Object        | Return argument.                                                                                                                   |
|----------------------------------------------------------------------------------------------------------------------------------------------------|
*/
function ToObject(argument) { // eslint-disable-line no-unused-vars
	if (argument === null || argument === undefined) {
		throw TypeError();
	}
	return Object(argument);
}

// _ESAbstract.GetV
/* global ToObject */
// 7.3.2 GetV (V, P)
function GetV(v, p) { // eslint-disable-line no-unused-vars
	// 1. Assert: IsPropertyKey(P) is true.
	// 2. Let O be ? ToObject(V).
	var o = ToObject(v);
	// 3. Return ? O.[[Get]](P, V).
	return o[p];
}

// _ESAbstract.GetMethod
/* global GetV, IsCallable */
// 7.3.9. GetMethod ( V, P )
function GetMethod(V, P) { // eslint-disable-line no-unused-vars
	// 1. Assert: IsPropertyKey(P) is true.
	// 2. Let func be ? GetV(V, P).
	var func = GetV(V, P);
	// 3. If func is either undefined or null, return undefined.
	if (func === null || func === undefined) {
		return undefined;
	}
	// 4. If IsCallable(func) is false, throw a TypeError exception.
	if (IsCallable(func) === false) {
		throw new TypeError('Method not callable: ' + P);
	}
	// 5. Return func.
	return func;
}

// _ESAbstract.Invoke
/* global GetV, Call */
// 7.3.18. Invoke ( V, P [ , argumentsList ] )
function Invoke(V, P /* [ , argumentsList ] */) { // eslint-disable-line no-unused-vars
	// 1. Assert: IsPropertyKey(P) is true.
	// 2. If argumentsList is not present, set argumentsList to a new empty List.
	var argumentsList = arguments.length > 2 ? arguments[2] : [];
	// 3. Let func be ? GetV(V, P).
	var func = GetV(V, P);
	// 4. Return ? Call(func, V, argumentsList).
	return Call(func, V, argumentsList);
}

// _ESAbstract.ToUint32
// 7.1.6. ToUint32 ( argument )
function ToUint32(argument) { // eslint-disable-line no-unused-vars
	// 1. Let number be ? ToNumber(argument).
	var number = Number(argument);
	// 2. If number is NaN, +0, -0, +∞, or -∞, return +0.
	if (isNaN(number) || 1/number === Infinity || 1/number === -Infinity || number === Infinity || number === -Infinity) {
		return 0;
	}
	// 3. Let int be the mathematical value that is the same sign as number and whose magnitude is floor(abs(number)).
	var int = ((number < 0) ? -1 : 1) * Math.floor(Math.abs(number));
	// 4. Let int32bit be int modulo 2^32.
	var int32bit = int >>> 0;
	// 5. Return int32bit.
	return int32bit;
}

// _ESAbstract.Type
// "Type(x)" is used as shorthand for "the type of x"...
function Type(x) { // eslint-disable-line no-unused-vars
	switch (typeof x) {
		case 'undefined':
			return 'undefined';
		case 'boolean':
			return 'boolean';
		case 'number':
			return 'number';
		case 'string':
			return 'string';
		case 'symbol':
			return 'symbol';
		default:
			// typeof null is 'object'
			if (x === null) return 'null';
			// Polyfill.io - This is here because a Symbol polyfill will have a typeof `object`.
			if ('Symbol' in self && (x instanceof self.Symbol || x.constructor === self.Symbol)) return 'symbol';

			return 'object';
	}
}

// _ESAbstract.GetPrototypeFromConstructor
/* global Get, Type */
// 9.1.14. GetPrototypeFromConstructor ( constructor, intrinsicDefaultProto )
function GetPrototypeFromConstructor(constructor, intrinsicDefaultProto) { // eslint-disable-line no-unused-vars
	// 1. Assert: intrinsicDefaultProto is a String value that is this specification's name of an intrinsic object. The corresponding object must be an intrinsic that is intended to be used as the [[Prototype]] value of an object.
	// 2. Assert: IsCallable(constructor) is true.
	// 3. Let proto be ? Get(constructor, "prototype").
	var proto = Get(constructor, "prototype");
	// 4. If Type(proto) is not Object, then
	if (Type(proto) !== 'object') {
		// a. Let realm be ? GetFunctionRealm(constructor).
		// b. Set proto to realm's intrinsic object named intrinsicDefaultProto.
		proto = intrinsicDefaultProto;
	}
	// 5. Return proto.
	return proto;
}

// _ESAbstract.GetSubstitution
/* global Type */
// 21.1.3.17.1 GetSubstitution ( matched, str, position, captures, namedCaptures, replacement )
var GetSubstitution = (function() { // eslint-disable-line no-unused-vars
	function isDigit(string) {
		return /^[0-9]$/.test(string);
	}
	return function GetSubstitution ( matched, str, position, captures, namedCaptures, replacement ) { // eslint-disable-line no-unused-vars
		// 1. Assert: Type(matched) is String.
		// 2. Let matchLength be the number of code units in matched.
		var matchLength = matched.length;
		// 3. Assert: Type(str) is String.
		// 4. Let stringLength be the number of code units in str.
		var stringLength = str.length;
		// 5. Assert: ! IsNonNegativeInteger(position) is true.
		// 6. Assert: position ≤ stringLength.
		// 7. Assert: captures is a possibly empty List of Strings.
		// 8. Assert: Type(replacement) is String.
		// 9. Let tailPos be position + matchLength.
		var tailPos = position + matchLength;
		// 10. Let m be the number of elements in captures.
		var m = captures.length;
		// 11. Let result be the String value derived from replacement by copying
		// code unit elements from replacement to result while performing replacements
		// as specified in Table 53. These $ replacements are done left-to-right, and,
		// once such a replacement is performed, the new replacement text is not subject to further replacements.
		var result = '';
		for (var i = 0; i < replacement.length; i += 1) {
			// if this is a $, and it's not the end of the replacement
			var current = replacement.charAt(i);
			var isLast = (i + 1) >= replacement.length;
			var nextIsLast = (i + 2) >= replacement.length;
			if (current === '$' && !isLast) {
				var next = replacement.charAt(i + 1);
				if (next === '$') {
					result += '$';
					i += 1;
				} else if (next === '&') {
					result += matched;
					i += 1;
				} else if (next === '`') {
					result += position === 0 ? '' : str.slice(0, position - 1);
					i += 1;
				} else if (next === "'") {
					result += tailPos >= stringLength ? '' : str.slice(tailPos);
					i += 1;
				} else {
					var nextNext = nextIsLast ? null : replacement.charAt(i + 2);
					if (isDigit(next) && next !== '0' && (nextIsLast || !isDigit(nextNext))) {
						// $1 through $9, and not followed by a digit
						var n = parseInt(next, 10);
						// if (n > m, impl-defined)
						result += n <= m && Type(captures[n - 1]) === 'Undefined' ? '' : captures[n - 1];
						i += 1;
					} else if (isDigit(next) && (nextIsLast || isDigit(nextNext))) {
						// $00 through $99
						var nn = next + nextNext;
						var nnI = parseInt(nn, 10) - 1;
						// if nn === '00' or nn > m, impl-defined
						result += nn <= m && Type(captures[nnI]) === 'Undefined' ? '' : captures[nnI];
						i += 2;
					} else {
						result += '$';
					}
				}
			} else {
				// the final $, or else not a $
				result += replacement.charAt(i);
			}
		}
		// 12. Return result.
		return result;
	};
}());

// _ESAbstract.IsConstructor
/* global Type */
// 7.2.4. IsConstructor ( argument )
function IsConstructor(argument) { // eslint-disable-line no-unused-vars
	// 1. If Type(argument) is not Object, return false.
	if (Type(argument) !== 'object') {
		return false;
	}
	// 2. If argument has a [[Construct]] internal method, return true.
	// 3. Return false.

	// Polyfill.io - `new argument` is the only way  to truly test if a function is a constructor.
	// We choose to not use`new argument` because the argument could have side effects when called.
	// Instead we check to see if the argument is a function and if it has a prototype.
	// Arrow functions do not have a [[Construct]] internal method, nor do they have a prototype.
	return typeof argument === 'function' && !!argument.prototype;
}

// _ESAbstract.IsRegExp
/* global Type, Get, ToBoolean */
// 7.2.8. IsRegExp ( argument )
function IsRegExp(argument) { // eslint-disable-line no-unused-vars
	// 1. If Type(argument) is not Object, return false.
	if (Type(argument) !== 'object') {
		return false;
	}
	// 2. Let matcher be ? Get(argument, @@match).
	var matcher = 'Symbol' in self && 'match' in self.Symbol ? Get(argument, self.Symbol.match) : undefined;
	// 3. If matcher is not undefined, return ToBoolean(matcher).
	if (matcher !== undefined) {
		return ToBoolean(matcher);
	}
	// 4. If argument has a [[RegExpMatcher]] internal slot, return true.
	try {
		var lastIndex = argument.lastIndex;
		argument.lastIndex = 0;
		RegExp.prototype.exec.call(argument);
		return true;
	// eslint-disable-next-line no-empty
	} catch (e) {} finally {
		argument.lastIndex = lastIndex;
	}
	// 5. Return false.
	return false;
}

// _ESAbstract.IteratorClose
/* global GetMethod, Type, Call */
// 7.4.6. IteratorClose ( iteratorRecord, completion )
function IteratorClose(iteratorRecord, completion) { // eslint-disable-line no-unused-vars
	// 1. Assert: Type(iteratorRecord.[[Iterator]]) is Object.
	if (Type(iteratorRecord['[[Iterator]]']) !== 'object') {
		throw new Error(Object.prototype.toString.call(iteratorRecord['[[Iterator]]']) + 'is not an Object.');
	}
	// 2. Assert: completion is a Completion Record.
	// Polyfill.io - Ignoring this step as there is no way to check if something is a Completion Record in userland JavaScript.

	// 3. Let iterator be iteratorRecord.[[Iterator]].
	var iterator = iteratorRecord['[[Iterator]]'];
	// 4. Let return be ? GetMethod(iterator, "return").
	// Polyfill.io - We name it  returnMethod because return is a keyword and can not be used as an identifier (E.G. variable name, function name etc).
	var returnMethod = GetMethod(iterator, "return");
	// 5. If return is undefined, return Completion(completion).
	if (returnMethod === undefined) {
		return completion;
	}
	// 6. Let innerResult be Call(return, iterator, « »).
	try {
		var innerResult = Call(returnMethod, iterator);
	} catch (error) {
		var innerException = error;
	}
	// 7. If completion.[[Type]] is throw, return Completion(completion).
	if (completion) {
		return completion;
	}
	// 8. If innerResult.[[Type]] is throw, return Completion(innerResult).
	if (innerException) {
		throw innerException;
	}
	// 9. If Type(innerResult.[[Value]]) is not Object, throw a TypeError exception.
	if (Type(innerResult) !== 'object') {
		throw new TypeError("Iterator's return method returned a non-object.");
	}
	// 10. Return Completion(completion).
	return completion;
}

// _ESAbstract.IteratorComplete
/* global Type, ToBoolean, Get */
// 7.4.3 IteratorComplete ( iterResult )
function IteratorComplete(iterResult) { // eslint-disable-line no-unused-vars
	// 1. Assert: Type(iterResult) is Object.
	if (Type(iterResult) !== 'object') {
		throw new Error(Object.prototype.toString.call(iterResult) + 'is not an Object.');
	}
	// 2. Return ToBoolean(? Get(iterResult, "done")).
	return ToBoolean(Get(iterResult, "done"));
}

// _ESAbstract.IteratorNext
/* global Call, Type */
// 7.4.2. IteratorNext ( iteratorRecord [ , value ] )
function IteratorNext(iteratorRecord /* [, value] */) { // eslint-disable-line no-unused-vars
	// 1. If value is not present, then
	if (arguments.length < 2) {
		// a. Let result be ? Call(iteratorRecord.[[NextMethod]], iteratorRecord.[[Iterator]], « »).
		var result = Call(iteratorRecord['[[NextMethod]]'], iteratorRecord['[[Iterator]]']);
	// 2. Else,
	} else {
		// a. Let result be ? Call(iteratorRecord.[[NextMethod]], iteratorRecord.[[Iterator]], « value »).
		result = Call(iteratorRecord['[[NextMethod]]'], iteratorRecord['[[Iterator]]'], [arguments[1]]);
	}
	// 3. If Type(result) is not Object, throw a TypeError exception.
	if (Type(result) !== 'object') {
		throw new TypeError('bad iterator');
	}
	// 4. Return result.
	return result;
}

// _ESAbstract.IteratorStep
/* global IteratorNext, IteratorComplete */
// 7.4.5. IteratorStep ( iteratorRecord )
function IteratorStep(iteratorRecord) { // eslint-disable-line no-unused-vars
	// 1. Let result be ? IteratorNext(iteratorRecord).
	var result = IteratorNext(iteratorRecord);
	// 2. Let done be ? IteratorComplete(result).
	var done = IteratorComplete(result);
	// 3. If done is true, return false.
	if (done === true) {
		return false;
	}
	// 4. Return result.
	return result;
}

// _ESAbstract.IteratorValue
/* global Type, Get */
// 7.4.4 IteratorValue ( iterResult )
function IteratorValue(iterResult) { // eslint-disable-line no-unused-vars
	// Assert: Type(iterResult) is Object.
	if (Type(iterResult) !== 'object') {
		throw new Error(Object.prototype.toString.call(iterResult) + 'is not an Object.');
	}
	// Return ? Get(iterResult, "value").
	return Get(iterResult, "value");
}

// _ESAbstract.OrdinaryToPrimitive
/* global Get, IsCallable, Call, Type */
// 7.1.1.1. OrdinaryToPrimitive ( O, hint )
function OrdinaryToPrimitive(O, hint) { // eslint-disable-line no-unused-vars
	// 1. Assert: Type(O) is Object.
	// 2. Assert: Type(hint) is String and its value is either "string" or "number".
	// 3. If hint is "string", then
	if (hint === 'string') {
		// a. Let methodNames be « "toString", "valueOf" ».
		var methodNames = ['toString', 'valueOf'];
		// 4. Else,
	} else {
		// a. Let methodNames be « "valueOf", "toString" ».
		methodNames = ['valueOf', 'toString'];
	}
	// 5. For each name in methodNames in List order, do
	for (var i = 0; i < methodNames.length; ++i) {
		var name = methodNames[i];
		// a. Let method be ? Get(O, name).
		var method = Get(O, name);
		// b. If IsCallable(method) is true, then
		if (IsCallable(method)) {
			// i. Let result be ? Call(method, O).
			var result = Call(method, O);
			// ii. If Type(result) is not Object, return result.
			if (Type(result) !== 'object') {
				return result;
			}
		}
	}
	// 6. Throw a TypeError exception.
	throw new TypeError('Cannot convert to primitive.');
}

// _ESAbstract.RegExpExec
/* global Call, Get, IsCallable, Type */

// 22.2.5.2.1 RegExpExec ( R, S )
function RegExpExec(R, S) { // eslint-disable-line no-unused-vars
	// 1. Let exec be ? Get(R, "exec").
	var exec = Get(R, 'exec');
	// 2. If IsCallable(exec) is true, then
	if (IsCallable(exec)) {
		// 2.a. Let result be ? Call(exec, R, « S »).
		var result = Call(exec, R, [ S ]);
		// 2.b. If Type(result) is neither Object nor Null, throw a TypeError exception.
		if (Type(result) !== 'object' && Type(result) !== 'null') {
			throw new TypeError('Invalid result: must be an object or null.');
		}
		// 2.c. Return result.
		return result;
	}
	// 3. Perform ? RequireInternalSlot(R, [[RegExpMatcher]]).
	// 4. Return ? RegExpBuiltinExec(R, S).
	return Call(RegExp.prototype.exec, R, [ S ]);
}

// _ESAbstract.SameValue
/* global Type, SameValueNonNumber */
// 7.2.10. SameValue ( x, y )
function SameValue(x, y) { // eslint-disable-line no-unused-vars
	// 1. If Type(x) is different from Type(y), return false.
	if (Type(x) !== Type(y)) {
		return false;
	}
	// 2. If Type(x) is Number, then
	if (Type(x) === 'number') {
		// a. If x is NaN and y is NaN, return true.
		if (isNaN(x) && isNaN(y)) {
			return true;
		}
		// Polyfill.io - 0 === -0 is true, but they are not the same value.
		// b. If x is +0 and y is -0, return false.
		// c. If x is -0 and y is +0, return false.
		if (x === 0 && y === 0 && 1/x !== 1/y) {
			return false;
		}
		// d. If x is the same Number value as y, return true.
		if (x === y) {
			return true;
		}
		// e. Return false.
		return false;
	}
	// 3. Return SameValueNonNumber(x, y).
	return SameValueNonNumber(x, y);
}

// _ESAbstract.SameValueZero
/* global Type, SameValueNonNumber */
// 7.2.11. SameValueZero ( x, y )
function SameValueZero (x, y) { // eslint-disable-line no-unused-vars
	// 1. If Type(x) is different from Type(y), return false.
	if (Type(x) !== Type(y)) {
		return false;
	}
	// 2. If Type(x) is Number, then
	if (Type(x) === 'number') {
		// a. If x is NaN and y is NaN, return true.
		if (isNaN(x) && isNaN(y)) {
			return true;
		}
		// b. If x is +0 and y is -0, return true.
		if (1/x === Infinity && 1/y === -Infinity) {
			return true;
		}
		// c. If x is -0 and y is +0, return true.
		if (1/x === -Infinity && 1/y === Infinity) {
			return true;
		}
		// d. If x is the same Number value as y, return true.
		if (x === y) {
			return true;
		}
		// e. Return false.
		return false;
	}
	// 3. Return SameValueNonNumber(x, y).
	return SameValueNonNumber(x, y);
}

// _ESAbstract.SpeciesConstructor
/* global Get, Type, IsConstructor */
// 7.3.20 SpeciesConstructor(O, defaultConstructor)
function SpeciesConstructor (O, defaultConstructor) { // eslint-disable-line no-unused-vars
	// 7.3.20.1 Assert: Type(O) is Object.
	// 7.3.20.2 Let C be ? Get(O, "constructor").
	var C = Get(O, "constructor");
	// 7.3.20.3 If C is undefined, return defaultConstructor.
	if (C === undefined) {
		return defaultConstructor;
	}
	// 7.3.20.4 If Type(C) is not Object, throw a TypeError exception
	if (Type(C) !== 'object') {
		throw new TypeError('O.constructor is not an Object');
	}
	// 7.3.20.5 Let S be ? Get(C, @@species).
	var S = typeof self.Symbol === 'function' && typeof self.Symbol.species === 'symbol' ? C[self.Symbol.species] : undefined;
	// 7.3.20.6 If S is either undefined or null, return defaultConstructor.
	if (S === undefined || S === null) {
		return defaultConstructor;
	}
	// 7.3.20.7 If IsConstructor(S) is true, return S.
	if (IsConstructor(S)) {
		return S;
	}
	// 7.3.20.8 Throw a TypeError exception.
	throw new TypeError('No constructor found');
}

// _ESAbstract.StringIndexOf
/* global */
function StringIndexOf(string, searchValue, fromIndex) { // eslint-disable-line no-unused-vars
	// 1. Assert: Type(string) is String.
	// 2. Assert: Type(searchValue) is String.
	// 3. Assert: ! IsNonNegativeInteger(fromIndex) is true.
	// 4. Let len be the length of string.
	var len = string.length;
	// 5. If searchValue is the empty String and fromIndex ≤ len, return fromIndex.
	if (searchValue === "" && fromIndex <= len) {
		return fromIndex;
	}
	// 6. Let searchLen be the length of searchValue.
	var searchLen = searchValue.length;
	// 7. If there exists any integer k such that fromIndex ≤ k ≤ len - searchLen
	// and for all nonnegative integers j less than searchLen, the code unit at
	// index k + j within string is the same as the code unit at index j within searchValue,
	// let pos be the smallest (closest to -∞) such integer. Otherwise, let pos be -1.
	var k = fromIndex;
	var pos = -1;
	while (k + searchLen <= len) {
		var match = true;
		for (var j = 0; j < searchLen; j += 1) {
			if (string[k + j] !== searchValue[j]) {
				match = false;
				break;
			}
		}
		if (match) {
			pos = k;
			break;
		}
		k += 1;
	}
	// 8. Return pos.
	return pos;
}

// _ESAbstract.ToInteger
/* global Type */
// 7.1.4. ToInteger ( argument )
function ToInteger(argument) { // eslint-disable-line no-unused-vars
	if (Type(argument) === 'symbol') {
		throw new TypeError('Cannot convert a Symbol value to a number');
	}

	// 1. Let number be ? ToNumber(argument).
	var number = Number(argument);
	// 2. If number is NaN, return +0.
	if (isNaN(number)) {
		return 0;
	}
	// 3. If number is +0, -0, +∞, or -∞, return number.
	if (1/number === Infinity || 1/number === -Infinity || number === Infinity || number === -Infinity) {
		return number;
	}
	// 4. Return the number value that is the same sign as number and whose magnitude is floor(abs(number)).
	return ((number < 0) ? -1 : 1) * Math.floor(Math.abs(number));
}

// _ESAbstract.ToLength
/* global ToInteger */
// 7.1.15. ToLength ( argument )
function ToLength(argument) { // eslint-disable-line no-unused-vars
	// 1. Let len be ? ToInteger(argument).
	var len = ToInteger(argument);
	// 2. If len ≤ +0, return +0.
	if (len <= 0) {
		return 0;
	}
	// 3. Return min(len, 253-1).
	return Math.min(len, Math.pow(2, 53) -1);
}

// _ESAbstract.LengthOfArrayLike
/* global Get, ToLength */
// 7.3.19. LengthOfArrayLike ( obj )
function LengthOfArrayLike(obj) { // eslint-disable-line no-unused-vars
	// 1. Return ℝ(? ToLength(? Get(obj, "length"))).
	return ToLength(Get(obj, 'length'));
}

// _ESAbstract.ToPrimitive
/* global Type, GetMethod, Call, OrdinaryToPrimitive */
// 7.1.1. ToPrimitive ( input [ , PreferredType ] )
function ToPrimitive(input /* [, PreferredType] */) { // eslint-disable-line no-unused-vars
	var PreferredType = arguments.length > 1 ? arguments[1] : undefined;
	// 1. Assert: input is an ECMAScript language value.
	// 2. If Type(input) is Object, then
	if (Type(input) === 'object') {
		// a. If PreferredType is not present, let hint be "default".
		if (arguments.length < 2) {
			var hint = 'default';
			// b. Else if PreferredType is hint String, let hint be "string".
		} else if (PreferredType === String) {
			hint = 'string';
			// c. Else PreferredType is hint Number, let hint be "number".
		} else if (PreferredType === Number) {
			hint = 'number';
		}
		// d. Let exoticToPrim be ? GetMethod(input, @@toPrimitive).
		var exoticToPrim = typeof self.Symbol === 'function' && typeof self.Symbol.toPrimitive === 'symbol' ? GetMethod(input, self.Symbol.toPrimitive) : undefined;
		// e. If exoticToPrim is not undefined, then
		if (exoticToPrim !== undefined) {
			// i. Let result be ? Call(exoticToPrim, input, « hint »).
			var result = Call(exoticToPrim, input, [hint]);
			// ii. If Type(result) is not Object, return result.
			if (Type(result) !== 'object') {
				return result;
			}
			// iii. Throw a TypeError exception.
			throw new TypeError('Cannot convert exotic object to primitive.');
		}
		// f. If hint is "default", set hint to "number".
		if (hint === 'default') {
			hint = 'number';
		}
		// g. Return ? OrdinaryToPrimitive(input, hint).
		return OrdinaryToPrimitive(input, hint);
	}
	// 3. Return input
	return input;
}

// _ESAbstract.ToString
/* global Type, ToPrimitive */
// 7.1.12. ToString ( argument )
// The abstract operation ToString converts argument to a value of type String according to Table 11:
// Table 11: ToString Conversions
/*
|---------------|--------------------------------------------------------|
| Argument Type | Result                                                 |
|---------------|--------------------------------------------------------|
| Undefined     | Return "undefined".                                    |
|---------------|--------------------------------------------------------|
| Null	        | Return "null".                                         |
|---------------|--------------------------------------------------------|
| Boolean       | If argument is true, return "true".                    |
|               | If argument is false, return "false".                  |
|---------------|--------------------------------------------------------|
| Number        | Return NumberToString(argument).                       |
|---------------|--------------------------------------------------------|
| String        | Return argument.                                       |
|---------------|--------------------------------------------------------|
| Symbol        | Throw a TypeError exception.                           |
|---------------|--------------------------------------------------------|
| Object        | Apply the following steps:                             |
|               | Let primValue be ? ToPrimitive(argument, hint String). |
|               | Return ? ToString(primValue).                          |
|---------------|--------------------------------------------------------|
*/
function ToString(argument) { // eslint-disable-line no-unused-vars
	switch(Type(argument)) {
		case 'symbol':
			throw new TypeError('Cannot convert a Symbol value to a string');
		case 'object':
			var primValue = ToPrimitive(argument, String);
			return ToString(primValue); // eslint-disable-line no-unused-vars
		default:
			return String(argument);
	}
}

// _ESAbstract.ToPropertyKey
/* globals ToPrimitive, Type, ToString */
// 7.1.14. ToPropertyKey ( argument )
function ToPropertyKey(argument) { // eslint-disable-line no-unused-vars
	// 1. Let key be ? ToPrimitive(argument, hint String).
	var key = ToPrimitive(argument, String);
	// 2. If Type(key) is Symbol, then
	if (Type(key) === 'symbol') {
		// a. Return key.
		return key;
	}
	// 3. Return ! ToString(key).
	return ToString(key);
}

// _ESAbstract.TrimString
/* eslint-disable no-control-regex */
/* global RequireObjectCoercible, ToString */
// TrimString ( string, where )
function TrimString(string, where) { // eslint-disable-line no-unused-vars
	// 1. Let str be ? RequireObjectCoercible(string).
	var str = RequireObjectCoercible(string);
	// 2. Let S be ? ToString(str).
	var S = ToString(str);
	// 3. If where is "start", let T be a String value that is a copy of S with leading white space removed.
	// The definition of white space is the union of WhiteSpace and LineTerminator. When determining whether a Unicode code point is in Unicode general category “Space_Separator” (“Zs”), code unit sequences are interpreted as UTF-16 encoded code point sequences as specified in 6.1.4.
	var whitespace = /[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+/.source;
	if (where === 'start') {
		var T = String.prototype.replace.call(S, new RegExp('^' + whitespace, 'g'), '');
		// 4. Else if where is "end", let T be a String value that is a copy of S with trailing white space removed.
	} else if (where === "end") {
		T = String.prototype.replace.call(S, new RegExp(whitespace + '$', 'g'), '');
		// 5. Else,
	} else {
		// a. Assert: where is "start+end".
		// b. Let T be a String value that is a copy of S with both leading and trailing white space removed.
		T = String.prototype.replace.call(S, new RegExp('^' + whitespace + '|' + whitespace + '$', 'g'), '');
	}
	// 6. Return T.
	return T;
}

// _ESAbstract.UTF16Decode
// 10.1.2. Static Semantics: UTF16Decode( lead, trail )
function UTF16Decode(lead, trail) { // eslint-disable-line no-unused-vars
	// 1. Assert: 0xD800 ≤ lead ≤ 0xDBFF and 0xDC00 ≤ trail ≤ 0xDFFF.
	// 2. Let cp be (lead - 0xD800) × 0x400 + (trail - 0xDC00) + 0x10000.
	var cp = (lead - 0xD800) * 0x400 + (trail - 0xDC00) + 0x10000;
	// 3. Return the code point cp.
	return cp;
}

// _ESAbstract.UTF16Encoding
// 10.1.1. Static Semantics: UTF16Encoding ( cp )
function UTF16Encoding(cp) { // eslint-disable-line no-unused-vars
	// 1. Assert: 0 ≤ cp ≤ 0x10FFFF.
	// 2. If cp ≤ 0xFFFF, return cp.
	if (cp <= 0xFFFF) {
		return cp;
	} else {
		// 3. Let cu1 be floor((cp - 0x10000) / 0x400) + 0xD800.
		var cu1 = Math.floor((cp - 0x10000) / 0x400) + 0xD800;
		// 4. Let cu2 be ((cp - 0x10000) modulo 0x400) + 0xDC00.
		var cu2 = ((cp - 0x10000) % 0x400) + 0xDC00;
		// 5. Return the code unit sequence consisting of cu1 followed by cu2.
		return [cu1, cu2];
	}
}

// ArrayBuffer
/*
 Copyright (c) 2010, Linden Research, Inc.
 Copyright (c) 2014, Joshua Bell

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 $/LicenseInfo$
 */

// Original can be found at:
//   https://bitbucket.org/lindenlab/llsd
// Modifications by Joshua Bell inexorabletash@gmail.com
//   https://github.com/inexorabletash/polyfill

// ES3/ES5 implementation of the Krhonos Typed Array Specification
//   Ref: http://www.khronos.org/registry/typedarray/specs/latest/
//   Date: 2011-02-01
//
// Variations:
//  * Allows typed_array.get/set() as alias for subscripts (typed_array[])
//  * Gradually migrating structure from Khronos spec to ES2015 spec
//
// Caveats:
//  * Beyond 10000 or so entries, polyfilled array accessors (ta[0],
//    etc) become memory-prohibitive, so array creation will fail. Set
//    self.TYPED_ARRAY_POLYFILL_NO_ARRAY_ACCESSORS=true to disable
//    creation of accessors. Your code will need to use the
//    non-standard get()/set() instead, and will need to add those to
//    native arrays for interop.
(function(global) {
  'use strict';
  var undefined = (void 0); // Paranoia

  // Beyond this value, index getters/setters (i.e. array[0], array[1]) are so slow to
  // create, and consume so much memory, that the browser appears frozen.
  var MAX_ARRAY_LENGTH = 1e5;

  // Approximations of internal ECMAScript conversion functions
  function Type(v) {
    switch(typeof v) {
    case 'undefined': return 'undefined';
    case 'boolean': return 'boolean';
    case 'number': return 'number';
    case 'string': return 'string';
    default: return v === null ? 'null' : 'object';
    }
  }

  // Class returns internal [[Class]] property, used to avoid cross-frame instanceof issues:
  function Class(v) { return Object.prototype.toString.call(v).replace(/^\[object *|\]$/g, ''); }
  function IsCallable(o) { return typeof o === 'function'; }
  function ToObject(v) {
    if (v === null || v === undefined) throw TypeError();
    return Object(v);
  }
  function ToInt32(v) { return v >> 0; }
  function ToUint32(v) { return v >>> 0; }

  // Snapshot intrinsics
  var LN2 = Math.LN2,
      abs = Math.abs,
      floor = Math.floor,
      log = Math.log,
      max = Math.max,
      min = Math.min,
      pow = Math.pow,
      round = Math.round;

  // emulate ES5 getter/setter API using legacy APIs
  // http://blogs.msdn.com/b/ie/archive/2010/09/07/transitioning-existing-code-to-the-es5-getter-setter-apis.aspx
  // (second clause tests for Object.defineProperty() in IE<9 that only supports extending DOM prototypes, but
  // note that IE<9 does not support __defineGetter__ or __defineSetter__ so it just renders the method harmless)

  (function() {
    var orig = Object.defineProperty;
    var dom_only = !(function(){try{return Object.defineProperty({},'x',{});}catch(_){return false;}}());

    if (!orig || dom_only) {
      Object.defineProperty = function (o, prop, desc) {
        // In IE8 try built-in implementation for defining properties on DOM prototypes.
        if (orig)
          try { return orig(o, prop, desc); } catch (_) {}
        if (o !== Object(o))
          throw TypeError('Object.defineProperty called on non-object');
        if (Object.prototype.__defineGetter__ && ('get' in desc))
          Object.prototype.__defineGetter__.call(o, prop, desc.get);
        if (Object.prototype.__defineSetter__ && ('set' in desc))
          Object.prototype.__defineSetter__.call(o, prop, desc.set);
        if ('value' in desc)
          o[prop] = desc.value;
        return o;
      };
    }
  }());

  // ES5: Make obj[index] an alias for obj._getter(index)/obj._setter(index, value)
  // for index in 0 ... obj.length
  function makeArrayAccessors(obj) {
    if ('TYPED_ARRAY_POLYFILL_NO_ARRAY_ACCESSORS' in global)
      return;

    if (obj.length > MAX_ARRAY_LENGTH) throw RangeError('Array too large for polyfill');

    function makeArrayAccessor(index) {
      try {
        Object.defineProperty(obj, index, {
          'get': function() { return obj._getter(index); },
          'set': function(v) { obj._setter(index, v); },
          enumerable: true,
          configurable: false
        });
      } catch (_){ }
    }

    var i;
    for (i = 0; i < obj.length; i += 1) {
      makeArrayAccessor(i);
    }
  }

  // Internal conversion functions:
  //    pack<Type>()   - take a number (interpreted as Type), output a byte array
  //    unpack<Type>() - take a byte array, output a Type-like number

  function as_signed(value, bits) { var s = 32 - bits; return (value << s) >> s; }
  function as_unsigned(value, bits) { var s = 32 - bits; return (value << s) >>> s; }

  function packI8(n) { return [n & 0xff]; }
  function unpackI8(bytes) { return as_signed(bytes[0], 8); }

  function packU8(n) { return [n & 0xff]; }
  function unpackU8(bytes) { return as_unsigned(bytes[0], 8); }

  function packU8Clamped(n) { n = round(Number(n)); return [n < 0 ? 0 : n > 0xff ? 0xff : n & 0xff]; }

  function packI16(n) { return [n & 0xff, (n >> 8) & 0xff]; }
  function unpackI16(bytes) { return as_signed(bytes[1] << 8 | bytes[0], 16); }

  function packU16(n) { return [n & 0xff, (n >> 8) & 0xff]; }
  function unpackU16(bytes) { return as_unsigned(bytes[1] << 8 | bytes[0], 16); }

  function packI32(n) { return [n & 0xff, (n >> 8) & 0xff, (n >> 16) & 0xff, (n >> 24) & 0xff]; }
  function unpackI32(bytes) { return as_signed(bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0], 32); }

  function packU32(n) { return [n & 0xff, (n >> 8) & 0xff, (n >> 16) & 0xff, (n >> 24) & 0xff]; }
  function unpackU32(bytes) { return as_unsigned(bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0], 32); }

  function packIEEE754(v, ebits, fbits) {

    var bias = (1 << (ebits - 1)) - 1;

    function roundToEven(n) {
      var w = floor(n), f = n - w;
      if (f < 0.5)
        return w;
      if (f > 0.5)
        return w + 1;
      return w % 2 ? w + 1 : w;
    }

    // Compute sign, exponent, fraction
    var s, e, f;
    if (v !== v) {
      // NaN
      // http://dev.w3.org/2006/webapi/WebIDL/#es-type-mapping
      e = (1 << ebits) - 1; f = pow(2, fbits - 1); s = 0;
    } else if (v === Infinity || v === -Infinity) {
      e = (1 << ebits) - 1; f = 0; s = (v < 0) ? 1 : 0;
    } else if (v === 0) {
      e = 0; f = 0; s = (1 / v === -Infinity) ? 1 : 0;
    } else {
      s = v < 0;
      v = abs(v);

      if (v >= pow(2, 1 - bias)) {
        // Normalized
        e = min(floor(log(v) / LN2), 1023);
        var significand = v / pow(2, e);
        if (significand < 1) {
          e -= 1;
          significand *= 2;
        }
        if (significand >= 2) {
          e += 1;
          significand /= 2;
        }
        var d = pow(2, fbits);
        f = roundToEven(significand * d) - d;
        e += bias;
        if (f / d >= 1) {
          e += 1;
          f = 0;
        }
        if (e > 2 * bias) {
          // Overflow
          e = (1 << ebits) - 1;
          f = 0;
        }
      } else {
        // Denormalized
        e = 0;
        f = roundToEven(v / pow(2, 1 - bias - fbits));
      }
    }

    // Pack sign, exponent, fraction
    var bits = [], i;
    for (i = fbits; i; i -= 1) { bits.push(f % 2 ? 1 : 0); f = floor(f / 2); }
    for (i = ebits; i; i -= 1) { bits.push(e % 2 ? 1 : 0); e = floor(e / 2); }
    bits.push(s ? 1 : 0);
    bits.reverse();
    var str = bits.join('');

    // Bits to bytes
    var bytes = [];
    while (str.length) {
      bytes.unshift(parseInt(str.substring(0, 8), 2));
      str = str.substring(8);
    }
    return bytes;
  }

  function unpackIEEE754(bytes, ebits, fbits) {
    // Bytes to bits
    var bits = [], i, j, b, str,
        bias, s, e, f;

    for (i = 0; i < bytes.length; ++i) {
      b = bytes[i];
      for (j = 8; j; j -= 1) {
        bits.push(b % 2 ? 1 : 0); b = b >> 1;
      }
    }
    bits.reverse();
    str = bits.join('');

    // Unpack sign, exponent, fraction
    bias = (1 << (ebits - 1)) - 1;
    s = parseInt(str.substring(0, 1), 2) ? -1 : 1;
    e = parseInt(str.substring(1, 1 + ebits), 2);
    f = parseInt(str.substring(1 + ebits), 2);

    // Produce number
    if (e === (1 << ebits) - 1) {
      return f !== 0 ? NaN : s * Infinity;
    } else if (e > 0) {
      // Normalized
      return s * pow(2, e - bias) * (1 + f / pow(2, fbits));
    } else if (f !== 0) {
      // Denormalized
      return s * pow(2, -(bias - 1)) * (f / pow(2, fbits));
    } else {
      return s < 0 ? -0 : 0;
    }
  }

  function unpackF64(b) { return unpackIEEE754(b, 11, 52); }
  function packF64(v) { return packIEEE754(v, 11, 52); }
  function unpackF32(b) { return unpackIEEE754(b, 8, 23); }
  function packF32(v) { return packIEEE754(v, 8, 23); }

  //
  // 3 The ArrayBuffer Type
  //

  (function() {

    function ArrayBuffer(length) {
      length = ToInt32(length);
      if (length < 0) throw RangeError('ArrayBuffer size is not a small enough positive integer.');
      Object.defineProperty(this, 'byteLength', {value: length});
      Object.defineProperty(this, '_bytes', {value: Array(length)});

      for (var i = 0; i < length; i += 1)
        this._bytes[i] = 0;
    }

    global.ArrayBuffer = global.ArrayBuffer || ArrayBuffer;

    //
    // 5 The Typed Array View Types
    //

    function $TypedArray$() {

      // %TypedArray% ( length )
      if (!arguments.length || typeof arguments[0] !== 'object') {
        return (function(length) {
          length = ToInt32(length);
          if (length < 0) throw RangeError('length is not a small enough positive integer.');
          Object.defineProperty(this, 'length', {value: length});
          Object.defineProperty(this, 'byteLength', {value: length * this.BYTES_PER_ELEMENT});
          Object.defineProperty(this, 'buffer', {value: new ArrayBuffer(this.byteLength)});
          Object.defineProperty(this, 'byteOffset', {value: 0});

         }).apply(this, arguments);
      }

      // %TypedArray% ( typedArray )
      if (arguments.length >= 1 &&
          Type(arguments[0]) === 'object' &&
          arguments[0] instanceof $TypedArray$) {
        return (function(typedArray){
          if (this.constructor !== typedArray.constructor) throw TypeError();

          var byteLength = typedArray.length * this.BYTES_PER_ELEMENT;
          Object.defineProperty(this, 'buffer', {value: new ArrayBuffer(byteLength)});
          Object.defineProperty(this, 'byteLength', {value: byteLength});
          Object.defineProperty(this, 'byteOffset', {value: 0});
          Object.defineProperty(this, 'length', {value: typedArray.length});

          for (var i = 0; i < this.length; i += 1)
            this._setter(i, typedArray._getter(i));

        }).apply(this, arguments);
      }

      // %TypedArray% ( array )
      if (arguments.length >= 1 &&
          Type(arguments[0]) === 'object' &&
          !(arguments[0] instanceof $TypedArray$) &&
          !(arguments[0] instanceof ArrayBuffer || Class(arguments[0]) === 'ArrayBuffer')) {
        return (function(array) {

          var byteLength = array.length * this.BYTES_PER_ELEMENT;
          Object.defineProperty(this, 'buffer', {value: new ArrayBuffer(byteLength)});
          Object.defineProperty(this, 'byteLength', {value: byteLength});
          Object.defineProperty(this, 'byteOffset', {value: 0});
          Object.defineProperty(this, 'length', {value: array.length});

          for (var i = 0; i < this.length; i += 1) {
            var s = array[i];
            this._setter(i, Number(s));
          }
        }).apply(this, arguments);
      }

      // %TypedArray% ( buffer, byteOffset=0, length=undefined )
      if (arguments.length >= 1 &&
          Type(arguments[0]) === 'object' &&
          (arguments[0] instanceof ArrayBuffer || Class(arguments[0]) === 'ArrayBuffer')) {
        return (function(buffer, byteOffset, length) {

          byteOffset = ToUint32(byteOffset);
          if (byteOffset > buffer.byteLength)
            throw RangeError('byteOffset out of range');

          // The given byteOffset must be a multiple of the element
          // size of the specific type, otherwise an exception is raised.
          if (byteOffset % this.BYTES_PER_ELEMENT)
            throw RangeError('buffer length minus the byteOffset is not a multiple of the element size.');

          if (length === undefined) {
            var byteLength = buffer.byteLength - byteOffset;
            if (byteLength % this.BYTES_PER_ELEMENT)
              throw RangeError('length of buffer minus byteOffset not a multiple of the element size');
            length = byteLength / this.BYTES_PER_ELEMENT;

          } else {
            length = ToUint32(length);
            byteLength = length * this.BYTES_PER_ELEMENT;
          }

          if ((byteOffset + byteLength) > buffer.byteLength)
            throw RangeError('byteOffset and length reference an area beyond the end of the buffer');

          Object.defineProperty(this, 'buffer', {value: buffer});
          Object.defineProperty(this, 'byteLength', {value: byteLength});
          Object.defineProperty(this, 'byteOffset', {value: byteOffset});
          Object.defineProperty(this, 'length', {value: length});

        }).apply(this, arguments);
      }

      // %TypedArray% ( all other argument combinations )
      throw TypeError();
    }

    // Properties of the %TypedArray Instrinsic Object

    // %TypedArray%.from ( source , mapfn=undefined, thisArg=undefined )
    Object.defineProperty($TypedArray$, 'from', {value: function(iterable) {
      return new this(iterable);
    }});

    // %TypedArray%.of ( ...items )
    Object.defineProperty($TypedArray$, 'of', {value: function(/*...items*/) {
      return new this(arguments);
    }});

    // %TypedArray%.prototype
    var $TypedArrayPrototype$ = {};
    $TypedArray$.prototype = $TypedArrayPrototype$;

    // WebIDL: getter type (unsigned long index);
    Object.defineProperty($TypedArray$.prototype, '_getter', {value: function(index) {
      if (arguments.length < 1) throw SyntaxError('Not enough arguments');

      index = ToUint32(index);
      if (index >= this.length)
        return undefined;

      var bytes = [], i, o;
      for (i = 0, o = this.byteOffset + index * this.BYTES_PER_ELEMENT;
           i < this.BYTES_PER_ELEMENT;
           i += 1, o += 1) {
        bytes.push(this.buffer._bytes[o]);
      }
      return this._unpack(bytes);
    }});

    // NONSTANDARD: convenience alias for getter: type get(unsigned long index);
    Object.defineProperty($TypedArray$.prototype, 'get', {value: $TypedArray$.prototype._getter});

    // WebIDL: setter void (unsigned long index, type value);
    Object.defineProperty($TypedArray$.prototype, '_setter', {value: function(index, value) {
      if (arguments.length < 2) throw SyntaxError('Not enough arguments');

      index = ToUint32(index);
      if (index >= this.length)
        return;

      var bytes = this._pack(value), i, o;
      for (i = 0, o = this.byteOffset + index * this.BYTES_PER_ELEMENT;
           i < this.BYTES_PER_ELEMENT;
           i += 1, o += 1) {
        this.buffer._bytes[o] = bytes[i];
      }
    }});

    // get %TypedArray%.prototype.buffer
    // get %TypedArray%.prototype.byteLength
    // get %TypedArray%.prototype.byteOffset
    // -- applied directly to the object in the constructor

    // %TypedArray%.prototype.constructor
    Object.defineProperty($TypedArray$.prototype, 'constructor', {value: $TypedArray$});

    // %TypedArray%.prototype.copyWithin (target, start, end = this.length )
    Object.defineProperty($TypedArray$.prototype, 'copyWithin', {value: function(target, start) {
      var end = arguments[2];

      var o = ToObject(this);
      var lenVal = o.length;
      var len = ToUint32(lenVal);
      len = max(len, 0);
      var relativeTarget = ToInt32(target);
      var to;
      if (relativeTarget < 0)
        to = max(len + relativeTarget, 0);
      else
        to = min(relativeTarget, len);
      var relativeStart = ToInt32(start);
      var from;
      if (relativeStart < 0)
        from = max(len + relativeStart, 0);
      else
        from = min(relativeStart, len);
      var relativeEnd;
      if (end === undefined)
        relativeEnd = len;
      else
        relativeEnd = ToInt32(end);
      var final;
      if (relativeEnd < 0)
        final = max(len + relativeEnd, 0);
      else
        final = min(relativeEnd, len);
      var count = min(final - from, len - to);
      var direction;
      if (from < to && to < from + count) {
        direction = -1;
        from = from + count - 1;
        to = to + count - 1;
      } else {
        direction = 1;
      }
      while (count > 0) {
        o._setter(to, o._getter(from));
        from = from + direction;
        to = to + direction;
        count = count - 1;
      }
      return o;
    }});

    // %TypedArray%.prototype.entries ( )
    // -- defined in es6.js to shim browsers w/ native TypedArrays

    // %TypedArray%.prototype.every ( callbackfn, thisArg = undefined )
    Object.defineProperty($TypedArray$.prototype, 'every', {value: function(callbackfn) {
      if (this === undefined || this === null) throw TypeError();
      var t = Object(this);
      var len = ToUint32(t.length);
      if (!IsCallable(callbackfn)) throw TypeError();
      var thisArg = arguments[1];
      for (var i = 0; i < len; i++) {
        if (!callbackfn.call(thisArg, t._getter(i), i, t))
          return false;
      }
      return true;
    }});

    // %TypedArray%.prototype.fill (value, start = 0, end = this.length )
    Object.defineProperty($TypedArray$.prototype, 'fill', {value: function(value) {
      var start = arguments[1],
          end = arguments[2];

      var o = ToObject(this);
      var lenVal = o.length;
      var len = ToUint32(lenVal);
      len = max(len, 0);
      var relativeStart = ToInt32(start);
      var k;
      if (relativeStart < 0)
        k = max((len + relativeStart), 0);
      else
        k = min(relativeStart, len);
      var relativeEnd;
      if (end === undefined)
        relativeEnd = len;
      else
        relativeEnd = ToInt32(end);
      var final;
      if (relativeEnd < 0)
        final = max((len + relativeEnd), 0);
      else
        final = min(relativeEnd, len);
      while (k < final) {
        o._setter(k, value);
        k += 1;
      }
      return o;
    }});

    // %TypedArray%.prototype.filter ( callbackfn, thisArg = undefined )
    Object.defineProperty($TypedArray$.prototype, 'filter', {value: function(callbackfn) {
      if (this === undefined || this === null) throw TypeError();
      var t = Object(this);
      var len = ToUint32(t.length);
      if (!IsCallable(callbackfn)) throw TypeError();
      var res = [];
      var thisp = arguments[1];
      for (var i = 0; i < len; i++) {
        var val = t._getter(i); // in case fun mutates this
        if (callbackfn.call(thisp, val, i, t))
          res.push(val);
      }
      return new this.constructor(res);
    }});

    // %TypedArray%.prototype.find (predicate, thisArg = undefined)
    Object.defineProperty($TypedArray$.prototype, 'find', {value: function(predicate) {
      var o = ToObject(this);
      var lenValue = o.length;
      var len = ToUint32(lenValue);
      if (!IsCallable(predicate)) throw TypeError();
      var t = arguments.length > 1 ? arguments[1] : undefined;
      var k = 0;
      while (k < len) {
        var kValue = o._getter(k);
        var testResult = predicate.call(t, kValue, k, o);
        if (Boolean(testResult))
          return kValue;
        ++k;
      }
      return undefined;
    }});

    // %TypedArray%.prototype.findIndex ( predicate, thisArg = undefined )
    Object.defineProperty($TypedArray$.prototype, 'findIndex', {value: function(predicate) {
      var o = ToObject(this);
      var lenValue = o.length;
      var len = ToUint32(lenValue);
      if (!IsCallable(predicate)) throw TypeError();
      var t = arguments.length > 1 ? arguments[1] : undefined;
      var k = 0;
      while (k < len) {
        var kValue = o._getter(k);
        var testResult = predicate.call(t, kValue, k, o);
        if (Boolean(testResult))
          return k;
        ++k;
      }
      return -1;
    }});

    // %TypedArray%.prototype.forEach ( callbackfn, thisArg = undefined )
    Object.defineProperty($TypedArray$.prototype, 'forEach', {value: function(callbackfn) {
      if (this === undefined || this === null) throw TypeError();
      var t = Object(this);
      var len = ToUint32(t.length);
      if (!IsCallable(callbackfn)) throw TypeError();
      var thisp = arguments[1];
      for (var i = 0; i < len; i++)
        callbackfn.call(thisp, t._getter(i), i, t);
    }});

    // %TypedArray%.prototype.indexOf (searchElement, fromIndex = 0 )
    Object.defineProperty($TypedArray$.prototype, 'indexOf', {value: function(searchElement) {
      if (this === undefined || this === null) throw TypeError();
      var t = Object(this);
      var len = ToUint32(t.length);
      if (len === 0) return -1;
      var n = 0;
      if (arguments.length > 0) {
        n = Number(arguments[1]);
        if (n !== n) {
          n = 0;
        } else if (n !== 0 && n !== (1 / 0) && n !== -(1 / 0)) {
          n = (n > 0 || -1) * floor(abs(n));
        }
      }
      if (n >= len) return -1;
      var k = n >= 0 ? n : max(len - abs(n), 0);
      for (; k < len; k++) {
        if (t._getter(k) === searchElement) {
          return k;
        }
      }
      return -1;
    }});

    // %TypedArray%.prototype.join ( separator )
    Object.defineProperty($TypedArray$.prototype, 'join', {value: function(separator) {
      if (this === undefined || this === null) throw TypeError();
      var t = Object(this);
      var len = ToUint32(t.length);
      var tmp = Array(len);
      for (var i = 0; i < len; ++i)
        tmp[i] = t._getter(i);
      return tmp.join(separator === undefined ? ',' : separator); // Hack for IE7
    }});

    // %TypedArray%.prototype.keys ( )
    // -- defined in es6.js to shim browsers w/ native TypedArrays

    // %TypedArray%.prototype.lastIndexOf ( searchElement, fromIndex = this.length-1 )
    Object.defineProperty($TypedArray$.prototype, 'lastIndexOf', {value: function(searchElement) {
      if (this === undefined || this === null) throw TypeError();
      var t = Object(this);
      var len = ToUint32(t.length);
      if (len === 0) return -1;
      var n = len;
      if (arguments.length > 1) {
        n = Number(arguments[1]);
        if (n !== n) {
          n = 0;
        } else if (n !== 0 && n !== (1 / 0) && n !== -(1 / 0)) {
          n = (n > 0 || -1) * floor(abs(n));
        }
      }
      var k = n >= 0 ? min(n, len - 1) : len - abs(n);
      for (; k >= 0; k--) {
        if (t._getter(k) === searchElement)
          return k;
      }
      return -1;
    }});

    // get %TypedArray%.prototype.length
    // -- applied directly to the object in the constructor

    // %TypedArray%.prototype.map ( callbackfn, thisArg = undefined )
    Object.defineProperty($TypedArray$.prototype, 'map', {value: function(callbackfn) {
      if (this === undefined || this === null) throw TypeError();
      var t = Object(this);
      var len = ToUint32(t.length);
      if (!IsCallable(callbackfn)) throw TypeError();
      var res = []; res.length = len;
      var thisp = arguments[1];
      for (var i = 0; i < len; i++)
        res[i] = callbackfn.call(thisp, t._getter(i), i, t);
      return new this.constructor(res);
    }});

    // %TypedArray%.prototype.reduce ( callbackfn [, initialValue] )
    Object.defineProperty($TypedArray$.prototype, 'reduce', {value: function(callbackfn) {
      if (this === undefined || this === null) throw TypeError();
      var t = Object(this);
      var len = ToUint32(t.length);
      if (!IsCallable(callbackfn)) throw TypeError();
      // no value to return if no initial value and an empty array
      if (len === 0 && arguments.length === 1) throw TypeError();
      var k = 0;
      var accumulator;
      if (arguments.length >= 2) {
        accumulator = arguments[1];
      } else {
        accumulator = t._getter(k++);
      }
      while (k < len) {
        accumulator = callbackfn.call(undefined, accumulator, t._getter(k), k, t);
        k++;
      }
      return accumulator;
    }});

    // %TypedArray%.prototype.reduceRight ( callbackfn [, initialValue] )
    Object.defineProperty($TypedArray$.prototype, 'reduceRight', {value: function(callbackfn) {
      if (this === undefined || this === null) throw TypeError();
      var t = Object(this);
      var len = ToUint32(t.length);
      if (!IsCallable(callbackfn)) throw TypeError();
      // no value to return if no initial value, empty array
      if (len === 0 && arguments.length === 1) throw TypeError();
      var k = len - 1;
      var accumulator;
      if (arguments.length >= 2) {
        accumulator = arguments[1];
      } else {
        accumulator = t._getter(k--);
      }
      while (k >= 0) {
        accumulator = callbackfn.call(undefined, accumulator, t._getter(k), k, t);
        k--;
      }
      return accumulator;
    }});

    // %TypedArray%.prototype.reverse ( )
    Object.defineProperty($TypedArray$.prototype, 'reverse', {value: function() {
      if (this === undefined || this === null) throw TypeError();
      var t = Object(this);
      var len = ToUint32(t.length);
      var half = floor(len / 2);
      for (var i = 0, j = len - 1; i < half; ++i, --j) {
        var tmp = t._getter(i);
        t._setter(i, t._getter(j));
        t._setter(j, tmp);
      }
      return t;
    }});

    // %TypedArray%.prototype.set(array, offset = 0 )
    // %TypedArray%.prototype.set(typedArray, offset = 0 )
    // WebIDL: void set(TypedArray array, optional unsigned long offset);
    // WebIDL: void set(sequence<type> array, optional unsigned long offset);
    Object.defineProperty($TypedArray$.prototype, 'set', {value: function(index, value) {
      if (arguments.length < 1) throw SyntaxError('Not enough arguments');
      var array, sequence, offset, len,
          i, s, d,
          byteOffset, byteLength, tmp;

      if (typeof arguments[0] === 'object' && arguments[0].constructor === this.constructor) {
        // void set(TypedArray array, optional unsigned long offset);
        array = arguments[0];
        offset = ToUint32(arguments[1]);

        if (offset + array.length > this.length) {
          throw RangeError('Offset plus length of array is out of range');
        }

        byteOffset = this.byteOffset + offset * this.BYTES_PER_ELEMENT;
        byteLength = array.length * this.BYTES_PER_ELEMENT;

        if (array.buffer === this.buffer) {
          tmp = [];
          for (i = 0, s = array.byteOffset; i < byteLength; i += 1, s += 1) {
            tmp[i] = array.buffer._bytes[s];
          }
          for (i = 0, d = byteOffset; i < byteLength; i += 1, d += 1) {
            this.buffer._bytes[d] = tmp[i];
          }
        } else {
          for (i = 0, s = array.byteOffset, d = byteOffset;
               i < byteLength; i += 1, s += 1, d += 1) {
            this.buffer._bytes[d] = array.buffer._bytes[s];
          }
        }
      } else if (typeof arguments[0] === 'object' && typeof arguments[0].length !== 'undefined') {
        // void set(sequence<type> array, optional unsigned long offset);
        sequence = arguments[0];
        len = ToUint32(sequence.length);
        offset = ToUint32(arguments[1]);

        if (offset + len > this.length) {
          throw RangeError('Offset plus length of array is out of range');
        }

        for (i = 0; i < len; i += 1) {
          s = sequence[i];
          this._setter(offset + i, Number(s));
        }
      } else {
        throw TypeError('Unexpected argument type(s)');
      }
    }});

    // %TypedArray%.prototype.slice ( start, end )
    Object.defineProperty($TypedArray$.prototype, 'slice', {value: function(start, end) {
      var o = ToObject(this);
      var lenVal = o.length;
      var len = ToUint32(lenVal);
      var relativeStart = ToInt32(start);
      var k = (relativeStart < 0) ? max(len + relativeStart, 0) : min(relativeStart, len);
      var relativeEnd = (end === undefined) ? len : ToInt32(end);
      var final = (relativeEnd < 0) ? max(len + relativeEnd, 0) : min(relativeEnd, len);
      var count = final - k;
      var c = o.constructor;
      var a = new c(count);
      var n = 0;
      while (k < final) {
        var kValue = o._getter(k);
        a._setter(n, kValue);
        ++k;
        ++n;
      }
      return a;
    }});

    // %TypedArray%.prototype.some ( callbackfn, thisArg = undefined )
    Object.defineProperty($TypedArray$.prototype, 'some', {value: function(callbackfn) {
      if (this === undefined || this === null) throw TypeError();
      var t = Object(this);
      var len = ToUint32(t.length);
      if (!IsCallable(callbackfn)) throw TypeError();
      var thisp = arguments[1];
      for (var i = 0; i < len; i++) {
        if (callbackfn.call(thisp, t._getter(i), i, t)) {
          return true;
        }
      }
      return false;
    }});

    // %TypedArray%.prototype.sort ( comparefn )
    Object.defineProperty($TypedArray$.prototype, 'sort', {value: function(comparefn) {
      if (this === undefined || this === null) throw TypeError();
      var t = Object(this);
      var len = ToUint32(t.length);
      var tmp = Array(len);
      for (var i = 0; i < len; ++i)
        tmp[i] = t._getter(i);
      function sortCompare(x, y) {
        if (x !== x && y !== y) return +0;
        if (x !== x) return 1;
        if (y !== y) return -1;
        if (comparefn !== undefined) {
          return comparefn(x, y);
        }
        if (x < y) return -1;
        if (x > y) return 1;
        return +0;
      }
      tmp.sort(sortCompare);
      for (i = 0; i < len; ++i)
        t._setter(i, tmp[i]);
      return t;
    }});

    // %TypedArray%.prototype.subarray(begin = 0, end = this.length )
    // WebIDL: TypedArray subarray(long begin, optional long end);
    Object.defineProperty($TypedArray$.prototype, 'subarray', {value: function(start, end) {
      function clamp(v, min, max) { return v < min ? min : v > max ? max : v; }

      start = ToInt32(start);
      end = ToInt32(end);

      if (arguments.length < 1) { start = 0; }
      if (arguments.length < 2) { end = this.length; }

      if (start < 0) { start = this.length + start; }
      if (end < 0) { end = this.length + end; }

      start = clamp(start, 0, this.length);
      end = clamp(end, 0, this.length);

      var len = end - start;
      if (len < 0) {
        len = 0;
      }

      return new this.constructor(
        this.buffer, this.byteOffset + start * this.BYTES_PER_ELEMENT, len);
    }});

    // %TypedArray%.prototype.toLocaleString ( )
    // %TypedArray%.prototype.toString ( )
    // %TypedArray%.prototype.values ( )
    // %TypedArray%.prototype [ @@iterator ] ( )
    // get %TypedArray%.prototype [ @@toStringTag ]
    // -- defined in es6.js to shim browsers w/ native TypedArrays

    function makeTypedArray(elementSize, pack, unpack) {
      // Each TypedArray type requires a distinct constructor instance with
      // identical logic, which this produces.
      var TypedArray = function() {
        Object.defineProperty(this, 'constructor', {value: TypedArray});
        $TypedArray$.apply(this, arguments);
        makeArrayAccessors(this);
      };
      if ('__proto__' in TypedArray) {
        TypedArray.__proto__ = $TypedArray$;
      } else {
        TypedArray.from = $TypedArray$.from;
        TypedArray.of = $TypedArray$.of;
      }

      TypedArray.BYTES_PER_ELEMENT = elementSize;

      var TypedArrayPrototype = function() {};
      TypedArrayPrototype.prototype = $TypedArrayPrototype$;

      TypedArray.prototype = new TypedArrayPrototype();

      Object.defineProperty(TypedArray.prototype, 'BYTES_PER_ELEMENT', {value: elementSize});
      Object.defineProperty(TypedArray.prototype, '_pack', {value: pack});
      Object.defineProperty(TypedArray.prototype, '_unpack', {value: unpack});

      return TypedArray;
    }

    var Int8Array = makeTypedArray(1, packI8, unpackI8);
    var Uint8Array = makeTypedArray(1, packU8, unpackU8);
    var Uint8ClampedArray = makeTypedArray(1, packU8Clamped, unpackU8);
    var Int16Array = makeTypedArray(2, packI16, unpackI16);
    var Uint16Array = makeTypedArray(2, packU16, unpackU16);
    var Int32Array = makeTypedArray(4, packI32, unpackI32);
    var Uint32Array = makeTypedArray(4, packU32, unpackU32);
    var Float32Array = makeTypedArray(4, packF32, unpackF32);
    var Float64Array = makeTypedArray(8, packF64, unpackF64);

    global.Int8Array = global.Int8Array || Int8Array;
    global.Uint8Array = global.Uint8Array || Uint8Array;
    global.Uint8ClampedArray = global.Uint8ClampedArray || Uint8ClampedArray;
    global.Int16Array = global.Int16Array || Int16Array;
    global.Uint16Array = global.Uint16Array || Uint16Array;
    global.Int32Array = global.Int32Array || Int32Array;
    global.Uint32Array = global.Uint32Array || Uint32Array;
    global.Float32Array = global.Float32Array || Float32Array;
    global.Float64Array = global.Float64Array || Float64Array;
  }());

  //
  // 6 The DataView View Type
  //

  (function() {
    function r(array, index) {
      return IsCallable(array.get) ? array.get(index) : array[index];
    }

    var IS_BIG_ENDIAN = (function() {
      var u16array = new Uint16Array([0x1234]),
          u8array = new Uint8Array(u16array.buffer);
      return r(u8array, 0) === 0x12;
    }());

    // DataView(buffer, byteOffset=0, byteLength=undefined)
    // WebIDL: Constructor(ArrayBuffer buffer,
    //                     optional unsigned long byteOffset,
    //                     optional unsigned long byteLength)
    function DataView(buffer, byteOffset, byteLength) {
      if (!(buffer instanceof ArrayBuffer || Class(buffer) === 'ArrayBuffer')) throw TypeError();

      byteOffset = ToUint32(byteOffset);
      if (byteOffset > buffer.byteLength)
        throw RangeError('byteOffset out of range');

      if (byteLength === undefined)
        byteLength = buffer.byteLength - byteOffset;
      else
        byteLength = ToUint32(byteLength);

      if ((byteOffset + byteLength) > buffer.byteLength)
        throw RangeError('byteOffset and length reference an area beyond the end of the buffer');

      Object.defineProperty(this, 'buffer', {value: buffer});
      Object.defineProperty(this, 'byteLength', {value: byteLength});
      Object.defineProperty(this, 'byteOffset', {value: byteOffset});
    };

    // get DataView.prototype.buffer
    // get DataView.prototype.byteLength
    // get DataView.prototype.byteOffset
    // -- applied directly to instances by the constructor

    function makeGetter(arrayType) {
      return function GetViewValue(byteOffset, littleEndian) {
        byteOffset = ToUint32(byteOffset);

        if (byteOffset + arrayType.BYTES_PER_ELEMENT > this.byteLength)
          throw RangeError('Array index out of range');

        byteOffset += this.byteOffset;

        var uint8Array = new Uint8Array(this.buffer, byteOffset, arrayType.BYTES_PER_ELEMENT),
            bytes = [];
        for (var i = 0; i < arrayType.BYTES_PER_ELEMENT; i += 1)
          bytes.push(r(uint8Array, i));

        if (Boolean(littleEndian) === Boolean(IS_BIG_ENDIAN))
          bytes.reverse();

        return r(new arrayType(new Uint8Array(bytes).buffer), 0);
      };
    }

    Object.defineProperty(DataView.prototype, 'getUint8', {value: makeGetter(Uint8Array)});
    Object.defineProperty(DataView.prototype, 'getInt8', {value: makeGetter(Int8Array)});
    Object.defineProperty(DataView.prototype, 'getUint16', {value: makeGetter(Uint16Array)});
    Object.defineProperty(DataView.prototype, 'getInt16', {value: makeGetter(Int16Array)});
    Object.defineProperty(DataView.prototype, 'getUint32', {value: makeGetter(Uint32Array)});
    Object.defineProperty(DataView.prototype, 'getInt32', {value: makeGetter(Int32Array)});
    Object.defineProperty(DataView.prototype, 'getFloat32', {value: makeGetter(Float32Array)});
    Object.defineProperty(DataView.prototype, 'getFloat64', {value: makeGetter(Float64Array)});

    function makeSetter(arrayType) {
      return function SetViewValue(byteOffset, value, littleEndian) {
        byteOffset = ToUint32(byteOffset);
        if (byteOffset + arrayType.BYTES_PER_ELEMENT > this.byteLength)
          throw RangeError('Array index out of range');

        // Get bytes
        var typeArray = new arrayType([value]),
            byteArray = new Uint8Array(typeArray.buffer),
            bytes = [], i, byteView;

        for (i = 0; i < arrayType.BYTES_PER_ELEMENT; i += 1)
          bytes.push(r(byteArray, i));

        // Flip if necessary
        if (Boolean(littleEndian) === Boolean(IS_BIG_ENDIAN))
          bytes.reverse();

        // Write them
        byteView = new Uint8Array(this.buffer, byteOffset, arrayType.BYTES_PER_ELEMENT);
        byteView.set(bytes);
      };
    }

    Object.defineProperty(DataView.prototype, 'setUint8', {value: makeSetter(Uint8Array)});
    Object.defineProperty(DataView.prototype, 'setInt8', {value: makeSetter(Int8Array)});
    Object.defineProperty(DataView.prototype, 'setUint16', {value: makeSetter(Uint16Array)});
    Object.defineProperty(DataView.prototype, 'setInt16', {value: makeSetter(Int16Array)});
    Object.defineProperty(DataView.prototype, 'setUint32', {value: makeSetter(Uint32Array)});
    Object.defineProperty(DataView.prototype, 'setInt32', {value: makeSetter(Int32Array)});
    Object.defineProperty(DataView.prototype, 'setFloat32', {value: makeSetter(Float32Array)});
    Object.defineProperty(DataView.prototype, 'setFloat64', {value: makeSetter(Float64Array)});

    global.DataView = global.DataView || DataView;

  }());

}(self));
if (!("atob"in self
)) {

// atob
(function(f) {

  'use strict';

  /* istanbul ignore else */
  if (typeof exports === 'object' && exports != null &&
      typeof exports.nodeType !== 'number') {
    module.exports = f ();
  } else if (typeof define === 'function' && define.amd != null) {
    define ([], f);
  } else {
    var base64 = f ();
    var global = typeof self !== 'undefined' ? self : $.global;
    if (typeof global.btoa !== 'function') global.btoa = base64.btoa;
    if (typeof global.atob !== 'function') global.atob = base64.atob;
  }

} (function() {

  'use strict';

  var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

  function InvalidCharacterError(message) {
    this.message = message;
  }
  InvalidCharacterError.prototype = new Error ();
  InvalidCharacterError.prototype.name = 'InvalidCharacterError';

  // encoder
  // [https://gist.github.com/999166] by [https://github.com/nignag]
  function btoa(input) {
    var str = String (input);
    for (
      // initialize result and counter
      var block, charCode, idx = 0, map = chars, output = '';
      // if the next str index does not exist:
      //   change the mapping table to "="
      //   check if d has no fractional digits
      str.charAt (idx | 0) || (map = '=', idx % 1);
      // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
      output += map.charAt (63 & block >> 8 - idx % 1 * 8)
    ) {
      charCode = str.charCodeAt (idx += 3 / 4);
      if (charCode > 0xFF) {
        throw new InvalidCharacterError ("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");
      }
      block = block << 8 | charCode;
    }
    return output;
  }

  // decoder
  // [https://gist.github.com/1020396] by [https://github.com/atk]
  function atob(input) {
    var str = (String (input)).replace (/[=]+$/, ''); // #31: ExtendScript bad parse of /=
    if (str.length % 4 === 1) {
      throw new InvalidCharacterError ("'atob' failed: The string to be decoded is not correctly encoded.");
    }
    for (
      // initialize result and counters
      var bc = 0, bs, buffer, idx = 0, output = '';
      // get next character
      buffer = str.charAt (idx++); // eslint-disable-line no-cond-assign
      // character found in table? initialize bit storage and add its ascii value;
      ~buffer && (bs = bc % 4 ? bs * 64 + buffer : buffer,
        // and if not first of each 4 characters,
        // convert the first 8 bits to one ascii character
        bc++ % 4) ? output += String.fromCharCode (255 & bs >> (-2 * bc & 6)) : 0
    ) {
      // try to find character in table (0-63, not found => -1)
      buffer = chars.indexOf (buffer);
    }
    return output;
  }

  return {btoa: btoa, atob: atob};

}));

}

if (!("Date"in self&&"now"in self.Date&&"getTime"in self.Date.prototype
)) {

// Date.now
Date.now = function now() {
	return new Date().getTime();
};

}

if (!("Date"in self&&"toISOString"in Date.prototype
)) {

// Date.prototype.toISOString
Date.prototype.toISOString = function toISOString() {
	var date = this;

	function pad(str, len) {
		var pad = "0000";
		str = '' + str;
		return pad.substr(0, len - str.length) + str;
	}

	var y = date.getUTCFullYear(),
	m = pad(date.getUTCMonth() + 1, 2),
	d = pad(date.getUTCDate(), 2),
	h = pad(date.getUTCHours(), 2),
	i = pad(date.getUTCMinutes(), 2),
	s = pad(date.getUTCSeconds(), 2),
	ms = pad(date.getUTCMilliseconds(), 3);

	return y +'-'+ m +'-'+ d + 'T' + h +':'+ i +':'+ s +'.'+ ms +'Z';
};

}

if (!("document"in self&&"Document"in self
)) {

// document
if ((typeof WorkerGlobalScope === "undefined") && (typeof importScripts !== "function")) {

	if (self.HTMLDocument) { // IE8

		// HTMLDocument is an extension of Document.  If the browser has HTMLDocument but not Document, the former will suffice as an alias for the latter.
		self.Document = self.HTMLDocument;

	} else {

		// Create an empty function to act as the missing constructor for the document object, attach the document object as its prototype.  The function needs to be anonymous else it is hoisted and causes the feature detect to prematurely pass, preventing the assignments below being made.
		self.Document = self.HTMLDocument = document.constructor = (new Function('return function Document() {}')());
		self.Document.prototype = document;
	}
}

}

if (!((function(){var e=document.createElement("p"),t=!1
return e.innerHTML="<section></section>",document.documentElement.appendChild(e),e.firstChild&&("getComputedStyle"in window?t="block"===getComputedStyle(e.firstChild).display:e.firstChild.currentStyle&&(t="block"===e.firstChild.currentStyle.display)),document.documentElement.removeChild(e),t})()
)) {

// ~html5-elements
/**
* @preserve HTML5 Shiv 3.7.3 | @afarkas @jdalton @jon_neal @rem | MIT/GPL2 Licensed
*/
!function(a,b){function c(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function d(){var a=t.elements;return"string"==typeof a?a.split(" "):a}function e(a,b){var c=t.elements;"string"!=typeof c&&(c=c.join(" ")),"string"!=typeof a&&(a=a.join(" ")),t.elements=c+" "+a,j(b)}function f(a){var b=s[a[q]];return b||(b={},r++,a[q]=r,s[r]=b),b}function g(a,c,d){if(c||(c=b),l)return c.createElement(a);d||(d=f(c));var e;return e=d.cache[a]?d.cache[a].cloneNode():p.test(a)?(d.cache[a]=d.createElem(a)).cloneNode():d.createElem(a),!e.canHaveChildren||o.test(a)||e.tagUrn?e:d.frag.appendChild(e)}function h(a,c){if(a||(a=b),l)return a.createDocumentFragment();c=c||f(a);for(var e=c.frag.cloneNode(),g=0,h=d(),i=h.length;i>g;g++)e.createElement(h[g]);return e}function i(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return t.shivMethods?g(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+d().join().replace(/[\w\-:]+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(t,b.frag)}function j(a){a||(a=b);var d=f(a);return!t.shivCSS||k||d.hasCSS||(d.hasCSS=!!c(a,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),l||i(a,d),a}var k,l,m="3.7.3-pre",n=a.html5||{},o=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,p=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,q="_html5shiv",r=0,s={};!function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",k="hidden"in a,l=1==a.childNodes.length||function(){b.createElement("a");var a=b.createDocumentFragment();return"undefined"==typeof a.cloneNode||"undefined"==typeof a.createDocumentFragment||"undefined"==typeof a.createElement}()}catch(c){k=!0,l=!0}}();var t={elements:n.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:m,shivCSS:n.shivCSS!==!1,supportsUnknownElements:l,shivMethods:n.shivMethods!==!1,type:"default",shivDocument:j,createElement:g,createDocumentFragment:h,addElements:e};a.html5=t,j(b),"object"==typeof module&&module.exports&&(module.exports=t)}("undefined"!=typeof window?window:this,document);
}

if (!("Element"in self&&"HTMLElement"in self
)) {

// Element
(function () {

	if ('Element' in self && 'HTMLElement' in self) {
		return;
	}
	// IE8
	if (window.Element && !window.HTMLElement) {
		window.HTMLElement = window.Element;
		return;
	}

	// create Element constructor
	window.Element = window.HTMLElement = new Function('return function Element() {}')();

	// generate sandboxed iframe
	var vbody = document.appendChild(document.createElement('body'));
	var frame = vbody.appendChild(document.createElement('iframe'));

	// use sandboxed iframe to replicate Element functionality
	var frameDocument = frame.contentWindow.document;
	var prototype = Element.prototype = frameDocument.appendChild(frameDocument.createElement('*'));
	var cache = {};

	// polyfill Element.prototype on an element
	var shiv = function (element, deep) {
		var
		childNodes = element.childNodes || [],
		index = -1,
		key, value, childNode;

		if (element.nodeType === 1 && element.constructor !== Element) {
			element.constructor = Element;

			for (key in cache) {
				value = cache[key];
				element[key] = value;
			}
		}

		// eslint-disable-next-line no-cond-assign
		while (childNode = deep && childNodes[++index]) {
			shiv(childNode, deep);
		}

		return element;
	};

	var elements = document.getElementsByTagName('*');
	var nativeCreateElement = document.createElement;
	var interval;
	var loopLimit = 100;

	prototype.attachEvent('onpropertychange', function (event) {
		var
		propertyName = event.propertyName,
		nonValue = !Object.prototype.hasOwnProperty.call(cache, propertyName),
		newValue = prototype[propertyName],
		oldValue = cache[propertyName],
		index = -1,
		element;

		// eslint-disable-next-line no-cond-assign
		while (element = elements[++index]) {
			if (element.nodeType === 1) {
				if (nonValue || element[propertyName] === oldValue) {
					element[propertyName] = newValue;
				}
			}
		}

		cache[propertyName] = newValue;
	});

	prototype.constructor = Element;

	if (!prototype.hasAttribute) {
		// <Element>.hasAttribute
		prototype.hasAttribute = function hasAttribute(name) {
			return this.getAttribute(name) !== null;
		};
	}

	// Apply Element prototype to the pre-existing DOM as soon as the body element appears.
	function bodyCheck() {
		if (!(loopLimit--)) clearTimeout(interval);
		if (document.body && !document.body.prototype && /(complete|interactive)/.test(document.readyState)) {
			shiv(document, true);
			if (interval && document.body.prototype) clearTimeout(interval);
			return (!!document.body.prototype);
		}
		return false;
	}
	if (!bodyCheck()) {
		document.onreadystatechange = bodyCheck;
		interval = setInterval(bodyCheck, 25);
	}

	// Apply to any new elements created after load
	document.createElement = function createElement(nodeName) {
		var element = nativeCreateElement(String(nodeName).toLowerCase());
		return shiv(element);
	};

	// remove sandboxed iframe
	document.removeChild(vbody);
}());

}


// _mutation
var _mutation = (function () { // eslint-disable-line no-unused-vars

	function isNode(object) {
		// DOM, Level2
		if (typeof Node === 'function') {
			return object instanceof Node;
		}
		// Older browsers, check if it looks like a Node instance)
		return object &&
			typeof object === "object" &&
			object.nodeName &&
			object.nodeType >= 1 &&
			object.nodeType <= 12;
	}

	// http://dom.spec.whatwg.org/#mutation-method-macro
	return function mutation(nodes) {
		if (nodes.length === 1) {
			return isNode(nodes[0]) ? nodes[0] : document.createTextNode(nodes[0] + '');
		}

		var fragment = document.createDocumentFragment();
		for (var i = 0; i < nodes.length; i++) {
			fragment.appendChild(isNode(nodes[i]) ? nodes[i] : document.createTextNode(nodes[i] + ''));

		}
		return fragment;
	};
}());
if (!("document"in self&&"querySelector"in self.document
)) {

// document.querySelector
(function () {
	var
	head = document.getElementsByTagName('head')[0];

	function getElementsByQuery(node, selector, one) {
		var
		generator = document.createElement('div'),
		id = 'qsa' + String(Math.random()).slice(3),
		style, elements;

		generator.innerHTML = 'x<style>' + selector + '{qsa:' + id + ';}';

		style = head.appendChild(generator.lastChild);

		elements = getElements(node, selector, one, id);

		head.removeChild(style);

		return one ? elements[0] : elements;
	}

	function getElements(node, selector, one, id) {
		var
		validNode = /1|9/.test(node.nodeType),
		childNodes = node.childNodes,
		elements = [],
		index = -1,
		childNode;

		if (validNode && node.currentStyle && node.currentStyle.qsa === id) {
			if (elements.push(node) && one) {
				return elements;
			}
		}

		// eslint-disable-next-line no-cond-assign
		while (childNode = childNodes[++index]) {
			elements = elements.concat(getElements(childNode, selector, one, id));

			if (one && elements.length) {
				return elements;
			}
		}

		return elements;
	}

	Document.prototype.querySelector = Element.prototype.querySelector = function querySelectorAll(selector) {
		return getElementsByQuery(this, selector, true);
	};

	Document.prototype.querySelectorAll = Element.prototype.querySelectorAll = function querySelectorAll(selector) {
		return getElementsByQuery(this, selector, false);
	};
}());

}

if (!("Element"in self&&"append"in Element.prototype
)) {

// Element.prototype.append
/* global _mutation */
Document.prototype.append = Element.prototype.append = function append() {
	this.appendChild(_mutation(arguments));
};

}

if (!("document"in self&&"cloneNode"in document.documentElement&&function(){var e=document.createElement("div"),n=document.createElement("input")
n.type="radio",n.checked=!0,e.appendChild(n)
var c,t=n.cloneNode(!1)
try{c=e.cloneNode()}catch(d){return!1}return t.checked&&void 0!==c&&0===c.childNodes.length}()
)) {

// Element.prototype.cloneNode
Element.prototype.cloneNode = (function(nativeFunc, undef) {
	return function(deep) {
		if (deep === undef) {
			deep = false;
		}
		var clone = nativeFunc.call(this, deep);

		if ('checked' in this) clone.checked = this.checked;

		return clone;
	};
}(Element.prototype.cloneNode));

}

if (!("document"in self&&"matches"in document.documentElement
)) {

// Element.prototype.matches
Element.prototype.matches = Element.prototype.webkitMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.mozMatchesSelector || function matches(selector) {

	var element = this;
	var elements = (element.document || element.ownerDocument).querySelectorAll(selector);
	var index = 0;

	while (elements[index] && elements[index] !== element) {
		++index;
	}

	return !!elements[index];
};

}

if (!("document"in self&&"closest"in document.documentElement
)) {

// Element.prototype.closest
Element.prototype.closest = function closest(selector) {
	var node = this;

	while (node) {
		if (node.matches(selector)) return node;
		else node = 'SVGElement' in window && node instanceof SVGElement ? node.parentNode : node.parentElement;
	}

	return null;
};

}

if (!("Element"in self&&"prepend"in Element.prototype
)) {

// Element.prototype.prepend
/* global _mutation */
Document.prototype.prepend = Element.prototype.prepend = function prepend() {
	this.insertBefore(_mutation(arguments), this.firstChild);
};

}

if (!("Element"in self&&"remove"in Element.prototype
)) {

// Element.prototype.remove
Document.prototype.remove = Element.prototype.remove = function remove() {
	if (this.parentNode) {
		this.parentNode.removeChild(this);
	}
};

// Not all UAs support the Text constructor.  Polyfill on the Text constructor only where it exists
// TODO: Add a polyfill for the Text constructor, and make it a dependency of this polyfill.
if ("Text" in self) {
	Text.prototype.remove = Element.prototype.remove;
}

}

if (!("Element"in self&&"replaceWith"in Element.prototype
)) {

// Element.prototype.replaceWith
/* global _mutation */
Document.prototype.replaceWith = Element.prototype.replaceWith = function replaceWith() {
	if (this.parentNode) {
		this.parentNode.replaceChild(_mutation(arguments), this);
	}
};

// Not all UAs support the Text constructor.  Polyfill on the Text constructor only where it exists
// TODO: Add a polyfill for the Text constructor, and make it a dependency of this polyfill.
if ('Text' in self) {
	Text.prototype.replaceWith = Element.prototype.replaceWith;
}

}

if (!("JSON"in self
)) {

// JSON
/*! JSON v3.3.2 | https://bestiejs.github.io/json3 | Copyright 2012-2015, Kit Cambridge, Benjamin Tan | http://kit.mit-license.org */
;(function () {
  // Detect the `define` function exposed by asynchronous module loaders. The
  // strict `define` check is necessary for compatibility with `r.js`.
  var isLoader = typeof define === "function" && define.amd;

  // A set of types used to distinguish objects from primitives.
  var objectTypes = {
    "function": true,
    "object": true
  };

  // Detect the `exports` object exposed by CommonJS implementations.
  var freeExports = objectTypes[typeof exports] && exports && !exports.nodeType && exports;

  // Use the `global` object exposed by Node (including Browserify via
  // `insert-module-globals`), Narwhal, and Ringo as the default context,
  // and the `window` object in browsers. Rhino exports a `global` function
  // instead.
  var root = objectTypes[typeof window] && window || this,
      freeGlobal = freeExports && objectTypes[typeof module] && module && !module.nodeType && typeof global == "object" && global;

  if (freeGlobal && (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal || freeGlobal.self === freeGlobal)) {
    root = freeGlobal;
  }

  // Public: Initializes JSON 3 using the given `context` object, attaching the
  // `stringify` and `parse` functions to the specified `exports` object.
  function runInContext(context, exports) {
    context || (context = root.Object());
    exports || (exports = root.Object());

    // Native constructor aliases.
    var Number = context.Number || root.Number,
        String = context.String || root.String,
        Object = context.Object || root.Object,
        Date = context.Date || root.Date,
        SyntaxError = context.SyntaxError || root.SyntaxError,
        TypeError = context.TypeError || root.TypeError,
        Math = context.Math || root.Math,
        nativeJSON = context.JSON || root.JSON;

    // Delegate to the native `stringify` and `parse` implementations.
    if (typeof nativeJSON == "object" && nativeJSON) {
      exports.stringify = nativeJSON.stringify;
      exports.parse = nativeJSON.parse;
    }

    // Convenience aliases.
    var objectProto = Object.prototype,
        getClass = objectProto.toString,
        isProperty = objectProto.hasOwnProperty,
        undefined;

    // Internal: Contains `try...catch` logic used by other functions.
    // This prevents other functions from being deoptimized.
    function attempt(func, errorFunc) {
      try {
        func();
      } catch (exception) {
        if (errorFunc) {
          errorFunc();
        }
      }
    }

    // Test the `Date#getUTC*` methods. Based on work by @Yaffle.
    var isExtended = new Date(-3509827334573292);
    attempt(function () {
      // The `getUTCFullYear`, `Month`, and `Date` methods return nonsensical
      // results for certain dates in Opera >= 10.53.
      isExtended = isExtended.getUTCFullYear() == -109252 && isExtended.getUTCMonth() === 0 && isExtended.getUTCDate() === 1 &&
        isExtended.getUTCHours() == 10 && isExtended.getUTCMinutes() == 37 && isExtended.getUTCSeconds() == 6 && isExtended.getUTCMilliseconds() == 708;
    });

    // Internal: Determines whether the native `JSON.stringify` and `parse`
    // implementations are spec-compliant. Based on work by Ken Snyder.
    function has(name) {
      if (has[name] != null) {
        // Return cached feature test result.
        return has[name];
      }
      var isSupported;
      if (name == "bug-string-char-index") {
        // IE <= 7 doesn't support accessing string characters using square
        // bracket notation. IE 8 only supports this for primitives.
        isSupported = "a"[0] != "a";
      } else if (name == "json") {
        // Indicates whether both `JSON.stringify` and `JSON.parse` are
        // supported.
        isSupported = has("json-stringify") && has("date-serialization") && has("json-parse");
      } else if (name == "date-serialization") {
        // Indicates whether `Date`s can be serialized accurately by `JSON.stringify`.
        isSupported = has("json-stringify") && isExtended;
        if (isSupported) {
          var stringify = exports.stringify;
          attempt(function () {
            isSupported =
              // JSON 2, Prototype <= 1.7, and older WebKit builds incorrectly
              // serialize extended years.
              stringify(new Date(-8.64e15)) == '"-271821-04-20T00:00:00.000Z"' &&
              // The milliseconds are optional in ES 5, but required in 5.1.
              stringify(new Date(8.64e15)) == '"+275760-09-13T00:00:00.000Z"' &&
              // Firefox <= 11.0 incorrectly serializes years prior to 0 as negative
              // four-digit years instead of six-digit years. Credits: @Yaffle.
              stringify(new Date(-621987552e5)) == '"-000001-01-01T00:00:00.000Z"' &&
              // Safari <= 5.1.5 and Opera >= 10.53 incorrectly serialize millisecond
              // values less than 1000. Credits: @Yaffle.
              stringify(new Date(-1)) == '"1969-12-31T23:59:59.999Z"';
          });
        }
      } else {
        var value, serialized = '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';
        // Test `JSON.stringify`.
        if (name == "json-stringify") {
          var stringify = exports.stringify, stringifySupported = typeof stringify == "function";
          if (stringifySupported) {
            // A test function object with a custom `toJSON` method.
            (value = function () {
              return 1;
            }).toJSON = value;
            attempt(function () {
              stringifySupported =
                // Firefox 3.1b1 and b2 serialize string, number, and boolean
                // primitives as object literals.
                stringify(0) === "0" &&
                // FF 3.1b1, b2, and JSON 2 serialize wrapped primitives as object
                // literals.
                stringify(new Number()) === "0" &&
                stringify(new String()) == '""' &&
                // FF 3.1b1, 2 throw an error if the value is `null`, `undefined`, or
                // does not define a canonical JSON representation (this applies to
                // objects with `toJSON` properties as well, *unless* they are nested
                // within an object or array).
                stringify(getClass) === undefined &&
                // IE 8 serializes `undefined` as `"undefined"`. Safari <= 5.1.7 and
                // FF 3.1b3 pass this test.
                stringify(undefined) === undefined &&
                // Safari <= 5.1.7 and FF 3.1b3 throw `Error`s and `TypeError`s,
                // respectively, if the value is omitted entirely.
                stringify() === undefined &&
                // FF 3.1b1, 2 throw an error if the given value is not a number,
                // string, array, object, Boolean, or `null` literal. This applies to
                // objects with custom `toJSON` methods as well, unless they are nested
                // inside object or array literals. YUI 3.0.0b1 ignores custom `toJSON`
                // methods entirely.
                stringify(value) === "1" &&
                stringify([value]) == "[1]" &&
                // Prototype <= 1.6.1 serializes `[undefined]` as `"[]"` instead of
                // `"[null]"`.
                stringify([undefined]) == "[null]" &&
                // YUI 3.0.0b1 fails to serialize `null` literals.
                stringify(null) == "null" &&
                // FF 3.1b1, 2 halts serialization if an array contains a function:
                // `[1, true, getClass, 1]` serializes as "[1,true,],". FF 3.1b3
                // elides non-JSON values from objects and arrays, unless they
                // define custom `toJSON` methods.
                stringify([undefined, getClass, null]) == "[null,null,null]" &&
                // Simple serialization test. FF 3.1b1 uses Unicode escape sequences
                // where character escape codes are expected (e.g., `\b` => `\u0008`).
                stringify({ "a": [value, true, false, null, "\x00\b\n\f\r\t"] }) == serialized &&
                // FF 3.1b1 and b2 ignore the `filter` and `width` arguments.
                stringify(null, value) === "1" &&
                stringify([1, 2], null, 1) == "[\n 1,\n 2\n]";
            }, function () {
              stringifySupported = false;
            });
          }
          isSupported = stringifySupported;
        }
        // Test `JSON.parse`.
        if (name == "json-parse") {
          var parse = exports.parse, parseSupported;
          if (typeof parse == "function") {
            attempt(function () {
              // FF 3.1b1, b2 will throw an exception if a bare literal is provided.
              // Conforming implementations should also coerce the initial argument to
              // a string prior to parsing.
              if (parse("0") === 0 && !parse(false)) {
                // Simple parsing test.
                value = parse(serialized);
                parseSupported = value["a"].length == 5 && value["a"][0] === 1;
                if (parseSupported) {
                  attempt(function () {
                    // Safari <= 5.1.2 and FF 3.1b1 allow unescaped tabs in strings.
                    parseSupported = !parse('"\t"');
                  });
                  if (parseSupported) {
                    attempt(function () {
                      // FF 4.0 and 4.0.1 allow leading `+` signs and leading
                      // decimal points. FF 4.0, 4.0.1, and IE 9-10 also allow
                      // certain octal literals.
                      parseSupported = parse("01") !== 1;
                    });
                  }
                  if (parseSupported) {
                    attempt(function () {
                      // FF 4.0, 4.0.1, and Rhino 1.7R3-R4 allow trailing decimal
                      // points. These environments, along with FF 3.1b1 and 2,
                      // also allow trailing commas in JSON objects and arrays.
                      parseSupported = parse("1.") !== 1;
                    });
                  }
                }
              }
            }, function () {
              parseSupported = false;
            });
          }
          isSupported = parseSupported;
        }
      }
      return has[name] = !!isSupported;
    }
    has["bug-string-char-index"] = has["date-serialization"] = has["json"] = has["json-stringify"] = has["json-parse"] = null;

    if (!has("json")) {
      // Common `[[Class]]` name aliases.
      var functionClass = "[object Function]",
          dateClass = "[object Date]",
          numberClass = "[object Number]",
          stringClass = "[object String]",
          arrayClass = "[object Array]",
          booleanClass = "[object Boolean]";

      // Detect incomplete support for accessing string characters by index.
      var charIndexBuggy = has("bug-string-char-index");

      // Internal: Normalizes the `for...in` iteration algorithm across
      // environments. Each enumerated key is yielded to a `callback` function.
      var forOwn = function (object, callback) {
        var size = 0, Properties, dontEnums, property;

        // Tests for bugs in the current environment's `for...in` algorithm. The
        // `valueOf` property inherits the non-enumerable flag from
        // `Object.prototype` in older versions of IE, Netscape, and Mozilla.
        (Properties = function () {
          this.valueOf = 0;
        }).prototype.valueOf = 0;

        // Iterate over a new instance of the `Properties` class.
        dontEnums = new Properties();
        for (property in dontEnums) {
          // Ignore all properties inherited from `Object.prototype`.
          if (isProperty.call(dontEnums, property)) {
            size++;
          }
        }
        Properties = dontEnums = null;

        // Normalize the iteration algorithm.
        if (!size) {
          // A list of non-enumerable properties inherited from `Object.prototype`.
          dontEnums = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"];
          // IE <= 8, Mozilla 1.0, and Netscape 6.2 ignore shadowed non-enumerable
          // properties.
          forOwn = function (object, callback) {
            var isFunction = getClass.call(object) == functionClass, property, length;
            var hasProperty = !isFunction && typeof object.constructor != "function" && objectTypes[typeof object.hasOwnProperty] && object.hasOwnProperty || isProperty;
            for (property in object) {
              // Gecko <= 1.0 enumerates the `prototype` property of functions under
              // certain conditions; IE does not.
              if (!(isFunction && property == "prototype") && hasProperty.call(object, property)) {
                callback(property);
              }
            }
            // Manually invoke the callback for each non-enumerable property.
            for (length = dontEnums.length; property = dontEnums[--length];) {
              if (hasProperty.call(object, property)) {
                callback(property);
              }
            }
          };
        } else {
          // No bugs detected; use the standard `for...in` algorithm.
          forOwn = function (object, callback) {
            var isFunction = getClass.call(object) == functionClass, property, isConstructor;
            for (property in object) {
              if (!(isFunction && property == "prototype") && isProperty.call(object, property) && !(isConstructor = property === "constructor")) {
                callback(property);
              }
            }
            // Manually invoke the callback for the `constructor` property due to
            // cross-environment inconsistencies.
            if (isConstructor || isProperty.call(object, (property = "constructor"))) {
              callback(property);
            }
          };
        }
        return forOwn(object, callback);
      };

      // Public: Serializes a JavaScript `value` as a JSON string. The optional
      // `filter` argument may specify either a function that alters how object and
      // array members are serialized, or an array of strings and numbers that
      // indicates which properties should be serialized. The optional `width`
      // argument may be either a string or number that specifies the indentation
      // level of the output.
      if (!has("json-stringify") && !has("date-serialization")) {
        // Internal: A map of control characters and their escaped equivalents.
        var Escapes = {
          92: "\\\\",
          34: '\\"',
          8: "\\b",
          12: "\\f",
          10: "\\n",
          13: "\\r",
          9: "\\t"
        };

        // Internal: Converts `value` into a zero-padded string such that its
        // length is at least equal to `width`. The `width` must be <= 6.
        var leadingZeroes = "000000";
        var toPaddedString = function (width, value) {
          // The `|| 0` expression is necessary to work around a bug in
          // Opera <= 7.54u2 where `0 == -0`, but `String(-0) !== "0"`.
          return (leadingZeroes + (value || 0)).slice(-width);
        };

        // Internal: Serializes a date object.
        var serializeDate = function (value) {
          var getData, year, month, date, time, hours, minutes, seconds, milliseconds;
          // Define additional utility methods if the `Date` methods are buggy.
          if (!isExtended) {
            var floor = Math.floor;
            // A mapping between the months of the year and the number of days between
            // January 1st and the first of the respective month.
            var Months = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
            // Internal: Calculates the number of days between the Unix epoch and the
            // first day of the given month.
            var getDay = function (year, month) {
              return Months[month] + 365 * (year - 1970) + floor((year - 1969 + (month = +(month > 1))) / 4) - floor((year - 1901 + month) / 100) + floor((year - 1601 + month) / 400);
            };
            getData = function (value) {
              // Manually compute the year, month, date, hours, minutes,
              // seconds, and milliseconds if the `getUTC*` methods are
              // buggy. Adapted from @Yaffle's `date-shim` project.
              date = floor(value / 864e5);
              for (year = floor(date / 365.2425) + 1970 - 1; getDay(year + 1, 0) <= date; year++);
              for (month = floor((date - getDay(year, 0)) / 30.42); getDay(year, month + 1) <= date; month++);
              date = 1 + date - getDay(year, month);
              // The `time` value specifies the time within the day (see ES
              // 5.1 section 15.9.1.2). The formula `(A % B + B) % B` is used
              // to compute `A modulo B`, as the `%` operator does not
              // correspond to the `modulo` operation for negative numbers.
              time = (value % 864e5 + 864e5) % 864e5;
              // The hours, minutes, seconds, and milliseconds are obtained by
              // decomposing the time within the day. See section 15.9.1.10.
              hours = floor(time / 36e5) % 24;
              minutes = floor(time / 6e4) % 60;
              seconds = floor(time / 1e3) % 60;
              milliseconds = time % 1e3;
            };
          } else {
            getData = function (value) {
              year = value.getUTCFullYear();
              month = value.getUTCMonth();
              date = value.getUTCDate();
              hours = value.getUTCHours();
              minutes = value.getUTCMinutes();
              seconds = value.getUTCSeconds();
              milliseconds = value.getUTCMilliseconds();
            };
          }
          serializeDate = function (value) {
            if (value > -1 / 0 && value < 1 / 0) {
              // Dates are serialized according to the `Date#toJSON` method
              // specified in ES 5.1 section 15.9.5.44. See section 15.9.1.15
              // for the ISO 8601 date time string format.
              getData(value);
              // Serialize extended years correctly.
              value = (year <= 0 || year >= 1e4 ? (year < 0 ? "-" : "+") + toPaddedString(6, year < 0 ? -year : year) : toPaddedString(4, year)) +
              "-" + toPaddedString(2, month + 1) + "-" + toPaddedString(2, date) +
              // Months, dates, hours, minutes, and seconds should have two
              // digits; milliseconds should have three.
              "T" + toPaddedString(2, hours) + ":" + toPaddedString(2, minutes) + ":" + toPaddedString(2, seconds) +
              // Milliseconds are optional in ES 5.0, but required in 5.1.
              "." + toPaddedString(3, milliseconds) + "Z";
              year = month = date = hours = minutes = seconds = milliseconds = null;
            } else {
              value = null;
            }
            return value;
          };
          return serializeDate(value);
        };

        // For environments with `JSON.stringify` but buggy date serialization,
        // we override the native `Date#toJSON` implementation with a
        // spec-compliant one.
        if (has("json-stringify") && !has("date-serialization")) {
          // Internal: the `Date#toJSON` implementation used to override the native one.
          function dateToJSON (key) {
            return serializeDate(this);
          }

          // Public: `JSON.stringify`. See ES 5.1 section 15.12.3.
          var nativeStringify = exports.stringify;
          exports.stringify = function (source, filter, width) {
            var nativeToJSON = Date.prototype.toJSON;
            Date.prototype.toJSON = dateToJSON;
            var result = nativeStringify(source, filter, width);
            Date.prototype.toJSON = nativeToJSON;
            return result;
          }
        } else {
          // Internal: Double-quotes a string `value`, replacing all ASCII control
          // characters (characters with code unit values between 0 and 31) with
          // their escaped equivalents. This is an implementation of the
          // `Quote(value)` operation defined in ES 5.1 section 15.12.3.
          var unicodePrefix = "\\u00";
          var escapeChar = function (character) {
            var charCode = character.charCodeAt(0), escaped = Escapes[charCode];
            if (escaped) {
              return escaped;
            }
            return unicodePrefix + toPaddedString(2, charCode.toString(16));
          };
          var reEscape = /[\x00-\x1f\x22\x5c]/g;
          var quote = function (value) {
            reEscape.lastIndex = 0;
            return '"' +
              (
                reEscape.test(value)
                  ? value.replace(reEscape, escapeChar)
                  : value
              ) +
              '"';
          };

          // Internal: Recursively serializes an object. Implements the
          // `Str(key, holder)`, `JO(value)`, and `JA(value)` operations.
          var serialize = function (property, object, callback, properties, whitespace, indentation, stack) {
            var value, type, className, results, element, index, length, prefix, result;
            attempt(function () {
              // Necessary for host object support.
              value = object[property];
            });
            if (typeof value == "object" && value) {
              if (value.getUTCFullYear && getClass.call(value) == dateClass && value.toJSON === Date.prototype.toJSON) {
                value = serializeDate(value);
              } else if (typeof value.toJSON == "function") {
                value = value.toJSON(property);
              }
            }
            if (callback) {
              // If a replacement function was provided, call it to obtain the value
              // for serialization.
              value = callback.call(object, property, value);
            }
            // Exit early if value is `undefined` or `null`.
            if (value == undefined) {
              return value === undefined ? value : "null";
            }
            type = typeof value;
            // Only call `getClass` if the value is an object.
            if (type == "object") {
              className = getClass.call(value);
            }
            switch (className || type) {
              case "boolean":
              case booleanClass:
                // Booleans are represented literally.
                return "" + value;
              case "number":
              case numberClass:
                // JSON numbers must be finite. `Infinity` and `NaN` are serialized as
                // `"null"`.
                return value > -1 / 0 && value < 1 / 0 ? "" + value : "null";
              case "string":
              case stringClass:
                // Strings are double-quoted and escaped.
                return quote("" + value);
            }
            // Recursively serialize objects and arrays.
            if (typeof value == "object") {
              // Check for cyclic structures. This is a linear search; performance
              // is inversely proportional to the number of unique nested objects.
              for (length = stack.length; length--;) {
                if (stack[length] === value) {
                  // Cyclic structures cannot be serialized by `JSON.stringify`.
                  throw TypeError();
                }
              }
              // Add the object to the stack of traversed objects.
              stack.push(value);
              results = [];
              // Save the current indentation level and indent one additional level.
              prefix = indentation;
              indentation += whitespace;
              if (className == arrayClass) {
                // Recursively serialize array elements.
                for (index = 0, length = value.length; index < length; index++) {
                  element = serialize(index, value, callback, properties, whitespace, indentation, stack);
                  results.push(element === undefined ? "null" : element);
                }
                result = results.length ? (whitespace ? "[\n" + indentation + results.join(",\n" + indentation) + "\n" + prefix + "]" : ("[" + results.join(",") + "]")) : "[]";
              } else {
                // Recursively serialize object members. Members are selected from
                // either a user-specified list of property names, or the object
                // itself.
                forOwn(properties || value, function (property) {
                  var element = serialize(property, value, callback, properties, whitespace, indentation, stack);
                  if (element !== undefined) {
                    // According to ES 5.1 section 15.12.3: "If `gap` {whitespace}
                    // is not the empty string, let `member` {quote(property) + ":"}
                    // be the concatenation of `member` and the `space` character."
                    // The "`space` character" refers to the literal space
                    // character, not the `space` {width} argument provided to
                    // `JSON.stringify`.
                    results.push(quote(property) + ":" + (whitespace ? " " : "") + element);
                  }
                });
                result = results.length ? (whitespace ? "{\n" + indentation + results.join(",\n" + indentation) + "\n" + prefix + "}" : ("{" + results.join(",") + "}")) : "{}";
              }
              // Remove the object from the traversed object stack.
              stack.pop();
              return result;
            }
          };

          // Public: `JSON.stringify`. See ES 5.1 section 15.12.3.
          exports.stringify = function (source, filter, width) {
            var whitespace, callback, properties, className;
            if (objectTypes[typeof filter] && filter) {
              className = getClass.call(filter);
              if (className == functionClass) {
                callback = filter;
              } else if (className == arrayClass) {
                // Convert the property names array into a makeshift set.
                properties = {};
                for (var index = 0, length = filter.length, value; index < length;) {
                  value = filter[index++];
                  className = getClass.call(value);
                  if (className == "[object String]" || className == "[object Number]") {
                    properties[value] = 1;
                  }
                }
              }
            }
            if (width) {
              className = getClass.call(width);
              if (className == numberClass) {
                // Convert the `width` to an integer and create a string containing
                // `width` number of space characters.
                if ((width -= width % 1) > 0) {
                  if (width > 10) {
                    width = 10;
                  }
                  for (whitespace = ""; whitespace.length < width;) {
                    whitespace += " ";
                  }
                }
              } else if (className == stringClass) {
                whitespace = width.length <= 10 ? width : width.slice(0, 10);
              }
            }
            // Opera <= 7.54u2 discards the values associated with empty string keys
            // (`""`) only if they are used directly within an object member list
            // (e.g., `!("" in { "": 1})`).
            return serialize("", (value = {}, value[""] = source, value), callback, properties, whitespace, "", []);
          };
        }
      }

      // Public: Parses a JSON source string.
      if (!has("json-parse")) {
        var fromCharCode = String.fromCharCode;

        // Internal: A map of escaped control characters and their unescaped
        // equivalents.
        var Unescapes = {
          92: "\\",
          34: '"',
          47: "/",
          98: "\b",
          116: "\t",
          110: "\n",
          102: "\f",
          114: "\r"
        };

        // Internal: Stores the parser state.
        var Index, Source;

        // Internal: Resets the parser state and throws a `SyntaxError`.
        var abort = function () {
          Index = Source = null;
          throw SyntaxError();
        };

        // Internal: Returns the next token, or `"$"` if the parser has reached
        // the end of the source string. A token may be a string, number, `null`
        // literal, or Boolean literal.
        var lex = function () {
          var source = Source, length = source.length, value, begin, position, isSigned, charCode;
          while (Index < length) {
            charCode = source.charCodeAt(Index);
            switch (charCode) {
              case 9: case 10: case 13: case 32:
                // Skip whitespace tokens, including tabs, carriage returns, line
                // feeds, and space characters.
                Index++;
                break;
              case 123: case 125: case 91: case 93: case 58: case 44:
                // Parse a punctuator token (`{`, `}`, `[`, `]`, `:`, or `,`) at
                // the current position.
                value = charIndexBuggy ? source.charAt(Index) : source[Index];
                Index++;
                return value;
              case 34:
                // `"` delimits a JSON string; advance to the next character and
                // begin parsing the string. String tokens are prefixed with the
                // sentinel `@` character to distinguish them from punctuators and
                // end-of-string tokens.
                for (value = "@", Index++; Index < length;) {
                  charCode = source.charCodeAt(Index);
                  if (charCode < 32) {
                    // Unescaped ASCII control characters (those with a code unit
                    // less than the space character) are not permitted.
                    abort();
                  } else if (charCode == 92) {
                    // A reverse solidus (`\`) marks the beginning of an escaped
                    // control character (including `"`, `\`, and `/`) or Unicode
                    // escape sequence.
                    charCode = source.charCodeAt(++Index);
                    switch (charCode) {
                      case 92: case 34: case 47: case 98: case 116: case 110: case 102: case 114:
                        // Revive escaped control characters.
                        value += Unescapes[charCode];
                        Index++;
                        break;
                      case 117:
                        // `\u` marks the beginning of a Unicode escape sequence.
                        // Advance to the first character and validate the
                        // four-digit code point.
                        begin = ++Index;
                        for (position = Index + 4; Index < position; Index++) {
                          charCode = source.charCodeAt(Index);
                          // A valid sequence comprises four hexdigits (case-
                          // insensitive) that form a single hexadecimal value.
                          if (!(charCode >= 48 && charCode <= 57 || charCode >= 97 && charCode <= 102 || charCode >= 65 && charCode <= 70)) {
                            // Invalid Unicode escape sequence.
                            abort();
                          }
                        }
                        // Revive the escaped character.
                        value += fromCharCode("0x" + source.slice(begin, Index));
                        break;
                      default:
                        // Invalid escape sequence.
                        abort();
                    }
                  } else {
                    if (charCode == 34) {
                      // An unescaped double-quote character marks the end of the
                      // string.
                      break;
                    }
                    charCode = source.charCodeAt(Index);
                    begin = Index;
                    // Optimize for the common case where a string is valid.
                    while (charCode >= 32 && charCode != 92 && charCode != 34) {
                      charCode = source.charCodeAt(++Index);
                    }
                    // Append the string as-is.
                    value += source.slice(begin, Index);
                  }
                }
                if (source.charCodeAt(Index) == 34) {
                  // Advance to the next character and return the revived string.
                  Index++;
                  return value;
                }
                // Unterminated string.
                abort();
              default:
                // Parse numbers and literals.
                begin = Index;
                // Advance past the negative sign, if one is specified.
                if (charCode == 45) {
                  isSigned = true;
                  charCode = source.charCodeAt(++Index);
                }
                // Parse an integer or floating-point value.
                if (charCode >= 48 && charCode <= 57) {
                  // Leading zeroes are interpreted as octal literals.
                  if (charCode == 48 && ((charCode = source.charCodeAt(Index + 1)), charCode >= 48 && charCode <= 57)) {
                    // Illegal octal literal.
                    abort();
                  }
                  isSigned = false;
                  // Parse the integer component.
                  for (; Index < length && ((charCode = source.charCodeAt(Index)), charCode >= 48 && charCode <= 57); Index++);
                  // Floats cannot contain a leading decimal point; however, this
                  // case is already accounted for by the parser.
                  if (source.charCodeAt(Index) == 46) {
                    position = ++Index;
                    // Parse the decimal component.
                    for (; position < length; position++) {
                      charCode = source.charCodeAt(position);
                      if (charCode < 48 || charCode > 57) {
                        break;
                      }
                    }
                    if (position == Index) {
                      // Illegal trailing decimal.
                      abort();
                    }
                    Index = position;
                  }
                  // Parse exponents. The `e` denoting the exponent is
                  // case-insensitive.
                  charCode = source.charCodeAt(Index);
                  if (charCode == 101 || charCode == 69) {
                    charCode = source.charCodeAt(++Index);
                    // Skip past the sign following the exponent, if one is
                    // specified.
                    if (charCode == 43 || charCode == 45) {
                      Index++;
                    }
                    // Parse the exponential component.
                    for (position = Index; position < length; position++) {
                      charCode = source.charCodeAt(position);
                      if (charCode < 48 || charCode > 57) {
                        break;
                      }
                    }
                    if (position == Index) {
                      // Illegal empty exponent.
                      abort();
                    }
                    Index = position;
                  }
                  // Coerce the parsed value to a JavaScript number.
                  return +source.slice(begin, Index);
                }
                // A negative sign may only precede numbers.
                if (isSigned) {
                  abort();
                }
                // `true`, `false`, and `null` literals.
                var temp = source.slice(Index, Index + 4);
                if (temp == "true") {
                  Index += 4;
                  return true;
                } else if (temp == "fals" && source.charCodeAt(Index + 4 ) == 101) {
                  Index += 5;
                  return false;
                } else if (temp == "null") {
                  Index += 4;
                  return null;
                }
                // Unrecognized token.
                abort();
            }
          }
          // Return the sentinel `$` character if the parser has reached the end
          // of the source string.
          return "$";
        };

        // Internal: Parses a JSON `value` token.
        var get = function (value) {
          var results, hasMembers;
          if (value == "$") {
            // Unexpected end of input.
            abort();
          }
          if (typeof value == "string") {
            if ((charIndexBuggy ? value.charAt(0) : value[0]) == "@") {
              // Remove the sentinel `@` character.
              return value.slice(1);
            }
            // Parse object and array literals.
            if (value == "[") {
              // Parses a JSON array, returning a new JavaScript array.
              results = [];
              for (;;) {
                value = lex();
                // A closing square bracket marks the end of the array literal.
                if (value == "]") {
                  break;
                }
                // If the array literal contains elements, the current token
                // should be a comma separating the previous element from the
                // next.
                if (hasMembers) {
                  if (value == ",") {
                    value = lex();
                    if (value == "]") {
                      // Unexpected trailing `,` in array literal.
                      abort();
                    }
                  } else {
                    // A `,` must separate each array element.
                    abort();
                  }
                } else {
                  hasMembers = true;
                }
                // Elisions and leading commas are not permitted.
                if (value == ",") {
                  abort();
                }
                results.push(get(value));
              }
              return results;
            } else if (value == "{") {
              // Parses a JSON object, returning a new JavaScript object.
              results = {};
              for (;;) {
                value = lex();
                // A closing curly brace marks the end of the object literal.
                if (value == "}") {
                  break;
                }
                // If the object literal contains members, the current token
                // should be a comma separator.
                if (hasMembers) {
                  if (value == ",") {
                    value = lex();
                    if (value == "}") {
                      // Unexpected trailing `,` in object literal.
                      abort();
                    }
                  } else {
                    // A `,` must separate each object member.
                    abort();
                  }
                } else {
                  hasMembers = true;
                }
                // Leading commas are not permitted, object property names must be
                // double-quoted strings, and a `:` must separate each property
                // name and value.
                if (value == "," || typeof value != "string" || (charIndexBuggy ? value.charAt(0) : value[0]) != "@" || lex() != ":") {
                  abort();
                }
                results[value.slice(1)] = get(lex());
              }
              return results;
            }
            // Unexpected token encountered.
            abort();
          }
          return value;
        };

        // Internal: Updates a traversed object member.
        var update = function (source, property, callback) {
          var element = walk(source, property, callback);
          if (element === undefined) {
            delete source[property];
          } else {
            source[property] = element;
          }
        };

        // Internal: Recursively traverses a parsed JSON object, invoking the
        // `callback` function for each value. This is an implementation of the
        // `Walk(holder, name)` operation defined in ES 5.1 section 15.12.2.
        var walk = function (source, property, callback) {
          var value = source[property], length;
          if (typeof value == "object" && value) {
            // `forOwn` can't be used to traverse an array in Opera <= 8.54
            // because its `Object#hasOwnProperty` implementation returns `false`
            // for array indices (e.g., `![1, 2, 3].hasOwnProperty("0")`).
            if (getClass.call(value) == arrayClass) {
              for (length = value.length; length--;) {
                update(getClass, forOwn, value, length, callback);
              }
            } else {
              forOwn(value, function (property) {
                update(value, property, callback);
              });
            }
          }
          return callback.call(source, property, value);
        };

        // Public: `JSON.parse`. See ES 5.1 section 15.12.2.
        exports.parse = function (source, callback) {
          var result, value;
          Index = 0;
          Source = "" + source;
          result = get(lex());
          // If a JSON string contains multiple tokens, it is invalid.
          if (lex() != "$") {
            abort();
          }
          // Reset the parser state.
          Index = Source = null;
          return callback && getClass.call(callback) == functionClass ? walk((value = {}, value[""] = result, value), "", callback) : result;
        };
      }
    }

    exports.runInContext = runInContext;
    return exports;
  }

  if (freeExports && !isLoader) {
    // Export for CommonJS environments.
    runInContext(root, freeExports);
  } else {
    // Export for web browsers and JavaScript engines.
    var nativeJSON = root.JSON,
        previousJSON = root.JSON3,
        isRestored = false;

    var JSON3 = runInContext(root, (root.JSON3 = {
      // Public: Restores the original value of the global `JSON` object and
      // returns a reference to the `JSON3` object.
      "noConflict": function () {
        if (!isRestored) {
          isRestored = true;
          root.JSON = nativeJSON;
          root.JSON3 = previousJSON;
          nativeJSON = previousJSON = null;
        }
        return JSON3;
      }
    }));

    root.JSON = {
      "parse": JSON3.parse,
      "stringify": JSON3.stringify
    };
  }

  // Export for asynchronous module loaders.
  if (isLoader) {
    define(function () {
      return JSON3;
    });
  }
}).call(this);

}

if (!(document.contains
)) {

// Node.prototype.contains
(function() {

	function contains(node) {
		if (!(0 in arguments)) {
			throw new TypeError('1 argument is required');
		}

		do {
			if (this === node) {
				return true;
			}
		// eslint-disable-next-line no-cond-assign
		} while (node = node && node.parentNode);

		return false;
	}

	// IE
	if ('HTMLElement' in self && 'contains' in HTMLElement.prototype) {
		try {
			delete HTMLElement.prototype.contains;
		// eslint-disable-next-line no-empty
		} catch (e) {}
	}

	if ('Node' in self) {
		Node.prototype.contains = contains;
	} else {
		document.contains = Element.prototype.contains = contains;
	}

}());

}

if (!(document.isSameNode
)) {

// Node.prototype.isSameNode
(function() {

	function isSameNode(otherNode) {
		if (!(0 in arguments)) {
			throw new TypeError('1 argument is required');
		}

		return this === otherNode;
	}

	// IE
	if ('HTMLElement' in self && 'isSameNode' in HTMLElement.prototype) {
		try {
			delete HTMLElement.prototype.isSameNode;
		// eslint-disable-next-line no-empty
		} catch (e) {}
	}

	if ('Node' in self) {
		Node.prototype.isSameNode = isSameNode;
	} else {
		document.isSameNode = Element.prototype.isSameNode = isSameNode;
	}

}());

}

if (!("defineProperty"in Object&&function(){try{var e={}
return Object.defineProperty(e,"test",{value:42}),!0}catch(t){return!1}}()
)) {

// Object.defineProperty
(function (nativeDefineProperty) {

	var supportsAccessors = Object.prototype.hasOwnProperty.call(Object.prototype, '__defineGetter__');
	var ERR_ACCESSORS_NOT_SUPPORTED = 'Getters & setters cannot be defined on this javascript engine';
	var ERR_VALUE_ACCESSORS = 'A property cannot both have accessors and be writable or have a value';

	// Polyfill.io - This does not use CreateMethodProperty because our CreateMethodProperty function uses Object.defineProperty.
	Object.defineProperty = function defineProperty(object, property, descriptor) {

		// Where native support exists, assume it
		if (nativeDefineProperty && (object === window || object === document || object === Element.prototype || object instanceof Element)) {
			return nativeDefineProperty(object, property, descriptor);
		}

		if (object === null || !(object instanceof Object || typeof object === 'object')) {
			throw new TypeError('Object.defineProperty called on non-object');
		}

		if (!(descriptor instanceof Object)) {
			throw new TypeError('Property description must be an object');
		}

		var propertyString = String(property);
		var hasValueOrWritable = 'value' in descriptor || 'writable' in descriptor;
		var getterType = 'get' in descriptor && typeof descriptor.get;
		var setterType = 'set' in descriptor && typeof descriptor.set;

		// handle descriptor.get
		if (getterType) {
			if (getterType === undefined) {
				return object;
			}
			if (getterType !== 'function') {
				throw new TypeError('Getter must be a function');
			}
			if (!supportsAccessors) {
				throw new TypeError(ERR_ACCESSORS_NOT_SUPPORTED);
			}
			if (hasValueOrWritable) {
				throw new TypeError(ERR_VALUE_ACCESSORS);
			}
			Object.__defineGetter__.call(object, propertyString, descriptor.get);
		} else {
			object[propertyString] = descriptor.value;
		}

		// handle descriptor.set
		if (setterType) {
			if (setterType === undefined) {
				return object;
			}
			if (setterType !== 'function') {
				throw new TypeError('Setter must be a function');
			}
			if (!supportsAccessors) {
				throw new TypeError(ERR_ACCESSORS_NOT_SUPPORTED);
			}
			if (hasValueOrWritable) {
				throw new TypeError(ERR_VALUE_ACCESSORS);
			}
			Object.__defineSetter__.call(object, propertyString, descriptor.set);
		}

		// OK to define value unconditionally - if a getter has been specified as well, an error would be thrown above
		if ('value' in descriptor) {
			object[propertyString] = descriptor.value;
		}

		return object;
	};
}(Object.defineProperty));

}


// _ESAbstract.CreateDataProperty
// 7.3.4. CreateDataProperty ( O, P, V )
// NOTE
// This abstract operation creates a property whose attributes are set to the same defaults used for properties created by the ECMAScript language assignment operator.
// Normally, the property will not already exist. If it does exist and is not configurable or if O is not extensible, [[DefineOwnProperty]] will return false.
function CreateDataProperty(O, P, V) { // eslint-disable-line no-unused-vars
	// 1. Assert: Type(O) is Object.
	// 2. Assert: IsPropertyKey(P) is true.
	// 3. Let newDesc be the PropertyDescriptor{ [[Value]]: V, [[Writable]]: true, [[Enumerable]]: true, [[Configurable]]: true }.
	var newDesc = {
		value: V,
		writable: true,
		enumerable: true,
		configurable: true
	};
	// 4. Return ? O.[[DefineOwnProperty]](P, newDesc).
	try {
		Object.defineProperty(O, P, newDesc);
		return true;
	} catch (e) {
		return false;
	}
}

// _ESAbstract.CreateDataPropertyOrThrow
/* global CreateDataProperty */
// 7.3.6. CreateDataPropertyOrThrow ( O, P, V )
function CreateDataPropertyOrThrow(O, P, V) { // eslint-disable-line no-unused-vars
	// 1. Assert: Type(O) is Object.
	// 2. Assert: IsPropertyKey(P) is true.
	// 3. Let success be ? CreateDataProperty(O, P, V).
	var success = CreateDataProperty(O, P, V);
	// 4. If success is false, throw a TypeError exception.
	if (!success) {
		throw new TypeError('Cannot assign value `' + Object.prototype.toString.call(V) + '` to property `' + Object.prototype.toString.call(P) + '` on object `' + Object.prototype.toString.call(O) + '`');
	}
	// 5. Return success.
	return success;
}

// _ESAbstract.FlattenIntoArray
/* globals ToString, HasProperty, Get, Call, IsArray, ToLength, CreateDataPropertyOrThrow */
// 22.1.3.10.1 FlattenIntoArray(target, source, sourceLen, start, depth [ , mapperFunction, thisArg ])
function FlattenIntoArray(target, source, sourceLen, start, depth /* , mapperFunction, thisArg */ ) { // eslint-disable-line no-unused-vars
	var mapperFunction = arguments[5];
	var thisArg = arguments[6];
	// 1. Let targetIndex be start.
	var targetIndex = start;
	// 2. Let sourceIndex be 0.
	var sourceIndex = 0;
	// 3. Repeat, while sourceIndex < sourceLen
	while (sourceIndex < sourceLen) {
		// a. Let P be ! ToString(sourceIndex).
		var P = ToString(sourceIndex);
		// b. Let exists be ? HasProperty(source, P).
		var exists = HasProperty(source, P);
		// c. If exists is true, then
		if (exists === true) {
			// i. Let element be ? Get(source, P).
			var element = Get(source, P);
			// ii. If mapperFunction is present, then
			if (5 in arguments) {
				// 1. Assert: thisArg is present.
				// 2. Set element to ? Call(mapperFunction, thisArg , « element, sourceIndex, source »).
				element = Call(mapperFunction, thisArg, [element, sourceIndex, source]);
			}
			// iii. Let shouldFlatten be false.
			var shouldFlatten = false;
			// iv. If depth > 0, then
			if (depth > 0) {
				// 1. Set shouldFlatten to ? IsArray(element).
				shouldFlatten = IsArray(element);
			}
			// v. If shouldFlatten is true, then
			if (shouldFlatten === true) {
				// 1. Let elementLen be ? ToLength(? Get(element, "length")).
				var elementLen = ToLength(Get(element, "length"));
				// 2. Set targetIndex to ? FlattenIntoArray(target, element, elementLen, targetIndex, depth - 1).
				targetIndex = FlattenIntoArray(target, element, elementLen, targetIndex, depth - 1); // eslint-disable-line no-unused-vars
				// vi. Else,
			} else {
				// 1. If targetIndex ≥ 253-1, throw a TypeError exception.
				if (targetIndex >= (Math.pow(2, 53) - 1)) {
					throw new TypeError("targetIndex is greater than or equal to 2^53-1");
				}
				// 2. Perform ? CreateDataPropertyOrThrow(target, ! ToString(targetIndex), element).
				CreateDataPropertyOrThrow(target, ToString(targetIndex), element);
				// 3. Increase targetIndex by 1.
				targetIndex += 1;
			}
		}
		// d. Increase sourceIndex by 1.
		sourceIndex += 1;
	}
	// 4. Return targetIndex.
	return targetIndex;
}

// _ESAbstract.CreateIterResultObject
/* global Type, CreateDataProperty */
// 7.4.7. CreateIterResultObject ( value, done )
function CreateIterResultObject(value, done) { // eslint-disable-line no-unused-vars
	// 1. Assert: Type(done) is Boolean.
	if (Type(done) !== 'boolean') {
		throw new Error();
	}
	// 2. Let obj be ObjectCreate(%ObjectPrototype%).
	var obj = {};
	// 3. Perform CreateDataProperty(obj, "value", value).
	CreateDataProperty(obj, "value", value);
	// 4. Perform CreateDataProperty(obj, "done", done).
	CreateDataProperty(obj, "done", done);
	// 5. Return obj.
	return obj;
}

// _ESAbstract.CreateMethodProperty
// 7.3.5. CreateMethodProperty ( O, P, V )
function CreateMethodProperty(O, P, V) { // eslint-disable-line no-unused-vars
	// 1. Assert: Type(O) is Object.
	// 2. Assert: IsPropertyKey(P) is true.
	// 3. Let newDesc be the PropertyDescriptor{[[Value]]: V, [[Writable]]: true, [[Enumerable]]: false, [[Configurable]]: true}.
	var newDesc = {
		value: V,
		writable: true,
		enumerable: false,
		configurable: true
	};
	// 4. Return ? O.[[DefineOwnProperty]](P, newDesc).
	Object.defineProperty(O, P, newDesc);
}
if (!("isArray"in Array
)) {

// Array.isArray
/* global CreateMethodProperty, IsArray */
// 22.1.2.2. Array.isArray ( arg )
CreateMethodProperty(Array, 'isArray', function isArray(arg) {
	// 1. Return ? IsArray(arg).
	return IsArray(arg);
});

}

if (!("at"in Array.prototype
)) {

// Array.prototype.at
/* global CreateMethodProperty, Get, LengthOfArrayLike, ToIntegerOrInfinity, ToObject, ToString */
// 23.1.3.1. Array.prototype.at ( index )
CreateMethodProperty(Array.prototype, 'at', function at(index) {
	// 1. Let O be ? ToObject(this value).
	var O = ToObject(this);
	// 2. Let len be ? LengthOfArrayLike(O).
	var len = LengthOfArrayLike(O);
	// 3. Let relativeIndex be ? ToIntegerOrInfinity(index).
	var relativeIndex = ToIntegerOrInfinity(index);
	// 4. If relativeIndex ≥ 0, then
	// 4.a. Let k be relativeIndex.
	// 5. Else,
	// 5.a. Let k be len + relativeIndex.
	var k = relativeIndex >= 0 ? relativeIndex : len + relativeIndex;
	// 6. If k < 0 or k ≥ len, return undefined.
	if (k < 0 || k >= len) return undefined;
	// 7. Return ? Get(O, ! ToString(𝔽(k))).
	return Get(O, ToString(k));
});

}

if (!("copyWithin"in Array.prototype&&function(){try{var t=function n(){}
t.prototype[0]="foo"
var o=new t
o[1]=1,o[2]=2,o.length=3
var r=Array.prototype.copyWithin.call(o,1,0)
return!(!r[0]||Object.prototype.hasOwnProperty.call(r,"0")||!Object.prototype.hasOwnProperty.call(r,"1")||"foo"!==r[0]||"foo"!==r[1]||1!==r[2]||3!==r.length)}catch(e){return!1}}()
)) {

// Array.prototype.copyWithin
/* global CreateMethodProperty, HasProperty, ToInteger */
// 22.1.3.3 Array.prototype.copyWithin ( target, start [ , end ] )
CreateMethodProperty(Array.prototype, 'copyWithin', function copyWithin(target, start /* [ , end ] */ ) {
	'use strict';
	var end = arguments[2];

	// 22.1.3.3.1 Let O be ? ToObject(this value).
	if (this === null || this === undefined) {
		throw new TypeError('Cannot call method on ' + this);
	}

	var o = Object(this);

	// 22.1.3.3.2 Let len be ? ToLength(? Get(O, "length")).
	var len = ToInteger(o.length);
	if (len <= 0) {
		len = 0;
	}
	if (len === Infinity) {
		len = Math.pow(2, 53) - 1;
	} else {
		len = Math.min(len, Math.pow(2, 53) - 1);
	}
	len = Math.max(len, 0);

	// 22.1.3.3.3 Let relativeTarget be ? ToInteger(target).
	var relativeTarget = ToInteger(target);

	// 22.1.3.3.4 If relativeTarget < 0, let to be max((len + relativeTarget), 0); else let to be min(relativeTarget, len).
	var to;
	if (relativeTarget < 0) {
		to = Math.max(len + relativeTarget, 0);
	} else {
		to = Math.min(relativeTarget, len);
	}

	// 22.1.3.3.5 Let relativeStart be ? ToInteger(start).
	var relativeStart = ToInteger(start);

	// 22.1.3.3.6 If relativeStart < 0, let from be max((len + relativeStart), 0); else let from be min(relativeStart, len).
	var from;
	if (relativeStart < 0) {
		from = Math.max(len + relativeStart, 0);
	} else {
		from = Math.min(relativeStart, len);
	}

	// 22.1.3.3.7 If end is undefined, let relativeEnd be len; else let relativeEnd be ? ToInteger(end).
	var relativeEnd;
	if (end === undefined) {
		relativeEnd = len;
	} else {
		relativeEnd = ToInteger(end);
	}

	// 22.1.3.3.8 If relativeEnd < 0, let final be max((len + relativeEnd), 0); else let final be min(relativeEnd, len).
	var final;
	if (relativeEnd < 0) {
		final = Math.max(len + relativeEnd, 0);
	} else {
		final = Math.min(relativeEnd, len);
	}

	// 22.1.3.3.9 Let count be min(final-from, len-to).
	var count = Math.min(final - from, len - to);

	// 22.1.3.3.10 If from<to and to<from+count, then
	var direction;
	if (from < to && to < from + count) {
		// 22.1.3.3.10.a Let direction be -1.
		direction = -1;

		// 22.1.3.3.10.b Let from be from + count - 1.
		from = from + count - 1;

		// 22.1.3.3.10.c Let to be to + count - 1.
		to = to + count - 1;
	} else {
		// 22.1.3.3.11 Else,
		// 22.1.3.3.11.a Let direction be 1.
		direction = 1;
	}

	// 22.1.3.3.12 Repeat, while count > 0
	while (count > 0) {
		// 22.1.3.3.12.a Let fromKey be ! ToString(from).
		var fromKey = String(from);
		// 22.1.3.3.12.b Let toKey be ! ToString(to).
		var toKey = String(to);
		// 22.1.3.3.12.c Let fromPresent be ? HasProperty(O, fromKey).
		var fromPresent = HasProperty(o, fromKey);
		// 22.1.3.3.12.d If fromPresent is true, then
		if (fromPresent) {
			// 22.1.3.3.12.d.i Let fromVal be ? Get(O, fromKey).
			var fromVal = o[fromKey];
			// 22.1.3.3.12.d.ii Perform ? Set(O, toKey, fromVal, true).
			o[toKey] = fromVal;
		} else {
			// 22.1.3.3.12.e Else fromPresent is false,
			// 22.1.3.3.12.e.i Perform ? DeletePropertyOrThrow(O, toKey).
			delete o[toKey];
		}
		// 22.1.3.3.12.f Let from be from + direction.
		from = from + direction;
		// 22.1.3.3.12.g Let to be to + direction.
		to = to + direction;
		// 22.1.3.3.12.h Let count be count - 1.
		count = count - 1;
	}
	// 22.1.3.3.13 Return O.
	return o;
});

}

if (!("every"in Array.prototype
)) {

// Array.prototype.every
/* global Call, CreateMethodProperty, Get, HasProperty, IsCallable, ToBoolean, ToLength, ToObject, ToString */
// 22.1.3.5. Array.prototype.every ( callbackfn [ , thisArg ] )
CreateMethodProperty(Array.prototype, 'every', function every(callbackfn /* [ , thisArg ] */) {
	// 1. Let O be ? ToObject(this value).
	var O = ToObject(this);
	// 2. Let len be ? ToLength(? Get(O, "length")).
	var len = ToLength(Get(O, "length"));
	// 3. If IsCallable(callbackfn) is false, throw a TypeError exception.
	if (IsCallable(callbackfn) === false) {
		throw new TypeError(callbackfn + ' is not a function');
	}
	// 4. If thisArg is present, let T be thisArg; else let T be undefined.
	var T = arguments.length > 1 ? arguments[1] : undefined;
	// 5. Let k be 0.
	var k = 0;
	// 6. Repeat, while k < len
	while (k < len) {
		// a. Let Pk be ! ToString(k).
		var Pk = ToString(k);
		// b. Let kPresent be ? HasProperty(O, Pk).
		var kPresent = HasProperty(O, Pk);
		// c. If kPresent is true, then
		if (kPresent) {
			// i. Let kValue be ? Get(O, Pk).
			var kValue = Get(O, Pk);
			// ii. Let testResult be ToBoolean(? Call(callbackfn, T, « kValue, k, O »)).
			var testResult = ToBoolean(Call(callbackfn, T, [kValue, k, O]));
			// iii. If testResult is false, return false.
			if (testResult === false) {
				return false;
			}
		}
		// d. Increase k by 1.
		k = k + 1;
	}
	// 7. Return true.
	return true;
});

}

if (!("fill"in Array.prototype
)) {

// Array.prototype.fill
/* global CreateMethodProperty, Get, ToInteger, ToLength, ToObject, ToString */
// 22.1.3.6. Array.prototype.fill ( value [ , start [ , end ] ] )
CreateMethodProperty(Array.prototype, 'fill', function fill(value /* [ , start [ , end ] ] */) {
	var start = arguments[1];
	var end = arguments[2];
	// 1. Let O be ? ToObject(this value).
	var O = ToObject(this);
	// 2. Let len be ? ToLength(? Get(O, "length")).
	var len = ToLength(Get(O, "length"));
	// 3. Let relativeStart be ? ToInteger(start).
	var relativeStart = ToInteger(start);
	// 4. If relativeStart < 0, let k be max((len + relativeStart), 0); else let k be min(relativeStart, len)
	var k = relativeStart < 0 ? Math.max((len + relativeStart), 0) : Math.min(relativeStart, len);
	// 5. If end is undefined, let relativeEnd be len; else let relativeEnd be ? ToInteger(end).
	var relativeEnd = end === undefined ? len : ToInteger(end);
	// 6. If relativeEnd < 0, let final be max((len + relativeEnd), 0); else let final be min(relativeEnd, len).
	var final = relativeEnd < 0 ? Math.max((len + relativeEnd), 0) : Math.min(relativeEnd, len);
	// 7. Repeat, while k < final
	while (k < final) {
		// a. Let Pk be ! ToString(k).
		var Pk = ToString(k);
		// b. Perform ? Set(O, Pk, value, true).
		O[Pk] = value;
		// c. Increase k by 1.
		k = k + 1;
	}
	// 8. Return O.
	return O;
});

}

if (!("find"in Array.prototype
)) {

// Array.prototype.find
/* global Call, CreateMethodProperty, Get, IsCallable, ToBoolean, ToLength, ToObject, ToString */
// 22.1.3.8 Array.prototype.find ( predicate [ , thisArg ] )
CreateMethodProperty(Array.prototype, 'find', function find( predicate /* [ , thisArg ] */) {
	// 1. Let O be ? ToObject(this value).
	var O = ToObject(this);
	// 2. Let len be ? ToLength(? Get(O, "length")).
	var len = ToLength(Get(O, "length"));
	// 3. If IsCallable(predicate) is false, throw a TypeError exception.
	if (IsCallable(predicate) === false) {
		throw new TypeError(predicate + ' is not a function');
	}
	// 4. If thisArg is present, let T be thisArg; else let T be undefined.
	var T = arguments.length > 1 ? arguments[1] : undefined;
	// 5. Let k be 0.
	var k = 0;
	// 6. Repeat, while k < len
	while (k < len) {
		// a. Let Pk be ! ToString(k).
		var Pk = ToString(k);
		// b. Let kValue be ? Get(O, Pk).
		var kValue = Get(O, Pk);
		// c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
		var testResult = ToBoolean(Call(predicate, T, [kValue, k, O ]));
		// d. If testResult is true, return kValue.
		if (testResult) {
			return kValue;
		}
		// e. Increase k by 1.
		k = k + 1;
	}
	// 7. Return undefined.
	return undefined;
});

}

if (!("findIndex"in Array.prototype
)) {

// Array.prototype.findIndex
/* global Call, CreateMethodProperty, Get, IsCallable, ToBoolean, ToLength, ToObject, ToString */
// 22.1.3.9. Array.prototype.findIndex ( predicate [ , thisArg ] )
CreateMethodProperty(Array.prototype, 'findIndex', function findIndex(predicate /* [ , thisArg ] */) {
	// 1. Let O be ? ToObject(this value).
	var O = ToObject(this);
	// 2. Let len be ? ToLength(? Get(O, "length")).
	var len = ToLength(Get(O, "length"));
	// 3. If IsCallable(predicate) is false, throw a TypeError exception.
	if (IsCallable(predicate) === false) {
		throw new TypeError(predicate + ' is not a function');
	}
	// 4. If thisArg is present, let T be thisArg; else let T be undefined.
	var T = arguments.length > 1 ? arguments[1] : undefined;
	// 5. Let k be 0.
	var k = 0;
	// 6. Repeat, while k < len
	while (k < len) {
		// a. Let Pk be ! ToString(k).
		var Pk = ToString(k);
		// b. Let kValue be ? Get(O, Pk).
		var kValue = Get(O, Pk);
		// c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
		var testResult = ToBoolean(Call(predicate, T, [kValue, k, O]));
		// d. If testResult is true, return k.
		if (testResult) {
			return k;
		}
		// e. Increase k by 1.
		k = k + 1;
	}
	// 7. Return -1.
	return -1;
});

}

if (!("forEach"in Array.prototype
)) {

// Array.prototype.forEach
/* global Call, CreateMethodProperty, Get, HasProperty, IsCallable, ToLength, ToObject, ToString */
// 22.1.3.10. Array.prototype.forEach ( callbackfn [ , thisArg ] )
CreateMethodProperty(Array.prototype, 'forEach', function forEach(callbackfn /* [ , thisArg ] */) {
	// 1. Let O be ? ToObject(this value).
	var O = ToObject(this);
	// Polyfill.io - If O is a String object, split it into an array in order to iterate correctly.
	// We will use arrayLike in place of O when we are iterating through the list.
	var arraylike = O instanceof String ? O.split('') : O;
	// 2. Let len be ? ToLength(? Get(O, "length")).
	var len = ToLength(Get(O, "length"));
	// 3. If IsCallable(callbackfn) is false, throw a TypeError exception.
	if (IsCallable(callbackfn) === false) {
		throw new TypeError(callbackfn + ' is not a function');
	}
	// 4. If thisArg is present, let T be thisArg; else let T be undefined.
	var T = arguments.length > 1 ? arguments[1] : undefined;
	// 5. Let k be 0.
	var k = 0;
	// 6. Repeat, while k < len
	while (k < len) {
		// a. Let Pk be ! ToString(k).
		var Pk = ToString(k);
		// b. Let kPresent be ? HasProperty(O, Pk).
		var kPresent = HasProperty(arraylike, Pk);
		// c. If kPresent is true, then
		if (kPresent) {
			// i. Let kValue be ? Get(O, Pk).
			var kValue = Get(arraylike, Pk);
			// ii. Perform ? Call(callbackfn, T, « kValue, k, O »).
			Call(callbackfn, T, [kValue, k, O]);
		}
		// d. Increase k by 1.
		k = k + 1;
	}
	// 7. Return undefined.
	return undefined;
});

}


// _DOMTokenList
/*
Copyright (c) 2016, John Gardner

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
*/
var _DOMTokenList = (function() { // eslint-disable-line no-unused-vars
	var dpSupport = true;
	var defineGetter = function (object, name, fn, configurable) {
		if (Object.defineProperty)
			Object.defineProperty(object, name, {
				configurable: false === dpSupport ? true : !!configurable,
				get: fn
			});

		else object.__defineGetter__(name, fn);
	};

	/** Ensure the browser allows Object.defineProperty to be used on native JavaScript objects. */
	try {
		defineGetter({}, "support");
	}
	catch (e) {
		dpSupport = false;
	}


	var _DOMTokenList = function (el, prop) {
		var that = this;
		var tokens = [];
		var tokenMap = {};
		var length = 0;
		var maxLength = 0;
		var addIndexGetter = function (i) {
			defineGetter(that, i, function () {
				preop();
				return tokens[i];
			}, false);

		};
		var reindex = function () {

			/** Define getter functions for array-like access to the tokenList's contents. */
			if (length >= maxLength)
				for (; maxLength < length; ++maxLength) {
					addIndexGetter(maxLength);
				}
		};

		/** Helper function called at the start of each class method. Internal use only. */
		var preop = function () {
			var error;
			var i;
			var args = arguments;
			var rSpace = /\s+/;

			/** Validate the token/s passed to an instance method, if any. */
			if (args.length)
				for (i = 0; i < args.length; ++i)
					if (rSpace.test(args[i])) {
						error = new SyntaxError('String "' + args[i] + '" ' + "contains" + ' an invalid character');
						error.code = 5;
						error.name = "InvalidCharacterError";
						throw error;
					}


			/** Split the new value apart by whitespace*/
			if (typeof el[prop] === "object") {
				tokens = ("" + el[prop].baseVal).replace(/^\s+|\s+$/g, "").split(rSpace);
			} else {
				tokens = ("" + el[prop]).replace(/^\s+|\s+$/g, "").split(rSpace);
			}

			/** Avoid treating blank strings as single-item token lists */
			if ("" === tokens[0]) tokens = [];

			/** Repopulate the internal token lists */
			tokenMap = {};
			for (i = 0; i < tokens.length; ++i)
				tokenMap[tokens[i]] = true;
			length = tokens.length;
			reindex();
		};

		/** Populate our internal token list if the targeted attribute of the subject element isn't empty. */
		preop();

		/** Return the number of tokens in the underlying string. Read-only. */
		defineGetter(that, "length", function () {
			preop();
			return length;
		});

		/** Override the default toString/toLocaleString methods to return a space-delimited list of tokens when typecast. */
		that.toLocaleString =
			that.toString = function () {
				preop();
				return tokens.join(" ");
			};

		that.item = function (idx) {
			preop();
			return tokens[idx];
		};

		that.contains = function (token) {
			preop();
			return !!tokenMap[token];
		};

		that.add = function () {
			preop.apply(that, args = arguments);

			for (var args, token, i = 0, l = args.length; i < l; ++i) {
				token = args[i];
				if (!tokenMap[token]) {
					tokens.push(token);
					tokenMap[token] = true;
				}
			}

			/** Update the targeted attribute of the attached element if the token list's changed. */
			if (length !== tokens.length) {
				length = tokens.length >>> 0;
				if (typeof el[prop] === "object") {
					el[prop].baseVal = tokens.join(" ");
				} else {
					el[prop] = tokens.join(" ");
				}
				reindex();
			}
		};

		that.remove = function () {
			preop.apply(that, args = arguments);

			/** Build a hash of token names to compare against when recollecting our token list. */
			for (var args, ignore = {}, i = 0, t = []; i < args.length; ++i) {
				ignore[args[i]] = true;
				delete tokenMap[args[i]];
			}

			/** Run through our tokens list and reassign only those that aren't defined in the hash declared above. */
			for (i = 0; i < tokens.length; ++i)
				if (!ignore[tokens[i]]) t.push(tokens[i]);

			tokens = t;
			length = t.length >>> 0;

			/** Update the targeted attribute of the attached element. */
			if (typeof el[prop] === "object") {
				el[prop].baseVal = tokens.join(" ");
			} else {
				el[prop] = tokens.join(" ");
			}
			reindex();
		};

		that.toggle = function (token, force) {
			preop.apply(that, [token]);

			/** Token state's being forced. */
			if (undefined !== force) {
				if (force) {
					that.add(token);
					return true;
				} else {
					that.remove(token);
					return false;
				}
			}

			/** Token already exists in tokenList. Remove it, and return FALSE. */
			if (tokenMap[token]) {
				that.remove(token);
				return false;
			}

			/** Otherwise, add the token and return TRUE. */
			that.add(token);
			return true;
		};

		that.forEach = Array.prototype.forEach;

		return that;
	};

	return _DOMTokenList;
}());
if (!("DOMTokenList"in self&&function(e){return!("classList"in e)||!e.classList.toggle("x",!1)&&!e.className}(document.createElement("x"))
)) {

// DOMTokenList
/* global _DOMTokenList */
(function (global) {
	var nativeImpl = "DOMTokenList" in global && global.DOMTokenList;

	if (
			!nativeImpl ||
			(
				!!document.createElementNS &&
				!!document.createElementNS('http://www.w3.org/2000/svg', 'svg') &&
				!(document.createElementNS("http://www.w3.org/2000/svg", "svg").classList instanceof DOMTokenList)
			)
		) {
		global.DOMTokenList = _DOMTokenList;
	}

	// Add second argument to native DOMTokenList.toggle() if necessary
	(function () {
		var e = document.createElement('span');
		if (!('classList' in e)) return;
		e.classList.toggle('x', false);
		if (!e.classList.contains('x')) return;
		e.classList.constructor.prototype.toggle = function toggle(token /*, force*/) {
			var force = arguments[1];
			if (force === undefined) {
				var add = !this.contains(token);
				this[add ? 'add' : 'remove'](token);
				return add;
			}
			force = !!force;
			this[force ? 'add' : 'remove'](token);
			return force;
		};
	}());

	// Add multiple arguments to native DOMTokenList.add() if necessary
	(function () {
		var e = document.createElement('span');
		if (!('classList' in e)) return;
		e.classList.add('a', 'b');
		if (e.classList.contains('b')) return;
		var native = e.classList.constructor.prototype.add;
		e.classList.constructor.prototype.add = function () {
			var args = arguments;
			var l = arguments.length;
			for (var i = 0; i < l; i++) {
				native.call(this, args[i]);
			}
		};
	}());

	// Add multiple arguments to native DOMTokenList.remove() if necessary
	(function () {
		var e = document.createElement('span');
		if (!('classList' in e)) return;
		e.classList.add('a');
		e.classList.add('b');
		e.classList.remove('a', 'b');
		if (!e.classList.contains('b')) return;
		var native = e.classList.constructor.prototype.remove;
		e.classList.constructor.prototype.remove = function () {
			var args = arguments;
			var l = arguments.length;
			for (var i = 0; i < l; i++) {
				native.call(this, args[i]);
			}
		};
	}());

}(self));

}

if (!("includes"in Array.prototype
)) {

// Array.prototype.includes
/* global CreateMethodProperty, Get, SameValueZero, ToInteger, ToLength, ToObject, ToString */
// 22.1.3.11. Array.prototype.includes ( searchElement [ , fromIndex ] )
CreateMethodProperty(Array.prototype, 'includes', function includes(searchElement /* [ , fromIndex ] */) {
	'use strict';
	// 1. Let O be ? ToObject(this value).
	var O = ToObject(this);
	// 2. Let len be ? ToLength(? Get(O, "length")).
	var len = ToLength(Get(O, "length"));
	// 3. If len is 0, return false.
	if (len === 0) {
		return false;
	}
	// 4. Let n be ? ToInteger(fromIndex). (If fromIndex is undefined, this step produces the value 0.)
	var n = ToInteger(arguments[1]);
	// 5. If n ≥ 0, then
	if (n >= 0) {
		// a. Let k be n.
		var k = n;
		// 6. Else n < 0,
	} else {
		// a. Let k be len + n.
		k = len + n;
		// b. If k < 0, let k be 0.
		if (k < 0) {
			k = 0;
		}
	}
	// 7. Repeat, while k < len
	while (k < len) {
		// a. Let elementK be the result of ? Get(O, ! ToString(k)).
		var elementK = Get(O, ToString(k));
		// b. If SameValueZero(searchElement, elementK) is true, return true.
		if (SameValueZero(searchElement, elementK)) {
			return true;
		}
		// c. Increase k by 1.
		k = k + 1;
	}
	// 8. Return false.
	return false;
});

}

if (!("indexOf"in Array.prototype
)) {

// Array.prototype.indexOf
/* global CreateMethodProperty, Get, HasProperty, ToInteger, ToLength, ToObject, ToString */
// 22.1.3.12. Array.prototype.indexOf ( searchElement [ , fromIndex ] )
CreateMethodProperty(Array.prototype, 'indexOf', function indexOf(searchElement /* [ , fromIndex ] */) {
	// 1. Let O be ? ToObject(this value).
	var O = ToObject(this);
	// 2. Let len be ? ToLength(? Get(O, "length")).
	var len = ToLength(Get(O, "length"));
	// 3. If len is 0, return -1.
	if (len === 0) {
		return -1;
	}
	// 4. Let n be ? ToInteger(fromIndex). (If fromIndex is undefined, this step produces the value 0.)
	var n = ToInteger(arguments[1]);
	// 5. If n ≥ len, return -1.
	if (n >= len) {
		return -1;
	}
	// 6. If n ≥ 0, then
	if (n >= 0) {
		// a. If n is -0, let k be +0; else let k be n.
		var k = 1/n === -Infinity ? 0 : n;
		// 7. Else n < 0,
	} else {
		// a. Let k be len + n.
		k = len + n;
		// b. If k < 0, let k be 0.
		if (k < 0) {
			k = 0;
		}
	}
	// 8. Repeat, while k < len
	while (k < len) {
		// a. Let kPresent be ? HasProperty(O, ! ToString(k)).
		var kPresent = HasProperty(O, ToString(k));
		// b. If kPresent is true, then
		if (kPresent) {
			// i. Let elementK be ? Get(O, ! ToString(k)).
			var elementK = Get(O, ToString(k));
			// ii. Let same be the result of performing Strict Equality Comparison searchElement === elementK.
			var same = searchElement === elementK;
			// iii. If same is true, return k.
			if (same) {
				return k;
			}
		}
		// c. Increase k by 1.
		k = k + 1;
	}
	// 9. Return -1.
	return -1;
});

}

if (!("Element"in self&&"after"in Element.prototype
)) {

// Element.prototype.after
/* global _mutation */
Document.prototype.after = Element.prototype.after = function after() {
	if (this.parentNode) {
		var args = Array.prototype.slice.call(arguments),
				viableNextSibling = this.nextSibling,
				idx = viableNextSibling ? args.indexOf(viableNextSibling) : -1;

		while (idx !== -1) {
			viableNextSibling = viableNextSibling.nextSibling;
			if (!viableNextSibling) {
				break;
			}
			idx = args.indexOf(viableNextSibling);
		}

		this.parentNode.insertBefore(_mutation(arguments), viableNextSibling);
	}
};

// Not all UAs support the Text constructor.  Polyfill on the Text constructor only where it exists
// TODO: Add a polyfill for the Text constructor, and make it a dependency of this polyfill.
if ("Text" in self) {
	Text.prototype.after = Element.prototype.after;
}

}

if (!("Element"in self&&"before"in Element.prototype
)) {

// Element.prototype.before
/* global _mutation */
Document.prototype.before = Element.prototype.before = function before() {
	if (this.parentNode) {
		var args = Array.prototype.slice.call(arguments),
			viablePreviousSibling = this.previousSibling,
			idx = viablePreviousSibling ? args.indexOf(viablePreviousSibling) : -1;

		while (idx !== -1) {
			viablePreviousSibling = viablePreviousSibling.previousSibling;
			if (!viablePreviousSibling) {
				break;
			}
			idx = args.indexOf(viablePreviousSibling);
		}

		this.parentNode.insertBefore(
			_mutation(arguments),
			viablePreviousSibling ? viablePreviousSibling.nextSibling : this.parentNode.firstChild
		);
	}
};

// Not all UAs support the Text constructor.  Polyfill on the Text constructor only where it exists
// TODO: Add a polyfill for the Text constructor, and make it a dependency of this polyfill.
if ("Text" in self) {
	Text.prototype.before = Element.prototype.before;
}

}

if (!("lastIndexOf"in Array.prototype
)) {

// Array.prototype.lastIndexOf
/* global CreateMethodProperty, Get, HasProperty, ToInteger, ToLength, ToObject, ToString */
// 22.1.3.15. Array.prototype.lastIndexOf ( searchElement [ , fromIndex ] )
CreateMethodProperty(Array.prototype, 'lastIndexOf', function lastIndexOf(searchElement /* [ , fromIndex ] */) {
	// 1. Let O be ? ToObject(this value).
	var O = ToObject(this);
	// 2. Let len be ? ToLength(? Get(O, "length")).
	var len = ToLength(Get(O, "length"));
	// 3. If len is 0, return -1.
	if (len === 0) {
		return -1;
	}
	// 4. If fromIndex is present, let n be ? ToInteger(fromIndex); else let n be len-1.
	var n = arguments.length > 1 ? ToInteger(arguments[1]) : len - 1;
	// 5. If n ≥ 0, then
	if (n >= 0) {
		// a. If n is -0, let k be +0; else let k be min(n, len - 1).
		var k = 1/n === -Infinity ? 0 : Math.min(n, len - 1);
		// 6. Else n < 0,
	} else {
		// a. Let k be len + n.
		k = len + n;
	}
	// 7. Repeat, while k ≥ 0
	while (k >= 0) {
		// a. Let kPresent be ? HasProperty(O, ! ToString(k)).
		var kPresent = HasProperty(O, ToString(k));
		// b. If kPresent is true, then
		if (kPresent) {
			// i. Let elementK be ? Get(O, ! ToString(k)).
			var elementK = Get(O, ToString(k));
			// ii. Let same be the result of performing Strict Equality Comparison searchElement === elementK.
			var same = searchElement === elementK;
			// iii. If same is true, return k.
			if (same) {
				return k;
			}
		}
		// c. Decrease k by 1.
		k = k - 1;
	}
	// 9. Return -1.
	return -1;
});

}

if (!("reduce"in Array.prototype
)) {

// Array.prototype.reduce
/* global Call, CreateMethodProperty, Get, HasProperty, IsCallable, ToLength, ToObject, ToString */
// 22.1.3.19. Array.prototype.reduce ( callbackfn [ , initialValue ] )
CreateMethodProperty(Array.prototype, 'reduce', function reduce(callbackfn /* [ , initialValue ] */) {
	// 1. Let O be ? ToObject(this value).
	var O = ToObject(this);
	// Polyfill.io - If O is a String object, split it into an array in order to iterate correctly.
	// We will use arrayLike in place of O when we are iterating through the list.
	var arraylike = O instanceof String ? O.split('') : O;
	// 2. Let len be ? ToLength(? Get(O, "length")).
	var len = ToLength(Get(arraylike, "length"));
	// 3. If IsCallable(callbackfn) is false, throw a TypeError exception.
	if (IsCallable(callbackfn) === false) {
		throw new TypeError(callbackfn + ' is not a function');
	}
	// 4. If len is 0 and initialValue is not present, throw a TypeError exception.
	var initialValue = arguments.length > 1 ? arguments[1] : undefined;
	if (len === 0 && arguments.length < 2) {
		throw new TypeError('Reduce of empty array with no initial value');
	}
	// 5. Let k be 0.
	var k = 0;
	// 6. Let accumulator be undefined.
	var accumulator = undefined;
	// 7. If initialValue is present, then
	if (arguments.length > 1) {
		// a. Set accumulator to initialValue.
		accumulator = initialValue;
		// 8. Else initialValue is not present,
	} else {
		// a. Let kPresent be false.
		var kPresent = false;
		// b. Repeat, while kPresent is false and k < len
		while (kPresent === false && k < len) {
			// i. Let Pk be ! ToString(k).
			var Pk = ToString(k);
			// ii. Let kPresent be ? HasProperty(O, Pk).
			kPresent = HasProperty(arraylike, Pk);
			// iii. If kPresent is true, then
			if (kPresent) {
				// 1. Set accumulator to ? Get(O, Pk).
				accumulator = Get(arraylike, Pk);
			}
			// iv. Increase k by 1.
			k = k + 1;
		}
		// c. If kPresent is false, throw a TypeError exception.
		if (kPresent === false) {
			throw new TypeError('Reduce of empty array with no initial value');
		}
	}
	// 9. Repeat, while k < len
	while (k < len) {
		// a. Let Pk be ! ToString(k).
		Pk = ToString(k);
		// b. Let kPresent be ? HasProperty(O, Pk).
		kPresent = HasProperty(arraylike, Pk);
		// c. If kPresent is true, then
		if (kPresent) {
			// i. Let kValue be ? Get(O, Pk).
			var kValue = Get(arraylike, Pk);
			// ii. Set accumulator to ? Call(callbackfn, undefined, « accumulator, kValue, k, O »).
			accumulator = Call(callbackfn, undefined, [accumulator, kValue, k, O]);
		}
		// d. Increase k by 1.
		k = k + 1;
	}
	// 10. Return accumulator.
	return accumulator;
});

}

if (!("reduceRight"in Array.prototype
)) {

// Array.prototype.reduceRight
/* global Call, CreateMethodProperty, Get, HasProperty, IsCallable, ToLength, ToObject, ToString */
// 22.1.3.20. Array.prototype.reduceRight ( callbackfn [ , initialValue ] )
CreateMethodProperty(Array.prototype, 'reduceRight', function reduceRight(callbackfn /* [ , initialValue ] */) {
	// 1. Let O be ? ToObject(this value).
	var O = ToObject(this);
	// Polyfill.io - If O is a String object, split it into an array in order to iterate correctly.
	// We will use arrayLike in place of O when we are iterating through the list.
	var arraylike = O instanceof String ? O.split('') : O;
	// 2. Let len be ? ToLength(? Get(O, "length")).
	var len = ToLength(Get(arraylike, "length"));
	// 3. If IsCallable(callbackfn) is false, throw a TypeError exception.
	if (IsCallable(callbackfn) === false) {
		throw new TypeError(callbackfn + ' is not a function');
	}
	// 4. If len is 0 and initialValue is not present, throw a TypeError exception.
	var initialValue = arguments.length > 1 ? arguments[1] : undefined;
	if (len === 0 && arguments.length < 2) {
		throw new TypeError('Reduce of empty array with no initial value');
	}
	// 5. Let k be len-1.
	var k = len - 1;
	// 6. Let accumulator be undefined.
	var accumulator = undefined;
	// 7. If initialValue is present, then
	if (arguments.length > 1) {
		// a. Set accumulator to initialValue.
		accumulator = initialValue;
		// 8.Else initialValue is not present,
	} else {
		// a. Let kPresent be false.
		var kPresent = false;
		// b. Repeat, while kPresent is false and k ≥ 0
		while (kPresent === false && k >= 0) {
			// i. Let Pk be ! ToString(k).
			var Pk = ToString(k);
			// ii. Let kPresent be ? HasProperty(O, Pk).
			kPresent = HasProperty(arraylike, Pk);
			// iii. If kPresent is true, then
			if (kPresent) {
				// 1. Set accumulator to ? Get(O, Pk).
				accumulator = Get(arraylike, Pk);
			}
			// iv. Decrease k by 1.
			k = k - 1;
		}
		// c. If kPresent is false, throw a TypeError exception.
		if (kPresent === false) {
			throw new TypeError('Reduce of empty array with no initial value');
		}
	}
	// 9. Repeat, while k ≥ 0
	while (k >= 0) {
		// a. Let Pk be ! ToString(k).
		Pk = ToString(k);
		// b. Let kPresent be ? HasProperty(O, Pk).
		kPresent = HasProperty(arraylike, Pk);
		// c. If kPresent is true, then
		if (kPresent) {
			// i. Let kValue be ? Get(O, Pk).
			var kValue = Get(arraylike, Pk);
			// ii. Set accumulator to ? Call(callbackfn, undefined, « accumulator, kValue, k, O »).
			accumulator = Call(callbackfn, undefined, [accumulator, kValue, k, O]);
		}
		// d. Decrease k by 1.
		k = k - 1;
	}
	// 10 Return accumulator.
	return accumulator;
});

}

if (!("some"in Array.prototype
)) {

// Array.prototype.some
/* global Call, CreateMethodProperty, Get, HasProperty, IsCallable, ToBoolean, ToLength, ToObject, ToString */
// 22.1.3.24. Array.prototype.some ( callbackfn [ , thisArg ] )
CreateMethodProperty(Array.prototype, 'some', function some(callbackfn /* [ , thisArg ] */) {
	// 1. Let O be ? ToObject(this value).
	var O = ToObject(this);
	// 2. Let len be ? ToLength(? Get(O, "length")).
	var len = ToLength(Get(O, "length"));
	// 3. If IsCallable(callbackfn) is false, throw a TypeError exception.
	if (IsCallable(callbackfn) === false) {
		throw new TypeError(callbackfn + ' is not a function');
	}
	// 4. If thisArg is present, let T be thisArg; else let T be undefined.
	var T = arguments.length > 1 ? arguments[1] : undefined;
	// 5. Let k be 0.
	var k = 0;
	// 6. Repeat, while k < len
	while (k < len) {
		// a. Let Pk be ! ToString(k).
		var Pk = ToString(k);
		// b. Let kPresent be ? HasProperty(O, Pk).
		var kPresent = HasProperty(O, Pk);
		// c. If kPresent is true, then
		if (kPresent) {
			// i. Let kValue be ? Get(O, Pk).
			var kValue = Get(O, Pk);
			// ii. Let testResult be ToBoolean(? Call(callbackfn, T, « kValue, k, O »)).
			var testResult = ToBoolean(Call(callbackfn, T, [kValue, k, O]));
			// iii. If testResult is true, return true.
			if (testResult) {
				return true;
			}
		}
		// d. Increase k by 1.
		k = k + 1;
	}
	// 7. Return false.
	return false;
});

}

if (!("bind"in Function.prototype
)) {

// Function.prototype.bind
/* global CreateMethodProperty, IsCallable */
// 19.2.3.2. Function.prototype.bind ( thisArg, ...args )
// https://github.com/es-shims/es5-shim/blob/d6d7ff1b131c7ba14c798cafc598bb6780d37d3b/es5-shim.js#L182
CreateMethodProperty(Function.prototype, 'bind', function bind(that) { // .length is 1
	// add necessary es5-shim utilities
	var $Array = Array;
	var $Object = Object;
	var ArrayPrototype = $Array.prototype;
	var Empty = function Empty() { };
	var array_slice = ArrayPrototype.slice;
	var array_concat = ArrayPrototype.concat;
	var array_push = ArrayPrototype.push;
	var max = Math.max;
	// /add necessary es5-shim utilities

	// 1. Let Target be the this value.
	var target = this;
	// 2. If IsCallable(Target) is false, throw a TypeError exception.
	if (!IsCallable(target)) {
		throw new TypeError('Function.prototype.bind called on incompatible ' + target);
	}
	// 3. Let A be a new (possibly empty) internal list of all of the
	//   argument values provided after thisArg (arg1, arg2 etc), in order.
	// XXX slicedArgs will stand in for "A" if used
	var args = array_slice.call(arguments, 1); // for normal call
	// 4. Let F be a new native ECMAScript object.
	// 11. Set the [[Prototype]] internal property of F to the standard
	//   built-in Function prototype object as specified in 15.3.3.1.
	// 12. Set the [[Call]] internal property of F as described in
	//   15.3.4.5.1.
	// 13. Set the [[Construct]] internal property of F as described in
	//   15.3.4.5.2.
	// 14. Set the [[HasInstance]] internal property of F as described in
	//   15.3.4.5.3.
	var bound;
	var binder = function () {

		if (this instanceof bound) {
			// 15.3.4.5.2 [[Construct]]
			// When the [[Construct]] internal method of a function object,
			// F that was created using the bind function is called with a
			// list of arguments ExtraArgs, the following steps are taken:
			// 1. Let target be the value of F's [[TargetFunction]]
			//   internal property.
			// 2. If target has no [[Construct]] internal method, a
			//   TypeError exception is thrown.
			// 3. Let boundArgs be the value of F's [[BoundArgs]] internal
			//   property.
			// 4. Let args be a new list containing the same values as the
			//   list boundArgs in the same order followed by the same
			//   values as the list ExtraArgs in the same order.
			// 5. Return the result of calling the [[Construct]] internal
			//   method of target providing args as the arguments.

			var result = target.apply(
				this,
				array_concat.call(args, array_slice.call(arguments))
			);
			if ($Object(result) === result) {
				return result;
			}
			return this;

		} else {
			// 15.3.4.5.1 [[Call]]
			// When the [[Call]] internal method of a function object, F,
			// which was created using the bind function is called with a
			// this value and a list of arguments ExtraArgs, the following
			// steps are taken:
			// 1. Let boundArgs be the value of F's [[BoundArgs]] internal
			//   property.
			// 2. Let boundThis be the value of F's [[BoundThis]] internal
			//   property.
			// 3. Let target be the value of F's [[TargetFunction]] internal
			//   property.
			// 4. Let args be a new list containing the same values as the
			//   list boundArgs in the same order followed by the same
			//   values as the list ExtraArgs in the same order.
			// 5. Return the result of calling the [[Call]] internal method
			//   of target providing boundThis as the this value and
			//   providing args as the arguments.

			// equiv: target.call(this, ...boundArgs, ...args)
			return target.apply(
				that,
				array_concat.call(args, array_slice.call(arguments))
			);

		}

	};

	// 15. If the [[Class]] internal property of Target is "Function", then
	//     a. Let L be the length property of Target minus the length of A.
	//     b. Set the length own property of F to either 0 or L, whichever is
	//       larger.
	// 16. Else set the length own property of F to 0.

	var boundLength = max(0, target.length - args.length);

	// 17. Set the attributes of the length own property of F to the values
	//   specified in 15.3.5.1.
	var boundArgs = [];
	for (var i = 0; i < boundLength; i++) {
		array_push.call(boundArgs, '$' + i);
	}

	// XXX Build a dynamic function with desired amount of arguments is the only
	// way to set the length property of a function.
	// In environments where Content Security Policies enabled (Chrome extensions,
	// for ex.) all use of eval or Function costructor throws an exception.
	// However in all of these environments Function.prototype.bind exists
	// and so this code will never be executed.
	bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this, arguments); }')(binder);

	if (target.prototype) {
		Empty.prototype = target.prototype;
		bound.prototype = new Empty();
		// Clean up dangling references.
		Empty.prototype = null;
	}

	// TODO
	// 18. Set the [[Extensible]] internal property of F to true.

	// TODO
	// 19. Let thrower be the [[ThrowTypeError]] function Object (13.2.3).
	// 20. Call the [[DefineOwnProperty]] internal method of F with
	//   arguments "caller", PropertyDescriptor {[[Get]]: thrower, [[Set]]:
	//   thrower, [[Enumerable]]: false, [[Configurable]]: false}, and
	//   false.
	// 21. Call the [[DefineOwnProperty]] internal method of F with
	//   arguments "arguments", PropertyDescriptor {[[Get]]: thrower,
	//   [[Set]]: thrower, [[Enumerable]]: false, [[Configurable]]: false},
	//   and false.

	// TODO
	// NOTE Function objects created using Function.prototype.bind do not
	// have a prototype property or the [[Code]], [[FormalParameters]], and
	// [[Scope]] internal properties.
	// XXX can't delete prototype in pure-js.

	// 22. Return F.
	return bound;
});

}

if (!("acosh"in Math
)) {

// Math.acosh
/* global CreateMethodProperty */
// 20.2.2.3. Math.acosh ( x )
CreateMethodProperty(Math, 'acosh', function acosh(x) {
	// If x is NaN, the result is NaN.
	if (isNaN(x)) {
		return NaN;
	}
	// If x is less than 1, the result is NaN.
	if (x < 1) {
		return NaN;
	}
	// If x is 1, the result is +0.
	if (x === 1) {
		return 0;
	}
	// If x is +∞, the result is +∞.
	if (x === Infinity) {
		return Infinity;
	}
	return Math.log(x + Math.sqrt(x * x - 1));
});

}

if (!("asinh"in Math
)) {

// Math.asinh
/* global CreateMethodProperty */
// 20.2.2.5. Math.asinh ( x )
CreateMethodProperty(Math, 'asinh', function asinh(x) {
	// If x is NaN, the result is NaN.
	if (isNaN(x)) {
		return NaN;
	}
	// If x is +0, the result is +0.
	if (x === 0 && 1/x === Infinity) {
		return 0;
	}
	// If x is -0, the result is -0.
	if (x === 0 && 1/x === -Infinity) {
		return -0;
	}
	// If x is +∞, the result is +∞.
	if (x === Infinity) {
		return Infinity;
	}
	// If x is -∞, the result is -∞.
	if (x === -Infinity) {
		return -Infinity;
	}
	return Math.log(x + Math.sqrt(x * x + 1));
});

}

if (!("atanh"in Math
)) {

// Math.atanh
/* global CreateMethodProperty */
// 20.2.2.7. Math.atanh ( x )
CreateMethodProperty(Math, 'atanh', function atanh(x) {
	// If x is NaN, the result is NaN.
	if (isNaN(x)) {
		return NaN;
	}
	// If x is less than -1, the result is NaN.
	if (x < -1) {
		return NaN;
	}
	// If x is greater than 1, the result is NaN.
	if (x > 1) {
		return NaN;
	}
	// If x is -1, the result is -∞.
	if (x === -1) {
		return -Infinity;
	}
	// If x is +1, the result is +∞.
	if (x === 1) {
		return Infinity;
	}
	// If x is +0, the result is +0.
	if (x === 0 && 1/x === Infinity) {
		return 0;
	}
	// If x is -0, the result is -0.
	if (x === 0 && 1/x === -Infinity) {
		return -0;
	}
	return Math.log((1 + x) / (1 - x)) / 2;
});

}

if (!("cbrt"in Math
)) {

// Math.cbrt
/* global CreateMethodProperty */
// 20.2.2.9. Math.cbrt ( x )
CreateMethodProperty(Math, 'cbrt', function cbrt(x) {
	// If x is NaN, the result is NaN.
	if (isNaN(x)) {
		return NaN;
	}
	// If x is +0, the result is +0.
	if (x === 0 && 1/x === Infinity) {
		return 0;
	}
	// If x is -0, the result is -0.
	if (x === 0 && 1/x === -Infinity) {
		return -0;
	}
	// If x is +∞, the result is +∞.
	if (x === Infinity) {
		return Infinity;
	}
	// If x is -∞, the result is -∞.
	if (x === -Infinity) {
		return -Infinity;
	}
	var y = Math.pow(Math.abs(x), 1 / 3);
	return x < 0 ? -y : y;
});

}

if (!("clz32"in Math
)) {

// Math.clz32
/* global CreateMethodProperty, ToUint32 */
// 20.2.2.11. Math.clz32 ( x )
CreateMethodProperty(Math, 'clz32', function clz32(x) {
	// 1. Let n be ToUint32(x).
	var n = ToUint32(x);
	// 2. Let p be the number of leading zero bits in the 32-bit binary representation of n.
	var p = n ? 32 - n.toString(2).length : 32;
	// 3. Return p.
	return p;
});

}

if (!("cosh"in Math
)) {

// Math.cosh
/* global CreateMethodProperty */
// 20.2.2.1. 3Math.cosh ( x )
CreateMethodProperty(Math, 'cosh', function cosh(x) {
	// If x is NaN, the result is NaN.
	if (isNaN(x)) {
		return NaN;
	}
	// If x is +0, the result is 1.
	if (x === 0 && 1/x === Infinity) {
		return 1;
	}
	// If x is -0, the result is 1.
	if (x === 0 && 1/x === -Infinity) {
		return 1;
	}
	// If x is +∞, the result is +∞.
	if (x === Infinity) {
		return Infinity;
	}
	// If x is -∞, the result is +∞.
	if (x === -Infinity) {
		return Infinity;
	}
	x = Math.abs(x);
	if (x > 709) {
		var y = Math.exp(0.5 * x);
		return y / 2 * y;
	}
	y = Math.exp(x);
	return (y + 1 / y) / 2;
});

}

if (!("expm1"in Math
)) {

// Math.expm1
/* global CreateMethodProperty */
// 20.2.2.15. Math.expm1 ( x )
CreateMethodProperty(Math, 'expm1', function expm1(x) {
	// If x is NaN, the result is NaN.
	if (isNaN(x)) {
		return NaN;
	}
	// If x is +0, the result is +0.
	if (x === 0 && 1/x === Infinity) {
		return 0;
	}
	// If x is -0, the result is -0.
	if (x === 0 && 1/x === -Infinity) {
		return -0;
	}
	// If x is +∞, the result is +∞.
	if (x === Infinity) {
		return Infinity;
	}
	// If x is -∞, the result is -1.
	if (x === -Infinity) {
		return -1;
	}

	if (x > -1e-6 && x < 1e-6) {
		return x + x * x / 2;
	} else {
		return Math.exp(x) - 1;
	}
});

}

if (!("fround"in Math
)) {

// Math.fround
/* global Float32Array, CreateMethodProperty */
// 20.2.2.17 Math.fround ( x )
CreateMethodProperty(Math, 'fround', function (x) {
	// 1. If x is NaN, return NaN.
	if (isNaN(x)) {
		return NaN;
	}
	// 2. If x is one of +0, -0, +∞, -∞, return x.
	if (1 / x === +Infinity || 1 / x === -Infinity || x === +Infinity || x === -Infinity) {
		return x;
	}
	// 3. Let x32 be the result of converting x to a value in IEEE 754-2008 binary32 format using roundTiesToEven.
	// 4. Let x64 be the result of converting x32 to a value in IEEE 754-2008 binary64 format.
	// 5. Return the ECMAScript Number value corresponding to x64.
	return (new Float32Array([x]))[0];
});

}

if (!("hypot"in Math
)) {

// Math.hypot
/* global CreateMethodProperty */
// 20.2.2.18. Math.hypot ( value1, value2, ...values )
CreateMethodProperty(Math, 'hypot', function hypot(value1, value2) { // eslint-disable-line no-unused-vars
	// If no arguments are passed, the result is +0.
	if (arguments.length === 0) {
		return 0;
	}
	var y = 0;
	var max = 0;
	for (var i = 0; i < arguments.length; ++i) {
		// If any argument is +∞, the result is +∞.
		if (arguments[i] === Infinity) {
			return Infinity;
		}

		// If any argument is -∞, the result is +∞.
		if (arguments[i] === -Infinity) {
			return Infinity;
		}

		// If no argument is +∞ or -∞, and any argument is NaN, the result is NaN.
		// If all arguments are either +0 or -0, the result is +0.
		// Polyfill.io - The two conditions above are handled in the math.

		var arg = Math.abs(Number(arguments[i]));
		if (arg > max) {
			y = y * Math.pow(max / arg, 2);
			max = arg;
		}
		if (arg !== 0 || max !== 0) {
			y = y + Math.pow(arg / max, 2);
		}
	}

	return max * Math.sqrt(y);
});

}

if (!("imul"in Math
)) {

// Math.imul
/* global CreateMethodProperty, ToUint32 */
// 20.2.2.19. Math.imul ( x, y )
CreateMethodProperty(Math, 'imul', function imul(x, y) {
	// 1. Let a be ToUint32(x).
	var a = ToUint32(x);
	// 2. Let b be ToUint32(y).
	var b = ToUint32(y);
	var UINT16 = 0xffff;
	var aHigh = a >>> 16 & UINT16;
	var aLow = UINT16 & a;
	var bHigh = b >>> 16 & UINT16;
	var bLow = UINT16 & b;
	// the shift by 0 fixes the sign on the high part
	// the final |0 converts the unsigned value into a signed value
	return aLow * bLow + (aHigh * bLow + aLow * bHigh << 16 >>> 0) | 0;
});

}

if (!("log10"in Math
)) {

// Math.log10
/* global CreateMethodProperty */
// 20.2.2.22. Math.log10 ( x )
CreateMethodProperty(Math, 'log10', function log10(x) {
	return Math.log(x) / Math.LN10;
});

}

if (!("log1p"in Math
)) {

// Math.log1p
/* global CreateMethodProperty */
// 20.2.2.21. Math.log1p ( x )
CreateMethodProperty(Math, 'log1p', function log1p(x) {
	x = Number(x);
	if (-1 < x && x < 1) {
		// Polyfill.io - For numbers in the range −1 < x < 1
		// Because we are using log, the precision of the result will be identical to log(1).
		// To fix this we avoid using log and use the Taylor Series expansion of log.
		// This series converges when |x| < 1. As we can not sum to infinity,
		// we instead sum the first 300 parts of the series to give a close approximation.
		// |x|<1, log(1+x) = x - x^2/2 + x^3/3 - ... + (-1)^(n-1)*x^n/n + ...
		var y = x;
		for (var i = 2; i <= 300; i++) {
			y += Math.pow((-1), (i - 1)) * Math.pow(x, i) / i;
		}
		return y;
	}

	return Math.log(1 + x);
});

}

if (!("log2"in Math
)) {

// Math.log2
/* global CreateMethodProperty */
// 20.2.2.23. Math.log2 ( x )
CreateMethodProperty(Math, 'log2', function log2(x) {
	return Math.log(x) / Math.LN2;
});

}

if (!("sign"in Math
)) {

// Math.sign
/* global CreateMethodProperty */
// 20.2.2.29. Math.sign ( x )
CreateMethodProperty(Math, 'sign', function sign(x) {
	x = Number(x);
	// If x is NaN, the result is NaN.
	if (isNaN(x)) {
		return NaN;
	}
	// If x is -0, the result is -0.
	if (1 / x === -Infinity) {
		return -0;
	}
	// If x is +0, the result is +0.
	if (1 / x === Infinity) {
		return 0;
	}
	// If x is negative and not -0, the result is -1.
	if (x < 0) {
		return -1;
	}
	// If x is positive and not +0, the result is +1.
	if (x > 0) {
		return 1;
	}
});

}

if (!("sinh"in Math
)) {

// Math.sinh
/* global CreateMethodProperty */
// 20.2.2.31. Math.sinh ( x )
CreateMethodProperty(Math, 'sinh', function sinh(x) {
	var s = (x < 0) ? -1 : 1;
	var absx = Math.abs(x);
	if (absx < 22) {
		if (absx < Math.pow(2, -28)) {
			return x;
		}
		var t = Math.exp(absx) - 1;
		if (absx < 1) {
			return (s * (2 * t - t * t / (t + 1)))/2;
		}
		return (s * (t + t / (t + 1)))/2;
	}
	if (absx < 709.7822265625) {
		return (s * Math.exp(absx))/2;
	}
	var w = Math.exp(0.5 * absx);
	t = (s * w)/2;
	return t * w;
});

}

if (!("tanh"in Math
)) {

// Math.tanh
/* global CreateMethodProperty */
// 20.2.2.34. Math.tanh ( x )
CreateMethodProperty(Math, 'tanh', function tanh(x) {
	var y;

	return x === Infinity ? 1 : x === -Infinity ? -1 : (y = Math.exp(2 * x), (y - 1) / (y + 1));
});

}

if (!("trunc"in Math
)) {

// Math.trunc
/* global CreateMethodProperty */
CreateMethodProperty(Math, 'trunc', function trunc(x) {
	return x < 0 ? Math.ceil(x) : Math.floor(x);
});

}

if (!("isFinite"in Number
)) {

// Number.isFinite
/* global CreateMethodProperty, Type */
(function () {
	var that = self;
	// 20.1.2.2. Number.isFinite ( number )
	CreateMethodProperty(Number, 'isFinite', function isFinite(number) {
		// 1. If Type(number) is not Number, return false.
		if (Type(number) !== 'number') {
			return false;
		}
		// 2. If number is NaN, +∞, or -∞, return false.
		// 3. Otherwise, return true.
		// Polyfill.io - We use isFinite as it implements steps 2 and 3.
		return that.isFinite(number);
	});
}());

}

if (!("isInteger"in Number
)) {

// Number.isInteger
/* global CreateMethodProperty, ToInteger, Type */
// 20.1.2.3. Number.isInteger ( number )
CreateMethodProperty(Number, 'isInteger', function isInteger(number) {
	// 1. If Type(number) is not Number, return false.
	if (Type(number) !== 'number') {
		return false;
	}
	// 2. If number is NaN, +∞, or -∞, return false.
	if (isNaN(number) || number === Infinity || number === -Infinity) {
		return false;
	}
	// 3. Let integer be ToInteger(number).
	var integer = ToInteger(number);
	// 4. If integer is not equal to number, return false.
	if (integer !== number) {
		return false;
	}
	// 5. Otherwise, return true.
	return true;
});

}

if (!("isNaN"in Number
)) {

// Number.isNaN
/* global CreateMethodProperty, Type */
(function () {
	var that = self;
	// 20.1.2.4. Number.isNaN ( number )
	CreateMethodProperty(Number, 'isNaN', function isNaN(number) {
		// 1. If Type(number) is not Number, return false.
		if (Type(number) !== 'number') {
			return false;
		}
		// 2. If number is NaN, return true.
		if (that.isNaN(number)) {
			return true;
		}
		// 3. Otherwise, return false.
		return false;
	});
}());

}

if (!("isSafeInteger"in Number
)) {

// Number.isSafeInteger
/* global CreateMethodProperty, Type, ToInteger */
// 20.1.2.5. Number.isSafeInteger ( number )
CreateMethodProperty(Number, 'isSafeInteger', function isSafeInteger(number) {
	// 1. If Type(number) is not Number, return false.
	if (Type(number) !== 'number') {
		return false;
	}
	// 2. If number is NaN, +∞, or -∞, return false.
	if (isNaN(number) || number === Infinity || number === -Infinity) {
		return false;
	}
	// 3. Let integer be ToInteger(number).
	var integer = ToInteger(number);
	// 4. If integer is not equal to number, return false.
	if (integer !== number) {
		return false;
	}
	// 5. If abs(integer) ≤ 2^53-1, return true.
	if (Math.abs(integer) <= (Math.pow(2, 53) - 1)) {
		return true;
	}
	// 6. Otherwise, return false.
	return false;
});

}

if (!("document"in self&&"classList"in document.documentElement&&"Element"in self&&"classList"in Element.prototype&&function(){var e=document.createElement("span")
return e.classList.add("a","b"),e.classList.contains("b")}()
)) {

// Element.prototype.classList
/* global _DOMTokenList */
/*
Copyright (c) 2016, John Gardner

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
*/
(function (global) {
	var dpSupport = true;
	var defineGetter = function (object, name, fn, configurable) {
		if (Object.defineProperty)
			Object.defineProperty(object, name, {
				configurable: false === dpSupport ? true : !!configurable,
				get: fn
			});

		else object.__defineGetter__(name, fn);
	};
	/** Ensure the browser allows Object.defineProperty to be used on native JavaScript objects. */
	try {
		defineGetter({}, "support");
	}
	catch (e) {
		dpSupport = false;
	}
	/** Polyfills a property with a DOMTokenList */
	var addProp = function (o, name, attr) {

		defineGetter(o.prototype, name, function () {
			var tokenList;

			var THIS = this,

			/** Prevent this from firing twice for some reason. What the hell, IE. */
			gibberishProperty = "__defineGetter__" + "DEFINE_PROPERTY" + name;
			if(THIS[gibberishProperty]) return tokenList;
			THIS[gibberishProperty] = true;

			/**
			 * IE8 can't define properties on native JavaScript objects, so we'll use a dumb hack instead.
			 *
			 * What this is doing is creating a dummy element ("reflection") inside a detached phantom node ("mirror")
			 * that serves as the target of Object.defineProperty instead. While we could simply use the subject HTML
			 * element instead, this would conflict with element types which use indexed properties (such as forms and
			 * select lists).
			 */
			if (false === dpSupport) {

				var visage;
				var mirror = addProp.mirror || document.createElement("div");
				var reflections = mirror.childNodes;
				var l = reflections.length;

				for (var i = 0; i < l; ++i)
					if (reflections[i]._R === THIS) {
						visage = reflections[i];
						break;
					}

				/** Couldn't find an element's reflection inside the mirror. Materialise one. */
				visage || (visage = mirror.appendChild(document.createElement("div")));

				tokenList = DOMTokenList.call(visage, THIS, attr);
			} else tokenList = new _DOMTokenList(THIS, attr);

			defineGetter(THIS, name, function () {
				return tokenList;
			});
			delete THIS[gibberishProperty];

			return tokenList;
		}, true);
	};

	addProp(global.Element, "classList", "className");
	addProp(global.HTMLElement, "classList", "className");
	addProp(global.HTMLLinkElement, "relList", "rel");
	addProp(global.HTMLAnchorElement, "relList", "rel");
	addProp(global.HTMLAreaElement, "relList", "rel");
}(self));

}

if (!("name"in Function.prototype
)) {

// Function.prototype.name
(function () {

	var
	accessorName = 'name',
	fnNameMatchRegex = /^\s*function\s+([^(\s]*)\s*/,
	$Function = Function,
	FunctionName = 'Function',
	FunctionProto = $Function.prototype,
	FunctionProtoCtor = FunctionProto.constructor,

	getFunctionName = function(fn) {
		var match, name;

		if (fn === $Function || fn === FunctionProtoCtor) {
			name = FunctionName;
		}
		else if (fn !== FunctionProto) {
			match = ('' + fn).match(fnNameMatchRegex);
			name = match && match[1];
		}
		return name || '';
	};


	Object.defineProperty(FunctionProto, accessorName, {
		get: function Function$name() {
			var
			fn = this,
			fnName = getFunctionName(fn);

			// Since named function definitions have immutable names, also memoize the
			// output by defining the `name` property directly on this Function
			// instance so the accessor function will not need to be invoked again.
			if (fn !== FunctionProto) {
				Object.defineProperty(fn, accessorName, {
					value: fnName,
					configurable: true
				});
			}

			return fnName;
		},
		configurable: true
	});

}());

}

if (!("EPSILON"in Number
)) {

// Number.Epsilon
// 20.1.2.1. Number.EPSILON
// The value of Number.EPSILON is the difference between 1 and the smallest value greater than 1 that is representable as a Number value, which is approximately 2.2204460492503130808472633361816 x 10-16.
// This property has the attributes { [[Writable]]: false, [[Enumerable]]: false, [[Configurable]]: false }.
Object.defineProperty(Number, 'EPSILON', {
	enumerable: false,
	configurable: false,
	writable: false,
	value: Math.pow(2, -52)
});

}

if (!("MAX_SAFE_INTEGER"in Number
)) {

// Number.MAX_SAFE_INTEGER
// 20.1.2.6. Number.MAX_SAFE_INTEGER
// The value of Number.MAX_SAFE_INTEGER is 9007199254740991 (2^53-1).
// This property has the attributes { [[Writable]]: false, [[Enumerable]]: false, [[Configurable]]: false }.
Object.defineProperty(Number, 'MAX_SAFE_INTEGER', {
	enumerable: false,
	configurable: false,
	writable: false,
	value: Math.pow(2, 53) - 1
});

}

if (!("MIN_SAFE_INTEGER"in Number
)) {

// Number.MIN_SAFE_INTEGER
// 20.1.2.8. Number.MIN_SAFE_INTEGER
// The value of Number.MIN_SAFE_INTEGER is -9007199254740991 (-(253-1)).
// This property has the attributes { [[Writable]]: false, [[Enumerable]]: false, [[Configurable]]: false }.
Object.defineProperty(Number, 'MIN_SAFE_INTEGER', {
	enumerable: false,
	configurable: false,
	writable: false,
	value: -(Math.pow(2, 53) - 1)
});

}

if (!("freeze"in Object
)) {

// Object.freeze
/* global CreateMethodProperty */
// 19.1.2.6. Object.freeze ( O )
CreateMethodProperty(Object, 'freeze', function freeze(O) {
	// This feature cannot be implemented fully as a polyfill.
	// We choose to silently fail which allows "securable" code
	// to "gracefully" degrade to working but insecure code.
	return O;
});

}

if (!("getOwnPropertyDescriptor"in Object&&"function"==typeof Object.getOwnPropertyDescriptor&&function(){try{return"3"===Object.getOwnPropertyDescriptor("13.7",1).value}catch(t){return!1}}()
)) {

// Object.getOwnPropertyDescriptor
/* global CreateMethodProperty, ToObject, ToPropertyKey, HasOwnProperty, Type */
(function () {
	var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

	var supportsDOMDescriptors = (function () {
		try {
			return Object.defineProperty(document.createElement('div'), 'one', {
				get: function () {
					return 1;
				}
			}).one === 1;
		} catch (e) {
			return false;
		}
	});

	var toString = ({}).toString;
	var split = ''.split;

	// 19.1.2.8 Object.getOwnPropertyDescriptor ( O, P )
	CreateMethodProperty(Object, 'getOwnPropertyDescriptor', function getOwnPropertyDescriptor(O, P) {
		// 1. Let obj be ? ToObject(O).
		var obj = ToObject(O);
		// Polyfill.io fallback for non-array-like strings which exist in some ES3 user-agents (IE 8)
		obj = (Type(obj) === 'string' || obj instanceof String) && toString.call(O) == '[object String]' ? split.call(O, '') : Object(O);

		// 2. Let key be ? ToPropertyKey(P).
		var key = ToPropertyKey(P);

		// 3. Let desc be ? obj.[[GetOwnProperty]](key).
		// 4. Return FromPropertyDescriptor(desc).
		// Polyfill.io Internet Explorer 8 natively supports property descriptors only on DOM objects.
		// We will fallback to the polyfill implementation if the native implementation throws an error.
		if (supportsDOMDescriptors) {
			try {
				return nativeGetOwnPropertyDescriptor(obj, key);
			// eslint-disable-next-line no-empty
			} catch (error) {}
		}
		if (HasOwnProperty(obj, key)) {
			return {
				enumerable: true,
				configurable: true,
				writable: true,
				value: obj[key]
			};
		}
	});
}());

}

if (!("getPrototypeOf"in Object
)) {

// Object.getPrototypeOf
/* global CreateMethodProperty */
// Based on: https://github.com/es-shims/es5-shim/blob/master/es5-sham.js

// https://github.com/es-shims/es5-shim/issues#issue/2
// http://ejohn.org/blog/objectgetprototypeof/
// recommended by fschaefer on github
//
// sure, and webreflection says ^_^
// ... this will nerever possibly return null
// ... Opera Mini breaks here with infinite loops
CreateMethodProperty(Object, 'getPrototypeOf', function getPrototypeOf(object) {
	if (object !== Object(object)) {
		throw new TypeError('Object.getPrototypeOf called on non-object');
	}
	var proto = object.__proto__;
	if (proto || proto === null) {
		return proto;
	} else if (typeof object.constructor == 'function' && object instanceof object.constructor) {
		return object.constructor.prototype;
	} else if (object instanceof Object) {
		return Object.prototype;
	} else {
		// Correctly return null for Objects created with `Object.create(null)`
		// (shammed or native) or `{ __proto__: null}`.  Also returns null for
		// cross-realm objects on browsers that lack `__proto__` support (like
		// IE <11), but that's the best we can do.
		return null;
	}
});

}

if (!("is"in Object
)) {

// Object.is
/* global CreateMethodProperty, SameValue */
// 19.1.2.12. Object.is ( value1, value2 )
CreateMethodProperty(Object, 'is', function is(value1, value2) {
	// 1. Return SameValue(value1, value2).
	return SameValue(value1, value2);
});

}

if (!("isExtensible"in Object
)) {

// Object.isExtensible
/* global CreateMethodProperty, Type */

(function (nativeIsExtensible) {
	// 19.1.2.13 Object.isExtensible ( O )
	CreateMethodProperty(Object, 'isExtensible', function isExtensible(O) {
		// 1. If Type(O) is not Object, return false.
		if (Type(O) !== "object") {
			return false;
		}
		// 2. Return ? IsExtensible(O).
		return nativeIsExtensible ? nativeIsExtensible(O) : true;
	});
}(Object.isExtensible));

}

if (!("keys"in Object&&function(){return 2===Object.keys(arguments).length}(1,2)&&function(){try{return Object.keys(""),!0}catch(t){return!1}}()
)) {

// Object.keys
/* global CreateMethodProperty */
CreateMethodProperty(Object, "keys", (function() {
	'use strict';

	// modified from https://github.com/es-shims/object-keys

	var has = Object.prototype.hasOwnProperty;
	var toStr = Object.prototype.toString;
	var isEnumerable = Object.prototype.propertyIsEnumerable;
	var hasDontEnumBug = !isEnumerable.call({ toString: null }, 'toString');
	var hasPrototypeEnumBug = isEnumerable.call(function () { }, 'prototype');
	function hasProtoEnumBug() {
		// Object.create polyfill creates an enumerable __proto__
		var createdObj;
		try {
			createdObj = Object.create({});
		} catch (e) {
			// If this fails the polyfil isn't loaded yet, but will be.
			// Can't add it to depedencies because of it would create a circular depedency.
			return true;
		}

		return isEnumerable.call(createdObj, '__proto__')
	}

	var dontEnums = [
		'toString',
		'toLocaleString',
		'valueOf',
		'hasOwnProperty',
		'isPrototypeOf',
		'propertyIsEnumerable',
		'constructor'
	];
	var equalsConstructorPrototype = function (o) {
		var ctor = o.constructor;
		return ctor && ctor.prototype === o;
	};
	var excludedKeys = {
		$console: true,
		$external: true,
		$frame: true,
		$frameElement: true,
		$frames: true,
		$innerHeight: true,
		$innerWidth: true,
		$outerHeight: true,
		$outerWidth: true,
		$pageXOffset: true,
		$pageYOffset: true,
		$parent: true,
		$scrollLeft: true,
		$scrollTop: true,
		$scrollX: true,
		$scrollY: true,
		$self: true,
		$webkitIndexedDB: true,
		$webkitStorageInfo: true,
		$window: true
	};
	var hasAutomationEqualityBug = (function () {
		if (typeof window === 'undefined') { return false; }
		for (var k in window) {
			try {
				if (!excludedKeys['$' + k] && has.call(window, k) && window[k] !== null && typeof window[k] === 'object') {
					try {
						equalsConstructorPrototype(window[k]);
					} catch (e) {
						return true;
					}
				}
			} catch (e) {
				return true;
			}
		}
		return false;
	}());
	var equalsConstructorPrototypeIfNotBuggy = function (o) {
		if (typeof window === 'undefined' || !hasAutomationEqualityBug) {
			return equalsConstructorPrototype(o);
		}
		try {
			return equalsConstructorPrototype(o);
		} catch (e) {
			return false;
		}
	};

	function isArgumentsObject(value) {
		var str = toStr.call(value);
		var isArgs = str === '[object Arguments]';
		if (!isArgs) {
			isArgs = str !== '[object Array]' &&
				value !== null &&
				typeof value === 'object' &&
				typeof value.length === 'number' &&
				value.length >= 0 &&
				toStr.call(value.callee) === '[object Function]';
		}
		return isArgs;
	}

	return function keys(object) {
		var isFunction = toStr.call(object) === '[object Function]';
		var isArguments = isArgumentsObject(object);
		var isString = toStr.call(object) === '[object String]';
		var theKeys = [];

		if (object === undefined || object === null) {
			throw new TypeError('Cannot convert undefined or null to object');
		}

		var skipPrototype = hasPrototypeEnumBug && isFunction;
		if (isString && object.length > 0 && !has.call(object, 0)) {
			for (var i = 0; i < object.length; ++i) {
				theKeys.push(String(i));
			}
		}

		if (isArguments && object.length > 0) {
			for (var j = 0; j < object.length; ++j) {
				theKeys.push(String(j));
			}
		} else {
			for (var name in object) {
				if (!(hasProtoEnumBug() && name === '__proto__') && !(skipPrototype && name === 'prototype') && has.call(object, name)) {
					theKeys.push(String(name));
				}
			}
		}

		if (hasDontEnumBug) {
			var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);

			for (var k = 0; k < dontEnums.length; ++k) {
				if (!(skipConstructor && dontEnums[k] === 'constructor') && has.call(object, dontEnums[k])) {
					theKeys.push(dontEnums[k]);
				}
			}
		}
		return theKeys;
	};
}()));

}


// _ESAbstract.EnumerableOwnProperties
/* globals Type, Get */
// 7.3.21. EnumerableOwnProperties ( O, kind )
function EnumerableOwnProperties(O, kind) { // eslint-disable-line no-unused-vars
	// 1. Assert: Type(O) is Object.
	// 2. Let ownKeys be ? O.[[OwnPropertyKeys]]().
	var ownKeys = Object.keys(O);
	// 3. Let properties be a new empty List.
	var properties = [];
	// 4. For each element key of ownKeys in List order, do
	var length = ownKeys.length;
	for (var i = 0; i < length; i++) {
		var key = ownKeys[i];
		// a. If Type(key) is String, then
		if (Type(key) === 'string') {
			// i. Let desc be ? O.[[GetOwnProperty]](key).
			var desc = Object.getOwnPropertyDescriptor(O, key);
			// ii. If desc is not undefined and desc.[[Enumerable]] is true, then
			if (desc && desc.enumerable) {
				// 1. If kind is "key", append key to properties.
				if (kind === 'key') {
					properties.push(key);
					// 2. Else,
				} else {
					// a. Let value be ? Get(O, key).
					var value = Get(O, key);
					// b. If kind is "value", append value to properties.
					if (kind === 'value') {
						properties.push(value);
						// c. Else,
					} else {
						// i. Assert: kind is "key+value".
						// ii. Let entry be CreateArrayFromList(« key, value »).
						var entry = [key, value];
						// iii. Append entry to properties.
						properties.push(entry);
					}
				}
			}
		}
	}
	// 5. Order the elements of properties so they are in the same relative order as would be produced by the Iterator that would be returned if the EnumerateObjectProperties internal method were invoked with O.
	// 6. Return properties.
	return properties;
}
if (!("entries"in Object
)) {

// Object.entries
/* global CreateMethodProperty, EnumerableOwnProperties, ToObject, Type */

(function () {
	var toString = ({}).toString;
	var split = ''.split;

	// 19.1.2.5. Object.entries ( O )
	CreateMethodProperty(Object, 'entries', function entries(O) {
		// 1. Let obj be ? ToObject(O).
		var obj = ToObject(O);
		// Polyfill.io fallback for non-array-like strings which exist in some ES3 user-agents (IE 8)
		obj = (Type(obj) === 'string' || obj instanceof String) && toString.call(O) == '[object String]' ? split.call(O, '') : Object(O);
		// 2. Let nameList be ? EnumerableOwnProperties(obj, "key+value").
		var nameList = EnumerableOwnProperties(obj, "key+value");
		// 3. Return CreateArrayFromList(nameList).
		// Polyfill.io - nameList is already an array.
		return nameList;
	});
}());

}

if (!("assign"in Object
)) {

// Object.assign
/* global CreateMethodProperty, Get, ToObject */
// 19.1.2.1 Object.assign ( target, ...sources )
CreateMethodProperty(Object, 'assign', function assign(target, source) { // eslint-disable-line no-unused-vars
	// 1. Let to be ? ToObject(target).
	var to = ToObject(target);

	// 2. If only one argument was passed, return to.
	if (arguments.length === 1) {
		return to;
	}

	// 3. Let sources be the List of argument values starting with the second argument
	var sources = Array.prototype.slice.call(arguments, 1);

	// 4. For each element nextSource of sources, in ascending index order, do
	var index1;
	var index2;
	var keys;
	var from;
	for (index1 = 0; index1 < sources.length; index1++) {
		var nextSource = sources[index1];
		// a. If nextSource is undefined or null, let keys be a new empty List.
		if (nextSource === undefined || nextSource === null) {
			keys = [];
			// b. Else,
		} else {
			// Polyfill.io - In order to get strings in ES3 and old V8 working correctly we need to split them into an array ourselves.
			// i. Let from be ! ToObject(nextSource).
			from = Object.prototype.toString.call(nextSource) === '[object String]' ? String(nextSource).split('') : ToObject(nextSource);
			// ii. Let keys be ? from.[[OwnPropertyKeys]]().
			/*
				This step in our polyfill is not complying with the specification.
				[[OwnPropertyKeys]] is meant to return ALL keys, including non-enumerable and symbols.
				TODO: When we have Reflect.ownKeys, use that instead as it is the userland equivalent of [[OwnPropertyKeys]].
			*/
			keys = Object.keys(from);
		}

		// c. For each element nextKey of keys in List order, do
		for (index2 = 0; index2 < keys.length; index2++) {
			var nextKey = keys[index2];
			var enumerable;
			try {
				// i. Let desc be ? from.[[GetOwnProperty]](nextKey).
				var desc = Object.getOwnPropertyDescriptor(from, nextKey);
				// ii. If desc is not undefined and desc.[[Enumerable]] is true, then
				enumerable = desc !== undefined && desc.enumerable === true;
			} catch (e) {
				// Polyfill.io - We use Object.prototype.propertyIsEnumerable as a fallback
				// because `Object.getOwnPropertyDescriptor(window.location, 'hash')` causes Internet Explorer 11 to crash.
				enumerable = Object.prototype.propertyIsEnumerable.call(from, nextKey);
			}
			if (enumerable) {
				// 1. Let propValue be ? Get(from, nextKey).
				var propValue = Get(from, nextKey);
				// 2. Perform ? Set(to, nextKey, propValue, true).
				to[nextKey] = propValue;
			}
		}
	}
	// 5. Return to.
	return to;
});

}

if (!("defineProperties"in Object
)) {

// Object.defineProperties
/* global CreateMethodProperty, Get, ToObject, Type */
// 19.1.2.3. Object.defineProperties ( O, Properties )
CreateMethodProperty(Object, 'defineProperties', function defineProperties(O, Properties) {
	// 1. If Type(O) is not Object, throw a TypeError exception.
	if (Type(O) !== 'object') {
		throw new TypeError('Object.defineProperties called on non-object');
	}
	// 2. Let props be ? ToObject(Properties).
	var props = ToObject(Properties);
	// 3. Let keys be ? props.[[OwnPropertyKeys]]().
	/*
		Polyfill.io - This step in our polyfill is not complying with the specification.
		[[OwnPropertyKeys]] is meant to return ALL keys, including non-enumerable and symbols.
		TODO: When we have Reflect.ownKeys, use that instead as it is the userland equivalent of [[OwnPropertyKeys]].
	*/
	var keys = Object.keys(props);
	// 4. Let descriptors be a new empty List.
	var descriptors = [];
	// 5. For each element nextKey of keys in List order, do
	for (var i = 0; i < keys.length; i++) {
		var nextKey = keys[i];
		// a. Let propDesc be ? props.[[GetOwnProperty]](nextKey).
		var propDesc = Object.getOwnPropertyDescriptor(props, nextKey);
		// b. If propDesc is not undefined and propDesc.[[Enumerable]] is true, then
		if (propDesc !== undefined && propDesc.enumerable) {
			// i. Let descObj be ? Get(props, nextKey).
			var descObj = Get(props, nextKey);
			// ii. Let desc be ? ToPropertyDescriptor(descObj).
			// Polyfill.io - We skip this step because Object.defineProperty deals with it.
			// TODO: Implement this step?
			var desc = descObj;
			// iii. Append the pair (a two element List) consisting of nextKey and desc to the end of descriptors.
			descriptors.push([nextKey, desc]);
		}
	}
	// 6. For each pair from descriptors in list order, do
	for (var j = 0; j < descriptors.length; j++){
		// a. Let P be the first element of pair.
		var P = descriptors[j][0];
		// b. Let desc be the second element of pair.
		desc = descriptors[j][1];
		// c. Perform ? DefinePropertyOrThrow(O, P, desc).
		Object.defineProperty(O, P, desc);
	}
	// 7. Return O.
	return O;
});

}

if (!("location"in self&&"origin"in self.location
)) {

// location.origin
try {
	Object.defineProperty(window.location, 'origin', {
		enumerable: true,
		writable: false,
		value: window.location.protocol + '//' + window.location.hostname + (window.location.port ? ':' + window.location.port : ''),
		configurable: false
	});
} catch(e) {

	// IE9 is throwing "Object doesn't support this action" when attempting defineProperty on window.location, so provide an alternative
	window.location.origin = window.location.protocol + '//' + window.location.hostname + (window.location.port ? ':' + window.location.port : '');
}

}

if (!("create"in Object
)) {

// Object.create
/* global CreateMethodProperty, Type */
(function () {
	var supportsProto = !({ __proto__: null } instanceof Object);
	if (supportsProto) {
		var createEmpty = function () {
			return {
				__proto__: null
			};
		};
	} else {
		// Taken from https://github.com/es-shims/es5-shim/blob/a265a136d6220146cfbb09026c2de1fa42e220ec/es5-sham.js#L247
		// In old IE __proto__ can't be used to manually set `null`, nor does
		// any other method exist to make an object that inherits from nothing,
		// aside from Object.prototype itself. Instead, create a new global
		// object and *steal* its Object.prototype and strip it bare. This is
		// used as the prototype to create nullary objects.
		createEmpty = function () {
			// Determine which approach to use
			// see https://github.com/es-shims/es5-shim/issues/150
			var iframe = document.createElement('iframe');
			iframe.style.display = 'none';
			var parent = document.body || document.documentElement;
			parent.appendChild(iframe);
			iframe.src = 'javascript:';
			var empty = iframe.contentWindow.Object.prototype;
			parent.removeChild(iframe);
			iframe = null;
			delete empty.constructor;
			delete empty.hasOwnProperty;
			delete empty.propertyIsEnumerable;
			delete empty.isPrototypeOf;
			delete empty.toLocaleString;
			delete empty.toString;
			delete empty.valueOf;
			var Empty = function Empty() {};
			Empty.prototype = empty;
			// short-circuit future calls
			createEmpty = function () {
				return new Empty();
			};
			return new Empty();
		};
	}

	function T() {}

	CreateMethodProperty(Object, 'create', function create(O, properties) {
		// 1. If Type(O) is neither Object nor Null, throw a TypeError exception.
		if (Type(O) !== 'object' && Type(O) !== 'null') {
			throw new TypeError('Object prototype may only be an Object or null');
		}
		if (Type(O) === 'null') {
			var obj = createEmpty();
		} else {
			// 2. Let obj be ObjectCreate(O).
			T.prototype = O;
			obj = new T();
			obj.__proto__ = O;


			obj.constructor.prototype = O;
			obj.__proto__ = O;
		}

		// 3. If Properties is not undefined, then
		if (1 in arguments) {
			// a. Return ? ObjectDefineProperties(obj, Properties).
			return Object.defineProperties(obj, properties);
		}

		return obj;
	});
}());

}


// _ESAbstract.OrdinaryCreateFromConstructor
/* global GetPrototypeFromConstructor */
// 9.1.13. OrdinaryCreateFromConstructor ( constructor, intrinsicDefaultProto [ , internalSlotsList ] )
function OrdinaryCreateFromConstructor(constructor, intrinsicDefaultProto) { // eslint-disable-line no-unused-vars
	var internalSlotsList = arguments[2] || {};
	// 1. Assert: intrinsicDefaultProto is a String value that is this specification's name of an intrinsic object.
	// The corresponding object must be an intrinsic that is intended to be used as the[[Prototype]] value of an object.

	// 2. Let proto be ? GetPrototypeFromConstructor(constructor, intrinsicDefaultProto).
	var proto = GetPrototypeFromConstructor(constructor, intrinsicDefaultProto);

	// 3. Return ObjectCreate(proto, internalSlotsList).
	// Polyfill.io - We do not pass internalSlotsList to Object.create because Object.create does not use the default ordinary object definitions specified in 9.1.
	var obj = Object.create(proto);
	for (var name in internalSlotsList) {
		if (Object.prototype.hasOwnProperty.call(internalSlotsList, name)) {
			Object.defineProperty(obj, name, {
				configurable: true,
				enumerable: false,
				writable: true,
				value: internalSlotsList[name]
			});
		}
	}
	return obj;
}

// _ESAbstract.Construct
/* global IsConstructor, OrdinaryCreateFromConstructor, Call */
// 7.3.13. Construct ( F [ , argumentsList [ , newTarget ]] )
function Construct(F /* [ , argumentsList [ , newTarget ]] */) { // eslint-disable-line no-unused-vars
	// 1. If newTarget is not present, set newTarget to F.
	var newTarget = arguments.length > 2 ? arguments[2] : F;

	// 2. If argumentsList is not present, set argumentsList to a new empty List.
	var argumentsList = arguments.length > 1 ? arguments[1] : [];

	// 3. Assert: IsConstructor(F) is true.
	if (!IsConstructor(F)) {
		throw new TypeError('F must be a constructor.');
	}

	// 4. Assert: IsConstructor(newTarget) is true.
	if (!IsConstructor(newTarget)) {
		throw new TypeError('newTarget must be a constructor.');
	}

	// 5. Return ? F.[[Construct]](argumentsList, newTarget).
	// Polyfill.io - If newTarget is the same as F, it is equivalent to new F(...argumentsList).
	if (newTarget === F) {
		return new (Function.prototype.bind.apply(F, [null].concat(argumentsList)))();
	} else {
		// Polyfill.io - This is mimicking section 9.2.2 step 5.a.
		var obj = OrdinaryCreateFromConstructor(newTarget, Object.prototype);
		return Call(F, obj, argumentsList);
	}
}

// _ESAbstract.ArraySpeciesCreate
/* global IsArray, ArrayCreate, Get, Type, IsConstructor, Construct */
// 9.4.2.3. ArraySpeciesCreate ( originalArray, length )
function ArraySpeciesCreate(originalArray, length) { // eslint-disable-line no-unused-vars
	// 1. Assert: length is an integer Number ≥ 0.
	// 2. If length is -0, set length to +0.
	if (length === 0 && 1/length === -Infinity) {
		length = 0;
	}

	// 3. Let isArray be ? IsArray(originalArray).
	var isArray = IsArray(originalArray);

	// 4. If isArray is false, return ? ArrayCreate(length).
	if (isArray === false) {
		return ArrayCreate(length);
	}

	// 5. Let C be ? Get(originalArray, "constructor").
	var C = Get(originalArray, 'constructor');

	// Polyfill.io - We skip this section as not sure how to make a cross-realm normal Array, a same-realm Array.
	// 6. If IsConstructor(C) is true, then
	// if (IsConstructor(C)) {
		// a. Let thisRealm be the current Realm Record.
		// b. Let realmC be ? GetFunctionRealm(C).
		// c. If thisRealm and realmC are not the same Realm Record, then
			// i. If SameValue(C, realmC.[[Intrinsics]].[[%Array%]]) is true, set C to undefined.
	// }
	// 7. If Type(C) is Object, then
	if (Type(C) === 'object') {
		// a. Set C to ? Get(C, @@species).
		C = 'Symbol' in self && 'species' in self.Symbol ? Get(C, self.Symbol.species) : undefined;
		// b. If C is null, set C to undefined.
		if (C === null) {
			C = undefined;
		}
	}
	// 8. If C is undefined, return ? ArrayCreate(length).
	if (C === undefined) {
		return ArrayCreate(length);
	}
	// 9. If IsConstructor(C) is false, throw a TypeError exception.
	if (!IsConstructor(C)) {
		throw new TypeError('C must be a constructor');
	}
	// 10. Return ? Construct(C, « length »).
	return Construct(C, [length]);
}
if (!("filter"in Array.prototype
)) {

// Array.prototype.filter
/* global CreateMethodProperty, ToObject, ToLength, Get, IsCallable, ArraySpeciesCreate, ToString, HasProperty, ToBoolean, Call, CreateDataPropertyOrThrow */
// 22.1.3.7. Array.prototype.filter ( callbackfn [ , thisArg ] )
CreateMethodProperty(Array.prototype, 'filter', function filter(callbackfn /* [ , thisArg ] */) {
	// 1. Let O be ? ToObject(this value).
	var O = ToObject(this);
	// 2. Let len be ? ToLength(? Get(O, "length")).
	var len = ToLength(Get(O, "length"));
	// 3. If IsCallable(callbackfn) is false, throw a TypeError exception.
	if (IsCallable(callbackfn) === false) {
		throw new TypeError(callbackfn + ' is not a function');
	}
	// 4. If thisArg is present, let T be thisArg; else let T be undefined.
	var T = arguments.length > 1 ? arguments[1] : undefined;
	// 5. Let A be ? ArraySpeciesCreate(O, 0).
	var A = ArraySpeciesCreate(O, 0);
	// 6. Let k be 0.
	var k = 0;
	// 7. Let to be 0.
	var to = 0;
	// 8. Repeat, while k < len
	while (k < len) {
		// a. Let Pk be ! ToString(k).
		var Pk = ToString(k);
		// b. Let kPresent be ? HasProperty(O, Pk).
		var kPresent = HasProperty(O, Pk);
		// c. If kPresent is true, then
		if (kPresent) {
			// i. Let kValue be ? Get(O, Pk).
			var kValue = Get(O, Pk);
			// ii. Let selected be ToBoolean(? Call(callbackfn, T, « kValue, k, O »)).
			var selected = ToBoolean(Call(callbackfn, T, [kValue, k, O]));
			// iii. If selected is true, then
			if (selected) {
				// 1. Perform ? CreateDataPropertyOrThrow(A, ! ToString(to), kValue)
				CreateDataPropertyOrThrow(A, ToString(to), kValue);
				// 2. Increase to by 1.
				to = to + 1;
			}

		}
		// d. Increase k by 1.
		k = k + 1;
	}
	// 9. Return A.
	return A;
});

}

if (!("flat"in Array.prototype
)) {

// Array.prototype.flat
/* global CreateMethodProperty, ToObject, ToLength, Get, ToInteger, ArraySpeciesCreate, FlattenIntoArray */
// 22.1.3.10 Array.prototype.flat( [ depth ] )
CreateMethodProperty(Array.prototype, 'flat', function flat() {
	"use strict";
	var depth = arguments[0];
	// 1. Let O be ? ToObject(this value).
	var O = ToObject(this);
	// 2. Let sourceLen be ? ToLength(? Get(O, "length")).
	var sourceLen = ToLength(Get(O, "length"));
	// 3. Let depthNum be 1.
	var depthNum = 1;
	// 4. If depth is not undefined, then
	if (depth !== void 0) {
		// a. Set depthNum to ? ToInteger(depth).
		depthNum = ToInteger(depth);
	}
	// 5. Let A be ? ArraySpeciesCreate(O, 0).
	var A = ArraySpeciesCreate(O,0);
	// 6. Perform ? FlattenIntoArray(A, O, sourceLen, 0, depthNum).
	FlattenIntoArray(A, O, sourceLen, 0, depthNum);
	// 7. Return A.
	return A;
});

}

if (!("flatMap"in Array.prototype
)) {

// Array.prototype.flatMap
/* global CreateMethodProperty, ToObject, ToLength, Get, IsCallable, ArraySpeciesCreate, FlattenIntoArray */
// 22.1.3.11 Array.prototype.flatMap ( mapperFunction [ , thisArg ] )
CreateMethodProperty(Array.prototype, 'flatMap', function flatMap(mapperFunction /* , thisArg */ ) {
	"use strict";
	// 1. Let O be ? ToObject(this value).
	var O = ToObject(this);
	// 2. Let sourceLen be ? ToLength(? Get(O, "length")).
	var sourceLen = ToLength(Get(O, "length"));
	// 3. If IsCallable(mapperFunction) is false, throw a TypeError exception.
	if (IsCallable(mapperFunction) === false) {
		throw new TypeError('mapperFunction is not callable.');
	}
	// 4. If thisArg is present, let T be thisArg; else let T be undefined.
	var T;
	if (1 in arguments) {
		T = arguments[1];
	} else {
		T = undefined;
	}
	// 5. Let A be ? ArraySpeciesCreate(O, 0).
	var A = ArraySpeciesCreate(O, 0);
	// 6. Perform ? FlattenIntoArray(A, O, sourceLen, 0, 1, mapperFunction, T).
	FlattenIntoArray(A, O, sourceLen, 0, 1, mapperFunction, T);
	// 7. Return A.
	return A;
});

}

if (!("map"in Array.prototype
)) {

// Array.prototype.map
/* global ArraySpeciesCreate, Call, CreateDataPropertyOrThrow, CreateMethodProperty, Get, HasProperty, IsCallable, ToLength, ToObject, ToString */
// 22.1.3.16. Array.prototype.map ( callbackfn [ , thisArg ] )
CreateMethodProperty(Array.prototype, 'map', function map(callbackfn /* [ , thisArg ] */) {
	// 1. Let O be ? ToObject(this value).
	var O = ToObject(this);
	// 2. Let len be ? ToLength(? Get(O, "length")).
	var len = ToLength(Get(O, "length"));
	// 3. If IsCallable(callbackfn) is false, throw a TypeError exception.
	if (IsCallable(callbackfn) === false) {
		throw new TypeError(callbackfn + ' is not a function');
	}
	// 4. If thisArg is present, let T be thisArg; else let T be undefined.
	var T = arguments.length > 1 ? arguments[1] : undefined;
	// 5. Let A be ? ArraySpeciesCreate(O, len).
	var A = ArraySpeciesCreate(O, len);
	// 6. Let k be 0.
	var k = 0;
	// 7. Repeat, while k < len
	while (k < len) {
		// a. Let Pk be ! ToString(k).
		var Pk = ToString(k);
		// b. Let kPresent be ? HasProperty(O, Pk).
		var kPresent = HasProperty(O, Pk);
		// c. If kPresent is true, then
		if (kPresent) {
			// i. Let kValue be ? Get(O, Pk).
			var kValue = Get(O, Pk);
			// ii. Let mappedValue be ? Call(callbackfn, T, « kValue, k, O »).
			var mappedValue = Call(callbackfn, T, [kValue, k, O]);
			// iii. Perform ? CreateDataPropertyOrThrow(A, Pk, mappedValue).
			CreateDataPropertyOrThrow(A, Pk, mappedValue);
		}
		// d. Increase k by 1.
		k = k + 1;
	}
	// 8. Return A.
	return A;
});

}

if (!("sort"in Array.prototype&&function(){var r={length:3,0:2,1:1,2:3}
return Array.prototype.sort.call(r,function(r,t){return r-t})===r}()
)) {

// Array.prototype.sort
/* global CreateMethodProperty, IsCallable */
"use strict";

var origSort = Array.prototype.sort;

// 22.1.3.27 Array.prototype.sort ( comparefn )
// The elements of this array are sorted. The sort must be stable (that is,
// elements that compare equal must remain in their original order). If
// comparefn is not undefined, it should be a function that accepts two
// arguments x and y and returns a negative value
// if x < y, zero if x = y, or a positive value if x > y.

CreateMethodProperty(Array.prototype, "sort", function sort(compareFn) {
	// 1. If comparefn is not undefined and IsCallable(comparefn) is false, throw
	//    a TypeError exception.
	if (compareFn !== undefined && IsCallable(compareFn) === false) {
		throw new TypeError(
			"The comparison function must be either a function or undefined"
		);
	}

	// Polyfill.io - the steps below are handled by the native
	// Array.prototype.sort method that we call.
	// 2.Let obj be ? ToObject(this value).
	// 3.Let len be ? LengthOfArrayLike(obj).

	// if comprateFn does not exist, use the spec defined in-built SortCompare.
	if (compareFn === undefined) {
		origSort.call(this);
	} else {
		// if compareFn exists, sort the array, breaking sorting ties by using the
		// items' original index position.

		// Keep track of the items starting index position.
		var that = Array.prototype.map.call(this, function(item, index) {
			return { item: item, index: index };
		});
		origSort.call(that, function(a, b) {
			var compareResult = compareFn.call(undefined, a.item, b.item);
			return compareResult === 0 ? a.index - b.index : compareResult;
		});
		// update the original object (`this`) with the new position for the items
		// which were moved.
		for (var a in that) {
			if (Object.prototype.hasOwnProperty.call(that, a)) {
				if (that[a].item !== this[a]) {
					this[a] = that[a].item;
				}
			}
		}
	}

	return this;
});

}

if (!("Intl"in self&&"getCanonicalLocales"in self.Intl
)) {

// Intl.getCanonicalLocales
(function() {
  // node_modules/tslib/tslib.es6.js
  var __assign = function() {
    __assign = Object.assign || function __assign2(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s)
          if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
      }
      return t;
    };
    return __assign.apply(this, arguments);
  };
  function __spreadArray(to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
      to[j] = from[i];
    return to;
  }

  // bazel-out/darwin-fastbuild/bin/packages/intl-getcanonicallocales/lib/src/parser.js
  var ALPHANUM_1_8 = /^[a-z0-9]{1,8}$/i;
  var ALPHANUM_2_8 = /^[a-z0-9]{2,8}$/i;
  var ALPHANUM_3_8 = /^[a-z0-9]{3,8}$/i;
  var KEY_REGEX = /^[a-z0-9][a-z]$/i;
  var TYPE_REGEX = /^[a-z0-9]{3,8}$/i;
  var ALPHA_4 = /^[a-z]{4}$/i;
  var OTHER_EXTENSION_TYPE = /^[0-9a-svwyz]$/i;
  var UNICODE_REGION_SUBTAG_REGEX = /^([a-z]{2}|[0-9]{3})$/i;
  var UNICODE_VARIANT_SUBTAG_REGEX = /^([a-z0-9]{5,8}|[0-9][a-z0-9]{3})$/i;
  var UNICODE_LANGUAGE_SUBTAG_REGEX = /^([a-z]{2,3}|[a-z]{5,8})$/i;
  var TKEY_REGEX = /^[a-z][0-9]$/i;
  var SEPARATOR = "-";
  function isUnicodeLanguageSubtag(lang) {
    return UNICODE_LANGUAGE_SUBTAG_REGEX.test(lang);
  }
  function isUnicodeRegionSubtag(region) {
    return UNICODE_REGION_SUBTAG_REGEX.test(region);
  }
  function isUnicodeScriptSubtag(script) {
    return ALPHA_4.test(script);
  }
  function isUnicodeVariantSubtag(variant) {
    return UNICODE_VARIANT_SUBTAG_REGEX.test(variant);
  }
  function parseUnicodeLanguageId(chunks) {
    if (typeof chunks === "string") {
      chunks = chunks.split(SEPARATOR);
    }
    var lang = chunks.shift();
    if (!lang) {
      throw new RangeError("Missing unicode_language_subtag");
    }
    if (lang === "root") {
      return {lang: "root", variants: []};
    }
    if (!isUnicodeLanguageSubtag(lang)) {
      throw new RangeError("Malformed unicode_language_subtag");
    }
    var script;
    if (chunks.length && isUnicodeScriptSubtag(chunks[0])) {
      script = chunks.shift();
    }
    var region;
    if (chunks.length && isUnicodeRegionSubtag(chunks[0])) {
      region = chunks.shift();
    }
    var variants = {};
    while (chunks.length && isUnicodeVariantSubtag(chunks[0])) {
      var variant = chunks.shift();
      if (variant in variants) {
        throw new RangeError('Duplicate variant "' + variant + '"');
      }
      variants[variant] = 1;
    }
    return {
      lang: lang,
      script: script,
      region: region,
      variants: Object.keys(variants)
    };
  }
  function parseUnicodeExtension(chunks) {
    var keywords = [];
    var keyword;
    while (chunks.length && (keyword = parseKeyword(chunks))) {
      keywords.push(keyword);
    }
    if (keywords.length) {
      return {
        type: "u",
        keywords: keywords,
        attributes: []
      };
    }
    var attributes = [];
    while (chunks.length && ALPHANUM_3_8.test(chunks[0])) {
      attributes.push(chunks.shift());
    }
    while (chunks.length && (keyword = parseKeyword(chunks))) {
      keywords.push(keyword);
    }
    if (keywords.length || attributes.length) {
      return {
        type: "u",
        attributes: attributes,
        keywords: keywords
      };
    }
    throw new RangeError("Malformed unicode_extension");
  }
  function parseKeyword(chunks) {
    var key;
    if (!KEY_REGEX.test(chunks[0])) {
      return;
    }
    key = chunks.shift();
    var type = [];
    while (chunks.length && TYPE_REGEX.test(chunks[0])) {
      type.push(chunks.shift());
    }
    var value = "";
    if (type.length) {
      value = type.join(SEPARATOR);
    }
    return [key, value];
  }
  function parseTransformedExtension(chunks) {
    var lang;
    try {
      lang = parseUnicodeLanguageId(chunks);
    } catch (e) {
    }
    var fields = [];
    while (chunks.length && TKEY_REGEX.test(chunks[0])) {
      var key = chunks.shift();
      var value = [];
      while (chunks.length && ALPHANUM_3_8.test(chunks[0])) {
        value.push(chunks.shift());
      }
      if (!value.length) {
        throw new RangeError('Missing tvalue for tkey "' + key + '"');
      }
      fields.push([key, value.join(SEPARATOR)]);
    }
    if (fields.length) {
      return {
        type: "t",
        fields: fields,
        lang: lang
      };
    }
    throw new RangeError("Malformed transformed_extension");
  }
  function parsePuExtension(chunks) {
    var exts = [];
    while (chunks.length && ALPHANUM_1_8.test(chunks[0])) {
      exts.push(chunks.shift());
    }
    if (exts.length) {
      return {
        type: "x",
        value: exts.join(SEPARATOR)
      };
    }
    throw new RangeError("Malformed private_use_extension");
  }
  function parseOtherExtensionValue(chunks) {
    var exts = [];
    while (chunks.length && ALPHANUM_2_8.test(chunks[0])) {
      exts.push(chunks.shift());
    }
    if (exts.length) {
      return exts.join(SEPARATOR);
    }
    return "";
  }
  function parseExtensions(chunks) {
    if (!chunks.length) {
      return {extensions: []};
    }
    var extensions = [];
    var unicodeExtension;
    var transformedExtension;
    var puExtension;
    var otherExtensionMap = {};
    do {
      var type = chunks.shift();
      switch (type) {
        case "u":
        case "U":
          if (unicodeExtension) {
            throw new RangeError("There can only be 1 -u- extension");
          }
          unicodeExtension = parseUnicodeExtension(chunks);
          extensions.push(unicodeExtension);
          break;
        case "t":
        case "T":
          if (transformedExtension) {
            throw new RangeError("There can only be 1 -t- extension");
          }
          transformedExtension = parseTransformedExtension(chunks);
          extensions.push(transformedExtension);
          break;
        case "x":
        case "X":
          if (puExtension) {
            throw new RangeError("There can only be 1 -x- extension");
          }
          puExtension = parsePuExtension(chunks);
          extensions.push(puExtension);
          break;
        default:
          if (!OTHER_EXTENSION_TYPE.test(type)) {
            throw new RangeError("Malformed extension type");
          }
          if (type in otherExtensionMap) {
            throw new RangeError("There can only be 1 -" + type + "- extension");
          }
          var extension = {
            type: type,
            value: parseOtherExtensionValue(chunks)
          };
          otherExtensionMap[extension.type] = extension;
          extensions.push(extension);
          break;
      }
    } while (chunks.length);
    return {extensions: extensions};
  }
  function parseUnicodeLocaleId(locale) {
    var chunks = locale.split(SEPARATOR);
    var lang = parseUnicodeLanguageId(chunks);
    return __assign({lang: lang}, parseExtensions(chunks));
  }

  // bazel-out/darwin-fastbuild/bin/packages/intl-getcanonicallocales/lib/src/emitter.js
  function emitUnicodeLanguageId(lang) {
    if (!lang) {
      return "";
    }
    return __spreadArray([lang.lang, lang.script, lang.region], lang.variants || []).filter(Boolean).join("-");
  }
  function emitUnicodeLocaleId(_a) {
    var lang = _a.lang, extensions = _a.extensions;
    var chunks = [emitUnicodeLanguageId(lang)];
    for (var _i = 0, extensions_1 = extensions; _i < extensions_1.length; _i++) {
      var ext = extensions_1[_i];
      chunks.push(ext.type);
      switch (ext.type) {
        case "u":
          chunks.push.apply(chunks, __spreadArray(__spreadArray([], ext.attributes), ext.keywords.reduce(function(all, kv) {
            return all.concat(kv);
          }, [])));
          break;
        case "t":
          chunks.push.apply(chunks, __spreadArray([emitUnicodeLanguageId(ext.lang)], ext.fields.reduce(function(all, kv) {
            return all.concat(kv);
          }, [])));
          break;
        default:
          chunks.push(ext.value);
          break;
      }
    }
    return chunks.filter(Boolean).join("-");
  }

  // bazel-out/darwin-fastbuild/bin/packages/intl-getcanonicallocales/lib/src/data/aliases.js
  var languageAlias = {
    "aa-saaho": "ssy",
    "aam": "aas",
    "aar": "aa",
    "abk": "ab",
    "adp": "dz",
    "afr": "af",
    "agp": "apf",
    "ais": "ami",
    "aju": "jrb",
    "aka": "ak",
    "alb": "sq",
    "als": "sq",
    "amh": "am",
    "ara": "ar",
    "arb": "ar",
    "arg": "an",
    "arm": "hy",
    "art-lojban": "jbo",
    "asd": "snz",
    "asm": "as",
    "aue": "ktz",
    "ava": "av",
    "ave": "ae",
    "aym": "ay",
    "ayr": "ay",
    "ayx": "nun",
    "aze": "az",
    "azj": "az",
    "bak": "ba",
    "bam": "bm",
    "baq": "eu",
    "baz": "nvo",
    "bcc": "bal",
    "bcl": "bik",
    "bel": "be",
    "ben": "bn",
    "bgm": "bcg",
    "bh": "bho",
    "bhk": "fbl",
    "bih": "bho",
    "bis": "bi",
    "bjd": "drl",
    "bjq": "bzc",
    "bkb": "ebk",
    "bod": "bo",
    "bos": "bs",
    "bre": "br",
    "btb": "beb",
    "bul": "bg",
    "bur": "my",
    "bxk": "luy",
    "bxr": "bua",
    "cat": "ca",
    "ccq": "rki",
    "cel-gaulish": "xtg",
    "ces": "cs",
    "cha": "ch",
    "che": "ce",
    "chi": "zh",
    "chu": "cu",
    "chv": "cv",
    "cjr": "mom",
    "cka": "cmr",
    "cld": "syr",
    "cmk": "xch",
    "cmn": "zh",
    "cnr": "sr-ME",
    "cor": "kw",
    "cos": "co",
    "coy": "pij",
    "cqu": "quh",
    "cre": "cr",
    "cwd": "cr",
    "cym": "cy",
    "cze": "cs",
    "daf": "dnj",
    "dan": "da",
    "dap": "njz",
    "deu": "de",
    "dgo": "doi",
    "dhd": "mwr",
    "dik": "din",
    "diq": "zza",
    "dit": "dif",
    "div": "dv",
    "djl": "dze",
    "dkl": "aqd",
    "drh": "mn",
    "drr": "kzk",
    "drw": "fa-AF",
    "dud": "uth",
    "duj": "dwu",
    "dut": "nl",
    "dwl": "dbt",
    "dzo": "dz",
    "ekk": "et",
    "ell": "el",
    "elp": "amq",
    "emk": "man",
    "en-GB-oed": "en-GB-oxendict",
    "eng": "en",
    "epo": "eo",
    "esk": "ik",
    "est": "et",
    "eus": "eu",
    "ewe": "ee",
    "fao": "fo",
    "fas": "fa",
    "fat": "ak",
    "fij": "fj",
    "fin": "fi",
    "fra": "fr",
    "fre": "fr",
    "fry": "fy",
    "fuc": "ff",
    "ful": "ff",
    "gav": "dev",
    "gaz": "om",
    "gbc": "wny",
    "gbo": "grb",
    "geo": "ka",
    "ger": "de",
    "gfx": "vaj",
    "ggn": "gvr",
    "ggo": "esg",
    "ggr": "gtu",
    "gio": "aou",
    "gla": "gd",
    "gle": "ga",
    "glg": "gl",
    "gli": "kzk",
    "glv": "gv",
    "gno": "gon",
    "gre": "el",
    "grn": "gn",
    "gti": "nyc",
    "gug": "gn",
    "guj": "gu",
    "guv": "duz",
    "gya": "gba",
    "hat": "ht",
    "hau": "ha",
    "hbs": "sr-Latn",
    "hdn": "hai",
    "hea": "hmn",
    "heb": "he",
    "her": "hz",
    "him": "srx",
    "hin": "hi",
    "hmo": "ho",
    "hrr": "jal",
    "hrv": "hr",
    "hun": "hu",
    "hy-arevmda": "hyw",
    "hye": "hy",
    "i-ami": "ami",
    "i-bnn": "bnn",
    "i-default": "en-x-i-default",
    "i-enochian": "und-x-i-enochian",
    "i-hak": "hak",
    "i-klingon": "tlh",
    "i-lux": "lb",
    "i-mingo": "see-x-i-mingo",
    "i-navajo": "nv",
    "i-pwn": "pwn",
    "i-tao": "tao",
    "i-tay": "tay",
    "i-tsu": "tsu",
    "ibi": "opa",
    "ibo": "ig",
    "ice": "is",
    "ido": "io",
    "iii": "ii",
    "ike": "iu",
    "iku": "iu",
    "ile": "ie",
    "ill": "ilm",
    "ilw": "gal",
    "in": "id",
    "ina": "ia",
    "ind": "id",
    "ipk": "ik",
    "isl": "is",
    "ita": "it",
    "iw": "he",
    "izi": "eza",
    "jar": "jgk",
    "jav": "jv",
    "jeg": "oyb",
    "ji": "yi",
    "jpn": "ja",
    "jw": "jv",
    "kal": "kl",
    "kan": "kn",
    "kas": "ks",
    "kat": "ka",
    "kau": "kr",
    "kaz": "kk",
    "kdv": "zkd",
    "kgc": "tdf",
    "kgd": "ncq",
    "kgh": "kml",
    "khk": "mn",
    "khm": "km",
    "kik": "ki",
    "kin": "rw",
    "kir": "ky",
    "kmr": "ku",
    "knc": "kr",
    "kng": "kg",
    "knn": "kok",
    "koj": "kwv",
    "kom": "kv",
    "kon": "kg",
    "kor": "ko",
    "kpp": "jkm",
    "kpv": "kv",
    "krm": "bmf",
    "ktr": "dtp",
    "kua": "kj",
    "kur": "ku",
    "kvs": "gdj",
    "kwq": "yam",
    "kxe": "tvd",
    "kxl": "kru",
    "kzh": "dgl",
    "kzj": "dtp",
    "kzt": "dtp",
    "lao": "lo",
    "lat": "la",
    "lav": "lv",
    "lbk": "bnc",
    "leg": "enl",
    "lii": "raq",
    "lim": "li",
    "lin": "ln",
    "lit": "lt",
    "llo": "ngt",
    "lmm": "rmx",
    "ltz": "lb",
    "lub": "lu",
    "lug": "lg",
    "lvs": "lv",
    "mac": "mk",
    "mah": "mh",
    "mal": "ml",
    "mao": "mi",
    "mar": "mr",
    "may": "ms",
    "meg": "cir",
    "mgx": "jbk",
    "mhr": "chm",
    "mkd": "mk",
    "mlg": "mg",
    "mlt": "mt",
    "mnk": "man",
    "mnt": "wnn",
    "mo": "ro",
    "mof": "xnt",
    "mol": "ro",
    "mon": "mn",
    "mri": "mi",
    "msa": "ms",
    "mst": "mry",
    "mup": "raj",
    "mwd": "dmw",
    "mwj": "vaj",
    "mya": "my",
    "myd": "aog",
    "myt": "mry",
    "nad": "xny",
    "nau": "na",
    "nav": "nv",
    "nbf": "nru",
    "nbl": "nr",
    "nbx": "ekc",
    "ncp": "kdz",
    "nde": "nd",
    "ndo": "ng",
    "nep": "ne",
    "nld": "nl",
    "nln": "azd",
    "nlr": "nrk",
    "nno": "nn",
    "nns": "nbr",
    "nnx": "ngv",
    "no-bok": "nb",
    "no-bokmal": "nb",
    "no-nyn": "nn",
    "no-nynorsk": "nn",
    "nob": "nb",
    "noo": "dtd",
    "nor": "no",
    "npi": "ne",
    "nts": "pij",
    "nxu": "bpp",
    "nya": "ny",
    "oci": "oc",
    "ojg": "oj",
    "oji": "oj",
    "ori": "or",
    "orm": "om",
    "ory": "or",
    "oss": "os",
    "oun": "vaj",
    "pan": "pa",
    "pbu": "ps",
    "pcr": "adx",
    "per": "fa",
    "pes": "fa",
    "pli": "pi",
    "plt": "mg",
    "pmc": "huw",
    "pmu": "phr",
    "pnb": "lah",
    "pol": "pl",
    "por": "pt",
    "ppa": "bfy",
    "ppr": "lcq",
    "prs": "fa-AF",
    "pry": "prt",
    "pus": "ps",
    "puz": "pub",
    "que": "qu",
    "quz": "qu",
    "rmr": "emx",
    "rmy": "rom",
    "roh": "rm",
    "ron": "ro",
    "rum": "ro",
    "run": "rn",
    "rus": "ru",
    "sag": "sg",
    "san": "sa",
    "sap": "aqt",
    "sca": "hle",
    "scc": "sr",
    "scr": "hr",
    "sgl": "isk",
    "sgn-BE-FR": "sfb",
    "sgn-BE-NL": "vgt",
    "sgn-BR": "bzs",
    "sgn-CH-DE": "sgg",
    "sgn-CO": "csn",
    "sgn-DE": "gsg",
    "sgn-DK": "dsl",
    "sgn-ES": "ssp",
    "sgn-FR": "fsl",
    "sgn-GB": "bfi",
    "sgn-GR": "gss",
    "sgn-IE": "isg",
    "sgn-IT": "ise",
    "sgn-JP": "jsl",
    "sgn-MX": "mfs",
    "sgn-NI": "ncs",
    "sgn-NL": "dse",
    "sgn-NO": "nsi",
    "sgn-PT": "psr",
    "sgn-SE": "swl",
    "sgn-US": "ase",
    "sgn-ZA": "sfs",
    "sh": "sr-Latn",
    "sin": "si",
    "skk": "oyb",
    "slk": "sk",
    "slo": "sk",
    "slv": "sl",
    "sme": "se",
    "smo": "sm",
    "sna": "sn",
    "snd": "sd",
    "som": "so",
    "sot": "st",
    "spa": "es",
    "spy": "kln",
    "sqi": "sq",
    "src": "sc",
    "srd": "sc",
    "srp": "sr",
    "ssw": "ss",
    "sul": "sgd",
    "sum": "ulw",
    "sun": "su",
    "swa": "sw",
    "swc": "sw-CD",
    "swe": "sv",
    "swh": "sw",
    "tah": "ty",
    "tam": "ta",
    "tat": "tt",
    "tdu": "dtp",
    "tel": "te",
    "tgg": "bjp",
    "tgk": "tg",
    "tgl": "fil",
    "tha": "th",
    "thc": "tpo",
    "thw": "ola",
    "thx": "oyb",
    "tib": "bo",
    "tid": "itd",
    "tie": "ras",
    "tir": "ti",
    "tkk": "twm",
    "tl": "fil",
    "tlw": "weo",
    "tmp": "tyj",
    "tne": "kak",
    "tnf": "fa-AF",
    "ton": "to",
    "tsf": "taj",
    "tsn": "tn",
    "tso": "ts",
    "ttq": "tmh",
    "tuk": "tk",
    "tur": "tr",
    "tw": "ak",
    "twi": "ak",
    "uig": "ug",
    "ukr": "uk",
    "umu": "del",
    "und-aaland": "und-AX",
    "und-arevela": "und",
    "und-arevmda": "und",
    "und-bokmal": "und",
    "und-hakka": "und",
    "und-hepburn-heploc": "und-alalc97",
    "und-lojban": "und",
    "und-nynorsk": "und",
    "und-saaho": "und",
    "und-xiang": "und",
    "unp": "wro",
    "uok": "ema",
    "urd": "ur",
    "uzb": "uz",
    "uzn": "uz",
    "ven": "ve",
    "vie": "vi",
    "vol": "vo",
    "wel": "cy",
    "wgw": "wgb",
    "wit": "nol",
    "wiw": "nwo",
    "wln": "wa",
    "wol": "wo",
    "xba": "cax",
    "xho": "xh",
    "xia": "acn",
    "xkh": "waw",
    "xpe": "kpe",
    "xrq": "dmw",
    "xsj": "suj",
    "xsl": "den",
    "ybd": "rki",
    "ydd": "yi",
    "yen": "ynq",
    "yid": "yi",
    "yiy": "yrm",
    "yma": "lrr",
    "ymt": "mtm",
    "yor": "yo",
    "yos": "zom",
    "yuu": "yug",
    "zai": "zap",
    "zh-cmn": "zh",
    "zh-cmn-Hans": "zh-Hans",
    "zh-cmn-Hant": "zh-Hant",
    "zh-gan": "gan",
    "zh-guoyu": "zh",
    "zh-hakka": "hak",
    "zh-min": "nan-x-zh-min",
    "zh-min-nan": "nan",
    "zh-wuu": "wuu",
    "zh-xiang": "hsn",
    "zh-yue": "yue",
    "zha": "za",
    "zho": "zh",
    "zir": "scv",
    "zsm": "ms",
    "zul": "zu",
    "zyb": "za"
  };
  var territoryAlias = {
    "100": "BG",
    "104": "MM",
    "108": "BI",
    "112": "BY",
    "116": "KH",
    "120": "CM",
    "124": "CA",
    "132": "CV",
    "136": "KY",
    "140": "CF",
    "144": "LK",
    "148": "TD",
    "152": "CL",
    "156": "CN",
    "158": "TW",
    "162": "CX",
    "166": "CC",
    "170": "CO",
    "172": "RU AM AZ BY GE KG KZ MD TJ TM UA UZ",
    "174": "KM",
    "175": "YT",
    "178": "CG",
    "180": "CD",
    "184": "CK",
    "188": "CR",
    "191": "HR",
    "192": "CU",
    "196": "CY",
    "200": "CZ SK",
    "203": "CZ",
    "204": "BJ",
    "208": "DK",
    "212": "DM",
    "214": "DO",
    "218": "EC",
    "222": "SV",
    "226": "GQ",
    "230": "ET",
    "231": "ET",
    "232": "ER",
    "233": "EE",
    "234": "FO",
    "238": "FK",
    "239": "GS",
    "242": "FJ",
    "246": "FI",
    "248": "AX",
    "249": "FR",
    "250": "FR",
    "254": "GF",
    "258": "PF",
    "260": "TF",
    "262": "DJ",
    "266": "GA",
    "268": "GE",
    "270": "GM",
    "275": "PS",
    "276": "DE",
    "278": "DE",
    "280": "DE",
    "288": "GH",
    "292": "GI",
    "296": "KI",
    "300": "GR",
    "304": "GL",
    "308": "GD",
    "312": "GP",
    "316": "GU",
    "320": "GT",
    "324": "GN",
    "328": "GY",
    "332": "HT",
    "334": "HM",
    "336": "VA",
    "340": "HN",
    "344": "HK",
    "348": "HU",
    "352": "IS",
    "356": "IN",
    "360": "ID",
    "364": "IR",
    "368": "IQ",
    "372": "IE",
    "376": "IL",
    "380": "IT",
    "384": "CI",
    "388": "JM",
    "392": "JP",
    "398": "KZ",
    "400": "JO",
    "404": "KE",
    "408": "KP",
    "410": "KR",
    "414": "KW",
    "417": "KG",
    "418": "LA",
    "422": "LB",
    "426": "LS",
    "428": "LV",
    "430": "LR",
    "434": "LY",
    "438": "LI",
    "440": "LT",
    "442": "LU",
    "446": "MO",
    "450": "MG",
    "454": "MW",
    "458": "MY",
    "462": "MV",
    "466": "ML",
    "470": "MT",
    "474": "MQ",
    "478": "MR",
    "480": "MU",
    "484": "MX",
    "492": "MC",
    "496": "MN",
    "498": "MD",
    "499": "ME",
    "500": "MS",
    "504": "MA",
    "508": "MZ",
    "512": "OM",
    "516": "NA",
    "520": "NR",
    "524": "NP",
    "528": "NL",
    "530": "CW SX BQ",
    "531": "CW",
    "532": "CW SX BQ",
    "533": "AW",
    "534": "SX",
    "535": "BQ",
    "536": "SA IQ",
    "540": "NC",
    "548": "VU",
    "554": "NZ",
    "558": "NI",
    "562": "NE",
    "566": "NG",
    "570": "NU",
    "574": "NF",
    "578": "NO",
    "580": "MP",
    "581": "UM",
    "582": "FM MH MP PW",
    "583": "FM",
    "584": "MH",
    "585": "PW",
    "586": "PK",
    "591": "PA",
    "598": "PG",
    "600": "PY",
    "604": "PE",
    "608": "PH",
    "612": "PN",
    "616": "PL",
    "620": "PT",
    "624": "GW",
    "626": "TL",
    "630": "PR",
    "634": "QA",
    "638": "RE",
    "642": "RO",
    "643": "RU",
    "646": "RW",
    "652": "BL",
    "654": "SH",
    "659": "KN",
    "660": "AI",
    "662": "LC",
    "663": "MF",
    "666": "PM",
    "670": "VC",
    "674": "SM",
    "678": "ST",
    "682": "SA",
    "686": "SN",
    "688": "RS",
    "690": "SC",
    "694": "SL",
    "702": "SG",
    "703": "SK",
    "704": "VN",
    "705": "SI",
    "706": "SO",
    "710": "ZA",
    "716": "ZW",
    "720": "YE",
    "724": "ES",
    "728": "SS",
    "729": "SD",
    "732": "EH",
    "736": "SD",
    "740": "SR",
    "744": "SJ",
    "748": "SZ",
    "752": "SE",
    "756": "CH",
    "760": "SY",
    "762": "TJ",
    "764": "TH",
    "768": "TG",
    "772": "TK",
    "776": "TO",
    "780": "TT",
    "784": "AE",
    "788": "TN",
    "792": "TR",
    "795": "TM",
    "796": "TC",
    "798": "TV",
    "800": "UG",
    "804": "UA",
    "807": "MK",
    "810": "RU AM AZ BY EE GE KZ KG LV LT MD TJ TM UA UZ",
    "818": "EG",
    "826": "GB",
    "830": "JE GG",
    "831": "GG",
    "832": "JE",
    "833": "IM",
    "834": "TZ",
    "840": "US",
    "850": "VI",
    "854": "BF",
    "858": "UY",
    "860": "UZ",
    "862": "VE",
    "876": "WF",
    "882": "WS",
    "886": "YE",
    "887": "YE",
    "890": "RS ME SI HR MK BA",
    "891": "RS ME",
    "894": "ZM",
    "958": "AA",
    "959": "QM",
    "960": "QN",
    "962": "QP",
    "963": "QQ",
    "964": "QR",
    "965": "QS",
    "966": "QT",
    "967": "EU",
    "968": "QV",
    "969": "QW",
    "970": "QX",
    "971": "QY",
    "972": "QZ",
    "973": "XA",
    "974": "XB",
    "975": "XC",
    "976": "XD",
    "977": "XE",
    "978": "XF",
    "979": "XG",
    "980": "XH",
    "981": "XI",
    "982": "XJ",
    "983": "XK",
    "984": "XL",
    "985": "XM",
    "986": "XN",
    "987": "XO",
    "988": "XP",
    "989": "XQ",
    "990": "XR",
    "991": "XS",
    "992": "XT",
    "993": "XU",
    "994": "XV",
    "995": "XW",
    "996": "XX",
    "997": "XY",
    "998": "XZ",
    "999": "ZZ",
    "004": "AF",
    "008": "AL",
    "010": "AQ",
    "012": "DZ",
    "016": "AS",
    "020": "AD",
    "024": "AO",
    "028": "AG",
    "031": "AZ",
    "032": "AR",
    "036": "AU",
    "040": "AT",
    "044": "BS",
    "048": "BH",
    "050": "BD",
    "051": "AM",
    "052": "BB",
    "056": "BE",
    "060": "BM",
    "062": "034 143",
    "064": "BT",
    "068": "BO",
    "070": "BA",
    "072": "BW",
    "074": "BV",
    "076": "BR",
    "084": "BZ",
    "086": "IO",
    "090": "SB",
    "092": "VG",
    "096": "BN",
    "AAA": "AA",
    "ABW": "AW",
    "AFG": "AF",
    "AGO": "AO",
    "AIA": "AI",
    "ALA": "AX",
    "ALB": "AL",
    "AN": "CW SX BQ",
    "AND": "AD",
    "ANT": "CW SX BQ",
    "ARE": "AE",
    "ARG": "AR",
    "ARM": "AM",
    "ASC": "AC",
    "ASM": "AS",
    "ATA": "AQ",
    "ATF": "TF",
    "ATG": "AG",
    "AUS": "AU",
    "AUT": "AT",
    "AZE": "AZ",
    "BDI": "BI",
    "BEL": "BE",
    "BEN": "BJ",
    "BES": "BQ",
    "BFA": "BF",
    "BGD": "BD",
    "BGR": "BG",
    "BHR": "BH",
    "BHS": "BS",
    "BIH": "BA",
    "BLM": "BL",
    "BLR": "BY",
    "BLZ": "BZ",
    "BMU": "BM",
    "BOL": "BO",
    "BRA": "BR",
    "BRB": "BB",
    "BRN": "BN",
    "BTN": "BT",
    "BU": "MM",
    "BUR": "MM",
    "BVT": "BV",
    "BWA": "BW",
    "CAF": "CF",
    "CAN": "CA",
    "CCK": "CC",
    "CHE": "CH",
    "CHL": "CL",
    "CHN": "CN",
    "CIV": "CI",
    "CMR": "CM",
    "COD": "CD",
    "COG": "CG",
    "COK": "CK",
    "COL": "CO",
    "COM": "KM",
    "CPT": "CP",
    "CPV": "CV",
    "CRI": "CR",
    "CS": "RS ME",
    "CT": "KI",
    "CUB": "CU",
    "CUW": "CW",
    "CXR": "CX",
    "CYM": "KY",
    "CYP": "CY",
    "CZE": "CZ",
    "DD": "DE",
    "DDR": "DE",
    "DEU": "DE",
    "DGA": "DG",
    "DJI": "DJ",
    "DMA": "DM",
    "DNK": "DK",
    "DOM": "DO",
    "DY": "BJ",
    "DZA": "DZ",
    "ECU": "EC",
    "EGY": "EG",
    "ERI": "ER",
    "ESH": "EH",
    "ESP": "ES",
    "EST": "EE",
    "ETH": "ET",
    "FIN": "FI",
    "FJI": "FJ",
    "FLK": "FK",
    "FQ": "AQ TF",
    "FRA": "FR",
    "FRO": "FO",
    "FSM": "FM",
    "FX": "FR",
    "FXX": "FR",
    "GAB": "GA",
    "GBR": "GB",
    "GEO": "GE",
    "GGY": "GG",
    "GHA": "GH",
    "GIB": "GI",
    "GIN": "GN",
    "GLP": "GP",
    "GMB": "GM",
    "GNB": "GW",
    "GNQ": "GQ",
    "GRC": "GR",
    "GRD": "GD",
    "GRL": "GL",
    "GTM": "GT",
    "GUF": "GF",
    "GUM": "GU",
    "GUY": "GY",
    "HKG": "HK",
    "HMD": "HM",
    "HND": "HN",
    "HRV": "HR",
    "HTI": "HT",
    "HUN": "HU",
    "HV": "BF",
    "IDN": "ID",
    "IMN": "IM",
    "IND": "IN",
    "IOT": "IO",
    "IRL": "IE",
    "IRN": "IR",
    "IRQ": "IQ",
    "ISL": "IS",
    "ISR": "IL",
    "ITA": "IT",
    "JAM": "JM",
    "JEY": "JE",
    "JOR": "JO",
    "JPN": "JP",
    "JT": "UM",
    "KAZ": "KZ",
    "KEN": "KE",
    "KGZ": "KG",
    "KHM": "KH",
    "KIR": "KI",
    "KNA": "KN",
    "KOR": "KR",
    "KWT": "KW",
    "LAO": "LA",
    "LBN": "LB",
    "LBR": "LR",
    "LBY": "LY",
    "LCA": "LC",
    "LIE": "LI",
    "LKA": "LK",
    "LSO": "LS",
    "LTU": "LT",
    "LUX": "LU",
    "LVA": "LV",
    "MAC": "MO",
    "MAF": "MF",
    "MAR": "MA",
    "MCO": "MC",
    "MDA": "MD",
    "MDG": "MG",
    "MDV": "MV",
    "MEX": "MX",
    "MHL": "MH",
    "MI": "UM",
    "MKD": "MK",
    "MLI": "ML",
    "MLT": "MT",
    "MMR": "MM",
    "MNE": "ME",
    "MNG": "MN",
    "MNP": "MP",
    "MOZ": "MZ",
    "MRT": "MR",
    "MSR": "MS",
    "MTQ": "MQ",
    "MUS": "MU",
    "MWI": "MW",
    "MYS": "MY",
    "MYT": "YT",
    "NAM": "NA",
    "NCL": "NC",
    "NER": "NE",
    "NFK": "NF",
    "NGA": "NG",
    "NH": "VU",
    "NIC": "NI",
    "NIU": "NU",
    "NLD": "NL",
    "NOR": "NO",
    "NPL": "NP",
    "NQ": "AQ",
    "NRU": "NR",
    "NT": "SA IQ",
    "NTZ": "SA IQ",
    "NZL": "NZ",
    "OMN": "OM",
    "PAK": "PK",
    "PAN": "PA",
    "PC": "FM MH MP PW",
    "PCN": "PN",
    "PER": "PE",
    "PHL": "PH",
    "PLW": "PW",
    "PNG": "PG",
    "POL": "PL",
    "PRI": "PR",
    "PRK": "KP",
    "PRT": "PT",
    "PRY": "PY",
    "PSE": "PS",
    "PU": "UM",
    "PYF": "PF",
    "PZ": "PA",
    "QAT": "QA",
    "QMM": "QM",
    "QNN": "QN",
    "QPP": "QP",
    "QQQ": "QQ",
    "QRR": "QR",
    "QSS": "QS",
    "QTT": "QT",
    "QU": "EU",
    "QUU": "EU",
    "QVV": "QV",
    "QWW": "QW",
    "QXX": "QX",
    "QYY": "QY",
    "QZZ": "QZ",
    "REU": "RE",
    "RH": "ZW",
    "ROU": "RO",
    "RUS": "RU",
    "RWA": "RW",
    "SAU": "SA",
    "SCG": "RS ME",
    "SDN": "SD",
    "SEN": "SN",
    "SGP": "SG",
    "SGS": "GS",
    "SHN": "SH",
    "SJM": "SJ",
    "SLB": "SB",
    "SLE": "SL",
    "SLV": "SV",
    "SMR": "SM",
    "SOM": "SO",
    "SPM": "PM",
    "SRB": "RS",
    "SSD": "SS",
    "STP": "ST",
    "SU": "RU AM AZ BY EE GE KZ KG LV LT MD TJ TM UA UZ",
    "SUN": "RU AM AZ BY EE GE KZ KG LV LT MD TJ TM UA UZ",
    "SUR": "SR",
    "SVK": "SK",
    "SVN": "SI",
    "SWE": "SE",
    "SWZ": "SZ",
    "SXM": "SX",
    "SYC": "SC",
    "SYR": "SY",
    "TAA": "TA",
    "TCA": "TC",
    "TCD": "TD",
    "TGO": "TG",
    "THA": "TH",
    "TJK": "TJ",
    "TKL": "TK",
    "TKM": "TM",
    "TLS": "TL",
    "TMP": "TL",
    "TON": "TO",
    "TP": "TL",
    "TTO": "TT",
    "TUN": "TN",
    "TUR": "TR",
    "TUV": "TV",
    "TWN": "TW",
    "TZA": "TZ",
    "UGA": "UG",
    "UK": "GB",
    "UKR": "UA",
    "UMI": "UM",
    "URY": "UY",
    "USA": "US",
    "UZB": "UZ",
    "VAT": "VA",
    "VCT": "VC",
    "VD": "VN",
    "VEN": "VE",
    "VGB": "VG",
    "VIR": "VI",
    "VNM": "VN",
    "VUT": "VU",
    "WK": "UM",
    "WLF": "WF",
    "WSM": "WS",
    "XAA": "XA",
    "XBB": "XB",
    "XCC": "XC",
    "XDD": "XD",
    "XEE": "XE",
    "XFF": "XF",
    "XGG": "XG",
    "XHH": "XH",
    "XII": "XI",
    "XJJ": "XJ",
    "XKK": "XK",
    "XLL": "XL",
    "XMM": "XM",
    "XNN": "XN",
    "XOO": "XO",
    "XPP": "XP",
    "XQQ": "XQ",
    "XRR": "XR",
    "XSS": "XS",
    "XTT": "XT",
    "XUU": "XU",
    "XVV": "XV",
    "XWW": "XW",
    "XXX": "XX",
    "XYY": "XY",
    "XZZ": "XZ",
    "YD": "YE",
    "YEM": "YE",
    "YMD": "YE",
    "YU": "RS ME",
    "YUG": "RS ME",
    "ZAF": "ZA",
    "ZAR": "CD",
    "ZMB": "ZM",
    "ZR": "CD",
    "ZWE": "ZW",
    "ZZZ": "ZZ"
  };
  var scriptAlias = {
    "Qaai": "Zinh"
  };
  var variantAlias = {
    "heploc": "alalc97",
    "polytoni": "polyton"
  };

  // node_modules/cldr-core/supplemental/likelySubtags.json
  var supplemental = {
    version: {
      _unicodeVersion: "13.0.0",
      _cldrVersion: "39"
    },
    likelySubtags: {
      aa: "aa-Latn-ET",
      aai: "aai-Latn-ZZ",
      aak: "aak-Latn-ZZ",
      aau: "aau-Latn-ZZ",
      ab: "ab-Cyrl-GE",
      abi: "abi-Latn-ZZ",
      abq: "abq-Cyrl-ZZ",
      abr: "abr-Latn-GH",
      abt: "abt-Latn-ZZ",
      aby: "aby-Latn-ZZ",
      acd: "acd-Latn-ZZ",
      ace: "ace-Latn-ID",
      ach: "ach-Latn-UG",
      ada: "ada-Latn-GH",
      ade: "ade-Latn-ZZ",
      adj: "adj-Latn-ZZ",
      adp: "adp-Tibt-BT",
      ady: "ady-Cyrl-RU",
      adz: "adz-Latn-ZZ",
      ae: "ae-Avst-IR",
      aeb: "aeb-Arab-TN",
      aey: "aey-Latn-ZZ",
      af: "af-Latn-ZA",
      agc: "agc-Latn-ZZ",
      agd: "agd-Latn-ZZ",
      agg: "agg-Latn-ZZ",
      agm: "agm-Latn-ZZ",
      ago: "ago-Latn-ZZ",
      agq: "agq-Latn-CM",
      aha: "aha-Latn-ZZ",
      ahl: "ahl-Latn-ZZ",
      aho: "aho-Ahom-IN",
      ajg: "ajg-Latn-ZZ",
      ak: "ak-Latn-GH",
      akk: "akk-Xsux-IQ",
      ala: "ala-Latn-ZZ",
      ali: "ali-Latn-ZZ",
      aln: "aln-Latn-XK",
      alt: "alt-Cyrl-RU",
      am: "am-Ethi-ET",
      amm: "amm-Latn-ZZ",
      amn: "amn-Latn-ZZ",
      amo: "amo-Latn-NG",
      amp: "amp-Latn-ZZ",
      an: "an-Latn-ES",
      anc: "anc-Latn-ZZ",
      ank: "ank-Latn-ZZ",
      ann: "ann-Latn-ZZ",
      any: "any-Latn-ZZ",
      aoj: "aoj-Latn-ZZ",
      aom: "aom-Latn-ZZ",
      aoz: "aoz-Latn-ID",
      apc: "apc-Arab-ZZ",
      apd: "apd-Arab-TG",
      ape: "ape-Latn-ZZ",
      apr: "apr-Latn-ZZ",
      aps: "aps-Latn-ZZ",
      apz: "apz-Latn-ZZ",
      ar: "ar-Arab-EG",
      arc: "arc-Armi-IR",
      "arc-Nbat": "arc-Nbat-JO",
      "arc-Palm": "arc-Palm-SY",
      arh: "arh-Latn-ZZ",
      arn: "arn-Latn-CL",
      aro: "aro-Latn-BO",
      arq: "arq-Arab-DZ",
      ars: "ars-Arab-SA",
      ary: "ary-Arab-MA",
      arz: "arz-Arab-EG",
      as: "as-Beng-IN",
      asa: "asa-Latn-TZ",
      ase: "ase-Sgnw-US",
      asg: "asg-Latn-ZZ",
      aso: "aso-Latn-ZZ",
      ast: "ast-Latn-ES",
      ata: "ata-Latn-ZZ",
      atg: "atg-Latn-ZZ",
      atj: "atj-Latn-CA",
      auy: "auy-Latn-ZZ",
      av: "av-Cyrl-RU",
      avl: "avl-Arab-ZZ",
      avn: "avn-Latn-ZZ",
      avt: "avt-Latn-ZZ",
      avu: "avu-Latn-ZZ",
      awa: "awa-Deva-IN",
      awb: "awb-Latn-ZZ",
      awo: "awo-Latn-ZZ",
      awx: "awx-Latn-ZZ",
      ay: "ay-Latn-BO",
      ayb: "ayb-Latn-ZZ",
      az: "az-Latn-AZ",
      "az-Arab": "az-Arab-IR",
      "az-IQ": "az-Arab-IQ",
      "az-IR": "az-Arab-IR",
      "az-RU": "az-Cyrl-RU",
      ba: "ba-Cyrl-RU",
      bal: "bal-Arab-PK",
      ban: "ban-Latn-ID",
      bap: "bap-Deva-NP",
      bar: "bar-Latn-AT",
      bas: "bas-Latn-CM",
      bav: "bav-Latn-ZZ",
      bax: "bax-Bamu-CM",
      bba: "bba-Latn-ZZ",
      bbb: "bbb-Latn-ZZ",
      bbc: "bbc-Latn-ID",
      bbd: "bbd-Latn-ZZ",
      bbj: "bbj-Latn-CM",
      bbp: "bbp-Latn-ZZ",
      bbr: "bbr-Latn-ZZ",
      bcf: "bcf-Latn-ZZ",
      bch: "bch-Latn-ZZ",
      bci: "bci-Latn-CI",
      bcm: "bcm-Latn-ZZ",
      bcn: "bcn-Latn-ZZ",
      bco: "bco-Latn-ZZ",
      bcq: "bcq-Ethi-ZZ",
      bcu: "bcu-Latn-ZZ",
      bdd: "bdd-Latn-ZZ",
      be: "be-Cyrl-BY",
      bef: "bef-Latn-ZZ",
      beh: "beh-Latn-ZZ",
      bej: "bej-Arab-SD",
      bem: "bem-Latn-ZM",
      bet: "bet-Latn-ZZ",
      bew: "bew-Latn-ID",
      bex: "bex-Latn-ZZ",
      bez: "bez-Latn-TZ",
      bfd: "bfd-Latn-CM",
      bfq: "bfq-Taml-IN",
      bft: "bft-Arab-PK",
      bfy: "bfy-Deva-IN",
      bg: "bg-Cyrl-BG",
      bgc: "bgc-Deva-IN",
      bgn: "bgn-Arab-PK",
      bgx: "bgx-Grek-TR",
      bhb: "bhb-Deva-IN",
      bhg: "bhg-Latn-ZZ",
      bhi: "bhi-Deva-IN",
      bhl: "bhl-Latn-ZZ",
      bho: "bho-Deva-IN",
      bhy: "bhy-Latn-ZZ",
      bi: "bi-Latn-VU",
      bib: "bib-Latn-ZZ",
      big: "big-Latn-ZZ",
      bik: "bik-Latn-PH",
      bim: "bim-Latn-ZZ",
      bin: "bin-Latn-NG",
      bio: "bio-Latn-ZZ",
      biq: "biq-Latn-ZZ",
      bjh: "bjh-Latn-ZZ",
      bji: "bji-Ethi-ZZ",
      bjj: "bjj-Deva-IN",
      bjn: "bjn-Latn-ID",
      bjo: "bjo-Latn-ZZ",
      bjr: "bjr-Latn-ZZ",
      bjt: "bjt-Latn-SN",
      bjz: "bjz-Latn-ZZ",
      bkc: "bkc-Latn-ZZ",
      bkm: "bkm-Latn-CM",
      bkq: "bkq-Latn-ZZ",
      bku: "bku-Latn-PH",
      bkv: "bkv-Latn-ZZ",
      blt: "blt-Tavt-VN",
      bm: "bm-Latn-ML",
      bmh: "bmh-Latn-ZZ",
      bmk: "bmk-Latn-ZZ",
      bmq: "bmq-Latn-ML",
      bmu: "bmu-Latn-ZZ",
      bn: "bn-Beng-BD",
      bng: "bng-Latn-ZZ",
      bnm: "bnm-Latn-ZZ",
      bnp: "bnp-Latn-ZZ",
      bo: "bo-Tibt-CN",
      boj: "boj-Latn-ZZ",
      bom: "bom-Latn-ZZ",
      bon: "bon-Latn-ZZ",
      bpy: "bpy-Beng-IN",
      bqc: "bqc-Latn-ZZ",
      bqi: "bqi-Arab-IR",
      bqp: "bqp-Latn-ZZ",
      bqv: "bqv-Latn-CI",
      br: "br-Latn-FR",
      bra: "bra-Deva-IN",
      brh: "brh-Arab-PK",
      brx: "brx-Deva-IN",
      brz: "brz-Latn-ZZ",
      bs: "bs-Latn-BA",
      bsj: "bsj-Latn-ZZ",
      bsq: "bsq-Bass-LR",
      bss: "bss-Latn-CM",
      bst: "bst-Ethi-ZZ",
      bto: "bto-Latn-PH",
      btt: "btt-Latn-ZZ",
      btv: "btv-Deva-PK",
      bua: "bua-Cyrl-RU",
      buc: "buc-Latn-YT",
      bud: "bud-Latn-ZZ",
      bug: "bug-Latn-ID",
      buk: "buk-Latn-ZZ",
      bum: "bum-Latn-CM",
      buo: "buo-Latn-ZZ",
      bus: "bus-Latn-ZZ",
      buu: "buu-Latn-ZZ",
      bvb: "bvb-Latn-GQ",
      bwd: "bwd-Latn-ZZ",
      bwr: "bwr-Latn-ZZ",
      bxh: "bxh-Latn-ZZ",
      bye: "bye-Latn-ZZ",
      byn: "byn-Ethi-ER",
      byr: "byr-Latn-ZZ",
      bys: "bys-Latn-ZZ",
      byv: "byv-Latn-CM",
      byx: "byx-Latn-ZZ",
      bza: "bza-Latn-ZZ",
      bze: "bze-Latn-ML",
      bzf: "bzf-Latn-ZZ",
      bzh: "bzh-Latn-ZZ",
      bzw: "bzw-Latn-ZZ",
      ca: "ca-Latn-ES",
      cad: "cad-Latn-US",
      can: "can-Latn-ZZ",
      cbj: "cbj-Latn-ZZ",
      cch: "cch-Latn-NG",
      ccp: "ccp-Cakm-BD",
      ce: "ce-Cyrl-RU",
      ceb: "ceb-Latn-PH",
      cfa: "cfa-Latn-ZZ",
      cgg: "cgg-Latn-UG",
      ch: "ch-Latn-GU",
      chk: "chk-Latn-FM",
      chm: "chm-Cyrl-RU",
      cho: "cho-Latn-US",
      chp: "chp-Latn-CA",
      chr: "chr-Cher-US",
      cic: "cic-Latn-US",
      cja: "cja-Arab-KH",
      cjm: "cjm-Cham-VN",
      cjv: "cjv-Latn-ZZ",
      ckb: "ckb-Arab-IQ",
      ckl: "ckl-Latn-ZZ",
      cko: "cko-Latn-ZZ",
      cky: "cky-Latn-ZZ",
      cla: "cla-Latn-ZZ",
      cme: "cme-Latn-ZZ",
      cmg: "cmg-Soyo-MN",
      co: "co-Latn-FR",
      cop: "cop-Copt-EG",
      cps: "cps-Latn-PH",
      cr: "cr-Cans-CA",
      crh: "crh-Cyrl-UA",
      crj: "crj-Cans-CA",
      crk: "crk-Cans-CA",
      crl: "crl-Cans-CA",
      crm: "crm-Cans-CA",
      crs: "crs-Latn-SC",
      cs: "cs-Latn-CZ",
      csb: "csb-Latn-PL",
      csw: "csw-Cans-CA",
      ctd: "ctd-Pauc-MM",
      cu: "cu-Cyrl-RU",
      "cu-Glag": "cu-Glag-BG",
      cv: "cv-Cyrl-RU",
      cy: "cy-Latn-GB",
      da: "da-Latn-DK",
      dad: "dad-Latn-ZZ",
      daf: "daf-Latn-CI",
      dag: "dag-Latn-ZZ",
      dah: "dah-Latn-ZZ",
      dak: "dak-Latn-US",
      dar: "dar-Cyrl-RU",
      dav: "dav-Latn-KE",
      dbd: "dbd-Latn-ZZ",
      dbq: "dbq-Latn-ZZ",
      dcc: "dcc-Arab-IN",
      ddn: "ddn-Latn-ZZ",
      de: "de-Latn-DE",
      ded: "ded-Latn-ZZ",
      den: "den-Latn-CA",
      dga: "dga-Latn-ZZ",
      dgh: "dgh-Latn-ZZ",
      dgi: "dgi-Latn-ZZ",
      dgl: "dgl-Arab-ZZ",
      dgr: "dgr-Latn-CA",
      dgz: "dgz-Latn-ZZ",
      dia: "dia-Latn-ZZ",
      dje: "dje-Latn-NE",
      dmf: "dmf-Medf-NG",
      dnj: "dnj-Latn-CI",
      dob: "dob-Latn-ZZ",
      doi: "doi-Deva-IN",
      dop: "dop-Latn-ZZ",
      dow: "dow-Latn-ZZ",
      drh: "drh-Mong-CN",
      dri: "dri-Latn-ZZ",
      drs: "drs-Ethi-ZZ",
      dsb: "dsb-Latn-DE",
      dtm: "dtm-Latn-ML",
      dtp: "dtp-Latn-MY",
      dts: "dts-Latn-ZZ",
      dty: "dty-Deva-NP",
      dua: "dua-Latn-CM",
      duc: "duc-Latn-ZZ",
      dud: "dud-Latn-ZZ",
      dug: "dug-Latn-ZZ",
      dv: "dv-Thaa-MV",
      dva: "dva-Latn-ZZ",
      dww: "dww-Latn-ZZ",
      dyo: "dyo-Latn-SN",
      dyu: "dyu-Latn-BF",
      dz: "dz-Tibt-BT",
      dzg: "dzg-Latn-ZZ",
      ebu: "ebu-Latn-KE",
      ee: "ee-Latn-GH",
      efi: "efi-Latn-NG",
      egl: "egl-Latn-IT",
      egy: "egy-Egyp-EG",
      eka: "eka-Latn-ZZ",
      eky: "eky-Kali-MM",
      el: "el-Grek-GR",
      ema: "ema-Latn-ZZ",
      emi: "emi-Latn-ZZ",
      en: "en-Latn-US",
      "en-Shaw": "en-Shaw-GB",
      enn: "enn-Latn-ZZ",
      enq: "enq-Latn-ZZ",
      eo: "eo-Latn-001",
      eri: "eri-Latn-ZZ",
      es: "es-Latn-ES",
      esg: "esg-Gonm-IN",
      esu: "esu-Latn-US",
      et: "et-Latn-EE",
      etr: "etr-Latn-ZZ",
      ett: "ett-Ital-IT",
      etu: "etu-Latn-ZZ",
      etx: "etx-Latn-ZZ",
      eu: "eu-Latn-ES",
      ewo: "ewo-Latn-CM",
      ext: "ext-Latn-ES",
      eza: "eza-Latn-ZZ",
      fa: "fa-Arab-IR",
      faa: "faa-Latn-ZZ",
      fab: "fab-Latn-ZZ",
      fag: "fag-Latn-ZZ",
      fai: "fai-Latn-ZZ",
      fan: "fan-Latn-GQ",
      ff: "ff-Latn-SN",
      "ff-Adlm": "ff-Adlm-GN",
      ffi: "ffi-Latn-ZZ",
      ffm: "ffm-Latn-ML",
      fi: "fi-Latn-FI",
      fia: "fia-Arab-SD",
      fil: "fil-Latn-PH",
      fit: "fit-Latn-SE",
      fj: "fj-Latn-FJ",
      flr: "flr-Latn-ZZ",
      fmp: "fmp-Latn-ZZ",
      fo: "fo-Latn-FO",
      fod: "fod-Latn-ZZ",
      fon: "fon-Latn-BJ",
      for: "for-Latn-ZZ",
      fpe: "fpe-Latn-ZZ",
      fqs: "fqs-Latn-ZZ",
      fr: "fr-Latn-FR",
      frc: "frc-Latn-US",
      frp: "frp-Latn-FR",
      frr: "frr-Latn-DE",
      frs: "frs-Latn-DE",
      fub: "fub-Arab-CM",
      fud: "fud-Latn-WF",
      fue: "fue-Latn-ZZ",
      fuf: "fuf-Latn-GN",
      fuh: "fuh-Latn-ZZ",
      fuq: "fuq-Latn-NE",
      fur: "fur-Latn-IT",
      fuv: "fuv-Latn-NG",
      fuy: "fuy-Latn-ZZ",
      fvr: "fvr-Latn-SD",
      fy: "fy-Latn-NL",
      ga: "ga-Latn-IE",
      gaa: "gaa-Latn-GH",
      gaf: "gaf-Latn-ZZ",
      gag: "gag-Latn-MD",
      gah: "gah-Latn-ZZ",
      gaj: "gaj-Latn-ZZ",
      gam: "gam-Latn-ZZ",
      gan: "gan-Hans-CN",
      gaw: "gaw-Latn-ZZ",
      gay: "gay-Latn-ID",
      gba: "gba-Latn-ZZ",
      gbf: "gbf-Latn-ZZ",
      gbm: "gbm-Deva-IN",
      gby: "gby-Latn-ZZ",
      gbz: "gbz-Arab-IR",
      gcr: "gcr-Latn-GF",
      gd: "gd-Latn-GB",
      gde: "gde-Latn-ZZ",
      gdn: "gdn-Latn-ZZ",
      gdr: "gdr-Latn-ZZ",
      geb: "geb-Latn-ZZ",
      gej: "gej-Latn-ZZ",
      gel: "gel-Latn-ZZ",
      gez: "gez-Ethi-ET",
      gfk: "gfk-Latn-ZZ",
      ggn: "ggn-Deva-NP",
      ghs: "ghs-Latn-ZZ",
      gil: "gil-Latn-KI",
      gim: "gim-Latn-ZZ",
      gjk: "gjk-Arab-PK",
      gjn: "gjn-Latn-ZZ",
      gju: "gju-Arab-PK",
      gkn: "gkn-Latn-ZZ",
      gkp: "gkp-Latn-ZZ",
      gl: "gl-Latn-ES",
      glk: "glk-Arab-IR",
      gmm: "gmm-Latn-ZZ",
      gmv: "gmv-Ethi-ZZ",
      gn: "gn-Latn-PY",
      gnd: "gnd-Latn-ZZ",
      gng: "gng-Latn-ZZ",
      god: "god-Latn-ZZ",
      gof: "gof-Ethi-ZZ",
      goi: "goi-Latn-ZZ",
      gom: "gom-Deva-IN",
      gon: "gon-Telu-IN",
      gor: "gor-Latn-ID",
      gos: "gos-Latn-NL",
      got: "got-Goth-UA",
      grb: "grb-Latn-ZZ",
      grc: "grc-Cprt-CY",
      "grc-Linb": "grc-Linb-GR",
      grt: "grt-Beng-IN",
      grw: "grw-Latn-ZZ",
      gsw: "gsw-Latn-CH",
      gu: "gu-Gujr-IN",
      gub: "gub-Latn-BR",
      guc: "guc-Latn-CO",
      gud: "gud-Latn-ZZ",
      gur: "gur-Latn-GH",
      guw: "guw-Latn-ZZ",
      gux: "gux-Latn-ZZ",
      guz: "guz-Latn-KE",
      gv: "gv-Latn-IM",
      gvf: "gvf-Latn-ZZ",
      gvr: "gvr-Deva-NP",
      gvs: "gvs-Latn-ZZ",
      gwc: "gwc-Arab-ZZ",
      gwi: "gwi-Latn-CA",
      gwt: "gwt-Arab-ZZ",
      gyi: "gyi-Latn-ZZ",
      ha: "ha-Latn-NG",
      "ha-CM": "ha-Arab-CM",
      "ha-SD": "ha-Arab-SD",
      hag: "hag-Latn-ZZ",
      hak: "hak-Hans-CN",
      ham: "ham-Latn-ZZ",
      haw: "haw-Latn-US",
      haz: "haz-Arab-AF",
      hbb: "hbb-Latn-ZZ",
      hdy: "hdy-Ethi-ZZ",
      he: "he-Hebr-IL",
      hhy: "hhy-Latn-ZZ",
      hi: "hi-Deva-IN",
      hia: "hia-Latn-ZZ",
      hif: "hif-Latn-FJ",
      hig: "hig-Latn-ZZ",
      hih: "hih-Latn-ZZ",
      hil: "hil-Latn-PH",
      hla: "hla-Latn-ZZ",
      hlu: "hlu-Hluw-TR",
      hmd: "hmd-Plrd-CN",
      hmt: "hmt-Latn-ZZ",
      hnd: "hnd-Arab-PK",
      hne: "hne-Deva-IN",
      hnj: "hnj-Hmng-LA",
      hnn: "hnn-Latn-PH",
      hno: "hno-Arab-PK",
      ho: "ho-Latn-PG",
      hoc: "hoc-Deva-IN",
      hoj: "hoj-Deva-IN",
      hot: "hot-Latn-ZZ",
      hr: "hr-Latn-HR",
      hsb: "hsb-Latn-DE",
      hsn: "hsn-Hans-CN",
      ht: "ht-Latn-HT",
      hu: "hu-Latn-HU",
      hui: "hui-Latn-ZZ",
      hy: "hy-Armn-AM",
      hz: "hz-Latn-NA",
      ia: "ia-Latn-001",
      ian: "ian-Latn-ZZ",
      iar: "iar-Latn-ZZ",
      iba: "iba-Latn-MY",
      ibb: "ibb-Latn-NG",
      iby: "iby-Latn-ZZ",
      ica: "ica-Latn-ZZ",
      ich: "ich-Latn-ZZ",
      id: "id-Latn-ID",
      idd: "idd-Latn-ZZ",
      idi: "idi-Latn-ZZ",
      idu: "idu-Latn-ZZ",
      ife: "ife-Latn-TG",
      ig: "ig-Latn-NG",
      igb: "igb-Latn-ZZ",
      ige: "ige-Latn-ZZ",
      ii: "ii-Yiii-CN",
      ijj: "ijj-Latn-ZZ",
      ik: "ik-Latn-US",
      ikk: "ikk-Latn-ZZ",
      ikt: "ikt-Latn-CA",
      ikw: "ikw-Latn-ZZ",
      ikx: "ikx-Latn-ZZ",
      ilo: "ilo-Latn-PH",
      imo: "imo-Latn-ZZ",
      in: "in-Latn-ID",
      inh: "inh-Cyrl-RU",
      io: "io-Latn-001",
      iou: "iou-Latn-ZZ",
      iri: "iri-Latn-ZZ",
      is: "is-Latn-IS",
      it: "it-Latn-IT",
      iu: "iu-Cans-CA",
      iw: "iw-Hebr-IL",
      iwm: "iwm-Latn-ZZ",
      iws: "iws-Latn-ZZ",
      izh: "izh-Latn-RU",
      izi: "izi-Latn-ZZ",
      ja: "ja-Jpan-JP",
      jab: "jab-Latn-ZZ",
      jam: "jam-Latn-JM",
      jar: "jar-Latn-ZZ",
      jbo: "jbo-Latn-001",
      jbu: "jbu-Latn-ZZ",
      jen: "jen-Latn-ZZ",
      jgk: "jgk-Latn-ZZ",
      jgo: "jgo-Latn-CM",
      ji: "ji-Hebr-UA",
      jib: "jib-Latn-ZZ",
      jmc: "jmc-Latn-TZ",
      jml: "jml-Deva-NP",
      jra: "jra-Latn-ZZ",
      jut: "jut-Latn-DK",
      jv: "jv-Latn-ID",
      jw: "jw-Latn-ID",
      ka: "ka-Geor-GE",
      kaa: "kaa-Cyrl-UZ",
      kab: "kab-Latn-DZ",
      kac: "kac-Latn-MM",
      kad: "kad-Latn-ZZ",
      kai: "kai-Latn-ZZ",
      kaj: "kaj-Latn-NG",
      kam: "kam-Latn-KE",
      kao: "kao-Latn-ML",
      kbd: "kbd-Cyrl-RU",
      kbm: "kbm-Latn-ZZ",
      kbp: "kbp-Latn-ZZ",
      kbq: "kbq-Latn-ZZ",
      kbx: "kbx-Latn-ZZ",
      kby: "kby-Arab-NE",
      kcg: "kcg-Latn-NG",
      kck: "kck-Latn-ZW",
      kcl: "kcl-Latn-ZZ",
      kct: "kct-Latn-ZZ",
      kde: "kde-Latn-TZ",
      kdh: "kdh-Arab-TG",
      kdl: "kdl-Latn-ZZ",
      kdt: "kdt-Thai-TH",
      kea: "kea-Latn-CV",
      ken: "ken-Latn-CM",
      kez: "kez-Latn-ZZ",
      kfo: "kfo-Latn-CI",
      kfr: "kfr-Deva-IN",
      kfy: "kfy-Deva-IN",
      kg: "kg-Latn-CD",
      kge: "kge-Latn-ID",
      kgf: "kgf-Latn-ZZ",
      kgp: "kgp-Latn-BR",
      kha: "kha-Latn-IN",
      khb: "khb-Talu-CN",
      khn: "khn-Deva-IN",
      khq: "khq-Latn-ML",
      khs: "khs-Latn-ZZ",
      kht: "kht-Mymr-IN",
      khw: "khw-Arab-PK",
      khz: "khz-Latn-ZZ",
      ki: "ki-Latn-KE",
      kij: "kij-Latn-ZZ",
      kiu: "kiu-Latn-TR",
      kiw: "kiw-Latn-ZZ",
      kj: "kj-Latn-NA",
      kjd: "kjd-Latn-ZZ",
      kjg: "kjg-Laoo-LA",
      kjs: "kjs-Latn-ZZ",
      kjy: "kjy-Latn-ZZ",
      kk: "kk-Cyrl-KZ",
      "kk-AF": "kk-Arab-AF",
      "kk-Arab": "kk-Arab-CN",
      "kk-CN": "kk-Arab-CN",
      "kk-IR": "kk-Arab-IR",
      "kk-MN": "kk-Arab-MN",
      kkc: "kkc-Latn-ZZ",
      kkj: "kkj-Latn-CM",
      kl: "kl-Latn-GL",
      kln: "kln-Latn-KE",
      klq: "klq-Latn-ZZ",
      klt: "klt-Latn-ZZ",
      klx: "klx-Latn-ZZ",
      km: "km-Khmr-KH",
      kmb: "kmb-Latn-AO",
      kmh: "kmh-Latn-ZZ",
      kmo: "kmo-Latn-ZZ",
      kms: "kms-Latn-ZZ",
      kmu: "kmu-Latn-ZZ",
      kmw: "kmw-Latn-ZZ",
      kn: "kn-Knda-IN",
      knf: "knf-Latn-GW",
      knp: "knp-Latn-ZZ",
      ko: "ko-Kore-KR",
      koi: "koi-Cyrl-RU",
      kok: "kok-Deva-IN",
      kol: "kol-Latn-ZZ",
      kos: "kos-Latn-FM",
      koz: "koz-Latn-ZZ",
      kpe: "kpe-Latn-LR",
      kpf: "kpf-Latn-ZZ",
      kpo: "kpo-Latn-ZZ",
      kpr: "kpr-Latn-ZZ",
      kpx: "kpx-Latn-ZZ",
      kqb: "kqb-Latn-ZZ",
      kqf: "kqf-Latn-ZZ",
      kqs: "kqs-Latn-ZZ",
      kqy: "kqy-Ethi-ZZ",
      kr: "kr-Latn-ZZ",
      krc: "krc-Cyrl-RU",
      kri: "kri-Latn-SL",
      krj: "krj-Latn-PH",
      krl: "krl-Latn-RU",
      krs: "krs-Latn-ZZ",
      kru: "kru-Deva-IN",
      ks: "ks-Arab-IN",
      ksb: "ksb-Latn-TZ",
      ksd: "ksd-Latn-ZZ",
      ksf: "ksf-Latn-CM",
      ksh: "ksh-Latn-DE",
      ksj: "ksj-Latn-ZZ",
      ksr: "ksr-Latn-ZZ",
      ktb: "ktb-Ethi-ZZ",
      ktm: "ktm-Latn-ZZ",
      kto: "kto-Latn-ZZ",
      ktr: "ktr-Latn-MY",
      ku: "ku-Latn-TR",
      "ku-Arab": "ku-Arab-IQ",
      "ku-LB": "ku-Arab-LB",
      "ku-Yezi": "ku-Yezi-GE",
      kub: "kub-Latn-ZZ",
      kud: "kud-Latn-ZZ",
      kue: "kue-Latn-ZZ",
      kuj: "kuj-Latn-ZZ",
      kum: "kum-Cyrl-RU",
      kun: "kun-Latn-ZZ",
      kup: "kup-Latn-ZZ",
      kus: "kus-Latn-ZZ",
      kv: "kv-Cyrl-RU",
      kvg: "kvg-Latn-ZZ",
      kvr: "kvr-Latn-ID",
      kvx: "kvx-Arab-PK",
      kw: "kw-Latn-GB",
      kwj: "kwj-Latn-ZZ",
      kwo: "kwo-Latn-ZZ",
      kwq: "kwq-Latn-ZZ",
      kxa: "kxa-Latn-ZZ",
      kxc: "kxc-Ethi-ZZ",
      kxe: "kxe-Latn-ZZ",
      kxl: "kxl-Deva-IN",
      kxm: "kxm-Thai-TH",
      kxp: "kxp-Arab-PK",
      kxw: "kxw-Latn-ZZ",
      kxz: "kxz-Latn-ZZ",
      ky: "ky-Cyrl-KG",
      "ky-Arab": "ky-Arab-CN",
      "ky-CN": "ky-Arab-CN",
      "ky-Latn": "ky-Latn-TR",
      "ky-TR": "ky-Latn-TR",
      kye: "kye-Latn-ZZ",
      kyx: "kyx-Latn-ZZ",
      kzh: "kzh-Arab-ZZ",
      kzj: "kzj-Latn-MY",
      kzr: "kzr-Latn-ZZ",
      kzt: "kzt-Latn-MY",
      la: "la-Latn-VA",
      lab: "lab-Lina-GR",
      lad: "lad-Hebr-IL",
      lag: "lag-Latn-TZ",
      lah: "lah-Arab-PK",
      laj: "laj-Latn-UG",
      las: "las-Latn-ZZ",
      lb: "lb-Latn-LU",
      lbe: "lbe-Cyrl-RU",
      lbu: "lbu-Latn-ZZ",
      lbw: "lbw-Latn-ID",
      lcm: "lcm-Latn-ZZ",
      lcp: "lcp-Thai-CN",
      ldb: "ldb-Latn-ZZ",
      led: "led-Latn-ZZ",
      lee: "lee-Latn-ZZ",
      lem: "lem-Latn-ZZ",
      lep: "lep-Lepc-IN",
      leq: "leq-Latn-ZZ",
      leu: "leu-Latn-ZZ",
      lez: "lez-Cyrl-RU",
      lg: "lg-Latn-UG",
      lgg: "lgg-Latn-ZZ",
      li: "li-Latn-NL",
      lia: "lia-Latn-ZZ",
      lid: "lid-Latn-ZZ",
      lif: "lif-Deva-NP",
      "lif-Limb": "lif-Limb-IN",
      lig: "lig-Latn-ZZ",
      lih: "lih-Latn-ZZ",
      lij: "lij-Latn-IT",
      lis: "lis-Lisu-CN",
      ljp: "ljp-Latn-ID",
      lki: "lki-Arab-IR",
      lkt: "lkt-Latn-US",
      lle: "lle-Latn-ZZ",
      lln: "lln-Latn-ZZ",
      lmn: "lmn-Telu-IN",
      lmo: "lmo-Latn-IT",
      lmp: "lmp-Latn-ZZ",
      ln: "ln-Latn-CD",
      lns: "lns-Latn-ZZ",
      lnu: "lnu-Latn-ZZ",
      lo: "lo-Laoo-LA",
      loj: "loj-Latn-ZZ",
      lok: "lok-Latn-ZZ",
      lol: "lol-Latn-CD",
      lor: "lor-Latn-ZZ",
      los: "los-Latn-ZZ",
      loz: "loz-Latn-ZM",
      lrc: "lrc-Arab-IR",
      lt: "lt-Latn-LT",
      ltg: "ltg-Latn-LV",
      lu: "lu-Latn-CD",
      lua: "lua-Latn-CD",
      luo: "luo-Latn-KE",
      luy: "luy-Latn-KE",
      luz: "luz-Arab-IR",
      lv: "lv-Latn-LV",
      lwl: "lwl-Thai-TH",
      lzh: "lzh-Hans-CN",
      lzz: "lzz-Latn-TR",
      mad: "mad-Latn-ID",
      maf: "maf-Latn-CM",
      mag: "mag-Deva-IN",
      mai: "mai-Deva-IN",
      mak: "mak-Latn-ID",
      man: "man-Latn-GM",
      "man-GN": "man-Nkoo-GN",
      "man-Nkoo": "man-Nkoo-GN",
      mas: "mas-Latn-KE",
      maw: "maw-Latn-ZZ",
      maz: "maz-Latn-MX",
      mbh: "mbh-Latn-ZZ",
      mbo: "mbo-Latn-ZZ",
      mbq: "mbq-Latn-ZZ",
      mbu: "mbu-Latn-ZZ",
      mbw: "mbw-Latn-ZZ",
      mci: "mci-Latn-ZZ",
      mcp: "mcp-Latn-ZZ",
      mcq: "mcq-Latn-ZZ",
      mcr: "mcr-Latn-ZZ",
      mcu: "mcu-Latn-ZZ",
      mda: "mda-Latn-ZZ",
      mde: "mde-Arab-ZZ",
      mdf: "mdf-Cyrl-RU",
      mdh: "mdh-Latn-PH",
      mdj: "mdj-Latn-ZZ",
      mdr: "mdr-Latn-ID",
      mdx: "mdx-Ethi-ZZ",
      med: "med-Latn-ZZ",
      mee: "mee-Latn-ZZ",
      mek: "mek-Latn-ZZ",
      men: "men-Latn-SL",
      mer: "mer-Latn-KE",
      met: "met-Latn-ZZ",
      meu: "meu-Latn-ZZ",
      mfa: "mfa-Arab-TH",
      mfe: "mfe-Latn-MU",
      mfn: "mfn-Latn-ZZ",
      mfo: "mfo-Latn-ZZ",
      mfq: "mfq-Latn-ZZ",
      mg: "mg-Latn-MG",
      mgh: "mgh-Latn-MZ",
      mgl: "mgl-Latn-ZZ",
      mgo: "mgo-Latn-CM",
      mgp: "mgp-Deva-NP",
      mgy: "mgy-Latn-TZ",
      mh: "mh-Latn-MH",
      mhi: "mhi-Latn-ZZ",
      mhl: "mhl-Latn-ZZ",
      mi: "mi-Latn-NZ",
      mif: "mif-Latn-ZZ",
      min: "min-Latn-ID",
      miw: "miw-Latn-ZZ",
      mk: "mk-Cyrl-MK",
      mki: "mki-Arab-ZZ",
      mkl: "mkl-Latn-ZZ",
      mkp: "mkp-Latn-ZZ",
      mkw: "mkw-Latn-ZZ",
      ml: "ml-Mlym-IN",
      mle: "mle-Latn-ZZ",
      mlp: "mlp-Latn-ZZ",
      mls: "mls-Latn-SD",
      mmo: "mmo-Latn-ZZ",
      mmu: "mmu-Latn-ZZ",
      mmx: "mmx-Latn-ZZ",
      mn: "mn-Cyrl-MN",
      "mn-CN": "mn-Mong-CN",
      "mn-Mong": "mn-Mong-CN",
      mna: "mna-Latn-ZZ",
      mnf: "mnf-Latn-ZZ",
      mni: "mni-Beng-IN",
      mnw: "mnw-Mymr-MM",
      mo: "mo-Latn-RO",
      moa: "moa-Latn-ZZ",
      moe: "moe-Latn-CA",
      moh: "moh-Latn-CA",
      mos: "mos-Latn-BF",
      mox: "mox-Latn-ZZ",
      mpp: "mpp-Latn-ZZ",
      mps: "mps-Latn-ZZ",
      mpt: "mpt-Latn-ZZ",
      mpx: "mpx-Latn-ZZ",
      mql: "mql-Latn-ZZ",
      mr: "mr-Deva-IN",
      mrd: "mrd-Deva-NP",
      mrj: "mrj-Cyrl-RU",
      mro: "mro-Mroo-BD",
      ms: "ms-Latn-MY",
      "ms-CC": "ms-Arab-CC",
      mt: "mt-Latn-MT",
      mtc: "mtc-Latn-ZZ",
      mtf: "mtf-Latn-ZZ",
      mti: "mti-Latn-ZZ",
      mtr: "mtr-Deva-IN",
      mua: "mua-Latn-CM",
      mur: "mur-Latn-ZZ",
      mus: "mus-Latn-US",
      mva: "mva-Latn-ZZ",
      mvn: "mvn-Latn-ZZ",
      mvy: "mvy-Arab-PK",
      mwk: "mwk-Latn-ML",
      mwr: "mwr-Deva-IN",
      mwv: "mwv-Latn-ID",
      mww: "mww-Hmnp-US",
      mxc: "mxc-Latn-ZW",
      mxm: "mxm-Latn-ZZ",
      my: "my-Mymr-MM",
      myk: "myk-Latn-ZZ",
      mym: "mym-Ethi-ZZ",
      myv: "myv-Cyrl-RU",
      myw: "myw-Latn-ZZ",
      myx: "myx-Latn-UG",
      myz: "myz-Mand-IR",
      mzk: "mzk-Latn-ZZ",
      mzm: "mzm-Latn-ZZ",
      mzn: "mzn-Arab-IR",
      mzp: "mzp-Latn-ZZ",
      mzw: "mzw-Latn-ZZ",
      mzz: "mzz-Latn-ZZ",
      na: "na-Latn-NR",
      nac: "nac-Latn-ZZ",
      naf: "naf-Latn-ZZ",
      nak: "nak-Latn-ZZ",
      nan: "nan-Hans-CN",
      nap: "nap-Latn-IT",
      naq: "naq-Latn-NA",
      nas: "nas-Latn-ZZ",
      nb: "nb-Latn-NO",
      nca: "nca-Latn-ZZ",
      nce: "nce-Latn-ZZ",
      ncf: "ncf-Latn-ZZ",
      nch: "nch-Latn-MX",
      nco: "nco-Latn-ZZ",
      ncu: "ncu-Latn-ZZ",
      nd: "nd-Latn-ZW",
      ndc: "ndc-Latn-MZ",
      nds: "nds-Latn-DE",
      ne: "ne-Deva-NP",
      neb: "neb-Latn-ZZ",
      new: "new-Deva-NP",
      nex: "nex-Latn-ZZ",
      nfr: "nfr-Latn-ZZ",
      ng: "ng-Latn-NA",
      nga: "nga-Latn-ZZ",
      ngb: "ngb-Latn-ZZ",
      ngl: "ngl-Latn-MZ",
      nhb: "nhb-Latn-ZZ",
      nhe: "nhe-Latn-MX",
      nhw: "nhw-Latn-MX",
      nif: "nif-Latn-ZZ",
      nii: "nii-Latn-ZZ",
      nij: "nij-Latn-ID",
      nin: "nin-Latn-ZZ",
      niu: "niu-Latn-NU",
      niy: "niy-Latn-ZZ",
      niz: "niz-Latn-ZZ",
      njo: "njo-Latn-IN",
      nkg: "nkg-Latn-ZZ",
      nko: "nko-Latn-ZZ",
      nl: "nl-Latn-NL",
      nmg: "nmg-Latn-CM",
      nmz: "nmz-Latn-ZZ",
      nn: "nn-Latn-NO",
      nnf: "nnf-Latn-ZZ",
      nnh: "nnh-Latn-CM",
      nnk: "nnk-Latn-ZZ",
      nnm: "nnm-Latn-ZZ",
      nnp: "nnp-Wcho-IN",
      no: "no-Latn-NO",
      nod: "nod-Lana-TH",
      noe: "noe-Deva-IN",
      non: "non-Runr-SE",
      nop: "nop-Latn-ZZ",
      nou: "nou-Latn-ZZ",
      nqo: "nqo-Nkoo-GN",
      nr: "nr-Latn-ZA",
      nrb: "nrb-Latn-ZZ",
      nsk: "nsk-Cans-CA",
      nsn: "nsn-Latn-ZZ",
      nso: "nso-Latn-ZA",
      nss: "nss-Latn-ZZ",
      ntm: "ntm-Latn-ZZ",
      ntr: "ntr-Latn-ZZ",
      nui: "nui-Latn-ZZ",
      nup: "nup-Latn-ZZ",
      nus: "nus-Latn-SS",
      nuv: "nuv-Latn-ZZ",
      nux: "nux-Latn-ZZ",
      nv: "nv-Latn-US",
      nwb: "nwb-Latn-ZZ",
      nxq: "nxq-Latn-CN",
      nxr: "nxr-Latn-ZZ",
      ny: "ny-Latn-MW",
      nym: "nym-Latn-TZ",
      nyn: "nyn-Latn-UG",
      nzi: "nzi-Latn-GH",
      oc: "oc-Latn-FR",
      ogc: "ogc-Latn-ZZ",
      okr: "okr-Latn-ZZ",
      okv: "okv-Latn-ZZ",
      om: "om-Latn-ET",
      ong: "ong-Latn-ZZ",
      onn: "onn-Latn-ZZ",
      ons: "ons-Latn-ZZ",
      opm: "opm-Latn-ZZ",
      or: "or-Orya-IN",
      oro: "oro-Latn-ZZ",
      oru: "oru-Arab-ZZ",
      os: "os-Cyrl-GE",
      osa: "osa-Osge-US",
      ota: "ota-Arab-ZZ",
      otk: "otk-Orkh-MN",
      ozm: "ozm-Latn-ZZ",
      pa: "pa-Guru-IN",
      "pa-Arab": "pa-Arab-PK",
      "pa-PK": "pa-Arab-PK",
      pag: "pag-Latn-PH",
      pal: "pal-Phli-IR",
      "pal-Phlp": "pal-Phlp-CN",
      pam: "pam-Latn-PH",
      pap: "pap-Latn-AW",
      pau: "pau-Latn-PW",
      pbi: "pbi-Latn-ZZ",
      pcd: "pcd-Latn-FR",
      pcm: "pcm-Latn-NG",
      pdc: "pdc-Latn-US",
      pdt: "pdt-Latn-CA",
      ped: "ped-Latn-ZZ",
      peo: "peo-Xpeo-IR",
      pex: "pex-Latn-ZZ",
      pfl: "pfl-Latn-DE",
      phl: "phl-Arab-ZZ",
      phn: "phn-Phnx-LB",
      pil: "pil-Latn-ZZ",
      pip: "pip-Latn-ZZ",
      pka: "pka-Brah-IN",
      pko: "pko-Latn-KE",
      pl: "pl-Latn-PL",
      pla: "pla-Latn-ZZ",
      pms: "pms-Latn-IT",
      png: "png-Latn-ZZ",
      pnn: "pnn-Latn-ZZ",
      pnt: "pnt-Grek-GR",
      pon: "pon-Latn-FM",
      ppa: "ppa-Deva-IN",
      ppo: "ppo-Latn-ZZ",
      pra: "pra-Khar-PK",
      prd: "prd-Arab-IR",
      prg: "prg-Latn-001",
      ps: "ps-Arab-AF",
      pss: "pss-Latn-ZZ",
      pt: "pt-Latn-BR",
      ptp: "ptp-Latn-ZZ",
      puu: "puu-Latn-GA",
      pwa: "pwa-Latn-ZZ",
      qu: "qu-Latn-PE",
      quc: "quc-Latn-GT",
      qug: "qug-Latn-EC",
      rai: "rai-Latn-ZZ",
      raj: "raj-Deva-IN",
      rao: "rao-Latn-ZZ",
      rcf: "rcf-Latn-RE",
      rej: "rej-Latn-ID",
      rel: "rel-Latn-ZZ",
      res: "res-Latn-ZZ",
      rgn: "rgn-Latn-IT",
      rhg: "rhg-Arab-MM",
      ria: "ria-Latn-IN",
      rif: "rif-Tfng-MA",
      "rif-NL": "rif-Latn-NL",
      rjs: "rjs-Deva-NP",
      rkt: "rkt-Beng-BD",
      rm: "rm-Latn-CH",
      rmf: "rmf-Latn-FI",
      rmo: "rmo-Latn-CH",
      rmt: "rmt-Arab-IR",
      rmu: "rmu-Latn-SE",
      rn: "rn-Latn-BI",
      rna: "rna-Latn-ZZ",
      rng: "rng-Latn-MZ",
      ro: "ro-Latn-RO",
      rob: "rob-Latn-ID",
      rof: "rof-Latn-TZ",
      roo: "roo-Latn-ZZ",
      rro: "rro-Latn-ZZ",
      rtm: "rtm-Latn-FJ",
      ru: "ru-Cyrl-RU",
      rue: "rue-Cyrl-UA",
      rug: "rug-Latn-SB",
      rw: "rw-Latn-RW",
      rwk: "rwk-Latn-TZ",
      rwo: "rwo-Latn-ZZ",
      ryu: "ryu-Kana-JP",
      sa: "sa-Deva-IN",
      saf: "saf-Latn-GH",
      sah: "sah-Cyrl-RU",
      saq: "saq-Latn-KE",
      sas: "sas-Latn-ID",
      sat: "sat-Olck-IN",
      sav: "sav-Latn-SN",
      saz: "saz-Saur-IN",
      sba: "sba-Latn-ZZ",
      sbe: "sbe-Latn-ZZ",
      sbp: "sbp-Latn-TZ",
      sc: "sc-Latn-IT",
      sck: "sck-Deva-IN",
      scl: "scl-Arab-ZZ",
      scn: "scn-Latn-IT",
      sco: "sco-Latn-GB",
      scs: "scs-Latn-CA",
      sd: "sd-Arab-PK",
      "sd-Deva": "sd-Deva-IN",
      "sd-Khoj": "sd-Khoj-IN",
      "sd-Sind": "sd-Sind-IN",
      sdc: "sdc-Latn-IT",
      sdh: "sdh-Arab-IR",
      se: "se-Latn-NO",
      sef: "sef-Latn-CI",
      seh: "seh-Latn-MZ",
      sei: "sei-Latn-MX",
      ses: "ses-Latn-ML",
      sg: "sg-Latn-CF",
      sga: "sga-Ogam-IE",
      sgs: "sgs-Latn-LT",
      sgw: "sgw-Ethi-ZZ",
      sgz: "sgz-Latn-ZZ",
      shi: "shi-Tfng-MA",
      shk: "shk-Latn-ZZ",
      shn: "shn-Mymr-MM",
      shu: "shu-Arab-ZZ",
      si: "si-Sinh-LK",
      sid: "sid-Latn-ET",
      sig: "sig-Latn-ZZ",
      sil: "sil-Latn-ZZ",
      sim: "sim-Latn-ZZ",
      sjr: "sjr-Latn-ZZ",
      sk: "sk-Latn-SK",
      skc: "skc-Latn-ZZ",
      skr: "skr-Arab-PK",
      sks: "sks-Latn-ZZ",
      sl: "sl-Latn-SI",
      sld: "sld-Latn-ZZ",
      sli: "sli-Latn-PL",
      sll: "sll-Latn-ZZ",
      sly: "sly-Latn-ID",
      sm: "sm-Latn-WS",
      sma: "sma-Latn-SE",
      smj: "smj-Latn-SE",
      smn: "smn-Latn-FI",
      smp: "smp-Samr-IL",
      smq: "smq-Latn-ZZ",
      sms: "sms-Latn-FI",
      sn: "sn-Latn-ZW",
      snc: "snc-Latn-ZZ",
      snk: "snk-Latn-ML",
      snp: "snp-Latn-ZZ",
      snx: "snx-Latn-ZZ",
      sny: "sny-Latn-ZZ",
      so: "so-Latn-SO",
      sog: "sog-Sogd-UZ",
      sok: "sok-Latn-ZZ",
      soq: "soq-Latn-ZZ",
      sou: "sou-Thai-TH",
      soy: "soy-Latn-ZZ",
      spd: "spd-Latn-ZZ",
      spl: "spl-Latn-ZZ",
      sps: "sps-Latn-ZZ",
      sq: "sq-Latn-AL",
      sr: "sr-Cyrl-RS",
      "sr-ME": "sr-Latn-ME",
      "sr-RO": "sr-Latn-RO",
      "sr-RU": "sr-Latn-RU",
      "sr-TR": "sr-Latn-TR",
      srb: "srb-Sora-IN",
      srn: "srn-Latn-SR",
      srr: "srr-Latn-SN",
      srx: "srx-Deva-IN",
      ss: "ss-Latn-ZA",
      ssd: "ssd-Latn-ZZ",
      ssg: "ssg-Latn-ZZ",
      ssy: "ssy-Latn-ER",
      st: "st-Latn-ZA",
      stk: "stk-Latn-ZZ",
      stq: "stq-Latn-DE",
      su: "su-Latn-ID",
      sua: "sua-Latn-ZZ",
      sue: "sue-Latn-ZZ",
      suk: "suk-Latn-TZ",
      sur: "sur-Latn-ZZ",
      sus: "sus-Latn-GN",
      sv: "sv-Latn-SE",
      sw: "sw-Latn-TZ",
      swb: "swb-Arab-YT",
      swc: "swc-Latn-CD",
      swg: "swg-Latn-DE",
      swp: "swp-Latn-ZZ",
      swv: "swv-Deva-IN",
      sxn: "sxn-Latn-ID",
      sxw: "sxw-Latn-ZZ",
      syl: "syl-Beng-BD",
      syr: "syr-Syrc-IQ",
      szl: "szl-Latn-PL",
      ta: "ta-Taml-IN",
      taj: "taj-Deva-NP",
      tal: "tal-Latn-ZZ",
      tan: "tan-Latn-ZZ",
      taq: "taq-Latn-ZZ",
      tbc: "tbc-Latn-ZZ",
      tbd: "tbd-Latn-ZZ",
      tbf: "tbf-Latn-ZZ",
      tbg: "tbg-Latn-ZZ",
      tbo: "tbo-Latn-ZZ",
      tbw: "tbw-Latn-PH",
      tbz: "tbz-Latn-ZZ",
      tci: "tci-Latn-ZZ",
      tcy: "tcy-Knda-IN",
      tdd: "tdd-Tale-CN",
      tdg: "tdg-Deva-NP",
      tdh: "tdh-Deva-NP",
      tdu: "tdu-Latn-MY",
      te: "te-Telu-IN",
      ted: "ted-Latn-ZZ",
      tem: "tem-Latn-SL",
      teo: "teo-Latn-UG",
      tet: "tet-Latn-TL",
      tfi: "tfi-Latn-ZZ",
      tg: "tg-Cyrl-TJ",
      "tg-Arab": "tg-Arab-PK",
      "tg-PK": "tg-Arab-PK",
      tgc: "tgc-Latn-ZZ",
      tgo: "tgo-Latn-ZZ",
      tgu: "tgu-Latn-ZZ",
      th: "th-Thai-TH",
      thl: "thl-Deva-NP",
      thq: "thq-Deva-NP",
      thr: "thr-Deva-NP",
      ti: "ti-Ethi-ET",
      tif: "tif-Latn-ZZ",
      tig: "tig-Ethi-ER",
      tik: "tik-Latn-ZZ",
      tim: "tim-Latn-ZZ",
      tio: "tio-Latn-ZZ",
      tiv: "tiv-Latn-NG",
      tk: "tk-Latn-TM",
      tkl: "tkl-Latn-TK",
      tkr: "tkr-Latn-AZ",
      tkt: "tkt-Deva-NP",
      tl: "tl-Latn-PH",
      tlf: "tlf-Latn-ZZ",
      tlx: "tlx-Latn-ZZ",
      tly: "tly-Latn-AZ",
      tmh: "tmh-Latn-NE",
      tmy: "tmy-Latn-ZZ",
      tn: "tn-Latn-ZA",
      tnh: "tnh-Latn-ZZ",
      to: "to-Latn-TO",
      tof: "tof-Latn-ZZ",
      tog: "tog-Latn-MW",
      toq: "toq-Latn-ZZ",
      tpi: "tpi-Latn-PG",
      tpm: "tpm-Latn-ZZ",
      tpz: "tpz-Latn-ZZ",
      tqo: "tqo-Latn-ZZ",
      tr: "tr-Latn-TR",
      tru: "tru-Latn-TR",
      trv: "trv-Latn-TW",
      trw: "trw-Arab-PK",
      ts: "ts-Latn-ZA",
      tsd: "tsd-Grek-GR",
      tsf: "tsf-Deva-NP",
      tsg: "tsg-Latn-PH",
      tsj: "tsj-Tibt-BT",
      tsw: "tsw-Latn-ZZ",
      tt: "tt-Cyrl-RU",
      ttd: "ttd-Latn-ZZ",
      tte: "tte-Latn-ZZ",
      ttj: "ttj-Latn-UG",
      ttr: "ttr-Latn-ZZ",
      tts: "tts-Thai-TH",
      ttt: "ttt-Latn-AZ",
      tuh: "tuh-Latn-ZZ",
      tul: "tul-Latn-ZZ",
      tum: "tum-Latn-MW",
      tuq: "tuq-Latn-ZZ",
      tvd: "tvd-Latn-ZZ",
      tvl: "tvl-Latn-TV",
      tvu: "tvu-Latn-ZZ",
      twh: "twh-Latn-ZZ",
      twq: "twq-Latn-NE",
      txg: "txg-Tang-CN",
      ty: "ty-Latn-PF",
      tya: "tya-Latn-ZZ",
      tyv: "tyv-Cyrl-RU",
      tzm: "tzm-Latn-MA",
      ubu: "ubu-Latn-ZZ",
      udi: "udi-Aghb-RU",
      udm: "udm-Cyrl-RU",
      ug: "ug-Arab-CN",
      "ug-Cyrl": "ug-Cyrl-KZ",
      "ug-KZ": "ug-Cyrl-KZ",
      "ug-MN": "ug-Cyrl-MN",
      uga: "uga-Ugar-SY",
      uk: "uk-Cyrl-UA",
      uli: "uli-Latn-FM",
      umb: "umb-Latn-AO",
      und: "en-Latn-US",
      "und-002": "en-Latn-NG",
      "und-003": "en-Latn-US",
      "und-005": "pt-Latn-BR",
      "und-009": "en-Latn-AU",
      "und-011": "en-Latn-NG",
      "und-013": "es-Latn-MX",
      "und-014": "sw-Latn-TZ",
      "und-015": "ar-Arab-EG",
      "und-017": "sw-Latn-CD",
      "und-018": "en-Latn-ZA",
      "und-019": "en-Latn-US",
      "und-021": "en-Latn-US",
      "und-029": "es-Latn-CU",
      "und-030": "zh-Hans-CN",
      "und-034": "hi-Deva-IN",
      "und-035": "id-Latn-ID",
      "und-039": "it-Latn-IT",
      "und-053": "en-Latn-AU",
      "und-054": "en-Latn-PG",
      "und-057": "en-Latn-GU",
      "und-061": "sm-Latn-WS",
      "und-142": "zh-Hans-CN",
      "und-143": "uz-Latn-UZ",
      "und-145": "ar-Arab-SA",
      "und-150": "ru-Cyrl-RU",
      "und-151": "ru-Cyrl-RU",
      "und-154": "en-Latn-GB",
      "und-155": "de-Latn-DE",
      "und-202": "en-Latn-NG",
      "und-419": "es-Latn-419",
      "und-AD": "ca-Latn-AD",
      "und-Adlm": "ff-Adlm-GN",
      "und-AE": "ar-Arab-AE",
      "und-AF": "fa-Arab-AF",
      "und-Aghb": "udi-Aghb-RU",
      "und-Ahom": "aho-Ahom-IN",
      "und-AL": "sq-Latn-AL",
      "und-AM": "hy-Armn-AM",
      "und-AO": "pt-Latn-AO",
      "und-AQ": "und-Latn-AQ",
      "und-AR": "es-Latn-AR",
      "und-Arab": "ar-Arab-EG",
      "und-Arab-CC": "ms-Arab-CC",
      "und-Arab-CN": "ug-Arab-CN",
      "und-Arab-GB": "ks-Arab-GB",
      "und-Arab-ID": "ms-Arab-ID",
      "und-Arab-IN": "ur-Arab-IN",
      "und-Arab-KH": "cja-Arab-KH",
      "und-Arab-MM": "rhg-Arab-MM",
      "und-Arab-MN": "kk-Arab-MN",
      "und-Arab-MU": "ur-Arab-MU",
      "und-Arab-NG": "ha-Arab-NG",
      "und-Arab-PK": "ur-Arab-PK",
      "und-Arab-TG": "apd-Arab-TG",
      "und-Arab-TH": "mfa-Arab-TH",
      "und-Arab-TJ": "fa-Arab-TJ",
      "und-Arab-TR": "az-Arab-TR",
      "und-Arab-YT": "swb-Arab-YT",
      "und-Armi": "arc-Armi-IR",
      "und-Armn": "hy-Armn-AM",
      "und-AS": "sm-Latn-AS",
      "und-AT": "de-Latn-AT",
      "und-Avst": "ae-Avst-IR",
      "und-AW": "nl-Latn-AW",
      "und-AX": "sv-Latn-AX",
      "und-AZ": "az-Latn-AZ",
      "und-BA": "bs-Latn-BA",
      "und-Bali": "ban-Bali-ID",
      "und-Bamu": "bax-Bamu-CM",
      "und-Bass": "bsq-Bass-LR",
      "und-Batk": "bbc-Batk-ID",
      "und-BD": "bn-Beng-BD",
      "und-BE": "nl-Latn-BE",
      "und-Beng": "bn-Beng-BD",
      "und-BF": "fr-Latn-BF",
      "und-BG": "bg-Cyrl-BG",
      "und-BH": "ar-Arab-BH",
      "und-Bhks": "sa-Bhks-IN",
      "und-BI": "rn-Latn-BI",
      "und-BJ": "fr-Latn-BJ",
      "und-BL": "fr-Latn-BL",
      "und-BN": "ms-Latn-BN",
      "und-BO": "es-Latn-BO",
      "und-Bopo": "zh-Bopo-TW",
      "und-BQ": "pap-Latn-BQ",
      "und-BR": "pt-Latn-BR",
      "und-Brah": "pka-Brah-IN",
      "und-Brai": "fr-Brai-FR",
      "und-BT": "dz-Tibt-BT",
      "und-Bugi": "bug-Bugi-ID",
      "und-Buhd": "bku-Buhd-PH",
      "und-BV": "und-Latn-BV",
      "und-BY": "be-Cyrl-BY",
      "und-Cakm": "ccp-Cakm-BD",
      "und-Cans": "cr-Cans-CA",
      "und-Cari": "xcr-Cari-TR",
      "und-CD": "sw-Latn-CD",
      "und-CF": "fr-Latn-CF",
      "und-CG": "fr-Latn-CG",
      "und-CH": "de-Latn-CH",
      "und-Cham": "cjm-Cham-VN",
      "und-Cher": "chr-Cher-US",
      "und-Chrs": "xco-Chrs-UZ",
      "und-CI": "fr-Latn-CI",
      "und-CL": "es-Latn-CL",
      "und-CM": "fr-Latn-CM",
      "und-CN": "zh-Hans-CN",
      "und-CO": "es-Latn-CO",
      "und-Copt": "cop-Copt-EG",
      "und-CP": "und-Latn-CP",
      "und-Cprt": "grc-Cprt-CY",
      "und-CR": "es-Latn-CR",
      "und-CU": "es-Latn-CU",
      "und-CV": "pt-Latn-CV",
      "und-CW": "pap-Latn-CW",
      "und-CY": "el-Grek-CY",
      "und-Cyrl": "ru-Cyrl-RU",
      "und-Cyrl-AL": "mk-Cyrl-AL",
      "und-Cyrl-BA": "sr-Cyrl-BA",
      "und-Cyrl-GE": "os-Cyrl-GE",
      "und-Cyrl-GR": "mk-Cyrl-GR",
      "und-Cyrl-MD": "uk-Cyrl-MD",
      "und-Cyrl-RO": "bg-Cyrl-RO",
      "und-Cyrl-SK": "uk-Cyrl-SK",
      "und-Cyrl-TR": "kbd-Cyrl-TR",
      "und-Cyrl-XK": "sr-Cyrl-XK",
      "und-CZ": "cs-Latn-CZ",
      "und-DE": "de-Latn-DE",
      "und-Deva": "hi-Deva-IN",
      "und-Deva-BT": "ne-Deva-BT",
      "und-Deva-FJ": "hif-Deva-FJ",
      "und-Deva-MU": "bho-Deva-MU",
      "und-Deva-PK": "btv-Deva-PK",
      "und-Diak": "dv-Diak-MV",
      "und-DJ": "aa-Latn-DJ",
      "und-DK": "da-Latn-DK",
      "und-DO": "es-Latn-DO",
      "und-Dogr": "doi-Dogr-IN",
      "und-Dupl": "fr-Dupl-FR",
      "und-DZ": "ar-Arab-DZ",
      "und-EA": "es-Latn-EA",
      "und-EC": "es-Latn-EC",
      "und-EE": "et-Latn-EE",
      "und-EG": "ar-Arab-EG",
      "und-Egyp": "egy-Egyp-EG",
      "und-EH": "ar-Arab-EH",
      "und-Elba": "sq-Elba-AL",
      "und-Elym": "arc-Elym-IR",
      "und-ER": "ti-Ethi-ER",
      "und-ES": "es-Latn-ES",
      "und-ET": "am-Ethi-ET",
      "und-Ethi": "am-Ethi-ET",
      "und-EU": "en-Latn-IE",
      "und-EZ": "de-Latn-EZ",
      "und-FI": "fi-Latn-FI",
      "und-FO": "fo-Latn-FO",
      "und-FR": "fr-Latn-FR",
      "und-GA": "fr-Latn-GA",
      "und-GE": "ka-Geor-GE",
      "und-Geor": "ka-Geor-GE",
      "und-GF": "fr-Latn-GF",
      "und-GH": "ak-Latn-GH",
      "und-GL": "kl-Latn-GL",
      "und-Glag": "cu-Glag-BG",
      "und-GN": "fr-Latn-GN",
      "und-Gong": "wsg-Gong-IN",
      "und-Gonm": "esg-Gonm-IN",
      "und-Goth": "got-Goth-UA",
      "und-GP": "fr-Latn-GP",
      "und-GQ": "es-Latn-GQ",
      "und-GR": "el-Grek-GR",
      "und-Gran": "sa-Gran-IN",
      "und-Grek": "el-Grek-GR",
      "und-Grek-TR": "bgx-Grek-TR",
      "und-GS": "und-Latn-GS",
      "und-GT": "es-Latn-GT",
      "und-Gujr": "gu-Gujr-IN",
      "und-Guru": "pa-Guru-IN",
      "und-GW": "pt-Latn-GW",
      "und-Hanb": "zh-Hanb-TW",
      "und-Hang": "ko-Hang-KR",
      "und-Hani": "zh-Hani-CN",
      "und-Hano": "hnn-Hano-PH",
      "und-Hans": "zh-Hans-CN",
      "und-Hant": "zh-Hant-TW",
      "und-Hebr": "he-Hebr-IL",
      "und-Hebr-CA": "yi-Hebr-CA",
      "und-Hebr-GB": "yi-Hebr-GB",
      "und-Hebr-SE": "yi-Hebr-SE",
      "und-Hebr-UA": "yi-Hebr-UA",
      "und-Hebr-US": "yi-Hebr-US",
      "und-Hira": "ja-Hira-JP",
      "und-HK": "zh-Hant-HK",
      "und-Hluw": "hlu-Hluw-TR",
      "und-HM": "und-Latn-HM",
      "und-Hmng": "hnj-Hmng-LA",
      "und-Hmnp": "mww-Hmnp-US",
      "und-HN": "es-Latn-HN",
      "und-HR": "hr-Latn-HR",
      "und-HT": "ht-Latn-HT",
      "und-HU": "hu-Latn-HU",
      "und-Hung": "hu-Hung-HU",
      "und-IC": "es-Latn-IC",
      "und-ID": "id-Latn-ID",
      "und-IL": "he-Hebr-IL",
      "und-IN": "hi-Deva-IN",
      "und-IQ": "ar-Arab-IQ",
      "und-IR": "fa-Arab-IR",
      "und-IS": "is-Latn-IS",
      "und-IT": "it-Latn-IT",
      "und-Ital": "ett-Ital-IT",
      "und-Jamo": "ko-Jamo-KR",
      "und-Java": "jv-Java-ID",
      "und-JO": "ar-Arab-JO",
      "und-JP": "ja-Jpan-JP",
      "und-Jpan": "ja-Jpan-JP",
      "und-Kali": "eky-Kali-MM",
      "und-Kana": "ja-Kana-JP",
      "und-KE": "sw-Latn-KE",
      "und-KG": "ky-Cyrl-KG",
      "und-KH": "km-Khmr-KH",
      "und-Khar": "pra-Khar-PK",
      "und-Khmr": "km-Khmr-KH",
      "und-Khoj": "sd-Khoj-IN",
      "und-Kits": "zkt-Kits-CN",
      "und-KM": "ar-Arab-KM",
      "und-Knda": "kn-Knda-IN",
      "und-Kore": "ko-Kore-KR",
      "und-KP": "ko-Kore-KP",
      "und-KR": "ko-Kore-KR",
      "und-Kthi": "bho-Kthi-IN",
      "und-KW": "ar-Arab-KW",
      "und-KZ": "ru-Cyrl-KZ",
      "und-LA": "lo-Laoo-LA",
      "und-Lana": "nod-Lana-TH",
      "und-Laoo": "lo-Laoo-LA",
      "und-Latn-AF": "tk-Latn-AF",
      "und-Latn-AM": "ku-Latn-AM",
      "und-Latn-CN": "za-Latn-CN",
      "und-Latn-CY": "tr-Latn-CY",
      "und-Latn-DZ": "fr-Latn-DZ",
      "und-Latn-ET": "en-Latn-ET",
      "und-Latn-GE": "ku-Latn-GE",
      "und-Latn-IR": "tk-Latn-IR",
      "und-Latn-KM": "fr-Latn-KM",
      "und-Latn-MA": "fr-Latn-MA",
      "und-Latn-MK": "sq-Latn-MK",
      "und-Latn-MM": "kac-Latn-MM",
      "und-Latn-MO": "pt-Latn-MO",
      "und-Latn-MR": "fr-Latn-MR",
      "und-Latn-RU": "krl-Latn-RU",
      "und-Latn-SY": "fr-Latn-SY",
      "und-Latn-TN": "fr-Latn-TN",
      "und-Latn-TW": "trv-Latn-TW",
      "und-Latn-UA": "pl-Latn-UA",
      "und-LB": "ar-Arab-LB",
      "und-Lepc": "lep-Lepc-IN",
      "und-LI": "de-Latn-LI",
      "und-Limb": "lif-Limb-IN",
      "und-Lina": "lab-Lina-GR",
      "und-Linb": "grc-Linb-GR",
      "und-Lisu": "lis-Lisu-CN",
      "und-LK": "si-Sinh-LK",
      "und-LS": "st-Latn-LS",
      "und-LT": "lt-Latn-LT",
      "und-LU": "fr-Latn-LU",
      "und-LV": "lv-Latn-LV",
      "und-LY": "ar-Arab-LY",
      "und-Lyci": "xlc-Lyci-TR",
      "und-Lydi": "xld-Lydi-TR",
      "und-MA": "ar-Arab-MA",
      "und-Mahj": "hi-Mahj-IN",
      "und-Maka": "mak-Maka-ID",
      "und-Mand": "myz-Mand-IR",
      "und-Mani": "xmn-Mani-CN",
      "und-Marc": "bo-Marc-CN",
      "und-MC": "fr-Latn-MC",
      "und-MD": "ro-Latn-MD",
      "und-ME": "sr-Latn-ME",
      "und-Medf": "dmf-Medf-NG",
      "und-Mend": "men-Mend-SL",
      "und-Merc": "xmr-Merc-SD",
      "und-Mero": "xmr-Mero-SD",
      "und-MF": "fr-Latn-MF",
      "und-MG": "mg-Latn-MG",
      "und-MK": "mk-Cyrl-MK",
      "und-ML": "bm-Latn-ML",
      "und-Mlym": "ml-Mlym-IN",
      "und-MM": "my-Mymr-MM",
      "und-MN": "mn-Cyrl-MN",
      "und-MO": "zh-Hant-MO",
      "und-Modi": "mr-Modi-IN",
      "und-Mong": "mn-Mong-CN",
      "und-MQ": "fr-Latn-MQ",
      "und-MR": "ar-Arab-MR",
      "und-Mroo": "mro-Mroo-BD",
      "und-MT": "mt-Latn-MT",
      "und-Mtei": "mni-Mtei-IN",
      "und-MU": "mfe-Latn-MU",
      "und-Mult": "skr-Mult-PK",
      "und-MV": "dv-Thaa-MV",
      "und-MX": "es-Latn-MX",
      "und-MY": "ms-Latn-MY",
      "und-Mymr": "my-Mymr-MM",
      "und-Mymr-IN": "kht-Mymr-IN",
      "und-Mymr-TH": "mnw-Mymr-TH",
      "und-MZ": "pt-Latn-MZ",
      "und-NA": "af-Latn-NA",
      "und-Nand": "sa-Nand-IN",
      "und-Narb": "xna-Narb-SA",
      "und-Nbat": "arc-Nbat-JO",
      "und-NC": "fr-Latn-NC",
      "und-NE": "ha-Latn-NE",
      "und-Newa": "new-Newa-NP",
      "und-NI": "es-Latn-NI",
      "und-Nkoo": "man-Nkoo-GN",
      "und-NL": "nl-Latn-NL",
      "und-NO": "nb-Latn-NO",
      "und-NP": "ne-Deva-NP",
      "und-Nshu": "zhx-Nshu-CN",
      "und-Ogam": "sga-Ogam-IE",
      "und-Olck": "sat-Olck-IN",
      "und-OM": "ar-Arab-OM",
      "und-Orkh": "otk-Orkh-MN",
      "und-Orya": "or-Orya-IN",
      "und-Osge": "osa-Osge-US",
      "und-Osma": "so-Osma-SO",
      "und-PA": "es-Latn-PA",
      "und-Palm": "arc-Palm-SY",
      "und-Pauc": "ctd-Pauc-MM",
      "und-PE": "es-Latn-PE",
      "und-Perm": "kv-Perm-RU",
      "und-PF": "fr-Latn-PF",
      "und-PG": "tpi-Latn-PG",
      "und-PH": "fil-Latn-PH",
      "und-Phag": "lzh-Phag-CN",
      "und-Phli": "pal-Phli-IR",
      "und-Phlp": "pal-Phlp-CN",
      "und-Phnx": "phn-Phnx-LB",
      "und-PK": "ur-Arab-PK",
      "und-PL": "pl-Latn-PL",
      "und-Plrd": "hmd-Plrd-CN",
      "und-PM": "fr-Latn-PM",
      "und-PR": "es-Latn-PR",
      "und-Prti": "xpr-Prti-IR",
      "und-PS": "ar-Arab-PS",
      "und-PT": "pt-Latn-PT",
      "und-PW": "pau-Latn-PW",
      "und-PY": "gn-Latn-PY",
      "und-QA": "ar-Arab-QA",
      "und-QO": "en-Latn-DG",
      "und-RE": "fr-Latn-RE",
      "und-Rjng": "rej-Rjng-ID",
      "und-RO": "ro-Latn-RO",
      "und-Rohg": "rhg-Rohg-MM",
      "und-RS": "sr-Cyrl-RS",
      "und-RU": "ru-Cyrl-RU",
      "und-Runr": "non-Runr-SE",
      "und-RW": "rw-Latn-RW",
      "und-SA": "ar-Arab-SA",
      "und-Samr": "smp-Samr-IL",
      "und-Sarb": "xsa-Sarb-YE",
      "und-Saur": "saz-Saur-IN",
      "und-SC": "fr-Latn-SC",
      "und-SD": "ar-Arab-SD",
      "und-SE": "sv-Latn-SE",
      "und-Sgnw": "ase-Sgnw-US",
      "und-Shaw": "en-Shaw-GB",
      "und-Shrd": "sa-Shrd-IN",
      "und-SI": "sl-Latn-SI",
      "und-Sidd": "sa-Sidd-IN",
      "und-Sind": "sd-Sind-IN",
      "und-Sinh": "si-Sinh-LK",
      "und-SJ": "nb-Latn-SJ",
      "und-SK": "sk-Latn-SK",
      "und-SM": "it-Latn-SM",
      "und-SN": "fr-Latn-SN",
      "und-SO": "so-Latn-SO",
      "und-Sogd": "sog-Sogd-UZ",
      "und-Sogo": "sog-Sogo-UZ",
      "und-Sora": "srb-Sora-IN",
      "und-Soyo": "cmg-Soyo-MN",
      "und-SR": "nl-Latn-SR",
      "und-ST": "pt-Latn-ST",
      "und-Sund": "su-Sund-ID",
      "und-SV": "es-Latn-SV",
      "und-SY": "ar-Arab-SY",
      "und-Sylo": "syl-Sylo-BD",
      "und-Syrc": "syr-Syrc-IQ",
      "und-Tagb": "tbw-Tagb-PH",
      "und-Takr": "doi-Takr-IN",
      "und-Tale": "tdd-Tale-CN",
      "und-Talu": "khb-Talu-CN",
      "und-Taml": "ta-Taml-IN",
      "und-Tang": "txg-Tang-CN",
      "und-Tavt": "blt-Tavt-VN",
      "und-TD": "fr-Latn-TD",
      "und-Telu": "te-Telu-IN",
      "und-TF": "fr-Latn-TF",
      "und-Tfng": "zgh-Tfng-MA",
      "und-TG": "fr-Latn-TG",
      "und-Tglg": "fil-Tglg-PH",
      "und-TH": "th-Thai-TH",
      "und-Thaa": "dv-Thaa-MV",
      "und-Thai": "th-Thai-TH",
      "und-Thai-CN": "lcp-Thai-CN",
      "und-Thai-KH": "kdt-Thai-KH",
      "und-Thai-LA": "kdt-Thai-LA",
      "und-Tibt": "bo-Tibt-CN",
      "und-Tirh": "mai-Tirh-IN",
      "und-TJ": "tg-Cyrl-TJ",
      "und-TK": "tkl-Latn-TK",
      "und-TL": "pt-Latn-TL",
      "und-TM": "tk-Latn-TM",
      "und-TN": "ar-Arab-TN",
      "und-TO": "to-Latn-TO",
      "und-TR": "tr-Latn-TR",
      "und-TV": "tvl-Latn-TV",
      "und-TW": "zh-Hant-TW",
      "und-TZ": "sw-Latn-TZ",
      "und-UA": "uk-Cyrl-UA",
      "und-UG": "sw-Latn-UG",
      "und-Ugar": "uga-Ugar-SY",
      "und-UY": "es-Latn-UY",
      "und-UZ": "uz-Latn-UZ",
      "und-VA": "it-Latn-VA",
      "und-Vaii": "vai-Vaii-LR",
      "und-VE": "es-Latn-VE",
      "und-VN": "vi-Latn-VN",
      "und-VU": "bi-Latn-VU",
      "und-Wara": "hoc-Wara-IN",
      "und-Wcho": "nnp-Wcho-IN",
      "und-WF": "fr-Latn-WF",
      "und-WS": "sm-Latn-WS",
      "und-XK": "sq-Latn-XK",
      "und-Xpeo": "peo-Xpeo-IR",
      "und-Xsux": "akk-Xsux-IQ",
      "und-YE": "ar-Arab-YE",
      "und-Yezi": "ku-Yezi-GE",
      "und-Yiii": "ii-Yiii-CN",
      "und-YT": "fr-Latn-YT",
      "und-Zanb": "cmg-Zanb-MN",
      "und-ZW": "sn-Latn-ZW",
      unr: "unr-Beng-IN",
      "unr-Deva": "unr-Deva-NP",
      "unr-NP": "unr-Deva-NP",
      unx: "unx-Beng-IN",
      uok: "uok-Latn-ZZ",
      ur: "ur-Arab-PK",
      uri: "uri-Latn-ZZ",
      urt: "urt-Latn-ZZ",
      urw: "urw-Latn-ZZ",
      usa: "usa-Latn-ZZ",
      uth: "uth-Latn-ZZ",
      utr: "utr-Latn-ZZ",
      uvh: "uvh-Latn-ZZ",
      uvl: "uvl-Latn-ZZ",
      uz: "uz-Latn-UZ",
      "uz-AF": "uz-Arab-AF",
      "uz-Arab": "uz-Arab-AF",
      "uz-CN": "uz-Cyrl-CN",
      vag: "vag-Latn-ZZ",
      vai: "vai-Vaii-LR",
      van: "van-Latn-ZZ",
      ve: "ve-Latn-ZA",
      vec: "vec-Latn-IT",
      vep: "vep-Latn-RU",
      vi: "vi-Latn-VN",
      vic: "vic-Latn-SX",
      viv: "viv-Latn-ZZ",
      vls: "vls-Latn-BE",
      vmf: "vmf-Latn-DE",
      vmw: "vmw-Latn-MZ",
      vo: "vo-Latn-001",
      vot: "vot-Latn-RU",
      vro: "vro-Latn-EE",
      vun: "vun-Latn-TZ",
      vut: "vut-Latn-ZZ",
      wa: "wa-Latn-BE",
      wae: "wae-Latn-CH",
      waj: "waj-Latn-ZZ",
      wal: "wal-Ethi-ET",
      wan: "wan-Latn-ZZ",
      war: "war-Latn-PH",
      wbp: "wbp-Latn-AU",
      wbq: "wbq-Telu-IN",
      wbr: "wbr-Deva-IN",
      wci: "wci-Latn-ZZ",
      wer: "wer-Latn-ZZ",
      wgi: "wgi-Latn-ZZ",
      whg: "whg-Latn-ZZ",
      wib: "wib-Latn-ZZ",
      wiu: "wiu-Latn-ZZ",
      wiv: "wiv-Latn-ZZ",
      wja: "wja-Latn-ZZ",
      wji: "wji-Latn-ZZ",
      wls: "wls-Latn-WF",
      wmo: "wmo-Latn-ZZ",
      wnc: "wnc-Latn-ZZ",
      wni: "wni-Arab-KM",
      wnu: "wnu-Latn-ZZ",
      wo: "wo-Latn-SN",
      wob: "wob-Latn-ZZ",
      wos: "wos-Latn-ZZ",
      wrs: "wrs-Latn-ZZ",
      wsg: "wsg-Gong-IN",
      wsk: "wsk-Latn-ZZ",
      wtm: "wtm-Deva-IN",
      wuu: "wuu-Hans-CN",
      wuv: "wuv-Latn-ZZ",
      wwa: "wwa-Latn-ZZ",
      xav: "xav-Latn-BR",
      xbi: "xbi-Latn-ZZ",
      xco: "xco-Chrs-UZ",
      xcr: "xcr-Cari-TR",
      xes: "xes-Latn-ZZ",
      xh: "xh-Latn-ZA",
      xla: "xla-Latn-ZZ",
      xlc: "xlc-Lyci-TR",
      xld: "xld-Lydi-TR",
      xmf: "xmf-Geor-GE",
      xmn: "xmn-Mani-CN",
      xmr: "xmr-Merc-SD",
      xna: "xna-Narb-SA",
      xnr: "xnr-Deva-IN",
      xog: "xog-Latn-UG",
      xon: "xon-Latn-ZZ",
      xpr: "xpr-Prti-IR",
      xrb: "xrb-Latn-ZZ",
      xsa: "xsa-Sarb-YE",
      xsi: "xsi-Latn-ZZ",
      xsm: "xsm-Latn-ZZ",
      xsr: "xsr-Deva-NP",
      xwe: "xwe-Latn-ZZ",
      yam: "yam-Latn-ZZ",
      yao: "yao-Latn-MZ",
      yap: "yap-Latn-FM",
      yas: "yas-Latn-ZZ",
      yat: "yat-Latn-ZZ",
      yav: "yav-Latn-CM",
      yay: "yay-Latn-ZZ",
      yaz: "yaz-Latn-ZZ",
      yba: "yba-Latn-ZZ",
      ybb: "ybb-Latn-CM",
      yby: "yby-Latn-ZZ",
      yer: "yer-Latn-ZZ",
      ygr: "ygr-Latn-ZZ",
      ygw: "ygw-Latn-ZZ",
      yi: "yi-Hebr-001",
      yko: "yko-Latn-ZZ",
      yle: "yle-Latn-ZZ",
      ylg: "ylg-Latn-ZZ",
      yll: "yll-Latn-ZZ",
      yml: "yml-Latn-ZZ",
      yo: "yo-Latn-NG",
      yon: "yon-Latn-ZZ",
      yrb: "yrb-Latn-ZZ",
      yre: "yre-Latn-ZZ",
      yrl: "yrl-Latn-BR",
      yss: "yss-Latn-ZZ",
      yua: "yua-Latn-MX",
      yue: "yue-Hant-HK",
      "yue-CN": "yue-Hans-CN",
      "yue-Hans": "yue-Hans-CN",
      yuj: "yuj-Latn-ZZ",
      yut: "yut-Latn-ZZ",
      yuw: "yuw-Latn-ZZ",
      za: "za-Latn-CN",
      zag: "zag-Latn-SD",
      zdj: "zdj-Arab-KM",
      zea: "zea-Latn-NL",
      zgh: "zgh-Tfng-MA",
      zh: "zh-Hans-CN",
      "zh-AU": "zh-Hant-AU",
      "zh-BN": "zh-Hant-BN",
      "zh-Bopo": "zh-Bopo-TW",
      "zh-GB": "zh-Hant-GB",
      "zh-GF": "zh-Hant-GF",
      "zh-Hanb": "zh-Hanb-TW",
      "zh-Hant": "zh-Hant-TW",
      "zh-HK": "zh-Hant-HK",
      "zh-ID": "zh-Hant-ID",
      "zh-MO": "zh-Hant-MO",
      "zh-PA": "zh-Hant-PA",
      "zh-PF": "zh-Hant-PF",
      "zh-PH": "zh-Hant-PH",
      "zh-SR": "zh-Hant-SR",
      "zh-TH": "zh-Hant-TH",
      "zh-TW": "zh-Hant-TW",
      "zh-US": "zh-Hant-US",
      "zh-VN": "zh-Hant-VN",
      zhx: "zhx-Nshu-CN",
      zia: "zia-Latn-ZZ",
      zkt: "zkt-Kits-CN",
      zlm: "zlm-Latn-TG",
      zmi: "zmi-Latn-MY",
      zne: "zne-Latn-ZZ",
      zu: "zu-Latn-ZA",
      zza: "zza-Latn-TR"
    }
  };

  // bazel-out/darwin-fastbuild/bin/packages/intl-getcanonicallocales/lib/src/canonicalizer.js
  function canonicalizeAttrs(strs) {
    return Object.keys(strs.reduce(function(all, str) {
      all[str.toLowerCase()] = 1;
      return all;
    }, {})).sort();
  }
  function canonicalizeKVs(arr) {
    var all = {};
    var result = [];
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
      var kv = arr_1[_i];
      if (kv[0] in all) {
        continue;
      }
      all[kv[0]] = 1;
      if (!kv[1] || kv[1] === "true") {
        result.push([kv[0].toLowerCase()]);
      } else {
        result.push([kv[0].toLowerCase(), kv[1].toLowerCase()]);
      }
    }
    return result.sort(compareKV);
  }
  function compareKV(t1, t2) {
    return t1[0] < t2[0] ? -1 : t1[0] > t2[0] ? 1 : 0;
  }
  function compareExtension(e1, e2) {
    return e1.type < e2.type ? -1 : e1.type > e2.type ? 1 : 0;
  }
  function mergeVariants(v1, v2) {
    var result = __spreadArray([], v1);
    for (var _i = 0, v2_1 = v2; _i < v2_1.length; _i++) {
      var v = v2_1[_i];
      if (v1.indexOf(v) < 0) {
        result.push(v);
      }
    }
    return result;
  }
  function canonicalizeUnicodeLanguageId(unicodeLanguageId) {
    var finalLangAst = unicodeLanguageId;
    if (unicodeLanguageId.variants.length) {
      var replacedLang_1 = "";
      for (var _i = 0, _a = unicodeLanguageId.variants; _i < _a.length; _i++) {
        var variant = _a[_i];
        if (replacedLang_1 = languageAlias[emitUnicodeLanguageId({
          lang: unicodeLanguageId.lang,
          variants: [variant]
        })]) {
          var replacedLangAst = parseUnicodeLanguageId(replacedLang_1.split(SEPARATOR));
          finalLangAst = {
            lang: replacedLangAst.lang,
            script: finalLangAst.script || replacedLangAst.script,
            region: finalLangAst.region || replacedLangAst.region,
            variants: mergeVariants(finalLangAst.variants, replacedLangAst.variants)
          };
          break;
        }
      }
    }
    if (finalLangAst.script && finalLangAst.region) {
      var replacedLang_2 = languageAlias[emitUnicodeLanguageId({
        lang: finalLangAst.lang,
        script: finalLangAst.script,
        region: finalLangAst.region,
        variants: []
      })];
      if (replacedLang_2) {
        var replacedLangAst = parseUnicodeLanguageId(replacedLang_2.split(SEPARATOR));
        finalLangAst = {
          lang: replacedLangAst.lang,
          script: replacedLangAst.script,
          region: replacedLangAst.region,
          variants: finalLangAst.variants
        };
      }
    }
    if (finalLangAst.region) {
      var replacedLang_3 = languageAlias[emitUnicodeLanguageId({
        lang: finalLangAst.lang,
        region: finalLangAst.region,
        variants: []
      })];
      if (replacedLang_3) {
        var replacedLangAst = parseUnicodeLanguageId(replacedLang_3.split(SEPARATOR));
        finalLangAst = {
          lang: replacedLangAst.lang,
          script: finalLangAst.script || replacedLangAst.script,
          region: replacedLangAst.region,
          variants: finalLangAst.variants
        };
      }
    }
    var replacedLang = languageAlias[emitUnicodeLanguageId({
      lang: finalLangAst.lang,
      variants: []
    })];
    if (replacedLang) {
      var replacedLangAst = parseUnicodeLanguageId(replacedLang.split(SEPARATOR));
      finalLangAst = {
        lang: replacedLangAst.lang,
        script: finalLangAst.script || replacedLangAst.script,
        region: finalLangAst.region || replacedLangAst.region,
        variants: finalLangAst.variants
      };
    }
    if (finalLangAst.region) {
      var region = finalLangAst.region.toUpperCase();
      var regionAlias = territoryAlias[region];
      var replacedRegion = void 0;
      if (regionAlias) {
        var regions = regionAlias.split(" ");
        replacedRegion = regions[0];
        var likelySubtag = supplemental.likelySubtags[emitUnicodeLanguageId({
          lang: finalLangAst.lang,
          script: finalLangAst.script,
          variants: []
        })];
        if (likelySubtag) {
          var likelyRegion = parseUnicodeLanguageId(likelySubtag.split(SEPARATOR)).region;
          if (likelyRegion && regions.indexOf(likelyRegion) > -1) {
            replacedRegion = likelyRegion;
          }
        }
      }
      if (replacedRegion) {
        finalLangAst.region = replacedRegion;
      }
      finalLangAst.region = finalLangAst.region.toUpperCase();
    }
    if (finalLangAst.script) {
      finalLangAst.script = finalLangAst.script[0].toUpperCase() + finalLangAst.script.slice(1).toLowerCase();
      if (scriptAlias[finalLangAst.script]) {
        finalLangAst.script = scriptAlias[finalLangAst.script];
      }
    }
    if (finalLangAst.variants.length) {
      for (var i = 0; i < finalLangAst.variants.length; i++) {
        var variant = finalLangAst.variants[i].toLowerCase();
        if (variantAlias[variant]) {
          var alias = variantAlias[variant];
          if (isUnicodeVariantSubtag(alias)) {
            finalLangAst.variants[i] = alias;
          } else if (isUnicodeLanguageSubtag(alias)) {
            finalLangAst.lang = alias;
          }
        }
      }
      finalLangAst.variants.sort();
    }
    return finalLangAst;
  }
  function canonicalizeUnicodeLocaleId(locale) {
    locale.lang = canonicalizeUnicodeLanguageId(locale.lang);
    if (locale.extensions) {
      for (var _i = 0, _a = locale.extensions; _i < _a.length; _i++) {
        var extension = _a[_i];
        switch (extension.type) {
          case "u":
            extension.keywords = canonicalizeKVs(extension.keywords);
            if (extension.attributes) {
              extension.attributes = canonicalizeAttrs(extension.attributes);
            }
            break;
          case "t":
            if (extension.lang) {
              extension.lang = canonicalizeUnicodeLanguageId(extension.lang);
            }
            extension.fields = canonicalizeKVs(extension.fields);
            break;
          default:
            extension.value = extension.value.toLowerCase();
            break;
        }
      }
      locale.extensions.sort(compareExtension);
    }
    return locale;
  }

  // bazel-out/darwin-fastbuild/bin/packages/intl-getcanonicallocales/lib/index.js
  function CanonicalizeLocaleList(locales) {
    if (locales === void 0) {
      return [];
    }
    var seen = [];
    if (typeof locales === "string") {
      locales = [locales];
    }
    for (var _i = 0, locales_1 = locales; _i < locales_1.length; _i++) {
      var locale = locales_1[_i];
      var canonicalizedTag = emitUnicodeLocaleId(canonicalizeUnicodeLocaleId(parseUnicodeLocaleId(locale)));
      if (seen.indexOf(canonicalizedTag) < 0) {
        seen.push(canonicalizedTag);
      }
    }
    return seen;
  }
  function getCanonicalLocales(locales) {
    return CanonicalizeLocaleList(locales);
  }

  // bazel-out/darwin-fastbuild/bin/packages/intl-getcanonicallocales/lib/should-polyfill.js
  function shouldPolyfill() {
    return typeof Intl === "undefined" || !("getCanonicalLocales" in Intl) || Intl.getCanonicalLocales("und-x-private")[0] === "x-private";
  }

  // bazel-out/darwin-fastbuild/bin/packages/intl-getcanonicallocales/lib/polyfill.js
  if (typeof Intl === "undefined") {
    if (typeof window !== "undefined") {
      Object.defineProperty(window, "Intl", {
        value: {}
      });
    } else if (typeof global !== "undefined") {
      Object.defineProperty(global, "Intl", {
        value: {}
      });
    }
  }
  if (shouldPolyfill()) {
    Object.defineProperty(Intl, "getCanonicalLocales", {
      value: getCanonicalLocales,
      writable: true,
      enumerable: false,
      configurable: true
    });
  }
})();
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */


}

if (!("of"in Array
)) {

// Array.of
/* global ArrayCreate, Construct, CreateDataPropertyOrThrow, CreateMethodProperty, IsConstructor, ToString */
// 22.1.2.3. Array.of ( ...items )
CreateMethodProperty(Array, 'of', function of() {
	// 1. Let len be the actual number of arguments passed to this function.
	var len = arguments.length;
	// 2. Let items be the List of arguments passed to this function.
	var items = arguments;
	// 3. Let C be the this value.
	var C = this;
	// 4. If IsConstructor(C) is true, then
	if (IsConstructor(C)) {
		// a. Let A be ? Construct(C, « len »).
		var A = Construct(C, [len]);
		// 5. Else,
	} else {
		// a. Let A be ? ArrayCreate(len).
		A = ArrayCreate(len);
	}
	// 6. Let k be 0.
	var k = 0;
	// 7. Repeat, while k < len
	while (k < len) {
		// a. Let kValue be items[k].
		var kValue = items[k];
		// b. Let Pk be ! ToString(k).
		var Pk = ToString(k);
		// c. Perform ? CreateDataPropertyOrThrow(A, Pk, kValue).
		CreateDataPropertyOrThrow(A, Pk, kValue);
		// d. Increase k by 1.
		k = k + 1;

	}
	// 8. Perform ? Set(A, "length", len, true)
	A.length = len;
	// 9. Return A.
	return A;
});

}

if (!("DocumentFragment"in self&&function(){try{return new DocumentFragment,!0}catch(n){return!1}}()
)) {

// DocumentFragment
(function (global) {
	global.DocumentFragment = function DocumentFragment() {
		return document.createDocumentFragment();
	};

	var fragment = document.createDocumentFragment();
	global.DocumentFragment.prototype = Object.create(fragment.constructor.prototype)
}(self));

}

if (!("DocumentFragment"in self&&"append"in DocumentFragment.prototype
)) {

// DocumentFragment.prototype.append
/* global _mutation */
(function (global) {
	var fragmentProto = document.createDocumentFragment().constructor.prototype;
	fragmentProto.append = function append() {
		this.appendChild(_mutation(arguments));
	};

	global.DocumentFragment.prototype.append = function append() {
		this.appendChild(_mutation(arguments));
	};
}(self));

}

if (!("DocumentFragment"in self&&"prepend"in DocumentFragment.prototype
)) {

// DocumentFragment.prototype.prepend
/* global _mutation */
(function (global) {
	var fragmentProto = document.createDocumentFragment().constructor.prototype;
	fragmentProto.prepend = function prepend() {
		this.insertBefore(_mutation(arguments), this.firstChild);
	};

	global.DocumentFragment.prototype.prepend = function prepend() {
		this.insertBefore(_mutation(arguments), this.firstChild);
	};
}(self));

}

if (!("getOwnPropertyNames"in Object&&function(){try{return Object.getOwnPropertyNames(1),!0}catch(t){return!1}}()
)) {

// Object.getOwnPropertyNames
/* global CreateMethodProperty, ToObject */
(function() {
	var toString = {}.toString;
	var split = "".split;
	var concat = [].concat;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var nativeGetOwnPropertyNames = Object.getOwnPropertyNames || Object.keys;
	var cachedWindowNames =
		typeof self === "object" ? nativeGetOwnPropertyNames(self) : [];

	// 19.1.2.10 Object.getOwnPropertyNames ( O )
	CreateMethodProperty(
		Object,
		"getOwnPropertyNames",
		function getOwnPropertyNames(O) {
			var object = ToObject(O);

			if (toString.call(object) === "[object Window]") {
				try {
					return nativeGetOwnPropertyNames(object);
				} catch (e) {
					// IE bug where layout engine calls userland Object.getOwnPropertyNames for cross-domain `window` objects
					return concat.call([], cachedWindowNames);
				}
			}

			// Polyfill.io fallback for non-array-like strings which exist in some ES3 user-agents (IE 8)
			object =
				toString.call(object) == "[object String]"
					? split.call(object, "")
					: Object(object);

			var result = nativeGetOwnPropertyNames(object);
			var extraNonEnumerableKeys = ["length", "prototype"];
			for (var i = 0; i < extraNonEnumerableKeys.length; i++) {
				var key = extraNonEnumerableKeys[i];
				if (hasOwnProperty.call(object, key) && !result.includes(key)) {
					result.push(key);
				}
			}

			if (result.includes("__proto__")) {
				var index = result.indexOf("__proto__");
				result.splice(index, 1);
			}

			return result;
		}
	);
})();

}

if (!("seal"in Object&&function(){try{return Object.seal("1"),!0}catch(t){return!1}}()
)) {

// Object.seal
/* global CreateMethodProperty, Type */
// 19.1.2.19 Object.seal ( O )
(function(originalObjectSeal) {
	CreateMethodProperty(Object, 'seal', function seal(O) {
		// 1. If Type(O) is not Object, return O.
		if (Type(O) === 'object') {
			return O;
		}
		// 2. Let status be ? SetIntegrityLevel(O, "sealed").
		// 3. If status is false, throw a TypeError exception.
		// 4. Return O.
		return originalObjectSeal ? originalObjectSeal(O) : O;
	});
}(Object.seal));

}

if (!("setPrototypeOf"in Object
)) {

// Object.setPrototypeOf
/* global CreateMethodProperty */
// ES6-shim 0.16.0 (c) 2013-2014 Paul Miller (http://paulmillr.com)
// ES6-shim may be freely distributed under the MIT license.
// For more details and documentation:
// https://github.com/paulmillr/es6-shim/

 // NOTE:  This versions needs object ownership
  //        because every promoted object needs to be reassigned
  //        otherwise uncompatible browsers cannot work as expected
  //
  // NOTE:  This might need es5-shim or polyfills upfront
  //        because it's based on ES5 API.
  //        (probably just an IE <= 8 problem)
  //
  // NOTE:  nodejs is fine in version 0.8, 0.10, and future versions.
(function () {
	if (Object.setPrototypeOf) { return; }

	/*jshint proto: true */
	// @author    Andrea Giammarchi - @WebReflection

	var getOwnPropertyNames = Object.getOwnPropertyNames;
	var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
	var create = Object.create;
	var defineProperty = Object.defineProperty;
	var getPrototypeOf = Object.getPrototypeOf;
	var objProto = Object.prototype;

	var copyDescriptors = function (target, source) {
		// define into target descriptors from source
		getOwnPropertyNames(source).forEach(function (key) {
			defineProperty(
				target,
				key,
				getOwnPropertyDescriptor(source, key)
			);
		});
		return target;
	};
	// used as fallback when no promotion is possible
	var createAndCopy = function setPrototypeOf(origin, proto) {
		return copyDescriptors(create(proto), origin);
	};
	var set, sPOf;
	try {
		// this might fail for various reasons
		// ignore if Chrome cought it at runtime
		set = getOwnPropertyDescriptor(objProto, '__proto__').set;
		set.call({}, null);
		// setter not poisoned, it can promote
		// Firefox, Chrome
		sPOf = function setPrototypeOf(origin, proto) {
			set.call(origin, proto);
			return origin;
		};
	} catch (e) {
		// do one or more feature detections
		set = { __proto__: null };
		// if proto does not work, needs to fallback
		// some Opera, Rhino, ducktape
		if (set instanceof Object) {
			sPOf = createAndCopy;
		} else {
			// verify if null objects are buggy
			/* eslint-disable no-proto */
			set.__proto__ = objProto;
			/* eslint-enable no-proto */
			// if null objects are buggy
			// nodejs 0.8 to 0.10
			if (set instanceof Object) {
				sPOf = function setPrototypeOf(origin, proto) {
					// use such bug to promote
					/* eslint-disable no-proto */
					origin.__proto__ = proto;
					/* eslint-enable no-proto */
					return origin;
				};
			} else {
				// try to use proto or fallback
				// Safari, old Firefox, many others
				sPOf = function setPrototypeOf(origin, proto) {
					// if proto is not null
					if (getPrototypeOf(origin)) {
						// use __proto__ to promote
						/* eslint-disable no-proto */
						origin.__proto__ = proto;
						/* eslint-enable no-proto */
						return origin;
					} else {
						// otherwise unable to promote: fallback
						return createAndCopy(origin, proto);
					}
				};
			}
		}
	}
	CreateMethodProperty(Object, 'setPrototypeOf', sPOf);
}());

}

if (!("values"in Object
)) {

// Object.values
/* global CreateMethodProperty, ToObject */
(function () {
	var toString = ({}).toString;
	var split = ''.split;
	// 19.1.2.21. Object.values ( O )
	CreateMethodProperty(Object, 'values', function values(O) {
		// 1. Let obj be ? ToObject(O).
		// Polyfill.io fallback for non-array-like strings which exist in some ES3 user-agents (IE 8)
		var obj = toString.call(O) == '[object String]' ? split.call(O, '') : ToObject(O);
		// 2. Let nameList be ? EnumerableOwnProperties(obj, "value").
		var nameList = Object.keys(obj).map(function (key) {
			return obj[key];
		});
		// 3. Return CreateArrayFromList(nameList).
		// Polyfill.io - nameList is already an array.
		return nameList;
	});
}());

}

if (!("Reflect"in self
)) {

// Reflect
// 26.1 The Reflect Object
try {
	Object.defineProperty(self, "Reflect", {
		value: self.Reflect || {},
		writable: true,
		configurable: true,
		enumerable: false
	});
} catch (e) {
	self.Reflect = self.Reflect || {};
}

}

if (!("flags"in RegExp.prototype
)) {

// RegExp.prototype.flags
/* global Get, ToBoolean, Type */
Object.defineProperty(RegExp.prototype, 'flags', {
	configurable: true,
	enumerable: false,
	get: function () {
		// 21.2.5.3.1 Let R be the this value.
		var R = this;

		// 21.2.5.3.2 If Type(R) is not Object, throw a TypeError exception.
		if (Type(R) !== 'object') {
			throw new TypeError('Method called on incompatible type: must be an object.');
		}
		// 21.2.5.3.3 Let result be the empty String.
		var result = '';

		// 21.2.5.3.4 Let global be ToBoolean(? Get(R, "global")).
		var global = ToBoolean(Get(R, 'global'));

		// 21.2.5.3.5 If global is true, append the code unit 0x0067 (LATIN SMALL LETTER G) as the last code unit of result.
		if (global) {
			result += 'g';
		}

		// 21.2.5.3.6 Let ignoreCase be ToBoolean(? Get(R, "ignoreCase")).
		var ignoreCase = ToBoolean(Get(R, 'ignoreCase'));

		// 21.2.5.3.7 If ignoreCase is true, append the code unit 0x0069 (LATIN SMALL LETTER I) as the last code unit of result.
		if (ignoreCase) {
			result += 'i';
		}

		// 21.2.5.3.8 Let multiline be ToBoolean(? Get(R, "multiline")).
		var multiline = ToBoolean(Get(R, 'multiline'));

		// 21.2.5.3.9 If multiline is true, append the code unit 0x006D (LATIN SMALL LETTER M) as the last code unit of result.
		if (multiline) {
			result += 'm';
		}

		// 21.2.5.3.10 Let unicode be ToBoolean(? Get(R, "unicode")).
		var unicode = ToBoolean(Get(R, 'unicode'));

		// 21.2.5.3.11 If unicode is true, append the code unit 0x0075 (LATIN SMALL LETTER U) as the last code unit of result.
		if (unicode) {
			result += 'u';
		}

		// 21.2.5.3.12 Let sticky be ToBoolean(? Get(R, "sticky")).
		var sticky = ToBoolean(Get(R, 'sticky'));

		// 21.2.5.3.13 If sticky is true, append the code unit 0x0079 (LATIN SMALL LETTER Y) as the last code unit of result.
		if (sticky) {
			result += 'y';
		}

		// 21.2.5.3.14 Return result.
		return result;
	}
});

}

if (!("requestAnimationFrame"in self
)) {

// requestAnimationFrame
(function (global) {
	var rafPrefix;

	// do not inject RAF in order to avoid broken performance
	var nowOffset = Date.now();

	// use performance api if exist, otherwise use Date.now.
	// Date.now polyfill required.
	var pnow = function () {
		if (global.performance && typeof global.performance.now === 'function') {
			return global.performance.now();
		}
		// fallback
		return Date.now() - nowOffset;
	};

	if ('mozRequestAnimationFrame' in global) {
		rafPrefix = 'moz';

	} else if ('webkitRequestAnimationFrame' in global) {
		rafPrefix = 'webkit';

	}

	if (rafPrefix) {
		global.requestAnimationFrame = function (callback) {
			return global[rafPrefix + 'RequestAnimationFrame'](function () {
				callback(pnow());
			});
		};
		global.cancelAnimationFrame = global[rafPrefix + 'CancelAnimationFrame'];
	} else {

		var lastTime = Date.now();

		global.requestAnimationFrame = function (callback) {
			if (typeof callback !== 'function') {
				throw new TypeError(callback + ' is not a function');
			}

			var
			currentTime = Date.now(),
			delay = 16 + lastTime - currentTime;

			if (delay < 0) {
				delay = 0;
			}

			lastTime = currentTime;

			return setTimeout(function () {
				lastTime = Date.now();

				callback(pnow());
			}, delay);
		};

		global.cancelAnimationFrame = function (id) {
			clearTimeout(id);
		};
	}
}(self));

}

if (!("fromCodePoint"in String&&1===String.fromCodePoint.length
)) {

// String.fromCodePoint
/* global CreateMethodProperty, IsArray, SameValue, ToInteger, ToNumber, UTF16Encoding */

// 21.1.2.2. String.fromCodePoint ( ...codePoints )
CreateMethodProperty(String, 'fromCodePoint', function fromCodePoint(_) {
	// Polyfill.io - List to store the characters whilst iterating over the code points.
	var result = [];
	// 1. Let codePoints be a List containing the arguments passed to this function.
	var codePoints = arguments;
	// 2. Let length be the number of elements in codePoints.
	var length = arguments.length;
	// 3. Let elements be a new empty List.
	var elements = [];
	// 4. Let nextIndex be 0.
	var nextIndex = 0;
	// 5. Repeat, while nextIndex < length
	while (nextIndex < length) {
		// Polyfill.io - We reset the elements List as we store the partial results in the result List.
		elements = [];
		// a. Let next be codePoints[nextIndex].
		var next = codePoints[nextIndex];
		// b. Let nextCP be ? ToNumber(next).
		var nextCP = ToNumber(next);
		// c. If SameValue(nextCP, ToInteger(nextCP)) is false, throw a RangeError exception.
		if (SameValue(nextCP, ToInteger(nextCP)) === false) {
			throw new RangeError('Invalid code point ' + Object.prototype.toString.call(nextCP));
		}
		// d. If nextCP < 0 or nextCP > 0x10FFFF, throw a RangeError exception.
		if (nextCP < 0 || nextCP > 0x10FFFF) {
			throw new RangeError('Invalid code point ' + Object.prototype.toString.call(nextCP));
		}
		// e. Append the elements of the UTF16Encoding of nextCP to the end of elements.
		// Polyfill.io - UTF16Encoding can return a single codepoint or a list of multiple codepoints.
		var cp = UTF16Encoding(nextCP);
		if (IsArray(cp)) {
			elements = elements.concat(cp);
		} else {
			elements.push(cp);
		}
		// f. Let nextIndex be nextIndex + 1.
		nextIndex = nextIndex + 1;

		// Polyfill.io - Retrieving the characters whilst iterating enables the function to work in a memory efficient and performant way.
		result.push(String.fromCharCode.apply(null, elements));
	}
	// 6. Return the String value whose elements are, in order, the elements in the List elements. If length is 0, the empty string is returned.
	return length === 0 ? '' : result.join('');
});

}

if (!("at"in String.prototype
)) {

// String.prototype.at
/* global CreateMethodProperty, RequireObjectCoercible, ToIntegerOrInfinity, ToString */
// 22.1.3.1. String.prototype.at ( index )
CreateMethodProperty(String.prototype, 'at', function at(index) {
	// 1. Let O be ? RequireObjectCoercible(this value).
	var O = RequireObjectCoercible(this);
	// 2. Let S be ? ToString(O).
	var S = ToString(O);
	// 3. Let len be the length of S.
	var len = S.length;
	// 4. Let relativeIndex be ? ToIntegerOrInfinity(index).
	var relativeIndex = ToIntegerOrInfinity(index);
	// 5. If relativeIndex ≥ 0, then
	// 5.a. Let k be relativeIndex.
	// 6. Else,
	// 6.a. Let k be len + relativeIndex.
	var k = relativeIndex >= 0 ? relativeIndex : len + relativeIndex;
	// 7. If k < 0 or k ≥ len, return undefined.
	if (k < 0 || k >= len) return undefined;
	// 8. Return the substring of S from k to k + 1.
	return S.substring(k, k + 1);
});

}

if (!("codePointAt"in String.prototype
)) {

// String.prototype.codePointAt
/* global CreateMethodProperty, RequireObjectCoercible, ToInteger, ToString, UTF16Decode */
// 21.1.3.3. String.prototype.codePointAt ( pos )
CreateMethodProperty(String.prototype, 'codePointAt', function codePointAt(pos) {
	// 1. Let O be ? RequireObjectCoercible(this value).
	var O = RequireObjectCoercible(this);
	// 2. Let S be ? ToString(O).
	var S = ToString(O);
	// 3. Let position be ? ToInteger(pos).
	var position = ToInteger(pos);
	// 4. Let size be the length of S.
	var size = S.length;
	// 5. If position < 0 or position ≥ size, return undefined.
	if (position < 0 || position >= size) {
		return undefined;
	}
	// 6. Let first be the numeric value of the code unit at index position within the String S.
	var first = String.prototype.charCodeAt.call(S, position);
	// 7. If first < 0xD800 or first > 0xDBFF or position+1 = size, return first.
	if (first < 0xD800 || first > 0xDBFF || position + 1 === size) {
		return first;
	}
	// 8. Let second be the numeric value of the code unit at index position+1 within the String S.
	var second = String.prototype.charCodeAt.call(S, position + 1);
	// 9. If second < 0xDC00 or second > 0xDFFF, return first.
	if (second < 0xDC00 || second > 0xDFFF) {
		return first;
	}
	// 10. Return UTF16Decode(first, second).
	// 21.1.3.3.10 Return UTF16Decode(first, second).
	return UTF16Decode(first, second);
});

}


// _ESAbstract.AdvanceStringIndex
/* global */

// 22.2.5.2.3 AdvanceStringIndex ( S, index, unicode )
function AdvanceStringIndex(S, index, unicode) { // eslint-disable-line no-unused-vars
	// 1. Assert: index ≤ 253 - 1.
	if (index > Number.MAX_SAFE_INTEGER) {
		throw new TypeError('Assertion failed: `index` must be <= 2**53');
	}
	// 2. If unicode is false, return index + 1.
	if (unicode === false) {
		return index + 1;
	}
	// 3. Let length be the number of code units in S.
	var length = S.length;
	// 4. If index + 1 ≥ length, return index + 1.
	if (index + 1 >= length) {
		return index + 1;
	}
	// 5. Let cp be ! CodePointAt(S, index).
	var cp = S.codePointAt(index);
	// 6. Return index + cp.[[CodeUnitCount]].
	return index + cp.length;
}
if (!("endsWith"in String.prototype
)) {

// String.prototype.endsWith
/* global CreateMethodProperty, IsRegExp, RequireObjectCoercible, ToInteger, ToString */
// 21.1.3.6. String.prototype.endsWith ( searchString [ , endPosition ] )
CreateMethodProperty(String.prototype, 'endsWith', function endsWith(searchString /* [ , endPosition ] */) {
	'use strict';
	var endPosition = arguments.length > 1 ? arguments[1] : undefined;
	// 1. Let O be ? RequireObjectCoercible(this value).
	var O = RequireObjectCoercible(this);
	// 2. Let S be ? ToString(O).
	var S = ToString(O);
	// 3. Let isRegExp be ? IsRegExp(searchString).
	var isRegExp = IsRegExp(searchString);
	// 4. If isRegExp is true, throw a TypeError exception.
	if (isRegExp) {
		throw new TypeError('First argument to String.prototype.endsWith must not be a regular expression');
	}
	// 5. Let searchStr be ? ToString(searchString).
	var searchStr = ToString(searchString);
	// 6. Let len be the length of S.
	var len = S.length;
	// 7. If endPosition is undefined, let pos be len, else let pos be ? ToInteger(endPosition).
	var pos = endPosition === undefined ? len : ToInteger(endPosition);
	// 8. Let end be min(max(pos, 0), len).
	var end = Math.min(Math.max(pos, 0), len);
	// 9. Let searchLength be the length of searchStr.
	var searchLength = searchStr.length;
	// 10. Let start be end - searchLength.
	var start = end - searchLength;
	// 11. If start is less than 0, return false.
	if (start < 0) {
		return false;
	}
	// 12. If the sequence of elements of S starting at start of length searchLength is the same as the full element sequence of searchStr, return true.
	if (S.substr(start, searchLength) === searchStr) {
		return true;
	}
	// 13. Otherwise, return false.
	return false;
});

}

if (!("includes"in String.prototype
)) {

// String.prototype.includes
/* global CreateMethodProperty, IsRegExp, RequireObjectCoercible, ToInteger, ToString */
// 21.1.3.7. String.prototype.includes ( searchString [ , position ] )
CreateMethodProperty(String.prototype, 'includes', function includes(searchString /* [ , position ] */) {
	'use strict';
	var position = arguments.length > 1 ? arguments[1] : undefined;
	// 1. Let O be ? RequireObjectCoercible(this value).
	var O = RequireObjectCoercible(this);
	// 2. Let S be ? ToString(O).
	var S = ToString(O);
	// 3. Let isRegExp be ? IsRegExp(searchString).
	var isRegExp = IsRegExp(searchString);
	// 4. If isRegExp is true, throw a TypeError exception.
	if (isRegExp) {
		throw new TypeError('First argument to String.prototype.includes must not be a regular expression');
	}
	// 5. Let searchStr be ? ToString(searchString).
	var searchStr = ToString(searchString);
	// 6. Let pos be ? ToInteger(position). (If position is undefined, this step produces the value 0.)
	var pos = ToInteger(position);
	// 7. Let len be the length of S.
	var len = S.length;
	// 8. Let start be min(max(pos, 0), len).
	var start = Math.min(Math.max(pos, 0), len);
	// 9. Let searchLen be the length of searchStr.
	// var searchLength = searchStr.length;
	// 10. If there exists any integer k not smaller than start such that k + searchLen is not greater than len, and for all nonnegative integers j less than searchLen, the code unit at index k+j within S is the same as the code unit at index j within searchStr, return true; but if there is no such integer k, return false.
	return String.prototype.indexOf.call(S, searchStr, start) !== -1;
});

}

if (!("padEnd"in String.prototype
)) {

// String.prototype.padEnd
/* global CreateMethodProperty, RequireObjectCoercible, ToLength, ToString */
// 21.1.3.13. String.prototype.padEnd( maxLength [ , fillString ] )
CreateMethodProperty(String.prototype, 'padEnd', function padEnd(maxLength /* [ , fillString ] */) {
	'use strict';
	var fillString = arguments.length > 1 ? arguments[1] : undefined;
	// 1. Let O be ? RequireObjectCoercible(this value).
	var O = RequireObjectCoercible(this);
	// 2. Let S be ? ToString(O).
	var S = ToString(O);
	// 3. Let intMaxLength be ? ToLength(maxLength).
	var intMaxLength = ToLength(maxLength);
	// 4. Let stringLength be the length of S.
	var stringLength = S.length;
	// 5. If intMaxLength is not greater than stringLength, return S.
	if (intMaxLength <= stringLength) {
		return S;
	}
	// 6. If fillString is undefined, let filler be the String value consisting solely of the code unit 0x0020 (SPACE).
	if (fillString === undefined) {
		var filler = ' ';
		// 7. Else, let filler be ? ToString(fillString).
	} else {
		filler = ToString(fillString);
	}
	// 8. If filler is the empty String, return S.
	if (filler === '') {
		return S;
	}
	// 9. Let fillLen be intMaxLength - stringLength.
	var fillLen = intMaxLength - stringLength;
	// 10. Let truncatedStringFiller be the String value consisting of repeated concatenations of filler truncated to length fillLen.
	var truncatedStringFiller = '';
	for (var i = 0; i < fillLen; i++) {
		truncatedStringFiller += filler;
	}
	truncatedStringFiller = truncatedStringFiller.substr(0, fillLen);
	// 11. Return the string-concatenation of S and truncatedStringFiller.
	return S + truncatedStringFiller;
});

}

if (!("padStart"in String.prototype
)) {

// String.prototype.padStart
/* global CreateMethodProperty, RequireObjectCoercible, ToLength, ToString */
// 21.1.3.14. String.prototype.padStart( maxLength [ , fillString ] )
CreateMethodProperty(String.prototype, 'padStart', function padStart(maxLength /* [ , fillString ] */) {
	'use strict';
	var fillString = arguments.length > 1 ? arguments[1] : undefined;
	// 1. Let O be ? RequireObjectCoercible(this value).
	var O = RequireObjectCoercible(this);
	// 2. Let S be ? ToString(O).
	var S = ToString(O);
	// 3. Let intMaxLength be ? ToLength(maxLength).
	var intMaxLength = ToLength(maxLength);
	// 4. Let stringLength be the length of S.
	var stringLength = S.length;
	// 5. If intMaxLength is not greater than stringLength, return S.
	if (intMaxLength <= stringLength) {
		return S;
	}
	// 6. If fillString is undefined, let filler be the String value consisting solely of the code unit 0x0020 (SPACE).
	if (fillString === undefined) {
		var filler = ' ';
		// 7. Else, let filler be ? ToString(fillString).
	} else {
		filler = ToString(fillString);
	}
	// 8. If filler is the empty String, return S.
	if (filler === '') {
		return S;
	}
	// 9. Let fillLen be intMaxLength - stringLength.
	var fillLen = intMaxLength - stringLength;
	// 10. Let truncatedStringFiller be the String value consisting of repeated concatenations of filler truncated to length fillLen.
	var truncatedStringFiller = '';
	for (var i = 0; i < fillLen; i++) {
		truncatedStringFiller += filler;
	}
	truncatedStringFiller = truncatedStringFiller.substr(0, fillLen);
	// 11. Return the string-concatenation of truncatedStringFiller and S.
	return truncatedStringFiller + S;
});

}

if (!("repeat"in String.prototype
)) {

// String.prototype.repeat
/* global CreateMethodProperty, RequireObjectCoercible, ToInteger, ToString */
// 21.1.3.15String.prototype.repeat ( count )
CreateMethodProperty(String.prototype, 'repeat', function repeat(count) {
	'use strict';
	// 1. Let O be ? RequireObjectCoercible(this value).
	var O = RequireObjectCoercible(this);
	// 2. Let S be ? ToString(O).
	var S = ToString(O);
	// 3. Let n be ? ToInteger(count).
	var n = ToInteger(count);
	// 4. If n < 0, throw a RangeError exception.
	if (n < 0) {
		throw new RangeError('Invalid count value');
	}
	// 5. If n is +∞, throw a RangeError exception.
	if (n === Infinity) {
		throw new RangeError('Invalid count value');
	}
	// 6. Let T be the String value that is made from n copies of S appended together. If n is 0, T is the empty String.
	var T = n === 0 ? '' : new Array(n + 1).join(S);
	// 7. Return T.
	return T;
});

}

if (!("startsWith"in String.prototype
)) {

// String.prototype.startsWith
/* global CreateMethodProperty, IsRegExp, RequireObjectCoercible, ToInteger, ToString */
// 21.1.3.20. String.prototype.startsWith ( searchString [ , position ] )
CreateMethodProperty(String.prototype, 'startsWith', function startsWith(searchString /* [ , position ] */) {
	'use strict';
	var position = arguments.length > 1 ? arguments[1] : undefined;
	// 1. Let O be ? RequireObjectCoercible(this value).
	var O = RequireObjectCoercible(this);
	// 2. Let S be ? ToString(O).
	var S = ToString(O);
	// 3. Let isRegExp be ? IsRegExp(searchString).
	var isRegExp = IsRegExp(searchString);
	// 4. If isRegExp is true, throw a TypeError exception.
	if (isRegExp) {
		throw new TypeError('First argument to String.prototype.startsWith must not be a regular expression');
	}
	// 5. Let searchStr be ? ToString(searchString).
	var searchStr = ToString(searchString);
	// 6. Let pos be ? ToInteger(position). (If position is undefined, this step produces the value 0.)
	var pos = ToInteger(position);
	// 7. Let len be the length of S.
	var len = S.length;
	// 8. Let start be min(max(pos, 0), len).
	var start = Math.min(Math.max(pos, 0), len);
	// 9. Let searchLength be the length of searchStr.
	var searchLength = searchStr.length;
	// 10. If searchLength+start is greater than len, return false.
	if (searchLength + start > len) {
		return false;
	}
	// 11. If the sequence of elements of S starting at start of length searchLength is the same as the full element sequence of searchStr, return true.
	if (S.substr(start).indexOf(searchString) === 0) {
		return true;
	}
	// 12. Otherwise, return false.
	return false;
});

}

if (!("trim"in String.prototype&&function(){var r="​᠎"
return!"\t\n\x0B\f\r                　\u2028\u2029\ufeff".trim()&&r.trim()===r}()
)) {

// String.prototype.trim
/* global CreateMethodProperty, TrimString */
// 21.1.3.27. String.prototype.trim ( )
CreateMethodProperty(String.prototype, 'trim', function trim() {
	'use strict';
	// Let S be this value.
	var S = this;
	// Return ? TrimString(S, "start+end").
	return TrimString(S, "start+end");
});

}

if (!("parseFloat"in Number&&1/parseFloat("\t\n\x0B\f\r                　\u2028\u2029\ufeff-0")==-Infinity
)) {

// Number.parseFloat
/* global CreateMethodProperty */
(function (nativeparseFloat, global) {
	var parseFloat = function parseFloat(str) {
		var string = String(str).trim();
		var result = nativeparseFloat(string);
		return result === 0 && string.charAt(0) == '-' ? -0 : result;
	}
	try {
		CreateMethodProperty(global, 'parseFloat', parseFloat);
	} catch (e) {
		// IE8 throws an error here if we set enumerable to false.
		// More info on table 2: https://msdn.microsoft.com/en-us/library/dd229916(v=vs.85).aspx
		global.parseFloat = parseFloat;
	}
	// 20.1.2.12. Number.parseFloat ( string )
	// The value of the Number.parseFloat data property is the same built-in function object that is the value of the  parseFloat property of the global object defined in 18.2.4.
	CreateMethodProperty(Number, 'parseFloat', global.parseFloat);
}(parseFloat, this));

}

if (!("parseInt"in Number&&8===Number.parseInt("08")
)) {

// Number.parseInt
/* global CreateMethodProperty */
(function (nativeParseInt, global) {
	// Polyfill.io - IE 8's parseInt is incorrect
	var parseInt = function parseInt(str, radix) {
		var string = String(str).trim();
		return nativeParseInt(string, (radix >>> 0) || (/^[-+]?0[xX]/.test(string) ? 16 : 10));
	}
	try {
		CreateMethodProperty(global, 'parseInt', parseInt);
	} catch (e) {
		// IE8 throws an error here if we set enumerable to false.
		// More info on table 2: https://msdn.microsoft.com/en-us/library/dd229916(v=vs.85).aspx
		global.parseInt = parseInt;
	}
	// 20.1.2.13. Number.parseInt ( string, radix )
	// The value of the Number.parseInt data property is the same built-in function object that is the value of the  parseInt property of the global object defined in 18.2.5.
	CreateMethodProperty(Number, 'parseInt', global.parseInt);
}(parseInt, this));

}

if (!("trimEnd"in String.prototype&&function(){var n="​᠎"
return!"\t\n\x0B\f\r                　\u2028\u2029\ufeff".trimEnd()&&n.trimEnd()===n}()
)) {

// String.prototype.trimEnd
/* global CreateMethodProperty, TrimString */
// 21.1.3.28 String.prototype.trimEnd ( )
CreateMethodProperty(String.prototype, 'trimEnd', function trimEnd() {
	'use strict';
	// 1. Let S be this value.
	var S = this;
	// 2. Return ? TrimString(S, "end").
	return TrimString(S, "end");
});

}

if (!("trimStart"in String.prototype&&function(){var t="​᠎"
return!"\t\n\x0B\f\r                　\u2028\u2029\ufeff".trimStart()&&t.trimStart()===t}()
)) {

// String.prototype.trimStart
/* global CreateMethodProperty, TrimString */
// 21.1.3.29 String.prototype.trimStart ( )
CreateMethodProperty(String.prototype, 'trimStart', function trimStart() {
	'use strict';
	// 1. Let S be this value.
	var S = this;
	// 2. Return ? TrimString(S, "start").
	return TrimString(S, "start");
});

}

if (!("Symbol"in self&&0===self.Symbol.length
)) {

// Symbol
// A modification of https://github.com/WebReflection/get-own-property-symbols
// (C) Andrea Giammarchi - MIT Licensed

/* global Type */
(function (Object,  GOPS, global) {
	'use strict'; //so that ({}).toString.call(null) returns the correct [object Null] rather than [object Window]

	var supportsGetters = (function () {
		// supports getters
		try {
			var a = {};
			Object.defineProperty(a, "t", {
				configurable: true,
				enumerable: false,
				get: function () {
					return true;
				},
				set: undefined
			});
			return !!a.t;
		} catch (e) {
			return false;
		}
	}());

	var	setDescriptor;
	var id = 0;
	var random = '' + Math.random();
	var prefix = '__\x01symbol:';
	var prefixLength = prefix.length;
	var internalSymbol = '__\x01symbol@@' + random;
	var emptySymbolLookup = {};
	var DP = 'defineProperty';
	var DPies = 'defineProperties';
	var GOPN = 'getOwnPropertyNames';
	var GOPD = 'getOwnPropertyDescriptor';
	var PIE = 'propertyIsEnumerable';
	var ObjectProto = Object.prototype;
	var hOP = ObjectProto.hasOwnProperty;
	var pIE = ObjectProto[PIE];
	var toString = ObjectProto.toString;
	var concat = Array.prototype.concat;
	var cachedWindowNames = Object.getOwnPropertyNames ? Object.getOwnPropertyNames(self) : [];
	var nGOPN = Object[GOPN];
	var gOPN = function getOwnPropertyNames (obj) {
		if (toString.call(obj) === '[object Window]') {
			try {
				return nGOPN(obj);
			} catch (e) {
				// IE bug where layout engine calls userland gOPN for cross-domain `window` objects
				return concat.call([], cachedWindowNames);
			}
		}
		return nGOPN(obj);
	};
	var gOPD = Object[GOPD];
	var objectCreate = Object.create;
	var objectKeys = Object.keys;
	var freeze = Object.freeze || Object;
	var objectDefineProperty = Object[DP];
	var $defineProperties = Object[DPies];
	var descriptor = gOPD(Object, GOPN);
	var addInternalIfNeeded = function (o, uid, enumerable) {
		if (!hOP.call(o, internalSymbol)) {
			try {
				objectDefineProperty(o, internalSymbol, {
					enumerable: false,
					configurable: false,
					writable: false,
					value: {}
				});
			} catch (e) {
				o[internalSymbol] = {};
			}
		}
		o[internalSymbol]['@@' + uid] = enumerable;
	};
	var createWithSymbols = function (proto, descriptors) {
		var self = objectCreate(proto);
		gOPN(descriptors).forEach(function (key) {
			if (propertyIsEnumerable.call(descriptors, key)) {
				$defineProperty(self, key, descriptors[key]);
			}
		});
		return self;
	};
	var copyAsNonEnumerable = function (descriptor) {
		var newDescriptor = objectCreate(descriptor);
		newDescriptor.enumerable = false;
		return newDescriptor;
	};
	var get = function get(){};
	var onlyNonSymbols = function (name) {
		return name != internalSymbol &&
			!hOP.call(source, name);
	};
	var onlySymbols = function (name) {
		return name != internalSymbol &&
			hOP.call(source, name);
	};
	var propertyIsEnumerable = function propertyIsEnumerable(key) {
		var uid = '' + key;
		return onlySymbols(uid) ? (
			hOP.call(this, uid) &&
			this[internalSymbol] && this[internalSymbol]['@@' + uid]
		) : pIE.call(this, key);
	};
	var setAndGetSymbol = function (uid) {
		var descriptor = {
			enumerable: false,
			configurable: true,
			get: get,
			set: function (value) {
			setDescriptor(this, uid, {
				enumerable: false,
				configurable: true,
				writable: true,
				value: value
			});
			addInternalIfNeeded(this, uid, true);
			}
		};
		try {
			objectDefineProperty(ObjectProto, uid, descriptor);
		} catch (e) {
			ObjectProto[uid] = descriptor.value;
		}
		source[uid] = objectDefineProperty(
			Object(uid),
			'constructor',
			sourceConstructor
		);
		var description = gOPD(Symbol.prototype, 'description');
		if (description) {
			objectDefineProperty(
				source[uid],
				'description',
				description
			);
		}
		return freeze(source[uid]);
	};

	var symbolDescription = function (s) {
		var sym = thisSymbolValue(s);

		// 3. Return sym.[[Description]].
		if (supportsInferredNames) {
			var name = getInferredName(sym);
			if (name !== "") {
				return name.slice(1, -1); // name.slice('['.length, -']'.length);
			}
		}

		if (emptySymbolLookup[sym] !== undefined) {
			return emptySymbolLookup[sym];
		}

		var string = sym.toString();
		var randomStartIndex = string.lastIndexOf("0.");
		string = string.slice(10, randomStartIndex);

		if (string === "") {
			return undefined;
		}
		return string;
	};

	var Symbol = function Symbol() {
		var description = arguments[0];
		if (this instanceof Symbol) {
			throw new TypeError('Symbol is not a constructor');
		}

		var uid = prefix.concat(description || '', random, ++id);

		if (description !== undefined && (description === null || isNaN(description) || String(description) === "")) {
			emptySymbolLookup[uid] = String(description);
		}

		var that = setAndGetSymbol(uid);

		if (!supportsGetters) {
			Object.defineProperty(that, "description", {
				configurable: true,
				enumerable: false,
				value: symbolDescription(that)
			});
		}

		return that;
	};

	var source = objectCreate(null);
	var sourceConstructor = {value: Symbol};
	var sourceMap = function (uid) {
		return source[uid];
		};
	var $defineProperty = function defineProperty(o, key, descriptor) {
		var uid = '' + key;
		if (onlySymbols(uid)) {
			setDescriptor(o, uid, descriptor.enumerable ?
				copyAsNonEnumerable(descriptor) : descriptor);
			addInternalIfNeeded(o, uid, !!descriptor.enumerable);
		} else {
			objectDefineProperty(o, key, descriptor);
		}
		return o;
	};

	var onlyInternalSymbols = function (obj) {
		return function (name) {
			return hOP.call(obj, internalSymbol) && hOP.call(obj[internalSymbol], '@@' + name);
		};
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(o) {
		return gOPN(o).filter(o === ObjectProto ? onlyInternalSymbols(o) : onlySymbols).map(sourceMap);
		}
	;

	descriptor.value = $defineProperty;
	objectDefineProperty(Object, DP, descriptor);

	descriptor.value = $getOwnPropertySymbols;
	objectDefineProperty(Object, GOPS, descriptor);

	descriptor.value = function getOwnPropertyNames(o) {
		return gOPN(o).filter(onlyNonSymbols);
	};
	objectDefineProperty(Object, GOPN, descriptor);

	descriptor.value = function defineProperties(o, descriptors) {
		var symbols = $getOwnPropertySymbols(descriptors);
		if (symbols.length) {
		objectKeys(descriptors).concat(symbols).forEach(function (uid) {
			if (propertyIsEnumerable.call(descriptors, uid)) {
			$defineProperty(o, uid, descriptors[uid]);
			}
		});
		} else {
		$defineProperties(o, descriptors);
		}
		return o;
	};
	objectDefineProperty(Object, DPies, descriptor);

	descriptor.value = propertyIsEnumerable;
	objectDefineProperty(ObjectProto, PIE, descriptor);

	descriptor.value = Symbol;
	objectDefineProperty(global, 'Symbol', descriptor);

	// defining `Symbol.for(key)`
	descriptor.value = function (key) {
		var uid = prefix.concat(prefix, key, random);
		return uid in ObjectProto ? source[uid] : setAndGetSymbol(uid);
	};
	objectDefineProperty(Symbol, 'for', descriptor);

	// defining `Symbol.keyFor(symbol)`
	descriptor.value = function (symbol) {
		if (onlyNonSymbols(symbol))
		throw new TypeError(symbol + ' is not a symbol');
		return hOP.call(source, symbol) ?
		symbol.slice(prefixLength * 2, -random.length) :
		void 0
		;
	};
	objectDefineProperty(Symbol, 'keyFor', descriptor);

	descriptor.value = function getOwnPropertyDescriptor(o, key) {
		var descriptor = gOPD(o, key);
		if (descriptor && onlySymbols(key)) {
		descriptor.enumerable = propertyIsEnumerable.call(o, key);
		}
		return descriptor;
	};
	objectDefineProperty(Object, GOPD, descriptor);

	descriptor.value = function create(proto, descriptors) {
		return arguments.length === 1 || typeof descriptors === "undefined" ?
		objectCreate(proto) :
		createWithSymbols(proto, descriptors);
	};

	objectDefineProperty(Object, 'create', descriptor);

	var strictModeSupported = (function(){ 'use strict'; return this; }).call(null) === null;
	if (strictModeSupported) {
		descriptor.value = function () {
			var str = toString.call(this);
			return (str === '[object String]' && onlySymbols(this)) ? '[object Symbol]' : str;
		};
	} else {
		descriptor.value = function () {
			// https://github.com/Financial-Times/polyfill-library/issues/164#issuecomment-486965300
			// Polyfill.io this code is here for the situation where a browser does not
			// support strict mode and is executing `Object.prototype.toString.call(null)`.
			// This code ensures that we return the correct result in that situation however,
			// this code also introduces a bug where it will return the incorrect result for
			// `Object.prototype.toString.call(window)`. We can't have the correct result for
			// both `window` and `null`, so we have opted for `null` as we believe this is the more
			// common situation.
			if (this === window) {
				return '[object Null]';
			}

			var str = toString.call(this);
			return (str === '[object String]' && onlySymbols(this)) ? '[object Symbol]' : str;
		};
	}
	objectDefineProperty(ObjectProto, 'toString', descriptor);

	setDescriptor = function (o, key, descriptor) {
		var protoDescriptor = gOPD(ObjectProto, key);
		delete ObjectProto[key];
		objectDefineProperty(o, key, descriptor);
		if (o !== ObjectProto) {
			objectDefineProperty(ObjectProto, key, protoDescriptor);
		}
	};

	// The abstract operation thisSymbolValue(value) performs the following steps:
	function thisSymbolValue(value) {
		// 1. If Type(value) is Symbol, return value.
		if (Type(value) === "symbol") {
			return value;
		}
		// 2. If Type(value) is Object and value has a [[SymbolData]] internal slot, then
		// a. Let s be value.[[SymbolData]].
		// b. Assert: Type(s) is Symbol.
		// c. Return s.
		// 3. Throw a TypeError exception.
		throw TypeError(value + " is not a symbol");
	}

	// Symbol.prototype.description
	if (function () {
		// supports getters
		try {
			var a = {};
			Object.defineProperty(a, "t", {
				configurable: true,
				enumerable: false,
				get: function() {
					return true;
				},
				set: undefined
			});
			return !!a.t;
		} catch (e) {
			return false;
		}
	}()) {
		var getInferredName;
		try {
			// eslint-disable-next-line no-new-func
			getInferredName = Function("s", "var v = s.valueOf(); return { [v]() {} }[v].name;");
			// eslint-disable-next-line no-empty
		} catch (e) { }

		var inferred = function () { };
		var supportsInferredNames = getInferredName && inferred.name === "inferred" ? getInferredName : null;


		// 19.4.3.2 get Symbol.prototype.description
		Object.defineProperty(global.Symbol.prototype, "description", {
			configurable: true,
			enumerable: false,
			get: function () {
				// 1. Let s be the this value.
				var s = this;
				return symbolDescription(s);
			}
		});
	}

}(Object, 'getOwnPropertySymbols', self));

}

if (!(self.Reflect&&"ownKeys"in self.Reflect
)) {

// Reflect.ownKeys
/* global CreateMethodProperty, Reflect, Type */
// 26.1.10 Reflect.ownKeys ( target )
CreateMethodProperty(Reflect, 'ownKeys', function ownKeys(target) {
	// 1. If Type(target) is not Object, throw a TypeError exception.
	if (Type(target) !== "object") {
		throw new TypeError(Object.prototype.toString.call(target) + ' is not an Object');
	}
	// polyfill-library - These steps are taken care of by Object.getOwnPropertyNames.
	// 2. Let keys be ? target.[[OwnPropertyKeys]]().
	// 3. Return CreateArrayFromList(keys).
	return Object.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target));
});

}

if (!("getOwnPropertyDescriptor"in Object&&"function"==typeof Object.getOwnPropertyDescriptor&&function(){try{var t={}
return t.test=0,0===Object.getOwnPropertyDescriptors(t).test.value}catch(e){return!1}}()
)) {

// Object.getOwnPropertyDescriptors
/* global CreateMethodProperty, Reflect, ToObject, CreateDataProperty */

// 19.1.2.9. Object.getOwnPropertyDescriptors ( O )
CreateMethodProperty(
	Object,
	'getOwnPropertyDescriptors',
	function getOwnPropertyDescriptors(O) {
		// 1. Let obj be ? ToObject(O).
		var obj = ToObject(O);
		// 2. Let ownKeys be ? obj.[[OwnPropertyKeys]]().
		var ownKeys = Reflect.ownKeys(obj);
		// 3. Let descriptors be ! ObjectCreate(%ObjectPrototype%).
		var descriptors = {};
		// 4. For each element key of ownKeys in List order, do
		var length = ownKeys.length;
		for (var i = 0; i < length; i++) {
			var key = ownKeys[i];
			// a. Let desc be ? obj.[[GetOwnProperty]](key).
			// b. Let descriptor be ! FromPropertyDescriptor(desc).
			var descriptor = Object.getOwnPropertyDescriptor(O, key);
			// c. If descriptor is not undefined, perform ! CreateDataProperty(descriptors, key, descriptor).
			if (descriptor !== undefined) {
				CreateDataProperty(descriptors, key, descriptor);
			}
		}
		// 5. Return descriptors.
		return descriptors;
	}
);

}

if (!("Symbol"in self&&"asyncIterator"in self.Symbol
)) {

// Symbol.asyncIterator
/* global Symbol */
Object.defineProperty(Symbol, 'asyncIterator', { value: Symbol('asyncIterator') });

}

if (!("Symbol"in self&&"hasInstance"in self.Symbol
)) {

// Symbol.hasInstance
/* global Symbol */
Object.defineProperty(Symbol, 'hasInstance', { value: Symbol('hasInstance') });

}

if (!("Symbol"in self&&"isConcatSpreadable"in self.Symbol
)) {

// Symbol.isConcatSpreadable
/* global Symbol */
Object.defineProperty(Symbol, 'isConcatSpreadable', { value: Symbol('isConcatSpreadable') });

}

if (!("Symbol"in self&&"iterator"in self.Symbol
)) {

// Symbol.iterator
Object.defineProperty(self.Symbol, 'iterator', { value: self.Symbol('iterator') });

}


// _ESAbstract.GetIterator
/* global GetMethod, Symbol, Call, Type, GetV */
// 7.4.1. GetIterator ( obj [ , method ] )
// The abstract operation GetIterator with argument obj and optional argument method performs the following steps:
function GetIterator(obj /*, method */) { // eslint-disable-line no-unused-vars
	// 1. If method is not present, then
		// a. Set method to ? GetMethod(obj, @@iterator).
	var method = arguments.length > 1 ? arguments[1] : GetMethod(obj, Symbol.iterator);
	// 2. Let iterator be ? Call(method, obj).
	var iterator = Call(method, obj);
	// 3. If Type(iterator) is not Object, throw a TypeError exception.
	if (Type(iterator) !== 'object') {
		throw new TypeError('bad iterator');
	}
	// 4. Let nextMethod be ? GetV(iterator, "next").
	var nextMethod = GetV(iterator, "next");
	// 5. Let iteratorRecord be Record {[[Iterator]]: iterator, [[NextMethod]]: nextMethod, [[Done]]: false}.
	var iteratorRecord = Object.create(null);
	iteratorRecord['[[Iterator]]'] = iterator;
	iteratorRecord['[[NextMethod]]'] = nextMethod;
	iteratorRecord['[[Done]]'] = false;
	// 6. Return iteratorRecord.
	return iteratorRecord;
}

// _ESAbstract.AddEntriesFromIterable
/* global IsCallable, GetIterator, IteratorStep, IteratorValue, IteratorClose, Get, Call, Type */
// eslint-disable-next-line no-unused-vars
var AddEntriesFromIterable = (function() {
	var toString = {}.toString;
	var split = "".split;
	// 23.1.1.2 AddEntriesFromIterable ( target, iterable, adder )
	return function AddEntriesFromIterable(target, iterable, adder) {
		// 1. If IsCallable(adder) is false, throw a TypeError exception.
		if (IsCallable(adder) === false) {
			throw new TypeError("adder is not callable.");
		}
		// 2. Assert: iterable is present, and is neither undefined nor null.
		// 3. Let iteratorRecord be ? GetIterator(iterable).
		var iteratorRecord = GetIterator(iterable);
		// 4. Repeat,
		// eslint-disable-next-line no-constant-condition
		while (true) {
			// a. Let next be ? IteratorStep(iteratorRecord).
			var next = IteratorStep(iteratorRecord);
			// b. If next is false, return target.
			if (next === false) {
				return target;
			}
			// c. Let nextItem be ? IteratorValue(next).
			var nextItem = IteratorValue(next);
			// d. If Type(nextItem) is not Object, then
			if (Type(nextItem) !== "object") {
				// i. Let error be ThrowCompletion(a newly created TypeError object).
				var error = new TypeError("nextItem is not an object");
				// ii. Return ? IteratorClose(iteratorRecord, error).
				IteratorClose(iteratorRecord, error);
				throw error;
			}
			// Polyfill.io fallback for non-array-like strings which exist in some ES3 user-agents (IE 8)
			nextItem =
				(Type(nextItem) === "string" || nextItem instanceof String) &&
				toString.call(nextItem) == "[object String]"
					? split.call(nextItem, "")
					: nextItem;
			var k;
			try {
				// e. Let k be Get(nextItem, "0").
				k = Get(nextItem, "0");
				// eslint-disable-next-line no-catch-shadow
			} catch (k) {
				// f. If k is an abrupt completion, return ? IteratorClose(iteratorRecord, k).
				return IteratorClose(iteratorRecord, k);
			}
			var v;
			try {
				// g. Let v be Get(nextItem, "1").
				v = Get(nextItem, "1");
				// eslint-disable-next-line no-catch-shadow
			} catch (v) {
				// h. If v is an abrupt completion, return ? IteratorClose(iteratorRecord, v).
				return IteratorClose(iteratorRecord, v);
			}
			try {
				// i. Let status be Call(adder, target, « k.[[Value]], v.[[Value]] »).
				Call(adder, target, [k, v]);
				// eslint-disable-next-line no-catch-shadow
			} catch (status) {
				// j. If status is an abrupt completion, return ? IteratorClose(iteratorRecord, status).
				return IteratorClose(iteratorRecord, status);
			}
		}
	};
})();

// _ESAbstract.IterableToList
/* global GetIterator, IteratorStep, IteratorValue */
// 7.4.11 IterableToList ( items [ , method ] )
function IterableToList(items /*, method */) { // eslint-disable-line no-unused-vars
	// 1. If method is present, then
	// 1.a. Let iteratorRecord be ? GetIterator(items, sync, method).
	// 2. Else,
	// 2.a. Let iteratorRecord be ? GetIterator(items, sync).
	var iteratorRecord = arguments.length > 1
		? GetIterator(items, arguments[1])
		: GetIterator(items);
	// 3. Let values be a new empty List.
	var values = [];
	// 4. Let next be true.
	var next = true;
	// 5. Repeat, while next is not false,
	while (next !== false) {
		// 5.a. Set next to ? IteratorStep(iteratorRecord).
		next = IteratorStep(iteratorRecord);
		// 5.b. If next is not false, then
		if (next !== false) {
			// 5.b.i. Let nextValue be ? IteratorValue(next).
			var nextValue = IteratorValue(next);
			// 5.b.ii. Append nextValue to the end of the List values.
			values.push(nextValue);
		}
	}
	// 6. Return values.
	return values;
}
if (!("AggregateError"in self
)) {

// AggregateError
/* global CreateDataPropertyOrThrow, IterableToList */
(function () {
	function AggregateError (errors, message) {
		var temp = typeof message === 'undefined' ? new Error() : new Error(message);

		CreateDataPropertyOrThrow(this, 'name', 'AggregateError');
		CreateDataPropertyOrThrow(this, 'message', temp.message);
		CreateDataPropertyOrThrow(this, 'stack', temp.stack);

		var errorsList;
		if (Array.isArray(errors)) {
			errorsList = errors.slice();
		} else {
			try {
				errorsList = IterableToList(errors);
			} catch (_error) {
				throw new TypeError('Argument is not iterable');
			}
		}

		CreateDataPropertyOrThrow(this, 'errors', errorsList);
	}

	AggregateError.prototype = Object.create(Error.prototype);
	AggregateError.prototype.constructor = AggregateError;

	self.AggregateError = AggregateError;
})();

}

if (!("Symbol"in self&&"match"in self.Symbol
)) {

// Symbol.match
/* global Symbol */
Object.defineProperty(Symbol, 'match', { value: Symbol('match') });

}

if (!("Symbol"in self&&"matchAll"in self.Symbol
)) {

// Symbol.matchAll
/* global Symbol */

// 20.4.2.8 Symbol.matchAll
Object.defineProperty(Symbol, 'matchAll', { value: Symbol('matchAll') });

}

if (!("Symbol"in self&&"replace"in self.Symbol
)) {

// Symbol.replace
/* global Symbol */
Object.defineProperty(Symbol, 'replace', { value: Symbol('replace') });

}

if (!("replaceAll"in String.prototype
)) {

// String.prototype.replaceAll
/* global CreateMethodProperty, RequireObjectCoercible, ToString, IsRegExp, Get, GetMethod, Call, IsCallable, StringIndexOf, GetSubstitution */

// 21.1.3.18 String.prototype.replaceAll ( searchValue, replaceValue )
CreateMethodProperty(String.prototype, 'replaceAll', function replaceAll(searchValue, replaceValue ) {
	'use strict';
	// 1. Let O be ? RequireObjectCoercible(this value).
	var O = RequireObjectCoercible(this);
	// 2. If searchValue is neither undefined nor null, then
	if (searchValue !== undefined && searchValue !== null) {
		// 2.a. Let isRegExp be ? IsRegExp(searchValue).
		var isRegExp = IsRegExp(searchValue);
		// 2.b. If isRegExp is true, then
		if (isRegExp) {
			// 2.b.i. Let flags be ? Get(searchValue, "flags").
			var flags = Get(searchValue, "flags");

			// IE8 doesn't have RegExp.prototype.flags support, it does have RegExp.prototype.global
			// 2.b.iii. If ? ToString(flags) does not contain "g", throw a TypeError exception.
			if (!('flags' in RegExp.prototype) && searchValue.global !== true) {
				throw TypeError('');
			} else if ('flags' in RegExp.prototype) {
				// 2.b.ii. Perform ? RequireObjectCoercible(flags).
				RequireObjectCoercible(flags)
				// 2.b.iii. If ? ToString(flags) does not contain "g", throw a TypeError exception.
				if (ToString(flags).indexOf('g') === -1) {
					throw TypeError('');
				}
			}
		}
		// 2.c. Let replacer be ? GetMethod(searchValue, @@replace).
		var replacer = 'Symbol' in self && 'replace' in self.Symbol ? GetMethod(searchValue, self.Symbol.replace) : undefined;
		// 2.d. If replacer is not undefined, then
		if (replacer !== undefined) {
			// 2.d.i. Return ? Call(replacer, searchValue, « O, replaceValue »).
			return Call(replacer, searchValue, [ O, replaceValue ]);
		}
	}
	// 3. Let string be ? ToString(O).
	var string = ToString(O);
	// 4. Let searchString be ? ToString(searchValue).
	var searchString = ToString(searchValue);

	// 5. Let functionalReplace be IsCallable(replaceValue).
	var functionalReplace = IsCallable(replaceValue);
	// 6. If functionalReplace is false, then
	if (functionalReplace === false) {
		// 6.a. Set replaceValue to ? ToString(replaceValue).
		replaceValue = ToString(replaceValue);
	}

	// 7. Let searchLength be the length of searchString.
	var searchLength = searchString.length;
	// 8. Let advanceBy be max(1, searchLength).
	var advanceBy = Math.max(1, searchLength);
	// 9. Let matchPositions be a new empty List.
	var matchPositions = [];
	// 10. Let position be ! StringIndexOf(string, searchString, 0).
	var position = StringIndexOf(string, searchString, 0);
	// 11. Repeat, while position is not -1,
	while (position !== -1) {
		// 11.a. Append position to the end of matchPositions.
		matchPositions.push(position);
		// 11.b. Set position to ! StringIndexOf(string, searchString, position + advanceBy).
		position = StringIndexOf(string, searchString, position + advanceBy);
	}

	// 12. Let endOfLastMatch be 0.
	var endOfLastMatch = 0;
	// 13. Let result be the empty String.
	var result = '';
	// 14. For each element position of matchPositions, do
	for (var i = 0; i < matchPositions.length; i++) {
		// 14.a. Let preserved be the substring of string from endOfLastMatch to position.
		var preserved = string.substring(endOfLastMatch, matchPositions[i]);
		// 14.b. If functionalReplace is true, then
		if (functionalReplace) {
			// 14.b.i. Let replacement be ? ToString(? Call(replaceValue, undefined, « searchString, position, string »)).
			var replacement = ToString(Call(replaceValue, undefined, [searchString, matchPositions[i], string]));
			// 14.c. Else,
		} else {
			// 14.c.i. Assert: Type(replaceValue) is String.
			// 14.c.ii. Let captures be a new empty List.
			var captures = [];
			// 14.c.iii. Let replacement be ! GetSubstitution(searchString, string, position, captures, undefined, replaceValue).
			replacement = GetSubstitution(searchString, string, matchPositions[i], captures, undefined, replaceValue);
		}
		// 14.d. Set result to the string-concatenation of result, preserved, and replacement.
		result = result + preserved + replacement;
		// 14.e. Set endOfLastMatch to position + searchLength.
		endOfLastMatch = matchPositions[i] + searchLength;
	}
	// 15. If endOfLastMatch < the length of string, then
	if (endOfLastMatch < string.length) {
		// 15.a. Set result to the string-concatenation of result and the substring of string from endOfLastMatch.
		result = result + string.substring(endOfLastMatch);
	}
	// 16. Return result.
	return result;
});

}

if (!("Symbol"in self&&"search"in self.Symbol
)) {

// Symbol.search
/* global Symbol */
Object.defineProperty(Symbol, 'search', { value: Symbol('search') });

}

if (!("Symbol"in self&&"species"in self.Symbol
)) {

// Symbol.species
/* global Symbol */
Object.defineProperty(Symbol, 'species', { value: Symbol('species') });

}

if (!("Map"in self&&function(t){try{var n=new t.Map([[1,1],[2,2]])
return 0===t.Map.length&&2===n.size&&"Symbol"in t&&"iterator"in t.Symbol&&"function"==typeof n[t.Symbol.iterator]}catch(e){return!1}}(self)
)) {

// Map
/* global CreateIterResultObject, CreateMethodProperty, GetIterator, IsCallable, IteratorClose, IteratorStep, IteratorValue, OrdinaryCreateFromConstructor, SameValueZero, Type, Symbol */
(function (global) {
	var supportsGetters = (function () {
		try {
			var a = {};
			Object.defineProperty(a, 't', {
				configurable: true,
				enumerable: false,
				get: function () {
					return true;
				},
				set: undefined
			});
			return !!a.t;
		} catch (e) {
			return false;
		}
	}());

	// Need an internal counter to assign unique IDs to a key map
	var _uniqueHashId = 0;
	// Create a unique key name for storing meta data on functions and objects to enable lookups in hash table
	var _metaKey = Symbol('meta_' + ((Math.random() * 100000000) + '').replace('.', ''));

	/**
	 * hashKey()
	 * Function that given a key of `any` type, returns a string key value to enable hash map optimization for accessing Map data structure
	 * @param {string|integer|function|object} recordKey - Record key to normalize to string accessor for hash map
	 * @returns {string|false} - Returns a hashed string value or false if non extensible object key
	 */
	var hashKey = function(recordKey) {
		// Check to see if we are dealing with object or function type.
		if (typeof recordKey === 'object' ? recordKey !== null : typeof recordKey === 'function') {
			// Check to see if we are dealing with a non extensible object
			if (!Object.isExtensible(recordKey)) {
				// Return `false`
				return false;
			}
			if (!Object.prototype.hasOwnProperty.call(recordKey, _metaKey)) {
				var uniqueHashKey = typeof(recordKey)+'-'+(++_uniqueHashId);
				Object.defineProperty(recordKey, _metaKey, {
					configurable: false,
					enumerable: false,
					writable: false,
					value: uniqueHashKey
				});
			}
			// Return previously defined hashed key
			return recordKey[_metaKey];
		}
		// If this is just a primitive, we can cast it to a string and return it
		return ''+recordKey;
	};

	/**
	 * getRecordIndex()
	 * Function that given a Map and a key of `any` type, returns an index number that coorelates with a record found in `this._keys[index]` and `this._values[index]`
	 * @param {Map} map - Map structure
	 * @param {string|number|function|object} recordKey - Record key to normalize to string accessor for hash map
	 * @returns {number|false} - Returns either a index to access map._keys and map._values, or false if not found
	 */
	var getRecordIndex = function(map, recordKey) {
		var hashedKey = hashKey(recordKey); // Casts key to unique string (unless already string or number)
		if (hashedKey === false) {
			// We have to iterate through our Map structure because `recordKey` is non-primitive and not extensible
			return getRecordIndexSlow(map, recordKey);
		}
		var recordIndex = map._table[hashedKey]; // O(1) access to record
		return recordIndex !== undefined ? recordIndex : false;
	};

	/**
	 * getRecordIndexSlow()
	 * Alternative (and slower) function to `getRecordIndex()`.  Necessary for looking up non-extensible object keys.
	 * @param {Map} map - Map structure
	 * @param {string|number|function|object} recordKey - Record key to normalize to string accessor for hash map
	 * @returns {number|false} - Returns either a index to access map._keys and map._values, or false if not found
	 */
	var getRecordIndexSlow = function(map, recordKey) {
		// We have to iterate through our Map structure because `recordKey` is non-primitive and not extensible
		for (var i = 0; i < map._keys.length; i++) {
			var _recordKey = map._keys[i];
			if (_recordKey !== undefMarker && SameValueZero(_recordKey, recordKey)) {
				return i;
			}
		}
		return false;
	};

	/**
	 * setHashIndex()
	 * Function that given a map, key of `any` type, and a value, creates a new entry in Map hash table
	 * @param {Map} map
	 * @param {string|number|function|object} recordKey - Key to translate into normalized key for hash map
	 * @param {number|bool} recordIndex - new record index for the hashedKey or `false` to delete the record index for the hashedKey
	 * @returns {bool} - indicates success of operation
	 */
	var setHashIndex = function(map, recordKey, recordIndex) {
		var hashedKey = hashKey(recordKey);
		if (hashedKey === false) {
			// If hashed key is false, the recordKey is an object which is not extensible.
			// That indicates we cannot use the hash map for it, so this operation becomes no-op.
			return false;
		}
		if (recordIndex === false) {
			delete map._table[hashedKey];
		} else {
			map._table[hashedKey] = recordIndex;
		}
		return true;
	};

	// Deleted map items mess with iterator pointers, so rather than removing them mark them as deleted. Can't use undefined or null since those both valid keys so use a private symbol.
	var undefMarker = Symbol('undef');
	// 23.1.1.1 Map ( [ iterable ] )
	var Map = function Map(/* iterable */) {
		// 1. If NewTarget is undefined, throw a TypeError exception.
		if (!(this instanceof Map)) {
			throw new TypeError('Constructor Map requires "new"');
		}
		// 2. Let map be ? OrdinaryCreateFromConstructor(NewTarget, "%MapPrototype%", « [[MapData]] »).
		var map = OrdinaryCreateFromConstructor(this, Map.prototype, {
			_table: {}, // O(1) access table for retrieving records
			_keys: [],
			_values: [],
			_size: 0,
			_es6Map: true
		});

		// 3. Set map.[[MapData]] to a new empty List.
		// Polyfill.io - This step was done as part of step two.

		// Some old engines do not support ES5 getters/setters.  Since Map only requires these for the size property, we can fall back to setting the size property statically each time the size of the map changes.
		if (!supportsGetters) {
			Object.defineProperty(map, 'size', {
				configurable: true,
				enumerable: false,
				writable: true,
				value: 0
			});
		}

		// 4. If iterable is not present, let iterable be undefined.
		var iterable = arguments.length > 0 ? arguments[0] : undefined;

		// 5. If iterable is either undefined or null, return map.
		if (iterable === null || iterable === undefined) {
			return map;
		}

		// 6. Let adder be ? Get(map, "set").
		var adder = map.set;

		// 7. If IsCallable(adder) is false, throw a TypeError exception.
		if (!IsCallable(adder)) {
			throw new TypeError("Map.prototype.set is not a function");
		}

		// 8. Let iteratorRecord be ? GetIterator(iterable).
		try {
			var iteratorRecord = GetIterator(iterable);
			// 9. Repeat,
			// eslint-disable-next-line no-constant-condition
			while (true) {
				// a. Let next be ? IteratorStep(iteratorRecord).
				var next = IteratorStep(iteratorRecord);
				// b. If next is false, return map.
				if (next === false) {
					return map;
				}
				// c. Let nextItem be ? IteratorValue(next).
				var nextItem = IteratorValue(next);
				// d. If Type(nextItem) is not Object, then
				if (Type(nextItem) !== 'object') {
					// i. Let error be Completion{[[Type]]: throw, [[Value]]: a newly created TypeError object, [[Target]]: empty}.
					try {
						throw new TypeError('Iterator value ' + nextItem + ' is not an entry object');
					} catch (error) {
						// ii. Return ? IteratorClose(iteratorRecord, error).
						return IteratorClose(iteratorRecord, error);
					}
				}
				try {
					// Polyfill.io - The try catch accounts for steps: f, h, and j.

					// e. Let k be Get(nextItem, "0").
					var k = nextItem[0];
					// f. If k is an abrupt completion, return ? IteratorClose(iteratorRecord, k).
					// g. Let v be Get(nextItem, "1").
					var v = nextItem[1];
					// h. If v is an abrupt completion, return ? IteratorClose(iteratorRecord, v).
					// i. Let status be Call(adder, map, « k.[[Value]], v.[[Value]] »).
					adder.call(map, k, v);
				} catch (e) {
					// j. If status is an abrupt completion, return ? IteratorClose(iteratorRecord, status).
					return IteratorClose(iteratorRecord, e);
				}
			}
		} catch (e) {
			// Polyfill.io - For user agents which do not have iteration methods on argument objects or arrays, we can special case those.
			if (Array.isArray(iterable) ||
				Object.prototype.toString.call(iterable) === '[object Arguments]' ||
				// IE 7 & IE 8 return '[object Object]' for the arguments object, we can detect by checking for the existence of the callee property
				(!!iterable.callee)) {
				var index;
				var length = iterable.length;
				for (index = 0; index < length; index++) {
					adder.call(map, iterable[index][0], iterable[index][1]);
				}
			}
		}
		return map;
	};

	// 23.1.2.1. Map.prototype
	// The initial value of Map.prototype is the intrinsic object %MapPrototype%.
	// This property has the attributes { [[Writable]]: false, [[Enumerable]]: false, [[Configurable]]: false }.
	Object.defineProperty(Map, 'prototype', {
		configurable: false,
		enumerable: false,
		writable: false,
		value: {}
	});

	// 23.1.2.2 get Map [ @@species ]
	if (supportsGetters) {
		Object.defineProperty(Map, Symbol.species, {
			configurable: true,
			enumerable: false,
			get: function () {
				// 1. Return the this value.
				return this;
			},
			set: undefined
		});
	} else {
		CreateMethodProperty(Map, Symbol.species, Map);
	}

	// 23.1.3.1 Map.prototype.clear ( )
	CreateMethodProperty(Map.prototype, 'clear', function clear() {
			// 1. Let M be the this value.
			var M = this;
			// 2. If Type(M) is not Object, throw a TypeError exception.
			if (Type(M) !== 'object') {
				throw new TypeError('Method Map.prototype.clear called on incompatible receiver ' + Object.prototype.toString.call(M));
			}
			// 3. If M does not have a [[MapData]] internal slot, throw a TypeError exception.
			if (M._es6Map !== true) {
				throw new TypeError('Method Map.prototype.clear called on incompatible receiver ' + Object.prototype.toString.call(M));
			}
			// 4. Let entries be the List that is M.[[MapData]].
			var entries = M._keys;
			// 5. For each Record {[[Key]], [[Value]]} p that is an element of entries, do
			for (var i = 0; i < entries.length; i++) {
				// 5.a. Set p.[[Key]] to empty.
				M._keys[i] = undefMarker;
				// 5.b. Set p.[[Value]] to empty.
				M._values[i] = undefMarker;
			}
			this._size = 0;
			if (!supportsGetters) {
				this.size = this._size;
			}
			// 5a. Clear lookup table
			this._table = {};
			// 6. Return undefined.
			return undefined;
		}
	);

	// 23.1.3.2. Map.prototype.constructor
	CreateMethodProperty(Map.prototype, 'constructor', Map);

	// 23.1.3.3. Map.prototype.delete ( key )
	CreateMethodProperty(Map.prototype, 'delete', function (key) {
			// 1. Let M be the this value.
			var M = this;
			// 2. If Type(M) is not Object, throw a TypeError exception.
			if (Type(M) !== 'object') {
				throw new TypeError('Method Map.prototype.clear called on incompatible receiver ' + Object.prototype.toString.call(M));
			}
			// 3. If M does not have a [[MapData]] internal slot, throw a TypeError exception.
			if (M._es6Map !== true) {
				throw new TypeError('Method Map.prototype.clear called on incompatible receiver ' + Object.prototype.toString.call(M));
			}
			// 4. Let entries be the List that is M.[[MapData]].
			// 5. For each Record {[[Key]], [[Value]]} p that is an element of entries, do
				// 5a. If p.[[Key]] is not empty and SameValueZero(p.[[Key]], key) is true, then
					// i. Set p.[[Key]] to empty.
					// ii. Set p.[[Value]] to empty.
					// ii-a. Remove key from lookup table
					// iii. Return true.
			// 6. Return false.

			// Implement steps 4-6 with a more optimal algo

			// Steps 4-5: Access record
			var recordIndex = getRecordIndex(M, key); // O(1) access to record index

			if (recordIndex !== false) {
				// Get record's `key` (could be `any` type);
				var recordKey = M._keys[recordIndex];
				// 5a. If p.[[Key]] is not empty and SameValueZero(p.[[Key]], key) is true, then
				if (recordKey !== undefMarker && SameValueZero(recordKey, key)) {
					// i. Set p.[[Key]] to empty.
					this._keys[recordIndex] = undefMarker;
					// ii. Set p.[[Value]] to empty.
					this._values[recordIndex] = undefMarker;
					this._size = --this._size;
					if (!supportsGetters) {
						this.size = this._size;
					}
					// iia. Remove key from lookup table
					setHashIndex(this, key, false);
					// iii. Return true.
					return true;
				}
			}

			// 6. Return false.
			return false;
		}
	);

	// 23.1.3.4. Map.prototype.entries ( )
	CreateMethodProperty(Map.prototype, 'entries', function entries () {
			// 1. Let M be the this value.
			var M = this;
			// 2. Return ? CreateMapIterator(M, "key+value").
			return CreateMapIterator(M, 'key+value');
		}
	);

	// 23.1.3.5. Map.prototype.forEach ( callbackfn [ , thisArg ] )
	CreateMethodProperty(Map.prototype, 'forEach', function (callbackFn) {
			// 1. Let M be the this value.
			var M = this;
			// 2. If Type(M) is not Object, throw a TypeError exception.
			if (Type(M) !== 'object') {
				throw new TypeError('Method Map.prototype.forEach called on incompatible receiver ' + Object.prototype.toString.call(M));
			}
			// 3. If M does not have a [[MapData]] internal slot, throw a TypeError exception.
			if (M._es6Map !== true) {
				throw new TypeError('Method Map.prototype.forEach called on incompatible receiver ' + Object.prototype.toString.call(M));
			}
			// 4. If IsCallable(callbackfn) is false, throw a TypeError exception.
			if (!IsCallable(callbackFn)) {
				throw new TypeError(Object.prototype.toString.call(callbackFn) + ' is not a function.');
			}
			// 5. If thisArg is present, let T be thisArg; else let T be undefined.
			if (arguments[1]) {
				var T = arguments[1];
			}
			// 6. Let entries be the List that is M.[[MapData]].
			var entries = M._keys;
			// 7. For each Record {[[Key]], [[Value]]} e that is an element of entries, in original key insertion order, do
			for (var i = 0; i < entries.length; i++) {
				// a. If e.[[Key]] is not empty, then
				if (M._keys[i] !== undefMarker && M._values[i] !== undefMarker ) {
					// i. Perform ? Call(callbackfn, T, « e.[[Value]], e.[[Key]], M »).
					callbackFn.call(T, M._values[i], M._keys[i], M);
				}
			}
			// 8. Return undefined.
			return undefined;
		}
	);

	// 23.1.3.6. Map.prototype.get ( key )
	CreateMethodProperty(Map.prototype, 'get', function get(key) {
			// 1. Let M be the this value.
			var M = this;
			// 2. If Type(M) is not Object, throw a TypeError exception.
			if (Type(M) !== 'object') {
				throw new TypeError('Method Map.prototype.get called on incompatible receiver ' + Object.prototype.toString.call(M));
			}
			// 3. If M does not have a [[MapData]] internal slot, throw a TypeError exception.
			if (M._es6Map !== true) {
				throw new TypeError('Method Map.prototype.get called on incompatible receiver ' + Object.prototype.toString.call(M));
			}
			// 4. Let entries be the List that is M.[[MapData]].
			// 5. For each Record {[[Key]], [[Value]]} p that is an element of entries, do
				// a. If p.[[Key]] is not empty and SameValueZero(p.[[Key]], key) is true, return p.[[Value]].
			// 6. Return undefined.

			// Implement steps 4-6 with a more optimal algo
			var recordIndex = getRecordIndex(M, key); // O(1) access to record index
			if (recordIndex !== false) {
				var recordKey = M._keys[recordIndex];
				if (recordKey !== undefMarker && SameValueZero(recordKey, key)) {
					return M._values[recordIndex];
				}
			}

			return undefined;
		});

	// 23.1.3.7. Map.prototype.has ( key )
	CreateMethodProperty(Map.prototype, 'has', function has (key) {
			// 1. Let M be the this value.
			var M = this;
			// 2. If Type(M) is not Object, throw a TypeError exception.
			if (typeof M !== 'object') {
				throw new TypeError('Method Map.prototype.has called on incompatible receiver ' + Object.prototype.toString.call(M));
			}
			// 3. If M does not have a [[MapData]] internal slot, throw a TypeError exception.
			if (M._es6Map !== true) {
				throw new TypeError('Method Map.prototype.has called on incompatible receiver ' + Object.prototype.toString.call(M));
			}
			// 4. Let entries be the List that is M.[[MapData]].
			// 5. For each Record {[[Key]], [[Value]]} p that is an element of entries, do
				// a. If p.[[Key]] is not empty and SameValueZero(p.[[Key]], key) is true, return true.
			// 6. Return false.

			// Implement steps 4-6 with a more optimal algo
			var recordIndex = getRecordIndex(M, key); // O(1) access to record index
			if (recordIndex !== false) {
				var recordKey = M._keys[recordIndex];
				if (recordKey !== undefMarker && SameValueZero(recordKey, key)) {
					return true;
				}
			}

			return false;
		});

	// 23.1.3.8. Map.prototype.keys ( )
	CreateMethodProperty(Map.prototype, 'keys', function keys () {
			// 1. Let M be the this value.
			var M = this;
			// 2. Return ? CreateMapIterator(M, "key").
			return CreateMapIterator(M, "key");
		});

	// 23.1.3.9. Map.prototype.set ( key, value )
	CreateMethodProperty(Map.prototype, 'set', function set(key, value) {
			// 1. Let M be the this value.
			var M = this;
			// 2. If Type(M) is not Object, throw a TypeError exception.
			if (Type(M) !== 'object') {
				throw new TypeError('Method Map.prototype.set called on incompatible receiver ' + Object.prototype.toString.call(M));
			}
			// 3. If M does not have a [[MapData]] internal slot, throw a TypeError exception.
			if (M._es6Map !== true) {
				throw new TypeError('Method Map.prototype.set called on incompatible receiver ' + Object.prototype.toString.call(M));
			}
			// 4. Let entries be the List that is M.[[MapData]].
			// 5. For each Record {[[Key]], [[Value]]} p that is an element of entries, do
			// 6. If key is -0, let key be +0.
			// 7. Let p be the Record {[[Key]]: key, [[Value]]: value}.
			// 8. Append p as the last element of entries.
			// 9. Return M.

			// Strictly following the above steps 4-9 will lead to an inefficient algorithm.
			// Step 8 also doesn't seem to be required if an entry already exists
			var recordIndex = getRecordIndex(M, key); // O(1) access to record index
			if (recordIndex !== false) {
				// update path
				M._values[recordIndex] = value;
			} else {
				// eslint-disable-next-line no-compare-neg-zero
				if (key === -0) {
					key = 0;
				}
				var p = {
					'[[Key]]': key,
					'[[Value]]': value
				};
				M._keys.push(p['[[Key]]']);
				M._values.push(p['[[Value]]']);
				setHashIndex(M, key, M._keys.length - 1); // update lookup table
				++M._size;
				if (!supportsGetters) {
					M.size = M._size;
				}
			}
			return M;
		});

	// 23.1.3.10. get Map.prototype.size
	if (supportsGetters) {
		Object.defineProperty(Map.prototype, 'size', {
			configurable: true,
			enumerable: false,
			get: function () {
				// 1. Let M be the this value.
				var M = this;
				// 2. If Type(M) is not Object, throw a TypeError exception.
				if (Type(M) !== 'object') {
					throw new TypeError('Method Map.prototype.size called on incompatible receiver ' + Object.prototype.toString.call(M));
				}
				// 3. If M does not have a [[MapData]] internal slot, throw a TypeError exception.
				if (M._es6Map !== true) {
					throw new TypeError('Method Map.prototype.size called on incompatible receiver ' + Object.prototype.toString.call(M));
				}
				// 4. Let entries be the List that is M.[[MapData]].
				// 5. Let count be 0.
				// 6. For each Record {[[Key]], [[Value]]} p that is an element of entries, do
					// 6a. If p.[[Key]] is not empty, set count to count+1.
				// 7. Return count.

				// Implement 4-7 more efficently by returning pre-computed property
				return this._size;
			},
			set: undefined
		});
	}

	// 23.1.3.11. Map.prototype.values ( )
	CreateMethodProperty(Map.prototype, 'values', function values () {
			// 1. Let M be the this value.
			var M = this;
			// 2. Return ? CreateMapIterator(M, "value").
			return CreateMapIterator(M, 'value');
		}
	);

	// 23.1.3.12. Map.prototype [ @@iterator ] ( )
	// The initial value of the @@iterator property is the same function object as the initial value of the entries property.
	CreateMethodProperty(Map.prototype, Symbol.iterator, Map.prototype.entries);

	// 23.1.3.13. Map.prototype [ @@toStringTag ]
	// The initial value of the @@toStringTag property is the String value "Map".
	// This property has the attributes { [[Writable]]: false, [[Enumerable]]: false, [[Configurable]]: true }.

	// Polyfill.io - Safari 8 implements Map.name but as a non-configurable property, which means it would throw an error if we try and configure it here.
	if (!('name' in Map)) {
		// 19.2.4.2 name
		Object.defineProperty(Map, 'name', {
			configurable: true,
			enumerable: false,
			writable: false,
			value: 'Map'
		});
	}

	// 23.1.5.1. CreateMapIterator ( map, kind )
	function CreateMapIterator(map, kind) {
		// 1. If Type(map) is not Object, throw a TypeError exception.
		if (Type(map) !== 'object') {
			throw new TypeError('createMapIterator called on incompatible receiver ' + Object.prototype.toString.call(map));
		}
		// 2. If map does not have a [[MapData]] internal slot, throw a TypeError exception.
		if (map._es6Map !== true) {
			throw new TypeError('createMapIterator called on incompatible receiver ' + Object.prototype.toString.call(map));
		}
		// 3. Let iterator be ObjectCreate(%MapIteratorPrototype%, « [[Map]], [[MapNextIndex]], [[MapIterationKind]] »).
		var iterator = Object.create(MapIteratorPrototype);
		// 4. Set iterator.[[Map]] to map.
		Object.defineProperty(iterator, '[[Map]]', {
			configurable: true,
			enumerable: false,
			writable: true,
			value: map
		});
		// 5. Set iterator.[[MapNextIndex]] to 0.
		Object.defineProperty(iterator, '[[MapNextIndex]]', {
			configurable: true,
			enumerable: false,
			writable: true,
			value: 0
		});
		// 6. Set iterator.[[MapIterationKind]] to kind.
		Object.defineProperty(iterator, '[[MapIterationKind]]', {
			configurable: true,
			enumerable: false,
			writable: true,
			value: kind
		});
		// 7. Return iterator.
		return iterator;
	}

	// 23.1.5.2. The %MapIteratorPrototype% Object
	var MapIteratorPrototype = {};
	// Polyfill.io - We use this as a quick way to check if an object is a Map Iterator instance.
	Object.defineProperty(MapIteratorPrototype, 'isMapIterator', {
		configurable: false,
		enumerable: false,
		writable: false,
		value: true
	});

	// 23.1.5.2.1. %MapIteratorPrototype%.next ( )
	CreateMethodProperty(MapIteratorPrototype, 'next', function next() {
			// 1. Let O be the this value.
			var O = this;
			// 2. If Type(O) is not Object, throw a TypeError exception.
			if (Type(O) !== 'object') {
				throw new TypeError('Method %MapIteratorPrototype%.next called on incompatible receiver ' + Object.prototype.toString.call(O));
			}
			// 3. If O does not have all of the internal slots of a Map Iterator Instance (23.1.5.3), throw a TypeError exception.
			if (!O.isMapIterator) {
				throw new TypeError('Method %MapIteratorPrototype%.next called on incompatible receiver ' + Object.prototype.toString.call(O));
			}
			// 4. Let m be O.[[Map]].
			var m = O['[[Map]]'];
			// 5. Let index be O.[[MapNextIndex]].
			var index = O['[[MapNextIndex]]'];
			// 6. Let itemKind be O.[[MapIterationKind]].
			var itemKind = O['[[MapIterationKind]]'];
			// 7. If m is undefined, return CreateIterResultObject(undefined, true).
			if (m === undefined) {
				return CreateIterResultObject(undefined, true);
			}
			// 8. Assert: m has a [[MapData]] internal slot.
			if (!m._es6Map) {
				throw new Error(Object.prototype.toString.call(m) + ' has a [[MapData]] internal slot.');
			}
			// 9. Let entries be the List that is m.[[MapData]].
			var entries = m._keys;
			// 10. Let numEntries be the number of elements of entries.
			var numEntries = entries.length;
			// 11. NOTE: numEntries must be redetermined each time this method is evaluated.
			// 12. Repeat, while index is less than numEntries,
			while (index < numEntries) {
				// a. Let e be the Record {[[Key]], [[Value]]} that is the value of entries[index].
				var e = Object.create(null);
				e['[[Key]]'] = m._keys[index];
				e['[[Value]]'] = m._values[index];
				// b. Set index to index+1.
				index = index + 1;
				// c. Set O.[[MapNextIndex]] to index.
				O['[[MapNextIndex]]'] = index;
				// d. If e.[[Key]] is not empty, then
				if (e['[[Key]]'] !== undefMarker) {
					// i. If itemKind is "key", let result be e.[[Key]].
					if (itemKind === 'key') {
						var result = e['[[Key]]'];
						// ii. Else if itemKind is "value", let result be e.[[Value]].
					} else if (itemKind === 'value') {
						result = e['[[Value]]'];
						// iii. Else,
					} else {
						// 1. Assert: itemKind is "key+value".
						if (itemKind !== 'key+value') {
							throw new Error();
						}
						// 2. Let result be CreateArrayFromList(« e.[[Key]], e.[[Value]] »).
						result = [
							e['[[Key]]'],
							e['[[Value]]']
						];
					}
					// iv. Return CreateIterResultObject(result, false).
					return CreateIterResultObject(result, false);
				}
			}
			// 13. Set O.[[Map]] to undefined.
			O['[[Map]]'] = undefined;
			// 14. Return CreateIterResultObject(undefined, true).
			return CreateIterResultObject(undefined, true);
		}
	);

	// 23.1.5.2.2 %MapIteratorPrototype% [ @@toStringTag ]
	// The initial value of the @@toStringTag property is the String value "Map Iterator".
	// This property has the attributes { [[Writable]]: false, [[Enumerable]]: false, [[Configurable]]: true }.

	CreateMethodProperty(MapIteratorPrototype, Symbol.iterator, function iterator() {
			return this;
		}
	);

	// Export the object
	try {
		CreateMethodProperty(global, 'Map', Map);
	} catch (e) {
		// IE8 throws an error here if we set enumerable to false.
		// More info on table 2: https://msdn.microsoft.com/en-us/library/dd229916(v=vs.85).aspx
		global.Map = Map;
	}
}(self));

}

if (!("Set"in self&&function(){try{var e=new self.Set([1,2])
return 0===self.Set.length&&2===e.size&&"Symbol"in self&&"iterator"in self.Symbol&&"function"==typeof e[self.Symbol.iterator]}catch(t){return!1}}()
)) {

// Set
/* global CreateIterResultObject, CreateMethodProperty, GetIterator, IsCallable, IteratorClose, IteratorStep, IteratorValue, OrdinaryCreateFromConstructor, SameValueZero, Symbol */
(function (global) {
	var supportsGetters = (function () {
		try {
			var a = {};
			Object.defineProperty(a, 't', {
				configurable: true,
				enumerable: false,
				get: function () {
					return true;
				},
				set: undefined
			});
			return !!a.t;
		} catch (e) {
			return false;
		}
	}());

	// Deleted set items mess with iterator pointers, so rather than removing them mark them as deleted. Can't use undefined or null since those both valid keys so use a private symbol.
	var undefMarker = Symbol('undef');
	// 23.2.1.1. Set ( [ iterable ] )
	var Set = function Set(/* iterable */) {
		// 1. If NewTarget is undefined, throw a TypeError exception.
		if (!(this instanceof Set)) {
			throw new TypeError('Constructor Set requires "new"');
		}
		// 2. Let set be ? OrdinaryCreateFromConstructor(NewTarget, "%SetPrototype%", « [[SetData]] »).
		var set = OrdinaryCreateFromConstructor(this, Set.prototype, {
			_values: [],
			_size: 0,
			_es6Set: true
		});

		// 3. Set set.[[SetData]] to a new empty List.
		// Polyfill.io - This step was done as part of step two.

		// Some old engines do not support ES5 getters/setters.  Since Set only requires these for the size property, we can fall back to setting the size property statically each time the size of the set changes.
		if (!supportsGetters) {
			Object.defineProperty(set, 'size', {
				configurable: true,
				enumerable: false,
				writable: true,
				value: 0
			});
		}

		// 4. If iterable is not present, let iterable be undefined.
		var iterable = arguments.length > 0 ? arguments[0] : undefined;

		// 5. If iterable is either undefined or null, return set.
		if (iterable === null || iterable === undefined) {
			return set;
		}

		// 6. Let adder be ? Get(set, "add").
		var adder = set.add;
		// 7. If IsCallable(adder) is false, throw a TypeError exception.
		if (!IsCallable(adder)) {
			throw new TypeError("Set.prototype.add is not a function");
		}

		try {
			// 8. Let iteratorRecord be ? GetIterator(iterable).
			var iteratorRecord = GetIterator(iterable);
			// 9. Repeat,
			// eslint-disable-next-line no-constant-condition
			while (true) {
				// a. Let next be ? IteratorStep(iteratorRecord).
				var next = IteratorStep(iteratorRecord);
				// b. If next is false, return set.
				if (next === false) {
					return set;
				}
				// c. Let nextValue be ? IteratorValue(next).
				var nextValue = IteratorValue(next);
				// d. Let status be Call(adder, set, « nextValue.[[Value]] »).
				try {
					adder.call(set, nextValue);
				} catch (e) {
					// e. If status is an abrupt completion, return ? IteratorClose(iteratorRecord, status).
					return IteratorClose(iteratorRecord, e);
				}
			}
		} catch (e) {
			// Polyfill.io - For user agents which do not have iteration methods on argument objects or arrays, we can special case those.
			if (Array.isArray(iterable) ||
				Object.prototype.toString.call(iterable) === '[object Arguments]' ||
				// IE 7 & IE 8 return '[object Object]' for the arguments object, we can detect by checking for the existence of the callee property
				(!!iterable.callee)) {
				var index;
				var length = iterable.length;
				for (index = 0; index < length; index++) {
					adder.call(set, iterable[index]);
				}
			} else {
				throw (e);
			}
		}
		return set;
	};

	// 23.2.2.1. Set.prototype
	// The initial value of Set.prototype is the intrinsic %SetPrototype% object.
	// This property has the attributes { [[Writable]]: false, [[Enumerable]]: false, [[Configurable]]: false }.
	Object.defineProperty(Set, 'prototype', {
		configurable: false,
		enumerable: false,
		writable: false,
		value: {}
	});

	// 23.2.2.2 get Set [ @@species ]
	if (supportsGetters) {
		Object.defineProperty(Set, Symbol.species, {
			configurable: true,
			enumerable: false,
			get: function () {
				// 1. Return the this value.
				return this;
			},
			set: undefined
		});
	} else {
		CreateMethodProperty(Set, Symbol.species, Set);
	}

	// 23.2.3.1. Set.prototype.add ( value )
	CreateMethodProperty(Set.prototype, 'add', function add(value) {
			// 1. Let S be the this value.
			var S = this;
			// 2. If Type(S) is not Object, throw a TypeError exception.
			if (typeof S !== 'object') {
				throw new TypeError('Method Set.prototype.add called on incompatible receiver ' + Object.prototype.toString.call(S));
			}
			// 3. If S does not have a [[SetData]] internal slot, throw a TypeError exception.
			if (S._es6Set !== true) {
				throw new TypeError('Method Set.prototype.add called on incompatible receiver ' + Object.prototype.toString.call(S));
			}
			// 4. Let entries be the List that is S.[[SetData]].
			var entries = S._values;
			// 5. For each e that is an element of entries, do
			for (var i = 0; i < entries.length; i++) {
				var e = entries[i];
				// a. If e is not empty and SameValueZero(e, value) is true, then
				if (e !== undefMarker && SameValueZero(e, value)) {
					// i. Return S.
					return S;
				}
			}
			// 6. If value is -0, let value be +0.
			if (value === 0 && 1/value === -Infinity) {
				value = 0;
			}
			// 7. Append value as the last element of entries.
			S._values.push(value);

			this._size = ++this._size;
			if (!supportsGetters) {
				this.size = this._size;
			}
			// 8. Return S.
			return S;
		});

	// 23.2.3.2. Set.prototype.clear ( )
	CreateMethodProperty(Set.prototype, 'clear', function clear() {
			// 1. Let S be the this value.
			var S = this;
			// 2. If Type(S) is not Object, throw a TypeError exception.
			if (typeof S !== 'object') {
				throw new TypeError('Method Set.prototype.clear called on incompatible receiver ' + Object.prototype.toString.call(S));
			}
			// 3. If S does not have a [[SetData]] internal slot, throw a TypeError exception.
			if (S._es6Set !== true) {
				throw new TypeError('Method Set.prototype.clear called on incompatible receiver ' + Object.prototype.toString.call(S));
			}
			// 4. Let entries be the List that is S.[[SetData]].
			var entries = S._values;
			// 5. For each e that is an element of entries, do
			for (var i = 0; i < entries.length; i++) {
				// a. Replace the element of entries whose value is e with an element whose value is empty.
				entries[i] = undefMarker;
			}
			this._size = 0;
			if (!supportsGetters) {
				this.size = this._size;
			}
			// 6. Return undefined.
			return undefined;
		});

	// 23.2.3.3. Set.prototype.constructor
	CreateMethodProperty(Set.prototype, 'constructor', Set);

	// 23.2.3.4. Set.prototype.delete ( value )
	CreateMethodProperty(Set.prototype, 'delete', function (value) {
			// 1. Let S be the this value.
			var S = this;
			// 2. If Type(S) is not Object, throw a TypeError exception.
			if (typeof S !== 'object') {
				throw new TypeError('Method Set.prototype.delete called on incompatible receiver ' + Object.prototype.toString.call(S));
			}
			// 3. If S does not have a [[SetData]] internal slot, throw a TypeError exception.
			if (S._es6Set !== true) {
				throw new TypeError('Method Set.prototype.delete called on incompatible receiver ' + Object.prototype.toString.call(S));
			}
			// 4. Let entries be the List that is S.[[SetData]].
			var entries = S._values;
			// 5. For each e that is an element of entries, do
			for (var i = 0; i < entries.length; i++) {
				var e = entries[i];
				// a. If e is not empty and SameValueZero(e, value) is true, then
				if (e !== undefMarker && SameValueZero(e, value)) {
					// i. Replace the element of entries whose value is e with an element whose value is empty.
					entries[i] = undefMarker;

					this._size = --this._size;
					if (!supportsGetters) {
						this.size = this._size;
					}
					// ii. Return true.
					return true;
				}
			}
			// 6. Return false.
			return false;
		}
	);

	// 23.2.3.5. Set.prototype.entries ( )
	CreateMethodProperty(Set.prototype, 'entries', function entries() {
			// 1. Let S be the this value.
			var S = this;
			// 2. Return ? CreateSetIterator(S, "key+value").
			return CreateSetIterator(S, 'key+value');
		}
	);

	// 23.2.3.6. Set.prototype.forEach ( callbackfn [ , thisArg ] )
	CreateMethodProperty(Set.prototype, 'forEach', function forEach(callbackFn /*[ , thisArg ]*/) {
			// 1. Let S be the this value.
			var S = this;
			// 2. If Type(S) is not Object, throw a TypeError exception.
			if (typeof S !== 'object') {
				throw new TypeError('Method Set.prototype.forEach called on incompatible receiver ' + Object.prototype.toString.call(S));
			}
			// 3. If S does not have a [[SetData]] internal slot, throw a TypeError exception.
			if (S._es6Set !== true) {
				throw new TypeError('Method Set.prototype.forEach called on incompatible receiver ' + Object.prototype.toString.call(S));
			}
			// 4. If IsCallable(callbackfn) is false, throw a TypeError exception.
			if (!IsCallable(callbackFn)) {
				throw new TypeError(Object.prototype.toString.call(callbackFn) + ' is not a function.');
			}
			// 5. If thisArg is present, let T be thisArg; else let T be undefined.
			if (arguments[1]) {
				var T = arguments[1];
			}
			// 6. Let entries be the List that is S.[[SetData]].
			var entries = S._values;
			// 7. For each e that is an element of entries, in original insertion order, do
			for (var i = 0; i < entries.length; i++) {
				var e = entries[i];
				// a. If e is not empty, then
				if (e !== undefMarker) {
					// i. Perform ? Call(callbackfn, T, « e, e, S »).
					callbackFn.call(T, e, e, S);
				}
			}
			// 8. Return undefined.
			return undefined;
		}
	);

	// 23.2.3.7. Set.prototype.has ( value )
	CreateMethodProperty(Set.prototype, 'has', function has(value) {
			// 1. Let S be the this value.
			var S = this;
			// 2. If Type(S) is not Object, throw a TypeError exception.
			if (typeof S !== 'object') {
				throw new TypeError('Method Set.prototype.forEach called on incompatible receiver ' + Object.prototype.toString.call(S));
			}
			// 3. If S does not have a [[SetData]] internal slot, throw a TypeError exception.
			if (S._es6Set !== true) {
				throw new TypeError('Method Set.prototype.forEach called on incompatible receiver ' + Object.prototype.toString.call(S));
			}
			// 4. Let entries be the List that is S.[[SetData]].
			var entries = S._values;
			// 5. For each e that is an element of entries, do
			for (var i = 0; i < entries.length; i++) {
				var e = entries[i];
				// a. If e is not empty and SameValueZero(e, value) is true, return true.
				if (e !== undefMarker && SameValueZero(e, value)) {
					return true;
				}
			}
			// 6. Return false.
			return false;
		}
	);

	// Polyfill.io - We need to define Set.prototype.values before Set.prototype.keys because keys is a reference to values.
	// 23.2.3.10. Set.prototype.values()
	var values = function values() {
		// 1. Let S be the this value.
		var S = this;
		// 2. Return ? CreateSetIterator(S, "value").
		return CreateSetIterator(S, "value");
	};
	CreateMethodProperty(Set.prototype, 'values', values);

	// 23.2.3.8 Set.prototype.keys ( )
	// The initial value of the keys property is the same function object as the initial value of the values property.
	CreateMethodProperty(Set.prototype, 'keys', values);

	// 23.2.3.9. get Set.prototype.size
	if (supportsGetters) {
		Object.defineProperty(Set.prototype, 'size', {
			configurable: true,
			enumerable: false,
			get: function () {
				// 1. Let S be the this value.
				var S = this;
				// 2. If Type(S) is not Object, throw a TypeError exception.
				if (typeof S !== 'object') {
					throw new TypeError('Method Set.prototype.size called on incompatible receiver ' + Object.prototype.toString.call(S));
				}
				// 3. If S does not have a [[SetData]] internal slot, throw a TypeError exception.
				if (S._es6Set !== true) {
					throw new TypeError('Method Set.prototype.size called on incompatible receiver ' + Object.prototype.toString.call(S));
				}
				// 4. Let entries be the List that is S.[[SetData]].
				var entries = S._values;
				// 5. Let count be 0.
				var count = 0;
				// 6. For each e that is an element of entries, do
				for (var i = 0; i < entries.length; i++) {
					var e = entries[i];
					// a. If e is not empty, set count to count+1.
					if (e !== undefMarker) {
						count = count + 1;
					}
				}
				// 7. Return count.
				return count;
			},
			set: undefined
		});
	}

	// 23.2.3.11. Set.prototype [ @@iterator ] ( )
	// The initial value of the @@iterator property is the same function object as the initial value of the values property.
	CreateMethodProperty(Set.prototype, Symbol.iterator, values);

	// 23.2.3.12. Set.prototype [ @@toStringTag ]
	// The initial value of the @@toStringTag property is the String value "Set".
	// This property has the attributes { [[Writable]]: false, [[Enumerable]]: false, [[Configurable]]: true }.

	// Polyfill.io - Safari 8 implements Set.name but as a non-configurable property, which means it would throw an error if we try and configure it here.
	if (!('name' in Set)) {
		// 19.2.4.2 name
		Object.defineProperty(Set, 'name', {
			configurable: true,
			enumerable: false,
			writable: false,
			value: 'Set'
		});
	}

	// 23.2.5.1. CreateSetIterator ( set, kind )
	function CreateSetIterator(set, kind) {
		// 1. If Type(set) is not Object, throw a TypeError exception.
		if (typeof set !== 'object') {
			throw new TypeError('createSetIterator called on incompatible receiver ' + Object.prototype.toString.call(set));
		}
		// 2. If set does not have a [[SetData]] internal slot, throw a TypeError exception.
		if (set._es6Set !== true) {
			throw new TypeError('createSetIterator called on incompatible receiver ' + Object.prototype.toString.call(set));
		}
		// 3. Let iterator be ObjectCreate(%SetIteratorPrototype%, « [[IteratedSet]], [[SetNextIndex]], [[SetIterationKind]] »).
		var iterator = Object.create(SetIteratorPrototype);
		// 4. Set iterator.[[IteratedSet]] to set.
		Object.defineProperty(iterator, '[[IteratedSet]]', {
			configurable: true,
			enumerable: false,
			writable: true,
			value: set
		});
		// 5. Set iterator.[[SetNextIndex]] to 0.
		Object.defineProperty(iterator, '[[SetNextIndex]]', {
			configurable: true,
			enumerable: false,
			writable: true,
			value: 0
		});
		// 6. Set iterator.[[SetIterationKind]] to kind.
		Object.defineProperty(iterator, '[[SetIterationKind]]', {
			configurable: true,
			enumerable: false,
			writable: true,
			value: kind
		});
		// 7. Return iterator.
		return iterator;
	}

	// 23.2.5.2. The %SetIteratorPrototype% Object
	var SetIteratorPrototype = {};
	//Polyfill.io - We add this property to help us identify what is a set iterator.
	Object.defineProperty(SetIteratorPrototype, 'isSetIterator', {
		configurable: false,
		enumerable: false,
		writable: false,
		value: true
	});

	// 23.2.5.2.1. %SetIteratorPrototype%.next ( )
	CreateMethodProperty(SetIteratorPrototype, 'next', function next() {
		// 1. Let O be the this value.
		var O = this;
		// 2. If Type(O) is not Object, throw a TypeError exception.
		if (typeof O !== 'object') {
			throw new TypeError('Method %SetIteratorPrototype%.next called on incompatible receiver ' + Object.prototype.toString.call(O));
		}
		// 3. If O does not have all of the internal slots of a Set Iterator Instance (23.2.5.3), throw a TypeError exception.
		if (!O.isSetIterator) {
			throw new TypeError('Method %SetIteratorPrototype%.next called on incompatible receiver ' + Object.prototype.toString.call(O));
		}
		// 4. Let s be O.[[IteratedSet]].
		var s = O['[[IteratedSet]]'];
		// 5. Let index be O.[[SetNextIndex]].
		var index = O['[[SetNextIndex]]'];
		// 6. Let itemKind be O.[[SetIterationKind]].
		var itemKind = O['[[SetIterationKind]]'];
		// 7. If s is undefined, return CreateIterResultObject(undefined, true).
		if (s === undefined) {
			return CreateIterResultObject(undefined, true);
		}
		// 8. Assert: s has a [[SetData]] internal slot.
		if (!s._es6Set) {
			throw new Error(Object.prototype.toString.call(s) + ' does not have [[SetData]] internal slot.');
		}
		// 9. Let entries be the List that is s.[[SetData]].
		var entries = s._values;
		// 10. Let numEntries be the number of elements of entries.
		var numEntries = entries.length;
		// 11. NOTE: numEntries must be redetermined each time this method is evaluated.
		// 12. Repeat, while index is less than numEntries,
		while (index < numEntries) {
			// a. Let e be entries[index].
			var e = entries[index];
			// b. Set index to index+1.
			index = index + 1;
			// c. Set O.[[SetNextIndex]] to index.
			O['[[SetNextIndex]]'] = index;
			// d. If e is not empty, then
			if (e !== undefMarker) {
				// i. If itemKind is "key+value", then
				if (itemKind === 'key+value') {
					// 1. Return CreateIterResultObject(CreateArrayFromList(« e, e »), false).
					return CreateIterResultObject([e, e], false);
				}
				// ii. Return CreateIterResultObject(e, false).
				return CreateIterResultObject(e, false);
			}
		}
		// 13. Set O.[[IteratedSet]] to undefined.
		O['[[IteratedSet]]'] = undefined;
		// 14. Return CreateIterResultObject(undefined, true).
		return CreateIterResultObject(undefined, true);
	});

	// 23.2.5.2.2. %SetIteratorPrototype% [ @@toStringTag ]
	// The initial value of the @@toStringTag property is the String value "Set Iterator".
	// This property has the attributes { [[Writable]]: false, [[Enumerable]]: false, [[Configurable]]: true }.

	CreateMethodProperty(SetIteratorPrototype, Symbol.iterator, function iterator() {
			return this;
		}
	);

	// Export the object
	try {
		CreateMethodProperty(global, 'Set', Set);
	} catch (e) {
		// IE8 throws an error here if we set enumerable to false.
		// More info on table 2: https://msdn.microsoft.com/en-us/library/dd229916(v=vs.85).aspx
		global.Set = Set;
	}

}(self));

}

if (!("from"in Array&&function(){try{return Array.from({length:-Infinity}),"a"===Array.from(new self.Set(["a"]))[0]&&"a"===Array.from(new self.Map([["a","one"]]))[0][0]}catch(r){return!1}}()
)) {

// Array.from
/* globals
	IsCallable, GetMethod, Symbol, IsConstructor, Construct, ArrayCreate, GetIterator, IteratorClose,
	ToString, IteratorStep, IteratorValue, Call, CreateDataPropertyOrThrow, ToObject, ToLength, Get, CreateMethodProperty
*/
(function () {
	var toString = Object.prototype.toString;
	var stringMatch = String.prototype.match;
	// A cross-realm friendly way to detect if a value is a String object or literal.
	function isString(value) {
		if (typeof value === 'string') { return true; }
		if (typeof value !== 'object') { return false; }
		return toString.call(value) === '[object String]';
	}

	// 22.1.2.1. Array.from ( items [ , mapfn [ , thisArg ] ] )
	CreateMethodProperty(Array, 'from', function from(items /* [ , mapfn [ , thisArg ] ] */) { // eslint-disable-line no-undef
		// 1. Let C be the this value.
		var C = this;
		// 2. If mapfn is undefined, let mapping be false.
		var mapfn = arguments.length > 1 ? arguments[1] : undefined;
		if (mapfn === undefined) {
			var mapping = false;
			// 3. Else,
		} else {
			// a. If IsCallable(mapfn) is false, throw a TypeError exception.
			if (IsCallable(mapfn) === false) {
				throw new TypeError(Object.prototype.toString.call(mapfn) + ' is not a function.');
			}
			// b. If thisArg is present, let T be thisArg; else let T be undefined.
			var thisArg = arguments.length > 2 ? arguments[2] : undefined;
			if (thisArg !== undefined) {
				var T = thisArg;
			} else {
				T = undefined;
			}
			// c. Let mapping be true.
			mapping = true;

		}
		// 4. Let usingIterator be ? GetMethod(items, @@iterator).
		var usingIterator = GetMethod(items, Symbol.iterator);
		// 5. If usingIterator is not undefined, then
		if (usingIterator !== undefined) {
			// a. If IsConstructor(C) is true, then
			if (IsConstructor(C)) {
				// i. Let A be ? Construct(C).
				var A = Construct(C);
				// b. Else,
			} else {
				// i. Let A be ! ArrayCreate(0).
				A = ArrayCreate(0);
			}
			// c. Let iteratorRecord be ? GetIterator(items, usingIterator).
			var iteratorRecord = GetIterator(items, usingIterator);
			// d. Let k be 0.
			var k = 0;
			// e. Repeat,
			// eslint-disable-next-line no-constant-condition
			while (true) {
				// i. If k ≥ 2^53-1, then
				if (k >= (Math.pow(2, 53) - 1)) {
					// 1. Let error be Completion{[[Type]]: throw, [[Value]]: a newly created TypeError object, [[Target]]: empty}.
					var error = new TypeError('Iteration count can not be greater than or equal 9007199254740991.');
					// 2. Return ? IteratorClose(iteratorRecord, error).
					return IteratorClose(iteratorRecord, error);
				}
				// ii. Let Pk be ! ToString(k).
				var Pk = ToString(k);
				// iii. Let next be ? IteratorStep(iteratorRecord).
				var next = IteratorStep(iteratorRecord);
				// iv. If next is false, then
				if (next === false) {
					// 1. Perform ? Set(A, "length", k, true).
					A.length = k;
					// 2. Return A.
					return A;
				}
				// v. Let nextValue be ? IteratorValue(next).
				var nextValue = IteratorValue(next);
				// vi. If mapping is true, then
				if (mapping) {
					try {
						// Polyfill.io - The try catch accounts for step 2.
						// 1. Let mappedValue be Call(mapfn, T, « nextValue, k »).
						var mappedValue = Call(mapfn, T, [nextValue, k]);
						// 2. If mappedValue is an abrupt completion, return ? IteratorClose(iteratorRecord, mappedValue).
						// 3. Let mappedValue be mappedValue.[[Value]].
					} catch (e) {
						return IteratorClose(iteratorRecord, e);
					}

					// vii. Else, let mappedValue be nextValue.
				} else {
					mappedValue = nextValue;
				}
				try {
					// Polyfill.io - The try catch accounts for step ix.
					// viii. Let defineStatus be CreateDataPropertyOrThrow(A, Pk, mappedValue).
					CreateDataPropertyOrThrow(A, Pk, mappedValue);
					// ix. If defineStatus is an abrupt completion, return ? IteratorClose(iteratorRecord, defineStatus).
				} catch (e) {
					return IteratorClose(iteratorRecord, e);
				}
				// x. Increase k by 1.
				k = k + 1;
			}
		}
		// 6. NOTE: items is not an Iterable so assume it is an array-like object.
		// 7. Let arrayLike be ! ToObject(items).
		// Polyfill.io - For Strings we need to split astral symbols into surrogate pairs.
		if (isString(items)) {
			var arrayLike = stringMatch.call(items, /[\uD800-\uDBFF][\uDC00-\uDFFF]?|[^\uD800-\uDFFF]|./g) || [];
		} else {
			arrayLike = ToObject(items);
		}
		// 8. Let len be ? ToLength(? Get(arrayLike, "length")).
		var len = ToLength(Get(arrayLike, "length"));
		// 9. If IsConstructor(C) is true, then
		if (IsConstructor(C)) {
			// a. Let A be ? Construct(C, « len »).
			A = Construct(C, [len]);
			// 10. Else,
		} else {
			// a. Let A be ? ArrayCreate(len).
			A = ArrayCreate(len);
		}
		// 11. Let k be 0.
		k = 0;
		// 12. Repeat, while k < len
		while (k < len) {
			// a. Let Pk be ! ToString(k).
			Pk = ToString(k);
			// b. Let kValue be ? Get(arrayLike, Pk).
			var kValue = Get(arrayLike, Pk);
			// c. If mapping is true, then
			if (mapping === true) {
				// i. Let mappedValue be ? Call(mapfn, T, « kValue, k »).
				mappedValue = Call(mapfn, T, [kValue, k]);
				// d. Else, let mappedValue be kValue.
			} else {
				mappedValue = kValue;
			}
			// e. Perform ? CreateDataPropertyOrThrow(A, Pk, mappedValue).
			CreateDataPropertyOrThrow(A, Pk, mappedValue);
			// f. Increase k by 1.
			k = k + 1;
		}
		// 13. Perform ? Set(A, "length", len, true).
		A.length = len;
		// 14. Return A.
		return A;
	});
}());

}

if (!("Symbol"in self&&"split"in self.Symbol
)) {

// Symbol.split
/* global Symbol */
Object.defineProperty(Symbol, 'split', { value: Symbol('split') });

}

if (!("Symbol"in self&&"toPrimitive"in self.Symbol
)) {

// Symbol.toPrimitive
/* global Symbol */
Object.defineProperty(Symbol, 'toPrimitive', { value: Symbol('toPrimitive') });

}

if (!("Symbol"in self&&"toStringTag"in self.Symbol
)) {

// Symbol.toStringTag
/* global Symbol */
Object.defineProperty(Symbol, 'toStringTag', {
	value: Symbol('toStringTag')
});

}


// _ESAbstract.CreateRegExpStringIterator
/* global AdvanceStringIndex, CreateIterResultObject, CreateMethodProperty, Get, RegExpExec, Symbol, ToLength, ToString */

// 22.2.7.1 CreateRegExpStringIterator ( R, S, global, fullUnicode )
function CreateRegExpStringIterator(R, S, global, fullUnicode) { // eslint-disable-line no-unused-vars
	// 22.2.7.2 The %RegExpStringIteratorPrototype% Object
	var RegExpStringIteratorPrototype = {}

	// 22.2.7.2.1 %RegExpStringIteratorPrototype%.next ( )
	CreateMethodProperty(RegExpStringIteratorPrototype, 'next', function next() {
		// 1. Let closure be a new Abstract Closure with no parameters that captures R, S, global, and fullUnicode and performs the following steps when called:
		// 1.a. Repeat,
		// 2. Return ! CreateIteratorFromClosure(closure, "%RegExpStringIteratorPrototype%", %RegExpStringIteratorPrototype%).

		if (this['[[Done]]'] === true) {
			return CreateIterResultObject(undefined, true);
		}

		// 1.a.i. Let match be ? RegExpExec(R, S).
		var match = RegExpExec(R, S);
		// 1.a.ii. If match is null, return undefined.
		if (match === null) {
			this['[[Done]]'] = true;
			return CreateIterResultObject(undefined, true);
		}
		// 1.a.iii. If global is false, then
		if (global === false) {
			// 1.a.iii.1. Perform ? Yield(match).
			// 1.a.iii.2. Return undefined.
			var result = CreateIterResultObject(match, false);
			this['[[Done]]'] = true;
			return result;
		}
		// 1.a.iv. Let matchStr be ? ToString(? Get(match, "0")).
		var matchStr = ToString(Get(match, '0'));
		// 1.a.v. If matchStr is the empty String, then
		if (matchStr === '') {
			// 1.a.v.1. Let thisIndex be ℝ(? ToLength(? Get(R, "lastIndex"))).
			var thisIndex = ToLength(Get(R, 'lastIndex'));
			// 1.a.v.2. Let nextIndex be ! AdvanceStringIndex(S, thisIndex, fullUnicode).
			var nextIndex = AdvanceStringIndex(S, thisIndex, fullUnicode);
			// 1.a.v.3. Perform ? Set(R, "lastIndex", 𝔽(nextIndex), true).
			R.lastIndex = nextIndex;
		}
		// 1.a.vi. Perform ? Yield(match).
		return CreateIterResultObject(match, false);
	});

	// 22.2.7.2.2 %RegExpStringIteratorPrototype% [ @@toStringTag ]
	Object.defineProperty(RegExpStringIteratorPrototype, Symbol.toStringTag, {
		configurable: true,
		enumerable: false,
		writable: false,
		value: 'RegExp String Iterator'
	});

	CreateMethodProperty(RegExpStringIteratorPrototype, Symbol.iterator, function iterator() {
			return this;
		}
	);

	return RegExpStringIteratorPrototype;
}
if (!("Symbol"in self&&"matchAll"in self.Symbol&&!!RegExp.prototype[self.Symbol.matchAll]
)) {

// RegExp.prototype.@@matchAll
/* global Construct, CreateMethodProperty, CreateRegExpStringIterator, Get, SpeciesConstructor, Symbol, ToLength, ToString, Type */

var supportsRegexpLiteralConstructorWithFlags = (function () {
	try {
		new RegExp(/x/, 'g')
		return true
	} catch (ignore) {
		return false
	}
})();

// 22.2.5.8 RegExp.prototype [ @@matchAll ] ( string )
CreateMethodProperty(RegExp.prototype, Symbol.matchAll, function (string) {
	'use strict';
	// 1. Let R be the this value.
	var R = this;
	// 2. If Type(R) is not Object, throw a TypeError exception.
	if (Type(R) !== 'object') {
		throw new TypeError('Method called on incompatible type: must be an object.');
	}
	// 3. Let S be ? ToString(string).
	var S = ToString(string);
	// 4. Let C be ? SpeciesConstructor(R, %RegExp%).
	var C = SpeciesConstructor(R, RegExp);
	// 5. Let flags be ? ToString(? Get(R, "flags")).
	var flags = ToString(Get(R, 'flags'));
	// IE8 doesn't have RegExp.prototype.flags support
	if (!('flags' in RegExp.prototype)) {
		flags = '';
		if (R.global === true) {
			flags += 'g';
		}
		if (R.ignoreCase === true) {
			flags += 'i';
		}
		if (R.multiline === true) {
			flags += 'm';
		}
	}
	// 6. Let matcher be ? Construct(C, « R, flags »).
	var matcher = Construct(C, [ supportsRegexpLiteralConstructorWithFlags ? R : R.source, flags ]);
	// 7. Let lastIndex be ? ToLength(? Get(R, "lastIndex")).
	var lastIndex = ToLength(Get(R, 'lastIndex'));
	// 8. Perform ? Set(matcher, "lastIndex", lastIndex, true).
	matcher.lastIndex = lastIndex;
	// 9. If flags contains "g", let global be true.
	// 10. Else, let global be false.
	var global = flags.indexOf('g') > -1;
	// 11. If flags contains "u", let fullUnicode be true.
	// 12. Else, let fullUnicode be false.
	var fullUnicode = flags.indexOf('u') > -1;
	// 13. Return ! CreateRegExpStringIterator(matcher, S, global, fullUnicode).
	return CreateRegExpStringIterator(matcher, S, global, fullUnicode);
});

}

if (!("matchAll"in String.prototype
)) {

// String.prototype.matchAll
/* global Call, CreateMethodProperty, Get, GetMethod, Invoke, IsRegExp, RequireObjectCoercible, ToString */

// 22.1.3.13 String.prototype.matchAll ( regexp )
CreateMethodProperty(String.prototype, 'matchAll', function matchAll(regexp) {
	'use strict';
	// 1. Let O be ? RequireObjectCoercible(this value).
	var O = RequireObjectCoercible(this);
	// 2. If regexp is neither undefined nor null, then
	if (regexp !== undefined && regexp !== null) {
		// 2.a. Let isRegExp be ? IsRegExp(regexp).
		var isRegExp = IsRegExp(regexp);
		// 2.b. If isRegExp is true, then
		if (isRegExp) {
			// 2.b.i. Let flags be ? Get(regexp, "flags").
			var flags = Get(regexp, "flags");

			// IE8 doesn't have RegExp.prototype.flags support, it does have RegExp.prototype.global
			// 2.b.iii. If ? ToString(flags) does not contain "g", throw a TypeError exception.
			if (!('flags' in RegExp.prototype) && regexp.global !== true) {
				throw TypeError('');
			} else if ('flags' in RegExp.prototype) {
				// 2.b.ii. Perform ? RequireObjectCoercible(flags).
				RequireObjectCoercible(flags)
				// 2.b.iii. If ? ToString(flags) does not contain "g", throw a TypeError exception.
				if (ToString(flags).indexOf('g') === -1) {
					throw TypeError('');
				}
			}
		}
		// 2.c. Let matcher be ? GetMethod(regexp, @@matchAll).
		var matcher = 'Symbol' in self && 'matchAll' in self.Symbol ? GetMethod(regexp, self.Symbol.matchAll) : undefined;
		// 2.d. If matcher is not undefined, then
		if (matcher !== undefined) {
			// 2.d.i. Return ? Call(matcher, regexp, « O »).
			return Call(matcher, regexp, [ O ]);
		}
	}
	// 3. Let S be ? ToString(O).
	var S = ToString(O);
	// 4. Let rx be ? RegExpCreate(regexp, "g").
	var rx = new RegExp(regexp, 'g');
	// 5. Return ? Invoke(rx, @@matchAll, « S »).
	return Invoke(rx, 'Symbol' in self && 'matchAll' in self.Symbol && self.Symbol.matchAll, [ S ]);
});

}


// _Iterator
/* global Symbol */
// A modification of https://github.com/medikoo/es6-iterator
// Copyright (C) 2013-2015 Mariusz Nowak (www.medikoo.com)

var Iterator = (function () { // eslint-disable-line no-unused-vars
	var clear = function () {
		this.length = 0;
		return this;
	};
	var callable = function (fn) {
		if (typeof fn !== 'function') throw new TypeError(fn + " is not a function");
		return fn;
	};

	var Iterator = function (list, context) {
		if (!(this instanceof Iterator)) {
			return new Iterator(list, context);
		}
		Object.defineProperties(this, {
			__list__: {
				writable: true,
				value: list
			},
			__context__: {
				writable: true,
				value: context
			},
			__nextIndex__: {
				writable: true,
				value: 0
			}
		});
		if (!context) return;
		callable(context.on);
		context.on('_add', this._onAdd.bind(this));
		context.on('_delete', this._onDelete.bind(this));
		context.on('_clear', this._onClear.bind(this));
	};

	Object.defineProperties(Iterator.prototype, Object.assign({
		constructor: {
			value: Iterator,
			configurable: true,
			enumerable: false,
			writable: true
		},
		_next: {
			value: function () {
				var i;
				if (!this.__list__) return;
				if (this.__redo__) {
					i = this.__redo__.shift();
					if (i !== undefined) return i;
				}
				if (this.__nextIndex__ < this.__list__.length) return this.__nextIndex__++;
				this._unBind();
			},
			configurable: true,
			enumerable: false,
			writable: true
		},
		next: {
			value: function () {
				return this._createResult(this._next());
			},
			configurable: true,
			enumerable: false,
			writable: true
		},
		_createResult: {
			value: function (i) {
				if (i === undefined) return {
					done: true,
					value: undefined
				};
				return {
					done: false,
					value: this._resolve(i)
				};
			},
			configurable: true,
			enumerable: false,
			writable: true
		},
		_resolve: {
			value: function (i) {
				return this.__list__[i];
			},
			configurable: true,
			enumerable: false,
			writable: true
		},
		_unBind: {
			value: function () {
				this.__list__ = null;
				delete this.__redo__;
				if (!this.__context__) return;
				this.__context__.off('_add', this._onAdd.bind(this));
				this.__context__.off('_delete', this._onDelete.bind(this));
				this.__context__.off('_clear', this._onClear.bind(this));
				this.__context__ = null;
			},
			configurable: true,
			enumerable: false,
			writable: true
		},
		toString: {
			value: function () {
				return '[object Iterator]';
			},
			configurable: true,
			enumerable: false,
			writable: true
		}
	}, {
		_onAdd: {
			value: function (index) {
				if (index >= this.__nextIndex__) return;
				++this.__nextIndex__;
				if (!this.__redo__) {
					Object.defineProperty(this, '__redo__', {
						value: [index],
						configurable: true,
						enumerable: false,
						writable: false
					});
					return;
				}
				this.__redo__.forEach(function (redo, i) {
					if (redo >= index) this.__redo__[i] = ++redo;
				}, this);
				this.__redo__.push(index);
			},
			configurable: true,
			enumerable: false,
			writable: true
		},
		_onDelete: {
			value: function (index) {
				var i;
				if (index >= this.__nextIndex__) return;
				--this.__nextIndex__;
				if (!this.__redo__) return;
				i = this.__redo__.indexOf(index);
				if (i !== -1) this.__redo__.splice(i, 1);
				this.__redo__.forEach(function (redo, i) {
					if (redo > index) this.__redo__[i] = --redo;
				}, this);
			},
			configurable: true,
			enumerable: false,
			writable: true
		},
		_onClear: {
			value: function () {
				if (this.__redo__) clear.call(this.__redo__);
				this.__nextIndex__ = 0;
			},
			configurable: true,
			enumerable: false,
			writable: true
		}
	}));

	Object.defineProperty(Iterator.prototype, Symbol.iterator, {
		value: function () {
			return this;
		},
		configurable: true,
		enumerable: false,
		writable: true
	});
	Object.defineProperty(Iterator.prototype, Symbol.toStringTag, {
		value: 'Iterator',
		configurable: false,
		enumerable: false,
		writable: true
	});

	return Iterator;
}());

// _ArrayIterator
/* global Iterator */
// A modification of https://github.com/medikoo/es6-iterator
// Copyright (C) 2013-2015 Mariusz Nowak (www.medikoo.com)

var ArrayIterator = (function() { // eslint-disable-line no-unused-vars

	var ArrayIterator = function(arr, kind) {
		if (!(this instanceof ArrayIterator)) return new ArrayIterator(arr, kind);
		Iterator.call(this, arr);
		if (!kind) kind = 'value';
		else if (String.prototype.includes.call(kind, 'key+value')) kind = 'key+value';
		else if (String.prototype.includes.call(kind, 'key')) kind = 'key';
		else kind = 'value';
		Object.defineProperty(this, '__kind__', {
			value: kind,
			configurable: false,
			enumerable: false,
			writable: false
		});
	};
	if (Object.setPrototypeOf) Object.setPrototypeOf(ArrayIterator, Iterator.prototype);

	ArrayIterator.prototype = Object.create(Iterator.prototype, {
		constructor: {
			value: ArrayIterator,
			configurable: true,
			enumerable: false,
			writable: true
		},
		_resolve: {
			value: function(i) {
				if (this.__kind__ === 'value') return this.__list__[i];
				if (this.__kind__ === 'key+value') return [i, this.__list__[i]];
				return i;
			},
			configurable: true,
			enumerable: false,
			writable: true
		},
		toString: {
			value: function() {
				return '[object Array Iterator]';
			},
			configurable: true,
			enumerable: false,
			writable: true
		}
	});

	return ArrayIterator;
}());
if (!("Symbol"in self&&"iterator"in self.Symbol&&!!Array.prototype.entries
)) {

// Array.prototype.entries
/* global CreateMethodProperty, ToObject, ArrayIterator */
// 22.1.3.4. Array.prototype.entries ( )
CreateMethodProperty(Array.prototype, 'entries', function entries() {
	// 1. Let O be ? ToObject(this value).
	var O = ToObject(this);
	// 2. Return CreateArrayIterator(O, "key+value").
	// TODO: Add CreateArrayIterator
	return new ArrayIterator(O, 'key+value');
});

}

if (!("Symbol"in self&&"iterator"in self.Symbol&&!!Array.prototype.keys
)) {

// Array.prototype.keys
/* global CreateMethodProperty, ToObject, ArrayIterator */
// 22.1.3.14. Array.prototype.keys ( )
CreateMethodProperty(Array.prototype, 'keys', function keys() {
	// 1. Let O be ? ToObject(this value).
	var O = ToObject(this);
	// 2. Return CreateArrayIterator(O, "key").
	// TODO: Add CreateArrayIterator.
	return new ArrayIterator(O, 'key');
});

}

if (!("values"in Array.prototype
)) {

// Array.prototype.values
/* global CreateMethodProperty, Symbol, ToObject, ArrayIterator */
// 22.1.3.30/ Array.prototype.values ( )
// Polyfill.io - Firefox, Chrome and Opera have Array.prototype[Symbol.iterator], which is the exact same function as Array.prototype.values.
if ('Symbol' in self && 'iterator' in Symbol && typeof Array.prototype[Symbol.iterator] === 'function') {
	CreateMethodProperty(Array.prototype, 'values', Array.prototype[Symbol.iterator]);
} else {
	CreateMethodProperty(Array.prototype, 'values', function values () {
		// 1. Let O be ? ToObject(this value).
		var O = ToObject(this);
		// 2. Return CreateArrayIterator(O, "value").
		// TODO: Add CreateArrayIterator
		return new ArrayIterator(O, 'value');
	});
}

}

if (!("Symbol"in self&&"iterator"in self.Symbol&&!!Array.prototype[self.Symbol.iterator]
)) {

// Array.prototype.@@iterator
/* global Symbol, CreateMethodProperty */
// 22.1.3.31. Array.prototype [ @@iterator ] ( )
// The initial value of the @@iterator property is the same function object as the initial value of the  Array.prototype.values property.
CreateMethodProperty(Array.prototype, Symbol.iterator, Array.prototype.values);

}

if (!("fromEntries"in Object
)) {

// Object.fromEntries
/* global CreateMethodProperty, RequireObjectCoercible, ToPropertyKey, CreateDataPropertyOrThrow, AddEntriesFromIterable */

// 19.1.2.5 Object.fromEntries ( iterable )
CreateMethodProperty(Object, 'fromEntries', function fromEntries(iterable) {
	// 1. Perform ? RequireObjectCoercible(iterable).
	RequireObjectCoercible(iterable);
	// 2. Let obj be ObjectCreate(%ObjectPrototype%).
	var obj = {};
	// 3. Assert: obj is an extensible ordinary object with no own properties.
	// 4. Let stepsDefine be the algorithm steps defined in CreateDataPropertyOnObject Functions.
	// 5. Let adder be CreateBuiltinFunction(stepsDefine, « »).
	var adder = function (key, value) {
		// Let O be the this value.
		var O = this;
		// Assert: Type(O) is Object.
		// Assert: O is an extensible ordinary object.
		// Let propertyKey be ? ToPropertyKey(key).
		var propertyKey = ToPropertyKey(key);
		// Perform ! CreateDataPropertyOrThrow(O, propertyKey, value).
		CreateDataPropertyOrThrow(O, propertyKey, value);
	};
	// 6. Return ? AddEntriesFromIterable(obj, iterable, adder).
	return AddEntriesFromIterable(obj, iterable, adder);
});

}


// _StringIterator
// A modification of https://github.com/medikoo/es6-iterator
// Copyright (C) 2013-2015 Mariusz Nowak (www.medikoo.com)

/* global Iterator */

var StringIterator = (function() { // eslint-disable-line no-unused-vars

	var StringIterator = function (str) {
		if (!(this instanceof StringIterator)) return new StringIterator(str);
		str = String(str);
		Iterator.call(this, str);
		Object.defineProperty(this, '__length__', {
			value: str.length,
			configurable: false,
			enumerable: false,
			writable: false
		});
	};
	if (Object.setPrototypeOf) Object.setPrototypeOf(StringIterator, Iterator);

	StringIterator.prototype = Object.create(Iterator.prototype, {
		constructor: {
			value: StringIterator,
			configurable: true,
			enumerable: false,
			writable: true
		},
		_next: {
			value: function() {
				if (!this.__list__) return;
				if (this.__nextIndex__ < this.__length__) return this.__nextIndex__++;
				this._unBind();
			},
			configurable: true,
			enumerable: false,
			writable: true
		},
		_resolve: {
			value: function (i) {
				var char = this.__list__[i], code;
				if (this.__nextIndex__ === this.__length__) return char;
				code = char.charCodeAt(0);
				if ((code >= 0xD800) && (code <= 0xDBFF)) return char + this.__list__[this.__nextIndex__++];
				return char;
			},
			configurable: true,
			enumerable: false,
			writable: true
		},
		toString: {
			value: function() {
				return '[object String Iterator]';
			},
			configurable: true,
			enumerable: false,
			writable: true
		}
	});

	return StringIterator;
}());
if (!("Symbol"in self&&"iterator"in self.Symbol&&!!String.prototype[self.Symbol.iterator]
)) {

// String.prototype.@@iterator
/* global CreateMethodProperty, RequireObjectCoercible, ToString, StringIterator, Symbol */
// 21.1.3.29. String.prototype [ @@iterator ] ( )
CreateMethodProperty(String.prototype, Symbol.iterator, function () {
	// 1. Let O be ? RequireObjectCoercible(this value).
	var O = RequireObjectCoercible(this);
	// 2. Let S be ? ToString(O).
	var S = ToString(O);
	// 3. Return CreateStringIterator(S).
	// TODO: Add CreateStringIterator.
	return new StringIterator(S);
});

}

if (!("Promise"in self
)) {

// Promise
/*
	Yaku v0.19.3
	(c) 2015 Yad Smood. http://ysmood.org
	License MIT
*/
/*
	Yaku v0.17.9
	(c) 2015 Yad Smood. http://ysmood.org
	License MIT
*/
(function () {
	'use strict';

	var $undefined
	, $null = null
	, isBrowser = typeof self === 'object'
	, root = self
	, nativePromise = root.Promise
	, process = root.process
	, console = root.console
	, isLongStackTrace = true
	, Arr = Array
	, Err = Error

	, $rejected = 1
	, $resolved = 2
	, $pending = 3

	, $Symbol = 'Symbol'
	, $iterator = 'iterator'
	, $species = 'species'
	, $speciesKey = $Symbol + '(' + $species + ')'
	, $return = 'return'

	, $unhandled = '_uh'
	, $promiseTrace = '_pt'
	, $settlerTrace = '_st'

	, $invalidThis = 'Invalid this'
	, $invalidArgument = 'Invalid argument'
	, $fromPrevious = '\nFrom previous '
	, $promiseCircularChain = 'Chaining cycle detected for promise'
	, $unhandledRejectionMsg = 'Uncaught (in promise)'
	, $rejectionHandled = 'rejectionHandled'
	, $unhandledRejection = 'unhandledRejection'

	, $tryCatchFn
	, $tryCatchThis
	, $tryErr = { e: $null }
	, $noop = function () {}
	, $cleanStackReg = /^.+\/node_modules\/yaku\/.+\n?/mg
	;

	/**
	* This class follows the [Promises/A+](https://promisesaplus.com) and
	* [ES6](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-promise-objects) spec
	* with some extra helpers.
	* @param  {Function} executor Function object with two arguments resolve, reject.
	* The first argument fulfills the promise, the second argument rejects it.
	* We can call these functions, once our operation is completed.
	*/
	var Yaku = function (executor) {
	var self = this,
		err;

	// "this._s" is the internao state of: pending, resolved or rejected
	// "this._v" is the internal value

	if (!isObject(self) || self._s !== $undefined)
		throw genTypeError($invalidThis);

	self._s = $pending;

	if (isLongStackTrace) self[$promiseTrace] = genTraceInfo();

	if (executor !== $noop) {
		if (!isFunction(executor))
			throw genTypeError($invalidArgument);

		err = genTryCatcher(executor)(
			genSettler(self, $resolved),
			genSettler(self, $rejected)
		);

		if (err === $tryErr)
			settlePromise(self, $rejected, err.e);
	}
	};

	Yaku['default'] = Yaku;

	extend(Yaku.prototype, {
	/**
		* Appends fulfillment and rejection handlers to the promise,
		* and returns a new promise resolving to the return value of the called handler.
		* @param  {Function} onFulfilled Optional. Called when the Promise is resolved.
		* @param  {Function} onRejected  Optional. Called when the Promise is rejected.
		* @return {Yaku} It will return a new Yaku which will resolve or reject after
		* @example
		* the current Promise.
		* ```js
		* var Promise = require('yaku');
		* var p = Promise.resolve(10);
		*
		* p.then((v) => {
		*     console.log(v);
		* });
		* ```
		*/
	then: function (onFulfilled, onRejected) {
		if (this._s === undefined) throw genTypeError();

		return addHandler(
			this,
			newCapablePromise(Yaku.speciesConstructor(this, Yaku)),
			onFulfilled,
			onRejected
		);
	},

	/**
		* The `catch()` method returns a Promise and deals with rejected cases only.
		* It behaves the same as calling `Promise.prototype.then(undefined, onRejected)`.
		* @param  {Function} onRejected A Function called when the Promise is rejected.
		* This function has one argument, the rejection reason.
		* @return {Yaku} A Promise that deals with rejected cases only.
		* @example
		* ```js
		* var Promise = require('yaku');
		* var p = Promise.reject(new Error("ERR"));
		*
		* p['catch']((v) => {
		*     console.log(v);
		* });
		* ```
		*/
	'catch': function (onRejected) {
		return this.then($undefined, onRejected);
	},

	/**
		* Register a callback to be invoked when a promise is settled (either fulfilled or rejected).
		* Similar with the try-catch-finally, it's often used for cleanup.
		* @param  {Function} onFinally A Function called when the Promise is settled.
		* It will not receive any argument.
		* @return {Yaku} A Promise that will reject if onFinally throws an error or returns a rejected promise.
		* Else it will resolve previous promise's final state (either fulfilled or rejected).
		* @example
		* ```js
		* var Promise = require('yaku');
		* var p = Math.random() > 0.5 ? Promise.resolve() : Promise.reject();
		* p.finally(() => {
		*     console.log('finally');
		* });
		* ```
		*/
	'finally': function (onFinally) {
		return this.then(function (val) {
			return Yaku.resolve(onFinally()).then(function () {
				return val;
			});
		}, function (err) {
			return Yaku.resolve(onFinally()).then(function () {
				throw err;
			});
		});
	},

	// The number of current promises that attach to this Yaku instance.
	_c: 0,

	// The parent Yaku.
	_p: $null
	});

	/**
	* The `Promise.resolve(value)` method returns a Promise object that is resolved with the given value.
	* If the value is a thenable (i.e. has a then method), the returned promise will "follow" that thenable,
	* adopting its eventual state; otherwise the returned promise will be fulfilled with the value.
	* @param  {Any} value Argument to be resolved by this Promise.
	* Can also be a Promise or a thenable to resolve.
	* @return {Yaku}
	* @example
	* ```js
	* var Promise = require('yaku');
	* var p = Promise.resolve(10);
	* ```
	*/
	Yaku.resolve = function (val) {
	return isYaku(val) ? val : settleWithX(newCapablePromise(this), val);
	};

	/**
	* The `Promise.reject(reason)` method returns a Promise object that is rejected with the given reason.
	* @param  {Any} reason Reason why this Promise rejected.
	* @return {Yaku}
	* @example
	* ```js
	* var Promise = require('yaku');
	* var p = Promise.reject(new Error("ERR"));
	* ```
	*/
	Yaku.reject = function (reason) {
	return settlePromise(newCapablePromise(this), $rejected, reason);
	};

	/**
	* The `Promise.race(iterable)` method returns a promise that resolves or rejects
	* as soon as one of the promises in the iterable resolves or rejects,
	* with the value or reason from that promise.
	* @param  {iterable} iterable An iterable object, such as an Array.
	* @return {Yaku} The race function returns a Promise that is settled
	* the same way as the first passed promise to settle.
	* It resolves or rejects, whichever happens first.
	* @example
	* ```js
	* var Promise = require('yaku');
	* Promise.race([
	*     123,
	*     Promise.resolve(0)
	* ])
	* .then((value) => {
	*     console.log(value); // => 123
	* });
	* ```
	*/
	Yaku.race = function (iterable) {
	var self = this
		, p = newCapablePromise(self)

		, resolve = function (val) {
			settlePromise(p, $resolved, val);
		}

		, reject = function (val) {
			settlePromise(p, $rejected, val);
		}

		, ret = genTryCatcher(each)(iterable, function (v) {
			self.resolve(v).then(resolve, reject);
		});

	if (ret === $tryErr) return self.reject(ret.e);

	return p;
	};

	/**
	* The `Promise.all(iterable)` method returns a promise that resolves when
	* all of the promises in the iterable argument have resolved.
	*
	* The result is passed as an array of values from all the promises.
	* If something passed in the iterable array is not a promise,
	* it's converted to one by Promise.resolve. If any of the passed in promises rejects,
	* the all Promise immediately rejects with the value of the promise that rejected,
	* discarding all the other promises whether or not they have resolved.
	* @param  {iterable} iterable An iterable object, such as an Array.
	* @return {Yaku}
	* @example
	* ```js
	* var Promise = require('yaku');
	* Promise.all([
	*     123,
	*     Promise.resolve(0)
	* ])
	* .then((values) => {
	*     console.log(values); // => [123, 0]
	* });
	* ```
	* @example
	* Use with iterable.
	* ```js
	* var Promise = require('yaku');
	* Promise.all((function * () {
	*     yield 10;
	*     yield new Promise(function (r) { setTimeout(r, 1000, "OK") });
	* })())
	* .then((values) => {
	*     console.log(values); // => [123, 0]
	* });
	* ```
	*/
	Yaku.all = function (iterable) {
	var self = this
		, p1 = newCapablePromise(self)
		, res = []
		, ret
	;

	function reject (reason) {
		settlePromise(p1, $rejected, reason);
	}

	ret = genTryCatcher(each)(iterable, function (item, i) {
		self.resolve(item).then(function (value) {
			res[i] = value;
			if (!--ret) settlePromise(p1, $resolved, res);
		}, reject);
	});

	if (ret === $tryErr) return self.reject(ret.e);

	if (!ret) settlePromise(p1, $resolved, []);

	return p1;
	};

	/**
	* The ES6 Symbol object that Yaku should use, by default it will use the
	* global one.
	* @type {Object}
	* @example
	* ```js
	* var core = require("core-js/library");
	* var Promise = require("yaku");
	* Promise.Symbol = core.Symbol;
	* ```
	*/
	Yaku.Symbol = root[$Symbol] || {};

	// To support browsers that don't support `Object.defineProperty`.
	genTryCatcher(function () {
	Object.defineProperty(Yaku, getSpecies(), {
		get: function () { return this; }
	});
	})();

	/**
	* Use this api to custom the species behavior.
	* https://tc39.github.io/ecma262/#sec-speciesconstructor
	* @param {Any} O The current this object.
	* @param {Function} defaultConstructor
	*/
	Yaku.speciesConstructor = function (O, D) {
	var C = O.constructor;

	return C ? (C[getSpecies()] || D) : D;
	};

	/**
	* Catch all possibly unhandled rejections. If you want to use specific
	* format to display the error stack, overwrite it.
	* If it is set, auto `console.error` unhandled rejection will be disabled.
	* @param {Any} reason The rejection reason.
	* @param {Yaku} p The promise that was rejected.
	* @example
	* ```js
	* var Promise = require('yaku');
	* Promise.unhandledRejection = (reason) => {
	*     console.error(reason);
	* };
	*
	* // The console will log an unhandled rejection error message.
	* Promise.reject('my reason');
	*
	* // The below won't log the unhandled rejection error message.
	* Promise.reject('v')["catch"](() => {});
	* ```
	*/
	Yaku.unhandledRejection = function (reason, p) {
	console && console.error(
		$unhandledRejectionMsg,
		isLongStackTrace ? p.longStack : genStackInfo(reason, p)
	);
	};

	/**
	* Emitted whenever a Promise was rejected and an error handler was
	* attached to it (for example with `["catch"]()`) later than after an event loop turn.
	* @param {Any} reason The rejection reason.
	* @param {Yaku} p The promise that was rejected.
	*/
	Yaku.rejectionHandled = $noop;

	/**
	* It is used to enable the long stack trace.
	* Once it is enabled, it can't be reverted.
	* While it is very helpful in development and testing environments,
	* it is not recommended to use it in production. It will slow down
	* application and eat up memory.
	* It will add an extra property `longStack` to the Error object.
	* @example
	* ```js
	* var Promise = require('yaku');
	* Promise.enableLongStackTrace();
	* Promise.reject(new Error("err"))["catch"]((err) => {
	*     console.log(err.longStack);
	* });
	* ```
	*/
	Yaku.enableLongStackTrace = function () {
	isLongStackTrace = true;
	};

	/**
	* Only Node has `process.nextTick` function. For browser there are
	* so many ways to polyfill it. Yaku won't do it for you, instead you
	* can choose what you prefer. For example, this project
	* [next-tick](https://github.com/medikoo/next-tick).
	* By default, Yaku will use `process.nextTick` on Node, `setTimeout` on browser.
	* @type {Function}
	* @example
	* ```js
	* var Promise = require('yaku');
	* Promise.nextTick = require('next-tick');
	* ```
	* @example
	* You can even use sync resolution if you really know what you are doing.
	* ```js
	* var Promise = require('yaku');
	* Promise.nextTick = fn => fn();
	* ```
	*/
	Yaku.nextTick = isBrowser ?
	function (fn) {
		nativePromise ?
			new nativePromise(function (resolve) { resolve(); }).then(fn) :
			setTimeout(fn);
	} :
	process.nextTick;

	// ********************** Private **********************

	Yaku._s = 1;

	/**
	* All static variable name will begin with `$`. Such as `$rejected`.
	* @private
	*/

	// ******************************* Utils ********************************

	function getSpecies () {
	return Yaku[$Symbol][$species] || $speciesKey;
	}

	function extend (src, target) {
	for (var k in target) {
		src[k] = target[k];
	}
	}

	function isObject (obj) {
	return obj && typeof obj === 'object';
	}

	function isFunction (obj) {
	return typeof obj === 'function';
	}

	function isInstanceOf (a, b) {
	return a instanceof b;
	}

	function isError (obj) {
	return isInstanceOf(obj, Err);
	}

	function ensureType (obj, fn, msg) {
	if (!fn(obj)) throw genTypeError(msg);
	}

	/**
	* Wrap a function into a try-catch.
	* @private
	* @return {Any | $tryErr}
	*/
	function tryCatcher () {
	try {
		return $tryCatchFn.apply($tryCatchThis, arguments);
	} catch (e) {
		$tryErr.e = e;
		return $tryErr;
	}
	}

	/**
	* Generate a try-catch wrapped function.
	* @private
	* @param  {Function} fn
	* @return {Function}
	*/
	function genTryCatcher (fn, self) {
	$tryCatchFn = fn;
	$tryCatchThis = self;
	return tryCatcher;
	}

	/**
	* Generate a scheduler.
	* @private
	* @param  {Integer}  initQueueSize
	* @param  {Function} fn `(Yaku, Value) ->` The schedule handler.
	* @return {Function} `(Yaku, Value) ->` The scheduler.
	*/
	function genScheduler (initQueueSize, fn) {
	/**
		* All async promise will be scheduled in
		* here, so that they can be execute on the next tick.
		* @private
		*/
	var fnQueue = Arr(initQueueSize)
		, fnQueueLen = 0;

	/**
		* Run all queued functions.
		* @private
		*/
	function flush () {
		var i = 0;
		while (i < fnQueueLen) {
			fn(fnQueue[i], fnQueue[i + 1]);
			fnQueue[i++] = $undefined;
			fnQueue[i++] = $undefined;
		}

		fnQueueLen = 0;
		if (fnQueue.length > initQueueSize) fnQueue.length = initQueueSize;
	}

	return function (v, arg) {
		fnQueue[fnQueueLen++] = v;
		fnQueue[fnQueueLen++] = arg;

		if (fnQueueLen === 2) Yaku.nextTick(flush);
	};
	}

	/**
	* Generate a iterator
	* @param  {Any} obj
	* @private
	* @return {Object || TypeError}
	*/
	function each (iterable, fn) {
	var len
		, i = 0
		, iter
		, item
		, ret
	;

	if (!iterable) throw genTypeError($invalidArgument);

	var gen = iterable[Yaku[$Symbol][$iterator]];
	if (isFunction(gen))
		iter = gen.call(iterable);
	else if (isFunction(iterable.next)) {
		iter = iterable;
	}
	else if (isInstanceOf(iterable, Arr)) {
		len = iterable.length;
		while (i < len) {
			fn(iterable[i], i++);
		}
		return i;
	} else
		throw genTypeError($invalidArgument);

	while (!(item = iter.next()).done) {
		ret = genTryCatcher(fn)(item.value, i++);
		if (ret === $tryErr) {
			isFunction(iter[$return]) && iter[$return]();
			throw ret.e;
		}
	}

	return i;
	}

	/**
	* Generate type error object.
	* @private
	* @param  {String} msg
	* @return {TypeError}
	*/
	function genTypeError (msg) {
	return new TypeError(msg);
	}

	function genTraceInfo (noTitle) {
	return (noTitle ? '' : $fromPrevious) + new Err().stack;
	}


	// *************************** Promise Helpers ****************************

	/**
	* Resolve the value returned by onFulfilled or onRejected.
	* @private
	* @param {Yaku} p1
	* @param {Yaku} p2
	*/
	var scheduleHandler = genScheduler(999, function (p1, p2) {
	var x, handler;

	// 2.2.2
	// 2.2.3
	handler = p1._s !== $rejected ? p2._onFulfilled : p2._onRejected;

	// 2.2.7.3
	// 2.2.7.4
	if (handler === $undefined) {
		settlePromise(p2, p1._s, p1._v);
		return;
	}

	// 2.2.7.1
	x = genTryCatcher(callHanler)(handler, p1._v);
	if (x === $tryErr) {
		// 2.2.7.2
		settlePromise(p2, $rejected, x.e);
		return;
	}

	settleWithX(p2, x);
	});

	var scheduleUnhandledRejection = genScheduler(9, function (p) {
	if (!hashOnRejected(p)) {
		p[$unhandled] = 1;
		emitEvent($unhandledRejection, p);
	}
	});

	function emitEvent (name, p) {
	var browserEventName = 'on' + name.toLowerCase()
		, browserHandler = root[browserEventName];

	if (process && process.listeners(name).length)
		name === $unhandledRejection ?
			process.emit(name, p._v, p) : process.emit(name, p);
	else if (browserHandler)
		browserHandler({ reason: p._v, promise: p });
	else
		Yaku[name](p._v, p);
	}

	function isYaku (val) { return val && val._s; }

	function newCapablePromise (Constructor) {
	if (isYaku(Constructor)) return new Constructor($noop);

	var p, r, j;
	p = new Constructor(function (resolve, reject) {
		if (p) throw genTypeError();

		r = resolve;
		j = reject;
	});

	ensureType(r, isFunction);
	ensureType(j, isFunction);

	return p;
	}

	/**
	* It will produce a settlePromise function to user.
	* Such as the resolve and reject in this `new Yaku (resolve, reject) ->`.
	* @private
	* @param  {Yaku} self
	* @param  {Integer} state The value is one of `$pending`, `$resolved` or `$rejected`.
	* @return {Function} `(value) -> undefined` A resolve or reject function.
	*/
	function genSettler (self, state) {
	var isCalled = false;
	return function (value) {
		if (isCalled) return;
		isCalled = true;

		if (isLongStackTrace)
			self[$settlerTrace] = genTraceInfo(true);

		if (state === $resolved)
			settleWithX(self, value);
		else
			settlePromise(self, state, value);
	};
	}

	/**
	* Link the promise1 to the promise2.
	* @private
	* @param {Yaku} p1
	* @param {Yaku} p2
	* @param {Function} onFulfilled
	* @param {Function} onRejected
	*/
	function addHandler (p1, p2, onFulfilled, onRejected) {
	// 2.2.1
	if (isFunction(onFulfilled))
		p2._onFulfilled = onFulfilled;
	if (isFunction(onRejected)) {
		if (p1[$unhandled]) emitEvent($rejectionHandled, p1);

		p2._onRejected = onRejected;
	}

	if (isLongStackTrace) p2._p = p1;
	p1[p1._c++] = p2;

	// 2.2.6
	if (p1._s !== $pending)
		scheduleHandler(p1, p2);

	// 2.2.7
	return p2;
	}

	// iterate tree
	function hashOnRejected (node) {
	// A node shouldn't be checked twice.
	if (node._umark)
		return true;
	else
		node._umark = true;

	var i = 0
		, len = node._c
		, child;

	while (i < len) {
		child = node[i++];
		if (child._onRejected || hashOnRejected(child)) return true;
	}
	}

	function genStackInfo (reason, p) {
	var stackInfo = [];

	function push (trace) {
		return stackInfo.push(trace.replace(/^\s+|\s+$/g, ''));
	}

	if (isLongStackTrace) {
		if (p[$settlerTrace])
			push(p[$settlerTrace]);

		// Hope you guys could understand how the back trace works.
		// We only have to iterate through the tree from the bottom to root.
		(function iter (node) {
			if (node && $promiseTrace in node) {
				iter(node._next);
				push(node[$promiseTrace] + '');
				iter(node._p);
			}
		})(p);
	}

	return (reason && reason.stack ? reason.stack : reason) +
		('\n' + stackInfo.join('\n')).replace($cleanStackReg, '');
	}

	function callHanler (handler, value) {
	// 2.2.5
	return handler(value);
	}

	/**
	* Resolve or reject a promise.
	* @private
	* @param  {Yaku} p
	* @param  {Integer} state
	* @param  {Any} value
	*/
	function settlePromise (p, state, value) {
	var i = 0
		, len = p._c;

	// 2.1.2
	// 2.1.3
	if (p._s === $pending) {
		// 2.1.1.1
		p._s = state;
		p._v = value;

		if (state === $rejected) {
			if (isLongStackTrace && isError(value)) {
				value.longStack = genStackInfo(value, p);
			}

			scheduleUnhandledRejection(p);
		}

		// 2.2.4
		while (i < len) {
			scheduleHandler(p, p[i++]);
		}
	}

	return p;
	}

	/**
	* Resolve or reject promise with value x. The x can also be a thenable.
	* @private
	* @param {Yaku} p
	* @param {Any | Thenable} x A normal value or a thenable.
	*/
	function settleWithX (p, x) {
	// 2.3.1
	if (x === p && x) {
		settlePromise(p, $rejected, genTypeError($promiseCircularChain));
		return p;
	}

	// 2.3.2
	// 2.3.3
	if (x !== $null && (isFunction(x) || isObject(x))) {
		// 2.3.2.1
		var xthen = genTryCatcher(getThen)(x);

		if (xthen === $tryErr) {
			// 2.3.3.2
			settlePromise(p, $rejected, xthen.e);
			return p;
		}

		if (isFunction(xthen)) {
			if (isLongStackTrace && isYaku(x))
				p._next = x;

			// Fix https://bugs.chromium.org/p/v8/issues/detail?id=4162
			if (isYaku(x))
				settleXthen(p, x, xthen);
			else
				Yaku.nextTick(function () {
					settleXthen(p, x, xthen);
				});
		} else
			// 2.3.3.4
			settlePromise(p, $resolved, x);
	} else
		// 2.3.4
		settlePromise(p, $resolved, x);

	return p;
	}

	/**
	* Try to get a promise's then method.
	* @private
	* @param  {Thenable} x
	* @return {Function}
	*/
	function getThen (x) { return x.then; }

	/**
	* Resolve then with its promise.
	* @private
	* @param  {Yaku} p
	* @param  {Thenable} x
	* @param  {Function} xthen
	*/
	function settleXthen (p, x, xthen) {
	// 2.3.3.3
	var err = genTryCatcher(xthen, x)(function (y) {
		// 2.3.3.3.3
		// 2.3.3.3.1
		x && (x = $null, settleWithX(p, y));
	}, function (r) {
		// 2.3.3.3.3
		// 2.3.3.3.2
		x && (x = $null, settlePromise(p, $rejected, r));
	});

	// 2.3.3.3.4.1
	if (err === $tryErr && x) {
		// 2.3.3.3.4.2
		settlePromise(p, $rejected, err.e);
		x = $null;
	}
	}

	root.Promise = Yaku;
})();

}

if (!("Promise"in self&&"allSettled"in self.Promise
)) {

// Promise.allSettled
/* global CreateMethodProperty, IterableToList, Promise, Type */
(function () {
	// Based on https://github.com/es-shims/Promise.allSettled/blob/main/implementation.js

	CreateMethodProperty(Promise, 'allSettled', function allSettled (iterable) {
		var C = this;
		if (Type(C) !== 'object') {
			throw new TypeError('`this` value must be an object');
		}

		var arr;
		if (Array.isArray(iterable)) {
			arr = iterable;
		} else {
			try {
				arr = IterableToList(iterable);
			} catch (_error) {
				return Promise.reject(new TypeError('Argument of Promise.allSettled is not iterable'));
			}
		}

		var promises = arr.map(function (promise) {
			var onFulfill = function (value) {
				return { status: 'fulfilled', value: value };
			};
			var onReject = function (reason) {
				return { status: 'rejected', reason: reason };
			};
			var itemPromise = C.resolve(promise);
			try {
				return itemPromise.then(onFulfill, onReject);
			} catch (e) {
				return C.reject(e);
			}
		});

		return C.all(promises);
	});
}());

}

if (!("Promise"in self&&"any"in self.Promise
)) {

// Promise.any
/* global AggregateError, CreateMethodProperty, IterableToList, Promise, Type */
(function () {
	// Based on https://github.com/es-shims/Promise.any/blob/master/implementation.js

	var identity = function (x) {
		return x;
	}

	CreateMethodProperty(Promise, 'any', function any (iterable) {
		var C = this;
		if (Type(C) !== 'object') {
			throw new TypeError('`this` value must be an object');
		}

		var arr;
		if (Array.isArray(iterable)) {
			arr = iterable;
		} else {
			try {
				arr = IterableToList(iterable);
			} catch (_error) {
				return Promise.reject(new TypeError('Argument of Promise.any is not iterable'));
			}
		}

		var thrower = function (value) {
			return C.reject(value);
		};

		var promises = arr.map(function (promise) {
			var itemPromise = C.resolve(promise);
			try {
				return itemPromise.then(thrower, identity);
			} catch (e) {
				return e;
			}
		});

		return C.all(promises).then(function (errors) {
			throw new AggregateError(errors, 'Every promise rejected')
		}, identity);
	});
}());

}

if (!("Promise"in self&&"finally"in self.Promise.prototype
)) {

// Promise.prototype.finally
/* global CreateMethodProperty, IsCallable, SpeciesConstructor, Type, Promise */
(function () {
	// Based on https://github.com/tc39/proposal-promise-finally/blob/master/polyfill.js
	var then = Function.prototype.bind.call(Function.prototype.call, Promise.prototype.then);

	var getPromise = function (C, handler) {
		return new C(function (resolve) {
			resolve(handler());
		});
	};
	// 1. Promise.prototype.finally ( onFinally )
	CreateMethodProperty(Promise.prototype, 'finally', function (onFinally) {
		// 1. Let promise be the this value.
		var promise = this;
		// 2. If Type(promise) is not Object, throw a TypeError exception.
		if (Type(promise) !== 'object') {
			throw new TypeError('Method %PromisePrototype%.finally called on incompatible receiver ' + Object.prototype.toString.call(promise));
		}
		// 3. Let C be ? SpeciesConstructor(promise, %Promise%).
		var C = SpeciesConstructor(promise, Promise);
		// 4. Assert: IsConstructor(C) is true.
		// 5. If IsCallable(onFinally) is false,
		if (IsCallable(onFinally) === false) {
			// a. Let thenFinally be onFinally.
			var thenFinally = onFinally;
			// b. Let catchFinally be onFinally.
			var catchFinally = onFinally;
			// 6. Else,
		} else {
			// a. Let thenFinally be a new built-in function object as defined in ThenFinally Function.
			thenFinally = function (x) {
				return then(getPromise(C, onFinally), function () {
					return x;
				});
			};
			// b. Let catchFinally be a new built-in function object as defined in CatchFinally Function.
			catchFinally = function (e) {
				return then(getPromise(C, onFinally), function () {
					throw e;
				});
			};
			// c. Set thenFinally and catchFinally's [[Constructor]] internal slots to C.
			// d. Set thenFinally and catchFinally's [[OnFinally]] internal slots to onFinally.
		}
		// 7. Return ? Invoke(promise, "then", « thenFinally, catchFinally »).
		return then(promise, thenFinally, catchFinally);
	});
}());

}

if (!("Symbol"in self&&"unscopables"in self.Symbol
)) {

// Symbol.unscopables
/* global Symbol */
Object.defineProperty(Symbol, 'unscopables', { value: Symbol('unscopables') });

}

if (!("Int8Array"in self&&"at"in self.Int8Array.prototype
)) {

// TypedArray.prototype.at
/* global CreateMethodProperty, Uint8Array, ToIntegerOrInfinity, ToString */
// 23.2.3.1. %TypedArray%.prototype.at ( index )
(function () {
	// In Internet Explorer 8 there is no support for square-bracket notation
	// in the TypedArrays polyfill instead so we need to use the private `_getter` method
	var typedArraysSupportIndexLookup = (function() {
		var uint8 = new Uint8Array(2);
		uint8[0] = 42;
		return uint8[0] === 42
	})

	function getTypedArrayIndex(array, index) {
		if (typedArraysSupportIndexLookup) {
			return array[index];
		} else {
			return array._getter(index);
		}
	}

	function at(index) {
		// 1. Let O be the this value.
		var O = this;
		// 2. Perform ? ValidateTypedArray(O).
		// TODO: Add ValidateTypedArray
		// 3. Let len be O.[[ArrayLength]].
		var len = O.length;
		// 4. Let relativeIndex be ? ToIntegerOrInfinity(index).
		var relativeIndex = ToIntegerOrInfinity(index);
		// 5. If relativeIndex ≥ 0, then
		// 5.a. Let k be relativeIndex.
		// 6. Else,
		// 6.a. Let k be len + relativeIndex.
		var k = relativeIndex >= 0 ? relativeIndex : len + relativeIndex;
		// 7. If k < 0 or k ≥ len, return undefined.
		if (k < 0 || k >= len) return undefined;
		// 8. Return ! Get(O, ! ToString(𝔽(k))).
		// return Get(O, ToString(k));
		return getTypedArrayIndex(O, ToString(k));
	}

	if ('__proto__' in self.Int8Array.prototype) {
		// set this on the underlying "TypedArrayPrototype", which is shared with all "TypedArray" subclasses
		CreateMethodProperty(self.Int8Array.prototype.__proto__, 'at', at);
	} else {
		CreateMethodProperty(self.Int8Array.prototype, 'at', at);
		CreateMethodProperty(self.Uint8Array.prototype, 'at', at);
		CreateMethodProperty(self.Uint8ClampedArray.prototype, 'at', at);
		CreateMethodProperty(self.Int16Array.prototype, 'at', at);
		CreateMethodProperty(self.Uint16Array.prototype, 'at', at);
		CreateMethodProperty(self.Int32Array.prototype, 'at', at);
		CreateMethodProperty(self.Uint32Array.prototype, 'at', at);
		CreateMethodProperty(self.Float32Array.prototype, 'at', at);
		CreateMethodProperty(self.Float64Array.prototype, 'at', at);
	}
})();

}

if (!((function(r){"use strict"
try{var a=new r.URL("http://example.com")
if("href"in a&&"searchParams"in a){var e=new URL("http://example.com")
if(e.search="a=1&b=2","http://example.com/?a=1&b=2"===e.href&&(e.search="","http://example.com/"===e.href)){if(!("sort"in r.URLSearchParams.prototype))return!1
var t=new r.URLSearchParams("a=1"),n=new r.URLSearchParams(t)
if("a=1"!==String(n))return!1
var c=new r.URLSearchParams({a:"1"})
if("a=1"!==String(c))return!1
var h=new r.URLSearchParams([["a","1"]])
return"a=1"===String(h)}}return!1}catch(m){return!1}})(self)
)) {

// URL
/* global Symbol */
// URL Polyfill
// Draft specification: https://url.spec.whatwg.org

// Notes:
// - Primarily useful for parsing URLs and modifying query parameters
// - Should work in IE8+ and everything more modern, with es5.js polyfills

(function (global) {
	'use strict';

	function isSequence(o) {
		if (!o) return false;
		if ('Symbol' in global && 'iterator' in global.Symbol &&
				typeof o[Symbol.iterator] === 'function') return true;
		if (Array.isArray(o)) return true;
		return false;
	}

	;(function() { // eslint-disable-line no-extra-semi

		// Browsers may have:
		// * No global URL object
		// * URL with static methods only - may have a dummy constructor
		// * URL with members except searchParams
		// * Full URL API support
		var origURL = global.URL;
		var nativeURL;
		try {
			if (origURL) {
				nativeURL = new global.URL('http://example.com');
				if ('searchParams' in nativeURL) {
					var url = new URL('http://example.com');
					url.search = 'a=1&b=2';
					if (url.href === 'http://example.com/?a=1&b=2') {
						url.search = '';
						if (url.href === 'http://example.com/') {
							return;
						}
					}
				}
				if (!('href' in nativeURL)) {
					nativeURL = undefined;
				}
				nativeURL = undefined;
			}
		// eslint-disable-next-line no-empty
		} catch (_) {}

		// NOTE: Doesn't do the encoding/decoding dance
		function urlencoded_serialize(pairs) {
			var output = '', first = true;
			pairs.forEach(function (pair) {
				var name = encodeURIComponent(pair.name);
				var value = encodeURIComponent(pair.value);
				if (!first) output += '&';
				output += name + '=' + value;
				first = false;
			});
			return output.replace(/%20/g, '+');
		}

		// NOTE: URL API accepts inputs like `?x=%`, `?x=%a`, and `?x=%2sf`
		// as literals, whereas legacy decodeURIComponent would throw
		// URIError (as specified by ECMAScript).
		//
		// https://url.spec.whatwg.org/#percent-decode
		function percent_decode(bytes) {
			// NOTE:
			// * Only decode pairs of exactly two bytes.
			// * Only decode bytes in range 0-9, A-F, a-f.
			// * Decode as many pairs at the same time as possible.
			//   This is because we're not actually operating on internal bytes,
			//   but on a valid UTF string, and the string must remain valid at
			//   all times, and decodeURIComponent will throw when attempting to
			//   decode a byte that represents only part of a codepoint, for example
			//   "%7F" separately from "%7F%C3%BF".
			return bytes.replace(/((%[0-9A-Fa-f]{2})*)/g, function (_, m) {
				return decodeURIComponent(m);
			});
		}

		// NOTE: Doesn't do the encoding/decoding dance
		//
		// https://url.spec.whatwg.org/#concept-urlencoded-parser
		function urlencoded_parse(input, isindex) {
			var sequences = input.split('&');
			if (isindex && sequences[0].indexOf('=') === -1)
				sequences[0] = '=' + sequences[0];
			var pairs = [];
			sequences.forEach(function (bytes) {
				if (bytes.length === 0) return;
				var index = bytes.indexOf('=');
				if (index !== -1) {
					var name = bytes.substring(0, index);
					var value = bytes.substring(index + 1);
				} else {
					name = bytes;
					value = '';
				}
				name = name.replace(/\+/g, ' ');
				value = value.replace(/\+/g, ' ');
				pairs.push({ name: name, value: value });
			});
			var output = [];
			pairs.forEach(function (pair) {
				output.push({
					name: percent_decode(pair.name),
					value: percent_decode(pair.value)
				});
			});
			return output;
		}

		function URLUtils(url) {
			if (nativeURL)
				return new origURL(url);
			var anchor = document.createElement('a');
			anchor.href = url;
			return anchor;
		}

		function URLSearchParams(init) {
			var $this = this;
			this._list = [];

			if (init === undefined || init === null) {
				// no-op
			} else if (init instanceof URLSearchParams) {
				// In ES6 init would be a sequence, but special case for ES5.
				this._list = urlencoded_parse(String(init));
			} else if (typeof init === 'object' && isSequence(init)) {
				Array.from(init).forEach(function(e) {
					if (!isSequence(e)) throw TypeError();
					var nv = Array.from(e);
					if (nv.length !== 2) throw TypeError();
					$this._list.push({name: String(nv[0]), value: String(nv[1])});
				});
			} else if (typeof init === 'object' && init) {
				Object.keys(init).forEach(function(key) {
					$this._list.push({name: String(key), value: String(init[key])});
				});
			} else {
				init = String(init);
				if (init.substring(0, 1) === '?')
					init = init.substring(1);
				this._list = urlencoded_parse(init);
			}

			this._url_object = null;
			this._setList = function (list) { if (!updating) $this._list = list; };

			var updating = false;
			this._update_steps = function() {
				if (updating) return;
				updating = true;

				if (!$this._url_object) return;

				// Partial workaround for IE issue with 'about:'
				if ($this._url_object.protocol === 'about:' &&
						$this._url_object.pathname.indexOf('?') !== -1) {
					$this._url_object.pathname = $this._url_object.pathname.split('?')[0];
				}

				$this._url_object.search = urlencoded_serialize($this._list);

				updating = false;
			};
		}


		Object.defineProperties(URLSearchParams.prototype, {
			append: {
				value: function (name, value) {
					this._list.push({ name: name, value: value });
					this._update_steps();
				}, writable: true, enumerable: true, configurable: true
			},

			'delete': {
				value: function (name) {
					for (var i = 0; i < this._list.length;) {
						if (this._list[i].name === name)
							this._list.splice(i, 1);
						else
							++i;
					}
					this._update_steps();
				}, writable: true, enumerable: true, configurable: true
			},

			get: {
				value: function (name) {
					for (var i = 0; i < this._list.length; ++i) {
						if (this._list[i].name === name)
							return this._list[i].value;
					}
					return null;
				}, writable: true, enumerable: true, configurable: true
			},

			getAll: {
				value: function (name) {
					var result = [];
					for (var i = 0; i < this._list.length; ++i) {
						if (this._list[i].name === name)
							result.push(this._list[i].value);
					}
					return result;
				}, writable: true, enumerable: true, configurable: true
			},

			has: {
				value: function (name) {
					for (var i = 0; i < this._list.length; ++i) {
						if (this._list[i].name === name)
							return true;
					}
					return false;
				}, writable: true, enumerable: true, configurable: true
			},

			set: {
				value: function (name, value) {
					var found = false;
					for (var i = 0; i < this._list.length;) {
						if (this._list[i].name === name) {
							if (!found) {
								this._list[i].value = value;
								found = true;
								++i;
							} else {
								this._list.splice(i, 1);
							}
						} else {
							++i;
						}
					}

					if (!found)
						this._list.push({ name: name, value: value });

					this._update_steps();
				}, writable: true, enumerable: true, configurable: true
			},

			entries: {
				value: function() { return new Iterator(this._list, 'key+value'); },
				writable: true, enumerable: true, configurable: true
			},

			keys: {
				value: function() { return new Iterator(this._list, 'key'); },
				writable: true, enumerable: true, configurable: true
			},

			values: {
				value: function() { return new Iterator(this._list, 'value'); },
				writable: true, enumerable: true, configurable: true
			},

			forEach: {
				value: function(callback) {
					var thisArg = (arguments.length > 1) ? arguments[1] : undefined;
					this._list.forEach(function(pair) {
						callback.call(thisArg, pair.value, pair.name);
					});

				}, writable: true, enumerable: true, configurable: true
			},

			toString: {
				value: function () {
					return urlencoded_serialize(this._list);
				}, writable: true, enumerable: false, configurable: true
			},

			sort: {
				value: function sort() {
					var entries = this.entries();
					var entry = entries.next();
					var keys = [];
					var values = {};

					while (!entry.done) {
						var value = entry.value;
						var key = value[0];
						keys.push(key);
						if (!(Object.prototype.hasOwnProperty.call(values, key))) {
							values[key] = [];
						}
						values[key].push(value[1]);
						entry = entries.next();
					}

					keys.sort();
					for (var i = 0; i < keys.length; i++) {
						this["delete"](keys[i]);
					}
					for (var j = 0; j < keys.length; j++) {
						key = keys[j];
						this.append(key, values[key].shift());
					}
				}
			}
		});

		function Iterator(source, kind) {
			var index = 0;
			this.next = function() {
				if (index >= source.length)
					return {done: true, value: undefined};
				var pair = source[index++];
				return {done: false, value:
								kind === 'key' ? pair.name :
								kind === 'value' ? pair.value :
								[pair.name, pair.value]};
			};
		}

		if ('Symbol' in global && 'iterator' in global.Symbol) {
			Object.defineProperty(URLSearchParams.prototype, global.Symbol.iterator, {
				value: URLSearchParams.prototype.entries,
				writable: true, enumerable: true, configurable: true});
			Object.defineProperty(Iterator.prototype, global.Symbol.iterator, {
				value: function() { return this; },
				writable: true, enumerable: true, configurable: true});
		}

		function URL(url, base) {
			if (!(this instanceof global.URL))
				throw new TypeError("Failed to construct 'URL': Please use the 'new' operator.");

			if (base) {
				url = (function () {
					if (nativeURL) return new origURL(url, base).href;
					var iframe;
					try {
						var doc;
						// Use another document/base tag/anchor for relative URL resolution, if possible
						if (Object.prototype.toString.call(window.operamini) === "[object OperaMini]") {
							iframe = document.createElement('iframe');
							iframe.style.display = 'none';
							document.documentElement.appendChild(iframe);
							doc = iframe.contentWindow.document;
						} else if (document.implementation && document.implementation.createHTMLDocument) {
							doc = document.implementation.createHTMLDocument('');
						} else if (document.implementation && document.implementation.createDocument) {
							doc = document.implementation.createDocument('http://www.w3.org/1999/xhtml', 'html', null);
							doc.documentElement.appendChild(doc.createElement('head'));
							doc.documentElement.appendChild(doc.createElement('body'));
						} else if (window.ActiveXObject) {
							doc = new window.ActiveXObject('htmlfile');
							doc.write('<head></head><body></body>');
							doc.close();
						}

						if (!doc) throw Error('base not supported');

						var baseTag = doc.createElement('base');
						baseTag.href = base;
						doc.getElementsByTagName('head')[0].appendChild(baseTag);
						var anchor = doc.createElement('a');
						anchor.href = url;
						return anchor.href;
					} finally {
						if (iframe)
							iframe.parentNode.removeChild(iframe);
					}
				}());
			}

			// An inner object implementing URLUtils (either a native URL
			// object or an HTMLAnchorElement instance) is used to perform the
			// URL algorithms. With full ES5 getter/setter support, return a
			// regular object For IE8's limited getter/setter support, a
			// different HTMLAnchorElement is returned with properties
			// overridden

			var instance = URLUtils(url || '');

			// Detect for ES5 getter/setter support
			// (an Object.defineProperties polyfill that doesn't support getters/setters may throw)
			var ES5_GET_SET = (function() {
				if (!('defineProperties' in Object)) return false;
				try {
					var obj = {};
					Object.defineProperties(obj, { prop: { get: function () { return true; } } });
					return obj.prop;
				} catch (_) {
					return false;
				}
			}());

			var self = ES5_GET_SET ? this : document.createElement('a');



			var query_object = new URLSearchParams(
				instance.search ? instance.search.substring(1) : null);
			query_object._url_object = self;

			Object.defineProperties(self, {
				href: {
					get: function () { return instance.href; },
					set: function (v) { instance.href = v; tidy_instance(); update_steps(); },
					enumerable: true, configurable: true
				},
				origin: {
					get: function () {
						if (this.protocol.toLowerCase() === "data:") {
							return null
						}

						if ('origin' in instance) return instance.origin;
						return this.protocol + '//' + this.host;
					},
					enumerable: true, configurable: true
				},
				protocol: {
					get: function () { return instance.protocol; },
					set: function (v) { instance.protocol = v; },
					enumerable: true, configurable: true
				},
				username: {
					get: function () { return instance.username; },
					set: function (v) { instance.username = v; },
					enumerable: true, configurable: true
				},
				password: {
					get: function () { return instance.password; },
					set: function (v) { instance.password = v; },
					enumerable: true, configurable: true
				},
				host: {
					get: function () {
						// IE returns default port in |host|
						var re = {'http:': /:80$/, 'https:': /:443$/, 'ftp:': /:21$/}[instance.protocol];
						return re ? instance.host.replace(re, '') : instance.host;
					},
					set: function (v) { instance.host = v; },
					enumerable: true, configurable: true
				},
				hostname: {
					get: function () { return instance.hostname; },
					set: function (v) { instance.hostname = v; },
					enumerable: true, configurable: true
				},
				port: {
					get: function () { return instance.port; },
					set: function (v) { instance.port = v; },
					enumerable: true, configurable: true
				},
				pathname: {
					get: function () {
						// IE does not include leading '/' in |pathname|
						if (instance.pathname.charAt(0) !== '/') return '/' + instance.pathname;
						return instance.pathname;
					},
					set: function (v) { instance.pathname = v; },
					enumerable: true, configurable: true
				},
				search: {
					get: function () { return instance.search; },
					set: function (v) {
						if (instance.search === v) return;
						instance.search = v; tidy_instance(); update_steps();
					},
					enumerable: true, configurable: true
				},
				searchParams: {
					get: function () { return query_object; },
					enumerable: true, configurable: true
				},
				hash: {
					get: function () { return instance.hash; },
					set: function (v) { instance.hash = v; tidy_instance(); },
					enumerable: true, configurable: true
				},
				toString: {
					value: function() { return instance.toString(); },
					enumerable: false, configurable: true
				},
				valueOf: {
					value: function() { return instance.valueOf(); },
					enumerable: false, configurable: true
				}
			});

			function tidy_instance() {
				var href = instance.href.replace(/#$|\?$|\?(?=#)/g, '');
				if (instance.href !== href)
					instance.href = href;
			}

			function update_steps() {
				query_object._setList(instance.search ? urlencoded_parse(instance.search.substring(1)) : []);
				query_object._update_steps();
			}

			return self;
		}

		if (origURL) {
			for (var i in origURL) {
				if (Object.prototype.hasOwnProperty.call(origURL, i) && typeof origURL[i] === 'function')
					URL[i] = origURL[i];
			}
		}

		global.URL = URL;
		global.URLSearchParams = URLSearchParams;
	})();

	// Patch native URLSearchParams constructor to handle sequences/records
	// if necessary.
	(function() {
		if (new global.URLSearchParams([['a', 1]]).get('a') === '1' &&
				new global.URLSearchParams({a: 1}).get('a') === '1')
			return;
		var orig = global.URLSearchParams;
		global.URLSearchParams = function(init) {
			if (init && typeof init === 'object' && isSequence(init)) {
				var o = new orig();
				Array.from(init).forEach(function (e) {
					if (!isSequence(e)) throw TypeError();
					var nv = Array.from(e);
					if (nv.length !== 2) throw TypeError();
					o.append(nv[0], nv[1]);
				});
				return o;
			} else if (init && typeof init === 'object') {
				o = new orig();
				Object.keys(init).forEach(function(key) {
					o.set(key, init[key]);
				});
				return o;
			} else {
				return new orig(init);
			}
		};
	})();

}(self));

}

if (!((function(){try{if("WeakMap"in self&&0===self.WeakMap.length){var e={},t=new self.WeakMap([[e,"test"]])
return"test"===t.get(e)&&!1===t["delete"](0)}return!1}catch(a){return!1}})()
)) {

// WeakMap
/* globals Symbol, OrdinaryCreateFromConstructor, IsCallable, GetIterator, IteratorStep, IteratorValue, IteratorClose, Get, Call, CreateMethodProperty, Type, SameValue */
(function (global) {
	// Deleted map items mess with iterator pointers, so rather than removing them mark them as deleted. Can't use undefined or null since those both valid keys so use a private symbol.
	var undefMarker = Symbol('undef');
	// 23.3.1.1 WeakMap ( [ iterable ] )
	var WeakMap = function WeakMap(/* iterable */) {
		// 1. If NewTarget is undefined, throw a TypeError exception.
		if (!(this instanceof WeakMap)) {
			throw new TypeError('Constructor WeakMap requires "new"');
		}
		// 2. Let map be ? OrdinaryCreateFromConstructor(NewTarget, "%WeakMapPrototype%", « [[WeakMapData]] »).
		var map = OrdinaryCreateFromConstructor(this, WeakMap.prototype, {
			_keys: [],
			_values: [],
			_es6WeakMap: true
		});

		// 3. Set map.[[WeakMapData]] to a new empty List.
		// Polyfill.io - This step was done as part of step two.

		// 4. If iterable is not present, let iterable be undefined.
		var iterable = arguments.length > 0 ? arguments[0] : undefined;

		// 5. If iterable is either undefined or null, return map.
		if (iterable === null || iterable === undefined) {
			return map;
		}

		// 6. Let adder be ? Get(map, "set").
		var adder = Get(map, "set");

		// 7. If IsCallable(adder) is false, throw a TypeError exception.
		if (!IsCallable(adder)) {
			throw new TypeError("WeakMap.prototype.set is not a function");
		}

		// 8. Let iteratorRecord be ? GetIterator(iterable).
		try {
			var iteratorRecord = GetIterator(iterable);
			// 9. Repeat,
			// eslint-disable-next-line no-constant-condition
			while (true) {
				// a. Let next be ? IteratorStep(iteratorRecord).
				var next = IteratorStep(iteratorRecord);
				// b. If next is false, return map.
				if (next === false) {
					return map;
				}
				// c. Let nextItem be ? IteratorValue(next).
				var nextItem = IteratorValue(next);
				// d. If Type(nextItem) is not Object, then
				if (Type(nextItem) !== 'object') {
					// i. Let error be Completion{[[Type]]: throw, [[Value]]: a newly created TypeError object, [[Target]]: empty}.
					try {
						throw new TypeError('Iterator value ' + nextItem + ' is not an entry object');
					} catch (error) {
						// ii. Return ? IteratorClose(iteratorRecord, error).
						return IteratorClose(iteratorRecord, error);
					}
				}
				try {
					// Polyfill.io - The try catch accounts for steps: f, h, and j.

					// e. Let k be Get(nextItem, "0").
					var k = Get(nextItem, "0");
					// f. If k is an abrupt completion, return ? IteratorClose(iteratorRecord, k).
					// g. Let v be Get(nextItem, "1").
					var v = Get(nextItem, "1");
					// h. If v is an abrupt completion, return ? IteratorClose(iteratorRecord, v).
					// i. Let status be Call(adder, map, « k.[[Value]], v.[[Value]] »).
					Call(adder, map, [k, v]);
				} catch (e) {
					// j. If status is an abrupt completion, return ? IteratorClose(iteratorRecord, status).
					return IteratorClose(iteratorRecord, e);
				}
			}
		} catch (e) {
			// Polyfill.io - For user agents which do not have iteration methods on argument objects or arrays, we can special case those.
			if (Array.isArray(iterable) ||
				Object.prototype.toString.call(iterable) === '[object Arguments]' ||
				// IE 7 & IE 8 return '[object Object]' for the arguments object, we can detect by checking for the existence of the callee property
				(!!iterable.callee)) {
				var index;
				var length = iterable.length;
				for (index = 0; index < length; index++) {
					k = iterable[index][0];
					v = iterable[index][1];
					Call(adder, map, [k, v]);
				}
			}
		}
		return map;
	};

	// 23.3.2.1 WeakMap.prototype
	// The initial value of WeakMap.prototype is the intrinsic object %WeakMapPrototype%.
	// This property has the attributes { [[Writable]]: false, [[Enumerable]]: false, [[Configurable]]: false }.
	Object.defineProperty(WeakMap, 'prototype', {
		configurable: false,
		enumerable: false,
		writable: false,
		value: {}
	});

	// 23.3.3.1 WeakMap.prototype.constructor
	CreateMethodProperty(WeakMap.prototype, 'constructor', WeakMap);

	// 23.3.3.2 WeakMap.prototype.delete ( key )
	CreateMethodProperty(WeakMap.prototype, 'delete', function (key) {
		// 1. Let M be the this value.
		var M = this;
		// 2. If Type(M) is not Object, throw a TypeError exception.
		if (Type(M) !== 'object') {
			throw new TypeError('Method WeakMap.prototype.clear called on incompatible receiver ' + Object.prototype.toString.call(M));
		}
		// 3. If M does not have a [[WeakMapData]] internal slot, throw a TypeError exception.
		if (M._es6WeakMap !== true) {
			throw new TypeError('Method WeakMap.prototype.clear called on incompatible receiver ' + Object.prototype.toString.call(M));
		}
		// 4. Let entries be the List that is M.[[WeakMapData]].
		var entries = M._keys;
		// 5. If Type(key) is not Object, return false.
		if (Type(key) !== 'object') {
			return false;
		}
		// 6. For each Record {[[Key]], [[Value]]} p that is an element of entries, do
		for (var i = 0; i < entries.length; i++) {
			// a. If p.[[Key]] is not empty and SameValue(p.[[Key]], key) is true, then
			if (M._keys[i] !== undefMarker && SameValue(M._keys[i], key)) {
				// i. Set p.[[Key]] to empty.
				this._keys[i] = undefMarker;
				// ii. Set p.[[Value]] to empty.
				this._values[i] = undefMarker;
				this._size = --this._size;
				// iii. Return true.
				return true;
			}
		}
		// 7. Return false.
		return false;
	});

	// 23.3.3.3 WeakMap.prototype.get ( key )
	CreateMethodProperty(WeakMap.prototype, 'get', function get(key) {
		// 1. Let M be the this value.
		var M = this;
		// 2. If Type(M) is not Object, throw a TypeError exception.
		if (Type(M) !== 'object') {
			throw new TypeError('Method WeakMap.prototype.get called on incompatible receiver ' + Object.prototype.toString.call(M));
		}
		// 3. If M does not have a [[WeakMapData]] internal slot, throw a TypeError exception.
		if (M._es6WeakMap !== true) {
			throw new TypeError('Method WeakMap.prototype.get called on incompatible receiver ' + Object.prototype.toString.call(M));
		}
		// 4. Let entries be the List that is M.[[WeakMapData]].
		var entries = M._keys;
		// 5. If Type(key) is not Object, return undefined.
		if (Type(key) !== 'object') {
			return undefined;
		}
		// 6. For each Record {[[Key]], [[Value]]} p that is an element of entries, do
		for (var i = 0; i < entries.length; i++) {
			// a. If p.[[Key]] is not empty and SameValue(p.[[Key]], key) is true, return p.[[Value]].
			if (M._keys[i] !== undefMarker && SameValue(M._keys[i], key)) {
				return M._values[i];
			}
		}
		// 7. Return undefined.
		return undefined;
	});

	// 23.3.3.4 WeakMap.prototype.has ( key )
	CreateMethodProperty(WeakMap.prototype, 'has', function has(key) {
		// 1. Let M be the this value.
		var M = this;
		// 2. If Type(M) is not Object, throw a TypeError exception.
		if (typeof M !== 'object') {
			throw new TypeError('Method WeakMap.prototype.has called on incompatible receiver ' + Object.prototype.toString.call(M));
		}
		// 3. If M does not have a [[WeakMapData]] internal slot, throw a TypeError exception.
		if (M._es6WeakMap !== true) {
			throw new TypeError('Method WeakMap.prototype.has called on incompatible receiver ' + Object.prototype.toString.call(M));
		}
		// 4. Let entries be the List that is M.[[WeakMapData]].
		var entries = M._keys;
		// 5. If Type(key) is not Object, return false.
		if (Type(key) !== 'object') {
			return false;
		}
		// 6. For each Record {[[Key]], [[Value]]} p that is an element of entries, do
		for (var i = 0; i < entries.length; i++) {
			// a. If p.[[Key]] is not empty and SameValue(p.[[Key]], key) is true, return true.
			if (M._keys[i] !== undefMarker && SameValue(M._keys[i], key)) {
				return true;
			}
		}
		// 7. Return false.
		return false;
	});

	// 23.3.3.5 WeakMap.prototype.set ( key, value )
	CreateMethodProperty(WeakMap.prototype, 'set', function set(key, value) {
		// 1. Let M be the this value.
		var M = this;
		// 2. If Type(M) is not Object, throw a TypeError exception.
		if (Type(M) !== 'object') {
			throw new TypeError('Method WeakMap.prototype.set called on incompatible receiver ' + Object.prototype.toString.call(M));
		}
		// 3. If M does not have a [[WeakMapData]] internal slot, throw a TypeError exception.
		if (M._es6WeakMap !== true) {
			throw new TypeError('Method WeakMap.prototype.set called on incompatible receiver ' + Object.prototype.toString.call(M));
		}
		// 4. Let entries be the List that is M.[[WeakMapData]].
		var entries = M._keys;
		// 5. If Type(key) is not Object, throw a TypeError exception.
		if (Type(key) !== 'object') {
			throw new TypeError("Invalid value used as weak map key");
		}
		// 6. For each Record {[[Key]], [[Value]]} p that is an element of entries, do
		for (var i = 0; i < entries.length; i++) {
			// a. If p.[[Key]] is not empty and SameValue(p.[[Key]], key) is true, then
			if (M._keys[i] !== undefMarker && SameValue(M._keys[i], key)) {
				// i. Set p.[[Value]] to value.
				M._values[i] = value;
				// ii. Return M.
				return M;
			}
		}
		// 7. Let p be the Record {[[Key]]: key, [[Value]]: value}.
		var p = {
			'[[Key]]': key,
			'[[Value]]': value
		};
		// 8. Append p as the last element of entries.
		M._keys.push(p['[[Key]]']);
		M._values.push(p['[[Value]]']);
		// 9. Return M.
		return M;
	});

	// 23.3.3.6 WeakMap.prototype [ @@toStringTag ]
	// The initial value of the @@toStringTag property is the String value "WeakMap".
	// This property has the attributes { [[Writable]]: false, [[Enumerable]]: false, [[Configurable]]: true }.
	Object.defineProperty(WeakMap.prototype, Symbol.toStringTag, {
		configurable: true,
		enumerable: false,
		writable: false,
		value: 'WeakMap'
	});

	// Polyfill.io - Safari 8 implements WeakMap.name but as a non-writable property, which means it would throw an error if we try and write to it here.
	if (!('name' in WeakMap)) {
		// 19.2.4.2 name
		Object.defineProperty(WeakMap, 'name', {
			configurable: true,
			enumerable: false,
			writable: false,
			value: 'WeakMap'
		});
	}

	// Export the object
	try {
		CreateMethodProperty(global, 'WeakMap', WeakMap);
	} catch (e) {
		// IE8 throws an error here if we set enumerable to false.
		// More info on table 2: https://msdn.microsoft.com/en-us/library/dd229916(v=vs.85).aspx
		global.WeakMap = WeakMap;
	}
}(self));

}

if (!("Intl"in self&&"Locale"in self.Intl
)) {

// Intl.Locale
(function() {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __markAsModule = function(target) {
    return __defProp(target, "__esModule", {value: true});
  };
  var __commonJS = function(cb, mod) {
    return function __require() {
      return mod || (0, cb[Object.keys(cb)[0]])((mod = {exports: {}}).exports, mod), mod.exports;
    };
  };
  var __reExport = function(target, module, desc) {
    if (module && typeof module === "object" || typeof module === "function")
      for (var keys = __getOwnPropNames(module), i = 0, n = keys.length, key; i < n; i++) {
        key = keys[i];
        if (!__hasOwnProp.call(target, key) && key !== "default")
          __defProp(target, key, {get: function(k) {
            return module[k];
          }.bind(null, key), enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable});
      }
    return target;
  };
  var __toModule = function(module) {
    return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", module && module.__esModule && "default" in module ? {get: function() {
      return module.default;
    }, enumerable: true} : {value: module, enumerable: true})), module);
  };

  // node_modules/tslib/tslib.js
  var require_tslib = __commonJS({
    "node_modules/tslib/tslib.js": function(exports, module) {
      var __extends2;
      var __assign5;
      var __rest;
      var __decorate;
      var __param;
      var __metadata;
      var __awaiter;
      var __generator;
      var __exportStar;
      var __values;
      var __read;
      var __spread;
      var __spreadArrays;
      var __spreadArray2;
      var __await;
      var __asyncGenerator;
      var __asyncDelegator;
      var __asyncValues;
      var __makeTemplateObject;
      var __importStar;
      var __importDefault;
      var __classPrivateFieldGet;
      var __classPrivateFieldSet;
      var __createBinding;
      (function(factory) {
        var root = typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : {};
        if (typeof define === "function" && define.amd) {
          define("tslib", ["exports"], function(exports2) {
            factory(createExporter(root, createExporter(exports2)));
          });
        } else if (typeof module === "object" && typeof module.exports === "object") {
          factory(createExporter(root, createExporter(module.exports)));
        } else {
          factory(createExporter(root));
        }
        function createExporter(exports2, previous) {
          if (exports2 !== root) {
            if (typeof Object.create === "function") {
              Object.defineProperty(exports2, "__esModule", {value: true});
            } else {
              exports2.__esModule = true;
            }
          }
          return function(id, v) {
            return exports2[id] = previous ? previous(id, v) : v;
          };
        }
      })(function(exporter) {
        var extendStatics = Object.setPrototypeOf || {__proto__: []} instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b)
            if (Object.prototype.hasOwnProperty.call(b, p))
              d[p] = b[p];
        };
        __extends2 = function(d, b) {
          if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
          extendStatics(d, b);
          function __() {
            this.constructor = d;
          }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
        __assign5 = Object.assign || function(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s)
              if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
          }
          return t;
        };
        __rest = function(s, e) {
          var t = {};
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
              t[p] = s[p];
          if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
              if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
            }
          return t;
        };
        __decorate = function(decorators, target, key, desc) {
          var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
          if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
        __param = function(paramIndex, decorator) {
          return function(target, key) {
            decorator(target, key, paramIndex);
          };
        };
        __metadata = function(metadataKey, metadataValue) {
          if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
        };
        __awaiter = function(thisArg, _arguments, P, generator) {
          function adopt(value) {
            return value instanceof P ? value : new P(function(resolve) {
              resolve(value);
            });
          }
          return new (P || (P = Promise))(function(resolve, reject) {
            function fulfilled(value) {
              try {
                step(generator.next(value));
              } catch (e) {
                reject(e);
              }
            }
            function rejected(value) {
              try {
                step(generator["throw"](value));
              } catch (e) {
                reject(e);
              }
            }
            function step(result) {
              result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
            }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
          });
        };
        __generator = function(thisArg, body) {
          var _ = {label: 0, sent: function() {
            if (t[0] & 1)
              throw t[1];
            return t[1];
          }, trys: [], ops: []}, f, y, t, g;
          return g = {next: verb(0), "throw": verb(1), "return": verb(2)}, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
            return this;
          }), g;
          function verb(n) {
            return function(v) {
              return step([n, v]);
            };
          }
          function step(op) {
            if (f)
              throw new TypeError("Generator is already executing.");
            while (_)
              try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                  return t;
                if (y = 0, t)
                  op = [op[0] & 2, t.value];
                switch (op[0]) {
                  case 0:
                  case 1:
                    t = op;
                    break;
                  case 4:
                    _.label++;
                    return {value: op[1], done: false};
                  case 5:
                    _.label++;
                    y = op[1];
                    op = [0];
                    continue;
                  case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                  default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                      _ = 0;
                      continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                      _.label = op[1];
                      break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                      _.label = t[1];
                      t = op;
                      break;
                    }
                    if (t && _.label < t[2]) {
                      _.label = t[2];
                      _.ops.push(op);
                      break;
                    }
                    if (t[2])
                      _.ops.pop();
                    _.trys.pop();
                    continue;
                }
                op = body.call(thisArg, _);
              } catch (e) {
                op = [6, e];
                y = 0;
              } finally {
                f = t = 0;
              }
            if (op[0] & 5)
              throw op[1];
            return {value: op[0] ? op[1] : void 0, done: true};
          }
        };
        __exportStar = function(m, o) {
          for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
              __createBinding(o, m, p);
        };
        __createBinding = Object.create ? function(o, m, k, k2) {
          if (k2 === void 0)
            k2 = k;
          Object.defineProperty(o, k2, {enumerable: true, get: function() {
            return m[k];
          }});
        } : function(o, m, k, k2) {
          if (k2 === void 0)
            k2 = k;
          o[k2] = m[k];
        };
        __values = function(o) {
          var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
          if (m)
            return m.call(o);
          if (o && typeof o.length === "number")
            return {
              next: function() {
                if (o && i >= o.length)
                  o = void 0;
                return {value: o && o[i++], done: !o};
              }
            };
          throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
        };
        __read = function(o, n) {
          var m = typeof Symbol === "function" && o[Symbol.iterator];
          if (!m)
            return o;
          var i = m.call(o), r, ar = [], e;
          try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
              ar.push(r.value);
          } catch (error) {
            e = {error: error};
          } finally {
            try {
              if (r && !r.done && (m = i["return"]))
                m.call(i);
            } finally {
              if (e)
                throw e.error;
            }
          }
          return ar;
        };
        __spread = function() {
          for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
          return ar;
        };
        __spreadArrays = function() {
          for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
          for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
              r[k] = a[j];
          return r;
        };
        __spreadArray2 = function(to, from) {
          for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
            to[j] = from[i];
          return to;
        };
        __await = function(v) {
          return this instanceof __await ? (this.v = v, this) : new __await(v);
        };
        __asyncGenerator = function(thisArg, _arguments, generator) {
          if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
          var g = generator.apply(thisArg, _arguments || []), i, q = [];
          return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
            return this;
          }, i;
          function verb(n) {
            if (g[n])
              i[n] = function(v) {
                return new Promise(function(a, b) {
                  q.push([n, v, a, b]) > 1 || resume(n, v);
                });
              };
          }
          function resume(n, v) {
            try {
              step(g[n](v));
            } catch (e) {
              settle(q[0][3], e);
            }
          }
          function step(r) {
            r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
          }
          function fulfill(value) {
            resume("next", value);
          }
          function reject(value) {
            resume("throw", value);
          }
          function settle(f, v) {
            if (f(v), q.shift(), q.length)
              resume(q[0][0], q[0][1]);
          }
        };
        __asyncDelegator = function(o) {
          var i, p;
          return i = {}, verb("next"), verb("throw", function(e) {
            throw e;
          }), verb("return"), i[Symbol.iterator] = function() {
            return this;
          }, i;
          function verb(n, f) {
            i[n] = o[n] ? function(v) {
              return (p = !p) ? {value: __await(o[n](v)), done: n === "return"} : f ? f(v) : v;
            } : f;
          }
        };
        __asyncValues = function(o) {
          if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
          var m = o[Symbol.asyncIterator], i;
          return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
            return this;
          }, i);
          function verb(n) {
            i[n] = o[n] && function(v) {
              return new Promise(function(resolve, reject) {
                v = o[n](v), settle(resolve, reject, v.done, v.value);
              });
            };
          }
          function settle(resolve, reject, d, v) {
            Promise.resolve(v).then(function(v2) {
              resolve({value: v2, done: d});
            }, reject);
          }
        };
        __makeTemplateObject = function(cooked, raw) {
          if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", {value: raw});
          } else {
            cooked.raw = raw;
          }
          return cooked;
        };
        var __setModuleDefault = Object.create ? function(o, v) {
          Object.defineProperty(o, "default", {enumerable: true, value: v});
        } : function(o, v) {
          o["default"] = v;
        };
        __importStar = function(mod) {
          if (mod && mod.__esModule)
            return mod;
          var result = {};
          if (mod != null) {
            for (var k in mod)
              if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                __createBinding(result, mod, k);
          }
          __setModuleDefault(result, mod);
          return result;
        };
        __importDefault = function(mod) {
          return mod && mod.__esModule ? mod : {"default": mod};
        };
        __classPrivateFieldGet = function(receiver, state, kind, f) {
          if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a getter");
          if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot read private member from an object whose class did not declare it");
          return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
        };
        __classPrivateFieldSet = function(receiver, state, value, kind, f) {
          if (kind === "m")
            throw new TypeError("Private method is not writable");
          if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a setter");
          if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot write private member to an object whose class did not declare it");
          return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
        };
        exporter("__extends", __extends2);
        exporter("__assign", __assign5);
        exporter("__rest", __rest);
        exporter("__decorate", __decorate);
        exporter("__param", __param);
        exporter("__metadata", __metadata);
        exporter("__awaiter", __awaiter);
        exporter("__generator", __generator);
        exporter("__exportStar", __exportStar);
        exporter("__createBinding", __createBinding);
        exporter("__values", __values);
        exporter("__read", __read);
        exporter("__spread", __spread);
        exporter("__spreadArrays", __spreadArrays);
        exporter("__spreadArray", __spreadArray2);
        exporter("__await", __await);
        exporter("__asyncGenerator", __asyncGenerator);
        exporter("__asyncDelegator", __asyncDelegator);
        exporter("__asyncValues", __asyncValues);
        exporter("__makeTemplateObject", __makeTemplateObject);
        exporter("__importStar", __importStar);
        exporter("__importDefault", __importDefault);
        exporter("__classPrivateFieldGet", __classPrivateFieldGet);
        exporter("__classPrivateFieldSet", __classPrivateFieldSet);
      });
    }
  });

  // bazel-out/darwin-fastbuild/bin/packages/intl-getcanonicallocales/src/parser.js
  var require_parser = __commonJS({
    "bazel-out/darwin-fastbuild/bin/packages/intl-getcanonicallocales/src/parser.js": function(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {value: true});
      exports.parseUnicodeLocaleId = exports.parseUnicodeLanguageId = exports.isUnicodeVariantSubtag = exports.isUnicodeScriptSubtag = exports.isUnicodeRegionSubtag = exports.isStructurallyValidLanguageTag = exports.isUnicodeLanguageSubtag = exports.SEPARATOR = void 0;
      var tslib_1 = require_tslib();
      var ALPHANUM_1_8 = /^[a-z0-9]{1,8}$/i;
      var ALPHANUM_2_8 = /^[a-z0-9]{2,8}$/i;
      var ALPHANUM_3_8 = /^[a-z0-9]{3,8}$/i;
      var KEY_REGEX = /^[a-z0-9][a-z]$/i;
      var TYPE_REGEX = /^[a-z0-9]{3,8}$/i;
      var ALPHA_4 = /^[a-z]{4}$/i;
      var OTHER_EXTENSION_TYPE = /^[0-9a-svwyz]$/i;
      var UNICODE_REGION_SUBTAG_REGEX = /^([a-z]{2}|[0-9]{3})$/i;
      var UNICODE_VARIANT_SUBTAG_REGEX = /^([a-z0-9]{5,8}|[0-9][a-z0-9]{3})$/i;
      var UNICODE_LANGUAGE_SUBTAG_REGEX = /^([a-z]{2,3}|[a-z]{5,8})$/i;
      var TKEY_REGEX = /^[a-z][0-9]$/i;
      exports.SEPARATOR = "-";
      function isUnicodeLanguageSubtag2(lang) {
        return UNICODE_LANGUAGE_SUBTAG_REGEX.test(lang);
      }
      exports.isUnicodeLanguageSubtag = isUnicodeLanguageSubtag2;
      function isStructurallyValidLanguageTag2(tag) {
        try {
          parseUnicodeLanguageId2(tag.split(exports.SEPARATOR));
        } catch (e) {
          return false;
        }
        return true;
      }
      exports.isStructurallyValidLanguageTag = isStructurallyValidLanguageTag2;
      function isUnicodeRegionSubtag2(region) {
        return UNICODE_REGION_SUBTAG_REGEX.test(region);
      }
      exports.isUnicodeRegionSubtag = isUnicodeRegionSubtag2;
      function isUnicodeScriptSubtag2(script) {
        return ALPHA_4.test(script);
      }
      exports.isUnicodeScriptSubtag = isUnicodeScriptSubtag2;
      function isUnicodeVariantSubtag(variant) {
        return UNICODE_VARIANT_SUBTAG_REGEX.test(variant);
      }
      exports.isUnicodeVariantSubtag = isUnicodeVariantSubtag;
      function parseUnicodeLanguageId2(chunks) {
        if (typeof chunks === "string") {
          chunks = chunks.split(exports.SEPARATOR);
        }
        var lang = chunks.shift();
        if (!lang) {
          throw new RangeError("Missing unicode_language_subtag");
        }
        if (lang === "root") {
          return {lang: "root", variants: []};
        }
        if (!isUnicodeLanguageSubtag2(lang)) {
          throw new RangeError("Malformed unicode_language_subtag");
        }
        var script;
        if (chunks.length && isUnicodeScriptSubtag2(chunks[0])) {
          script = chunks.shift();
        }
        var region;
        if (chunks.length && isUnicodeRegionSubtag2(chunks[0])) {
          region = chunks.shift();
        }
        var variants = {};
        while (chunks.length && isUnicodeVariantSubtag(chunks[0])) {
          var variant = chunks.shift();
          if (variant in variants) {
            throw new RangeError('Duplicate variant "' + variant + '"');
          }
          variants[variant] = 1;
        }
        return {
          lang: lang,
          script: script,
          region: region,
          variants: Object.keys(variants)
        };
      }
      exports.parseUnicodeLanguageId = parseUnicodeLanguageId2;
      function parseUnicodeExtension(chunks) {
        var keywords = [];
        var keyword;
        while (chunks.length && (keyword = parseKeyword(chunks))) {
          keywords.push(keyword);
        }
        if (keywords.length) {
          return {
            type: "u",
            keywords: keywords,
            attributes: []
          };
        }
        var attributes = [];
        while (chunks.length && ALPHANUM_3_8.test(chunks[0])) {
          attributes.push(chunks.shift());
        }
        while (chunks.length && (keyword = parseKeyword(chunks))) {
          keywords.push(keyword);
        }
        if (keywords.length || attributes.length) {
          return {
            type: "u",
            attributes: attributes,
            keywords: keywords
          };
        }
        throw new RangeError("Malformed unicode_extension");
      }
      function parseKeyword(chunks) {
        var key;
        if (!KEY_REGEX.test(chunks[0])) {
          return;
        }
        key = chunks.shift();
        var type = [];
        while (chunks.length && TYPE_REGEX.test(chunks[0])) {
          type.push(chunks.shift());
        }
        var value = "";
        if (type.length) {
          value = type.join(exports.SEPARATOR);
        }
        return [key, value];
      }
      function parseTransformedExtension(chunks) {
        var lang;
        try {
          lang = parseUnicodeLanguageId2(chunks);
        } catch (e) {
        }
        var fields = [];
        while (chunks.length && TKEY_REGEX.test(chunks[0])) {
          var key = chunks.shift();
          var value = [];
          while (chunks.length && ALPHANUM_3_8.test(chunks[0])) {
            value.push(chunks.shift());
          }
          if (!value.length) {
            throw new RangeError('Missing tvalue for tkey "' + key + '"');
          }
          fields.push([key, value.join(exports.SEPARATOR)]);
        }
        if (fields.length) {
          return {
            type: "t",
            fields: fields,
            lang: lang
          };
        }
        throw new RangeError("Malformed transformed_extension");
      }
      function parsePuExtension(chunks) {
        var exts = [];
        while (chunks.length && ALPHANUM_1_8.test(chunks[0])) {
          exts.push(chunks.shift());
        }
        if (exts.length) {
          return {
            type: "x",
            value: exts.join(exports.SEPARATOR)
          };
        }
        throw new RangeError("Malformed private_use_extension");
      }
      function parseOtherExtensionValue(chunks) {
        var exts = [];
        while (chunks.length && ALPHANUM_2_8.test(chunks[0])) {
          exts.push(chunks.shift());
        }
        if (exts.length) {
          return exts.join(exports.SEPARATOR);
        }
        return "";
      }
      function parseExtensions(chunks) {
        if (!chunks.length) {
          return {extensions: []};
        }
        var extensions = [];
        var unicodeExtension;
        var transformedExtension;
        var puExtension;
        var otherExtensionMap = {};
        do {
          var type = chunks.shift();
          switch (type) {
            case "u":
            case "U":
              if (unicodeExtension) {
                throw new RangeError("There can only be 1 -u- extension");
              }
              unicodeExtension = parseUnicodeExtension(chunks);
              extensions.push(unicodeExtension);
              break;
            case "t":
            case "T":
              if (transformedExtension) {
                throw new RangeError("There can only be 1 -t- extension");
              }
              transformedExtension = parseTransformedExtension(chunks);
              extensions.push(transformedExtension);
              break;
            case "x":
            case "X":
              if (puExtension) {
                throw new RangeError("There can only be 1 -x- extension");
              }
              puExtension = parsePuExtension(chunks);
              extensions.push(puExtension);
              break;
            default:
              if (!OTHER_EXTENSION_TYPE.test(type)) {
                throw new RangeError("Malformed extension type");
              }
              if (type in otherExtensionMap) {
                throw new RangeError("There can only be 1 -" + type + "- extension");
              }
              var extension = {
                type: type,
                value: parseOtherExtensionValue(chunks)
              };
              otherExtensionMap[extension.type] = extension;
              extensions.push(extension);
              break;
          }
        } while (chunks.length);
        return {extensions: extensions};
      }
      function parseUnicodeLocaleId2(locale) {
        var chunks = locale.split(exports.SEPARATOR);
        var lang = parseUnicodeLanguageId2(chunks);
        return tslib_1.__assign({lang: lang}, parseExtensions(chunks));
      }
      exports.parseUnicodeLocaleId = parseUnicodeLocaleId2;
    }
  });

  // bazel-out/darwin-fastbuild/bin/packages/intl-getcanonicallocales/src/emitter.js
  var require_emitter = __commonJS({
    "bazel-out/darwin-fastbuild/bin/packages/intl-getcanonicallocales/src/emitter.js": function(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {value: true});
      exports.emitUnicodeLocaleId = exports.emitUnicodeLanguageId = void 0;
      var tslib_1 = require_tslib();
      function emitUnicodeLanguageId2(lang) {
        if (!lang) {
          return "";
        }
        return tslib_1.__spreadArray([lang.lang, lang.script, lang.region], lang.variants || []).filter(Boolean).join("-");
      }
      exports.emitUnicodeLanguageId = emitUnicodeLanguageId2;
      function emitUnicodeLocaleId2(_a) {
        var lang = _a.lang, extensions = _a.extensions;
        var chunks = [emitUnicodeLanguageId2(lang)];
        for (var _i = 0, extensions_1 = extensions; _i < extensions_1.length; _i++) {
          var ext = extensions_1[_i];
          chunks.push(ext.type);
          switch (ext.type) {
            case "u":
              chunks.push.apply(chunks, tslib_1.__spreadArray(tslib_1.__spreadArray([], ext.attributes), ext.keywords.reduce(function(all, kv) {
                return all.concat(kv);
              }, [])));
              break;
            case "t":
              chunks.push.apply(chunks, tslib_1.__spreadArray([emitUnicodeLanguageId2(ext.lang)], ext.fields.reduce(function(all, kv) {
                return all.concat(kv);
              }, [])));
              break;
            default:
              chunks.push(ext.value);
              break;
          }
        }
        return chunks.filter(Boolean).join("-");
      }
      exports.emitUnicodeLocaleId = emitUnicodeLocaleId2;
    }
  });

  // bazel-out/darwin-fastbuild/bin/packages/intl-getcanonicallocales/src/data/aliases.js
  var require_aliases = __commonJS({
    "bazel-out/darwin-fastbuild/bin/packages/intl-getcanonicallocales/src/data/aliases.js": function(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {value: true});
      exports.variantAlias = exports.scriptAlias = exports.territoryAlias = exports.languageAlias = void 0;
      exports.languageAlias = {
        "aa-saaho": "ssy",
        "aam": "aas",
        "aar": "aa",
        "abk": "ab",
        "adp": "dz",
        "afr": "af",
        "agp": "apf",
        "ais": "ami",
        "aju": "jrb",
        "aka": "ak",
        "alb": "sq",
        "als": "sq",
        "amh": "am",
        "ara": "ar",
        "arb": "ar",
        "arg": "an",
        "arm": "hy",
        "art-lojban": "jbo",
        "asd": "snz",
        "asm": "as",
        "aue": "ktz",
        "ava": "av",
        "ave": "ae",
        "aym": "ay",
        "ayr": "ay",
        "ayx": "nun",
        "aze": "az",
        "azj": "az",
        "bak": "ba",
        "bam": "bm",
        "baq": "eu",
        "baz": "nvo",
        "bcc": "bal",
        "bcl": "bik",
        "bel": "be",
        "ben": "bn",
        "bgm": "bcg",
        "bh": "bho",
        "bhk": "fbl",
        "bih": "bho",
        "bis": "bi",
        "bjd": "drl",
        "bjq": "bzc",
        "bkb": "ebk",
        "bod": "bo",
        "bos": "bs",
        "bre": "br",
        "btb": "beb",
        "bul": "bg",
        "bur": "my",
        "bxk": "luy",
        "bxr": "bua",
        "cat": "ca",
        "ccq": "rki",
        "cel-gaulish": "xtg",
        "ces": "cs",
        "cha": "ch",
        "che": "ce",
        "chi": "zh",
        "chu": "cu",
        "chv": "cv",
        "cjr": "mom",
        "cka": "cmr",
        "cld": "syr",
        "cmk": "xch",
        "cmn": "zh",
        "cnr": "sr-ME",
        "cor": "kw",
        "cos": "co",
        "coy": "pij",
        "cqu": "quh",
        "cre": "cr",
        "cwd": "cr",
        "cym": "cy",
        "cze": "cs",
        "daf": "dnj",
        "dan": "da",
        "dap": "njz",
        "deu": "de",
        "dgo": "doi",
        "dhd": "mwr",
        "dik": "din",
        "diq": "zza",
        "dit": "dif",
        "div": "dv",
        "djl": "dze",
        "dkl": "aqd",
        "drh": "mn",
        "drr": "kzk",
        "drw": "fa-AF",
        "dud": "uth",
        "duj": "dwu",
        "dut": "nl",
        "dwl": "dbt",
        "dzo": "dz",
        "ekk": "et",
        "ell": "el",
        "elp": "amq",
        "emk": "man",
        "en-GB-oed": "en-GB-oxendict",
        "eng": "en",
        "epo": "eo",
        "esk": "ik",
        "est": "et",
        "eus": "eu",
        "ewe": "ee",
        "fao": "fo",
        "fas": "fa",
        "fat": "ak",
        "fij": "fj",
        "fin": "fi",
        "fra": "fr",
        "fre": "fr",
        "fry": "fy",
        "fuc": "ff",
        "ful": "ff",
        "gav": "dev",
        "gaz": "om",
        "gbc": "wny",
        "gbo": "grb",
        "geo": "ka",
        "ger": "de",
        "gfx": "vaj",
        "ggn": "gvr",
        "ggo": "esg",
        "ggr": "gtu",
        "gio": "aou",
        "gla": "gd",
        "gle": "ga",
        "glg": "gl",
        "gli": "kzk",
        "glv": "gv",
        "gno": "gon",
        "gre": "el",
        "grn": "gn",
        "gti": "nyc",
        "gug": "gn",
        "guj": "gu",
        "guv": "duz",
        "gya": "gba",
        "hat": "ht",
        "hau": "ha",
        "hbs": "sr-Latn",
        "hdn": "hai",
        "hea": "hmn",
        "heb": "he",
        "her": "hz",
        "him": "srx",
        "hin": "hi",
        "hmo": "ho",
        "hrr": "jal",
        "hrv": "hr",
        "hun": "hu",
        "hy-arevmda": "hyw",
        "hye": "hy",
        "i-ami": "ami",
        "i-bnn": "bnn",
        "i-default": "en-x-i-default",
        "i-enochian": "und-x-i-enochian",
        "i-hak": "hak",
        "i-klingon": "tlh",
        "i-lux": "lb",
        "i-mingo": "see-x-i-mingo",
        "i-navajo": "nv",
        "i-pwn": "pwn",
        "i-tao": "tao",
        "i-tay": "tay",
        "i-tsu": "tsu",
        "ibi": "opa",
        "ibo": "ig",
        "ice": "is",
        "ido": "io",
        "iii": "ii",
        "ike": "iu",
        "iku": "iu",
        "ile": "ie",
        "ill": "ilm",
        "ilw": "gal",
        "in": "id",
        "ina": "ia",
        "ind": "id",
        "ipk": "ik",
        "isl": "is",
        "ita": "it",
        "iw": "he",
        "izi": "eza",
        "jar": "jgk",
        "jav": "jv",
        "jeg": "oyb",
        "ji": "yi",
        "jpn": "ja",
        "jw": "jv",
        "kal": "kl",
        "kan": "kn",
        "kas": "ks",
        "kat": "ka",
        "kau": "kr",
        "kaz": "kk",
        "kdv": "zkd",
        "kgc": "tdf",
        "kgd": "ncq",
        "kgh": "kml",
        "khk": "mn",
        "khm": "km",
        "kik": "ki",
        "kin": "rw",
        "kir": "ky",
        "kmr": "ku",
        "knc": "kr",
        "kng": "kg",
        "knn": "kok",
        "koj": "kwv",
        "kom": "kv",
        "kon": "kg",
        "kor": "ko",
        "kpp": "jkm",
        "kpv": "kv",
        "krm": "bmf",
        "ktr": "dtp",
        "kua": "kj",
        "kur": "ku",
        "kvs": "gdj",
        "kwq": "yam",
        "kxe": "tvd",
        "kxl": "kru",
        "kzh": "dgl",
        "kzj": "dtp",
        "kzt": "dtp",
        "lao": "lo",
        "lat": "la",
        "lav": "lv",
        "lbk": "bnc",
        "leg": "enl",
        "lii": "raq",
        "lim": "li",
        "lin": "ln",
        "lit": "lt",
        "llo": "ngt",
        "lmm": "rmx",
        "ltz": "lb",
        "lub": "lu",
        "lug": "lg",
        "lvs": "lv",
        "mac": "mk",
        "mah": "mh",
        "mal": "ml",
        "mao": "mi",
        "mar": "mr",
        "may": "ms",
        "meg": "cir",
        "mgx": "jbk",
        "mhr": "chm",
        "mkd": "mk",
        "mlg": "mg",
        "mlt": "mt",
        "mnk": "man",
        "mnt": "wnn",
        "mo": "ro",
        "mof": "xnt",
        "mol": "ro",
        "mon": "mn",
        "mri": "mi",
        "msa": "ms",
        "mst": "mry",
        "mup": "raj",
        "mwd": "dmw",
        "mwj": "vaj",
        "mya": "my",
        "myd": "aog",
        "myt": "mry",
        "nad": "xny",
        "nau": "na",
        "nav": "nv",
        "nbf": "nru",
        "nbl": "nr",
        "nbx": "ekc",
        "ncp": "kdz",
        "nde": "nd",
        "ndo": "ng",
        "nep": "ne",
        "nld": "nl",
        "nln": "azd",
        "nlr": "nrk",
        "nno": "nn",
        "nns": "nbr",
        "nnx": "ngv",
        "no-bok": "nb",
        "no-bokmal": "nb",
        "no-nyn": "nn",
        "no-nynorsk": "nn",
        "nob": "nb",
        "noo": "dtd",
        "nor": "no",
        "npi": "ne",
        "nts": "pij",
        "nxu": "bpp",
        "nya": "ny",
        "oci": "oc",
        "ojg": "oj",
        "oji": "oj",
        "ori": "or",
        "orm": "om",
        "ory": "or",
        "oss": "os",
        "oun": "vaj",
        "pan": "pa",
        "pbu": "ps",
        "pcr": "adx",
        "per": "fa",
        "pes": "fa",
        "pli": "pi",
        "plt": "mg",
        "pmc": "huw",
        "pmu": "phr",
        "pnb": "lah",
        "pol": "pl",
        "por": "pt",
        "ppa": "bfy",
        "ppr": "lcq",
        "prs": "fa-AF",
        "pry": "prt",
        "pus": "ps",
        "puz": "pub",
        "que": "qu",
        "quz": "qu",
        "rmr": "emx",
        "rmy": "rom",
        "roh": "rm",
        "ron": "ro",
        "rum": "ro",
        "run": "rn",
        "rus": "ru",
        "sag": "sg",
        "san": "sa",
        "sap": "aqt",
        "sca": "hle",
        "scc": "sr",
        "scr": "hr",
        "sgl": "isk",
        "sgn-BE-FR": "sfb",
        "sgn-BE-NL": "vgt",
        "sgn-BR": "bzs",
        "sgn-CH-DE": "sgg",
        "sgn-CO": "csn",
        "sgn-DE": "gsg",
        "sgn-DK": "dsl",
        "sgn-ES": "ssp",
        "sgn-FR": "fsl",
        "sgn-GB": "bfi",
        "sgn-GR": "gss",
        "sgn-IE": "isg",
        "sgn-IT": "ise",
        "sgn-JP": "jsl",
        "sgn-MX": "mfs",
        "sgn-NI": "ncs",
        "sgn-NL": "dse",
        "sgn-NO": "nsi",
        "sgn-PT": "psr",
        "sgn-SE": "swl",
        "sgn-US": "ase",
        "sgn-ZA": "sfs",
        "sh": "sr-Latn",
        "sin": "si",
        "skk": "oyb",
        "slk": "sk",
        "slo": "sk",
        "slv": "sl",
        "sme": "se",
        "smo": "sm",
        "sna": "sn",
        "snd": "sd",
        "som": "so",
        "sot": "st",
        "spa": "es",
        "spy": "kln",
        "sqi": "sq",
        "src": "sc",
        "srd": "sc",
        "srp": "sr",
        "ssw": "ss",
        "sul": "sgd",
        "sum": "ulw",
        "sun": "su",
        "swa": "sw",
        "swc": "sw-CD",
        "swe": "sv",
        "swh": "sw",
        "tah": "ty",
        "tam": "ta",
        "tat": "tt",
        "tdu": "dtp",
        "tel": "te",
        "tgg": "bjp",
        "tgk": "tg",
        "tgl": "fil",
        "tha": "th",
        "thc": "tpo",
        "thw": "ola",
        "thx": "oyb",
        "tib": "bo",
        "tid": "itd",
        "tie": "ras",
        "tir": "ti",
        "tkk": "twm",
        "tl": "fil",
        "tlw": "weo",
        "tmp": "tyj",
        "tne": "kak",
        "tnf": "fa-AF",
        "ton": "to",
        "tsf": "taj",
        "tsn": "tn",
        "tso": "ts",
        "ttq": "tmh",
        "tuk": "tk",
        "tur": "tr",
        "tw": "ak",
        "twi": "ak",
        "uig": "ug",
        "ukr": "uk",
        "umu": "del",
        "und-aaland": "und-AX",
        "und-arevela": "und",
        "und-arevmda": "und",
        "und-bokmal": "und",
        "und-hakka": "und",
        "und-hepburn-heploc": "und-alalc97",
        "und-lojban": "und",
        "und-nynorsk": "und",
        "und-saaho": "und",
        "und-xiang": "und",
        "unp": "wro",
        "uok": "ema",
        "urd": "ur",
        "uzb": "uz",
        "uzn": "uz",
        "ven": "ve",
        "vie": "vi",
        "vol": "vo",
        "wel": "cy",
        "wgw": "wgb",
        "wit": "nol",
        "wiw": "nwo",
        "wln": "wa",
        "wol": "wo",
        "xba": "cax",
        "xho": "xh",
        "xia": "acn",
        "xkh": "waw",
        "xpe": "kpe",
        "xrq": "dmw",
        "xsj": "suj",
        "xsl": "den",
        "ybd": "rki",
        "ydd": "yi",
        "yen": "ynq",
        "yid": "yi",
        "yiy": "yrm",
        "yma": "lrr",
        "ymt": "mtm",
        "yor": "yo",
        "yos": "zom",
        "yuu": "yug",
        "zai": "zap",
        "zh-cmn": "zh",
        "zh-cmn-Hans": "zh-Hans",
        "zh-cmn-Hant": "zh-Hant",
        "zh-gan": "gan",
        "zh-guoyu": "zh",
        "zh-hakka": "hak",
        "zh-min": "nan-x-zh-min",
        "zh-min-nan": "nan",
        "zh-wuu": "wuu",
        "zh-xiang": "hsn",
        "zh-yue": "yue",
        "zha": "za",
        "zho": "zh",
        "zir": "scv",
        "zsm": "ms",
        "zul": "zu",
        "zyb": "za"
      };
      exports.territoryAlias = {
        "100": "BG",
        "104": "MM",
        "108": "BI",
        "112": "BY",
        "116": "KH",
        "120": "CM",
        "124": "CA",
        "132": "CV",
        "136": "KY",
        "140": "CF",
        "144": "LK",
        "148": "TD",
        "152": "CL",
        "156": "CN",
        "158": "TW",
        "162": "CX",
        "166": "CC",
        "170": "CO",
        "172": "RU AM AZ BY GE KG KZ MD TJ TM UA UZ",
        "174": "KM",
        "175": "YT",
        "178": "CG",
        "180": "CD",
        "184": "CK",
        "188": "CR",
        "191": "HR",
        "192": "CU",
        "196": "CY",
        "200": "CZ SK",
        "203": "CZ",
        "204": "BJ",
        "208": "DK",
        "212": "DM",
        "214": "DO",
        "218": "EC",
        "222": "SV",
        "226": "GQ",
        "230": "ET",
        "231": "ET",
        "232": "ER",
        "233": "EE",
        "234": "FO",
        "238": "FK",
        "239": "GS",
        "242": "FJ",
        "246": "FI",
        "248": "AX",
        "249": "FR",
        "250": "FR",
        "254": "GF",
        "258": "PF",
        "260": "TF",
        "262": "DJ",
        "266": "GA",
        "268": "GE",
        "270": "GM",
        "275": "PS",
        "276": "DE",
        "278": "DE",
        "280": "DE",
        "288": "GH",
        "292": "GI",
        "296": "KI",
        "300": "GR",
        "304": "GL",
        "308": "GD",
        "312": "GP",
        "316": "GU",
        "320": "GT",
        "324": "GN",
        "328": "GY",
        "332": "HT",
        "334": "HM",
        "336": "VA",
        "340": "HN",
        "344": "HK",
        "348": "HU",
        "352": "IS",
        "356": "IN",
        "360": "ID",
        "364": "IR",
        "368": "IQ",
        "372": "IE",
        "376": "IL",
        "380": "IT",
        "384": "CI",
        "388": "JM",
        "392": "JP",
        "398": "KZ",
        "400": "JO",
        "404": "KE",
        "408": "KP",
        "410": "KR",
        "414": "KW",
        "417": "KG",
        "418": "LA",
        "422": "LB",
        "426": "LS",
        "428": "LV",
        "430": "LR",
        "434": "LY",
        "438": "LI",
        "440": "LT",
        "442": "LU",
        "446": "MO",
        "450": "MG",
        "454": "MW",
        "458": "MY",
        "462": "MV",
        "466": "ML",
        "470": "MT",
        "474": "MQ",
        "478": "MR",
        "480": "MU",
        "484": "MX",
        "492": "MC",
        "496": "MN",
        "498": "MD",
        "499": "ME",
        "500": "MS",
        "504": "MA",
        "508": "MZ",
        "512": "OM",
        "516": "NA",
        "520": "NR",
        "524": "NP",
        "528": "NL",
        "530": "CW SX BQ",
        "531": "CW",
        "532": "CW SX BQ",
        "533": "AW",
        "534": "SX",
        "535": "BQ",
        "536": "SA IQ",
        "540": "NC",
        "548": "VU",
        "554": "NZ",
        "558": "NI",
        "562": "NE",
        "566": "NG",
        "570": "NU",
        "574": "NF",
        "578": "NO",
        "580": "MP",
        "581": "UM",
        "582": "FM MH MP PW",
        "583": "FM",
        "584": "MH",
        "585": "PW",
        "586": "PK",
        "591": "PA",
        "598": "PG",
        "600": "PY",
        "604": "PE",
        "608": "PH",
        "612": "PN",
        "616": "PL",
        "620": "PT",
        "624": "GW",
        "626": "TL",
        "630": "PR",
        "634": "QA",
        "638": "RE",
        "642": "RO",
        "643": "RU",
        "646": "RW",
        "652": "BL",
        "654": "SH",
        "659": "KN",
        "660": "AI",
        "662": "LC",
        "663": "MF",
        "666": "PM",
        "670": "VC",
        "674": "SM",
        "678": "ST",
        "682": "SA",
        "686": "SN",
        "688": "RS",
        "690": "SC",
        "694": "SL",
        "702": "SG",
        "703": "SK",
        "704": "VN",
        "705": "SI",
        "706": "SO",
        "710": "ZA",
        "716": "ZW",
        "720": "YE",
        "724": "ES",
        "728": "SS",
        "729": "SD",
        "732": "EH",
        "736": "SD",
        "740": "SR",
        "744": "SJ",
        "748": "SZ",
        "752": "SE",
        "756": "CH",
        "760": "SY",
        "762": "TJ",
        "764": "TH",
        "768": "TG",
        "772": "TK",
        "776": "TO",
        "780": "TT",
        "784": "AE",
        "788": "TN",
        "792": "TR",
        "795": "TM",
        "796": "TC",
        "798": "TV",
        "800": "UG",
        "804": "UA",
        "807": "MK",
        "810": "RU AM AZ BY EE GE KZ KG LV LT MD TJ TM UA UZ",
        "818": "EG",
        "826": "GB",
        "830": "JE GG",
        "831": "GG",
        "832": "JE",
        "833": "IM",
        "834": "TZ",
        "840": "US",
        "850": "VI",
        "854": "BF",
        "858": "UY",
        "860": "UZ",
        "862": "VE",
        "876": "WF",
        "882": "WS",
        "886": "YE",
        "887": "YE",
        "890": "RS ME SI HR MK BA",
        "891": "RS ME",
        "894": "ZM",
        "958": "AA",
        "959": "QM",
        "960": "QN",
        "962": "QP",
        "963": "QQ",
        "964": "QR",
        "965": "QS",
        "966": "QT",
        "967": "EU",
        "968": "QV",
        "969": "QW",
        "970": "QX",
        "971": "QY",
        "972": "QZ",
        "973": "XA",
        "974": "XB",
        "975": "XC",
        "976": "XD",
        "977": "XE",
        "978": "XF",
        "979": "XG",
        "980": "XH",
        "981": "XI",
        "982": "XJ",
        "983": "XK",
        "984": "XL",
        "985": "XM",
        "986": "XN",
        "987": "XO",
        "988": "XP",
        "989": "XQ",
        "990": "XR",
        "991": "XS",
        "992": "XT",
        "993": "XU",
        "994": "XV",
        "995": "XW",
        "996": "XX",
        "997": "XY",
        "998": "XZ",
        "999": "ZZ",
        "004": "AF",
        "008": "AL",
        "010": "AQ",
        "012": "DZ",
        "016": "AS",
        "020": "AD",
        "024": "AO",
        "028": "AG",
        "031": "AZ",
        "032": "AR",
        "036": "AU",
        "040": "AT",
        "044": "BS",
        "048": "BH",
        "050": "BD",
        "051": "AM",
        "052": "BB",
        "056": "BE",
        "060": "BM",
        "062": "034 143",
        "064": "BT",
        "068": "BO",
        "070": "BA",
        "072": "BW",
        "074": "BV",
        "076": "BR",
        "084": "BZ",
        "086": "IO",
        "090": "SB",
        "092": "VG",
        "096": "BN",
        "AAA": "AA",
        "ABW": "AW",
        "AFG": "AF",
        "AGO": "AO",
        "AIA": "AI",
        "ALA": "AX",
        "ALB": "AL",
        "AN": "CW SX BQ",
        "AND": "AD",
        "ANT": "CW SX BQ",
        "ARE": "AE",
        "ARG": "AR",
        "ARM": "AM",
        "ASC": "AC",
        "ASM": "AS",
        "ATA": "AQ",
        "ATF": "TF",
        "ATG": "AG",
        "AUS": "AU",
        "AUT": "AT",
        "AZE": "AZ",
        "BDI": "BI",
        "BEL": "BE",
        "BEN": "BJ",
        "BES": "BQ",
        "BFA": "BF",
        "BGD": "BD",
        "BGR": "BG",
        "BHR": "BH",
        "BHS": "BS",
        "BIH": "BA",
        "BLM": "BL",
        "BLR": "BY",
        "BLZ": "BZ",
        "BMU": "BM",
        "BOL": "BO",
        "BRA": "BR",
        "BRB": "BB",
        "BRN": "BN",
        "BTN": "BT",
        "BU": "MM",
        "BUR": "MM",
        "BVT": "BV",
        "BWA": "BW",
        "CAF": "CF",
        "CAN": "CA",
        "CCK": "CC",
        "CHE": "CH",
        "CHL": "CL",
        "CHN": "CN",
        "CIV": "CI",
        "CMR": "CM",
        "COD": "CD",
        "COG": "CG",
        "COK": "CK",
        "COL": "CO",
        "COM": "KM",
        "CPT": "CP",
        "CPV": "CV",
        "CRI": "CR",
        "CS": "RS ME",
        "CT": "KI",
        "CUB": "CU",
        "CUW": "CW",
        "CXR": "CX",
        "CYM": "KY",
        "CYP": "CY",
        "CZE": "CZ",
        "DD": "DE",
        "DDR": "DE",
        "DEU": "DE",
        "DGA": "DG",
        "DJI": "DJ",
        "DMA": "DM",
        "DNK": "DK",
        "DOM": "DO",
        "DY": "BJ",
        "DZA": "DZ",
        "ECU": "EC",
        "EGY": "EG",
        "ERI": "ER",
        "ESH": "EH",
        "ESP": "ES",
        "EST": "EE",
        "ETH": "ET",
        "FIN": "FI",
        "FJI": "FJ",
        "FLK": "FK",
        "FQ": "AQ TF",
        "FRA": "FR",
        "FRO": "FO",
        "FSM": "FM",
        "FX": "FR",
        "FXX": "FR",
        "GAB": "GA",
        "GBR": "GB",
        "GEO": "GE",
        "GGY": "GG",
        "GHA": "GH",
        "GIB": "GI",
        "GIN": "GN",
        "GLP": "GP",
        "GMB": "GM",
        "GNB": "GW",
        "GNQ": "GQ",
        "GRC": "GR",
        "GRD": "GD",
        "GRL": "GL",
        "GTM": "GT",
        "GUF": "GF",
        "GUM": "GU",
        "GUY": "GY",
        "HKG": "HK",
        "HMD": "HM",
        "HND": "HN",
        "HRV": "HR",
        "HTI": "HT",
        "HUN": "HU",
        "HV": "BF",
        "IDN": "ID",
        "IMN": "IM",
        "IND": "IN",
        "IOT": "IO",
        "IRL": "IE",
        "IRN": "IR",
        "IRQ": "IQ",
        "ISL": "IS",
        "ISR": "IL",
        "ITA": "IT",
        "JAM": "JM",
        "JEY": "JE",
        "JOR": "JO",
        "JPN": "JP",
        "JT": "UM",
        "KAZ": "KZ",
        "KEN": "KE",
        "KGZ": "KG",
        "KHM": "KH",
        "KIR": "KI",
        "KNA": "KN",
        "KOR": "KR",
        "KWT": "KW",
        "LAO": "LA",
        "LBN": "LB",
        "LBR": "LR",
        "LBY": "LY",
        "LCA": "LC",
        "LIE": "LI",
        "LKA": "LK",
        "LSO": "LS",
        "LTU": "LT",
        "LUX": "LU",
        "LVA": "LV",
        "MAC": "MO",
        "MAF": "MF",
        "MAR": "MA",
        "MCO": "MC",
        "MDA": "MD",
        "MDG": "MG",
        "MDV": "MV",
        "MEX": "MX",
        "MHL": "MH",
        "MI": "UM",
        "MKD": "MK",
        "MLI": "ML",
        "MLT": "MT",
        "MMR": "MM",
        "MNE": "ME",
        "MNG": "MN",
        "MNP": "MP",
        "MOZ": "MZ",
        "MRT": "MR",
        "MSR": "MS",
        "MTQ": "MQ",
        "MUS": "MU",
        "MWI": "MW",
        "MYS": "MY",
        "MYT": "YT",
        "NAM": "NA",
        "NCL": "NC",
        "NER": "NE",
        "NFK": "NF",
        "NGA": "NG",
        "NH": "VU",
        "NIC": "NI",
        "NIU": "NU",
        "NLD": "NL",
        "NOR": "NO",
        "NPL": "NP",
        "NQ": "AQ",
        "NRU": "NR",
        "NT": "SA IQ",
        "NTZ": "SA IQ",
        "NZL": "NZ",
        "OMN": "OM",
        "PAK": "PK",
        "PAN": "PA",
        "PC": "FM MH MP PW",
        "PCN": "PN",
        "PER": "PE",
        "PHL": "PH",
        "PLW": "PW",
        "PNG": "PG",
        "POL": "PL",
        "PRI": "PR",
        "PRK": "KP",
        "PRT": "PT",
        "PRY": "PY",
        "PSE": "PS",
        "PU": "UM",
        "PYF": "PF",
        "PZ": "PA",
        "QAT": "QA",
        "QMM": "QM",
        "QNN": "QN",
        "QPP": "QP",
        "QQQ": "QQ",
        "QRR": "QR",
        "QSS": "QS",
        "QTT": "QT",
        "QU": "EU",
        "QUU": "EU",
        "QVV": "QV",
        "QWW": "QW",
        "QXX": "QX",
        "QYY": "QY",
        "QZZ": "QZ",
        "REU": "RE",
        "RH": "ZW",
        "ROU": "RO",
        "RUS": "RU",
        "RWA": "RW",
        "SAU": "SA",
        "SCG": "RS ME",
        "SDN": "SD",
        "SEN": "SN",
        "SGP": "SG",
        "SGS": "GS",
        "SHN": "SH",
        "SJM": "SJ",
        "SLB": "SB",
        "SLE": "SL",
        "SLV": "SV",
        "SMR": "SM",
        "SOM": "SO",
        "SPM": "PM",
        "SRB": "RS",
        "SSD": "SS",
        "STP": "ST",
        "SU": "RU AM AZ BY EE GE KZ KG LV LT MD TJ TM UA UZ",
        "SUN": "RU AM AZ BY EE GE KZ KG LV LT MD TJ TM UA UZ",
        "SUR": "SR",
        "SVK": "SK",
        "SVN": "SI",
        "SWE": "SE",
        "SWZ": "SZ",
        "SXM": "SX",
        "SYC": "SC",
        "SYR": "SY",
        "TAA": "TA",
        "TCA": "TC",
        "TCD": "TD",
        "TGO": "TG",
        "THA": "TH",
        "TJK": "TJ",
        "TKL": "TK",
        "TKM": "TM",
        "TLS": "TL",
        "TMP": "TL",
        "TON": "TO",
        "TP": "TL",
        "TTO": "TT",
        "TUN": "TN",
        "TUR": "TR",
        "TUV": "TV",
        "TWN": "TW",
        "TZA": "TZ",
        "UGA": "UG",
        "UK": "GB",
        "UKR": "UA",
        "UMI": "UM",
        "URY": "UY",
        "USA": "US",
        "UZB": "UZ",
        "VAT": "VA",
        "VCT": "VC",
        "VD": "VN",
        "VEN": "VE",
        "VGB": "VG",
        "VIR": "VI",
        "VNM": "VN",
        "VUT": "VU",
        "WK": "UM",
        "WLF": "WF",
        "WSM": "WS",
        "XAA": "XA",
        "XBB": "XB",
        "XCC": "XC",
        "XDD": "XD",
        "XEE": "XE",
        "XFF": "XF",
        "XGG": "XG",
        "XHH": "XH",
        "XII": "XI",
        "XJJ": "XJ",
        "XKK": "XK",
        "XLL": "XL",
        "XMM": "XM",
        "XNN": "XN",
        "XOO": "XO",
        "XPP": "XP",
        "XQQ": "XQ",
        "XRR": "XR",
        "XSS": "XS",
        "XTT": "XT",
        "XUU": "XU",
        "XVV": "XV",
        "XWW": "XW",
        "XXX": "XX",
        "XYY": "XY",
        "XZZ": "XZ",
        "YD": "YE",
        "YEM": "YE",
        "YMD": "YE",
        "YU": "RS ME",
        "YUG": "RS ME",
        "ZAF": "ZA",
        "ZAR": "CD",
        "ZMB": "ZM",
        "ZR": "CD",
        "ZWE": "ZW",
        "ZZZ": "ZZ"
      };
      exports.scriptAlias = {
        "Qaai": "Zinh"
      };
      exports.variantAlias = {
        "heploc": "alalc97",
        "polytoni": "polyton"
      };
    }
  });

  // node_modules/cldr-core/supplemental/likelySubtags.json
  var require_likelySubtags = __commonJS({
    "node_modules/cldr-core/supplemental/likelySubtags.json": function(exports, module) {
      module.exports = {
        supplemental: {
          version: {
            _unicodeVersion: "13.0.0",
            _cldrVersion: "39"
          },
          likelySubtags: {
            aa: "aa-Latn-ET",
            aai: "aai-Latn-ZZ",
            aak: "aak-Latn-ZZ",
            aau: "aau-Latn-ZZ",
            ab: "ab-Cyrl-GE",
            abi: "abi-Latn-ZZ",
            abq: "abq-Cyrl-ZZ",
            abr: "abr-Latn-GH",
            abt: "abt-Latn-ZZ",
            aby: "aby-Latn-ZZ",
            acd: "acd-Latn-ZZ",
            ace: "ace-Latn-ID",
            ach: "ach-Latn-UG",
            ada: "ada-Latn-GH",
            ade: "ade-Latn-ZZ",
            adj: "adj-Latn-ZZ",
            adp: "adp-Tibt-BT",
            ady: "ady-Cyrl-RU",
            adz: "adz-Latn-ZZ",
            ae: "ae-Avst-IR",
            aeb: "aeb-Arab-TN",
            aey: "aey-Latn-ZZ",
            af: "af-Latn-ZA",
            agc: "agc-Latn-ZZ",
            agd: "agd-Latn-ZZ",
            agg: "agg-Latn-ZZ",
            agm: "agm-Latn-ZZ",
            ago: "ago-Latn-ZZ",
            agq: "agq-Latn-CM",
            aha: "aha-Latn-ZZ",
            ahl: "ahl-Latn-ZZ",
            aho: "aho-Ahom-IN",
            ajg: "ajg-Latn-ZZ",
            ak: "ak-Latn-GH",
            akk: "akk-Xsux-IQ",
            ala: "ala-Latn-ZZ",
            ali: "ali-Latn-ZZ",
            aln: "aln-Latn-XK",
            alt: "alt-Cyrl-RU",
            am: "am-Ethi-ET",
            amm: "amm-Latn-ZZ",
            amn: "amn-Latn-ZZ",
            amo: "amo-Latn-NG",
            amp: "amp-Latn-ZZ",
            an: "an-Latn-ES",
            anc: "anc-Latn-ZZ",
            ank: "ank-Latn-ZZ",
            ann: "ann-Latn-ZZ",
            any: "any-Latn-ZZ",
            aoj: "aoj-Latn-ZZ",
            aom: "aom-Latn-ZZ",
            aoz: "aoz-Latn-ID",
            apc: "apc-Arab-ZZ",
            apd: "apd-Arab-TG",
            ape: "ape-Latn-ZZ",
            apr: "apr-Latn-ZZ",
            aps: "aps-Latn-ZZ",
            apz: "apz-Latn-ZZ",
            ar: "ar-Arab-EG",
            arc: "arc-Armi-IR",
            "arc-Nbat": "arc-Nbat-JO",
            "arc-Palm": "arc-Palm-SY",
            arh: "arh-Latn-ZZ",
            arn: "arn-Latn-CL",
            aro: "aro-Latn-BO",
            arq: "arq-Arab-DZ",
            ars: "ars-Arab-SA",
            ary: "ary-Arab-MA",
            arz: "arz-Arab-EG",
            as: "as-Beng-IN",
            asa: "asa-Latn-TZ",
            ase: "ase-Sgnw-US",
            asg: "asg-Latn-ZZ",
            aso: "aso-Latn-ZZ",
            ast: "ast-Latn-ES",
            ata: "ata-Latn-ZZ",
            atg: "atg-Latn-ZZ",
            atj: "atj-Latn-CA",
            auy: "auy-Latn-ZZ",
            av: "av-Cyrl-RU",
            avl: "avl-Arab-ZZ",
            avn: "avn-Latn-ZZ",
            avt: "avt-Latn-ZZ",
            avu: "avu-Latn-ZZ",
            awa: "awa-Deva-IN",
            awb: "awb-Latn-ZZ",
            awo: "awo-Latn-ZZ",
            awx: "awx-Latn-ZZ",
            ay: "ay-Latn-BO",
            ayb: "ayb-Latn-ZZ",
            az: "az-Latn-AZ",
            "az-Arab": "az-Arab-IR",
            "az-IQ": "az-Arab-IQ",
            "az-IR": "az-Arab-IR",
            "az-RU": "az-Cyrl-RU",
            ba: "ba-Cyrl-RU",
            bal: "bal-Arab-PK",
            ban: "ban-Latn-ID",
            bap: "bap-Deva-NP",
            bar: "bar-Latn-AT",
            bas: "bas-Latn-CM",
            bav: "bav-Latn-ZZ",
            bax: "bax-Bamu-CM",
            bba: "bba-Latn-ZZ",
            bbb: "bbb-Latn-ZZ",
            bbc: "bbc-Latn-ID",
            bbd: "bbd-Latn-ZZ",
            bbj: "bbj-Latn-CM",
            bbp: "bbp-Latn-ZZ",
            bbr: "bbr-Latn-ZZ",
            bcf: "bcf-Latn-ZZ",
            bch: "bch-Latn-ZZ",
            bci: "bci-Latn-CI",
            bcm: "bcm-Latn-ZZ",
            bcn: "bcn-Latn-ZZ",
            bco: "bco-Latn-ZZ",
            bcq: "bcq-Ethi-ZZ",
            bcu: "bcu-Latn-ZZ",
            bdd: "bdd-Latn-ZZ",
            be: "be-Cyrl-BY",
            bef: "bef-Latn-ZZ",
            beh: "beh-Latn-ZZ",
            bej: "bej-Arab-SD",
            bem: "bem-Latn-ZM",
            bet: "bet-Latn-ZZ",
            bew: "bew-Latn-ID",
            bex: "bex-Latn-ZZ",
            bez: "bez-Latn-TZ",
            bfd: "bfd-Latn-CM",
            bfq: "bfq-Taml-IN",
            bft: "bft-Arab-PK",
            bfy: "bfy-Deva-IN",
            bg: "bg-Cyrl-BG",
            bgc: "bgc-Deva-IN",
            bgn: "bgn-Arab-PK",
            bgx: "bgx-Grek-TR",
            bhb: "bhb-Deva-IN",
            bhg: "bhg-Latn-ZZ",
            bhi: "bhi-Deva-IN",
            bhl: "bhl-Latn-ZZ",
            bho: "bho-Deva-IN",
            bhy: "bhy-Latn-ZZ",
            bi: "bi-Latn-VU",
            bib: "bib-Latn-ZZ",
            big: "big-Latn-ZZ",
            bik: "bik-Latn-PH",
            bim: "bim-Latn-ZZ",
            bin: "bin-Latn-NG",
            bio: "bio-Latn-ZZ",
            biq: "biq-Latn-ZZ",
            bjh: "bjh-Latn-ZZ",
            bji: "bji-Ethi-ZZ",
            bjj: "bjj-Deva-IN",
            bjn: "bjn-Latn-ID",
            bjo: "bjo-Latn-ZZ",
            bjr: "bjr-Latn-ZZ",
            bjt: "bjt-Latn-SN",
            bjz: "bjz-Latn-ZZ",
            bkc: "bkc-Latn-ZZ",
            bkm: "bkm-Latn-CM",
            bkq: "bkq-Latn-ZZ",
            bku: "bku-Latn-PH",
            bkv: "bkv-Latn-ZZ",
            blt: "blt-Tavt-VN",
            bm: "bm-Latn-ML",
            bmh: "bmh-Latn-ZZ",
            bmk: "bmk-Latn-ZZ",
            bmq: "bmq-Latn-ML",
            bmu: "bmu-Latn-ZZ",
            bn: "bn-Beng-BD",
            bng: "bng-Latn-ZZ",
            bnm: "bnm-Latn-ZZ",
            bnp: "bnp-Latn-ZZ",
            bo: "bo-Tibt-CN",
            boj: "boj-Latn-ZZ",
            bom: "bom-Latn-ZZ",
            bon: "bon-Latn-ZZ",
            bpy: "bpy-Beng-IN",
            bqc: "bqc-Latn-ZZ",
            bqi: "bqi-Arab-IR",
            bqp: "bqp-Latn-ZZ",
            bqv: "bqv-Latn-CI",
            br: "br-Latn-FR",
            bra: "bra-Deva-IN",
            brh: "brh-Arab-PK",
            brx: "brx-Deva-IN",
            brz: "brz-Latn-ZZ",
            bs: "bs-Latn-BA",
            bsj: "bsj-Latn-ZZ",
            bsq: "bsq-Bass-LR",
            bss: "bss-Latn-CM",
            bst: "bst-Ethi-ZZ",
            bto: "bto-Latn-PH",
            btt: "btt-Latn-ZZ",
            btv: "btv-Deva-PK",
            bua: "bua-Cyrl-RU",
            buc: "buc-Latn-YT",
            bud: "bud-Latn-ZZ",
            bug: "bug-Latn-ID",
            buk: "buk-Latn-ZZ",
            bum: "bum-Latn-CM",
            buo: "buo-Latn-ZZ",
            bus: "bus-Latn-ZZ",
            buu: "buu-Latn-ZZ",
            bvb: "bvb-Latn-GQ",
            bwd: "bwd-Latn-ZZ",
            bwr: "bwr-Latn-ZZ",
            bxh: "bxh-Latn-ZZ",
            bye: "bye-Latn-ZZ",
            byn: "byn-Ethi-ER",
            byr: "byr-Latn-ZZ",
            bys: "bys-Latn-ZZ",
            byv: "byv-Latn-CM",
            byx: "byx-Latn-ZZ",
            bza: "bza-Latn-ZZ",
            bze: "bze-Latn-ML",
            bzf: "bzf-Latn-ZZ",
            bzh: "bzh-Latn-ZZ",
            bzw: "bzw-Latn-ZZ",
            ca: "ca-Latn-ES",
            cad: "cad-Latn-US",
            can: "can-Latn-ZZ",
            cbj: "cbj-Latn-ZZ",
            cch: "cch-Latn-NG",
            ccp: "ccp-Cakm-BD",
            ce: "ce-Cyrl-RU",
            ceb: "ceb-Latn-PH",
            cfa: "cfa-Latn-ZZ",
            cgg: "cgg-Latn-UG",
            ch: "ch-Latn-GU",
            chk: "chk-Latn-FM",
            chm: "chm-Cyrl-RU",
            cho: "cho-Latn-US",
            chp: "chp-Latn-CA",
            chr: "chr-Cher-US",
            cic: "cic-Latn-US",
            cja: "cja-Arab-KH",
            cjm: "cjm-Cham-VN",
            cjv: "cjv-Latn-ZZ",
            ckb: "ckb-Arab-IQ",
            ckl: "ckl-Latn-ZZ",
            cko: "cko-Latn-ZZ",
            cky: "cky-Latn-ZZ",
            cla: "cla-Latn-ZZ",
            cme: "cme-Latn-ZZ",
            cmg: "cmg-Soyo-MN",
            co: "co-Latn-FR",
            cop: "cop-Copt-EG",
            cps: "cps-Latn-PH",
            cr: "cr-Cans-CA",
            crh: "crh-Cyrl-UA",
            crj: "crj-Cans-CA",
            crk: "crk-Cans-CA",
            crl: "crl-Cans-CA",
            crm: "crm-Cans-CA",
            crs: "crs-Latn-SC",
            cs: "cs-Latn-CZ",
            csb: "csb-Latn-PL",
            csw: "csw-Cans-CA",
            ctd: "ctd-Pauc-MM",
            cu: "cu-Cyrl-RU",
            "cu-Glag": "cu-Glag-BG",
            cv: "cv-Cyrl-RU",
            cy: "cy-Latn-GB",
            da: "da-Latn-DK",
            dad: "dad-Latn-ZZ",
            daf: "daf-Latn-CI",
            dag: "dag-Latn-ZZ",
            dah: "dah-Latn-ZZ",
            dak: "dak-Latn-US",
            dar: "dar-Cyrl-RU",
            dav: "dav-Latn-KE",
            dbd: "dbd-Latn-ZZ",
            dbq: "dbq-Latn-ZZ",
            dcc: "dcc-Arab-IN",
            ddn: "ddn-Latn-ZZ",
            de: "de-Latn-DE",
            ded: "ded-Latn-ZZ",
            den: "den-Latn-CA",
            dga: "dga-Latn-ZZ",
            dgh: "dgh-Latn-ZZ",
            dgi: "dgi-Latn-ZZ",
            dgl: "dgl-Arab-ZZ",
            dgr: "dgr-Latn-CA",
            dgz: "dgz-Latn-ZZ",
            dia: "dia-Latn-ZZ",
            dje: "dje-Latn-NE",
            dmf: "dmf-Medf-NG",
            dnj: "dnj-Latn-CI",
            dob: "dob-Latn-ZZ",
            doi: "doi-Deva-IN",
            dop: "dop-Latn-ZZ",
            dow: "dow-Latn-ZZ",
            drh: "drh-Mong-CN",
            dri: "dri-Latn-ZZ",
            drs: "drs-Ethi-ZZ",
            dsb: "dsb-Latn-DE",
            dtm: "dtm-Latn-ML",
            dtp: "dtp-Latn-MY",
            dts: "dts-Latn-ZZ",
            dty: "dty-Deva-NP",
            dua: "dua-Latn-CM",
            duc: "duc-Latn-ZZ",
            dud: "dud-Latn-ZZ",
            dug: "dug-Latn-ZZ",
            dv: "dv-Thaa-MV",
            dva: "dva-Latn-ZZ",
            dww: "dww-Latn-ZZ",
            dyo: "dyo-Latn-SN",
            dyu: "dyu-Latn-BF",
            dz: "dz-Tibt-BT",
            dzg: "dzg-Latn-ZZ",
            ebu: "ebu-Latn-KE",
            ee: "ee-Latn-GH",
            efi: "efi-Latn-NG",
            egl: "egl-Latn-IT",
            egy: "egy-Egyp-EG",
            eka: "eka-Latn-ZZ",
            eky: "eky-Kali-MM",
            el: "el-Grek-GR",
            ema: "ema-Latn-ZZ",
            emi: "emi-Latn-ZZ",
            en: "en-Latn-US",
            "en-Shaw": "en-Shaw-GB",
            enn: "enn-Latn-ZZ",
            enq: "enq-Latn-ZZ",
            eo: "eo-Latn-001",
            eri: "eri-Latn-ZZ",
            es: "es-Latn-ES",
            esg: "esg-Gonm-IN",
            esu: "esu-Latn-US",
            et: "et-Latn-EE",
            etr: "etr-Latn-ZZ",
            ett: "ett-Ital-IT",
            etu: "etu-Latn-ZZ",
            etx: "etx-Latn-ZZ",
            eu: "eu-Latn-ES",
            ewo: "ewo-Latn-CM",
            ext: "ext-Latn-ES",
            eza: "eza-Latn-ZZ",
            fa: "fa-Arab-IR",
            faa: "faa-Latn-ZZ",
            fab: "fab-Latn-ZZ",
            fag: "fag-Latn-ZZ",
            fai: "fai-Latn-ZZ",
            fan: "fan-Latn-GQ",
            ff: "ff-Latn-SN",
            "ff-Adlm": "ff-Adlm-GN",
            ffi: "ffi-Latn-ZZ",
            ffm: "ffm-Latn-ML",
            fi: "fi-Latn-FI",
            fia: "fia-Arab-SD",
            fil: "fil-Latn-PH",
            fit: "fit-Latn-SE",
            fj: "fj-Latn-FJ",
            flr: "flr-Latn-ZZ",
            fmp: "fmp-Latn-ZZ",
            fo: "fo-Latn-FO",
            fod: "fod-Latn-ZZ",
            fon: "fon-Latn-BJ",
            for: "for-Latn-ZZ",
            fpe: "fpe-Latn-ZZ",
            fqs: "fqs-Latn-ZZ",
            fr: "fr-Latn-FR",
            frc: "frc-Latn-US",
            frp: "frp-Latn-FR",
            frr: "frr-Latn-DE",
            frs: "frs-Latn-DE",
            fub: "fub-Arab-CM",
            fud: "fud-Latn-WF",
            fue: "fue-Latn-ZZ",
            fuf: "fuf-Latn-GN",
            fuh: "fuh-Latn-ZZ",
            fuq: "fuq-Latn-NE",
            fur: "fur-Latn-IT",
            fuv: "fuv-Latn-NG",
            fuy: "fuy-Latn-ZZ",
            fvr: "fvr-Latn-SD",
            fy: "fy-Latn-NL",
            ga: "ga-Latn-IE",
            gaa: "gaa-Latn-GH",
            gaf: "gaf-Latn-ZZ",
            gag: "gag-Latn-MD",
            gah: "gah-Latn-ZZ",
            gaj: "gaj-Latn-ZZ",
            gam: "gam-Latn-ZZ",
            gan: "gan-Hans-CN",
            gaw: "gaw-Latn-ZZ",
            gay: "gay-Latn-ID",
            gba: "gba-Latn-ZZ",
            gbf: "gbf-Latn-ZZ",
            gbm: "gbm-Deva-IN",
            gby: "gby-Latn-ZZ",
            gbz: "gbz-Arab-IR",
            gcr: "gcr-Latn-GF",
            gd: "gd-Latn-GB",
            gde: "gde-Latn-ZZ",
            gdn: "gdn-Latn-ZZ",
            gdr: "gdr-Latn-ZZ",
            geb: "geb-Latn-ZZ",
            gej: "gej-Latn-ZZ",
            gel: "gel-Latn-ZZ",
            gez: "gez-Ethi-ET",
            gfk: "gfk-Latn-ZZ",
            ggn: "ggn-Deva-NP",
            ghs: "ghs-Latn-ZZ",
            gil: "gil-Latn-KI",
            gim: "gim-Latn-ZZ",
            gjk: "gjk-Arab-PK",
            gjn: "gjn-Latn-ZZ",
            gju: "gju-Arab-PK",
            gkn: "gkn-Latn-ZZ",
            gkp: "gkp-Latn-ZZ",
            gl: "gl-Latn-ES",
            glk: "glk-Arab-IR",
            gmm: "gmm-Latn-ZZ",
            gmv: "gmv-Ethi-ZZ",
            gn: "gn-Latn-PY",
            gnd: "gnd-Latn-ZZ",
            gng: "gng-Latn-ZZ",
            god: "god-Latn-ZZ",
            gof: "gof-Ethi-ZZ",
            goi: "goi-Latn-ZZ",
            gom: "gom-Deva-IN",
            gon: "gon-Telu-IN",
            gor: "gor-Latn-ID",
            gos: "gos-Latn-NL",
            got: "got-Goth-UA",
            grb: "grb-Latn-ZZ",
            grc: "grc-Cprt-CY",
            "grc-Linb": "grc-Linb-GR",
            grt: "grt-Beng-IN",
            grw: "grw-Latn-ZZ",
            gsw: "gsw-Latn-CH",
            gu: "gu-Gujr-IN",
            gub: "gub-Latn-BR",
            guc: "guc-Latn-CO",
            gud: "gud-Latn-ZZ",
            gur: "gur-Latn-GH",
            guw: "guw-Latn-ZZ",
            gux: "gux-Latn-ZZ",
            guz: "guz-Latn-KE",
            gv: "gv-Latn-IM",
            gvf: "gvf-Latn-ZZ",
            gvr: "gvr-Deva-NP",
            gvs: "gvs-Latn-ZZ",
            gwc: "gwc-Arab-ZZ",
            gwi: "gwi-Latn-CA",
            gwt: "gwt-Arab-ZZ",
            gyi: "gyi-Latn-ZZ",
            ha: "ha-Latn-NG",
            "ha-CM": "ha-Arab-CM",
            "ha-SD": "ha-Arab-SD",
            hag: "hag-Latn-ZZ",
            hak: "hak-Hans-CN",
            ham: "ham-Latn-ZZ",
            haw: "haw-Latn-US",
            haz: "haz-Arab-AF",
            hbb: "hbb-Latn-ZZ",
            hdy: "hdy-Ethi-ZZ",
            he: "he-Hebr-IL",
            hhy: "hhy-Latn-ZZ",
            hi: "hi-Deva-IN",
            hia: "hia-Latn-ZZ",
            hif: "hif-Latn-FJ",
            hig: "hig-Latn-ZZ",
            hih: "hih-Latn-ZZ",
            hil: "hil-Latn-PH",
            hla: "hla-Latn-ZZ",
            hlu: "hlu-Hluw-TR",
            hmd: "hmd-Plrd-CN",
            hmt: "hmt-Latn-ZZ",
            hnd: "hnd-Arab-PK",
            hne: "hne-Deva-IN",
            hnj: "hnj-Hmng-LA",
            hnn: "hnn-Latn-PH",
            hno: "hno-Arab-PK",
            ho: "ho-Latn-PG",
            hoc: "hoc-Deva-IN",
            hoj: "hoj-Deva-IN",
            hot: "hot-Latn-ZZ",
            hr: "hr-Latn-HR",
            hsb: "hsb-Latn-DE",
            hsn: "hsn-Hans-CN",
            ht: "ht-Latn-HT",
            hu: "hu-Latn-HU",
            hui: "hui-Latn-ZZ",
            hy: "hy-Armn-AM",
            hz: "hz-Latn-NA",
            ia: "ia-Latn-001",
            ian: "ian-Latn-ZZ",
            iar: "iar-Latn-ZZ",
            iba: "iba-Latn-MY",
            ibb: "ibb-Latn-NG",
            iby: "iby-Latn-ZZ",
            ica: "ica-Latn-ZZ",
            ich: "ich-Latn-ZZ",
            id: "id-Latn-ID",
            idd: "idd-Latn-ZZ",
            idi: "idi-Latn-ZZ",
            idu: "idu-Latn-ZZ",
            ife: "ife-Latn-TG",
            ig: "ig-Latn-NG",
            igb: "igb-Latn-ZZ",
            ige: "ige-Latn-ZZ",
            ii: "ii-Yiii-CN",
            ijj: "ijj-Latn-ZZ",
            ik: "ik-Latn-US",
            ikk: "ikk-Latn-ZZ",
            ikt: "ikt-Latn-CA",
            ikw: "ikw-Latn-ZZ",
            ikx: "ikx-Latn-ZZ",
            ilo: "ilo-Latn-PH",
            imo: "imo-Latn-ZZ",
            in: "in-Latn-ID",
            inh: "inh-Cyrl-RU",
            io: "io-Latn-001",
            iou: "iou-Latn-ZZ",
            iri: "iri-Latn-ZZ",
            is: "is-Latn-IS",
            it: "it-Latn-IT",
            iu: "iu-Cans-CA",
            iw: "iw-Hebr-IL",
            iwm: "iwm-Latn-ZZ",
            iws: "iws-Latn-ZZ",
            izh: "izh-Latn-RU",
            izi: "izi-Latn-ZZ",
            ja: "ja-Jpan-JP",
            jab: "jab-Latn-ZZ",
            jam: "jam-Latn-JM",
            jar: "jar-Latn-ZZ",
            jbo: "jbo-Latn-001",
            jbu: "jbu-Latn-ZZ",
            jen: "jen-Latn-ZZ",
            jgk: "jgk-Latn-ZZ",
            jgo: "jgo-Latn-CM",
            ji: "ji-Hebr-UA",
            jib: "jib-Latn-ZZ",
            jmc: "jmc-Latn-TZ",
            jml: "jml-Deva-NP",
            jra: "jra-Latn-ZZ",
            jut: "jut-Latn-DK",
            jv: "jv-Latn-ID",
            jw: "jw-Latn-ID",
            ka: "ka-Geor-GE",
            kaa: "kaa-Cyrl-UZ",
            kab: "kab-Latn-DZ",
            kac: "kac-Latn-MM",
            kad: "kad-Latn-ZZ",
            kai: "kai-Latn-ZZ",
            kaj: "kaj-Latn-NG",
            kam: "kam-Latn-KE",
            kao: "kao-Latn-ML",
            kbd: "kbd-Cyrl-RU",
            kbm: "kbm-Latn-ZZ",
            kbp: "kbp-Latn-ZZ",
            kbq: "kbq-Latn-ZZ",
            kbx: "kbx-Latn-ZZ",
            kby: "kby-Arab-NE",
            kcg: "kcg-Latn-NG",
            kck: "kck-Latn-ZW",
            kcl: "kcl-Latn-ZZ",
            kct: "kct-Latn-ZZ",
            kde: "kde-Latn-TZ",
            kdh: "kdh-Arab-TG",
            kdl: "kdl-Latn-ZZ",
            kdt: "kdt-Thai-TH",
            kea: "kea-Latn-CV",
            ken: "ken-Latn-CM",
            kez: "kez-Latn-ZZ",
            kfo: "kfo-Latn-CI",
            kfr: "kfr-Deva-IN",
            kfy: "kfy-Deva-IN",
            kg: "kg-Latn-CD",
            kge: "kge-Latn-ID",
            kgf: "kgf-Latn-ZZ",
            kgp: "kgp-Latn-BR",
            kha: "kha-Latn-IN",
            khb: "khb-Talu-CN",
            khn: "khn-Deva-IN",
            khq: "khq-Latn-ML",
            khs: "khs-Latn-ZZ",
            kht: "kht-Mymr-IN",
            khw: "khw-Arab-PK",
            khz: "khz-Latn-ZZ",
            ki: "ki-Latn-KE",
            kij: "kij-Latn-ZZ",
            kiu: "kiu-Latn-TR",
            kiw: "kiw-Latn-ZZ",
            kj: "kj-Latn-NA",
            kjd: "kjd-Latn-ZZ",
            kjg: "kjg-Laoo-LA",
            kjs: "kjs-Latn-ZZ",
            kjy: "kjy-Latn-ZZ",
            kk: "kk-Cyrl-KZ",
            "kk-AF": "kk-Arab-AF",
            "kk-Arab": "kk-Arab-CN",
            "kk-CN": "kk-Arab-CN",
            "kk-IR": "kk-Arab-IR",
            "kk-MN": "kk-Arab-MN",
            kkc: "kkc-Latn-ZZ",
            kkj: "kkj-Latn-CM",
            kl: "kl-Latn-GL",
            kln: "kln-Latn-KE",
            klq: "klq-Latn-ZZ",
            klt: "klt-Latn-ZZ",
            klx: "klx-Latn-ZZ",
            km: "km-Khmr-KH",
            kmb: "kmb-Latn-AO",
            kmh: "kmh-Latn-ZZ",
            kmo: "kmo-Latn-ZZ",
            kms: "kms-Latn-ZZ",
            kmu: "kmu-Latn-ZZ",
            kmw: "kmw-Latn-ZZ",
            kn: "kn-Knda-IN",
            knf: "knf-Latn-GW",
            knp: "knp-Latn-ZZ",
            ko: "ko-Kore-KR",
            koi: "koi-Cyrl-RU",
            kok: "kok-Deva-IN",
            kol: "kol-Latn-ZZ",
            kos: "kos-Latn-FM",
            koz: "koz-Latn-ZZ",
            kpe: "kpe-Latn-LR",
            kpf: "kpf-Latn-ZZ",
            kpo: "kpo-Latn-ZZ",
            kpr: "kpr-Latn-ZZ",
            kpx: "kpx-Latn-ZZ",
            kqb: "kqb-Latn-ZZ",
            kqf: "kqf-Latn-ZZ",
            kqs: "kqs-Latn-ZZ",
            kqy: "kqy-Ethi-ZZ",
            kr: "kr-Latn-ZZ",
            krc: "krc-Cyrl-RU",
            kri: "kri-Latn-SL",
            krj: "krj-Latn-PH",
            krl: "krl-Latn-RU",
            krs: "krs-Latn-ZZ",
            kru: "kru-Deva-IN",
            ks: "ks-Arab-IN",
            ksb: "ksb-Latn-TZ",
            ksd: "ksd-Latn-ZZ",
            ksf: "ksf-Latn-CM",
            ksh: "ksh-Latn-DE",
            ksj: "ksj-Latn-ZZ",
            ksr: "ksr-Latn-ZZ",
            ktb: "ktb-Ethi-ZZ",
            ktm: "ktm-Latn-ZZ",
            kto: "kto-Latn-ZZ",
            ktr: "ktr-Latn-MY",
            ku: "ku-Latn-TR",
            "ku-Arab": "ku-Arab-IQ",
            "ku-LB": "ku-Arab-LB",
            "ku-Yezi": "ku-Yezi-GE",
            kub: "kub-Latn-ZZ",
            kud: "kud-Latn-ZZ",
            kue: "kue-Latn-ZZ",
            kuj: "kuj-Latn-ZZ",
            kum: "kum-Cyrl-RU",
            kun: "kun-Latn-ZZ",
            kup: "kup-Latn-ZZ",
            kus: "kus-Latn-ZZ",
            kv: "kv-Cyrl-RU",
            kvg: "kvg-Latn-ZZ",
            kvr: "kvr-Latn-ID",
            kvx: "kvx-Arab-PK",
            kw: "kw-Latn-GB",
            kwj: "kwj-Latn-ZZ",
            kwo: "kwo-Latn-ZZ",
            kwq: "kwq-Latn-ZZ",
            kxa: "kxa-Latn-ZZ",
            kxc: "kxc-Ethi-ZZ",
            kxe: "kxe-Latn-ZZ",
            kxl: "kxl-Deva-IN",
            kxm: "kxm-Thai-TH",
            kxp: "kxp-Arab-PK",
            kxw: "kxw-Latn-ZZ",
            kxz: "kxz-Latn-ZZ",
            ky: "ky-Cyrl-KG",
            "ky-Arab": "ky-Arab-CN",
            "ky-CN": "ky-Arab-CN",
            "ky-Latn": "ky-Latn-TR",
            "ky-TR": "ky-Latn-TR",
            kye: "kye-Latn-ZZ",
            kyx: "kyx-Latn-ZZ",
            kzh: "kzh-Arab-ZZ",
            kzj: "kzj-Latn-MY",
            kzr: "kzr-Latn-ZZ",
            kzt: "kzt-Latn-MY",
            la: "la-Latn-VA",
            lab: "lab-Lina-GR",
            lad: "lad-Hebr-IL",
            lag: "lag-Latn-TZ",
            lah: "lah-Arab-PK",
            laj: "laj-Latn-UG",
            las: "las-Latn-ZZ",
            lb: "lb-Latn-LU",
            lbe: "lbe-Cyrl-RU",
            lbu: "lbu-Latn-ZZ",
            lbw: "lbw-Latn-ID",
            lcm: "lcm-Latn-ZZ",
            lcp: "lcp-Thai-CN",
            ldb: "ldb-Latn-ZZ",
            led: "led-Latn-ZZ",
            lee: "lee-Latn-ZZ",
            lem: "lem-Latn-ZZ",
            lep: "lep-Lepc-IN",
            leq: "leq-Latn-ZZ",
            leu: "leu-Latn-ZZ",
            lez: "lez-Cyrl-RU",
            lg: "lg-Latn-UG",
            lgg: "lgg-Latn-ZZ",
            li: "li-Latn-NL",
            lia: "lia-Latn-ZZ",
            lid: "lid-Latn-ZZ",
            lif: "lif-Deva-NP",
            "lif-Limb": "lif-Limb-IN",
            lig: "lig-Latn-ZZ",
            lih: "lih-Latn-ZZ",
            lij: "lij-Latn-IT",
            lis: "lis-Lisu-CN",
            ljp: "ljp-Latn-ID",
            lki: "lki-Arab-IR",
            lkt: "lkt-Latn-US",
            lle: "lle-Latn-ZZ",
            lln: "lln-Latn-ZZ",
            lmn: "lmn-Telu-IN",
            lmo: "lmo-Latn-IT",
            lmp: "lmp-Latn-ZZ",
            ln: "ln-Latn-CD",
            lns: "lns-Latn-ZZ",
            lnu: "lnu-Latn-ZZ",
            lo: "lo-Laoo-LA",
            loj: "loj-Latn-ZZ",
            lok: "lok-Latn-ZZ",
            lol: "lol-Latn-CD",
            lor: "lor-Latn-ZZ",
            los: "los-Latn-ZZ",
            loz: "loz-Latn-ZM",
            lrc: "lrc-Arab-IR",
            lt: "lt-Latn-LT",
            ltg: "ltg-Latn-LV",
            lu: "lu-Latn-CD",
            lua: "lua-Latn-CD",
            luo: "luo-Latn-KE",
            luy: "luy-Latn-KE",
            luz: "luz-Arab-IR",
            lv: "lv-Latn-LV",
            lwl: "lwl-Thai-TH",
            lzh: "lzh-Hans-CN",
            lzz: "lzz-Latn-TR",
            mad: "mad-Latn-ID",
            maf: "maf-Latn-CM",
            mag: "mag-Deva-IN",
            mai: "mai-Deva-IN",
            mak: "mak-Latn-ID",
            man: "man-Latn-GM",
            "man-GN": "man-Nkoo-GN",
            "man-Nkoo": "man-Nkoo-GN",
            mas: "mas-Latn-KE",
            maw: "maw-Latn-ZZ",
            maz: "maz-Latn-MX",
            mbh: "mbh-Latn-ZZ",
            mbo: "mbo-Latn-ZZ",
            mbq: "mbq-Latn-ZZ",
            mbu: "mbu-Latn-ZZ",
            mbw: "mbw-Latn-ZZ",
            mci: "mci-Latn-ZZ",
            mcp: "mcp-Latn-ZZ",
            mcq: "mcq-Latn-ZZ",
            mcr: "mcr-Latn-ZZ",
            mcu: "mcu-Latn-ZZ",
            mda: "mda-Latn-ZZ",
            mde: "mde-Arab-ZZ",
            mdf: "mdf-Cyrl-RU",
            mdh: "mdh-Latn-PH",
            mdj: "mdj-Latn-ZZ",
            mdr: "mdr-Latn-ID",
            mdx: "mdx-Ethi-ZZ",
            med: "med-Latn-ZZ",
            mee: "mee-Latn-ZZ",
            mek: "mek-Latn-ZZ",
            men: "men-Latn-SL",
            mer: "mer-Latn-KE",
            met: "met-Latn-ZZ",
            meu: "meu-Latn-ZZ",
            mfa: "mfa-Arab-TH",
            mfe: "mfe-Latn-MU",
            mfn: "mfn-Latn-ZZ",
            mfo: "mfo-Latn-ZZ",
            mfq: "mfq-Latn-ZZ",
            mg: "mg-Latn-MG",
            mgh: "mgh-Latn-MZ",
            mgl: "mgl-Latn-ZZ",
            mgo: "mgo-Latn-CM",
            mgp: "mgp-Deva-NP",
            mgy: "mgy-Latn-TZ",
            mh: "mh-Latn-MH",
            mhi: "mhi-Latn-ZZ",
            mhl: "mhl-Latn-ZZ",
            mi: "mi-Latn-NZ",
            mif: "mif-Latn-ZZ",
            min: "min-Latn-ID",
            miw: "miw-Latn-ZZ",
            mk: "mk-Cyrl-MK",
            mki: "mki-Arab-ZZ",
            mkl: "mkl-Latn-ZZ",
            mkp: "mkp-Latn-ZZ",
            mkw: "mkw-Latn-ZZ",
            ml: "ml-Mlym-IN",
            mle: "mle-Latn-ZZ",
            mlp: "mlp-Latn-ZZ",
            mls: "mls-Latn-SD",
            mmo: "mmo-Latn-ZZ",
            mmu: "mmu-Latn-ZZ",
            mmx: "mmx-Latn-ZZ",
            mn: "mn-Cyrl-MN",
            "mn-CN": "mn-Mong-CN",
            "mn-Mong": "mn-Mong-CN",
            mna: "mna-Latn-ZZ",
            mnf: "mnf-Latn-ZZ",
            mni: "mni-Beng-IN",
            mnw: "mnw-Mymr-MM",
            mo: "mo-Latn-RO",
            moa: "moa-Latn-ZZ",
            moe: "moe-Latn-CA",
            moh: "moh-Latn-CA",
            mos: "mos-Latn-BF",
            mox: "mox-Latn-ZZ",
            mpp: "mpp-Latn-ZZ",
            mps: "mps-Latn-ZZ",
            mpt: "mpt-Latn-ZZ",
            mpx: "mpx-Latn-ZZ",
            mql: "mql-Latn-ZZ",
            mr: "mr-Deva-IN",
            mrd: "mrd-Deva-NP",
            mrj: "mrj-Cyrl-RU",
            mro: "mro-Mroo-BD",
            ms: "ms-Latn-MY",
            "ms-CC": "ms-Arab-CC",
            mt: "mt-Latn-MT",
            mtc: "mtc-Latn-ZZ",
            mtf: "mtf-Latn-ZZ",
            mti: "mti-Latn-ZZ",
            mtr: "mtr-Deva-IN",
            mua: "mua-Latn-CM",
            mur: "mur-Latn-ZZ",
            mus: "mus-Latn-US",
            mva: "mva-Latn-ZZ",
            mvn: "mvn-Latn-ZZ",
            mvy: "mvy-Arab-PK",
            mwk: "mwk-Latn-ML",
            mwr: "mwr-Deva-IN",
            mwv: "mwv-Latn-ID",
            mww: "mww-Hmnp-US",
            mxc: "mxc-Latn-ZW",
            mxm: "mxm-Latn-ZZ",
            my: "my-Mymr-MM",
            myk: "myk-Latn-ZZ",
            mym: "mym-Ethi-ZZ",
            myv: "myv-Cyrl-RU",
            myw: "myw-Latn-ZZ",
            myx: "myx-Latn-UG",
            myz: "myz-Mand-IR",
            mzk: "mzk-Latn-ZZ",
            mzm: "mzm-Latn-ZZ",
            mzn: "mzn-Arab-IR",
            mzp: "mzp-Latn-ZZ",
            mzw: "mzw-Latn-ZZ",
            mzz: "mzz-Latn-ZZ",
            na: "na-Latn-NR",
            nac: "nac-Latn-ZZ",
            naf: "naf-Latn-ZZ",
            nak: "nak-Latn-ZZ",
            nan: "nan-Hans-CN",
            nap: "nap-Latn-IT",
            naq: "naq-Latn-NA",
            nas: "nas-Latn-ZZ",
            nb: "nb-Latn-NO",
            nca: "nca-Latn-ZZ",
            nce: "nce-Latn-ZZ",
            ncf: "ncf-Latn-ZZ",
            nch: "nch-Latn-MX",
            nco: "nco-Latn-ZZ",
            ncu: "ncu-Latn-ZZ",
            nd: "nd-Latn-ZW",
            ndc: "ndc-Latn-MZ",
            nds: "nds-Latn-DE",
            ne: "ne-Deva-NP",
            neb: "neb-Latn-ZZ",
            new: "new-Deva-NP",
            nex: "nex-Latn-ZZ",
            nfr: "nfr-Latn-ZZ",
            ng: "ng-Latn-NA",
            nga: "nga-Latn-ZZ",
            ngb: "ngb-Latn-ZZ",
            ngl: "ngl-Latn-MZ",
            nhb: "nhb-Latn-ZZ",
            nhe: "nhe-Latn-MX",
            nhw: "nhw-Latn-MX",
            nif: "nif-Latn-ZZ",
            nii: "nii-Latn-ZZ",
            nij: "nij-Latn-ID",
            nin: "nin-Latn-ZZ",
            niu: "niu-Latn-NU",
            niy: "niy-Latn-ZZ",
            niz: "niz-Latn-ZZ",
            njo: "njo-Latn-IN",
            nkg: "nkg-Latn-ZZ",
            nko: "nko-Latn-ZZ",
            nl: "nl-Latn-NL",
            nmg: "nmg-Latn-CM",
            nmz: "nmz-Latn-ZZ",
            nn: "nn-Latn-NO",
            nnf: "nnf-Latn-ZZ",
            nnh: "nnh-Latn-CM",
            nnk: "nnk-Latn-ZZ",
            nnm: "nnm-Latn-ZZ",
            nnp: "nnp-Wcho-IN",
            no: "no-Latn-NO",
            nod: "nod-Lana-TH",
            noe: "noe-Deva-IN",
            non: "non-Runr-SE",
            nop: "nop-Latn-ZZ",
            nou: "nou-Latn-ZZ",
            nqo: "nqo-Nkoo-GN",
            nr: "nr-Latn-ZA",
            nrb: "nrb-Latn-ZZ",
            nsk: "nsk-Cans-CA",
            nsn: "nsn-Latn-ZZ",
            nso: "nso-Latn-ZA",
            nss: "nss-Latn-ZZ",
            ntm: "ntm-Latn-ZZ",
            ntr: "ntr-Latn-ZZ",
            nui: "nui-Latn-ZZ",
            nup: "nup-Latn-ZZ",
            nus: "nus-Latn-SS",
            nuv: "nuv-Latn-ZZ",
            nux: "nux-Latn-ZZ",
            nv: "nv-Latn-US",
            nwb: "nwb-Latn-ZZ",
            nxq: "nxq-Latn-CN",
            nxr: "nxr-Latn-ZZ",
            ny: "ny-Latn-MW",
            nym: "nym-Latn-TZ",
            nyn: "nyn-Latn-UG",
            nzi: "nzi-Latn-GH",
            oc: "oc-Latn-FR",
            ogc: "ogc-Latn-ZZ",
            okr: "okr-Latn-ZZ",
            okv: "okv-Latn-ZZ",
            om: "om-Latn-ET",
            ong: "ong-Latn-ZZ",
            onn: "onn-Latn-ZZ",
            ons: "ons-Latn-ZZ",
            opm: "opm-Latn-ZZ",
            or: "or-Orya-IN",
            oro: "oro-Latn-ZZ",
            oru: "oru-Arab-ZZ",
            os: "os-Cyrl-GE",
            osa: "osa-Osge-US",
            ota: "ota-Arab-ZZ",
            otk: "otk-Orkh-MN",
            ozm: "ozm-Latn-ZZ",
            pa: "pa-Guru-IN",
            "pa-Arab": "pa-Arab-PK",
            "pa-PK": "pa-Arab-PK",
            pag: "pag-Latn-PH",
            pal: "pal-Phli-IR",
            "pal-Phlp": "pal-Phlp-CN",
            pam: "pam-Latn-PH",
            pap: "pap-Latn-AW",
            pau: "pau-Latn-PW",
            pbi: "pbi-Latn-ZZ",
            pcd: "pcd-Latn-FR",
            pcm: "pcm-Latn-NG",
            pdc: "pdc-Latn-US",
            pdt: "pdt-Latn-CA",
            ped: "ped-Latn-ZZ",
            peo: "peo-Xpeo-IR",
            pex: "pex-Latn-ZZ",
            pfl: "pfl-Latn-DE",
            phl: "phl-Arab-ZZ",
            phn: "phn-Phnx-LB",
            pil: "pil-Latn-ZZ",
            pip: "pip-Latn-ZZ",
            pka: "pka-Brah-IN",
            pko: "pko-Latn-KE",
            pl: "pl-Latn-PL",
            pla: "pla-Latn-ZZ",
            pms: "pms-Latn-IT",
            png: "png-Latn-ZZ",
            pnn: "pnn-Latn-ZZ",
            pnt: "pnt-Grek-GR",
            pon: "pon-Latn-FM",
            ppa: "ppa-Deva-IN",
            ppo: "ppo-Latn-ZZ",
            pra: "pra-Khar-PK",
            prd: "prd-Arab-IR",
            prg: "prg-Latn-001",
            ps: "ps-Arab-AF",
            pss: "pss-Latn-ZZ",
            pt: "pt-Latn-BR",
            ptp: "ptp-Latn-ZZ",
            puu: "puu-Latn-GA",
            pwa: "pwa-Latn-ZZ",
            qu: "qu-Latn-PE",
            quc: "quc-Latn-GT",
            qug: "qug-Latn-EC",
            rai: "rai-Latn-ZZ",
            raj: "raj-Deva-IN",
            rao: "rao-Latn-ZZ",
            rcf: "rcf-Latn-RE",
            rej: "rej-Latn-ID",
            rel: "rel-Latn-ZZ",
            res: "res-Latn-ZZ",
            rgn: "rgn-Latn-IT",
            rhg: "rhg-Arab-MM",
            ria: "ria-Latn-IN",
            rif: "rif-Tfng-MA",
            "rif-NL": "rif-Latn-NL",
            rjs: "rjs-Deva-NP",
            rkt: "rkt-Beng-BD",
            rm: "rm-Latn-CH",
            rmf: "rmf-Latn-FI",
            rmo: "rmo-Latn-CH",
            rmt: "rmt-Arab-IR",
            rmu: "rmu-Latn-SE",
            rn: "rn-Latn-BI",
            rna: "rna-Latn-ZZ",
            rng: "rng-Latn-MZ",
            ro: "ro-Latn-RO",
            rob: "rob-Latn-ID",
            rof: "rof-Latn-TZ",
            roo: "roo-Latn-ZZ",
            rro: "rro-Latn-ZZ",
            rtm: "rtm-Latn-FJ",
            ru: "ru-Cyrl-RU",
            rue: "rue-Cyrl-UA",
            rug: "rug-Latn-SB",
            rw: "rw-Latn-RW",
            rwk: "rwk-Latn-TZ",
            rwo: "rwo-Latn-ZZ",
            ryu: "ryu-Kana-JP",
            sa: "sa-Deva-IN",
            saf: "saf-Latn-GH",
            sah: "sah-Cyrl-RU",
            saq: "saq-Latn-KE",
            sas: "sas-Latn-ID",
            sat: "sat-Olck-IN",
            sav: "sav-Latn-SN",
            saz: "saz-Saur-IN",
            sba: "sba-Latn-ZZ",
            sbe: "sbe-Latn-ZZ",
            sbp: "sbp-Latn-TZ",
            sc: "sc-Latn-IT",
            sck: "sck-Deva-IN",
            scl: "scl-Arab-ZZ",
            scn: "scn-Latn-IT",
            sco: "sco-Latn-GB",
            scs: "scs-Latn-CA",
            sd: "sd-Arab-PK",
            "sd-Deva": "sd-Deva-IN",
            "sd-Khoj": "sd-Khoj-IN",
            "sd-Sind": "sd-Sind-IN",
            sdc: "sdc-Latn-IT",
            sdh: "sdh-Arab-IR",
            se: "se-Latn-NO",
            sef: "sef-Latn-CI",
            seh: "seh-Latn-MZ",
            sei: "sei-Latn-MX",
            ses: "ses-Latn-ML",
            sg: "sg-Latn-CF",
            sga: "sga-Ogam-IE",
            sgs: "sgs-Latn-LT",
            sgw: "sgw-Ethi-ZZ",
            sgz: "sgz-Latn-ZZ",
            shi: "shi-Tfng-MA",
            shk: "shk-Latn-ZZ",
            shn: "shn-Mymr-MM",
            shu: "shu-Arab-ZZ",
            si: "si-Sinh-LK",
            sid: "sid-Latn-ET",
            sig: "sig-Latn-ZZ",
            sil: "sil-Latn-ZZ",
            sim: "sim-Latn-ZZ",
            sjr: "sjr-Latn-ZZ",
            sk: "sk-Latn-SK",
            skc: "skc-Latn-ZZ",
            skr: "skr-Arab-PK",
            sks: "sks-Latn-ZZ",
            sl: "sl-Latn-SI",
            sld: "sld-Latn-ZZ",
            sli: "sli-Latn-PL",
            sll: "sll-Latn-ZZ",
            sly: "sly-Latn-ID",
            sm: "sm-Latn-WS",
            sma: "sma-Latn-SE",
            smj: "smj-Latn-SE",
            smn: "smn-Latn-FI",
            smp: "smp-Samr-IL",
            smq: "smq-Latn-ZZ",
            sms: "sms-Latn-FI",
            sn: "sn-Latn-ZW",
            snc: "snc-Latn-ZZ",
            snk: "snk-Latn-ML",
            snp: "snp-Latn-ZZ",
            snx: "snx-Latn-ZZ",
            sny: "sny-Latn-ZZ",
            so: "so-Latn-SO",
            sog: "sog-Sogd-UZ",
            sok: "sok-Latn-ZZ",
            soq: "soq-Latn-ZZ",
            sou: "sou-Thai-TH",
            soy: "soy-Latn-ZZ",
            spd: "spd-Latn-ZZ",
            spl: "spl-Latn-ZZ",
            sps: "sps-Latn-ZZ",
            sq: "sq-Latn-AL",
            sr: "sr-Cyrl-RS",
            "sr-ME": "sr-Latn-ME",
            "sr-RO": "sr-Latn-RO",
            "sr-RU": "sr-Latn-RU",
            "sr-TR": "sr-Latn-TR",
            srb: "srb-Sora-IN",
            srn: "srn-Latn-SR",
            srr: "srr-Latn-SN",
            srx: "srx-Deva-IN",
            ss: "ss-Latn-ZA",
            ssd: "ssd-Latn-ZZ",
            ssg: "ssg-Latn-ZZ",
            ssy: "ssy-Latn-ER",
            st: "st-Latn-ZA",
            stk: "stk-Latn-ZZ",
            stq: "stq-Latn-DE",
            su: "su-Latn-ID",
            sua: "sua-Latn-ZZ",
            sue: "sue-Latn-ZZ",
            suk: "suk-Latn-TZ",
            sur: "sur-Latn-ZZ",
            sus: "sus-Latn-GN",
            sv: "sv-Latn-SE",
            sw: "sw-Latn-TZ",
            swb: "swb-Arab-YT",
            swc: "swc-Latn-CD",
            swg: "swg-Latn-DE",
            swp: "swp-Latn-ZZ",
            swv: "swv-Deva-IN",
            sxn: "sxn-Latn-ID",
            sxw: "sxw-Latn-ZZ",
            syl: "syl-Beng-BD",
            syr: "syr-Syrc-IQ",
            szl: "szl-Latn-PL",
            ta: "ta-Taml-IN",
            taj: "taj-Deva-NP",
            tal: "tal-Latn-ZZ",
            tan: "tan-Latn-ZZ",
            taq: "taq-Latn-ZZ",
            tbc: "tbc-Latn-ZZ",
            tbd: "tbd-Latn-ZZ",
            tbf: "tbf-Latn-ZZ",
            tbg: "tbg-Latn-ZZ",
            tbo: "tbo-Latn-ZZ",
            tbw: "tbw-Latn-PH",
            tbz: "tbz-Latn-ZZ",
            tci: "tci-Latn-ZZ",
            tcy: "tcy-Knda-IN",
            tdd: "tdd-Tale-CN",
            tdg: "tdg-Deva-NP",
            tdh: "tdh-Deva-NP",
            tdu: "tdu-Latn-MY",
            te: "te-Telu-IN",
            ted: "ted-Latn-ZZ",
            tem: "tem-Latn-SL",
            teo: "teo-Latn-UG",
            tet: "tet-Latn-TL",
            tfi: "tfi-Latn-ZZ",
            tg: "tg-Cyrl-TJ",
            "tg-Arab": "tg-Arab-PK",
            "tg-PK": "tg-Arab-PK",
            tgc: "tgc-Latn-ZZ",
            tgo: "tgo-Latn-ZZ",
            tgu: "tgu-Latn-ZZ",
            th: "th-Thai-TH",
            thl: "thl-Deva-NP",
            thq: "thq-Deva-NP",
            thr: "thr-Deva-NP",
            ti: "ti-Ethi-ET",
            tif: "tif-Latn-ZZ",
            tig: "tig-Ethi-ER",
            tik: "tik-Latn-ZZ",
            tim: "tim-Latn-ZZ",
            tio: "tio-Latn-ZZ",
            tiv: "tiv-Latn-NG",
            tk: "tk-Latn-TM",
            tkl: "tkl-Latn-TK",
            tkr: "tkr-Latn-AZ",
            tkt: "tkt-Deva-NP",
            tl: "tl-Latn-PH",
            tlf: "tlf-Latn-ZZ",
            tlx: "tlx-Latn-ZZ",
            tly: "tly-Latn-AZ",
            tmh: "tmh-Latn-NE",
            tmy: "tmy-Latn-ZZ",
            tn: "tn-Latn-ZA",
            tnh: "tnh-Latn-ZZ",
            to: "to-Latn-TO",
            tof: "tof-Latn-ZZ",
            tog: "tog-Latn-MW",
            toq: "toq-Latn-ZZ",
            tpi: "tpi-Latn-PG",
            tpm: "tpm-Latn-ZZ",
            tpz: "tpz-Latn-ZZ",
            tqo: "tqo-Latn-ZZ",
            tr: "tr-Latn-TR",
            tru: "tru-Latn-TR",
            trv: "trv-Latn-TW",
            trw: "trw-Arab-PK",
            ts: "ts-Latn-ZA",
            tsd: "tsd-Grek-GR",
            tsf: "tsf-Deva-NP",
            tsg: "tsg-Latn-PH",
            tsj: "tsj-Tibt-BT",
            tsw: "tsw-Latn-ZZ",
            tt: "tt-Cyrl-RU",
            ttd: "ttd-Latn-ZZ",
            tte: "tte-Latn-ZZ",
            ttj: "ttj-Latn-UG",
            ttr: "ttr-Latn-ZZ",
            tts: "tts-Thai-TH",
            ttt: "ttt-Latn-AZ",
            tuh: "tuh-Latn-ZZ",
            tul: "tul-Latn-ZZ",
            tum: "tum-Latn-MW",
            tuq: "tuq-Latn-ZZ",
            tvd: "tvd-Latn-ZZ",
            tvl: "tvl-Latn-TV",
            tvu: "tvu-Latn-ZZ",
            twh: "twh-Latn-ZZ",
            twq: "twq-Latn-NE",
            txg: "txg-Tang-CN",
            ty: "ty-Latn-PF",
            tya: "tya-Latn-ZZ",
            tyv: "tyv-Cyrl-RU",
            tzm: "tzm-Latn-MA",
            ubu: "ubu-Latn-ZZ",
            udi: "udi-Aghb-RU",
            udm: "udm-Cyrl-RU",
            ug: "ug-Arab-CN",
            "ug-Cyrl": "ug-Cyrl-KZ",
            "ug-KZ": "ug-Cyrl-KZ",
            "ug-MN": "ug-Cyrl-MN",
            uga: "uga-Ugar-SY",
            uk: "uk-Cyrl-UA",
            uli: "uli-Latn-FM",
            umb: "umb-Latn-AO",
            und: "en-Latn-US",
            "und-002": "en-Latn-NG",
            "und-003": "en-Latn-US",
            "und-005": "pt-Latn-BR",
            "und-009": "en-Latn-AU",
            "und-011": "en-Latn-NG",
            "und-013": "es-Latn-MX",
            "und-014": "sw-Latn-TZ",
            "und-015": "ar-Arab-EG",
            "und-017": "sw-Latn-CD",
            "und-018": "en-Latn-ZA",
            "und-019": "en-Latn-US",
            "und-021": "en-Latn-US",
            "und-029": "es-Latn-CU",
            "und-030": "zh-Hans-CN",
            "und-034": "hi-Deva-IN",
            "und-035": "id-Latn-ID",
            "und-039": "it-Latn-IT",
            "und-053": "en-Latn-AU",
            "und-054": "en-Latn-PG",
            "und-057": "en-Latn-GU",
            "und-061": "sm-Latn-WS",
            "und-142": "zh-Hans-CN",
            "und-143": "uz-Latn-UZ",
            "und-145": "ar-Arab-SA",
            "und-150": "ru-Cyrl-RU",
            "und-151": "ru-Cyrl-RU",
            "und-154": "en-Latn-GB",
            "und-155": "de-Latn-DE",
            "und-202": "en-Latn-NG",
            "und-419": "es-Latn-419",
            "und-AD": "ca-Latn-AD",
            "und-Adlm": "ff-Adlm-GN",
            "und-AE": "ar-Arab-AE",
            "und-AF": "fa-Arab-AF",
            "und-Aghb": "udi-Aghb-RU",
            "und-Ahom": "aho-Ahom-IN",
            "und-AL": "sq-Latn-AL",
            "und-AM": "hy-Armn-AM",
            "und-AO": "pt-Latn-AO",
            "und-AQ": "und-Latn-AQ",
            "und-AR": "es-Latn-AR",
            "und-Arab": "ar-Arab-EG",
            "und-Arab-CC": "ms-Arab-CC",
            "und-Arab-CN": "ug-Arab-CN",
            "und-Arab-GB": "ks-Arab-GB",
            "und-Arab-ID": "ms-Arab-ID",
            "und-Arab-IN": "ur-Arab-IN",
            "und-Arab-KH": "cja-Arab-KH",
            "und-Arab-MM": "rhg-Arab-MM",
            "und-Arab-MN": "kk-Arab-MN",
            "und-Arab-MU": "ur-Arab-MU",
            "und-Arab-NG": "ha-Arab-NG",
            "und-Arab-PK": "ur-Arab-PK",
            "und-Arab-TG": "apd-Arab-TG",
            "und-Arab-TH": "mfa-Arab-TH",
            "und-Arab-TJ": "fa-Arab-TJ",
            "und-Arab-TR": "az-Arab-TR",
            "und-Arab-YT": "swb-Arab-YT",
            "und-Armi": "arc-Armi-IR",
            "und-Armn": "hy-Armn-AM",
            "und-AS": "sm-Latn-AS",
            "und-AT": "de-Latn-AT",
            "und-Avst": "ae-Avst-IR",
            "und-AW": "nl-Latn-AW",
            "und-AX": "sv-Latn-AX",
            "und-AZ": "az-Latn-AZ",
            "und-BA": "bs-Latn-BA",
            "und-Bali": "ban-Bali-ID",
            "und-Bamu": "bax-Bamu-CM",
            "und-Bass": "bsq-Bass-LR",
            "und-Batk": "bbc-Batk-ID",
            "und-BD": "bn-Beng-BD",
            "und-BE": "nl-Latn-BE",
            "und-Beng": "bn-Beng-BD",
            "und-BF": "fr-Latn-BF",
            "und-BG": "bg-Cyrl-BG",
            "und-BH": "ar-Arab-BH",
            "und-Bhks": "sa-Bhks-IN",
            "und-BI": "rn-Latn-BI",
            "und-BJ": "fr-Latn-BJ",
            "und-BL": "fr-Latn-BL",
            "und-BN": "ms-Latn-BN",
            "und-BO": "es-Latn-BO",
            "und-Bopo": "zh-Bopo-TW",
            "und-BQ": "pap-Latn-BQ",
            "und-BR": "pt-Latn-BR",
            "und-Brah": "pka-Brah-IN",
            "und-Brai": "fr-Brai-FR",
            "und-BT": "dz-Tibt-BT",
            "und-Bugi": "bug-Bugi-ID",
            "und-Buhd": "bku-Buhd-PH",
            "und-BV": "und-Latn-BV",
            "und-BY": "be-Cyrl-BY",
            "und-Cakm": "ccp-Cakm-BD",
            "und-Cans": "cr-Cans-CA",
            "und-Cari": "xcr-Cari-TR",
            "und-CD": "sw-Latn-CD",
            "und-CF": "fr-Latn-CF",
            "und-CG": "fr-Latn-CG",
            "und-CH": "de-Latn-CH",
            "und-Cham": "cjm-Cham-VN",
            "und-Cher": "chr-Cher-US",
            "und-Chrs": "xco-Chrs-UZ",
            "und-CI": "fr-Latn-CI",
            "und-CL": "es-Latn-CL",
            "und-CM": "fr-Latn-CM",
            "und-CN": "zh-Hans-CN",
            "und-CO": "es-Latn-CO",
            "und-Copt": "cop-Copt-EG",
            "und-CP": "und-Latn-CP",
            "und-Cprt": "grc-Cprt-CY",
            "und-CR": "es-Latn-CR",
            "und-CU": "es-Latn-CU",
            "und-CV": "pt-Latn-CV",
            "und-CW": "pap-Latn-CW",
            "und-CY": "el-Grek-CY",
            "und-Cyrl": "ru-Cyrl-RU",
            "und-Cyrl-AL": "mk-Cyrl-AL",
            "und-Cyrl-BA": "sr-Cyrl-BA",
            "und-Cyrl-GE": "os-Cyrl-GE",
            "und-Cyrl-GR": "mk-Cyrl-GR",
            "und-Cyrl-MD": "uk-Cyrl-MD",
            "und-Cyrl-RO": "bg-Cyrl-RO",
            "und-Cyrl-SK": "uk-Cyrl-SK",
            "und-Cyrl-TR": "kbd-Cyrl-TR",
            "und-Cyrl-XK": "sr-Cyrl-XK",
            "und-CZ": "cs-Latn-CZ",
            "und-DE": "de-Latn-DE",
            "und-Deva": "hi-Deva-IN",
            "und-Deva-BT": "ne-Deva-BT",
            "und-Deva-FJ": "hif-Deva-FJ",
            "und-Deva-MU": "bho-Deva-MU",
            "und-Deva-PK": "btv-Deva-PK",
            "und-Diak": "dv-Diak-MV",
            "und-DJ": "aa-Latn-DJ",
            "und-DK": "da-Latn-DK",
            "und-DO": "es-Latn-DO",
            "und-Dogr": "doi-Dogr-IN",
            "und-Dupl": "fr-Dupl-FR",
            "und-DZ": "ar-Arab-DZ",
            "und-EA": "es-Latn-EA",
            "und-EC": "es-Latn-EC",
            "und-EE": "et-Latn-EE",
            "und-EG": "ar-Arab-EG",
            "und-Egyp": "egy-Egyp-EG",
            "und-EH": "ar-Arab-EH",
            "und-Elba": "sq-Elba-AL",
            "und-Elym": "arc-Elym-IR",
            "und-ER": "ti-Ethi-ER",
            "und-ES": "es-Latn-ES",
            "und-ET": "am-Ethi-ET",
            "und-Ethi": "am-Ethi-ET",
            "und-EU": "en-Latn-IE",
            "und-EZ": "de-Latn-EZ",
            "und-FI": "fi-Latn-FI",
            "und-FO": "fo-Latn-FO",
            "und-FR": "fr-Latn-FR",
            "und-GA": "fr-Latn-GA",
            "und-GE": "ka-Geor-GE",
            "und-Geor": "ka-Geor-GE",
            "und-GF": "fr-Latn-GF",
            "und-GH": "ak-Latn-GH",
            "und-GL": "kl-Latn-GL",
            "und-Glag": "cu-Glag-BG",
            "und-GN": "fr-Latn-GN",
            "und-Gong": "wsg-Gong-IN",
            "und-Gonm": "esg-Gonm-IN",
            "und-Goth": "got-Goth-UA",
            "und-GP": "fr-Latn-GP",
            "und-GQ": "es-Latn-GQ",
            "und-GR": "el-Grek-GR",
            "und-Gran": "sa-Gran-IN",
            "und-Grek": "el-Grek-GR",
            "und-Grek-TR": "bgx-Grek-TR",
            "und-GS": "und-Latn-GS",
            "und-GT": "es-Latn-GT",
            "und-Gujr": "gu-Gujr-IN",
            "und-Guru": "pa-Guru-IN",
            "und-GW": "pt-Latn-GW",
            "und-Hanb": "zh-Hanb-TW",
            "und-Hang": "ko-Hang-KR",
            "und-Hani": "zh-Hani-CN",
            "und-Hano": "hnn-Hano-PH",
            "und-Hans": "zh-Hans-CN",
            "und-Hant": "zh-Hant-TW",
            "und-Hebr": "he-Hebr-IL",
            "und-Hebr-CA": "yi-Hebr-CA",
            "und-Hebr-GB": "yi-Hebr-GB",
            "und-Hebr-SE": "yi-Hebr-SE",
            "und-Hebr-UA": "yi-Hebr-UA",
            "und-Hebr-US": "yi-Hebr-US",
            "und-Hira": "ja-Hira-JP",
            "und-HK": "zh-Hant-HK",
            "und-Hluw": "hlu-Hluw-TR",
            "und-HM": "und-Latn-HM",
            "und-Hmng": "hnj-Hmng-LA",
            "und-Hmnp": "mww-Hmnp-US",
            "und-HN": "es-Latn-HN",
            "und-HR": "hr-Latn-HR",
            "und-HT": "ht-Latn-HT",
            "und-HU": "hu-Latn-HU",
            "und-Hung": "hu-Hung-HU",
            "und-IC": "es-Latn-IC",
            "und-ID": "id-Latn-ID",
            "und-IL": "he-Hebr-IL",
            "und-IN": "hi-Deva-IN",
            "und-IQ": "ar-Arab-IQ",
            "und-IR": "fa-Arab-IR",
            "und-IS": "is-Latn-IS",
            "und-IT": "it-Latn-IT",
            "und-Ital": "ett-Ital-IT",
            "und-Jamo": "ko-Jamo-KR",
            "und-Java": "jv-Java-ID",
            "und-JO": "ar-Arab-JO",
            "und-JP": "ja-Jpan-JP",
            "und-Jpan": "ja-Jpan-JP",
            "und-Kali": "eky-Kali-MM",
            "und-Kana": "ja-Kana-JP",
            "und-KE": "sw-Latn-KE",
            "und-KG": "ky-Cyrl-KG",
            "und-KH": "km-Khmr-KH",
            "und-Khar": "pra-Khar-PK",
            "und-Khmr": "km-Khmr-KH",
            "und-Khoj": "sd-Khoj-IN",
            "und-Kits": "zkt-Kits-CN",
            "und-KM": "ar-Arab-KM",
            "und-Knda": "kn-Knda-IN",
            "und-Kore": "ko-Kore-KR",
            "und-KP": "ko-Kore-KP",
            "und-KR": "ko-Kore-KR",
            "und-Kthi": "bho-Kthi-IN",
            "und-KW": "ar-Arab-KW",
            "und-KZ": "ru-Cyrl-KZ",
            "und-LA": "lo-Laoo-LA",
            "und-Lana": "nod-Lana-TH",
            "und-Laoo": "lo-Laoo-LA",
            "und-Latn-AF": "tk-Latn-AF",
            "und-Latn-AM": "ku-Latn-AM",
            "und-Latn-CN": "za-Latn-CN",
            "und-Latn-CY": "tr-Latn-CY",
            "und-Latn-DZ": "fr-Latn-DZ",
            "und-Latn-ET": "en-Latn-ET",
            "und-Latn-GE": "ku-Latn-GE",
            "und-Latn-IR": "tk-Latn-IR",
            "und-Latn-KM": "fr-Latn-KM",
            "und-Latn-MA": "fr-Latn-MA",
            "und-Latn-MK": "sq-Latn-MK",
            "und-Latn-MM": "kac-Latn-MM",
            "und-Latn-MO": "pt-Latn-MO",
            "und-Latn-MR": "fr-Latn-MR",
            "und-Latn-RU": "krl-Latn-RU",
            "und-Latn-SY": "fr-Latn-SY",
            "und-Latn-TN": "fr-Latn-TN",
            "und-Latn-TW": "trv-Latn-TW",
            "und-Latn-UA": "pl-Latn-UA",
            "und-LB": "ar-Arab-LB",
            "und-Lepc": "lep-Lepc-IN",
            "und-LI": "de-Latn-LI",
            "und-Limb": "lif-Limb-IN",
            "und-Lina": "lab-Lina-GR",
            "und-Linb": "grc-Linb-GR",
            "und-Lisu": "lis-Lisu-CN",
            "und-LK": "si-Sinh-LK",
            "und-LS": "st-Latn-LS",
            "und-LT": "lt-Latn-LT",
            "und-LU": "fr-Latn-LU",
            "und-LV": "lv-Latn-LV",
            "und-LY": "ar-Arab-LY",
            "und-Lyci": "xlc-Lyci-TR",
            "und-Lydi": "xld-Lydi-TR",
            "und-MA": "ar-Arab-MA",
            "und-Mahj": "hi-Mahj-IN",
            "und-Maka": "mak-Maka-ID",
            "und-Mand": "myz-Mand-IR",
            "und-Mani": "xmn-Mani-CN",
            "und-Marc": "bo-Marc-CN",
            "und-MC": "fr-Latn-MC",
            "und-MD": "ro-Latn-MD",
            "und-ME": "sr-Latn-ME",
            "und-Medf": "dmf-Medf-NG",
            "und-Mend": "men-Mend-SL",
            "und-Merc": "xmr-Merc-SD",
            "und-Mero": "xmr-Mero-SD",
            "und-MF": "fr-Latn-MF",
            "und-MG": "mg-Latn-MG",
            "und-MK": "mk-Cyrl-MK",
            "und-ML": "bm-Latn-ML",
            "und-Mlym": "ml-Mlym-IN",
            "und-MM": "my-Mymr-MM",
            "und-MN": "mn-Cyrl-MN",
            "und-MO": "zh-Hant-MO",
            "und-Modi": "mr-Modi-IN",
            "und-Mong": "mn-Mong-CN",
            "und-MQ": "fr-Latn-MQ",
            "und-MR": "ar-Arab-MR",
            "und-Mroo": "mro-Mroo-BD",
            "und-MT": "mt-Latn-MT",
            "und-Mtei": "mni-Mtei-IN",
            "und-MU": "mfe-Latn-MU",
            "und-Mult": "skr-Mult-PK",
            "und-MV": "dv-Thaa-MV",
            "und-MX": "es-Latn-MX",
            "und-MY": "ms-Latn-MY",
            "und-Mymr": "my-Mymr-MM",
            "und-Mymr-IN": "kht-Mymr-IN",
            "und-Mymr-TH": "mnw-Mymr-TH",
            "und-MZ": "pt-Latn-MZ",
            "und-NA": "af-Latn-NA",
            "und-Nand": "sa-Nand-IN",
            "und-Narb": "xna-Narb-SA",
            "und-Nbat": "arc-Nbat-JO",
            "und-NC": "fr-Latn-NC",
            "und-NE": "ha-Latn-NE",
            "und-Newa": "new-Newa-NP",
            "und-NI": "es-Latn-NI",
            "und-Nkoo": "man-Nkoo-GN",
            "und-NL": "nl-Latn-NL",
            "und-NO": "nb-Latn-NO",
            "und-NP": "ne-Deva-NP",
            "und-Nshu": "zhx-Nshu-CN",
            "und-Ogam": "sga-Ogam-IE",
            "und-Olck": "sat-Olck-IN",
            "und-OM": "ar-Arab-OM",
            "und-Orkh": "otk-Orkh-MN",
            "und-Orya": "or-Orya-IN",
            "und-Osge": "osa-Osge-US",
            "und-Osma": "so-Osma-SO",
            "und-PA": "es-Latn-PA",
            "und-Palm": "arc-Palm-SY",
            "und-Pauc": "ctd-Pauc-MM",
            "und-PE": "es-Latn-PE",
            "und-Perm": "kv-Perm-RU",
            "und-PF": "fr-Latn-PF",
            "und-PG": "tpi-Latn-PG",
            "und-PH": "fil-Latn-PH",
            "und-Phag": "lzh-Phag-CN",
            "und-Phli": "pal-Phli-IR",
            "und-Phlp": "pal-Phlp-CN",
            "und-Phnx": "phn-Phnx-LB",
            "und-PK": "ur-Arab-PK",
            "und-PL": "pl-Latn-PL",
            "und-Plrd": "hmd-Plrd-CN",
            "und-PM": "fr-Latn-PM",
            "und-PR": "es-Latn-PR",
            "und-Prti": "xpr-Prti-IR",
            "und-PS": "ar-Arab-PS",
            "und-PT": "pt-Latn-PT",
            "und-PW": "pau-Latn-PW",
            "und-PY": "gn-Latn-PY",
            "und-QA": "ar-Arab-QA",
            "und-QO": "en-Latn-DG",
            "und-RE": "fr-Latn-RE",
            "und-Rjng": "rej-Rjng-ID",
            "und-RO": "ro-Latn-RO",
            "und-Rohg": "rhg-Rohg-MM",
            "und-RS": "sr-Cyrl-RS",
            "und-RU": "ru-Cyrl-RU",
            "und-Runr": "non-Runr-SE",
            "und-RW": "rw-Latn-RW",
            "und-SA": "ar-Arab-SA",
            "und-Samr": "smp-Samr-IL",
            "und-Sarb": "xsa-Sarb-YE",
            "und-Saur": "saz-Saur-IN",
            "und-SC": "fr-Latn-SC",
            "und-SD": "ar-Arab-SD",
            "und-SE": "sv-Latn-SE",
            "und-Sgnw": "ase-Sgnw-US",
            "und-Shaw": "en-Shaw-GB",
            "und-Shrd": "sa-Shrd-IN",
            "und-SI": "sl-Latn-SI",
            "und-Sidd": "sa-Sidd-IN",
            "und-Sind": "sd-Sind-IN",
            "und-Sinh": "si-Sinh-LK",
            "und-SJ": "nb-Latn-SJ",
            "und-SK": "sk-Latn-SK",
            "und-SM": "it-Latn-SM",
            "und-SN": "fr-Latn-SN",
            "und-SO": "so-Latn-SO",
            "und-Sogd": "sog-Sogd-UZ",
            "und-Sogo": "sog-Sogo-UZ",
            "und-Sora": "srb-Sora-IN",
            "und-Soyo": "cmg-Soyo-MN",
            "und-SR": "nl-Latn-SR",
            "und-ST": "pt-Latn-ST",
            "und-Sund": "su-Sund-ID",
            "und-SV": "es-Latn-SV",
            "und-SY": "ar-Arab-SY",
            "und-Sylo": "syl-Sylo-BD",
            "und-Syrc": "syr-Syrc-IQ",
            "und-Tagb": "tbw-Tagb-PH",
            "und-Takr": "doi-Takr-IN",
            "und-Tale": "tdd-Tale-CN",
            "und-Talu": "khb-Talu-CN",
            "und-Taml": "ta-Taml-IN",
            "und-Tang": "txg-Tang-CN",
            "und-Tavt": "blt-Tavt-VN",
            "und-TD": "fr-Latn-TD",
            "und-Telu": "te-Telu-IN",
            "und-TF": "fr-Latn-TF",
            "und-Tfng": "zgh-Tfng-MA",
            "und-TG": "fr-Latn-TG",
            "und-Tglg": "fil-Tglg-PH",
            "und-TH": "th-Thai-TH",
            "und-Thaa": "dv-Thaa-MV",
            "und-Thai": "th-Thai-TH",
            "und-Thai-CN": "lcp-Thai-CN",
            "und-Thai-KH": "kdt-Thai-KH",
            "und-Thai-LA": "kdt-Thai-LA",
            "und-Tibt": "bo-Tibt-CN",
            "und-Tirh": "mai-Tirh-IN",
            "und-TJ": "tg-Cyrl-TJ",
            "und-TK": "tkl-Latn-TK",
            "und-TL": "pt-Latn-TL",
            "und-TM": "tk-Latn-TM",
            "und-TN": "ar-Arab-TN",
            "und-TO": "to-Latn-TO",
            "und-TR": "tr-Latn-TR",
            "und-TV": "tvl-Latn-TV",
            "und-TW": "zh-Hant-TW",
            "und-TZ": "sw-Latn-TZ",
            "und-UA": "uk-Cyrl-UA",
            "und-UG": "sw-Latn-UG",
            "und-Ugar": "uga-Ugar-SY",
            "und-UY": "es-Latn-UY",
            "und-UZ": "uz-Latn-UZ",
            "und-VA": "it-Latn-VA",
            "und-Vaii": "vai-Vaii-LR",
            "und-VE": "es-Latn-VE",
            "und-VN": "vi-Latn-VN",
            "und-VU": "bi-Latn-VU",
            "und-Wara": "hoc-Wara-IN",
            "und-Wcho": "nnp-Wcho-IN",
            "und-WF": "fr-Latn-WF",
            "und-WS": "sm-Latn-WS",
            "und-XK": "sq-Latn-XK",
            "und-Xpeo": "peo-Xpeo-IR",
            "und-Xsux": "akk-Xsux-IQ",
            "und-YE": "ar-Arab-YE",
            "und-Yezi": "ku-Yezi-GE",
            "und-Yiii": "ii-Yiii-CN",
            "und-YT": "fr-Latn-YT",
            "und-Zanb": "cmg-Zanb-MN",
            "und-ZW": "sn-Latn-ZW",
            unr: "unr-Beng-IN",
            "unr-Deva": "unr-Deva-NP",
            "unr-NP": "unr-Deva-NP",
            unx: "unx-Beng-IN",
            uok: "uok-Latn-ZZ",
            ur: "ur-Arab-PK",
            uri: "uri-Latn-ZZ",
            urt: "urt-Latn-ZZ",
            urw: "urw-Latn-ZZ",
            usa: "usa-Latn-ZZ",
            uth: "uth-Latn-ZZ",
            utr: "utr-Latn-ZZ",
            uvh: "uvh-Latn-ZZ",
            uvl: "uvl-Latn-ZZ",
            uz: "uz-Latn-UZ",
            "uz-AF": "uz-Arab-AF",
            "uz-Arab": "uz-Arab-AF",
            "uz-CN": "uz-Cyrl-CN",
            vag: "vag-Latn-ZZ",
            vai: "vai-Vaii-LR",
            van: "van-Latn-ZZ",
            ve: "ve-Latn-ZA",
            vec: "vec-Latn-IT",
            vep: "vep-Latn-RU",
            vi: "vi-Latn-VN",
            vic: "vic-Latn-SX",
            viv: "viv-Latn-ZZ",
            vls: "vls-Latn-BE",
            vmf: "vmf-Latn-DE",
            vmw: "vmw-Latn-MZ",
            vo: "vo-Latn-001",
            vot: "vot-Latn-RU",
            vro: "vro-Latn-EE",
            vun: "vun-Latn-TZ",
            vut: "vut-Latn-ZZ",
            wa: "wa-Latn-BE",
            wae: "wae-Latn-CH",
            waj: "waj-Latn-ZZ",
            wal: "wal-Ethi-ET",
            wan: "wan-Latn-ZZ",
            war: "war-Latn-PH",
            wbp: "wbp-Latn-AU",
            wbq: "wbq-Telu-IN",
            wbr: "wbr-Deva-IN",
            wci: "wci-Latn-ZZ",
            wer: "wer-Latn-ZZ",
            wgi: "wgi-Latn-ZZ",
            whg: "whg-Latn-ZZ",
            wib: "wib-Latn-ZZ",
            wiu: "wiu-Latn-ZZ",
            wiv: "wiv-Latn-ZZ",
            wja: "wja-Latn-ZZ",
            wji: "wji-Latn-ZZ",
            wls: "wls-Latn-WF",
            wmo: "wmo-Latn-ZZ",
            wnc: "wnc-Latn-ZZ",
            wni: "wni-Arab-KM",
            wnu: "wnu-Latn-ZZ",
            wo: "wo-Latn-SN",
            wob: "wob-Latn-ZZ",
            wos: "wos-Latn-ZZ",
            wrs: "wrs-Latn-ZZ",
            wsg: "wsg-Gong-IN",
            wsk: "wsk-Latn-ZZ",
            wtm: "wtm-Deva-IN",
            wuu: "wuu-Hans-CN",
            wuv: "wuv-Latn-ZZ",
            wwa: "wwa-Latn-ZZ",
            xav: "xav-Latn-BR",
            xbi: "xbi-Latn-ZZ",
            xco: "xco-Chrs-UZ",
            xcr: "xcr-Cari-TR",
            xes: "xes-Latn-ZZ",
            xh: "xh-Latn-ZA",
            xla: "xla-Latn-ZZ",
            xlc: "xlc-Lyci-TR",
            xld: "xld-Lydi-TR",
            xmf: "xmf-Geor-GE",
            xmn: "xmn-Mani-CN",
            xmr: "xmr-Merc-SD",
            xna: "xna-Narb-SA",
            xnr: "xnr-Deva-IN",
            xog: "xog-Latn-UG",
            xon: "xon-Latn-ZZ",
            xpr: "xpr-Prti-IR",
            xrb: "xrb-Latn-ZZ",
            xsa: "xsa-Sarb-YE",
            xsi: "xsi-Latn-ZZ",
            xsm: "xsm-Latn-ZZ",
            xsr: "xsr-Deva-NP",
            xwe: "xwe-Latn-ZZ",
            yam: "yam-Latn-ZZ",
            yao: "yao-Latn-MZ",
            yap: "yap-Latn-FM",
            yas: "yas-Latn-ZZ",
            yat: "yat-Latn-ZZ",
            yav: "yav-Latn-CM",
            yay: "yay-Latn-ZZ",
            yaz: "yaz-Latn-ZZ",
            yba: "yba-Latn-ZZ",
            ybb: "ybb-Latn-CM",
            yby: "yby-Latn-ZZ",
            yer: "yer-Latn-ZZ",
            ygr: "ygr-Latn-ZZ",
            ygw: "ygw-Latn-ZZ",
            yi: "yi-Hebr-001",
            yko: "yko-Latn-ZZ",
            yle: "yle-Latn-ZZ",
            ylg: "ylg-Latn-ZZ",
            yll: "yll-Latn-ZZ",
            yml: "yml-Latn-ZZ",
            yo: "yo-Latn-NG",
            yon: "yon-Latn-ZZ",
            yrb: "yrb-Latn-ZZ",
            yre: "yre-Latn-ZZ",
            yrl: "yrl-Latn-BR",
            yss: "yss-Latn-ZZ",
            yua: "yua-Latn-MX",
            yue: "yue-Hant-HK",
            "yue-CN": "yue-Hans-CN",
            "yue-Hans": "yue-Hans-CN",
            yuj: "yuj-Latn-ZZ",
            yut: "yut-Latn-ZZ",
            yuw: "yuw-Latn-ZZ",
            za: "za-Latn-CN",
            zag: "zag-Latn-SD",
            zdj: "zdj-Arab-KM",
            zea: "zea-Latn-NL",
            zgh: "zgh-Tfng-MA",
            zh: "zh-Hans-CN",
            "zh-AU": "zh-Hant-AU",
            "zh-BN": "zh-Hant-BN",
            "zh-Bopo": "zh-Bopo-TW",
            "zh-GB": "zh-Hant-GB",
            "zh-GF": "zh-Hant-GF",
            "zh-Hanb": "zh-Hanb-TW",
            "zh-Hant": "zh-Hant-TW",
            "zh-HK": "zh-Hant-HK",
            "zh-ID": "zh-Hant-ID",
            "zh-MO": "zh-Hant-MO",
            "zh-PA": "zh-Hant-PA",
            "zh-PF": "zh-Hant-PF",
            "zh-PH": "zh-Hant-PH",
            "zh-SR": "zh-Hant-SR",
            "zh-TH": "zh-Hant-TH",
            "zh-TW": "zh-Hant-TW",
            "zh-US": "zh-Hant-US",
            "zh-VN": "zh-Hant-VN",
            zhx: "zhx-Nshu-CN",
            zia: "zia-Latn-ZZ",
            zkt: "zkt-Kits-CN",
            zlm: "zlm-Latn-TG",
            zmi: "zmi-Latn-MY",
            zne: "zne-Latn-ZZ",
            zu: "zu-Latn-ZA",
            zza: "zza-Latn-TR"
          }
        }
      };
    }
  });

  // bazel-out/darwin-fastbuild/bin/packages/intl-getcanonicallocales/src/canonicalizer.js
  var require_canonicalizer = __commonJS({
    "bazel-out/darwin-fastbuild/bin/packages/intl-getcanonicallocales/src/canonicalizer.js": function(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {value: true});
      exports.canonicalizeUnicodeLocaleId = exports.canonicalizeUnicodeLanguageId = void 0;
      var tslib_1 = require_tslib();
      var aliases_1 = require_aliases();
      var parser_1 = require_parser();
      var likelySubtags2 = tslib_1.__importStar(require_likelySubtags());
      var emitter_1 = require_emitter();
      function canonicalizeAttrs(strs) {
        return Object.keys(strs.reduce(function(all, str) {
          all[str.toLowerCase()] = 1;
          return all;
        }, {})).sort();
      }
      function canonicalizeKVs(arr) {
        var all = {};
        var result = [];
        for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
          var kv = arr_1[_i];
          if (kv[0] in all) {
            continue;
          }
          all[kv[0]] = 1;
          if (!kv[1] || kv[1] === "true") {
            result.push([kv[0].toLowerCase()]);
          } else {
            result.push([kv[0].toLowerCase(), kv[1].toLowerCase()]);
          }
        }
        return result.sort(compareKV);
      }
      function compareKV(t1, t2) {
        return t1[0] < t2[0] ? -1 : t1[0] > t2[0] ? 1 : 0;
      }
      function compareExtension(e1, e2) {
        return e1.type < e2.type ? -1 : e1.type > e2.type ? 1 : 0;
      }
      function mergeVariants(v1, v2) {
        var result = tslib_1.__spreadArray([], v1);
        for (var _i = 0, v2_1 = v2; _i < v2_1.length; _i++) {
          var v = v2_1[_i];
          if (v1.indexOf(v) < 0) {
            result.push(v);
          }
        }
        return result;
      }
      function canonicalizeUnicodeLanguageId(unicodeLanguageId) {
        var finalLangAst = unicodeLanguageId;
        if (unicodeLanguageId.variants.length) {
          var replacedLang_1 = "";
          for (var _i = 0, _a = unicodeLanguageId.variants; _i < _a.length; _i++) {
            var variant = _a[_i];
            if (replacedLang_1 = aliases_1.languageAlias[emitter_1.emitUnicodeLanguageId({
              lang: unicodeLanguageId.lang,
              variants: [variant]
            })]) {
              var replacedLangAst = parser_1.parseUnicodeLanguageId(replacedLang_1.split(parser_1.SEPARATOR));
              finalLangAst = {
                lang: replacedLangAst.lang,
                script: finalLangAst.script || replacedLangAst.script,
                region: finalLangAst.region || replacedLangAst.region,
                variants: mergeVariants(finalLangAst.variants, replacedLangAst.variants)
              };
              break;
            }
          }
        }
        if (finalLangAst.script && finalLangAst.region) {
          var replacedLang_2 = aliases_1.languageAlias[emitter_1.emitUnicodeLanguageId({
            lang: finalLangAst.lang,
            script: finalLangAst.script,
            region: finalLangAst.region,
            variants: []
          })];
          if (replacedLang_2) {
            var replacedLangAst = parser_1.parseUnicodeLanguageId(replacedLang_2.split(parser_1.SEPARATOR));
            finalLangAst = {
              lang: replacedLangAst.lang,
              script: replacedLangAst.script,
              region: replacedLangAst.region,
              variants: finalLangAst.variants
            };
          }
        }
        if (finalLangAst.region) {
          var replacedLang_3 = aliases_1.languageAlias[emitter_1.emitUnicodeLanguageId({
            lang: finalLangAst.lang,
            region: finalLangAst.region,
            variants: []
          })];
          if (replacedLang_3) {
            var replacedLangAst = parser_1.parseUnicodeLanguageId(replacedLang_3.split(parser_1.SEPARATOR));
            finalLangAst = {
              lang: replacedLangAst.lang,
              script: finalLangAst.script || replacedLangAst.script,
              region: replacedLangAst.region,
              variants: finalLangAst.variants
            };
          }
        }
        var replacedLang = aliases_1.languageAlias[emitter_1.emitUnicodeLanguageId({
          lang: finalLangAst.lang,
          variants: []
        })];
        if (replacedLang) {
          var replacedLangAst = parser_1.parseUnicodeLanguageId(replacedLang.split(parser_1.SEPARATOR));
          finalLangAst = {
            lang: replacedLangAst.lang,
            script: finalLangAst.script || replacedLangAst.script,
            region: finalLangAst.region || replacedLangAst.region,
            variants: finalLangAst.variants
          };
        }
        if (finalLangAst.region) {
          var region = finalLangAst.region.toUpperCase();
          var regionAlias = aliases_1.territoryAlias[region];
          var replacedRegion = void 0;
          if (regionAlias) {
            var regions = regionAlias.split(" ");
            replacedRegion = regions[0];
            var likelySubtag = likelySubtags2.supplemental.likelySubtags[emitter_1.emitUnicodeLanguageId({
              lang: finalLangAst.lang,
              script: finalLangAst.script,
              variants: []
            })];
            if (likelySubtag) {
              var likelyRegion = parser_1.parseUnicodeLanguageId(likelySubtag.split(parser_1.SEPARATOR)).region;
              if (likelyRegion && regions.indexOf(likelyRegion) > -1) {
                replacedRegion = likelyRegion;
              }
            }
          }
          if (replacedRegion) {
            finalLangAst.region = replacedRegion;
          }
          finalLangAst.region = finalLangAst.region.toUpperCase();
        }
        if (finalLangAst.script) {
          finalLangAst.script = finalLangAst.script[0].toUpperCase() + finalLangAst.script.slice(1).toLowerCase();
          if (aliases_1.scriptAlias[finalLangAst.script]) {
            finalLangAst.script = aliases_1.scriptAlias[finalLangAst.script];
          }
        }
        if (finalLangAst.variants.length) {
          for (var i = 0; i < finalLangAst.variants.length; i++) {
            var variant = finalLangAst.variants[i].toLowerCase();
            if (aliases_1.variantAlias[variant]) {
              var alias = aliases_1.variantAlias[variant];
              if (parser_1.isUnicodeVariantSubtag(alias)) {
                finalLangAst.variants[i] = alias;
              } else if (parser_1.isUnicodeLanguageSubtag(alias)) {
                finalLangAst.lang = alias;
              }
            }
          }
          finalLangAst.variants.sort();
        }
        return finalLangAst;
      }
      exports.canonicalizeUnicodeLanguageId = canonicalizeUnicodeLanguageId;
      function canonicalizeUnicodeLocaleId(locale) {
        locale.lang = canonicalizeUnicodeLanguageId(locale.lang);
        if (locale.extensions) {
          for (var _i = 0, _a = locale.extensions; _i < _a.length; _i++) {
            var extension = _a[_i];
            switch (extension.type) {
              case "u":
                extension.keywords = canonicalizeKVs(extension.keywords);
                if (extension.attributes) {
                  extension.attributes = canonicalizeAttrs(extension.attributes);
                }
                break;
              case "t":
                if (extension.lang) {
                  extension.lang = canonicalizeUnicodeLanguageId(extension.lang);
                }
                extension.fields = canonicalizeKVs(extension.fields);
                break;
              default:
                extension.value = extension.value.toLowerCase();
                break;
            }
          }
          locale.extensions.sort(compareExtension);
        }
        return locale;
      }
      exports.canonicalizeUnicodeLocaleId = canonicalizeUnicodeLocaleId;
    }
  });

  // bazel-out/darwin-fastbuild/bin/packages/intl-getcanonicallocales/src/types.js
  var require_types = __commonJS({
    "bazel-out/darwin-fastbuild/bin/packages/intl-getcanonicallocales/src/types.js": function(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {value: true});
    }
  });

  // bazel-out/darwin-fastbuild/bin/packages/intl-getcanonicallocales/index.js
  var require_intl_getcanonicallocales = __commonJS({
    "bazel-out/darwin-fastbuild/bin/packages/intl-getcanonicallocales/index.js": function(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {value: true});
      exports.isUnicodeLanguageSubtag = exports.isUnicodeScriptSubtag = exports.isUnicodeRegionSubtag = exports.isStructurallyValidLanguageTag = exports.parseUnicodeLanguageId = exports.parseUnicodeLocaleId = exports.getCanonicalLocales = void 0;
      var tslib_1 = require_tslib();
      var parser_1 = require_parser();
      var emitter_1 = require_emitter();
      var canonicalizer_1 = require_canonicalizer();
      function CanonicalizeLocaleList2(locales) {
        if (locales === void 0) {
          return [];
        }
        var seen = [];
        if (typeof locales === "string") {
          locales = [locales];
        }
        for (var _i = 0, locales_1 = locales; _i < locales_1.length; _i++) {
          var locale = locales_1[_i];
          var canonicalizedTag = emitter_1.emitUnicodeLocaleId(canonicalizer_1.canonicalizeUnicodeLocaleId(parser_1.parseUnicodeLocaleId(locale)));
          if (seen.indexOf(canonicalizedTag) < 0) {
            seen.push(canonicalizedTag);
          }
        }
        return seen;
      }
      function getCanonicalLocales(locales) {
        return CanonicalizeLocaleList2(locales);
      }
      exports.getCanonicalLocales = getCanonicalLocales;
      var parser_2 = require_parser();
      Object.defineProperty(exports, "parseUnicodeLocaleId", {enumerable: true, get: function() {
        return parser_2.parseUnicodeLocaleId;
      }});
      Object.defineProperty(exports, "parseUnicodeLanguageId", {enumerable: true, get: function() {
        return parser_2.parseUnicodeLanguageId;
      }});
      Object.defineProperty(exports, "isStructurallyValidLanguageTag", {enumerable: true, get: function() {
        return parser_2.isStructurallyValidLanguageTag;
      }});
      Object.defineProperty(exports, "isUnicodeRegionSubtag", {enumerable: true, get: function() {
        return parser_2.isUnicodeRegionSubtag;
      }});
      Object.defineProperty(exports, "isUnicodeScriptSubtag", {enumerable: true, get: function() {
        return parser_2.isUnicodeScriptSubtag;
      }});
      Object.defineProperty(exports, "isUnicodeLanguageSubtag", {enumerable: true, get: function() {
        return parser_2.isUnicodeLanguageSubtag;
      }});
      tslib_1.__exportStar(require_types(), exports);
      tslib_1.__exportStar(require_emitter(), exports);
    }
  });

  // bazel-out/darwin-fastbuild/bin/packages/intl-locale/lib/index.js
  var import_tslib5 = __toModule(require_tslib());

  // bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/lib/DateTimeFormat/BestFitFormatMatcher.js
  var import_tslib2 = __toModule(require_tslib());

  // bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/lib/utils.js
  function invariant(condition, message, Err) {
    if (Err === void 0) {
      Err = Error;
    }
    if (!condition) {
      throw new Err(message);
    }
  }

  // bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/lib/DateTimeFormat/skeleton.js
  var import_tslib = __toModule(require_tslib());

  // bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/lib/types/date-time.js
  var RangePatternType;
  (function(RangePatternType2) {
    RangePatternType2["startRange"] = "startRange";
    RangePatternType2["shared"] = "shared";
    RangePatternType2["endRange"] = "endRange";
  })(RangePatternType || (RangePatternType = {}));

  // bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/lib/262.js
  function ToString(o) {
    if (typeof o === "symbol") {
      throw TypeError("Cannot convert a Symbol value to a string");
    }
    return String(o);
  }
  function ToObject(arg) {
    if (arg == null) {
      throw new TypeError("undefined/null cannot be converted to object");
    }
    return Object(arg);
  }
  function SameValue(x, y) {
    if (Object.is) {
      return Object.is(x, y);
    }
    if (x === y) {
      return x !== 0 || 1 / x === 1 / y;
    }
    return x !== x && y !== y;
  }
  var MINUTES_PER_HOUR = 60;
  var SECONDS_PER_MINUTE = 60;
  var MS_PER_SECOND = 1e3;
  var MS_PER_MINUTE = MS_PER_SECOND * SECONDS_PER_MINUTE;
  var MS_PER_HOUR = MS_PER_MINUTE * MINUTES_PER_HOUR;

  // bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/lib/CoerceOptionsToObject.js
  function CoerceOptionsToObject(options) {
    if (typeof options === "undefined") {
      return Object.create(null);
    }
    return ToObject(options);
  }

  // bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/lib/DateTimeFormat/BasicFormatMatcher.js
  var import_tslib3 = __toModule(require_tslib());

  // bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/lib/GetOption.js
  function GetOption(opts, prop, type, values, fallback) {
    if (typeof opts !== "object") {
      throw new TypeError("Options must be an object");
    }
    var value = opts[prop];
    if (value !== void 0) {
      if (type !== "boolean" && type !== "string") {
        throw new TypeError("invalid type");
      }
      if (type === "boolean") {
        value = Boolean(value);
      }
      if (type === "string") {
        value = ToString(value);
      }
      if (values !== void 0 && !values.filter(function(val) {
        return val == value;
      }).length) {
        throw new RangeError(value + " is not within " + values.join(", "));
      }
      return value;
    }
    return fallback;
  }

  // bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/lib/IsSanctionedSimpleUnitIdentifier.js
  var SANCTIONED_UNITS = [
    "angle-degree",
    "area-acre",
    "area-hectare",
    "concentr-percent",
    "digital-bit",
    "digital-byte",
    "digital-gigabit",
    "digital-gigabyte",
    "digital-kilobit",
    "digital-kilobyte",
    "digital-megabit",
    "digital-megabyte",
    "digital-petabyte",
    "digital-terabit",
    "digital-terabyte",
    "duration-day",
    "duration-hour",
    "duration-millisecond",
    "duration-minute",
    "duration-month",
    "duration-second",
    "duration-week",
    "duration-year",
    "length-centimeter",
    "length-foot",
    "length-inch",
    "length-kilometer",
    "length-meter",
    "length-mile-scandinavian",
    "length-mile",
    "length-millimeter",
    "length-yard",
    "mass-gram",
    "mass-kilogram",
    "mass-ounce",
    "mass-pound",
    "mass-stone",
    "temperature-celsius",
    "temperature-fahrenheit",
    "volume-fluid-ounce",
    "volume-gallon",
    "volume-liter",
    "volume-milliliter"
  ];
  function removeUnitNamespace(unit) {
    return unit.slice(unit.indexOf("-") + 1);
  }
  var SIMPLE_UNITS = SANCTIONED_UNITS.map(removeUnitNamespace);

  // bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/lib/regex.generated.js
  var S_UNICODE_REGEX = /[\$\+<->\^`\|~\xA2-\xA6\xA8\xA9\xAC\xAE-\xB1\xB4\xB8\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0384\u0385\u03F6\u0482\u058D-\u058F\u0606-\u0608\u060B\u060E\u060F\u06DE\u06E9\u06FD\u06FE\u07F6\u07FE\u07FF\u09F2\u09F3\u09FA\u09FB\u0AF1\u0B70\u0BF3-\u0BFA\u0C7F\u0D4F\u0D79\u0E3F\u0F01-\u0F03\u0F13\u0F15-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE\u0FCF\u0FD5-\u0FD8\u109E\u109F\u1390-\u1399\u166D\u17DB\u1940\u19DE-\u19FF\u1B61-\u1B6A\u1B74-\u1B7C\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2044\u2052\u207A-\u207C\u208A-\u208C\u20A0-\u20BF\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2307\u230C-\u2328\u232B-\u2426\u2440-\u244A\u249C-\u24E9\u2500-\u2767\u2794-\u27C4\u27C7-\u27E5\u27F0-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2B73\u2B76-\u2B95\u2B97-\u2BFF\u2CE5-\u2CEA\u2E50\u2E51\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFB\u3004\u3012\u3013\u3020\u3036\u3037\u303E\u303F\u309B\u309C\u3190\u3191\u3196-\u319F\u31C0-\u31E3\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uAA77-\uAA79\uAB5B\uAB6A\uAB6B\uFB29\uFBB2-\uFBC1\uFDFC\uFDFD\uFE62\uFE64-\uFE66\uFE69\uFF04\uFF0B\uFF1C-\uFF1E\uFF3E\uFF40\uFF5C\uFF5E\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|\uD805\uDF3F|\uD807[\uDFD5-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|\uD82F\uDC9C|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDE8\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\uD838[\uDD4F\uDEFF]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEE0-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF73\uDF80-\uDFD8\uDFE0-\uDFEB]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDD78\uDD7A-\uDDCB\uDDCD-\uDE53\uDE60-\uDE6D\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6\uDF00-\uDF92\uDF94-\uDFCA]/;

  // bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/lib/NumberFormat/format_to_parts.js
  var CARET_S_UNICODE_REGEX = new RegExp("^" + S_UNICODE_REGEX.source);
  var S_DOLLAR_UNICODE_REGEX = new RegExp(S_UNICODE_REGEX.source + "$");

  // bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/lib/data.js
  var import_tslib4 = __toModule(require_tslib());
  var MissingLocaleDataError = function(_super) {
    (0, import_tslib4.__extends)(MissingLocaleDataError2, _super);
    function MissingLocaleDataError2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.type = "MISSING_LOCALE_DATA";
      return _this;
    }
    return MissingLocaleDataError2;
  }(Error);

  // bazel-out/darwin-fastbuild/bin/packages/intl-locale/lib/index.js
  var import_intl_getcanonicallocales = __toModule(require_intl_getcanonicallocales());
  var likelySubtagsData = __toModule(require_likelySubtags());

  // bazel-out/darwin-fastbuild/bin/packages/intl-locale/lib/get_internal_slots.js
  var internalSlotMap = new WeakMap();
  function getInternalSlots(x) {
    var internalSlots = internalSlotMap.get(x);
    if (!internalSlots) {
      internalSlots = Object.create(null);
      internalSlotMap.set(x, internalSlots);
    }
    return internalSlots;
  }

  // bazel-out/darwin-fastbuild/bin/packages/intl-locale/lib/index.js
  var likelySubtags = likelySubtagsData.supplemental.likelySubtags;
  var RELEVANT_EXTENSION_KEYS = ["ca", "co", "hc", "kf", "kn", "nu"];
  var UNICODE_TYPE_REGEX = /^[a-z0-9]{3,8}(-[a-z0-9]{3,8})*$/i;
  function applyOptionsToTag(tag, options) {
    invariant(typeof tag === "string", "language tag must be a string");
    invariant((0, import_intl_getcanonicallocales.isStructurallyValidLanguageTag)(tag), "malformed language tag", RangeError);
    var language = GetOption(options, "language", "string", void 0, void 0);
    if (language !== void 0) {
      invariant((0, import_intl_getcanonicallocales.isUnicodeLanguageSubtag)(language), "Malformed unicode_language_subtag", RangeError);
    }
    var script = GetOption(options, "script", "string", void 0, void 0);
    if (script !== void 0) {
      invariant((0, import_intl_getcanonicallocales.isUnicodeScriptSubtag)(script), "Malformed unicode_script_subtag", RangeError);
    }
    var region = GetOption(options, "region", "string", void 0, void 0);
    if (region !== void 0) {
      invariant((0, import_intl_getcanonicallocales.isUnicodeRegionSubtag)(region), "Malformed unicode_region_subtag", RangeError);
    }
    var languageId = (0, import_intl_getcanonicallocales.parseUnicodeLanguageId)(tag);
    if (language !== void 0) {
      languageId.lang = language;
    }
    if (script !== void 0) {
      languageId.script = script;
    }
    if (region !== void 0) {
      languageId.region = region;
    }
    return Intl.getCanonicalLocales((0, import_intl_getcanonicallocales.emitUnicodeLocaleId)((0, import_tslib5.__assign)((0, import_tslib5.__assign)({}, (0, import_intl_getcanonicallocales.parseUnicodeLocaleId)(tag)), {lang: languageId})))[0];
  }
  function applyUnicodeExtensionToTag(tag, options, relevantExtensionKeys) {
    var unicodeExtension;
    var keywords = [];
    var ast = (0, import_intl_getcanonicallocales.parseUnicodeLocaleId)(tag);
    for (var _i = 0, _a = ast.extensions; _i < _a.length; _i++) {
      var ext = _a[_i];
      if (ext.type === "u") {
        unicodeExtension = ext;
        if (Array.isArray(ext.keywords))
          keywords = ext.keywords;
      }
    }
    var result = Object.create(null);
    for (var _b = 0, relevantExtensionKeys_1 = relevantExtensionKeys; _b < relevantExtensionKeys_1.length; _b++) {
      var key = relevantExtensionKeys_1[_b];
      var value = void 0, entry = void 0;
      for (var _c = 0, keywords_1 = keywords; _c < keywords_1.length; _c++) {
        var keyword = keywords_1[_c];
        if (keyword[0] === key) {
          entry = keyword;
          value = entry[1];
        }
      }
      invariant(key in options, key + " must be in options");
      var optionsValue = options[key];
      if (optionsValue !== void 0) {
        invariant(typeof optionsValue === "string", "Value for " + key + " must be a string");
        value = optionsValue;
        if (entry) {
          entry[1] = value;
        } else {
          keywords.push([key, value]);
        }
      }
      result[key] = value;
    }
    if (!unicodeExtension) {
      if (keywords.length) {
        ast.extensions.push({
          type: "u",
          keywords: keywords,
          attributes: []
        });
      }
    } else {
      unicodeExtension.keywords = keywords;
    }
    result.locale = Intl.getCanonicalLocales((0, import_intl_getcanonicallocales.emitUnicodeLocaleId)(ast))[0];
    return result;
  }
  function mergeUnicodeLanguageId(lang, script, region, variants, replacement) {
    if (variants === void 0) {
      variants = [];
    }
    if (!replacement) {
      return {
        lang: lang || "und",
        script: script,
        region: region,
        variants: variants
      };
    }
    return {
      lang: !lang || lang === "und" ? replacement.lang : lang,
      script: script || replacement.script,
      region: region || replacement.region,
      variants: (0, import_tslib5.__spreadArray)((0, import_tslib5.__spreadArray)([], variants), replacement.variants)
    };
  }
  function addLikelySubtags(tag) {
    var ast = (0, import_intl_getcanonicallocales.parseUnicodeLocaleId)(tag);
    var unicodeLangId = ast.lang;
    var lang = unicodeLangId.lang, script = unicodeLangId.script, region = unicodeLangId.region, variants = unicodeLangId.variants;
    if (script && region) {
      var match_1 = likelySubtags[(0, import_intl_getcanonicallocales.emitUnicodeLanguageId)({lang: lang, script: script, region: region, variants: []})];
      if (match_1) {
        var parts_1 = (0, import_intl_getcanonicallocales.parseUnicodeLanguageId)(match_1);
        ast.lang = mergeUnicodeLanguageId(void 0, void 0, void 0, variants, parts_1);
        return (0, import_intl_getcanonicallocales.emitUnicodeLocaleId)(ast);
      }
    }
    if (script) {
      var match_2 = likelySubtags[(0, import_intl_getcanonicallocales.emitUnicodeLanguageId)({lang: lang, script: script, variants: []})];
      if (match_2) {
        var parts_2 = (0, import_intl_getcanonicallocales.parseUnicodeLanguageId)(match_2);
        ast.lang = mergeUnicodeLanguageId(void 0, void 0, region, variants, parts_2);
        return (0, import_intl_getcanonicallocales.emitUnicodeLocaleId)(ast);
      }
    }
    if (region) {
      var match_3 = likelySubtags[(0, import_intl_getcanonicallocales.emitUnicodeLanguageId)({lang: lang, region: region, variants: []})];
      if (match_3) {
        var parts_3 = (0, import_intl_getcanonicallocales.parseUnicodeLanguageId)(match_3);
        ast.lang = mergeUnicodeLanguageId(void 0, script, void 0, variants, parts_3);
        return (0, import_intl_getcanonicallocales.emitUnicodeLocaleId)(ast);
      }
    }
    var match = likelySubtags[lang] || likelySubtags[(0, import_intl_getcanonicallocales.emitUnicodeLanguageId)({lang: "und", script: script, variants: []})];
    if (!match) {
      throw new Error("No match for addLikelySubtags");
    }
    var parts = (0, import_intl_getcanonicallocales.parseUnicodeLanguageId)(match);
    ast.lang = mergeUnicodeLanguageId(void 0, script, region, variants, parts);
    return (0, import_intl_getcanonicallocales.emitUnicodeLocaleId)(ast);
  }
  function removeLikelySubtags(tag) {
    var maxLocale = addLikelySubtags(tag);
    if (!maxLocale) {
      return tag;
    }
    maxLocale = (0, import_intl_getcanonicallocales.emitUnicodeLanguageId)((0, import_tslib5.__assign)((0, import_tslib5.__assign)({}, (0, import_intl_getcanonicallocales.parseUnicodeLanguageId)(maxLocale)), {variants: []}));
    var ast = (0, import_intl_getcanonicallocales.parseUnicodeLocaleId)(tag);
    var _a = ast.lang, lang = _a.lang, script = _a.script, region = _a.region, variants = _a.variants;
    var trial = addLikelySubtags((0, import_intl_getcanonicallocales.emitUnicodeLanguageId)({lang: lang, variants: []}));
    if (trial === maxLocale) {
      return (0, import_intl_getcanonicallocales.emitUnicodeLocaleId)((0, import_tslib5.__assign)((0, import_tslib5.__assign)({}, ast), {lang: mergeUnicodeLanguageId(lang, void 0, void 0, variants)}));
    }
    if (region) {
      var trial_1 = addLikelySubtags((0, import_intl_getcanonicallocales.emitUnicodeLanguageId)({lang: lang, region: region, variants: []}));
      if (trial_1 === maxLocale) {
        return (0, import_intl_getcanonicallocales.emitUnicodeLocaleId)((0, import_tslib5.__assign)((0, import_tslib5.__assign)({}, ast), {lang: mergeUnicodeLanguageId(lang, void 0, region, variants)}));
      }
    }
    if (script) {
      var trial_2 = addLikelySubtags((0, import_intl_getcanonicallocales.emitUnicodeLanguageId)({lang: lang, script: script, variants: []}));
      if (trial_2 === maxLocale) {
        return (0, import_intl_getcanonicallocales.emitUnicodeLocaleId)((0, import_tslib5.__assign)((0, import_tslib5.__assign)({}, ast), {lang: mergeUnicodeLanguageId(lang, script, void 0, variants)}));
      }
    }
    return tag;
  }
  var Locale = function() {
    function Locale2(tag, opts) {
      var newTarget = this && this instanceof Locale2 ? this.constructor : void 0;
      if (!newTarget) {
        throw new TypeError("Intl.Locale must be called with 'new'");
      }
      var relevantExtensionKeys = Locale2.relevantExtensionKeys;
      var internalSlotsList = [
        "initializedLocale",
        "locale",
        "calendar",
        "collation",
        "hourCycle",
        "numberingSystem"
      ];
      if (relevantExtensionKeys.indexOf("kf") > -1) {
        internalSlotsList.push("caseFirst");
      }
      if (relevantExtensionKeys.indexOf("kn") > -1) {
        internalSlotsList.push("numeric");
      }
      if (tag === void 0) {
        throw new TypeError("First argument to Intl.Locale constructor can't be empty or missing");
      }
      if (typeof tag !== "string" && typeof tag !== "object") {
        throw new TypeError("tag must be a string or object");
      }
      var internalSlots;
      if (typeof tag === "object" && (internalSlots = getInternalSlots(tag)) && internalSlots.initializedLocale) {
        tag = internalSlots.locale;
      } else {
        tag = tag.toString();
      }
      internalSlots = getInternalSlots(this);
      var options = CoerceOptionsToObject(opts);
      tag = applyOptionsToTag(tag, options);
      var opt = Object.create(null);
      var calendar = GetOption(options, "calendar", "string", void 0, void 0);
      if (calendar !== void 0) {
        if (!UNICODE_TYPE_REGEX.test(calendar)) {
          throw new RangeError("invalid calendar");
        }
      }
      opt.ca = calendar;
      var collation = GetOption(options, "collation", "string", void 0, void 0);
      if (collation !== void 0) {
        if (!UNICODE_TYPE_REGEX.test(collation)) {
          throw new RangeError("invalid collation");
        }
      }
      opt.co = collation;
      var hc = GetOption(options, "hourCycle", "string", ["h11", "h12", "h23", "h24"], void 0);
      opt.hc = hc;
      var kf = GetOption(options, "caseFirst", "string", ["upper", "lower", "false"], void 0);
      opt.kf = kf;
      var _kn = GetOption(options, "numeric", "boolean", void 0, void 0);
      var kn;
      if (_kn !== void 0) {
        kn = String(_kn);
      }
      opt.kn = kn;
      var numberingSystem = GetOption(options, "numberingSystem", "string", void 0, void 0);
      if (numberingSystem !== void 0) {
        if (!UNICODE_TYPE_REGEX.test(numberingSystem)) {
          throw new RangeError("Invalid numberingSystem");
        }
      }
      opt.nu = numberingSystem;
      var r = applyUnicodeExtensionToTag(tag, opt, relevantExtensionKeys);
      internalSlots.locale = r.locale;
      internalSlots.calendar = r.ca;
      internalSlots.collation = r.co;
      internalSlots.hourCycle = r.hc;
      if (relevantExtensionKeys.indexOf("kf") > -1) {
        internalSlots.caseFirst = r.kf;
      }
      if (relevantExtensionKeys.indexOf("kn") > -1) {
        internalSlots.numeric = SameValue(r.kn, "true");
      }
      internalSlots.numberingSystem = r.nu;
    }
    Locale2.prototype.maximize = function() {
      var locale = getInternalSlots(this).locale;
      try {
        var maximizedLocale = addLikelySubtags(locale);
        return new Locale2(maximizedLocale);
      } catch (e) {
        return new Locale2(locale);
      }
    };
    Locale2.prototype.minimize = function() {
      var locale = getInternalSlots(this).locale;
      try {
        var minimizedLocale = removeLikelySubtags(locale);
        return new Locale2(minimizedLocale);
      } catch (e) {
        return new Locale2(locale);
      }
    };
    Locale2.prototype.toString = function() {
      return getInternalSlots(this).locale;
    };
    Object.defineProperty(Locale2.prototype, "baseName", {
      get: function() {
        var locale = getInternalSlots(this).locale;
        return (0, import_intl_getcanonicallocales.emitUnicodeLanguageId)((0, import_intl_getcanonicallocales.parseUnicodeLanguageId)(locale));
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Locale2.prototype, "calendar", {
      get: function() {
        return getInternalSlots(this).calendar;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Locale2.prototype, "collation", {
      get: function() {
        return getInternalSlots(this).collation;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Locale2.prototype, "hourCycle", {
      get: function() {
        return getInternalSlots(this).hourCycle;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Locale2.prototype, "caseFirst", {
      get: function() {
        return getInternalSlots(this).caseFirst;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Locale2.prototype, "numeric", {
      get: function() {
        return getInternalSlots(this).numeric;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Locale2.prototype, "numberingSystem", {
      get: function() {
        return getInternalSlots(this).numberingSystem;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Locale2.prototype, "language", {
      get: function() {
        var locale = getInternalSlots(this).locale;
        return (0, import_intl_getcanonicallocales.parseUnicodeLanguageId)(locale).lang;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Locale2.prototype, "script", {
      get: function() {
        var locale = getInternalSlots(this).locale;
        return (0, import_intl_getcanonicallocales.parseUnicodeLanguageId)(locale).script;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Locale2.prototype, "region", {
      get: function() {
        var locale = getInternalSlots(this).locale;
        return (0, import_intl_getcanonicallocales.parseUnicodeLanguageId)(locale).region;
      },
      enumerable: false,
      configurable: true
    });
    Locale2.relevantExtensionKeys = RELEVANT_EXTENSION_KEYS;
    return Locale2;
  }();
  try {
    if (typeof Symbol !== "undefined") {
      Object.defineProperty(Locale.prototype, Symbol.toStringTag, {
        value: "Intl.Locale",
        writable: false,
        enumerable: false,
        configurable: true
      });
    }
    Object.defineProperty(Locale.prototype.constructor, "length", {
      value: 1,
      writable: false,
      enumerable: false,
      configurable: true
    });
  } catch (e) {
  }

  // bazel-out/darwin-fastbuild/bin/packages/intl-locale/lib/should-polyfill.js
  function hasIntlGetCanonicalLocalesBug() {
    try {
      return new Intl.Locale("und-x-private").toString() === "x-private";
    } catch (e) {
      return true;
    }
  }
  function shouldPolyfill() {
    return typeof Intl === "undefined" || !("Locale" in Intl) || hasIntlGetCanonicalLocalesBug();
  }

  // bazel-out/darwin-fastbuild/bin/packages/intl-locale/lib/polyfill.js
  if (shouldPolyfill()) {
    Object.defineProperty(Intl, "Locale", {
      value: Locale,
      writable: true,
      enumerable: false,
      configurable: true
    });
  }
})();
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */


}

if (!("Intl"in self&&"PluralRules"in self.Intl
)) {

// Intl.PluralRules
(function() {
  // node_modules/tslib/tslib.es6.js
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {__proto__: []} instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2)
        if (Object.prototype.hasOwnProperty.call(b2, p))
          d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  }
  function __spreadArray(to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
      to[j] = from[i];
    return to;
  }

  // bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/lib/utils.js
  function getMagnitude(x) {
    return Math.floor(Math.log(x) * Math.LOG10E);
  }
  function repeat(s, times) {
    if (typeof s.repeat === "function") {
      return s.repeat(times);
    }
    var arr = new Array(times);
    for (var i = 0; i < arr.length; i++) {
      arr[i] = s;
    }
    return arr.join("");
  }
  var UNICODE_EXTENSION_SEQUENCE_REGEX = /-u(?:-[0-9a-z]{2,8})+/gi;
  function invariant(condition, message, Err) {
    if (Err === void 0) {
      Err = Error;
    }
    if (!condition) {
      throw new Err(message);
    }
  }

  // bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/lib/types/date-time.js
  var RangePatternType;
  (function(RangePatternType2) {
    RangePatternType2["startRange"] = "startRange";
    RangePatternType2["shared"] = "shared";
    RangePatternType2["endRange"] = "endRange";
  })(RangePatternType || (RangePatternType = {}));

  // bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/lib/CanonicalizeLocaleList.js
  function CanonicalizeLocaleList(locales) {
    return Intl.getCanonicalLocales(locales);
  }

  // bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/lib/262.js
  function ToString(o) {
    if (typeof o === "symbol") {
      throw TypeError("Cannot convert a Symbol value to a string");
    }
    return String(o);
  }
  function ToNumber(val) {
    if (val === void 0) {
      return NaN;
    }
    if (val === null) {
      return 0;
    }
    if (typeof val === "boolean") {
      return val ? 1 : 0;
    }
    if (typeof val === "number") {
      return val;
    }
    if (typeof val === "symbol" || typeof val === "bigint") {
      throw new TypeError("Cannot convert symbol/bigint to number");
    }
    return Number(val);
  }
  function ToObject(arg) {
    if (arg == null) {
      throw new TypeError("undefined/null cannot be converted to object");
    }
    return Object(arg);
  }
  function SameValue(x, y) {
    if (Object.is) {
      return Object.is(x, y);
    }
    if (x === y) {
      return x !== 0 || 1 / x === 1 / y;
    }
    return x !== x && y !== y;
  }
  function Type(x) {
    if (x === null) {
      return "Null";
    }
    if (typeof x === "undefined") {
      return "Undefined";
    }
    if (typeof x === "function" || typeof x === "object") {
      return "Object";
    }
    if (typeof x === "number") {
      return "Number";
    }
    if (typeof x === "boolean") {
      return "Boolean";
    }
    if (typeof x === "string") {
      return "String";
    }
    if (typeof x === "symbol") {
      return "Symbol";
    }
    if (typeof x === "bigint") {
      return "BigInt";
    }
  }
  var MINUTES_PER_HOUR = 60;
  var SECONDS_PER_MINUTE = 60;
  var MS_PER_SECOND = 1e3;
  var MS_PER_MINUTE = MS_PER_SECOND * SECONDS_PER_MINUTE;
  var MS_PER_HOUR = MS_PER_MINUTE * MINUTES_PER_HOUR;

  // bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/lib/CoerceOptionsToObject.js
  function CoerceOptionsToObject(options) {
    if (typeof options === "undefined") {
      return Object.create(null);
    }
    return ToObject(options);
  }

  // bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/lib/GetOption.js
  function GetOption(opts, prop, type, values, fallback) {
    if (typeof opts !== "object") {
      throw new TypeError("Options must be an object");
    }
    var value = opts[prop];
    if (value !== void 0) {
      if (type !== "boolean" && type !== "string") {
        throw new TypeError("invalid type");
      }
      if (type === "boolean") {
        value = Boolean(value);
      }
      if (type === "string") {
        value = ToString(value);
      }
      if (values !== void 0 && !values.filter(function(val) {
        return val == value;
      }).length) {
        throw new RangeError(value + " is not within " + values.join(", "));
      }
      return value;
    }
    return fallback;
  }

  // bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/lib/BestAvailableLocale.js
  function BestAvailableLocale(availableLocales, locale) {
    var candidate = locale;
    while (true) {
      if (availableLocales.has(candidate)) {
        return candidate;
      }
      var pos = candidate.lastIndexOf("-");
      if (!~pos) {
        return void 0;
      }
      if (pos >= 2 && candidate[pos - 2] === "-") {
        pos -= 2;
      }
      candidate = candidate.slice(0, pos);
    }
  }

  // bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/lib/LookupMatcher.js
  function LookupMatcher(availableLocales, requestedLocales, getDefaultLocale) {
    var result = {locale: ""};
    for (var _i = 0, requestedLocales_1 = requestedLocales; _i < requestedLocales_1.length; _i++) {
      var locale = requestedLocales_1[_i];
      var noExtensionLocale = locale.replace(UNICODE_EXTENSION_SEQUENCE_REGEX, "");
      var availableLocale = BestAvailableLocale(availableLocales, noExtensionLocale);
      if (availableLocale) {
        result.locale = availableLocale;
        if (locale !== noExtensionLocale) {
          result.extension = locale.slice(noExtensionLocale.length + 1, locale.length);
        }
        return result;
      }
    }
    result.locale = getDefaultLocale();
    return result;
  }

  // bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/lib/BestFitMatcher.js
  function BestFitMatcher(availableLocales, requestedLocales, getDefaultLocale) {
    var minimizedAvailableLocaleMap = {};
    var minimizedAvailableLocales = new Set();
    availableLocales.forEach(function(locale2) {
      var minimizedLocale = new Intl.Locale(locale2).minimize().toString();
      minimizedAvailableLocaleMap[minimizedLocale] = locale2;
      minimizedAvailableLocales.add(minimizedLocale);
    });
    var foundLocale;
    for (var _i = 0, requestedLocales_1 = requestedLocales; _i < requestedLocales_1.length; _i++) {
      var l = requestedLocales_1[_i];
      if (foundLocale) {
        break;
      }
      var noExtensionLocale = l.replace(UNICODE_EXTENSION_SEQUENCE_REGEX, "");
      if (availableLocales.has(noExtensionLocale)) {
        foundLocale = noExtensionLocale;
        break;
      }
      if (minimizedAvailableLocales.has(noExtensionLocale)) {
        foundLocale = minimizedAvailableLocaleMap[noExtensionLocale];
        break;
      }
      var locale = new Intl.Locale(noExtensionLocale);
      var maximizedRequestedLocale = locale.maximize().toString();
      var minimizedRequestedLocale = locale.minimize().toString();
      if (minimizedAvailableLocales.has(minimizedRequestedLocale)) {
        foundLocale = minimizedAvailableLocaleMap[minimizedRequestedLocale];
        break;
      }
      foundLocale = BestAvailableLocale(minimizedAvailableLocales, maximizedRequestedLocale);
    }
    return {
      locale: foundLocale || getDefaultLocale()
    };
  }

  // bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/lib/UnicodeExtensionValue.js
  function UnicodeExtensionValue(extension, key) {
    invariant(key.length === 2, "key must have 2 elements");
    var size = extension.length;
    var searchValue = "-" + key + "-";
    var pos = extension.indexOf(searchValue);
    if (pos !== -1) {
      var start = pos + 4;
      var end = start;
      var k = start;
      var done = false;
      while (!done) {
        var e = extension.indexOf("-", k);
        var len = void 0;
        if (e === -1) {
          len = size - k;
        } else {
          len = e - k;
        }
        if (len === 2) {
          done = true;
        } else if (e === -1) {
          end = size;
          done = true;
        } else {
          end = e;
          k = e + 1;
        }
      }
      return extension.slice(start, end);
    }
    searchValue = "-" + key;
    pos = extension.indexOf(searchValue);
    if (pos !== -1 && pos + 3 === size) {
      return "";
    }
    return void 0;
  }

  // bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/lib/ResolveLocale.js
  function ResolveLocale(availableLocales, requestedLocales, options, relevantExtensionKeys, localeData, getDefaultLocale) {
    var matcher = options.localeMatcher;
    var r;
    if (matcher === "lookup") {
      r = LookupMatcher(availableLocales, requestedLocales, getDefaultLocale);
    } else {
      r = BestFitMatcher(availableLocales, requestedLocales, getDefaultLocale);
    }
    var foundLocale = r.locale;
    var result = {locale: "", dataLocale: foundLocale};
    var supportedExtension = "-u";
    for (var _i = 0, relevantExtensionKeys_1 = relevantExtensionKeys; _i < relevantExtensionKeys_1.length; _i++) {
      var key = relevantExtensionKeys_1[_i];
      invariant(foundLocale in localeData, "Missing locale data for " + foundLocale);
      var foundLocaleData = localeData[foundLocale];
      invariant(typeof foundLocaleData === "object" && foundLocaleData !== null, "locale data " + key + " must be an object");
      var keyLocaleData = foundLocaleData[key];
      invariant(Array.isArray(keyLocaleData), "keyLocaleData for " + key + " must be an array");
      var value = keyLocaleData[0];
      invariant(typeof value === "string" || value === null, "value must be string or null but got " + typeof value + " in key " + key);
      var supportedExtensionAddition = "";
      if (r.extension) {
        var requestedValue = UnicodeExtensionValue(r.extension, key);
        if (requestedValue !== void 0) {
          if (requestedValue !== "") {
            if (~keyLocaleData.indexOf(requestedValue)) {
              value = requestedValue;
              supportedExtensionAddition = "-" + key + "-" + value;
            }
          } else if (~requestedValue.indexOf("true")) {
            value = "true";
            supportedExtensionAddition = "-" + key;
          }
        }
      }
      if (key in options) {
        var optionsValue = options[key];
        invariant(typeof optionsValue === "string" || typeof optionsValue === "undefined" || optionsValue === null, "optionsValue must be String, Undefined or Null");
        if (~keyLocaleData.indexOf(optionsValue)) {
          if (optionsValue !== value) {
            value = optionsValue;
            supportedExtensionAddition = "";
          }
        }
      }
      result[key] = value;
      supportedExtension += supportedExtensionAddition;
    }
    if (supportedExtension.length > 2) {
      var privateIndex = foundLocale.indexOf("-x-");
      if (privateIndex === -1) {
        foundLocale = foundLocale + supportedExtension;
      } else {
        var preExtension = foundLocale.slice(0, privateIndex);
        var postExtension = foundLocale.slice(privateIndex, foundLocale.length);
        foundLocale = preExtension + supportedExtension + postExtension;
      }
      foundLocale = Intl.getCanonicalLocales(foundLocale)[0];
    }
    result.locale = foundLocale;
    return result;
  }

  // bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/lib/DefaultNumberOption.js
  function DefaultNumberOption(val, min, max, fallback) {
    if (val !== void 0) {
      val = Number(val);
      if (isNaN(val) || val < min || val > max) {
        throw new RangeError(val + " is outside of range [" + min + ", " + max + "]");
      }
      return Math.floor(val);
    }
    return fallback;
  }

  // bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/lib/GetNumberOption.js
  function GetNumberOption(options, property, minimum, maximum, fallback) {
    var val = options[property];
    return DefaultNumberOption(val, minimum, maximum, fallback);
  }

  // bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/lib/IsSanctionedSimpleUnitIdentifier.js
  var SANCTIONED_UNITS = [
    "angle-degree",
    "area-acre",
    "area-hectare",
    "concentr-percent",
    "digital-bit",
    "digital-byte",
    "digital-gigabit",
    "digital-gigabyte",
    "digital-kilobit",
    "digital-kilobyte",
    "digital-megabit",
    "digital-megabyte",
    "digital-petabyte",
    "digital-terabit",
    "digital-terabyte",
    "duration-day",
    "duration-hour",
    "duration-millisecond",
    "duration-minute",
    "duration-month",
    "duration-second",
    "duration-week",
    "duration-year",
    "length-centimeter",
    "length-foot",
    "length-inch",
    "length-kilometer",
    "length-meter",
    "length-mile-scandinavian",
    "length-mile",
    "length-millimeter",
    "length-yard",
    "mass-gram",
    "mass-kilogram",
    "mass-ounce",
    "mass-pound",
    "mass-stone",
    "temperature-celsius",
    "temperature-fahrenheit",
    "volume-fluid-ounce",
    "volume-gallon",
    "volume-liter",
    "volume-milliliter"
  ];
  function removeUnitNamespace(unit) {
    return unit.slice(unit.indexOf("-") + 1);
  }
  var SIMPLE_UNITS = SANCTIONED_UNITS.map(removeUnitNamespace);

  // bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/lib/NumberFormat/ToRawPrecision.js
  function ToRawPrecision(x, minPrecision, maxPrecision) {
    var p = maxPrecision;
    var m;
    var e;
    var xFinal;
    if (x === 0) {
      m = repeat("0", p);
      e = 0;
      xFinal = 0;
    } else {
      var xToString = x.toString();
      var xToStringExponentIndex = xToString.indexOf("e");
      var _a = xToString.split("e"), xToStringMantissa = _a[0], xToStringExponent = _a[1];
      var xToStringMantissaWithoutDecimalPoint = xToStringMantissa.replace(".", "");
      if (xToStringExponentIndex >= 0 && xToStringMantissaWithoutDecimalPoint.length <= p) {
        e = +xToStringExponent;
        m = xToStringMantissaWithoutDecimalPoint + repeat("0", p - xToStringMantissaWithoutDecimalPoint.length);
        xFinal = x;
      } else {
        e = getMagnitude(x);
        var decimalPlaceOffset = e - p + 1;
        var n = Math.round(adjustDecimalPlace(x, decimalPlaceOffset));
        if (adjustDecimalPlace(n, p - 1) >= 10) {
          e = e + 1;
          n = Math.floor(n / 10);
        }
        m = n.toString();
        xFinal = adjustDecimalPlace(n, p - 1 - e);
      }
    }
    var int;
    if (e >= p - 1) {
      m = m + repeat("0", e - p + 1);
      int = e + 1;
    } else if (e >= 0) {
      m = m.slice(0, e + 1) + "." + m.slice(e + 1);
      int = e + 1;
    } else {
      m = "0." + repeat("0", -e - 1) + m;
      int = 1;
    }
    if (m.indexOf(".") >= 0 && maxPrecision > minPrecision) {
      var cut = maxPrecision - minPrecision;
      while (cut > 0 && m[m.length - 1] === "0") {
        m = m.slice(0, -1);
        cut--;
      }
      if (m[m.length - 1] === ".") {
        m = m.slice(0, -1);
      }
    }
    return {formattedString: m, roundedNumber: xFinal, integerDigitsCount: int};
    function adjustDecimalPlace(x2, magnitude) {
      return magnitude < 0 ? x2 * Math.pow(10, -magnitude) : x2 / Math.pow(10, magnitude);
    }
  }

  // bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/lib/NumberFormat/ToRawFixed.js
  function ToRawFixed(x, minFraction, maxFraction) {
    var f = maxFraction;
    var n = Math.round(x * Math.pow(10, f));
    var xFinal = n / Math.pow(10, f);
    var m;
    if (n < 1e21) {
      m = n.toString();
    } else {
      m = n.toString();
      var _a = m.split("e"), mantissa = _a[0], exponent = _a[1];
      m = mantissa.replace(".", "");
      m = m + repeat("0", Math.max(+exponent - m.length + 1, 0));
    }
    var int;
    if (f !== 0) {
      var k = m.length;
      if (k <= f) {
        var z = repeat("0", f + 1 - k);
        m = z + m;
        k = f + 1;
      }
      var a = m.slice(0, k - f);
      var b = m.slice(k - f);
      m = a + "." + b;
      int = a.length;
    } else {
      int = m.length;
    }
    var cut = maxFraction - minFraction;
    while (cut > 0 && m[m.length - 1] === "0") {
      m = m.slice(0, -1);
      cut--;
    }
    if (m[m.length - 1] === ".") {
      m = m.slice(0, -1);
    }
    return {formattedString: m, roundedNumber: xFinal, integerDigitsCount: int};
  }

  // bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/lib/NumberFormat/FormatNumericToString.js
  function FormatNumericToString(intlObject, x) {
    var isNegative = x < 0 || SameValue(x, -0);
    if (isNegative) {
      x = -x;
    }
    var result;
    var rourndingType = intlObject.roundingType;
    switch (rourndingType) {
      case "significantDigits":
        result = ToRawPrecision(x, intlObject.minimumSignificantDigits, intlObject.maximumSignificantDigits);
        break;
      case "fractionDigits":
        result = ToRawFixed(x, intlObject.minimumFractionDigits, intlObject.maximumFractionDigits);
        break;
      default:
        result = ToRawPrecision(x, 1, 2);
        if (result.integerDigitsCount > 1) {
          result = ToRawFixed(x, 0, 0);
        }
        break;
    }
    x = result.roundedNumber;
    var string = result.formattedString;
    var int = result.integerDigitsCount;
    var minInteger = intlObject.minimumIntegerDigits;
    if (int < minInteger) {
      var forwardZeros = repeat("0", minInteger - int);
      string = forwardZeros + string;
    }
    if (isNegative) {
      x = -x;
    }
    return {roundedNumber: x, formattedString: string};
  }

  // bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/lib/regex.generated.js
  var S_UNICODE_REGEX = /[\$\+<->\^`\|~\xA2-\xA6\xA8\xA9\xAC\xAE-\xB1\xB4\xB8\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0384\u0385\u03F6\u0482\u058D-\u058F\u0606-\u0608\u060B\u060E\u060F\u06DE\u06E9\u06FD\u06FE\u07F6\u07FE\u07FF\u09F2\u09F3\u09FA\u09FB\u0AF1\u0B70\u0BF3-\u0BFA\u0C7F\u0D4F\u0D79\u0E3F\u0F01-\u0F03\u0F13\u0F15-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE\u0FCF\u0FD5-\u0FD8\u109E\u109F\u1390-\u1399\u166D\u17DB\u1940\u19DE-\u19FF\u1B61-\u1B6A\u1B74-\u1B7C\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2044\u2052\u207A-\u207C\u208A-\u208C\u20A0-\u20BF\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2307\u230C-\u2328\u232B-\u2426\u2440-\u244A\u249C-\u24E9\u2500-\u2767\u2794-\u27C4\u27C7-\u27E5\u27F0-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2B73\u2B76-\u2B95\u2B97-\u2BFF\u2CE5-\u2CEA\u2E50\u2E51\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFB\u3004\u3012\u3013\u3020\u3036\u3037\u303E\u303F\u309B\u309C\u3190\u3191\u3196-\u319F\u31C0-\u31E3\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uAA77-\uAA79\uAB5B\uAB6A\uAB6B\uFB29\uFBB2-\uFBC1\uFDFC\uFDFD\uFE62\uFE64-\uFE66\uFE69\uFF04\uFF0B\uFF1C-\uFF1E\uFF3E\uFF40\uFF5C\uFF5E\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|\uD805\uDF3F|\uD807[\uDFD5-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|\uD82F\uDC9C|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDE8\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\uD838[\uDD4F\uDEFF]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEE0-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF73\uDF80-\uDFD8\uDFE0-\uDFEB]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDD78\uDD7A-\uDDCB\uDDCD-\uDE53\uDE60-\uDE6D\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6\uDF00-\uDF92\uDF94-\uDFCA]/;

  // bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/lib/NumberFormat/format_to_parts.js
  var CARET_S_UNICODE_REGEX = new RegExp("^" + S_UNICODE_REGEX.source);
  var S_DOLLAR_UNICODE_REGEX = new RegExp(S_UNICODE_REGEX.source + "$");

  // bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/lib/NumberFormat/SetNumberFormatDigitOptions.js
  function SetNumberFormatDigitOptions(internalSlots, opts, mnfdDefault, mxfdDefault, notation) {
    var mnid = GetNumberOption(opts, "minimumIntegerDigits", 1, 21, 1);
    var mnfd = opts.minimumFractionDigits;
    var mxfd = opts.maximumFractionDigits;
    var mnsd = opts.minimumSignificantDigits;
    var mxsd = opts.maximumSignificantDigits;
    internalSlots.minimumIntegerDigits = mnid;
    if (mnsd !== void 0 || mxsd !== void 0) {
      internalSlots.roundingType = "significantDigits";
      mnsd = DefaultNumberOption(mnsd, 1, 21, 1);
      mxsd = DefaultNumberOption(mxsd, mnsd, 21, 21);
      internalSlots.minimumSignificantDigits = mnsd;
      internalSlots.maximumSignificantDigits = mxsd;
    } else if (mnfd !== void 0 || mxfd !== void 0) {
      internalSlots.roundingType = "fractionDigits";
      mnfd = DefaultNumberOption(mnfd, 0, 20, mnfdDefault);
      var mxfdActualDefault = Math.max(mnfd, mxfdDefault);
      mxfd = DefaultNumberOption(mxfd, mnfd, 20, mxfdActualDefault);
      internalSlots.minimumFractionDigits = mnfd;
      internalSlots.maximumFractionDigits = mxfd;
    } else if (notation === "compact") {
      internalSlots.roundingType = "compactRounding";
    } else {
      internalSlots.roundingType = "fractionDigits";
      internalSlots.minimumFractionDigits = mnfdDefault;
      internalSlots.maximumFractionDigits = mxfdDefault;
    }
  }

  // bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/lib/PluralRules/GetOperands.js
  function GetOperands(s) {
    invariant(typeof s === "string", "GetOperands should have been called with a string");
    var n = ToNumber(s);
    invariant(isFinite(n), "n should be finite");
    var dp = s.indexOf(".");
    var iv;
    var f;
    var v;
    var fv = "";
    if (dp === -1) {
      iv = n;
      f = 0;
      v = 0;
    } else {
      iv = s.slice(0, dp);
      fv = s.slice(dp, s.length);
      f = ToNumber(fv);
      v = fv.length;
    }
    var i = Math.abs(ToNumber(iv));
    var w;
    var t;
    if (f !== 0) {
      var ft = fv.replace(/0+$/, "");
      w = ft.length;
      t = ToNumber(ft);
    } else {
      w = 0;
      t = 0;
    }
    return {
      Number: n,
      IntegerDigits: i,
      NumberOfFractionDigits: v,
      NumberOfFractionDigitsWithoutTrailing: w,
      FractionDigits: f,
      FractionDigitsWithoutTrailing: t
    };
  }

  // bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/lib/PluralRules/InitializePluralRules.js
  function InitializePluralRules(pl, locales, options, _a) {
    var availableLocales = _a.availableLocales, relevantExtensionKeys = _a.relevantExtensionKeys, localeData = _a.localeData, getDefaultLocale = _a.getDefaultLocale, getInternalSlots2 = _a.getInternalSlots;
    var requestedLocales = CanonicalizeLocaleList(locales);
    var opt = Object.create(null);
    var opts = CoerceOptionsToObject(options);
    var internalSlots = getInternalSlots2(pl);
    internalSlots.initializedPluralRules = true;
    var matcher = GetOption(opts, "localeMatcher", "string", ["best fit", "lookup"], "best fit");
    opt.localeMatcher = matcher;
    internalSlots.type = GetOption(opts, "type", "string", ["cardinal", "ordinal"], "cardinal");
    SetNumberFormatDigitOptions(internalSlots, opts, 0, 3, "standard");
    var r = ResolveLocale(availableLocales, requestedLocales, opt, relevantExtensionKeys, localeData, getDefaultLocale);
    internalSlots.locale = r.locale;
    return pl;
  }

  // bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/lib/PluralRules/ResolvePlural.js
  function ResolvePlural(pl, n, _a) {
    var getInternalSlots2 = _a.getInternalSlots, PluralRuleSelect2 = _a.PluralRuleSelect;
    var internalSlots = getInternalSlots2(pl);
    invariant(Type(internalSlots) === "Object", "pl has to be an object");
    invariant("initializedPluralRules" in internalSlots, "pluralrules must be initialized");
    invariant(Type(n) === "Number", "n must be a number");
    if (!isFinite(n)) {
      return "other";
    }
    var locale = internalSlots.locale, type = internalSlots.type;
    var res = FormatNumericToString(internalSlots, n);
    var s = res.formattedString;
    var operands = GetOperands(s);
    return PluralRuleSelect2(locale, type, n, operands);
  }

  // bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/lib/LookupSupportedLocales.js
  function LookupSupportedLocales(availableLocales, requestedLocales) {
    var subset = [];
    for (var _i = 0, requestedLocales_1 = requestedLocales; _i < requestedLocales_1.length; _i++) {
      var locale = requestedLocales_1[_i];
      var noExtensionLocale = locale.replace(UNICODE_EXTENSION_SEQUENCE_REGEX, "");
      var availableLocale = BestAvailableLocale(availableLocales, noExtensionLocale);
      if (availableLocale) {
        subset.push(availableLocale);
      }
    }
    return subset;
  }

  // bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/lib/SupportedLocales.js
  function SupportedLocales(availableLocales, requestedLocales, options) {
    var matcher = "best fit";
    if (options !== void 0) {
      options = ToObject(options);
      matcher = GetOption(options, "localeMatcher", "string", ["lookup", "best fit"], "best fit");
    }
    if (matcher === "best fit") {
      return LookupSupportedLocales(availableLocales, requestedLocales);
    }
    return LookupSupportedLocales(availableLocales, requestedLocales);
  }

  // bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/lib/data.js
  var MissingLocaleDataError = function(_super) {
    __extends(MissingLocaleDataError2, _super);
    function MissingLocaleDataError2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.type = "MISSING_LOCALE_DATA";
      return _this;
    }
    return MissingLocaleDataError2;
  }(Error);

  // bazel-out/darwin-fastbuild/bin/packages/intl-pluralrules/lib/get_internal_slots.js
  var internalSlotMap = new WeakMap();
  function getInternalSlots(x) {
    var internalSlots = internalSlotMap.get(x);
    if (!internalSlots) {
      internalSlots = Object.create(null);
      internalSlotMap.set(x, internalSlots);
    }
    return internalSlots;
  }

  // bazel-out/darwin-fastbuild/bin/packages/intl-pluralrules/lib/index.js
  function validateInstance(instance, method) {
    if (!(instance instanceof PluralRules)) {
      throw new TypeError("Method Intl.PluralRules.prototype." + method + " called on incompatible receiver " + String(instance));
    }
  }
  function PluralRuleSelect(locale, type, _n, _a) {
    var IntegerDigits = _a.IntegerDigits, NumberOfFractionDigits = _a.NumberOfFractionDigits, FractionDigits = _a.FractionDigits;
    return PluralRules.localeData[locale].fn(NumberOfFractionDigits ? IntegerDigits + "." + FractionDigits : IntegerDigits, type === "ordinal");
  }
  var PluralRules = function() {
    function PluralRules2(locales, options) {
      var newTarget = this && this instanceof PluralRules2 ? this.constructor : void 0;
      if (!newTarget) {
        throw new TypeError("Intl.PluralRules must be called with 'new'");
      }
      return InitializePluralRules(this, locales, options, {
        availableLocales: PluralRules2.availableLocales,
        relevantExtensionKeys: PluralRules2.relevantExtensionKeys,
        localeData: PluralRules2.localeData,
        getDefaultLocale: PluralRules2.getDefaultLocale,
        getInternalSlots: getInternalSlots
      });
    }
    PluralRules2.prototype.resolvedOptions = function() {
      validateInstance(this, "resolvedOptions");
      var opts = Object.create(null);
      var internalSlots = getInternalSlots(this);
      opts.locale = internalSlots.locale;
      opts.type = internalSlots.type;
      [
        "minimumIntegerDigits",
        "minimumFractionDigits",
        "maximumFractionDigits",
        "minimumSignificantDigits",
        "maximumSignificantDigits"
      ].forEach(function(field) {
        var val = internalSlots[field];
        if (val !== void 0) {
          opts[field] = val;
        }
      });
      opts.pluralCategories = __spreadArray([], PluralRules2.localeData[opts.locale].categories[opts.type]);
      return opts;
    };
    PluralRules2.prototype.select = function(val) {
      var pr = this;
      validateInstance(pr, "select");
      var n = ToNumber(val);
      return ResolvePlural(pr, n, {getInternalSlots: getInternalSlots, PluralRuleSelect: PluralRuleSelect});
    };
    PluralRules2.prototype.toString = function() {
      return "[object Intl.PluralRules]";
    };
    PluralRules2.supportedLocalesOf = function(locales, options) {
      return SupportedLocales(PluralRules2.availableLocales, CanonicalizeLocaleList(locales), options);
    };
    PluralRules2.__addLocaleData = function() {
      var data = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        data[_i] = arguments[_i];
      }
      for (var _a = 0, data_1 = data; _a < data_1.length; _a++) {
        var _b = data_1[_a], d = _b.data, locale = _b.locale;
        PluralRules2.localeData[locale] = d;
        PluralRules2.availableLocales.add(locale);
        if (!PluralRules2.__defaultLocale) {
          PluralRules2.__defaultLocale = locale;
        }
      }
    };
    PluralRules2.getDefaultLocale = function() {
      return PluralRules2.__defaultLocale;
    };
    PluralRules2.localeData = {};
    PluralRules2.availableLocales = new Set();
    PluralRules2.__defaultLocale = "";
    PluralRules2.relevantExtensionKeys = [];
    PluralRules2.polyfilled = true;
    return PluralRules2;
  }();
  try {
    if (typeof Symbol !== "undefined") {
      Object.defineProperty(PluralRules.prototype, Symbol.toStringTag, {
        value: "Intl.PluralRules",
        writable: false,
        enumerable: false,
        configurable: true
      });
    }
    try {
      Object.defineProperty(PluralRules, "length", {
        value: 0,
        writable: false,
        enumerable: false,
        configurable: true
      });
    } catch (error) {
    }
    Object.defineProperty(PluralRules.prototype.constructor, "length", {
      value: 0,
      writable: false,
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(PluralRules.supportedLocalesOf, "length", {
      value: 1,
      writable: false,
      enumerable: false,
      configurable: true
    });
  } catch (ex) {
  }

  // bazel-out/darwin-fastbuild/bin/packages/intl-pluralrules/lib/should-polyfill.js
  function shouldPolyfill() {
    return typeof Intl === "undefined" || !("PluralRules" in Intl) || new Intl.PluralRules("en", {minimumFractionDigits: 2}).select(1) === "one";
  }

  // bazel-out/darwin-fastbuild/bin/packages/intl-pluralrules/lib/polyfill.js
  if (shouldPolyfill()) {
    Object.defineProperty(Intl, "PluralRules", {
      value: PluralRules,
      writable: true,
      enumerable: false,
      configurable: true
    });
  }
})();
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */


}

if (!("Intl"in self&&"NumberFormat"in self.Intl&&function(){try{new Intl.NumberFormat(undefined,{style:"unit",unit:"byte"})}catch(n){return!1}return!0}()
)) {

// Intl.NumberFormat
(function() {
  var __defProp = Object.defineProperty;
  var __export = function(target, all) {
    for (var name in all)
      __defProp(target, name, {get: all[name], enumerable: true});
  };

  // node_modules/tslib/tslib.es6.js
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {__proto__: []} instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2)
        if (Object.prototype.hasOwnProperty.call(b2, p))
          d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  }

  // bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/lib/utils.js
  function getMagnitude(x) {
    return Math.floor(Math.log(x) * Math.LOG10E);
  }
  function repeat(s, times) {
    if (typeof s.repeat === "function") {
      return s.repeat(times);
    }
    var arr = new Array(times);
    for (var i = 0; i < arr.length; i++) {
      arr[i] = s;
    }
    return arr.join("");
  }
  function defineProperty(target, name, _a) {
    var value = _a.value;
    Object.defineProperty(target, name, {
      configurable: true,
      enumerable: false,
      writable: true,
      value: value
    });
  }
  var UNICODE_EXTENSION_SEQUENCE_REGEX = /-u(?:-[0-9a-z]{2,8})+/gi;
  function invariant(condition, message, Err) {
    if (Err === void 0) {
      Err = Error;
    }
    if (!condition) {
      throw new Err(message);
    }
  }

  // bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/lib/types/date-time.js
  var RangePatternType;
  (function(RangePatternType2) {
    RangePatternType2["startRange"] = "startRange";
    RangePatternType2["shared"] = "shared";
    RangePatternType2["endRange"] = "endRange";
  })(RangePatternType || (RangePatternType = {}));

  // bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/lib/CanonicalizeLocaleList.js
  function CanonicalizeLocaleList(locales) {
    return Intl.getCanonicalLocales(locales);
  }

  // bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/lib/262.js
  function ToString(o) {
    if (typeof o === "symbol") {
      throw TypeError("Cannot convert a Symbol value to a string");
    }
    return String(o);
  }
  function ToNumber(val) {
    if (val === void 0) {
      return NaN;
    }
    if (val === null) {
      return 0;
    }
    if (typeof val === "boolean") {
      return val ? 1 : 0;
    }
    if (typeof val === "number") {
      return val;
    }
    if (typeof val === "symbol" || typeof val === "bigint") {
      throw new TypeError("Cannot convert symbol/bigint to number");
    }
    return Number(val);
  }
  function ToObject(arg) {
    if (arg == null) {
      throw new TypeError("undefined/null cannot be converted to object");
    }
    return Object(arg);
  }
  function SameValue(x, y) {
    if (Object.is) {
      return Object.is(x, y);
    }
    if (x === y) {
      return x !== 0 || 1 / x === 1 / y;
    }
    return x !== x && y !== y;
  }
  function ArrayCreate(len) {
    return new Array(len);
  }
  function HasOwnProperty(o, prop) {
    return Object.prototype.hasOwnProperty.call(o, prop);
  }
  var MINUTES_PER_HOUR = 60;
  var SECONDS_PER_MINUTE = 60;
  var MS_PER_SECOND = 1e3;
  var MS_PER_MINUTE = MS_PER_SECOND * SECONDS_PER_MINUTE;
  var MS_PER_HOUR = MS_PER_MINUTE * MINUTES_PER_HOUR;
  function IsCallable(fn) {
    return typeof fn === "function";
  }
  function OrdinaryHasInstance(C, O, internalSlots) {
    if (!IsCallable(C)) {
      return false;
    }
    if (internalSlots === null || internalSlots === void 0 ? void 0 : internalSlots.boundTargetFunction) {
      var BC = internalSlots === null || internalSlots === void 0 ? void 0 : internalSlots.boundTargetFunction;
      return O instanceof BC;
    }
    if (typeof O !== "object") {
      return false;
    }
    var P = C.prototype;
    if (typeof P !== "object") {
      throw new TypeError("OrdinaryHasInstance called on an object with an invalid prototype property.");
    }
    return Object.prototype.isPrototypeOf.call(P, O);
  }

  // bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/lib/CoerceOptionsToObject.js
  function CoerceOptionsToObject(options) {
    if (typeof options === "undefined") {
      return Object.create(null);
    }
    return ToObject(options);
  }

  // bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/lib/GetOption.js
  function GetOption(opts, prop, type, values, fallback) {
    if (typeof opts !== "object") {
      throw new TypeError("Options must be an object");
    }
    var value = opts[prop];
    if (value !== void 0) {
      if (type !== "boolean" && type !== "string") {
        throw new TypeError("invalid type");
      }
      if (type === "boolean") {
        value = Boolean(value);
      }
      if (type === "string") {
        value = ToString(value);
      }
      if (values !== void 0 && !values.filter(function(val) {
        return val == value;
      }).length) {
        throw new RangeError(value + " is not within " + values.join(", "));
      }
      return value;
    }
    return fallback;
  }

  // bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/lib/BestAvailableLocale.js
  function BestAvailableLocale(availableLocales, locale) {
    var candidate = locale;
    while (true) {
      if (availableLocales.has(candidate)) {
        return candidate;
      }
      var pos = candidate.lastIndexOf("-");
      if (!~pos) {
        return void 0;
      }
      if (pos >= 2 && candidate[pos - 2] === "-") {
        pos -= 2;
      }
      candidate = candidate.slice(0, pos);
    }
  }

  // bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/lib/LookupMatcher.js
  function LookupMatcher(availableLocales, requestedLocales, getDefaultLocale) {
    var result = {locale: ""};
    for (var _i = 0, requestedLocales_1 = requestedLocales; _i < requestedLocales_1.length; _i++) {
      var locale = requestedLocales_1[_i];
      var noExtensionLocale = locale.replace(UNICODE_EXTENSION_SEQUENCE_REGEX, "");
      var availableLocale = BestAvailableLocale(availableLocales, noExtensionLocale);
      if (availableLocale) {
        result.locale = availableLocale;
        if (locale !== noExtensionLocale) {
          result.extension = locale.slice(noExtensionLocale.length + 1, locale.length);
        }
        return result;
      }
    }
    result.locale = getDefaultLocale();
    return result;
  }

  // bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/lib/BestFitMatcher.js
  function BestFitMatcher(availableLocales, requestedLocales, getDefaultLocale) {
    var minimizedAvailableLocaleMap = {};
    var minimizedAvailableLocales = new Set();
    availableLocales.forEach(function(locale2) {
      var minimizedLocale = new Intl.Locale(locale2).minimize().toString();
      minimizedAvailableLocaleMap[minimizedLocale] = locale2;
      minimizedAvailableLocales.add(minimizedLocale);
    });
    var foundLocale;
    for (var _i = 0, requestedLocales_1 = requestedLocales; _i < requestedLocales_1.length; _i++) {
      var l = requestedLocales_1[_i];
      if (foundLocale) {
        break;
      }
      var noExtensionLocale = l.replace(UNICODE_EXTENSION_SEQUENCE_REGEX, "");
      if (availableLocales.has(noExtensionLocale)) {
        foundLocale = noExtensionLocale;
        break;
      }
      if (minimizedAvailableLocales.has(noExtensionLocale)) {
        foundLocale = minimizedAvailableLocaleMap[noExtensionLocale];
        break;
      }
      var locale = new Intl.Locale(noExtensionLocale);
      var maximizedRequestedLocale = locale.maximize().toString();
      var minimizedRequestedLocale = locale.minimize().toString();
      if (minimizedAvailableLocales.has(minimizedRequestedLocale)) {
        foundLocale = minimizedAvailableLocaleMap[minimizedRequestedLocale];
        break;
      }
      foundLocale = BestAvailableLocale(minimizedAvailableLocales, maximizedRequestedLocale);
    }
    return {
      locale: foundLocale || getDefaultLocale()
    };
  }

  // bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/lib/UnicodeExtensionValue.js
  function UnicodeExtensionValue(extension, key) {
    invariant(key.length === 2, "key must have 2 elements");
    var size = extension.length;
    var searchValue = "-" + key + "-";
    var pos = extension.indexOf(searchValue);
    if (pos !== -1) {
      var start = pos + 4;
      var end = start;
      var k = start;
      var done = false;
      while (!done) {
        var e = extension.indexOf("-", k);
        var len = void 0;
        if (e === -1) {
          len = size - k;
        } else {
          len = e - k;
        }
        if (len === 2) {
          done = true;
        } else if (e === -1) {
          end = size;
          done = true;
        } else {
          end = e;
          k = e + 1;
        }
      }
      return extension.slice(start, end);
    }
    searchValue = "-" + key;
    pos = extension.indexOf(searchValue);
    if (pos !== -1 && pos + 3 === size) {
      return "";
    }
    return void 0;
  }

  // bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/lib/ResolveLocale.js
  function ResolveLocale(availableLocales, requestedLocales, options, relevantExtensionKeys, localeData, getDefaultLocale) {
    var matcher = options.localeMatcher;
    var r;
    if (matcher === "lookup") {
      r = LookupMatcher(availableLocales, requestedLocales, getDefaultLocale);
    } else {
      r = BestFitMatcher(availableLocales, requestedLocales, getDefaultLocale);
    }
    var foundLocale = r.locale;
    var result = {locale: "", dataLocale: foundLocale};
    var supportedExtension = "-u";
    for (var _i = 0, relevantExtensionKeys_1 = relevantExtensionKeys; _i < relevantExtensionKeys_1.length; _i++) {
      var key = relevantExtensionKeys_1[_i];
      invariant(foundLocale in localeData, "Missing locale data for " + foundLocale);
      var foundLocaleData = localeData[foundLocale];
      invariant(typeof foundLocaleData === "object" && foundLocaleData !== null, "locale data " + key + " must be an object");
      var keyLocaleData = foundLocaleData[key];
      invariant(Array.isArray(keyLocaleData), "keyLocaleData for " + key + " must be an array");
      var value = keyLocaleData[0];
      invariant(typeof value === "string" || value === null, "value must be string or null but got " + typeof value + " in key " + key);
      var supportedExtensionAddition = "";
      if (r.extension) {
        var requestedValue = UnicodeExtensionValue(r.extension, key);
        if (requestedValue !== void 0) {
          if (requestedValue !== "") {
            if (~keyLocaleData.indexOf(requestedValue)) {
              value = requestedValue;
              supportedExtensionAddition = "-" + key + "-" + value;
            }
          } else if (~requestedValue.indexOf("true")) {
            value = "true";
            supportedExtensionAddition = "-" + key;
          }
        }
      }
      if (key in options) {
        var optionsValue = options[key];
        invariant(typeof optionsValue === "string" || typeof optionsValue === "undefined" || optionsValue === null, "optionsValue must be String, Undefined or Null");
        if (~keyLocaleData.indexOf(optionsValue)) {
          if (optionsValue !== value) {
            value = optionsValue;
            supportedExtensionAddition = "";
          }
        }
      }
      result[key] = value;
      supportedExtension += supportedExtensionAddition;
    }
    if (supportedExtension.length > 2) {
      var privateIndex = foundLocale.indexOf("-x-");
      if (privateIndex === -1) {
        foundLocale = foundLocale + supportedExtension;
      } else {
        var preExtension = foundLocale.slice(0, privateIndex);
        var postExtension = foundLocale.slice(privateIndex, foundLocale.length);
        foundLocale = preExtension + supportedExtension + postExtension;
      }
      foundLocale = Intl.getCanonicalLocales(foundLocale)[0];
    }
    result.locale = foundLocale;
    return result;
  }

  // bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/lib/DefaultNumberOption.js
  function DefaultNumberOption(val, min, max, fallback) {
    if (val !== void 0) {
      val = Number(val);
      if (isNaN(val) || val < min || val > max) {
        throw new RangeError(val + " is outside of range [" + min + ", " + max + "]");
      }
      return Math.floor(val);
    }
    return fallback;
  }

  // bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/lib/GetNumberOption.js
  function GetNumberOption(options, property, minimum, maximum, fallback) {
    var val = options[property];
    return DefaultNumberOption(val, minimum, maximum, fallback);
  }

  // bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/lib/IsWellFormedCurrencyCode.js
  function toUpperCase(str) {
    return str.replace(/([a-z])/g, function(_, c) {
      return c.toUpperCase();
    });
  }
  var NOT_A_Z_REGEX = /[^A-Z]/;
  function IsWellFormedCurrencyCode(currency) {
    currency = toUpperCase(currency);
    if (currency.length !== 3) {
      return false;
    }
    if (NOT_A_Z_REGEX.test(currency)) {
      return false;
    }
    return true;
  }

  // bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/lib/IsSanctionedSimpleUnitIdentifier.js
  var SANCTIONED_UNITS = [
    "angle-degree",
    "area-acre",
    "area-hectare",
    "concentr-percent",
    "digital-bit",
    "digital-byte",
    "digital-gigabit",
    "digital-gigabyte",
    "digital-kilobit",
    "digital-kilobyte",
    "digital-megabit",
    "digital-megabyte",
    "digital-petabyte",
    "digital-terabit",
    "digital-terabyte",
    "duration-day",
    "duration-hour",
    "duration-millisecond",
    "duration-minute",
    "duration-month",
    "duration-second",
    "duration-week",
    "duration-year",
    "length-centimeter",
    "length-foot",
    "length-inch",
    "length-kilometer",
    "length-meter",
    "length-mile-scandinavian",
    "length-mile",
    "length-millimeter",
    "length-yard",
    "mass-gram",
    "mass-kilogram",
    "mass-ounce",
    "mass-pound",
    "mass-stone",
    "temperature-celsius",
    "temperature-fahrenheit",
    "volume-fluid-ounce",
    "volume-gallon",
    "volume-liter",
    "volume-milliliter"
  ];
  function removeUnitNamespace(unit) {
    return unit.slice(unit.indexOf("-") + 1);
  }
  var SIMPLE_UNITS = SANCTIONED_UNITS.map(removeUnitNamespace);
  function IsSanctionedSimpleUnitIdentifier(unitIdentifier) {
    return SIMPLE_UNITS.indexOf(unitIdentifier) > -1;
  }

  // bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/lib/IsWellFormedUnitIdentifier.js
  function toLowerCase(str) {
    return str.replace(/([A-Z])/g, function(_, c) {
      return c.toLowerCase();
    });
  }
  function IsWellFormedUnitIdentifier(unit) {
    unit = toLowerCase(unit);
    if (IsSanctionedSimpleUnitIdentifier(unit)) {
      return true;
    }
    var units = unit.split("-per-");
    if (units.length !== 2) {
      return false;
    }
    var numerator = units[0], denominator = units[1];
    if (!IsSanctionedSimpleUnitIdentifier(numerator) || !IsSanctionedSimpleUnitIdentifier(denominator)) {
      return false;
    }
    return true;
  }

  // bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/lib/NumberFormat/ComputeExponentForMagnitude.js
  function ComputeExponentForMagnitude(numberFormat, magnitude, _a) {
    var getInternalSlots2 = _a.getInternalSlots;
    var internalSlots = getInternalSlots2(numberFormat);
    var notation = internalSlots.notation, dataLocaleData = internalSlots.dataLocaleData, numberingSystem = internalSlots.numberingSystem;
    switch (notation) {
      case "standard":
        return 0;
      case "scientific":
        return magnitude;
      case "engineering":
        return Math.floor(magnitude / 3) * 3;
      default: {
        var compactDisplay = internalSlots.compactDisplay, style = internalSlots.style, currencyDisplay = internalSlots.currencyDisplay;
        var thresholdMap = void 0;
        if (style === "currency" && currencyDisplay !== "name") {
          var currency = dataLocaleData.numbers.currency[numberingSystem] || dataLocaleData.numbers.currency[dataLocaleData.numbers.nu[0]];
          thresholdMap = currency.short;
        } else {
          var decimal = dataLocaleData.numbers.decimal[numberingSystem] || dataLocaleData.numbers.decimal[dataLocaleData.numbers.nu[0]];
          thresholdMap = compactDisplay === "long" ? decimal.long : decimal.short;
        }
        if (!thresholdMap) {
          return 0;
        }
        var num = String(Math.pow(10, magnitude));
        var thresholds = Object.keys(thresholdMap);
        if (num < thresholds[0]) {
          return 0;
        }
        if (num > thresholds[thresholds.length - 1]) {
          return thresholds[thresholds.length - 1].length - 1;
        }
        var i = thresholds.indexOf(num);
        if (i === -1) {
          return 0;
        }
        var magnitudeKey = thresholds[i];
        var compactPattern = thresholdMap[magnitudeKey].other;
        if (compactPattern === "0") {
          return 0;
        }
        return magnitudeKey.length - thresholdMap[magnitudeKey].other.match(/0+/)[0].length;
      }
    }
  }

  // bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/lib/NumberFormat/ToRawPrecision.js
  function ToRawPrecision(x, minPrecision, maxPrecision) {
    var p = maxPrecision;
    var m;
    var e;
    var xFinal;
    if (x === 0) {
      m = repeat("0", p);
      e = 0;
      xFinal = 0;
    } else {
      var xToString = x.toString();
      var xToStringExponentIndex = xToString.indexOf("e");
      var _a = xToString.split("e"), xToStringMantissa = _a[0], xToStringExponent = _a[1];
      var xToStringMantissaWithoutDecimalPoint = xToStringMantissa.replace(".", "");
      if (xToStringExponentIndex >= 0 && xToStringMantissaWithoutDecimalPoint.length <= p) {
        e = +xToStringExponent;
        m = xToStringMantissaWithoutDecimalPoint + repeat("0", p - xToStringMantissaWithoutDecimalPoint.length);
        xFinal = x;
      } else {
        e = getMagnitude(x);
        var decimalPlaceOffset = e - p + 1;
        var n = Math.round(adjustDecimalPlace(x, decimalPlaceOffset));
        if (adjustDecimalPlace(n, p - 1) >= 10) {
          e = e + 1;
          n = Math.floor(n / 10);
        }
        m = n.toString();
        xFinal = adjustDecimalPlace(n, p - 1 - e);
      }
    }
    var int;
    if (e >= p - 1) {
      m = m + repeat("0", e - p + 1);
      int = e + 1;
    } else if (e >= 0) {
      m = m.slice(0, e + 1) + "." + m.slice(e + 1);
      int = e + 1;
    } else {
      m = "0." + repeat("0", -e - 1) + m;
      int = 1;
    }
    if (m.indexOf(".") >= 0 && maxPrecision > minPrecision) {
      var cut = maxPrecision - minPrecision;
      while (cut > 0 && m[m.length - 1] === "0") {
        m = m.slice(0, -1);
        cut--;
      }
      if (m[m.length - 1] === ".") {
        m = m.slice(0, -1);
      }
    }
    return {formattedString: m, roundedNumber: xFinal, integerDigitsCount: int};
    function adjustDecimalPlace(x2, magnitude) {
      return magnitude < 0 ? x2 * Math.pow(10, -magnitude) : x2 / Math.pow(10, magnitude);
    }
  }

  // bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/lib/NumberFormat/ToRawFixed.js
  function ToRawFixed(x, minFraction, maxFraction) {
    var f = maxFraction;
    var n = Math.round(x * Math.pow(10, f));
    var xFinal = n / Math.pow(10, f);
    var m;
    if (n < 1e21) {
      m = n.toString();
    } else {
      m = n.toString();
      var _a = m.split("e"), mantissa = _a[0], exponent = _a[1];
      m = mantissa.replace(".", "");
      m = m + repeat("0", Math.max(+exponent - m.length + 1, 0));
    }
    var int;
    if (f !== 0) {
      var k = m.length;
      if (k <= f) {
        var z = repeat("0", f + 1 - k);
        m = z + m;
        k = f + 1;
      }
      var a = m.slice(0, k - f);
      var b = m.slice(k - f);
      m = a + "." + b;
      int = a.length;
    } else {
      int = m.length;
    }
    var cut = maxFraction - minFraction;
    while (cut > 0 && m[m.length - 1] === "0") {
      m = m.slice(0, -1);
      cut--;
    }
    if (m[m.length - 1] === ".") {
      m = m.slice(0, -1);
    }
    return {formattedString: m, roundedNumber: xFinal, integerDigitsCount: int};
  }

  // bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/lib/NumberFormat/FormatNumericToString.js
  function FormatNumericToString(intlObject, x) {
    var isNegative = x < 0 || SameValue(x, -0);
    if (isNegative) {
      x = -x;
    }
    var result;
    var rourndingType = intlObject.roundingType;
    switch (rourndingType) {
      case "significantDigits":
        result = ToRawPrecision(x, intlObject.minimumSignificantDigits, intlObject.maximumSignificantDigits);
        break;
      case "fractionDigits":
        result = ToRawFixed(x, intlObject.minimumFractionDigits, intlObject.maximumFractionDigits);
        break;
      default:
        result = ToRawPrecision(x, 1, 2);
        if (result.integerDigitsCount > 1) {
          result = ToRawFixed(x, 0, 0);
        }
        break;
    }
    x = result.roundedNumber;
    var string = result.formattedString;
    var int = result.integerDigitsCount;
    var minInteger = intlObject.minimumIntegerDigits;
    if (int < minInteger) {
      var forwardZeros = repeat("0", minInteger - int);
      string = forwardZeros + string;
    }
    if (isNegative) {
      x = -x;
    }
    return {roundedNumber: x, formattedString: string};
  }

  // bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/lib/NumberFormat/ComputeExponent.js
  function ComputeExponent(numberFormat, x, _a) {
    var getInternalSlots2 = _a.getInternalSlots;
    if (x === 0) {
      return [0, 0];
    }
    if (x < 0) {
      x = -x;
    }
    var magnitude = getMagnitude(x);
    var exponent = ComputeExponentForMagnitude(numberFormat, magnitude, {
      getInternalSlots: getInternalSlots2
    });
    x = exponent < 0 ? x * Math.pow(10, -exponent) : x / Math.pow(10, exponent);
    var formatNumberResult = FormatNumericToString(getInternalSlots2(numberFormat), x);
    if (formatNumberResult.roundedNumber === 0) {
      return [exponent, magnitude];
    }
    var newMagnitude = getMagnitude(formatNumberResult.roundedNumber);
    if (newMagnitude === magnitude - exponent) {
      return [exponent, magnitude];
    }
    return [
      ComputeExponentForMagnitude(numberFormat, magnitude + 1, {
        getInternalSlots: getInternalSlots2
      }),
      magnitude + 1
    ];
  }

  // bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/lib/NumberFormat/CurrencyDigits.js
  function CurrencyDigits(c, _a) {
    var currencyDigitsData = _a.currencyDigitsData;
    return HasOwnProperty(currencyDigitsData, c) ? currencyDigitsData[c] : 2;
  }

  // bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/lib/NumberFormat/digit-mapping.json
  var digit_mapping_exports = {};
  __export(digit_mapping_exports, {
    adlm: function() {
      return adlm;
    },
    ahom: function() {
      return ahom;
    },
    arab: function() {
      return arab;
    },
    arabext: function() {
      return arabext;
    },
    bali: function() {
      return bali;
    },
    beng: function() {
      return beng;
    },
    bhks: function() {
      return bhks;
    },
    brah: function() {
      return brah;
    },
    cakm: function() {
      return cakm;
    },
    cham: function() {
      return cham;
    },
    default: function() {
      return digit_mapping_default;
    },
    deva: function() {
      return deva;
    },
    diak: function() {
      return diak;
    },
    fullwide: function() {
      return fullwide;
    },
    gong: function() {
      return gong;
    },
    gonm: function() {
      return gonm;
    },
    gujr: function() {
      return gujr;
    },
    guru: function() {
      return guru;
    },
    hanidec: function() {
      return hanidec;
    },
    hmng: function() {
      return hmng;
    },
    hmnp: function() {
      return hmnp;
    },
    java: function() {
      return java;
    },
    kali: function() {
      return kali;
    },
    khmr: function() {
      return khmr;
    },
    knda: function() {
      return knda;
    },
    lana: function() {
      return lana;
    },
    lanatham: function() {
      return lanatham;
    },
    laoo: function() {
      return laoo;
    },
    lepc: function() {
      return lepc;
    },
    limb: function() {
      return limb;
    },
    mathbold: function() {
      return mathbold;
    },
    mathdbl: function() {
      return mathdbl;
    },
    mathmono: function() {
      return mathmono;
    },
    mathsanb: function() {
      return mathsanb;
    },
    mathsans: function() {
      return mathsans;
    },
    mlym: function() {
      return mlym;
    },
    modi: function() {
      return modi;
    },
    mong: function() {
      return mong;
    },
    mroo: function() {
      return mroo;
    },
    mtei: function() {
      return mtei;
    },
    mymr: function() {
      return mymr;
    },
    mymrshan: function() {
      return mymrshan;
    },
    mymrtlng: function() {
      return mymrtlng;
    },
    newa: function() {
      return newa;
    },
    nkoo: function() {
      return nkoo;
    },
    olck: function() {
      return olck;
    },
    orya: function() {
      return orya;
    },
    osma: function() {
      return osma;
    },
    rohg: function() {
      return rohg;
    },
    saur: function() {
      return saur;
    },
    segment: function() {
      return segment;
    },
    shrd: function() {
      return shrd;
    },
    sind: function() {
      return sind;
    },
    sinh: function() {
      return sinh;
    },
    sora: function() {
      return sora;
    },
    sund: function() {
      return sund;
    },
    takr: function() {
      return takr;
    },
    talu: function() {
      return talu;
    },
    tamldec: function() {
      return tamldec;
    },
    telu: function() {
      return telu;
    },
    thai: function() {
      return thai;
    },
    tibt: function() {
      return tibt;
    },
    tirh: function() {
      return tirh;
    },
    vaii: function() {
      return vaii;
    },
    wara: function() {
      return wara;
    },
    wcho: function() {
      return wcho;
    }
  });
  var adlm = ["\uD83A\uDD50", "\uD83A\uDD51", "\uD83A\uDD52", "\uD83A\uDD53", "\uD83A\uDD54", "\uD83A\uDD55", "\uD83A\uDD56", "\uD83A\uDD57", "\uD83A\uDD58", "\uD83A\uDD59"];
  var ahom = ["\uD805\uDF30", "\uD805\uDF31", "\uD805\uDF32", "\uD805\uDF33", "\uD805\uDF34", "\uD805\uDF35", "\uD805\uDF36", "\uD805\uDF37", "\uD805\uDF38", "\uD805\uDF39"];
  var arab = ["\u0660", "\u0661", "\u0662", "\u0663", "\u0664", "\u0665", "\u0666", "\u0667", "\u0668", "\u0669"];
  var arabext = ["\u06F0", "\u06F1", "\u06F2", "\u06F3", "\u06F4", "\u06F5", "\u06F6", "\u06F7", "\u06F8", "\u06F9"];
  var bali = ["\u1B50", "\u1B51", "\u1B52", "\u1B53", "\u1B54", "\u1B55", "\u1B56", "\u1B57", "\u1B58", "\u1B59"];
  var beng = ["\u09E6", "\u09E7", "\u09E8", "\u09E9", "\u09EA", "\u09EB", "\u09EC", "\u09ED", "\u09EE", "\u09EF"];
  var bhks = ["\uD807\uDC50", "\uD807\uDC51", "\uD807\uDC52", "\uD807\uDC53", "\uD807\uDC54", "\uD807\uDC55", "\uD807\uDC56", "\uD807\uDC57", "\uD807\uDC58", "\uD807\uDC59"];
  var brah = ["\uD804\uDC66", "\uD804\uDC67", "\uD804\uDC68", "\uD804\uDC69", "\uD804\uDC6A", "\uD804\uDC6B", "\uD804\uDC6C", "\uD804\uDC6D", "\uD804\uDC6E", "\uD804\uDC6F"];
  var cakm = ["\uD804\uDD36", "\uD804\uDD37", "\uD804\uDD38", "\uD804\uDD39", "\uD804\uDD3A", "\uD804\uDD3B", "\uD804\uDD3C", "\uD804\uDD3D", "\uD804\uDD3E", "\uD804\uDD3F"];
  var cham = ["\uAA50", "\uAA51", "\uAA52", "\uAA53", "\uAA54", "\uAA55", "\uAA56", "\uAA57", "\uAA58", "\uAA59"];
  var deva = ["\u0966", "\u0967", "\u0968", "\u0969", "\u096A", "\u096B", "\u096C", "\u096D", "\u096E", "\u096F"];
  var diak = ["\uD806\uDD50", "\uD806\uDD51", "\uD806\uDD52", "\uD806\uDD53", "\uD806\uDD54", "\uD806\uDD55", "\uD806\uDD56", "\uD806\uDD57", "\uD806\uDD58", "\uD806\uDD59"];
  var fullwide = ["\uFF10", "\uFF11", "\uFF12", "\uFF13", "\uFF14", "\uFF15", "\uFF16", "\uFF17", "\uFF18", "\uFF19"];
  var gong = ["\uD807\uDDA0", "\uD807\uDDA1", "\uD807\uDDA2", "\uD807\uDDA3", "\uD807\uDDA4", "\uD807\uDDA5", "\uD807\uDDA6", "\uD807\uDDA7", "\uD807\uDDA8", "\uD807\uDDA9"];
  var gonm = ["\uD807\uDD50", "\uD807\uDD51", "\uD807\uDD52", "\uD807\uDD53", "\uD807\uDD54", "\uD807\uDD55", "\uD807\uDD56", "\uD807\uDD57", "\uD807\uDD58", "\uD807\uDD59"];
  var gujr = ["\u0AE6", "\u0AE7", "\u0AE8", "\u0AE9", "\u0AEA", "\u0AEB", "\u0AEC", "\u0AED", "\u0AEE", "\u0AEF"];
  var guru = ["\u0A66", "\u0A67", "\u0A68", "\u0A69", "\u0A6A", "\u0A6B", "\u0A6C", "\u0A6D", "\u0A6E", "\u0A6F"];
  var hanidec = ["\u3007", "\u4E00", "\u4E8C", "\u4E09", "\u56DB", "\u4E94", "\u516D", "\u4E03", "\u516B", "\u4E5D"];
  var hmng = ["\uD81A\uDF50", "\uD81A\uDF51", "\uD81A\uDF52", "\uD81A\uDF53", "\uD81A\uDF54", "\uD81A\uDF55", "\uD81A\uDF56", "\uD81A\uDF57", "\uD81A\uDF58", "\uD81A\uDF59"];
  var hmnp = ["\uD838\uDD40", "\uD838\uDD41", "\uD838\uDD42", "\uD838\uDD43", "\uD838\uDD44", "\uD838\uDD45", "\uD838\uDD46", "\uD838\uDD47", "\uD838\uDD48", "\uD838\uDD49"];
  var java = ["\uA9D0", "\uA9D1", "\uA9D2", "\uA9D3", "\uA9D4", "\uA9D5", "\uA9D6", "\uA9D7", "\uA9D8", "\uA9D9"];
  var kali = ["\uA900", "\uA901", "\uA902", "\uA903", "\uA904", "\uA905", "\uA906", "\uA907", "\uA908", "\uA909"];
  var khmr = ["\u17E0", "\u17E1", "\u17E2", "\u17E3", "\u17E4", "\u17E5", "\u17E6", "\u17E7", "\u17E8", "\u17E9"];
  var knda = ["\u0CE6", "\u0CE7", "\u0CE8", "\u0CE9", "\u0CEA", "\u0CEB", "\u0CEC", "\u0CED", "\u0CEE", "\u0CEF"];
  var lana = ["\u1A80", "\u1A81", "\u1A82", "\u1A83", "\u1A84", "\u1A85", "\u1A86", "\u1A87", "\u1A88", "\u1A89"];
  var lanatham = ["\u1A90", "\u1A91", "\u1A92", "\u1A93", "\u1A94", "\u1A95", "\u1A96", "\u1A97", "\u1A98", "\u1A99"];
  var laoo = ["\u0ED0", "\u0ED1", "\u0ED2", "\u0ED3", "\u0ED4", "\u0ED5", "\u0ED6", "\u0ED7", "\u0ED8", "\u0ED9"];
  var lepc = ["\u1A90", "\u1A91", "\u1A92", "\u1A93", "\u1A94", "\u1A95", "\u1A96", "\u1A97", "\u1A98", "\u1A99"];
  var limb = ["\u1946", "\u1947", "\u1948", "\u1949", "\u194A", "\u194B", "\u194C", "\u194D", "\u194E", "\u194F"];
  var mathbold = ["\uD835\uDFCE", "\uD835\uDFCF", "\uD835\uDFD0", "\uD835\uDFD1", "\uD835\uDFD2", "\uD835\uDFD3", "\uD835\uDFD4", "\uD835\uDFD5", "\uD835\uDFD6", "\uD835\uDFD7"];
  var mathdbl = ["\uD835\uDFD8", "\uD835\uDFD9", "\uD835\uDFDA", "\uD835\uDFDB", "\uD835\uDFDC", "\uD835\uDFDD", "\uD835\uDFDE", "\uD835\uDFDF", "\uD835\uDFE0", "\uD835\uDFE1"];
  var mathmono = ["\uD835\uDFF6", "\uD835\uDFF7", "\uD835\uDFF8", "\uD835\uDFF9", "\uD835\uDFFA", "\uD835\uDFFB", "\uD835\uDFFC", "\uD835\uDFFD", "\uD835\uDFFE", "\uD835\uDFFF"];
  var mathsanb = ["\uD835\uDFEC", "\uD835\uDFED", "\uD835\uDFEE", "\uD835\uDFEF", "\uD835\uDFF0", "\uD835\uDFF1", "\uD835\uDFF2", "\uD835\uDFF3", "\uD835\uDFF4", "\uD835\uDFF5"];
  var mathsans = ["\uD835\uDFE2", "\uD835\uDFE3", "\uD835\uDFE4", "\uD835\uDFE5", "\uD835\uDFE6", "\uD835\uDFE7", "\uD835\uDFE8", "\uD835\uDFE9", "\uD835\uDFEA", "\uD835\uDFEB"];
  var mlym = ["\u0D66", "\u0D67", "\u0D68", "\u0D69", "\u0D6A", "\u0D6B", "\u0D6C", "\u0D6D", "\u0D6E", "\u0D6F"];
  var modi = ["\uD805\uDE50", "\uD805\uDE51", "\uD805\uDE52", "\uD805\uDE53", "\uD805\uDE54", "\uD805\uDE55", "\uD805\uDE56", "\uD805\uDE57", "\uD805\uDE58", "\uD805\uDE59"];
  var mong = ["\u1810", "\u1811", "\u1812", "\u1813", "\u1814", "\u1815", "\u1816", "\u1817", "\u1818", "\u1819"];
  var mroo = ["\uD81A\uDE60", "\uD81A\uDE61", "\uD81A\uDE62", "\uD81A\uDE63", "\uD81A\uDE64", "\uD81A\uDE65", "\uD81A\uDE66", "\uD81A\uDE67", "\uD81A\uDE68", "\uD81A\uDE69"];
  var mtei = ["\uABF0", "\uABF1", "\uABF2", "\uABF3", "\uABF4", "\uABF5", "\uABF6", "\uABF7", "\uABF8", "\uABF9"];
  var mymr = ["\u1040", "\u1041", "\u1042", "\u1043", "\u1044", "\u1045", "\u1046", "\u1047", "\u1048", "\u1049"];
  var mymrshan = ["\u1090", "\u1091", "\u1092", "\u1093", "\u1094", "\u1095", "\u1096", "\u1097", "\u1098", "\u1099"];
  var mymrtlng = ["\uA9F0", "\uA9F1", "\uA9F2", "\uA9F3", "\uA9F4", "\uA9F5", "\uA9F6", "\uA9F7", "\uA9F8", "\uA9F9"];
  var newa = ["\uD805\uDC50", "\uD805\uDC51", "\uD805\uDC52", "\uD805\uDC53", "\uD805\uDC54", "\uD805\uDC55", "\uD805\uDC56", "\uD805\uDC57", "\uD805\uDC58", "\uD805\uDC59"];
  var nkoo = ["\u07C0", "\u07C1", "\u07C2", "\u07C3", "\u07C4", "\u07C5", "\u07C6", "\u07C7", "\u07C8", "\u07C9"];
  var olck = ["\u1C50", "\u1C51", "\u1C52", "\u1C53", "\u1C54", "\u1C55", "\u1C56", "\u1C57", "\u1C58", "\u1C59"];
  var orya = ["\u0B66", "\u0B67", "\u0B68", "\u0B69", "\u0B6A", "\u0B6B", "\u0B6C", "\u0B6D", "\u0B6E", "\u0B6F"];
  var osma = ["\uD801\uDCA0", "\uD801\uDCA1", "\uD801\uDCA2", "\uD801\uDCA3", "\uD801\uDCA4", "\uD801\uDCA5", "\uD801\uDCA6", "\uD801\uDCA7", "\uD801\uDCA8", "\uD801\uDCA9"];
  var rohg = ["\uD803\uDD30", "\uD803\uDD31", "\uD803\uDD32", "\uD803\uDD33", "\uD803\uDD34", "\uD803\uDD35", "\uD803\uDD36", "\uD803\uDD37", "\uD803\uDD38", "\uD803\uDD39"];
  var saur = ["\uA8D0", "\uA8D1", "\uA8D2", "\uA8D3", "\uA8D4", "\uA8D5", "\uA8D6", "\uA8D7", "\uA8D8", "\uA8D9"];
  var segment = ["\uD83E\uDFF0", "\uD83E\uDFF1", "\uD83E\uDFF2", "\uD83E\uDFF3", "\uD83E\uDFF4", "\uD83E\uDFF5", "\uD83E\uDFF6", "\uD83E\uDFF7", "\uD83E\uDFF8", "\uD83E\uDFF9"];
  var shrd = ["\uD804\uDDD0", "\uD804\uDDD1", "\uD804\uDDD2", "\uD804\uDDD3", "\uD804\uDDD4", "\uD804\uDDD5", "\uD804\uDDD6", "\uD804\uDDD7", "\uD804\uDDD8", "\uD804\uDDD9"];
  var sind = ["\uD804\uDEF0", "\uD804\uDEF1", "\uD804\uDEF2", "\uD804\uDEF3", "\uD804\uDEF4", "\uD804\uDEF5", "\uD804\uDEF6", "\uD804\uDEF7", "\uD804\uDEF8", "\uD804\uDEF9"];
  var sinh = ["\u0DE6", "\u0DE7", "\u0DE8", "\u0DE9", "\u0DEA", "\u0DEB", "\u0DEC", "\u0DED", "\u0DEE", "\u0DEF"];
  var sora = ["\uD804\uDCF0", "\uD804\uDCF1", "\uD804\uDCF2", "\uD804\uDCF3", "\uD804\uDCF4", "\uD804\uDCF5", "\uD804\uDCF6", "\uD804\uDCF7", "\uD804\uDCF8", "\uD804\uDCF9"];
  var sund = ["\u1BB0", "\u1BB1", "\u1BB2", "\u1BB3", "\u1BB4", "\u1BB5", "\u1BB6", "\u1BB7", "\u1BB8", "\u1BB9"];
  var takr = ["\uD805\uDEC0", "\uD805\uDEC1", "\uD805\uDEC2", "\uD805\uDEC3", "\uD805\uDEC4", "\uD805\uDEC5", "\uD805\uDEC6", "\uD805\uDEC7", "\uD805\uDEC8", "\uD805\uDEC9"];
  var talu = ["\u19D0", "\u19D1", "\u19D2", "\u19D3", "\u19D4", "\u19D5", "\u19D6", "\u19D7", "\u19D8", "\u19D9"];
  var tamldec = ["\u0BE6", "\u0BE7", "\u0BE8", "\u0BE9", "\u0BEA", "\u0BEB", "\u0BEC", "\u0BED", "\u0BEE", "\u0BEF"];
  var telu = ["\u0C66", "\u0C67", "\u0C68", "\u0C69", "\u0C6A", "\u0C6B", "\u0C6C", "\u0C6D", "\u0C6E", "\u0C6F"];
  var thai = ["\u0E50", "\u0E51", "\u0E52", "\u0E53", "\u0E54", "\u0E55", "\u0E56", "\u0E57", "\u0E58", "\u0E59"];
  var tibt = ["\u0F20", "\u0F21", "\u0F22", "\u0F23", "\u0F24", "\u0F25", "\u0F26", "\u0F27", "\u0F28", "\u0F29"];
  var tirh = ["\uD805\uDCD0", "\uD805\uDCD1", "\uD805\uDCD2", "\uD805\uDCD3", "\uD805\uDCD4", "\uD805\uDCD5", "\uD805\uDCD6", "\uD805\uDCD7", "\uD805\uDCD8", "\uD805\uDCD9"];
  var vaii = ["\u1620", "\u1621", "\u1622", "\u1623", "\u1624", "\u1625", "\u1626", "\u1627", "\u1628", "\u1629"];
  var wara = ["\uD806\uDCE0", "\uD806\uDCE1", "\uD806\uDCE2", "\uD806\uDCE3", "\uD806\uDCE4", "\uD806\uDCE5", "\uD806\uDCE6", "\uD806\uDCE7", "\uD806\uDCE8", "\uD806\uDCE9"];
  var wcho = ["\uD838\uDEF0", "\uD838\uDEF1", "\uD838\uDEF2", "\uD838\uDEF3", "\uD838\uDEF4", "\uD838\uDEF5", "\uD838\uDEF6", "\uD838\uDEF7", "\uD838\uDEF8", "\uD838\uDEF9"];
  var digit_mapping_default = {adlm: adlm, ahom: ahom, arab: arab, arabext: arabext, bali: bali, beng: beng, bhks: bhks, brah: brah, cakm: cakm, cham: cham, deva: deva, diak: diak, fullwide: fullwide, gong: gong, gonm: gonm, gujr: gujr, guru: guru, hanidec: hanidec, hmng: hmng, hmnp: hmnp, java: java, kali: kali, khmr: khmr, knda: knda, lana: lana, lanatham: lanatham, laoo: laoo, lepc: lepc, limb: limb, mathbold: mathbold, mathdbl: mathdbl, mathmono: mathmono, mathsanb: mathsanb, mathsans: mathsans, mlym: mlym, modi: modi, mong: mong, mroo: mroo, mtei: mtei, mymr: mymr, mymrshan: mymrshan, mymrtlng: mymrtlng, newa: newa, nkoo: nkoo, olck: olck, orya: orya, osma: osma, rohg: rohg, saur: saur, segment: segment, shrd: shrd, sind: sind, sinh: sinh, sora: sora, sund: sund, takr: takr, talu: talu, tamldec: tamldec, telu: telu, thai: thai, tibt: tibt, tirh: tirh, vaii: vaii, wara: wara, wcho: wcho};

  // bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/lib/regex.generated.js
  var S_UNICODE_REGEX = /[\$\+<->\^`\|~\xA2-\xA6\xA8\xA9\xAC\xAE-\xB1\xB4\xB8\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0384\u0385\u03F6\u0482\u058D-\u058F\u0606-\u0608\u060B\u060E\u060F\u06DE\u06E9\u06FD\u06FE\u07F6\u07FE\u07FF\u09F2\u09F3\u09FA\u09FB\u0AF1\u0B70\u0BF3-\u0BFA\u0C7F\u0D4F\u0D79\u0E3F\u0F01-\u0F03\u0F13\u0F15-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE\u0FCF\u0FD5-\u0FD8\u109E\u109F\u1390-\u1399\u166D\u17DB\u1940\u19DE-\u19FF\u1B61-\u1B6A\u1B74-\u1B7C\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2044\u2052\u207A-\u207C\u208A-\u208C\u20A0-\u20BF\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2307\u230C-\u2328\u232B-\u2426\u2440-\u244A\u249C-\u24E9\u2500-\u2767\u2794-\u27C4\u27C7-\u27E5\u27F0-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2B73\u2B76-\u2B95\u2B97-\u2BFF\u2CE5-\u2CEA\u2E50\u2E51\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFB\u3004\u3012\u3013\u3020\u3036\u3037\u303E\u303F\u309B\u309C\u3190\u3191\u3196-\u319F\u31C0-\u31E3\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uAA77-\uAA79\uAB5B\uAB6A\uAB6B\uFB29\uFBB2-\uFBC1\uFDFC\uFDFD\uFE62\uFE64-\uFE66\uFE69\uFF04\uFF0B\uFF1C-\uFF1E\uFF3E\uFF40\uFF5C\uFF5E\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|\uD805\uDF3F|\uD807[\uDFD5-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|\uD82F\uDC9C|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDE8\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\uD838[\uDD4F\uDEFF]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEE0-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF73\uDF80-\uDFD8\uDFE0-\uDFEB]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDD78\uDD7A-\uDDCB\uDDCD-\uDE53\uDE60-\uDE6D\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6\uDF00-\uDF92\uDF94-\uDFCA]/;

  // bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/lib/NumberFormat/format_to_parts.js
  var CARET_S_UNICODE_REGEX = new RegExp("^" + S_UNICODE_REGEX.source);
  var S_DOLLAR_UNICODE_REGEX = new RegExp(S_UNICODE_REGEX.source + "$");
  var CLDR_NUMBER_PATTERN = /[#0](?:[\.,][#0]+)*/g;
  function formatToParts(numberResult, data, pl, options) {
    var sign = numberResult.sign, exponent = numberResult.exponent, magnitude = numberResult.magnitude;
    var notation = options.notation, style = options.style, numberingSystem = options.numberingSystem;
    var defaultNumberingSystem = data.numbers.nu[0];
    var compactNumberPattern = null;
    if (notation === "compact" && magnitude) {
      compactNumberPattern = getCompactDisplayPattern(numberResult, pl, data, style, options.compactDisplay, options.currencyDisplay, numberingSystem);
    }
    var nonNameCurrencyPart;
    if (style === "currency" && options.currencyDisplay !== "name") {
      var byCurrencyDisplay = data.currencies[options.currency];
      if (byCurrencyDisplay) {
        switch (options.currencyDisplay) {
          case "code":
            nonNameCurrencyPart = options.currency;
            break;
          case "symbol":
            nonNameCurrencyPart = byCurrencyDisplay.symbol;
            break;
          default:
            nonNameCurrencyPart = byCurrencyDisplay.narrow;
            break;
        }
      } else {
        nonNameCurrencyPart = options.currency;
      }
    }
    var numberPattern;
    if (!compactNumberPattern) {
      if (style === "decimal" || style === "unit" || style === "currency" && options.currencyDisplay === "name") {
        var decimalData = data.numbers.decimal[numberingSystem] || data.numbers.decimal[defaultNumberingSystem];
        numberPattern = getPatternForSign(decimalData.standard, sign);
      } else if (style === "currency") {
        var currencyData = data.numbers.currency[numberingSystem] || data.numbers.currency[defaultNumberingSystem];
        numberPattern = getPatternForSign(currencyData[options.currencySign], sign);
      } else {
        var percentPattern = data.numbers.percent[numberingSystem] || data.numbers.percent[defaultNumberingSystem];
        numberPattern = getPatternForSign(percentPattern, sign);
      }
    } else {
      numberPattern = compactNumberPattern;
    }
    var decimalNumberPattern = CLDR_NUMBER_PATTERN.exec(numberPattern)[0];
    numberPattern = numberPattern.replace(CLDR_NUMBER_PATTERN, "{0}").replace(/'(.)'/g, "$1");
    if (style === "currency" && options.currencyDisplay !== "name") {
      var currencyData = data.numbers.currency[numberingSystem] || data.numbers.currency[defaultNumberingSystem];
      var afterCurrency = currencyData.currencySpacing.afterInsertBetween;
      if (afterCurrency && !S_DOLLAR_UNICODE_REGEX.test(nonNameCurrencyPart)) {
        numberPattern = numberPattern.replace("\xA4{0}", "\xA4" + afterCurrency + "{0}");
      }
      var beforeCurrency = currencyData.currencySpacing.beforeInsertBetween;
      if (beforeCurrency && !CARET_S_UNICODE_REGEX.test(nonNameCurrencyPart)) {
        numberPattern = numberPattern.replace("{0}\xA4", "{0}" + beforeCurrency + "\xA4");
      }
    }
    var numberPatternParts = numberPattern.split(/({c:[^}]+}|\{0\}|[¤%\-\+])/g);
    var numberParts = [];
    var symbols = data.numbers.symbols[numberingSystem] || data.numbers.symbols[defaultNumberingSystem];
    for (var _i = 0, numberPatternParts_1 = numberPatternParts; _i < numberPatternParts_1.length; _i++) {
      var part = numberPatternParts_1[_i];
      if (!part) {
        continue;
      }
      switch (part) {
        case "{0}": {
          numberParts.push.apply(numberParts, paritionNumberIntoParts(symbols, numberResult, notation, exponent, numberingSystem, !compactNumberPattern && options.useGrouping, decimalNumberPattern));
          break;
        }
        case "-":
          numberParts.push({type: "minusSign", value: symbols.minusSign});
          break;
        case "+":
          numberParts.push({type: "plusSign", value: symbols.plusSign});
          break;
        case "%":
          numberParts.push({type: "percentSign", value: symbols.percentSign});
          break;
        case "\xA4":
          numberParts.push({type: "currency", value: nonNameCurrencyPart});
          break;
        default:
          if (/^\{c:/.test(part)) {
            numberParts.push({
              type: "compact",
              value: part.substring(3, part.length - 1)
            });
          } else {
            numberParts.push({type: "literal", value: part});
          }
          break;
      }
    }
    switch (style) {
      case "currency": {
        if (options.currencyDisplay === "name") {
          var unitPattern = (data.numbers.currency[numberingSystem] || data.numbers.currency[defaultNumberingSystem]).unitPattern;
          var unitName = void 0;
          var currencyNameData = data.currencies[options.currency];
          if (currencyNameData) {
            unitName = selectPlural(pl, numberResult.roundedNumber * Math.pow(10, exponent), currencyNameData.displayName);
          } else {
            unitName = options.currency;
          }
          var unitPatternParts = unitPattern.split(/(\{[01]\})/g);
          var result = [];
          for (var _a = 0, unitPatternParts_1 = unitPatternParts; _a < unitPatternParts_1.length; _a++) {
            var part = unitPatternParts_1[_a];
            switch (part) {
              case "{0}":
                result.push.apply(result, numberParts);
                break;
              case "{1}":
                result.push({type: "currency", value: unitName});
                break;
              default:
                if (part) {
                  result.push({type: "literal", value: part});
                }
                break;
            }
          }
          return result;
        } else {
          return numberParts;
        }
      }
      case "unit": {
        var unit = options.unit, unitDisplay = options.unitDisplay;
        var unitData = data.units.simple[unit];
        var unitPattern = void 0;
        if (unitData) {
          unitPattern = selectPlural(pl, numberResult.roundedNumber * Math.pow(10, exponent), data.units.simple[unit][unitDisplay]);
        } else {
          var _b = unit.split("-per-"), numeratorUnit = _b[0], denominatorUnit = _b[1];
          unitData = data.units.simple[numeratorUnit];
          var numeratorUnitPattern = selectPlural(pl, numberResult.roundedNumber * Math.pow(10, exponent), data.units.simple[numeratorUnit][unitDisplay]);
          var perUnitPattern = data.units.simple[denominatorUnit].perUnit[unitDisplay];
          if (perUnitPattern) {
            unitPattern = perUnitPattern.replace("{0}", numeratorUnitPattern);
          } else {
            var perPattern = data.units.compound.per[unitDisplay];
            var denominatorPattern = selectPlural(pl, 1, data.units.simple[denominatorUnit][unitDisplay]);
            unitPattern = unitPattern = perPattern.replace("{0}", numeratorUnitPattern).replace("{1}", denominatorPattern.replace("{0}", ""));
          }
        }
        var result = [];
        for (var _c = 0, _d = unitPattern.split(/(\s*\{0\}\s*)/); _c < _d.length; _c++) {
          var part = _d[_c];
          var interpolateMatch = /^(\s*)\{0\}(\s*)$/.exec(part);
          if (interpolateMatch) {
            if (interpolateMatch[1]) {
              result.push({type: "literal", value: interpolateMatch[1]});
            }
            result.push.apply(result, numberParts);
            if (interpolateMatch[2]) {
              result.push({type: "literal", value: interpolateMatch[2]});
            }
          } else if (part) {
            result.push({type: "unit", value: part});
          }
        }
        return result;
      }
      default:
        return numberParts;
    }
  }
  function paritionNumberIntoParts(symbols, numberResult, notation, exponent, numberingSystem, useGrouping, decimalNumberPattern) {
    var result = [];
    var n = numberResult.formattedString, x = numberResult.roundedNumber;
    if (isNaN(x)) {
      return [{type: "nan", value: n}];
    } else if (!isFinite(x)) {
      return [{type: "infinity", value: n}];
    }
    var digitReplacementTable = digit_mapping_exports[numberingSystem];
    if (digitReplacementTable) {
      n = n.replace(/\d/g, function(digit) {
        return digitReplacementTable[+digit] || digit;
      });
    }
    var decimalSepIndex = n.indexOf(".");
    var integer;
    var fraction;
    if (decimalSepIndex > 0) {
      integer = n.slice(0, decimalSepIndex);
      fraction = n.slice(decimalSepIndex + 1);
    } else {
      integer = n;
    }
    if (useGrouping && (notation !== "compact" || x >= 1e4)) {
      var groupSepSymbol = symbols.group;
      var groups = [];
      var integerNumberPattern = decimalNumberPattern.split(".")[0];
      var patternGroups = integerNumberPattern.split(",");
      var primaryGroupingSize = 3;
      var secondaryGroupingSize = 3;
      if (patternGroups.length > 1) {
        primaryGroupingSize = patternGroups[patternGroups.length - 1].length;
      }
      if (patternGroups.length > 2) {
        secondaryGroupingSize = patternGroups[patternGroups.length - 2].length;
      }
      var i = integer.length - primaryGroupingSize;
      if (i > 0) {
        groups.push(integer.slice(i, i + primaryGroupingSize));
        for (i -= secondaryGroupingSize; i > 0; i -= secondaryGroupingSize) {
          groups.push(integer.slice(i, i + secondaryGroupingSize));
        }
        groups.push(integer.slice(0, i + secondaryGroupingSize));
      } else {
        groups.push(integer);
      }
      while (groups.length > 0) {
        var integerGroup = groups.pop();
        result.push({type: "integer", value: integerGroup});
        if (groups.length > 0) {
          result.push({type: "group", value: groupSepSymbol});
        }
      }
    } else {
      result.push({type: "integer", value: integer});
    }
    if (fraction !== void 0) {
      result.push({type: "decimal", value: symbols.decimal}, {type: "fraction", value: fraction});
    }
    if ((notation === "scientific" || notation === "engineering") && isFinite(x)) {
      result.push({type: "exponentSeparator", value: symbols.exponential});
      if (exponent < 0) {
        result.push({type: "exponentMinusSign", value: symbols.minusSign});
        exponent = -exponent;
      }
      var exponentResult = ToRawFixed(exponent, 0, 0);
      result.push({
        type: "exponentInteger",
        value: exponentResult.formattedString
      });
    }
    return result;
  }
  function getPatternForSign(pattern, sign) {
    if (pattern.indexOf(";") < 0) {
      pattern = pattern + ";-" + pattern;
    }
    var _a = pattern.split(";"), zeroPattern = _a[0], negativePattern = _a[1];
    switch (sign) {
      case 0:
        return zeroPattern;
      case -1:
        return negativePattern;
      default:
        return negativePattern.indexOf("-") >= 0 ? negativePattern.replace(/-/g, "+") : "+" + zeroPattern;
    }
  }
  function getCompactDisplayPattern(numberResult, pl, data, style, compactDisplay, currencyDisplay, numberingSystem) {
    var _a;
    var roundedNumber = numberResult.roundedNumber, sign = numberResult.sign, magnitude = numberResult.magnitude;
    var magnitudeKey = String(Math.pow(10, magnitude));
    var defaultNumberingSystem = data.numbers.nu[0];
    var pattern;
    if (style === "currency" && currencyDisplay !== "name") {
      var byNumberingSystem = data.numbers.currency;
      var currencyData = byNumberingSystem[numberingSystem] || byNumberingSystem[defaultNumberingSystem];
      var compactPluralRules = (_a = currencyData.short) === null || _a === void 0 ? void 0 : _a[magnitudeKey];
      if (!compactPluralRules) {
        return null;
      }
      pattern = selectPlural(pl, roundedNumber, compactPluralRules);
    } else {
      var byNumberingSystem = data.numbers.decimal;
      var byCompactDisplay = byNumberingSystem[numberingSystem] || byNumberingSystem[defaultNumberingSystem];
      var compactPlaralRule = byCompactDisplay[compactDisplay][magnitudeKey];
      if (!compactPlaralRule) {
        return null;
      }
      pattern = selectPlural(pl, roundedNumber, compactPlaralRule);
    }
    if (pattern === "0") {
      return null;
    }
    pattern = getPatternForSign(pattern, sign).replace(/([^\s;\-\+\d¤]+)/g, "{c:$1}").replace(/0+/, "0");
    return pattern;
  }
  function selectPlural(pl, x, rules) {
    return rules[pl.select(x)] || rules.other;
  }

  // bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/lib/NumberFormat/PartitionNumberPattern.js
  function PartitionNumberPattern(numberFormat, x, _a) {
    var _b;
    var getInternalSlots2 = _a.getInternalSlots;
    var internalSlots = getInternalSlots2(numberFormat);
    var pl = internalSlots.pl, dataLocaleData = internalSlots.dataLocaleData, numberingSystem = internalSlots.numberingSystem;
    var symbols = dataLocaleData.numbers.symbols[numberingSystem] || dataLocaleData.numbers.symbols[dataLocaleData.numbers.nu[0]];
    var magnitude = 0;
    var exponent = 0;
    var n;
    if (isNaN(x)) {
      n = symbols.nan;
    } else if (!isFinite(x)) {
      n = symbols.infinity;
    } else {
      if (internalSlots.style === "percent") {
        x *= 100;
      }
      ;
      _b = ComputeExponent(numberFormat, x, {
        getInternalSlots: getInternalSlots2
      }), exponent = _b[0], magnitude = _b[1];
      x = exponent < 0 ? x * Math.pow(10, -exponent) : x / Math.pow(10, exponent);
      var formatNumberResult = FormatNumericToString(internalSlots, x);
      n = formatNumberResult.formattedString;
      x = formatNumberResult.roundedNumber;
    }
    var sign;
    var signDisplay = internalSlots.signDisplay;
    switch (signDisplay) {
      case "never":
        sign = 0;
        break;
      case "auto":
        if (SameValue(x, 0) || x > 0 || isNaN(x)) {
          sign = 0;
        } else {
          sign = -1;
        }
        break;
      case "always":
        if (SameValue(x, 0) || x > 0 || isNaN(x)) {
          sign = 1;
        } else {
          sign = -1;
        }
        break;
      default:
        if (x === 0 || isNaN(x)) {
          sign = 0;
        } else if (x > 0) {
          sign = 1;
        } else {
          sign = -1;
        }
    }
    return formatToParts({roundedNumber: x, formattedString: n, exponent: exponent, magnitude: magnitude, sign: sign}, internalSlots.dataLocaleData, pl, internalSlots);
  }

  // bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/lib/NumberFormat/FormatNumericToParts.js
  function FormatNumericToParts(nf, x, implDetails) {
    var parts = PartitionNumberPattern(nf, x, implDetails);
    var result = ArrayCreate(0);
    for (var _i = 0, parts_1 = parts; _i < parts_1.length; _i++) {
      var part = parts_1[_i];
      result.push({
        type: part.type,
        value: part.value
      });
    }
    return result;
  }

  // bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/lib/NumberFormat/SetNumberFormatUnitOptions.js
  function SetNumberFormatUnitOptions(nf, options, _a) {
    if (options === void 0) {
      options = Object.create(null);
    }
    var getInternalSlots2 = _a.getInternalSlots;
    var internalSlots = getInternalSlots2(nf);
    var style = GetOption(options, "style", "string", ["decimal", "percent", "currency", "unit"], "decimal");
    internalSlots.style = style;
    var currency = GetOption(options, "currency", "string", void 0, void 0);
    if (currency !== void 0 && !IsWellFormedCurrencyCode(currency)) {
      throw RangeError("Malformed currency code");
    }
    if (style === "currency" && currency === void 0) {
      throw TypeError("currency cannot be undefined");
    }
    var currencyDisplay = GetOption(options, "currencyDisplay", "string", ["code", "symbol", "narrowSymbol", "name"], "symbol");
    var currencySign = GetOption(options, "currencySign", "string", ["standard", "accounting"], "standard");
    var unit = GetOption(options, "unit", "string", void 0, void 0);
    if (unit !== void 0 && !IsWellFormedUnitIdentifier(unit)) {
      throw RangeError("Invalid unit argument for Intl.NumberFormat()");
    }
    if (style === "unit" && unit === void 0) {
      throw TypeError("unit cannot be undefined");
    }
    var unitDisplay = GetOption(options, "unitDisplay", "string", ["short", "narrow", "long"], "short");
    if (style === "currency") {
      internalSlots.currency = currency.toUpperCase();
      internalSlots.currencyDisplay = currencyDisplay;
      internalSlots.currencySign = currencySign;
    }
    if (style === "unit") {
      internalSlots.unit = unit;
      internalSlots.unitDisplay = unitDisplay;
    }
  }

  // bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/lib/NumberFormat/SetNumberFormatDigitOptions.js
  function SetNumberFormatDigitOptions(internalSlots, opts, mnfdDefault, mxfdDefault, notation) {
    var mnid = GetNumberOption(opts, "minimumIntegerDigits", 1, 21, 1);
    var mnfd = opts.minimumFractionDigits;
    var mxfd = opts.maximumFractionDigits;
    var mnsd = opts.minimumSignificantDigits;
    var mxsd = opts.maximumSignificantDigits;
    internalSlots.minimumIntegerDigits = mnid;
    if (mnsd !== void 0 || mxsd !== void 0) {
      internalSlots.roundingType = "significantDigits";
      mnsd = DefaultNumberOption(mnsd, 1, 21, 1);
      mxsd = DefaultNumberOption(mxsd, mnsd, 21, 21);
      internalSlots.minimumSignificantDigits = mnsd;
      internalSlots.maximumSignificantDigits = mxsd;
    } else if (mnfd !== void 0 || mxfd !== void 0) {
      internalSlots.roundingType = "fractionDigits";
      mnfd = DefaultNumberOption(mnfd, 0, 20, mnfdDefault);
      var mxfdActualDefault = Math.max(mnfd, mxfdDefault);
      mxfd = DefaultNumberOption(mxfd, mnfd, 20, mxfdActualDefault);
      internalSlots.minimumFractionDigits = mnfd;
      internalSlots.maximumFractionDigits = mxfd;
    } else if (notation === "compact") {
      internalSlots.roundingType = "compactRounding";
    } else {
      internalSlots.roundingType = "fractionDigits";
      internalSlots.minimumFractionDigits = mnfdDefault;
      internalSlots.maximumFractionDigits = mxfdDefault;
    }
  }

  // bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/lib/NumberFormat/InitializeNumberFormat.js
  function InitializeNumberFormat(nf, locales, opts, _a) {
    var getInternalSlots2 = _a.getInternalSlots, localeData = _a.localeData, availableLocales = _a.availableLocales, numberingSystemNames2 = _a.numberingSystemNames, getDefaultLocale = _a.getDefaultLocale, currencyDigitsData = _a.currencyDigitsData;
    var requestedLocales = CanonicalizeLocaleList(locales);
    var options = CoerceOptionsToObject(opts);
    var opt = Object.create(null);
    var matcher = GetOption(options, "localeMatcher", "string", ["lookup", "best fit"], "best fit");
    opt.localeMatcher = matcher;
    var numberingSystem = GetOption(options, "numberingSystem", "string", void 0, void 0);
    if (numberingSystem !== void 0 && numberingSystemNames2.indexOf(numberingSystem) < 0) {
      throw RangeError("Invalid numberingSystems: " + numberingSystem);
    }
    opt.nu = numberingSystem;
    var r = ResolveLocale(availableLocales, requestedLocales, opt, ["nu"], localeData, getDefaultLocale);
    var dataLocaleData = localeData[r.dataLocale];
    invariant(!!dataLocaleData, "Missing locale data for " + r.dataLocale);
    var internalSlots = getInternalSlots2(nf);
    internalSlots.locale = r.locale;
    internalSlots.dataLocale = r.dataLocale;
    internalSlots.numberingSystem = r.nu;
    internalSlots.dataLocaleData = dataLocaleData;
    SetNumberFormatUnitOptions(nf, options, {getInternalSlots: getInternalSlots2});
    var style = internalSlots.style;
    var mnfdDefault;
    var mxfdDefault;
    if (style === "currency") {
      var currency = internalSlots.currency;
      var cDigits = CurrencyDigits(currency, {currencyDigitsData: currencyDigitsData});
      mnfdDefault = cDigits;
      mxfdDefault = cDigits;
    } else {
      mnfdDefault = 0;
      mxfdDefault = style === "percent" ? 0 : 3;
    }
    var notation = GetOption(options, "notation", "string", ["standard", "scientific", "engineering", "compact"], "standard");
    internalSlots.notation = notation;
    SetNumberFormatDigitOptions(internalSlots, options, mnfdDefault, mxfdDefault, notation);
    var compactDisplay = GetOption(options, "compactDisplay", "string", ["short", "long"], "short");
    if (notation === "compact") {
      internalSlots.compactDisplay = compactDisplay;
    }
    var useGrouping = GetOption(options, "useGrouping", "boolean", void 0, true);
    internalSlots.useGrouping = useGrouping;
    var signDisplay = GetOption(options, "signDisplay", "string", ["auto", "never", "always", "exceptZero"], "auto");
    internalSlots.signDisplay = signDisplay;
    return nf;
  }

  // bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/lib/LookupSupportedLocales.js
  function LookupSupportedLocales(availableLocales, requestedLocales) {
    var subset = [];
    for (var _i = 0, requestedLocales_1 = requestedLocales; _i < requestedLocales_1.length; _i++) {
      var locale = requestedLocales_1[_i];
      var noExtensionLocale = locale.replace(UNICODE_EXTENSION_SEQUENCE_REGEX, "");
      var availableLocale = BestAvailableLocale(availableLocales, noExtensionLocale);
      if (availableLocale) {
        subset.push(availableLocale);
      }
    }
    return subset;
  }

  // bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/lib/SupportedLocales.js
  function SupportedLocales(availableLocales, requestedLocales, options) {
    var matcher = "best fit";
    if (options !== void 0) {
      options = ToObject(options);
      matcher = GetOption(options, "localeMatcher", "string", ["lookup", "best fit"], "best fit");
    }
    if (matcher === "best fit") {
      return LookupSupportedLocales(availableLocales, requestedLocales);
    }
    return LookupSupportedLocales(availableLocales, requestedLocales);
  }

  // bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/lib/data.js
  var MissingLocaleDataError = function(_super) {
    __extends(MissingLocaleDataError2, _super);
    function MissingLocaleDataError2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.type = "MISSING_LOCALE_DATA";
      return _this;
    }
    return MissingLocaleDataError2;
  }(Error);

  // bazel-out/darwin-fastbuild/bin/packages/intl-numberformat/lib/src/data/currency-digits.json
  var currency_digits_exports = {};
  __export(currency_digits_exports, {
    ADP: function() {
      return ADP;
    },
    AFN: function() {
      return AFN;
    },
    ALL: function() {
      return ALL;
    },
    AMD: function() {
      return AMD;
    },
    BHD: function() {
      return BHD;
    },
    BIF: function() {
      return BIF;
    },
    BYN: function() {
      return BYN;
    },
    BYR: function() {
      return BYR;
    },
    CAD: function() {
      return CAD;
    },
    CHF: function() {
      return CHF;
    },
    CLF: function() {
      return CLF;
    },
    CLP: function() {
      return CLP;
    },
    COP: function() {
      return COP;
    },
    CRC: function() {
      return CRC;
    },
    CZK: function() {
      return CZK;
    },
    DEFAULT: function() {
      return DEFAULT;
    },
    DJF: function() {
      return DJF;
    },
    DKK: function() {
      return DKK;
    },
    ESP: function() {
      return ESP;
    },
    GNF: function() {
      return GNF;
    },
    GYD: function() {
      return GYD;
    },
    HUF: function() {
      return HUF;
    },
    IDR: function() {
      return IDR;
    },
    IQD: function() {
      return IQD;
    },
    IRR: function() {
      return IRR;
    },
    ISK: function() {
      return ISK;
    },
    ITL: function() {
      return ITL;
    },
    JOD: function() {
      return JOD;
    },
    JPY: function() {
      return JPY;
    },
    KMF: function() {
      return KMF;
    },
    KPW: function() {
      return KPW;
    },
    KRW: function() {
      return KRW;
    },
    KWD: function() {
      return KWD;
    },
    LAK: function() {
      return LAK;
    },
    LBP: function() {
      return LBP;
    },
    LUF: function() {
      return LUF;
    },
    LYD: function() {
      return LYD;
    },
    MGA: function() {
      return MGA;
    },
    MGF: function() {
      return MGF;
    },
    MMK: function() {
      return MMK;
    },
    MNT: function() {
      return MNT;
    },
    MRO: function() {
      return MRO;
    },
    MUR: function() {
      return MUR;
    },
    NOK: function() {
      return NOK;
    },
    OMR: function() {
      return OMR;
    },
    PKR: function() {
      return PKR;
    },
    PYG: function() {
      return PYG;
    },
    RSD: function() {
      return RSD;
    },
    RWF: function() {
      return RWF;
    },
    SEK: function() {
      return SEK;
    },
    SLL: function() {
      return SLL;
    },
    SOS: function() {
      return SOS;
    },
    STD: function() {
      return STD;
    },
    SYP: function() {
      return SYP;
    },
    TMM: function() {
      return TMM;
    },
    TND: function() {
      return TND;
    },
    TRL: function() {
      return TRL;
    },
    TWD: function() {
      return TWD;
    },
    TZS: function() {
      return TZS;
    },
    UGX: function() {
      return UGX;
    },
    UYI: function() {
      return UYI;
    },
    UYW: function() {
      return UYW;
    },
    UZS: function() {
      return UZS;
    },
    VEF: function() {
      return VEF;
    },
    VND: function() {
      return VND;
    },
    VUV: function() {
      return VUV;
    },
    XAF: function() {
      return XAF;
    },
    XOF: function() {
      return XOF;
    },
    XPF: function() {
      return XPF;
    },
    YER: function() {
      return YER;
    },
    ZMK: function() {
      return ZMK;
    },
    ZWD: function() {
      return ZWD;
    },
    default: function() {
      return currency_digits_default;
    }
  });
  var ADP = 0;
  var AFN = 0;
  var ALL = 0;
  var AMD = 2;
  var BHD = 3;
  var BIF = 0;
  var BYN = 2;
  var BYR = 0;
  var CAD = 2;
  var CHF = 2;
  var CLF = 4;
  var CLP = 0;
  var COP = 2;
  var CRC = 2;
  var CZK = 2;
  var DEFAULT = 2;
  var DJF = 0;
  var DKK = 2;
  var ESP = 0;
  var GNF = 0;
  var GYD = 2;
  var HUF = 2;
  var IDR = 2;
  var IQD = 0;
  var IRR = 0;
  var ISK = 0;
  var ITL = 0;
  var JOD = 3;
  var JPY = 0;
  var KMF = 0;
  var KPW = 0;
  var KRW = 0;
  var KWD = 3;
  var LAK = 0;
  var LBP = 0;
  var LUF = 0;
  var LYD = 3;
  var MGA = 0;
  var MGF = 0;
  var MMK = 0;
  var MNT = 2;
  var MRO = 0;
  var MUR = 2;
  var NOK = 2;
  var OMR = 3;
  var PKR = 2;
  var PYG = 0;
  var RSD = 0;
  var RWF = 0;
  var SEK = 2;
  var SLL = 0;
  var SOS = 0;
  var STD = 0;
  var SYP = 0;
  var TMM = 0;
  var TND = 3;
  var TRL = 0;
  var TWD = 2;
  var TZS = 2;
  var UGX = 0;
  var UYI = 0;
  var UYW = 4;
  var UZS = 2;
  var VEF = 2;
  var VND = 0;
  var VUV = 0;
  var XAF = 0;
  var XOF = 0;
  var XPF = 0;
  var YER = 0;
  var ZMK = 0;
  var ZWD = 0;
  var currency_digits_default = {ADP: ADP, AFN: AFN, ALL: ALL, AMD: AMD, BHD: BHD, BIF: BIF, BYN: BYN, BYR: BYR, CAD: CAD, CHF: CHF, CLF: CLF, CLP: CLP, COP: COP, CRC: CRC, CZK: CZK, DEFAULT: DEFAULT, DJF: DJF, DKK: DKK, ESP: ESP, GNF: GNF, GYD: GYD, HUF: HUF, IDR: IDR, IQD: IQD, IRR: IRR, ISK: ISK, ITL: ITL, JOD: JOD, JPY: JPY, KMF: KMF, KPW: KPW, KRW: KRW, KWD: KWD, LAK: LAK, LBP: LBP, LUF: LUF, LYD: LYD, MGA: MGA, MGF: MGF, MMK: MMK, MNT: MNT, MRO: MRO, MUR: MUR, NOK: NOK, OMR: OMR, PKR: PKR, PYG: PYG, RSD: RSD, RWF: RWF, SEK: SEK, SLL: SLL, SOS: SOS, STD: STD, SYP: SYP, TMM: TMM, TND: TND, TRL: TRL, TWD: TWD, TZS: TZS, UGX: UGX, UYI: UYI, UYW: UYW, UZS: UZS, VEF: VEF, VND: VND, VUV: VUV, XAF: XAF, XOF: XOF, XPF: XPF, YER: YER, ZMK: ZMK, ZWD: ZWD};

  // bazel-out/darwin-fastbuild/bin/packages/intl-numberformat/lib/src/data/numbering-systems.json
  var names = ["adlm", "ahom", "arab", "arabext", "armn", "armnlow", "bali", "beng", "bhks", "brah", "cakm", "cham", "cyrl", "deva", "diak", "ethi", "fullwide", "geor", "gong", "gonm", "grek", "greklow", "gujr", "guru", "hanidays", "hanidec", "hans", "hansfin", "hant", "hantfin", "hebr", "hmng", "hmnp", "java", "jpan", "jpanfin", "jpanyear", "kali", "khmr", "knda", "lana", "lanatham", "laoo", "latn", "lepc", "limb", "mathbold", "mathdbl", "mathmono", "mathsanb", "mathsans", "mlym", "modi", "mong", "mroo", "mtei", "mymr", "mymrshan", "mymrtlng", "newa", "nkoo", "olck", "orya", "osma", "rohg", "roman", "romanlow", "saur", "segment", "shrd", "sind", "sinh", "sora", "sund", "takr", "talu", "taml", "tamldec", "telu", "thai", "tibt", "tirh", "vaii", "wara", "wcho"];

  // bazel-out/darwin-fastbuild/bin/packages/intl-numberformat/lib/src/get_internal_slots.js
  var internalSlotMap = new WeakMap();
  function getInternalSlots(x) {
    var internalSlots = internalSlotMap.get(x);
    if (!internalSlots) {
      internalSlots = Object.create(null);
      internalSlotMap.set(x, internalSlots);
    }
    return internalSlots;
  }

  // bazel-out/darwin-fastbuild/bin/packages/intl-numberformat/lib/src/core.js
  var numberingSystemNames = names;
  var RESOLVED_OPTIONS_KEYS = [
    "locale",
    "numberingSystem",
    "style",
    "currency",
    "currencyDisplay",
    "currencySign",
    "unit",
    "unitDisplay",
    "minimumIntegerDigits",
    "minimumFractionDigits",
    "maximumFractionDigits",
    "minimumSignificantDigits",
    "maximumSignificantDigits",
    "useGrouping",
    "notation",
    "compactDisplay",
    "signDisplay"
  ];
  var NumberFormat = function(locales, options) {
    if (!this || !OrdinaryHasInstance(NumberFormat, this)) {
      return new NumberFormat(locales, options);
    }
    InitializeNumberFormat(this, locales, options, {
      getInternalSlots: getInternalSlots,
      localeData: NumberFormat.localeData,
      availableLocales: NumberFormat.availableLocales,
      getDefaultLocale: NumberFormat.getDefaultLocale,
      currencyDigitsData: currency_digits_exports,
      numberingSystemNames: numberingSystemNames
    });
    var internalSlots = getInternalSlots(this);
    var dataLocale = internalSlots.dataLocale;
    var dataLocaleData = NumberFormat.localeData[dataLocale];
    invariant(dataLocaleData !== void 0, "Cannot load locale-dependent data for " + dataLocale + ".");
    internalSlots.pl = new Intl.PluralRules(dataLocale, {
      minimumFractionDigits: internalSlots.minimumFractionDigits,
      maximumFractionDigits: internalSlots.maximumFractionDigits,
      minimumIntegerDigits: internalSlots.minimumIntegerDigits,
      minimumSignificantDigits: internalSlots.minimumSignificantDigits,
      maximumSignificantDigits: internalSlots.maximumSignificantDigits
    });
    return this;
  };
  function formatToParts2(x) {
    return FormatNumericToParts(this, toNumeric(x), {
      getInternalSlots: getInternalSlots
    });
  }
  try {
    Object.defineProperty(formatToParts2, "name", {
      value: "formatToParts",
      enumerable: false,
      writable: false,
      configurable: true
    });
  } catch (e) {
  }
  defineProperty(NumberFormat.prototype, "formatToParts", {
    value: formatToParts2
  });
  defineProperty(NumberFormat.prototype, "resolvedOptions", {
    value: function resolvedOptions() {
      if (typeof this !== "object" || !OrdinaryHasInstance(NumberFormat, this)) {
        throw TypeError("Method Intl.NumberFormat.prototype.resolvedOptions called on incompatible receiver");
      }
      var internalSlots = getInternalSlots(this);
      var ro = {};
      for (var _i = 0, RESOLVED_OPTIONS_KEYS_1 = RESOLVED_OPTIONS_KEYS; _i < RESOLVED_OPTIONS_KEYS_1.length; _i++) {
        var key = RESOLVED_OPTIONS_KEYS_1[_i];
        var value = internalSlots[key];
        if (value !== void 0) {
          ro[key] = value;
        }
      }
      return ro;
    }
  });
  var formatDescriptor = {
    enumerable: false,
    configurable: true,
    get: function() {
      if (typeof this !== "object" || !OrdinaryHasInstance(NumberFormat, this)) {
        throw TypeError("Intl.NumberFormat format property accessor called on incompatible receiver");
      }
      var internalSlots = getInternalSlots(this);
      var numberFormat = this;
      var boundFormat = internalSlots.boundFormat;
      if (boundFormat === void 0) {
        boundFormat = function(value) {
          var x = toNumeric(value);
          return numberFormat.formatToParts(x).map(function(x2) {
            return x2.value;
          }).join("");
        };
        try {
          Object.defineProperty(boundFormat, "name", {
            configurable: true,
            enumerable: false,
            writable: false,
            value: ""
          });
        } catch (e) {
        }
        internalSlots.boundFormat = boundFormat;
      }
      return boundFormat;
    }
  };
  try {
    Object.defineProperty(formatDescriptor.get, "name", {
      configurable: true,
      enumerable: false,
      writable: false,
      value: "get format"
    });
  } catch (e) {
  }
  Object.defineProperty(NumberFormat.prototype, "format", formatDescriptor);
  defineProperty(NumberFormat, "supportedLocalesOf", {
    value: function supportedLocalesOf(locales, options) {
      return SupportedLocales(NumberFormat.availableLocales, CanonicalizeLocaleList(locales), options);
    }
  });
  NumberFormat.__addLocaleData = function __addLocaleData() {
    var data = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      data[_i] = arguments[_i];
    }
    for (var _a = 0, data_1 = data; _a < data_1.length; _a++) {
      var _b = data_1[_a], d = _b.data, locale = _b.locale;
      var minimizedLocale = new Intl.Locale(locale).minimize().toString();
      NumberFormat.localeData[locale] = NumberFormat.localeData[minimizedLocale] = d;
      NumberFormat.availableLocales.add(minimizedLocale);
      NumberFormat.availableLocales.add(locale);
      if (!NumberFormat.__defaultLocale) {
        NumberFormat.__defaultLocale = minimizedLocale;
      }
    }
  };
  NumberFormat.__addUnitData = function __addUnitData(locale, unitsData) {
    var _a = NumberFormat.localeData, _b = locale, existingData = _a[_b];
    if (!existingData) {
      throw new Error('Locale data for "' + locale + '" has not been loaded in NumberFormat. \nPlease __addLocaleData before adding additional unit data');
    }
    for (var unit in unitsData.simple) {
      existingData.units.simple[unit] = unitsData.simple[unit];
    }
    for (var unit in unitsData.compound) {
      existingData.units.compound[unit] = unitsData.compound[unit];
    }
  };
  NumberFormat.__defaultLocale = "";
  NumberFormat.localeData = {};
  NumberFormat.availableLocales = new Set();
  NumberFormat.getDefaultLocale = function() {
    return NumberFormat.__defaultLocale;
  };
  NumberFormat.polyfilled = true;
  function toNumeric(val) {
    if (typeof val === "bigint") {
      return val;
    }
    return ToNumber(val);
  }
  try {
    if (typeof Symbol !== "undefined") {
      Object.defineProperty(NumberFormat.prototype, Symbol.toStringTag, {
        configurable: true,
        enumerable: false,
        writable: false,
        value: "Intl.NumberFormat"
      });
    }
    Object.defineProperty(NumberFormat.prototype.constructor, "length", {
      configurable: true,
      enumerable: false,
      writable: false,
      value: 0
    });
    Object.defineProperty(NumberFormat.supportedLocalesOf, "length", {
      configurable: true,
      enumerable: false,
      writable: false,
      value: 1
    });
    Object.defineProperty(NumberFormat, "prototype", {
      configurable: false,
      enumerable: false,
      writable: false,
      value: NumberFormat.prototype
    });
  } catch (e) {
  }

  // bazel-out/darwin-fastbuild/bin/packages/intl-numberformat/lib/src/to_locale_string.js
  function toLocaleString(x, locales, options) {
    var numberFormat = new NumberFormat(locales, options);
    return numberFormat.format(x);
  }

  // bazel-out/darwin-fastbuild/bin/packages/intl-numberformat/lib/should-polyfill.js
  function onlySupportsEn() {
    return !Intl.NumberFormat.polyfilled && !Intl.NumberFormat.supportedLocalesOf(["es"]).length;
  }
  function supportsES2020() {
    try {
      var s = new Intl.NumberFormat("en", {
        style: "unit",
        unit: "bit",
        unitDisplay: "long",
        notation: "scientific"
      }).format(1e4);
      if (s !== "1E4 bits") {
        return false;
      }
    } catch (e) {
      return false;
    }
    return true;
  }
  function shouldPolyfill() {
    return typeof Intl === "undefined" || !("NumberFormat" in Intl) || !supportsES2020() || onlySupportsEn();
  }

  // bazel-out/darwin-fastbuild/bin/packages/intl-numberformat/lib/polyfill.js
  if (shouldPolyfill()) {
    defineProperty(Intl, "NumberFormat", {value: NumberFormat});
    defineProperty(Number.prototype, "toLocaleString", {
      value: function toLocaleString2(locales, options) {
        return toLocaleString(this, locales, options);
      }
    });
  }
})();
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */


}

if (!("Intl"in self&&"DateTimeFormat"in self.Intl&&"formatToParts"in self.Intl.DateTimeFormat.prototype&&"dayPeriod"===new self.Intl.DateTimeFormat("en",{hourCycle:"h11",hour:"numeric"}).formatToParts(0)[2].type&&"formatRangeToParts"in self.Intl.DateTimeFormat.prototype&&"dayPeriod"===new self.Intl.DateTimeFormat("en",{hourCycle:"h11",hour:"numeric"}).formatRangeToParts(0,1)[2].type
)) {

// Intl.DateTimeFormat
(function() {
  // node_modules/tslib/tslib.es6.js
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {__proto__: []} instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2)
        if (Object.prototype.hasOwnProperty.call(b2, p))
          d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  }
  var __assign = function() {
    __assign = Object.assign || function __assign2(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s)
          if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
      }
      return t;
    };
    return __assign.apply(this, arguments);
  };
  function __rest(s, e) {
    var t = {};
    for (var p in s)
      if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
          t[p[i]] = s[p[i]];
      }
    return t;
  }

  // bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/lib/utils.js
  function defineProperty(target, name, _a) {
    var value = _a.value;
    Object.defineProperty(target, name, {
      configurable: true,
      enumerable: false,
      writable: true,
      value: value
    });
  }
  var UNICODE_EXTENSION_SEQUENCE_REGEX = /-u(?:-[0-9a-z]{2,8})+/gi;
  function invariant(condition, message, Err) {
    if (Err === void 0) {
      Err = Error;
    }
    if (!condition) {
      throw new Err(message);
    }
  }

  // bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/lib/DateTimeFormat/utils.js
  var DATE_TIME_PROPS = [
    "weekday",
    "era",
    "year",
    "month",
    "day",
    "hour",
    "minute",
    "second",
    "timeZoneName"
  ];
  var removalPenalty = 120;
  var additionPenalty = 20;
  var differentNumericTypePenalty = 15;
  var longLessPenalty = 8;
  var longMorePenalty = 6;
  var shortLessPenalty = 6;
  var shortMorePenalty = 3;

  // bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/lib/types/date-time.js
  var RangePatternType;
  (function(RangePatternType2) {
    RangePatternType2["startRange"] = "startRange";
    RangePatternType2["shared"] = "shared";
    RangePatternType2["endRange"] = "endRange";
  })(RangePatternType || (RangePatternType = {}));

  // bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/lib/DateTimeFormat/skeleton.js
  var DATE_TIME_REGEX = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
  var expPatternTrimmer = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  function matchSkeletonPattern(match, result) {
    var len = match.length;
    switch (match[0]) {
      case "G":
        result.era = len === 4 ? "long" : len === 5 ? "narrow" : "short";
        return "{era}";
      case "y":
      case "Y":
      case "u":
      case "U":
      case "r":
        result.year = len === 2 ? "2-digit" : "numeric";
        return "{year}";
      case "q":
      case "Q":
        throw new RangeError("`w/Q` (quarter) patterns are not supported");
      case "M":
      case "L":
        result.month = ["numeric", "2-digit", "short", "long", "narrow"][len - 1];
        return "{month}";
      case "w":
      case "W":
        throw new RangeError("`w/W` (week of year) patterns are not supported");
      case "d":
        result.day = ["numeric", "2-digit"][len - 1];
        return "{day}";
      case "D":
      case "F":
      case "g":
        result.day = "numeric";
        return "{day}";
      case "E":
        result.weekday = len === 4 ? "long" : len === 5 ? "narrow" : "short";
        return "{weekday}";
      case "e":
        result.weekday = [
          void 0,
          void 0,
          "short",
          "long",
          "narrow",
          "short"
        ][len - 1];
        return "{weekday}";
      case "c":
        result.weekday = [
          void 0,
          void 0,
          "short",
          "long",
          "narrow",
          "short"
        ][len - 1];
        return "{weekday}";
      case "a":
      case "b":
      case "B":
        result.hour12 = true;
        return "{ampm}";
      case "h":
        result.hour = ["numeric", "2-digit"][len - 1];
        result.hour12 = true;
        return "{hour}";
      case "H":
        result.hour = ["numeric", "2-digit"][len - 1];
        return "{hour}";
      case "K":
        result.hour = ["numeric", "2-digit"][len - 1];
        result.hour12 = true;
        return "{hour}";
      case "k":
        result.hour = ["numeric", "2-digit"][len - 1];
        return "{hour}";
      case "j":
      case "J":
      case "C":
        throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");
      case "m":
        result.minute = ["numeric", "2-digit"][len - 1];
        return "{minute}";
      case "s":
        result.second = ["numeric", "2-digit"][len - 1];
        return "{second}";
      case "S":
      case "A":
        result.second = "numeric";
        return "{second}";
      case "z":
      case "Z":
      case "O":
      case "v":
      case "V":
      case "X":
      case "x":
        result.timeZoneName = len < 4 ? "short" : "long";
        return "{timeZoneName}";
    }
    return "";
  }
  function skeletonTokenToTable2(c) {
    switch (c) {
      case "G":
        return "era";
      case "y":
      case "Y":
      case "u":
      case "U":
      case "r":
        return "year";
      case "M":
      case "L":
        return "month";
      case "d":
      case "D":
      case "F":
      case "g":
        return "day";
      case "a":
      case "b":
      case "B":
        return "ampm";
      case "h":
      case "H":
      case "K":
      case "k":
        return "hour";
      case "m":
        return "minute";
      case "s":
      case "S":
      case "A":
        return "second";
      default:
        throw new RangeError("Invalid range pattern token");
    }
  }
  function processDateTimePattern(pattern, result) {
    var literals = [];
    var pattern12 = pattern.replace(/'{2}/g, "{apostrophe}").replace(/'(.*?)'/g, function(_, literal) {
      literals.push(literal);
      return "$$" + (literals.length - 1) + "$$";
    }).replace(DATE_TIME_REGEX, function(m) {
      return matchSkeletonPattern(m, result || {});
    });
    if (literals.length) {
      pattern12 = pattern12.replace(/\$\$(\d+)\$\$/g, function(_, i) {
        return literals[+i];
      }).replace(/\{apostrophe\}/g, "'");
    }
    return [
      pattern12.replace(/([\s\uFEFF\xA0])\{ampm\}([\s\uFEFF\xA0])/, "$1").replace("{ampm}", "").replace(expPatternTrimmer, ""),
      pattern12
    ];
  }
  function parseDateTimeSkeleton(skeleton, rawPattern, rangePatterns, intervalFormatFallback) {
    if (rawPattern === void 0) {
      rawPattern = skeleton;
    }
    var result = {
      pattern: "",
      pattern12: "",
      skeleton: skeleton,
      rawPattern: rawPattern,
      rangePatterns: {},
      rangePatterns12: {}
    };
    if (rangePatterns) {
      for (var k in rangePatterns) {
        var key = skeletonTokenToTable2(k);
        var rawPattern_1 = rangePatterns[k];
        var intervalResult = {
          patternParts: []
        };
        var _a = processDateTimePattern(rawPattern_1, intervalResult), pattern_1 = _a[0], pattern12_1 = _a[1];
        result.rangePatterns[key] = __assign(__assign({}, intervalResult), {patternParts: splitRangePattern(pattern_1)});
        result.rangePatterns12[key] = __assign(__assign({}, intervalResult), {patternParts: splitRangePattern(pattern12_1)});
      }
    } else if (intervalFormatFallback) {
      var patternParts = splitFallbackRangePattern(intervalFormatFallback);
      result.rangePatterns.default = {
        patternParts: patternParts
      };
      result.rangePatterns12.default = {
        patternParts: patternParts
      };
    }
    skeleton.replace(DATE_TIME_REGEX, function(m) {
      return matchSkeletonPattern(m, result);
    });
    var _b = processDateTimePattern(rawPattern), pattern = _b[0], pattern12 = _b[1];
    result.pattern = pattern;
    result.pattern12 = pattern12;
    return result;
  }
  function splitFallbackRangePattern(pattern) {
    var parts = pattern.split(/(\{[0|1]\})/g).filter(Boolean);
    return parts.map(function(pattern2) {
      switch (pattern2) {
        case "{0}":
          return {
            source: RangePatternType.startRange,
            pattern: pattern2
          };
        case "{1}":
          return {
            source: RangePatternType.endRange,
            pattern: pattern2
          };
        default:
          return {
            source: RangePatternType.shared,
            pattern: pattern2
          };
      }
    });
  }
  function splitRangePattern(pattern) {
    var PART_REGEX = /\{(.*?)\}/g;
    var parts = {};
    var match;
    var splitIndex = 0;
    while (match = PART_REGEX.exec(pattern)) {
      if (!(match[0] in parts)) {
        parts[match[0]] = match.index;
      } else {
        splitIndex = match.index;
        break;
      }
    }
    if (!splitIndex) {
      return [
        {
          source: RangePatternType.startRange,
          pattern: pattern
        }
      ];
    }
    return [
      {
        source: RangePatternType.startRange,
        pattern: pattern.slice(0, splitIndex)
      },
      {
        source: RangePatternType.endRange,
        pattern: pattern.slice(splitIndex)
      }
    ];
  }

  // bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/lib/DateTimeFormat/BestFitFormatMatcher.js
  function isNumericType(t) {
    return t === "numeric" || t === "2-digit";
  }
  function bestFitFormatMatcherScore(options, format) {
    var score = 0;
    if (options.hour12 && !format.hour12) {
      score -= removalPenalty;
    } else if (!options.hour12 && format.hour12) {
      score -= additionPenalty;
    }
    for (var _i = 0, DATE_TIME_PROPS_1 = DATE_TIME_PROPS; _i < DATE_TIME_PROPS_1.length; _i++) {
      var prop = DATE_TIME_PROPS_1[_i];
      var optionsProp = options[prop];
      var formatProp = format[prop];
      if (optionsProp === void 0 && formatProp !== void 0) {
        score -= additionPenalty;
      } else if (optionsProp !== void 0 && formatProp === void 0) {
        score -= removalPenalty;
      } else if (optionsProp !== formatProp) {
        if (isNumericType(optionsProp) !== isNumericType(formatProp)) {
          score -= differentNumericTypePenalty;
        } else {
          var values = ["2-digit", "numeric", "narrow", "short", "long"];
          var optionsPropIndex = values.indexOf(optionsProp);
          var formatPropIndex = values.indexOf(formatProp);
          var delta = Math.max(-2, Math.min(formatPropIndex - optionsPropIndex, 2));
          if (delta === 2) {
            score -= longMorePenalty;
          } else if (delta === 1) {
            score -= shortMorePenalty;
          } else if (delta === -1) {
            score -= shortLessPenalty;
          } else if (delta === -2) {
            score -= longLessPenalty;
          }
        }
      }
    }
    return score;
  }
  function BestFitFormatMatcher(options, formats) {
    var bestScore = -Infinity;
    var bestFormat = formats[0];
    invariant(Array.isArray(formats), "formats should be a list of things");
    for (var _i = 0, formats_1 = formats; _i < formats_1.length; _i++) {
      var format = formats_1[_i];
      var score = bestFitFormatMatcherScore(options, format);
      if (score > bestScore) {
        bestScore = score;
        bestFormat = format;
      }
    }
    var skeletonFormat = __assign({}, bestFormat);
    var patternFormat = {rawPattern: bestFormat.rawPattern};
    processDateTimePattern(bestFormat.rawPattern, patternFormat);
    for (var prop in skeletonFormat) {
      var skeletonValue = skeletonFormat[prop];
      var patternValue = patternFormat[prop];
      var requestedValue = options[prop];
      if (prop === "minute" || prop === "second") {
        continue;
      }
      if (!requestedValue) {
        continue;
      }
      if (isNumericType(patternValue) && !isNumericType(requestedValue)) {
        continue;
      }
      if (skeletonValue === requestedValue) {
        continue;
      }
      patternFormat[prop] = requestedValue;
    }
    patternFormat.pattern = skeletonFormat.pattern;
    patternFormat.pattern12 = skeletonFormat.pattern12;
    patternFormat.skeleton = skeletonFormat.skeleton;
    patternFormat.rangePatterns = skeletonFormat.rangePatterns;
    patternFormat.rangePatterns12 = skeletonFormat.rangePatterns12;
    return patternFormat;
  }

  // bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/lib/CanonicalizeLocaleList.js
  function CanonicalizeLocaleList(locales) {
    return Intl.getCanonicalLocales(locales);
  }

  // bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/lib/CanonicalizeTimeZoneName.js
  function CanonicalizeTimeZoneName(tz, _a) {
    var tzData = _a.tzData, uppercaseLinks = _a.uppercaseLinks;
    var uppercasedTz = tz.toUpperCase();
    var uppercasedZones = Object.keys(tzData).reduce(function(all, z) {
      all[z.toUpperCase()] = z;
      return all;
    }, {});
    var ianaTimeZone = uppercaseLinks[uppercasedTz] || uppercasedZones[uppercasedTz];
    if (ianaTimeZone === "Etc/UTC" || ianaTimeZone === "Etc/GMT") {
      return "UTC";
    }
    return ianaTimeZone;
  }

  // bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/lib/262.js
  function ToString(o) {
    if (typeof o === "symbol") {
      throw TypeError("Cannot convert a Symbol value to a string");
    }
    return String(o);
  }
  function ToNumber(val) {
    if (val === void 0) {
      return NaN;
    }
    if (val === null) {
      return 0;
    }
    if (typeof val === "boolean") {
      return val ? 1 : 0;
    }
    if (typeof val === "number") {
      return val;
    }
    if (typeof val === "symbol" || typeof val === "bigint") {
      throw new TypeError("Cannot convert symbol/bigint to number");
    }
    return Number(val);
  }
  function ToInteger(n) {
    var number = ToNumber(n);
    if (isNaN(number) || SameValue(number, -0)) {
      return 0;
    }
    if (isFinite(number)) {
      return number;
    }
    var integer = Math.floor(Math.abs(number));
    if (number < 0) {
      integer = -integer;
    }
    if (SameValue(integer, -0)) {
      return 0;
    }
    return integer;
  }
  function TimeClip(time) {
    if (!isFinite(time)) {
      return NaN;
    }
    if (Math.abs(time) > 8.64 * 1e15) {
      return NaN;
    }
    return ToInteger(time);
  }
  function ToObject(arg) {
    if (arg == null) {
      throw new TypeError("undefined/null cannot be converted to object");
    }
    return Object(arg);
  }
  function SameValue(x, y) {
    if (Object.is) {
      return Object.is(x, y);
    }
    if (x === y) {
      return x !== 0 || 1 / x === 1 / y;
    }
    return x !== x && y !== y;
  }
  function ArrayCreate(len) {
    return new Array(len);
  }
  function Type(x) {
    if (x === null) {
      return "Null";
    }
    if (typeof x === "undefined") {
      return "Undefined";
    }
    if (typeof x === "function" || typeof x === "object") {
      return "Object";
    }
    if (typeof x === "number") {
      return "Number";
    }
    if (typeof x === "boolean") {
      return "Boolean";
    }
    if (typeof x === "string") {
      return "String";
    }
    if (typeof x === "symbol") {
      return "Symbol";
    }
    if (typeof x === "bigint") {
      return "BigInt";
    }
  }
  var MS_PER_DAY = 864e5;
  function mod(x, y) {
    return x - Math.floor(x / y) * y;
  }
  function Day(t) {
    return Math.floor(t / MS_PER_DAY);
  }
  function WeekDay(t) {
    return mod(Day(t) + 4, 7);
  }
  function DayFromYear(y) {
    return Date.UTC(y, 0) / MS_PER_DAY;
  }
  function YearFromTime(t) {
    return new Date(t).getUTCFullYear();
  }
  function DaysInYear(y) {
    if (y % 4 !== 0) {
      return 365;
    }
    if (y % 100 !== 0) {
      return 366;
    }
    if (y % 400 !== 0) {
      return 365;
    }
    return 366;
  }
  function DayWithinYear(t) {
    return Day(t) - DayFromYear(YearFromTime(t));
  }
  function InLeapYear(t) {
    return DaysInYear(YearFromTime(t)) === 365 ? 0 : 1;
  }
  function MonthFromTime(t) {
    var dwy = DayWithinYear(t);
    var leap = InLeapYear(t);
    if (dwy >= 0 && dwy < 31) {
      return 0;
    }
    if (dwy < 59 + leap) {
      return 1;
    }
    if (dwy < 90 + leap) {
      return 2;
    }
    if (dwy < 120 + leap) {
      return 3;
    }
    if (dwy < 151 + leap) {
      return 4;
    }
    if (dwy < 181 + leap) {
      return 5;
    }
    if (dwy < 212 + leap) {
      return 6;
    }
    if (dwy < 243 + leap) {
      return 7;
    }
    if (dwy < 273 + leap) {
      return 8;
    }
    if (dwy < 304 + leap) {
      return 9;
    }
    if (dwy < 334 + leap) {
      return 10;
    }
    if (dwy < 365 + leap) {
      return 11;
    }
    throw new Error("Invalid time");
  }
  function DateFromTime(t) {
    var dwy = DayWithinYear(t);
    var mft = MonthFromTime(t);
    var leap = InLeapYear(t);
    if (mft === 0) {
      return dwy + 1;
    }
    if (mft === 1) {
      return dwy - 30;
    }
    if (mft === 2) {
      return dwy - 58 - leap;
    }
    if (mft === 3) {
      return dwy - 89 - leap;
    }
    if (mft === 4) {
      return dwy - 119 - leap;
    }
    if (mft === 5) {
      return dwy - 150 - leap;
    }
    if (mft === 6) {
      return dwy - 180 - leap;
    }
    if (mft === 7) {
      return dwy - 211 - leap;
    }
    if (mft === 8) {
      return dwy - 242 - leap;
    }
    if (mft === 9) {
      return dwy - 272 - leap;
    }
    if (mft === 10) {
      return dwy - 303 - leap;
    }
    if (mft === 11) {
      return dwy - 333 - leap;
    }
    throw new Error("Invalid time");
  }
  var HOURS_PER_DAY = 24;
  var MINUTES_PER_HOUR = 60;
  var SECONDS_PER_MINUTE = 60;
  var MS_PER_SECOND = 1e3;
  var MS_PER_MINUTE = MS_PER_SECOND * SECONDS_PER_MINUTE;
  var MS_PER_HOUR = MS_PER_MINUTE * MINUTES_PER_HOUR;
  function HourFromTime(t) {
    return mod(Math.floor(t / MS_PER_HOUR), HOURS_PER_DAY);
  }
  function MinFromTime(t) {
    return mod(Math.floor(t / MS_PER_MINUTE), MINUTES_PER_HOUR);
  }
  function SecFromTime(t) {
    return mod(Math.floor(t / MS_PER_SECOND), SECONDS_PER_MINUTE);
  }
  function IsCallable(fn) {
    return typeof fn === "function";
  }
  function OrdinaryHasInstance(C, O, internalSlots) {
    if (!IsCallable(C)) {
      return false;
    }
    if (internalSlots === null || internalSlots === void 0 ? void 0 : internalSlots.boundTargetFunction) {
      var BC = internalSlots === null || internalSlots === void 0 ? void 0 : internalSlots.boundTargetFunction;
      return O instanceof BC;
    }
    if (typeof O !== "object") {
      return false;
    }
    var P = C.prototype;
    if (typeof P !== "object") {
      throw new TypeError("OrdinaryHasInstance called on an object with an invalid prototype property.");
    }
    return Object.prototype.isPrototypeOf.call(P, O);
  }
  function msFromTime(t) {
    return mod(t, MS_PER_SECOND);
  }

  // bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/lib/DateTimeFormat/BasicFormatMatcher.js
  function BasicFormatMatcher(options, formats) {
    var bestScore = -Infinity;
    var bestFormat = formats[0];
    invariant(Array.isArray(formats), "formats should be a list of things");
    for (var _i = 0, formats_1 = formats; _i < formats_1.length; _i++) {
      var format = formats_1[_i];
      var score = 0;
      for (var _a = 0, DATE_TIME_PROPS_1 = DATE_TIME_PROPS; _a < DATE_TIME_PROPS_1.length; _a++) {
        var prop = DATE_TIME_PROPS_1[_a];
        var optionsProp = options[prop];
        var formatProp = format[prop];
        if (optionsProp === void 0 && formatProp !== void 0) {
          score -= additionPenalty;
        } else if (optionsProp !== void 0 && formatProp === void 0) {
          score -= removalPenalty;
        } else if (optionsProp !== formatProp) {
          var values = void 0;
          if (prop === "fractionalSecondDigits") {
            values = [1, 2, 3];
          } else {
            values = ["2-digit", "numeric", "narrow", "short", "long"];
          }
          var optionsPropIndex = values.indexOf(optionsProp);
          var formatPropIndex = values.indexOf(formatProp);
          var delta = Math.max(-2, Math.min(formatPropIndex - optionsPropIndex, 2));
          if (delta === 2) {
            score -= longMorePenalty;
          } else if (delta === 1) {
            score -= shortMorePenalty;
          } else if (delta === -1) {
            score -= shortLessPenalty;
          } else if (delta === -2) {
            score -= longLessPenalty;
          }
        }
      }
      if (score > bestScore) {
        bestScore = score;
        bestFormat = format;
      }
    }
    return __assign({}, bestFormat);
  }

  // bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/lib/DateTimeFormat/DateTimeStyleFormat.js
  function DateTimeStyleFormat(dateStyle, timeStyle, dataLocaleData) {
    var dateFormat, timeFormat;
    if (timeStyle !== void 0) {
      invariant(timeStyle === "full" || timeStyle === "long" || timeStyle === "medium" || timeStyle === "short", "invalid timeStyle");
      timeFormat = dataLocaleData.timeFormat[timeStyle];
    }
    if (dateStyle !== void 0) {
      invariant(dateStyle === "full" || dateStyle === "long" || dateStyle === "medium" || dateStyle === "short", "invalid dateStyle");
      dateFormat = dataLocaleData.dateFormat[dateStyle];
    }
    if (dateStyle !== void 0 && timeStyle !== void 0) {
      var format = {};
      for (var field in dateFormat) {
        if (field !== "pattern") {
          format[field] = dateFormat[field];
        }
      }
      for (var field in timeFormat) {
        if (field !== "pattern" && field !== "pattern12") {
          format[field] = timeFormat[field];
        }
      }
      var connector = dataLocaleData.dateTimeFormat[dateStyle];
      var pattern = connector.replace("{0}", timeFormat.pattern).replace("{1}", dateFormat.pattern);
      format.pattern = pattern;
      if ("pattern12" in timeFormat) {
        var pattern12 = connector.replace("{0}", timeFormat.pattern12).replace("{1}", dateFormat.pattern);
        format.pattern12 = pattern12;
      }
      return format;
    }
    if (timeStyle !== void 0) {
      return timeFormat;
    }
    invariant(dateStyle !== void 0, "dateStyle should not be undefined");
    return dateFormat;
  }

  // bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/lib/DateTimeFormat/ToLocalTime.js
  function getApplicableZoneData(t, timeZone, tzData) {
    var _a;
    var zoneData = tzData[timeZone];
    if (!zoneData) {
      return [0, false];
    }
    var i = 0;
    var offset = 0;
    var dst = false;
    for (; i <= zoneData.length; i++) {
      if (i === zoneData.length || zoneData[i][0] * 1e3 > t) {
        ;
        _a = zoneData[i - 1], offset = _a[2], dst = _a[3];
        break;
      }
    }
    return [offset * 1e3, dst];
  }
  function ToLocalTime(t, calendar, timeZone, _a) {
    var tzData = _a.tzData;
    invariant(Type(t) === "Number", "invalid time");
    invariant(calendar === "gregory", "We only support Gregory calendar right now");
    var _b = getApplicableZoneData(t, timeZone, tzData), timeZoneOffset = _b[0], inDST = _b[1];
    var tz = t + timeZoneOffset;
    var year = YearFromTime(tz);
    return {
      weekday: WeekDay(tz),
      era: year < 0 ? "BC" : "AD",
      year: year,
      relatedYear: void 0,
      yearName: void 0,
      month: MonthFromTime(tz),
      day: DateFromTime(tz),
      hour: HourFromTime(tz),
      minute: MinFromTime(tz),
      second: SecFromTime(tz),
      millisecond: msFromTime(tz),
      inDST: inDST,
      timeZoneOffset: timeZoneOffset
    };
  }

  // bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/lib/DateTimeFormat/FormatDateTimePattern.js
  function pad(n) {
    if (n < 10) {
      return "0" + n;
    }
    return String(n);
  }
  function offsetToGmtString(gmtFormat, hourFormat, offsetInMs, style) {
    var offsetInMinutes = Math.floor(offsetInMs / 6e4);
    var mins = Math.abs(offsetInMinutes) % 60;
    var hours = Math.floor(Math.abs(offsetInMinutes) / 60);
    var _a = hourFormat.split(";"), positivePattern = _a[0], negativePattern = _a[1];
    var offsetStr = "";
    var pattern = offsetInMs < 0 ? negativePattern : positivePattern;
    if (style === "long") {
      offsetStr = pattern.replace("HH", pad(hours)).replace("H", String(hours)).replace("mm", pad(mins)).replace("m", String(mins));
    } else if (mins || hours) {
      if (!mins) {
        pattern = pattern.replace(/:?m+/, "");
      }
      offsetStr = pattern.replace(/H+/, String(hours)).replace(/m+/, String(mins));
    }
    return gmtFormat.replace("{0}", offsetStr);
  }
  function FormatDateTimePattern(dtf, patternParts, x, _a) {
    var getInternalSlots2 = _a.getInternalSlots, localeData = _a.localeData, getDefaultTimeZone = _a.getDefaultTimeZone, tzData = _a.tzData;
    x = TimeClip(x);
    var internalSlots = getInternalSlots2(dtf);
    var dataLocale = internalSlots.dataLocale;
    var dataLocaleData = localeData[dataLocale];
    var locale = internalSlots.locale;
    var nfOptions = Object.create(null);
    nfOptions.useGrouping = false;
    var nf = new Intl.NumberFormat(locale, nfOptions);
    var nf2Options = Object.create(null);
    nf2Options.minimumIntegerDigits = 2;
    nf2Options.useGrouping = false;
    var nf2 = new Intl.NumberFormat(locale, nf2Options);
    var fractionalSecondDigits = internalSlots.fractionalSecondDigits;
    var nf3;
    if (fractionalSecondDigits !== void 0) {
      var nf3Options = Object.create(null);
      nf3Options.minimumIntegerDigits = fractionalSecondDigits;
      nf3Options.useGrouping = false;
      nf3 = new Intl.NumberFormat(locale, nf3Options);
    }
    var tm = ToLocalTime(x, internalSlots.calendar, internalSlots.timeZone, {tzData: tzData});
    var result = [];
    for (var _i = 0, patternParts_1 = patternParts; _i < patternParts_1.length; _i++) {
      var patternPart = patternParts_1[_i];
      var p = patternPart.type;
      if (p === "literal") {
        result.push({
          type: "literal",
          value: patternPart.value
        });
      } else if (p === "fractionalSecondDigits") {
        var v = Math.floor(tm.millisecond * Math.pow(10, (fractionalSecondDigits || 0) - 3));
        result.push({
          type: "fractionalSecond",
          value: nf3.format(v)
        });
      } else if (DATE_TIME_PROPS.indexOf(p) > -1) {
        var fv = "";
        var f = internalSlots[p];
        var v = tm[p];
        if (p === "year" && v <= 0) {
          v = 1 - v;
        }
        if (p === "month") {
          v++;
        }
        var hourCycle = internalSlots.hourCycle;
        if (p === "hour" && (hourCycle === "h11" || hourCycle === "h12")) {
          v = v % 12;
          if (v === 0 && hourCycle === "h12") {
            v = 12;
          }
        }
        if (p === "hour" && hourCycle === "h24") {
          if (v === 0) {
            v = 24;
          }
        }
        if (f === "numeric") {
          fv = nf.format(v);
        } else if (f === "2-digit") {
          fv = nf2.format(v);
          if (fv.length > 2) {
            fv = fv.slice(fv.length - 2, fv.length);
          }
        } else if (f === "narrow" || f === "short" || f === "long") {
          if (p === "era") {
            fv = dataLocaleData[p][f][v];
          } else if (p === "timeZoneName") {
            var timeZoneName = dataLocaleData.timeZoneName, gmtFormat = dataLocaleData.gmtFormat, hourFormat = dataLocaleData.hourFormat;
            var timeZone = internalSlots.timeZone || getDefaultTimeZone();
            var timeZoneData = timeZoneName[timeZone];
            if (timeZoneData && timeZoneData[f]) {
              fv = timeZoneData[f][+tm.inDST];
            } else {
              fv = offsetToGmtString(gmtFormat, hourFormat, tm.timeZoneOffset, f);
            }
          } else if (p === "month") {
            fv = dataLocaleData.month[f][v - 1];
          } else {
            fv = dataLocaleData[p][f][v];
          }
        }
        result.push({
          type: p,
          value: fv
        });
      } else if (p === "ampm") {
        var v = tm.hour;
        var fv = void 0;
        if (v > 11) {
          fv = dataLocaleData.pm;
        } else {
          fv = dataLocaleData.am;
        }
        result.push({
          type: "dayPeriod",
          value: fv
        });
      } else if (p === "relatedYear") {
        var v = tm.relatedYear;
        var fv = nf.format(v);
        result.push({
          type: "relatedYear",
          value: fv
        });
      } else if (p === "yearName") {
        var v = tm.yearName;
        var fv = nf.format(v);
        result.push({
          type: "yearName",
          value: fv
        });
      }
    }
    return result;
  }

  // bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/lib/PartitionPattern.js
  function PartitionPattern(pattern) {
    var result = [];
    var beginIndex = pattern.indexOf("{");
    var endIndex = 0;
    var nextIndex = 0;
    var length = pattern.length;
    while (beginIndex < pattern.length && beginIndex > -1) {
      endIndex = pattern.indexOf("}", beginIndex);
      invariant(endIndex > beginIndex, "Invalid pattern " + pattern);
      if (beginIndex > nextIndex) {
        result.push({
          type: "literal",
          value: pattern.substring(nextIndex, beginIndex)
        });
      }
      result.push({
        type: pattern.substring(beginIndex + 1, endIndex),
        value: void 0
      });
      nextIndex = endIndex + 1;
      beginIndex = pattern.indexOf("{", nextIndex);
    }
    if (nextIndex < length) {
      result.push({
        type: "literal",
        value: pattern.substring(nextIndex, length)
      });
    }
    return result;
  }

  // bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/lib/DateTimeFormat/PartitionDateTimePattern.js
  function PartitionDateTimePattern(dtf, x, implDetails) {
    x = TimeClip(x);
    if (isNaN(x)) {
      throw new RangeError("invalid time");
    }
    var getInternalSlots2 = implDetails.getInternalSlots;
    var internalSlots = getInternalSlots2(dtf);
    var pattern = internalSlots.pattern;
    return FormatDateTimePattern(dtf, PartitionPattern(pattern), x, implDetails);
  }

  // bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/lib/DateTimeFormat/FormatDateTime.js
  function FormatDateTime(dtf, x, implDetails) {
    var parts = PartitionDateTimePattern(dtf, x, implDetails);
    var result = "";
    for (var _i = 0, parts_1 = parts; _i < parts_1.length; _i++) {
      var part = parts_1[_i];
      result += part.value;
    }
    return result;
  }

  // bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/lib/DateTimeFormat/PartitionDateTimeRangePattern.js
  var TABLE_2_FIELDS = [
    "era",
    "year",
    "month",
    "day",
    "ampm",
    "hour",
    "minute",
    "second",
    "fractionalSecondDigits"
  ];
  function PartitionDateTimeRangePattern(dtf, x, y, implDetails) {
    x = TimeClip(x);
    if (isNaN(x)) {
      throw new RangeError("Invalid start time");
    }
    y = TimeClip(y);
    if (isNaN(y)) {
      throw new RangeError("Invalid end time");
    }
    var getInternalSlots2 = implDetails.getInternalSlots, tzData = implDetails.tzData;
    var internalSlots = getInternalSlots2(dtf);
    var tm1 = ToLocalTime(x, internalSlots.calendar, internalSlots.timeZone, {tzData: tzData});
    var tm2 = ToLocalTime(y, internalSlots.calendar, internalSlots.timeZone, {tzData: tzData});
    var pattern = internalSlots.pattern, rangePatterns = internalSlots.rangePatterns;
    var rangePattern;
    var dateFieldsPracticallyEqual = true;
    var patternContainsLargerDateField = false;
    for (var _i = 0, TABLE_2_FIELDS_1 = TABLE_2_FIELDS; _i < TABLE_2_FIELDS_1.length; _i++) {
      var fieldName = TABLE_2_FIELDS_1[_i];
      if (dateFieldsPracticallyEqual && !patternContainsLargerDateField) {
        if (fieldName === "ampm") {
          var rp = rangePatterns.ampm;
          if (rangePattern !== void 0 && rp === void 0) {
            patternContainsLargerDateField = true;
          } else {
            var v1 = tm1.hour;
            var v2 = tm2.hour;
            if (v1 > 11 && v2 < 11 || v1 < 11 && v2 > 11) {
              dateFieldsPracticallyEqual = false;
            }
            rangePattern = rp;
          }
        } else if (fieldName === "fractionalSecondDigits") {
          var fractionalSecondDigits = internalSlots.fractionalSecondDigits;
          if (fractionalSecondDigits === void 0) {
            fractionalSecondDigits = 3;
          }
          var v1 = Math.floor(tm1.millisecond * Math.pow(10, fractionalSecondDigits - 3));
          var v2 = Math.floor(tm2.millisecond * Math.pow(10, fractionalSecondDigits - 3));
          if (v1 !== v2) {
            dateFieldsPracticallyEqual = false;
          }
        } else {
          var rp = rangePatterns[fieldName];
          if (rangePattern !== void 0 && rp === void 0) {
            patternContainsLargerDateField = true;
          } else {
            var v1 = tm1[fieldName];
            var v2 = tm2[fieldName];
            if (!SameValue(v1, v2)) {
              dateFieldsPracticallyEqual = false;
            }
            rangePattern = rp;
          }
        }
      }
    }
    if (dateFieldsPracticallyEqual) {
      var result_2 = FormatDateTimePattern(dtf, PartitionPattern(pattern), x, implDetails);
      for (var _a = 0, result_1 = result_2; _a < result_1.length; _a++) {
        var r = result_1[_a];
        r.source = RangePatternType.shared;
      }
      return result_2;
    }
    var result = [];
    if (rangePattern === void 0) {
      rangePattern = rangePatterns.default;
      for (var _b = 0, _c = rangePattern.patternParts; _b < _c.length; _b++) {
        var patternPart = _c[_b];
        if (patternPart.pattern === "{0}" || patternPart.pattern === "{1}") {
          patternPart.pattern = pattern;
        }
      }
    }
    for (var _d = 0, _e = rangePattern.patternParts; _d < _e.length; _d++) {
      var rangePatternPart = _e[_d];
      var source = rangePatternPart.source, pattern_1 = rangePatternPart.pattern;
      var z = void 0;
      if (source === RangePatternType.startRange || source === RangePatternType.shared) {
        z = x;
      } else {
        z = y;
      }
      var patternParts = PartitionPattern(pattern_1);
      var partResult = FormatDateTimePattern(dtf, patternParts, z, implDetails);
      for (var _f = 0, partResult_1 = partResult; _f < partResult_1.length; _f++) {
        var r = partResult_1[_f];
        r.source = source;
      }
      result = result.concat(partResult);
    }
    return result;
  }

  // bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/lib/DateTimeFormat/FormatDateTimeRange.js
  function FormatDateTimeRange(dtf, x, y, implDetails) {
    var parts = PartitionDateTimeRangePattern(dtf, x, y, implDetails);
    var result = "";
    for (var _i = 0, parts_1 = parts; _i < parts_1.length; _i++) {
      var part = parts_1[_i];
      result += part.value;
    }
    return result;
  }

  // bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/lib/DateTimeFormat/FormatDateTimeRangeToParts.js
  function FormatDateTimeRangeToParts(dtf, x, y, implDetails) {
    var parts = PartitionDateTimeRangePattern(dtf, x, y, implDetails);
    var result = new Array(0);
    for (var _i = 0, parts_1 = parts; _i < parts_1.length; _i++) {
      var part = parts_1[_i];
      result.push({
        type: part.type,
        value: part.value,
        source: part.source
      });
    }
    return result;
  }

  // bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/lib/DateTimeFormat/FormatDateTimeToParts.js
  function FormatDateTimeToParts(dtf, x, implDetails) {
    var parts = PartitionDateTimePattern(dtf, x, implDetails);
    var result = ArrayCreate(0);
    for (var _i = 0, parts_1 = parts; _i < parts_1.length; _i++) {
      var part = parts_1[_i];
      result.push({
        type: part.type,
        value: part.value
      });
    }
    return result;
  }

  // bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/lib/DateTimeFormat/ToDateTimeOptions.js
  function ToDateTimeOptions(options, required, defaults) {
    if (options === void 0) {
      options = null;
    } else {
      options = ToObject(options);
    }
    options = Object.create(options);
    var needDefaults = true;
    if (required === "date" || required === "any") {
      for (var _i = 0, _a = ["weekday", "year", "month", "day"]; _i < _a.length; _i++) {
        var prop = _a[_i];
        var value = options[prop];
        if (value !== void 0) {
          needDefaults = false;
        }
      }
    }
    if (required === "time" || required === "any") {
      for (var _b = 0, _c = [
        "dayPeriod",
        "hour",
        "minute",
        "second",
        "fractionalSecondDigits"
      ]; _b < _c.length; _b++) {
        var prop = _c[_b];
        var value = options[prop];
        if (value !== void 0) {
          needDefaults = false;
        }
      }
    }
    if (options.dateStyle !== void 0 || options.timeStyle !== void 0) {
      needDefaults = false;
    }
    if (required === "date" && options.timeStyle) {
      throw new TypeError("Intl.DateTimeFormat date was required but timeStyle was included");
    }
    if (required === "time" && options.dateStyle) {
      throw new TypeError("Intl.DateTimeFormat time was required but dateStyle was included");
    }
    if (needDefaults && (defaults === "date" || defaults === "all")) {
      for (var _d = 0, _e = ["year", "month", "day"]; _d < _e.length; _d++) {
        var prop = _e[_d];
        options[prop] = "numeric";
      }
    }
    if (needDefaults && (defaults === "time" || defaults === "all")) {
      for (var _f = 0, _g = ["hour", "minute", "second"]; _f < _g.length; _f++) {
        var prop = _g[_f];
        options[prop] = "numeric";
      }
    }
    return options;
  }

  // bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/lib/GetOption.js
  function GetOption(opts, prop, type, values, fallback) {
    if (typeof opts !== "object") {
      throw new TypeError("Options must be an object");
    }
    var value = opts[prop];
    if (value !== void 0) {
      if (type !== "boolean" && type !== "string") {
        throw new TypeError("invalid type");
      }
      if (type === "boolean") {
        value = Boolean(value);
      }
      if (type === "string") {
        value = ToString(value);
      }
      if (values !== void 0 && !values.filter(function(val) {
        return val == value;
      }).length) {
        throw new RangeError(value + " is not within " + values.join(", "));
      }
      return value;
    }
    return fallback;
  }

  // bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/lib/BestAvailableLocale.js
  function BestAvailableLocale(availableLocales, locale) {
    var candidate = locale;
    while (true) {
      if (availableLocales.has(candidate)) {
        return candidate;
      }
      var pos = candidate.lastIndexOf("-");
      if (!~pos) {
        return void 0;
      }
      if (pos >= 2 && candidate[pos - 2] === "-") {
        pos -= 2;
      }
      candidate = candidate.slice(0, pos);
    }
  }

  // bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/lib/LookupMatcher.js
  function LookupMatcher(availableLocales, requestedLocales, getDefaultLocale) {
    var result = {locale: ""};
    for (var _i = 0, requestedLocales_1 = requestedLocales; _i < requestedLocales_1.length; _i++) {
      var locale = requestedLocales_1[_i];
      var noExtensionLocale = locale.replace(UNICODE_EXTENSION_SEQUENCE_REGEX, "");
      var availableLocale = BestAvailableLocale(availableLocales, noExtensionLocale);
      if (availableLocale) {
        result.locale = availableLocale;
        if (locale !== noExtensionLocale) {
          result.extension = locale.slice(noExtensionLocale.length + 1, locale.length);
        }
        return result;
      }
    }
    result.locale = getDefaultLocale();
    return result;
  }

  // bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/lib/BestFitMatcher.js
  function BestFitMatcher(availableLocales, requestedLocales, getDefaultLocale) {
    var minimizedAvailableLocaleMap = {};
    var minimizedAvailableLocales = new Set();
    availableLocales.forEach(function(locale2) {
      var minimizedLocale = new Intl.Locale(locale2).minimize().toString();
      minimizedAvailableLocaleMap[minimizedLocale] = locale2;
      minimizedAvailableLocales.add(minimizedLocale);
    });
    var foundLocale;
    for (var _i = 0, requestedLocales_1 = requestedLocales; _i < requestedLocales_1.length; _i++) {
      var l = requestedLocales_1[_i];
      if (foundLocale) {
        break;
      }
      var noExtensionLocale = l.replace(UNICODE_EXTENSION_SEQUENCE_REGEX, "");
      if (availableLocales.has(noExtensionLocale)) {
        foundLocale = noExtensionLocale;
        break;
      }
      if (minimizedAvailableLocales.has(noExtensionLocale)) {
        foundLocale = minimizedAvailableLocaleMap[noExtensionLocale];
        break;
      }
      var locale = new Intl.Locale(noExtensionLocale);
      var maximizedRequestedLocale = locale.maximize().toString();
      var minimizedRequestedLocale = locale.minimize().toString();
      if (minimizedAvailableLocales.has(minimizedRequestedLocale)) {
        foundLocale = minimizedAvailableLocaleMap[minimizedRequestedLocale];
        break;
      }
      foundLocale = BestAvailableLocale(minimizedAvailableLocales, maximizedRequestedLocale);
    }
    return {
      locale: foundLocale || getDefaultLocale()
    };
  }

  // bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/lib/UnicodeExtensionValue.js
  function UnicodeExtensionValue(extension, key) {
    invariant(key.length === 2, "key must have 2 elements");
    var size = extension.length;
    var searchValue = "-" + key + "-";
    var pos = extension.indexOf(searchValue);
    if (pos !== -1) {
      var start = pos + 4;
      var end = start;
      var k = start;
      var done = false;
      while (!done) {
        var e = extension.indexOf("-", k);
        var len = void 0;
        if (e === -1) {
          len = size - k;
        } else {
          len = e - k;
        }
        if (len === 2) {
          done = true;
        } else if (e === -1) {
          end = size;
          done = true;
        } else {
          end = e;
          k = e + 1;
        }
      }
      return extension.slice(start, end);
    }
    searchValue = "-" + key;
    pos = extension.indexOf(searchValue);
    if (pos !== -1 && pos + 3 === size) {
      return "";
    }
    return void 0;
  }

  // bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/lib/ResolveLocale.js
  function ResolveLocale(availableLocales, requestedLocales, options, relevantExtensionKeys, localeData, getDefaultLocale) {
    var matcher = options.localeMatcher;
    var r;
    if (matcher === "lookup") {
      r = LookupMatcher(availableLocales, requestedLocales, getDefaultLocale);
    } else {
      r = BestFitMatcher(availableLocales, requestedLocales, getDefaultLocale);
    }
    var foundLocale = r.locale;
    var result = {locale: "", dataLocale: foundLocale};
    var supportedExtension = "-u";
    for (var _i = 0, relevantExtensionKeys_1 = relevantExtensionKeys; _i < relevantExtensionKeys_1.length; _i++) {
      var key = relevantExtensionKeys_1[_i];
      invariant(foundLocale in localeData, "Missing locale data for " + foundLocale);
      var foundLocaleData = localeData[foundLocale];
      invariant(typeof foundLocaleData === "object" && foundLocaleData !== null, "locale data " + key + " must be an object");
      var keyLocaleData = foundLocaleData[key];
      invariant(Array.isArray(keyLocaleData), "keyLocaleData for " + key + " must be an array");
      var value = keyLocaleData[0];
      invariant(typeof value === "string" || value === null, "value must be string or null but got " + typeof value + " in key " + key);
      var supportedExtensionAddition = "";
      if (r.extension) {
        var requestedValue = UnicodeExtensionValue(r.extension, key);
        if (requestedValue !== void 0) {
          if (requestedValue !== "") {
            if (~keyLocaleData.indexOf(requestedValue)) {
              value = requestedValue;
              supportedExtensionAddition = "-" + key + "-" + value;
            }
          } else if (~requestedValue.indexOf("true")) {
            value = "true";
            supportedExtensionAddition = "-" + key;
          }
        }
      }
      if (key in options) {
        var optionsValue = options[key];
        invariant(typeof optionsValue === "string" || typeof optionsValue === "undefined" || optionsValue === null, "optionsValue must be String, Undefined or Null");
        if (~keyLocaleData.indexOf(optionsValue)) {
          if (optionsValue !== value) {
            value = optionsValue;
            supportedExtensionAddition = "";
          }
        }
      }
      result[key] = value;
      supportedExtension += supportedExtensionAddition;
    }
    if (supportedExtension.length > 2) {
      var privateIndex = foundLocale.indexOf("-x-");
      if (privateIndex === -1) {
        foundLocale = foundLocale + supportedExtension;
      } else {
        var preExtension = foundLocale.slice(0, privateIndex);
        var postExtension = foundLocale.slice(privateIndex, foundLocale.length);
        foundLocale = preExtension + supportedExtension + postExtension;
      }
      foundLocale = Intl.getCanonicalLocales(foundLocale)[0];
    }
    result.locale = foundLocale;
    return result;
  }

  // bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/lib/IsValidTimeZoneName.js
  function IsValidTimeZoneName(tz, _a) {
    var tzData = _a.tzData, uppercaseLinks = _a.uppercaseLinks;
    var uppercasedTz = tz.toUpperCase();
    var zoneNames = new Set();
    Object.keys(tzData).map(function(z) {
      return z.toUpperCase();
    }).forEach(function(z) {
      return zoneNames.add(z);
    });
    return zoneNames.has(uppercasedTz) || uppercasedTz in uppercaseLinks;
  }

  // bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/lib/DefaultNumberOption.js
  function DefaultNumberOption(val, min, max, fallback) {
    if (val !== void 0) {
      val = Number(val);
      if (isNaN(val) || val < min || val > max) {
        throw new RangeError(val + " is outside of range [" + min + ", " + max + "]");
      }
      return Math.floor(val);
    }
    return fallback;
  }

  // bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/lib/GetNumberOption.js
  function GetNumberOption(options, property, minimum, maximum, fallback) {
    var val = options[property];
    return DefaultNumberOption(val, minimum, maximum, fallback);
  }

  // bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/lib/DateTimeFormat/InitializeDateTimeFormat.js
  function isTimeRelated(opt) {
    for (var _i = 0, _a = ["hour", "minute", "second"]; _i < _a.length; _i++) {
      var prop = _a[_i];
      var value = opt[prop];
      if (value !== void 0) {
        return true;
      }
    }
    return false;
  }
  function resolveHourCycle(hc, hcDefault, hour12) {
    if (hc == null) {
      hc = hcDefault;
    }
    if (hour12 !== void 0) {
      if (hour12) {
        if (hcDefault === "h11" || hcDefault === "h23") {
          hc = "h11";
        } else {
          hc = "h12";
        }
      } else {
        invariant(!hour12, "hour12 must not be set");
        if (hcDefault === "h11" || hcDefault === "h23") {
          hc = "h23";
        } else {
          hc = "h24";
        }
      }
    }
    return hc;
  }
  var TYPE_REGEX = /^[a-z0-9]{3,8}$/i;
  function InitializeDateTimeFormat(dtf, locales, opts, _a) {
    var getInternalSlots2 = _a.getInternalSlots, availableLocales = _a.availableLocales, localeData = _a.localeData, getDefaultLocale = _a.getDefaultLocale, getDefaultTimeZone = _a.getDefaultTimeZone, relevantExtensionKeys = _a.relevantExtensionKeys, tzData = _a.tzData, uppercaseLinks = _a.uppercaseLinks;
    var requestedLocales = CanonicalizeLocaleList(locales);
    var options = ToDateTimeOptions(opts, "any", "date");
    var opt = Object.create(null);
    var matcher = GetOption(options, "localeMatcher", "string", ["lookup", "best fit"], "best fit");
    opt.localeMatcher = matcher;
    var calendar = GetOption(options, "calendar", "string", void 0, void 0);
    if (calendar !== void 0 && !TYPE_REGEX.test(calendar)) {
      throw new RangeError("Malformed calendar");
    }
    var internalSlots = getInternalSlots2(dtf);
    opt.ca = calendar;
    var numberingSystem = GetOption(options, "numberingSystem", "string", void 0, void 0);
    if (numberingSystem !== void 0 && !TYPE_REGEX.test(numberingSystem)) {
      throw new RangeError("Malformed numbering system");
    }
    opt.nu = numberingSystem;
    var hour12 = GetOption(options, "hour12", "boolean", void 0, void 0);
    var hourCycle = GetOption(options, "hourCycle", "string", ["h11", "h12", "h23", "h24"], void 0);
    if (hour12 !== void 0) {
      hourCycle = null;
    }
    opt.hc = hourCycle;
    var r = ResolveLocale(availableLocales, requestedLocales, opt, relevantExtensionKeys, localeData, getDefaultLocale);
    internalSlots.locale = r.locale;
    calendar = r.ca;
    internalSlots.calendar = calendar;
    internalSlots.hourCycle = r.hc;
    internalSlots.numberingSystem = r.nu;
    var dataLocale = r.dataLocale;
    internalSlots.dataLocale = dataLocale;
    var timeZone = options.timeZone;
    if (timeZone !== void 0) {
      timeZone = String(timeZone);
      if (!IsValidTimeZoneName(timeZone, {tzData: tzData, uppercaseLinks: uppercaseLinks})) {
        throw new RangeError("Invalid timeZoneName");
      }
      timeZone = CanonicalizeTimeZoneName(timeZone, {tzData: tzData, uppercaseLinks: uppercaseLinks});
    } else {
      timeZone = getDefaultTimeZone();
    }
    internalSlots.timeZone = timeZone;
    opt = Object.create(null);
    opt.weekday = GetOption(options, "weekday", "string", ["narrow", "short", "long"], void 0);
    opt.era = GetOption(options, "era", "string", ["narrow", "short", "long"], void 0);
    opt.year = GetOption(options, "year", "string", ["2-digit", "numeric"], void 0);
    opt.month = GetOption(options, "month", "string", ["2-digit", "numeric", "narrow", "short", "long"], void 0);
    opt.day = GetOption(options, "day", "string", ["2-digit", "numeric"], void 0);
    opt.hour = GetOption(options, "hour", "string", ["2-digit", "numeric"], void 0);
    opt.minute = GetOption(options, "minute", "string", ["2-digit", "numeric"], void 0);
    opt.second = GetOption(options, "second", "string", ["2-digit", "numeric"], void 0);
    opt.timeZoneName = GetOption(options, "timeZoneName", "string", ["short", "long"], void 0);
    opt.fractionalSecondDigits = GetNumberOption(options, "fractionalSecondDigits", 1, 3, void 0);
    var dataLocaleData = localeData[dataLocale];
    invariant(!!dataLocaleData, "Missing locale data for " + dataLocale);
    var formats = dataLocaleData.formats[calendar];
    if (!formats) {
      throw new RangeError('Calendar "' + calendar + '" is not supported. Try setting "calendar" to 1 of the following: ' + Object.keys(dataLocaleData.formats).join(", "));
    }
    var formatMatcher = GetOption(options, "formatMatcher", "string", ["basic", "best fit"], "best fit");
    var dateStyle = GetOption(options, "dateStyle", "string", ["full", "long", "medium", "short"], void 0);
    internalSlots.dateStyle = dateStyle;
    var timeStyle = GetOption(options, "timeStyle", "string", ["full", "long", "medium", "short"], void 0);
    internalSlots.timeStyle = timeStyle;
    var bestFormat;
    if (dateStyle === void 0 && timeStyle === void 0) {
      if (formatMatcher === "basic") {
        bestFormat = BasicFormatMatcher(opt, formats);
      } else {
        if (isTimeRelated(opt)) {
          var hc = resolveHourCycle(internalSlots.hourCycle, dataLocaleData.hourCycle, hour12);
          opt.hour12 = hc === "h11" || hc === "h12";
        }
        bestFormat = BestFitFormatMatcher(opt, formats);
      }
    } else {
      for (var _i = 0, DATE_TIME_PROPS_1 = DATE_TIME_PROPS; _i < DATE_TIME_PROPS_1.length; _i++) {
        var prop = DATE_TIME_PROPS_1[_i];
        var p = opt[prop];
        if (p !== void 0) {
          throw new TypeError("Intl.DateTimeFormat can't set option " + prop + " when " + (dateStyle ? "dateStyle" : "timeStyle") + " is used");
        }
      }
      bestFormat = DateTimeStyleFormat(dateStyle, timeStyle, dataLocaleData);
    }
    internalSlots.format = bestFormat;
    for (var prop in opt) {
      var p = bestFormat[prop];
      if (p !== void 0) {
        internalSlots[prop] = p;
      }
    }
    var pattern;
    var rangePatterns;
    if (internalSlots.hour !== void 0) {
      var hc = resolveHourCycle(internalSlots.hourCycle, dataLocaleData.hourCycle, hour12);
      internalSlots.hourCycle = hc;
      if (hc === "h11" || hc === "h12") {
        pattern = bestFormat.pattern12;
        rangePatterns = bestFormat.rangePatterns12;
      } else {
        pattern = bestFormat.pattern;
        rangePatterns = bestFormat.rangePatterns;
      }
    } else {
      internalSlots.hourCycle = void 0;
      pattern = bestFormat.pattern;
      rangePatterns = bestFormat.rangePatterns;
    }
    internalSlots.pattern = pattern;
    internalSlots.rangePatterns = rangePatterns;
    return dtf;
  }

  // bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/lib/IsSanctionedSimpleUnitIdentifier.js
  var SANCTIONED_UNITS = [
    "angle-degree",
    "area-acre",
    "area-hectare",
    "concentr-percent",
    "digital-bit",
    "digital-byte",
    "digital-gigabit",
    "digital-gigabyte",
    "digital-kilobit",
    "digital-kilobyte",
    "digital-megabit",
    "digital-megabyte",
    "digital-petabyte",
    "digital-terabit",
    "digital-terabyte",
    "duration-day",
    "duration-hour",
    "duration-millisecond",
    "duration-minute",
    "duration-month",
    "duration-second",
    "duration-week",
    "duration-year",
    "length-centimeter",
    "length-foot",
    "length-inch",
    "length-kilometer",
    "length-meter",
    "length-mile-scandinavian",
    "length-mile",
    "length-millimeter",
    "length-yard",
    "mass-gram",
    "mass-kilogram",
    "mass-ounce",
    "mass-pound",
    "mass-stone",
    "temperature-celsius",
    "temperature-fahrenheit",
    "volume-fluid-ounce",
    "volume-gallon",
    "volume-liter",
    "volume-milliliter"
  ];
  function removeUnitNamespace(unit) {
    return unit.slice(unit.indexOf("-") + 1);
  }
  var SIMPLE_UNITS = SANCTIONED_UNITS.map(removeUnitNamespace);

  // bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/lib/regex.generated.js
  var S_UNICODE_REGEX = /[\$\+<->\^`\|~\xA2-\xA6\xA8\xA9\xAC\xAE-\xB1\xB4\xB8\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0384\u0385\u03F6\u0482\u058D-\u058F\u0606-\u0608\u060B\u060E\u060F\u06DE\u06E9\u06FD\u06FE\u07F6\u07FE\u07FF\u09F2\u09F3\u09FA\u09FB\u0AF1\u0B70\u0BF3-\u0BFA\u0C7F\u0D4F\u0D79\u0E3F\u0F01-\u0F03\u0F13\u0F15-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE\u0FCF\u0FD5-\u0FD8\u109E\u109F\u1390-\u1399\u166D\u17DB\u1940\u19DE-\u19FF\u1B61-\u1B6A\u1B74-\u1B7C\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2044\u2052\u207A-\u207C\u208A-\u208C\u20A0-\u20BF\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2307\u230C-\u2328\u232B-\u2426\u2440-\u244A\u249C-\u24E9\u2500-\u2767\u2794-\u27C4\u27C7-\u27E5\u27F0-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2B73\u2B76-\u2B95\u2B97-\u2BFF\u2CE5-\u2CEA\u2E50\u2E51\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFB\u3004\u3012\u3013\u3020\u3036\u3037\u303E\u303F\u309B\u309C\u3190\u3191\u3196-\u319F\u31C0-\u31E3\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uAA77-\uAA79\uAB5B\uAB6A\uAB6B\uFB29\uFBB2-\uFBC1\uFDFC\uFDFD\uFE62\uFE64-\uFE66\uFE69\uFF04\uFF0B\uFF1C-\uFF1E\uFF3E\uFF40\uFF5C\uFF5E\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|\uD805\uDF3F|\uD807[\uDFD5-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|\uD82F\uDC9C|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDE8\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\uD838[\uDD4F\uDEFF]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEE0-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF73\uDF80-\uDFD8\uDFE0-\uDFEB]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDD78\uDD7A-\uDDCB\uDDCD-\uDE53\uDE60-\uDE6D\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6\uDF00-\uDF92\uDF94-\uDFCA]/;

  // bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/lib/NumberFormat/format_to_parts.js
  var CARET_S_UNICODE_REGEX = new RegExp("^" + S_UNICODE_REGEX.source);
  var S_DOLLAR_UNICODE_REGEX = new RegExp(S_UNICODE_REGEX.source + "$");

  // bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/lib/LookupSupportedLocales.js
  function LookupSupportedLocales(availableLocales, requestedLocales) {
    var subset = [];
    for (var _i = 0, requestedLocales_1 = requestedLocales; _i < requestedLocales_1.length; _i++) {
      var locale = requestedLocales_1[_i];
      var noExtensionLocale = locale.replace(UNICODE_EXTENSION_SEQUENCE_REGEX, "");
      var availableLocale = BestAvailableLocale(availableLocales, noExtensionLocale);
      if (availableLocale) {
        subset.push(availableLocale);
      }
    }
    return subset;
  }

  // bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/lib/SupportedLocales.js
  function SupportedLocales(availableLocales, requestedLocales, options) {
    var matcher = "best fit";
    if (options !== void 0) {
      options = ToObject(options);
      matcher = GetOption(options, "localeMatcher", "string", ["lookup", "best fit"], "best fit");
    }
    if (matcher === "best fit") {
      return LookupSupportedLocales(availableLocales, requestedLocales);
    }
    return LookupSupportedLocales(availableLocales, requestedLocales);
  }

  // bazel-out/darwin-fastbuild/bin/packages/ecma402-abstract/lib/data.js
  var MissingLocaleDataError = function(_super) {
    __extends(MissingLocaleDataError2, _super);
    function MissingLocaleDataError2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.type = "MISSING_LOCALE_DATA";
      return _this;
    }
    return MissingLocaleDataError2;
  }(Error);

  // bazel-out/darwin-fastbuild/bin/packages/intl-datetimeformat/lib/src/get_internal_slots.js
  var internalSlotMap = new WeakMap();
  function getInternalSlots(x) {
    var internalSlots = internalSlotMap.get(x);
    if (!internalSlots) {
      internalSlots = Object.create(null);
      internalSlotMap.set(x, internalSlots);
    }
    return internalSlots;
  }

  // bazel-out/darwin-fastbuild/bin/packages/intl-datetimeformat/lib/src/data/links.js
  var links_default = {
    "Africa/Asmera": "Africa/Nairobi",
    "Africa/Timbuktu": "Africa/Abidjan",
    "America/Argentina/ComodRivadavia": "America/Argentina/Catamarca",
    "America/Atka": "America/Adak",
    "America/Buenos_Aires": "America/Argentina/Buenos_Aires",
    "America/Catamarca": "America/Argentina/Catamarca",
    "America/Coral_Harbour": "America/Atikokan",
    "America/Cordoba": "America/Argentina/Cordoba",
    "America/Ensenada": "America/Tijuana",
    "America/Fort_Wayne": "America/Indiana/Indianapolis",
    "America/Godthab": "America/Nuuk",
    "America/Indianapolis": "America/Indiana/Indianapolis",
    "America/Jujuy": "America/Argentina/Jujuy",
    "America/Knox_IN": "America/Indiana/Knox",
    "America/Louisville": "America/Kentucky/Louisville",
    "America/Mendoza": "America/Argentina/Mendoza",
    "America/Montreal": "America/Toronto",
    "America/Porto_Acre": "America/Rio_Branco",
    "America/Rosario": "America/Argentina/Cordoba",
    "America/Santa_Isabel": "America/Tijuana",
    "America/Shiprock": "America/Denver",
    "America/Virgin": "America/Port_of_Spain",
    "Antarctica/South_Pole": "Pacific/Auckland",
    "Asia/Ashkhabad": "Asia/Ashgabat",
    "Asia/Calcutta": "Asia/Kolkata",
    "Asia/Chongqing": "Asia/Shanghai",
    "Asia/Chungking": "Asia/Shanghai",
    "Asia/Dacca": "Asia/Dhaka",
    "Asia/Harbin": "Asia/Shanghai",
    "Asia/Kashgar": "Asia/Urumqi",
    "Asia/Katmandu": "Asia/Kathmandu",
    "Asia/Macao": "Asia/Macau",
    "Asia/Rangoon": "Asia/Yangon",
    "Asia/Saigon": "Asia/Ho_Chi_Minh",
    "Asia/Tel_Aviv": "Asia/Jerusalem",
    "Asia/Thimbu": "Asia/Thimphu",
    "Asia/Ujung_Pandang": "Asia/Makassar",
    "Asia/Ulan_Bator": "Asia/Ulaanbaatar",
    "Atlantic/Faeroe": "Atlantic/Faroe",
    "Atlantic/Jan_Mayen": "Europe/Oslo",
    "Australia/ACT": "Australia/Sydney",
    "Australia/Canberra": "Australia/Sydney",
    "Australia/Currie": "Australia/Hobart",
    "Australia/LHI": "Australia/Lord_Howe",
    "Australia/NSW": "Australia/Sydney",
    "Australia/North": "Australia/Darwin",
    "Australia/Queensland": "Australia/Brisbane",
    "Australia/South": "Australia/Adelaide",
    "Australia/Tasmania": "Australia/Hobart",
    "Australia/Victoria": "Australia/Melbourne",
    "Australia/West": "Australia/Perth",
    "Australia/Yancowinna": "Australia/Broken_Hill",
    "Brazil/Acre": "America/Rio_Branco",
    "Brazil/DeNoronha": "America/Noronha",
    "Brazil/East": "America/Sao_Paulo",
    "Brazil/West": "America/Manaus",
    "Canada/Atlantic": "America/Halifax",
    "Canada/Central": "America/Winnipeg",
    "Canada/Eastern": "America/Toronto",
    "Canada/Mountain": "America/Edmonton",
    "Canada/Newfoundland": "America/St_Johns",
    "Canada/Pacific": "America/Vancouver",
    "Canada/Saskatchewan": "America/Regina",
    "Canada/Yukon": "America/Whitehorse",
    "Chile/Continental": "America/Santiago",
    "Chile/EasterIsland": "Pacific/Easter",
    "Cuba": "America/Havana",
    "Egypt": "Africa/Cairo",
    "Eire": "Europe/Dublin",
    "Etc/UCT": "Etc/UTC",
    "Europe/Belfast": "Europe/London",
    "Europe/Tiraspol": "Europe/Chisinau",
    "GB": "Europe/London",
    "GB-Eire": "Europe/London",
    "GMT+0": "Etc/GMT",
    "GMT-0": "Etc/GMT",
    "GMT0": "Etc/GMT",
    "Greenwich": "Etc/GMT",
    "Hongkong": "Asia/Hong_Kong",
    "Iceland": "Atlantic/Reykjavik",
    "Iran": "Asia/Tehran",
    "Israel": "Asia/Jerusalem",
    "Jamaica": "America/Jamaica",
    "Japan": "Asia/Tokyo",
    "Kwajalein": "Pacific/Kwajalein",
    "Libya": "Africa/Tripoli",
    "Mexico/BajaNorte": "America/Tijuana",
    "Mexico/BajaSur": "America/Mazatlan",
    "Mexico/General": "America/Mexico_City",
    "NZ": "Pacific/Auckland",
    "NZ-CHAT": "Pacific/Chatham",
    "Navajo": "America/Denver",
    "PRC": "Asia/Shanghai",
    "Pacific/Johnston": "Pacific/Honolulu",
    "Pacific/Ponape": "Pacific/Pohnpei",
    "Pacific/Samoa": "Pacific/Pago_Pago",
    "Pacific/Truk": "Pacific/Chuuk",
    "Pacific/Yap": "Pacific/Chuuk",
    "Poland": "Europe/Warsaw",
    "Portugal": "Europe/Lisbon",
    "ROC": "Asia/Taipei",
    "ROK": "Asia/Seoul",
    "Singapore": "Asia/Singapore",
    "Turkey": "Europe/Istanbul",
    "UCT": "Etc/UTC",
    "US/Alaska": "America/Anchorage",
    "US/Aleutian": "America/Adak",
    "US/Arizona": "America/Phoenix",
    "US/Central": "America/Chicago",
    "US/East-Indiana": "America/Indiana/Indianapolis",
    "US/Eastern": "America/New_York",
    "US/Hawaii": "Pacific/Honolulu",
    "US/Indiana-Starke": "America/Indiana/Knox",
    "US/Michigan": "America/Detroit",
    "US/Mountain": "America/Denver",
    "US/Pacific": "America/Los_Angeles",
    "US/Samoa": "Pacific/Pago_Pago",
    "UTC": "Etc/UTC",
    "Universal": "Etc/UTC",
    "W-SU": "Europe/Moscow",
    "Zulu": "Etc/UTC"
  };

  // bazel-out/darwin-fastbuild/bin/packages/intl-datetimeformat/lib/src/packer.js
  function unpack(data) {
    var abbrvs = data.abbrvs.split("|");
    var offsets = data.offsets.split("|").map(function(n) {
      return parseInt(n, 36);
    });
    var packedZones = data.zones;
    var zones = {};
    for (var _i = 0, packedZones_1 = packedZones; _i < packedZones_1.length; _i++) {
      var d = packedZones_1[_i];
      var _a = d.split("|"), zone = _a[0], zoneData = _a.slice(1);
      zones[zone] = zoneData.map(function(z) {
        return z.split(",");
      }).map(function(_a2) {
        var ts = _a2[0], abbrvIndex = _a2[1], offsetIndex = _a2[2], dst = _a2[3];
        return [
          ts === "" ? -Infinity : parseInt(ts, 36),
          abbrvs[+abbrvIndex],
          offsets[+offsetIndex],
          dst === "1"
        ];
      });
    }
    return zones;
  }

  // bazel-out/darwin-fastbuild/bin/packages/intl-datetimeformat/lib/src/core.js
  var UPPERCASED_LINKS = Object.keys(links_default).reduce(function(all, l) {
    all[l.toUpperCase()] = links_default[l];
    return all;
  }, {});
  var RESOLVED_OPTIONS_KEYS = [
    "locale",
    "calendar",
    "numberingSystem",
    "dateStyle",
    "timeStyle",
    "timeZone",
    "hourCycle",
    "weekday",
    "era",
    "year",
    "month",
    "day",
    "hour",
    "minute",
    "second",
    "timeZoneName"
  ];
  var formatDescriptor = {
    enumerable: false,
    configurable: true,
    get: function() {
      if (typeof this !== "object" || !OrdinaryHasInstance(DateTimeFormat, this)) {
        throw TypeError("Intl.DateTimeFormat format property accessor called on incompatible receiver");
      }
      var internalSlots = getInternalSlots(this);
      var dtf = this;
      var boundFormat = internalSlots.boundFormat;
      if (boundFormat === void 0) {
        boundFormat = function(date) {
          var x;
          if (date === void 0) {
            x = Date.now();
          } else {
            x = Number(date);
          }
          return FormatDateTime(dtf, x, {
            getInternalSlots: getInternalSlots,
            localeData: DateTimeFormat.localeData,
            tzData: DateTimeFormat.tzData,
            getDefaultTimeZone: DateTimeFormat.getDefaultTimeZone
          });
        };
        try {
          Object.defineProperty(boundFormat, "name", {
            configurable: true,
            enumerable: false,
            writable: false,
            value: ""
          });
        } catch (e) {
        }
        internalSlots.boundFormat = boundFormat;
      }
      return boundFormat;
    }
  };
  try {
    Object.defineProperty(formatDescriptor.get, "name", {
      configurable: true,
      enumerable: false,
      writable: false,
      value: "get format"
    });
  } catch (e) {
  }
  var DateTimeFormat = function(locales, options) {
    if (!this || !OrdinaryHasInstance(DateTimeFormat, this)) {
      return new DateTimeFormat(locales, options);
    }
    InitializeDateTimeFormat(this, locales, options, {
      tzData: DateTimeFormat.tzData,
      uppercaseLinks: UPPERCASED_LINKS,
      availableLocales: DateTimeFormat.availableLocales,
      relevantExtensionKeys: DateTimeFormat.relevantExtensionKeys,
      getDefaultLocale: DateTimeFormat.getDefaultLocale,
      getDefaultTimeZone: DateTimeFormat.getDefaultTimeZone,
      getInternalSlots: getInternalSlots,
      localeData: DateTimeFormat.localeData
    });
    var internalSlots = getInternalSlots(this);
    var dataLocale = internalSlots.dataLocale;
    var dataLocaleData = DateTimeFormat.localeData[dataLocale];
    invariant(dataLocaleData !== void 0, "Cannot load locale-dependent data for " + dataLocale + ".");
  };
  defineProperty(DateTimeFormat, "supportedLocalesOf", {
    value: function supportedLocalesOf(locales, options) {
      return SupportedLocales(DateTimeFormat.availableLocales, CanonicalizeLocaleList(locales), options);
    }
  });
  defineProperty(DateTimeFormat.prototype, "resolvedOptions", {
    value: function resolvedOptions() {
      if (typeof this !== "object" || !OrdinaryHasInstance(DateTimeFormat, this)) {
        throw TypeError("Method Intl.DateTimeFormat.prototype.resolvedOptions called on incompatible receiver");
      }
      var internalSlots = getInternalSlots(this);
      var ro = {};
      for (var _i = 0, RESOLVED_OPTIONS_KEYS_1 = RESOLVED_OPTIONS_KEYS; _i < RESOLVED_OPTIONS_KEYS_1.length; _i++) {
        var key = RESOLVED_OPTIONS_KEYS_1[_i];
        var value = internalSlots[key];
        if (key === "hourCycle") {
          var hour12 = value === "h11" || value === "h12" ? true : value === "h23" || value === "h24" ? false : void 0;
          if (hour12 !== void 0) {
            ro.hour12 = hour12;
          }
        }
        if (DATE_TIME_PROPS.indexOf(key) > -1) {
          if (internalSlots.dateStyle !== void 0 || internalSlots.timeStyle !== void 0) {
            value = void 0;
          }
        }
        if (value !== void 0) {
          ro[key] = value;
        }
      }
      return ro;
    }
  });
  defineProperty(DateTimeFormat.prototype, "formatToParts", {
    value: function formatToParts2(date) {
      if (date === void 0) {
        date = Date.now();
      } else {
        date = ToNumber(date);
      }
      return FormatDateTimeToParts(this, date, {
        getInternalSlots: getInternalSlots,
        localeData: DateTimeFormat.localeData,
        tzData: DateTimeFormat.tzData,
        getDefaultTimeZone: DateTimeFormat.getDefaultTimeZone
      });
    }
  });
  defineProperty(DateTimeFormat.prototype, "formatRangeToParts", {
    value: function formatRangeToParts(startDate, endDate) {
      var dtf = this;
      if (typeof dtf !== "object") {
        throw new TypeError();
      }
      if (startDate === void 0 || endDate === void 0) {
        throw new TypeError("startDate/endDate cannot be undefined");
      }
      var x = ToNumber(startDate);
      var y = ToNumber(endDate);
      return FormatDateTimeRangeToParts(dtf, x, y, {
        getInternalSlots: getInternalSlots,
        localeData: DateTimeFormat.localeData,
        tzData: DateTimeFormat.tzData,
        getDefaultTimeZone: DateTimeFormat.getDefaultTimeZone
      });
    }
  });
  defineProperty(DateTimeFormat.prototype, "formatRange", {
    value: function formatRange(startDate, endDate) {
      var dtf = this;
      if (typeof dtf !== "object") {
        throw new TypeError();
      }
      if (startDate === void 0 || endDate === void 0) {
        throw new TypeError("startDate/endDate cannot be undefined");
      }
      var x = ToNumber(startDate);
      var y = ToNumber(endDate);
      return FormatDateTimeRange(dtf, x, y, {
        getInternalSlots: getInternalSlots,
        localeData: DateTimeFormat.localeData,
        tzData: DateTimeFormat.tzData,
        getDefaultTimeZone: DateTimeFormat.getDefaultTimeZone
      });
    }
  });
  var DEFAULT_TIMEZONE = "UTC";
  DateTimeFormat.__setDefaultTimeZone = function(timeZone) {
    if (timeZone !== void 0) {
      timeZone = String(timeZone);
      if (!IsValidTimeZoneName(timeZone, {
        tzData: DateTimeFormat.tzData,
        uppercaseLinks: UPPERCASED_LINKS
      })) {
        throw new RangeError("Invalid timeZoneName");
      }
      timeZone = CanonicalizeTimeZoneName(timeZone, {
        tzData: DateTimeFormat.tzData,
        uppercaseLinks: UPPERCASED_LINKS
      });
    } else {
      timeZone = DEFAULT_TIMEZONE;
    }
    DateTimeFormat.__defaultTimeZone = timeZone;
  };
  DateTimeFormat.relevantExtensionKeys = ["nu", "ca", "hc"];
  DateTimeFormat.__defaultTimeZone = DEFAULT_TIMEZONE;
  DateTimeFormat.getDefaultTimeZone = function() {
    return DateTimeFormat.__defaultTimeZone;
  };
  DateTimeFormat.__addLocaleData = function __addLocaleData() {
    var data = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      data[_i] = arguments[_i];
    }
    var _loop_1 = function(d2, locale2) {
      var dateFormat = d2.dateFormat, timeFormat = d2.timeFormat, dateTimeFormat = d2.dateTimeFormat, formats = d2.formats, intervalFormats = d2.intervalFormats, rawData = __rest(d2, ["dateFormat", "timeFormat", "dateTimeFormat", "formats", "intervalFormats"]);
      var processedData = __assign(__assign({}, rawData), {dateFormat: {
        full: parseDateTimeSkeleton(dateFormat.full),
        long: parseDateTimeSkeleton(dateFormat.long),
        medium: parseDateTimeSkeleton(dateFormat.medium),
        short: parseDateTimeSkeleton(dateFormat.short)
      }, timeFormat: {
        full: parseDateTimeSkeleton(timeFormat.full),
        long: parseDateTimeSkeleton(timeFormat.long),
        medium: parseDateTimeSkeleton(timeFormat.medium),
        short: parseDateTimeSkeleton(timeFormat.short)
      }, dateTimeFormat: {
        full: parseDateTimeSkeleton(dateTimeFormat.full).pattern,
        long: parseDateTimeSkeleton(dateTimeFormat.long).pattern,
        medium: parseDateTimeSkeleton(dateTimeFormat.medium).pattern,
        short: parseDateTimeSkeleton(dateTimeFormat.short).pattern
      }, formats: {}});
      var _loop_2 = function(calendar2) {
        processedData.formats[calendar2] = Object.keys(formats[calendar2]).map(function(skeleton) {
          return parseDateTimeSkeleton(skeleton, formats[calendar2][skeleton], intervalFormats[skeleton], intervalFormats.intervalFormatFallback);
        });
      };
      for (var calendar in formats) {
        _loop_2(calendar);
      }
      var minimizedLocale = new Intl.Locale(locale2).minimize().toString();
      DateTimeFormat.localeData[locale2] = DateTimeFormat.localeData[minimizedLocale] = processedData;
      DateTimeFormat.availableLocales.add(locale2);
      DateTimeFormat.availableLocales.add(minimizedLocale);
      if (!DateTimeFormat.__defaultLocale) {
        DateTimeFormat.__defaultLocale = minimizedLocale;
      }
    };
    for (var _a = 0, data_1 = data; _a < data_1.length; _a++) {
      var _b = data_1[_a], d = _b.data, locale = _b.locale;
      _loop_1(d, locale);
    }
  };
  Object.defineProperty(DateTimeFormat.prototype, "format", formatDescriptor);
  DateTimeFormat.__defaultLocale = "";
  DateTimeFormat.localeData = {};
  DateTimeFormat.availableLocales = new Set();
  DateTimeFormat.getDefaultLocale = function() {
    return DateTimeFormat.__defaultLocale;
  };
  DateTimeFormat.polyfilled = true;
  DateTimeFormat.tzData = {};
  DateTimeFormat.__addTZData = function(d) {
    DateTimeFormat.tzData = unpack(d);
  };
  try {
    if (typeof Symbol !== "undefined") {
      Object.defineProperty(DateTimeFormat.prototype, Symbol.toStringTag, {
        value: "Intl.DateTimeFormat",
        writable: false,
        enumerable: false,
        configurable: true
      });
    }
    Object.defineProperty(DateTimeFormat.prototype.constructor, "length", {
      value: 1,
      writable: false,
      enumerable: false,
      configurable: true
    });
  } catch (e) {
  }

  // bazel-out/darwin-fastbuild/bin/packages/intl-datetimeformat/lib/should-polyfill.js
  function supportsDateStyle() {
    try {
      return !!new Intl.DateTimeFormat(void 0, {
        dateStyle: "short"
      }).resolvedOptions().dateStyle;
    } catch (e) {
      return false;
    }
  }
  function hasChromeLt71Bug() {
    try {
      return new Intl.DateTimeFormat("en", {
        hourCycle: "h11",
        hour: "numeric"
      }).formatToParts(0)[2].type !== "dayPeriod";
    } catch (e) {
      return false;
    }
  }
  function hasUnthrownDateTimeStyleBug() {
    try {
      return !!new Intl.DateTimeFormat("en", {
        dateStyle: "short",
        hour: "numeric"
      }).format(new Date(0));
    } catch (e) {
      return false;
    }
  }
  function shouldPolyfill() {
    return !("DateTimeFormat" in Intl) || !("formatToParts" in Intl.DateTimeFormat.prototype) || !("formatRange" in Intl.DateTimeFormat.prototype) || hasChromeLt71Bug() || hasUnthrownDateTimeStyleBug() || !supportsDateStyle();
  }

  // bazel-out/darwin-fastbuild/bin/packages/intl-datetimeformat/lib/src/to_locale_string.js
  function toLocaleString(x, locales, options) {
    var dtf = new DateTimeFormat(locales, options);
    return dtf.format(x);
  }
  function toLocaleDateString(x, locales, options) {
    var dtf = new DateTimeFormat(locales, ToDateTimeOptions(options, "date", "date"));
    return dtf.format(x);
  }
  function toLocaleTimeString(x, locales, options) {
    var dtf = new DateTimeFormat(locales, ToDateTimeOptions(options, "time", "time"));
    return dtf.format(x);
  }

  // bazel-out/darwin-fastbuild/bin/packages/intl-datetimeformat/lib/polyfill.js
  if (shouldPolyfill()) {
    defineProperty(Intl, "DateTimeFormat", {value: DateTimeFormat});
    defineProperty(Date.prototype, "toLocaleString", {
      value: function toLocaleString2(locales, options) {
        return toLocaleString(this, locales, options);
      }
    });
    defineProperty(Date.prototype, "toLocaleDateString", {
      value: function toLocaleDateString2(locales, options) {
        return toLocaleDateString(this, locales, options);
      }
    });
    defineProperty(Date.prototype, "toLocaleTimeString", {
      value: function toLocaleTimeString2(locales, options) {
        return toLocaleTimeString(this, locales, options);
      }
    });
  }
})();
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */


}

if (!("Intl"in self&&Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf&&function(){try{return 1===Intl.PluralRules.supportedLocalesOf("en").length}catch(l){return!1}}()
)) {

// Intl.PluralRules.~locale.en
/* @generated */
// prettier-ignore
if (Intl.PluralRules && typeof Intl.PluralRules.__addLocaleData === 'function') {
  Intl.PluralRules.__addLocaleData({"data":{"categories":{"cardinal":["one","other"],"ordinal":["one","two","few","other"]},"fn":function(n, ord) {
  var s = String(n).split('.'), v0 = !s[1], t0 = Number(s[0]) == n, n10 = t0 && s[0].slice(-1), n100 = t0 && s[0].slice(-2);
  if (ord) return n10 == 1 && n100 != 11 ? 'one'
    : n10 == 2 && n100 != 12 ? 'two'
    : n10 == 3 && n100 != 13 ? 'few'
    : 'other';
  return n == 1 && v0 ? 'one' : 'other';
}},"locale":"en"})
}

}

if (!("Intl"in self&&Intl.NumberFormat&&function(){try{new Intl.NumberFormat("en",{style:"unit",unit:"byte"})}catch(t){return!1}return!0}()&&Intl.NumberFormat.supportedLocalesOf("en").length
)) {

// Intl.NumberFormat.~locale.en
/* @generated */
// prettier-ignore
if (Intl.NumberFormat && typeof Intl.NumberFormat.__addLocaleData === 'function') {
  Intl.NumberFormat.__addLocaleData({"data":{"units":{"simple":{"degree":{"long":{"other":"{0} degrees","one":"{0} degree"},"short":{"other":"{0} deg"},"narrow":{"other":"{0}°"},"perUnit":{}},"hectare":{"long":{"other":"{0} hectares","one":"{0} hectare"},"short":{"other":"{0} ha"},"narrow":{"other":"{0}ha"},"perUnit":{}},"acre":{"long":{"other":"{0} acres","one":"{0} acre"},"short":{"other":"{0} ac"},"narrow":{"other":"{0}ac"},"perUnit":{}},"percent":{"long":{"other":"{0} percent"},"short":{"other":"{0}%"},"narrow":{"other":"{0}%"},"perUnit":{}},"liter-per-kilometer":{"long":{"other":"{0} liters per kilometer","one":"{0} liter per kilometer"},"short":{"other":"{0} L/km"},"narrow":{"other":"{0}L/km"},"perUnit":{}},"mile-per-gallon":{"long":{"other":"{0} miles per gallon","one":"{0} mile per gallon"},"short":{"other":"{0} mpg"},"narrow":{"other":"{0}mpg"},"perUnit":{}},"petabyte":{"long":{"other":"{0} petabytes","one":"{0} petabyte"},"short":{"other":"{0} PB"},"narrow":{"other":"{0}PB"},"perUnit":{}},"terabyte":{"long":{"other":"{0} terabytes","one":"{0} terabyte"},"short":{"other":"{0} TB"},"narrow":{"other":"{0}TB"},"perUnit":{}},"terabit":{"long":{"other":"{0} terabits","one":"{0} terabit"},"short":{"other":"{0} Tb"},"narrow":{"other":"{0}Tb"},"perUnit":{}},"gigabyte":{"long":{"other":"{0} gigabytes","one":"{0} gigabyte"},"short":{"other":"{0} GB"},"narrow":{"other":"{0}GB"},"perUnit":{}},"gigabit":{"long":{"other":"{0} gigabits","one":"{0} gigabit"},"short":{"other":"{0} Gb"},"narrow":{"other":"{0}Gb"},"perUnit":{}},"megabyte":{"long":{"other":"{0} megabytes","one":"{0} megabyte"},"short":{"other":"{0} MB"},"narrow":{"other":"{0}MB"},"perUnit":{}},"megabit":{"long":{"other":"{0} megabits","one":"{0} megabit"},"short":{"other":"{0} Mb"},"narrow":{"other":"{0}Mb"},"perUnit":{}},"kilobyte":{"long":{"other":"{0} kilobytes","one":"{0} kilobyte"},"short":{"other":"{0} kB"},"narrow":{"other":"{0}kB"},"perUnit":{}},"kilobit":{"long":{"other":"{0} kilobits","one":"{0} kilobit"},"short":{"other":"{0} kb"},"narrow":{"other":"{0}kb"},"perUnit":{}},"byte":{"long":{"other":"{0} bytes","one":"{0} byte"},"short":{"other":"{0} byte"},"narrow":{"other":"{0}B"},"perUnit":{}},"bit":{"long":{"other":"{0} bits","one":"{0} bit"},"short":{"other":"{0} bit"},"narrow":{"other":"{0}bit"},"perUnit":{}},"year":{"long":{"other":"{0} years","one":"{0} year"},"short":{"other":"{0} yrs","one":"{0} yr"},"narrow":{"other":"{0}y"},"perUnit":{"long":"{0} per year","short":"{0}/y","narrow":"{0}/y"}},"month":{"long":{"other":"{0} months","one":"{0} month"},"short":{"other":"{0} mths","one":"{0} mth"},"narrow":{"other":"{0}m"},"perUnit":{"long":"{0} per month","short":"{0}/m","narrow":"{0}/m"}},"week":{"long":{"other":"{0} weeks","one":"{0} week"},"short":{"other":"{0} wks","one":"{0} wk"},"narrow":{"other":"{0}w"},"perUnit":{"long":"{0} per week","short":"{0}/w","narrow":"{0}/w"}},"day":{"long":{"other":"{0} days","one":"{0} day"},"short":{"other":"{0} days","one":"{0} day"},"narrow":{"other":"{0}d"},"perUnit":{"long":"{0} per day","short":"{0}/d","narrow":"{0}/d"}},"hour":{"long":{"other":"{0} hours","one":"{0} hour"},"short":{"other":"{0} hr"},"narrow":{"other":"{0}h"},"perUnit":{"long":"{0} per hour","short":"{0}/h","narrow":"{0}/h"}},"minute":{"long":{"other":"{0} minutes","one":"{0} minute"},"short":{"other":"{0} min"},"narrow":{"other":"{0}m"},"perUnit":{"long":"{0} per minute","short":"{0}/min","narrow":"{0}/min"}},"second":{"long":{"other":"{0} seconds","one":"{0} second"},"short":{"other":"{0} sec"},"narrow":{"other":"{0}s"},"perUnit":{"long":"{0} per second","short":"{0}/s","narrow":"{0}/s"}},"millisecond":{"long":{"other":"{0} milliseconds","one":"{0} millisecond"},"short":{"other":"{0} ms"},"narrow":{"other":"{0}ms"},"perUnit":{}},"kilometer":{"long":{"other":"{0} kilometers","one":"{0} kilometer"},"short":{"other":"{0} km"},"narrow":{"other":"{0}km"},"perUnit":{"long":"{0} per kilometer","short":"{0}/km","narrow":"{0}/km"}},"meter":{"long":{"other":"{0} meters","one":"{0} meter"},"short":{"other":"{0} m"},"narrow":{"other":"{0}m"},"perUnit":{"long":"{0} per meter","short":"{0}/m","narrow":"{0}/m"}},"centimeter":{"long":{"other":"{0} centimeters","one":"{0} centimeter"},"short":{"other":"{0} cm"},"narrow":{"other":"{0}cm"},"perUnit":{"long":"{0} per centimeter","short":"{0}/cm","narrow":"{0}/cm"}},"millimeter":{"long":{"other":"{0} millimeters","one":"{0} millimeter"},"short":{"other":"{0} mm"},"narrow":{"other":"{0}mm"},"perUnit":{}},"mile":{"long":{"other":"{0} miles","one":"{0} mile"},"short":{"other":"{0} mi"},"narrow":{"other":"{0}mi"},"perUnit":{}},"yard":{"long":{"other":"{0} yards","one":"{0} yard"},"short":{"other":"{0} yd"},"narrow":{"other":"{0}yd"},"perUnit":{}},"foot":{"long":{"other":"{0} feet","one":"{0} foot"},"short":{"other":"{0} ft"},"narrow":{"other":"{0}′"},"perUnit":{"long":"{0} per foot","short":"{0}/ft","narrow":"{0}/ft"}},"inch":{"long":{"other":"{0} inches","one":"{0} inch"},"short":{"other":"{0} in"},"narrow":{"other":"{0}″"},"perUnit":{"long":"{0} per inch","short":"{0}/in","narrow":"{0}/in"}},"mile-scandinavian":{"long":{"other":"{0} miles-scandinavian","one":"{0} mile-scandinavian"},"short":{"other":"{0} smi"},"narrow":{"other":"{0}smi"},"perUnit":{}},"kilogram":{"long":{"other":"{0} kilograms","one":"{0} kilogram"},"short":{"other":"{0} kg"},"narrow":{"other":"{0}kg"},"perUnit":{"long":"{0} per kilogram","short":"{0}/kg","narrow":"{0}/kg"}},"gram":{"long":{"other":"{0} grams","one":"{0} gram"},"short":{"other":"{0} g"},"narrow":{"other":"{0}g"},"perUnit":{"long":"{0} per gram","short":"{0}/g","narrow":"{0}/g"}},"stone":{"long":{"other":"{0} stones","one":"{0} stone"},"short":{"other":"{0} st"},"narrow":{"other":"{0}st"},"perUnit":{}},"pound":{"long":{"other":"{0} pounds","one":"{0} pound"},"short":{"other":"{0} lb"},"narrow":{"other":"{0}#"},"perUnit":{"long":"{0} per pound","short":"{0}/lb","narrow":"{0}/lb"}},"ounce":{"long":{"other":"{0} ounces","one":"{0} ounce"},"short":{"other":"{0} oz"},"narrow":{"other":"{0}oz"},"perUnit":{"long":"{0} per ounce","short":"{0}/oz","narrow":"{0}/oz"}},"kilometer-per-hour":{"long":{"other":"{0} kilometers per hour","one":"{0} kilometer per hour"},"short":{"other":"{0} km/h"},"narrow":{"other":"{0}km/h"},"perUnit":{}},"meter-per-second":{"long":{"other":"{0} meters per second","one":"{0} meter per second"},"short":{"other":"{0} m/s"},"narrow":{"other":"{0}m/s"},"perUnit":{}},"mile-per-hour":{"long":{"other":"{0} miles per hour","one":"{0} mile per hour"},"short":{"other":"{0} mph"},"narrow":{"other":"{0}mph"},"perUnit":{}},"celsius":{"long":{"other":"{0} degrees Celsius","one":"{0} degree Celsius"},"short":{"other":"{0}°C"},"narrow":{"other":"{0}°C"},"perUnit":{}},"fahrenheit":{"long":{"other":"{0} degrees Fahrenheit","one":"{0} degree Fahrenheit"},"short":{"other":"{0}°F"},"narrow":{"other":"{0}°"},"perUnit":{}},"liter":{"long":{"other":"{0} liters","one":"{0} liter"},"short":{"other":"{0} L"},"narrow":{"other":"{0}L"},"perUnit":{"long":"{0} per liter","short":"{0}/L","narrow":"{0}/L"}},"milliliter":{"long":{"other":"{0} milliliters","one":"{0} milliliter"},"short":{"other":"{0} mL"},"narrow":{"other":"{0}mL"},"perUnit":{}},"gallon":{"long":{"other":"{0} gallons","one":"{0} gallon"},"short":{"other":"{0} gal"},"narrow":{"other":"{0}gal"},"perUnit":{"long":"{0} per gallon","short":"{0}/gal US","narrow":"{0}/gal"}},"fluid-ounce":{"long":{"other":"{0} fluid ounces","one":"{0} fluid ounce"},"short":{"other":"{0} fl oz"},"narrow":{"other":"{0}fl oz"},"perUnit":{}}},"compound":{"per":{"long":"{0} per {1}","short":"{0}/{1}","narrow":"{0}/{1}"}}},"currencies":{"ADP":{"displayName":{"other":"Andorran pesetas","one":"Andorran peseta"},"symbol":"ADP","narrow":"ADP"},"AED":{"displayName":{"other":"UAE dirhams","one":"UAE dirham"},"symbol":"AED","narrow":"AED"},"AFA":{"displayName":{"other":"Afghan afghanis (1927–2002)","one":"Afghan afghani (1927–2002)"},"symbol":"AFA","narrow":"AFA"},"AFN":{"displayName":{"other":"Afghan Afghanis","one":"Afghan Afghani"},"symbol":"AFN","narrow":"؋"},"ALK":{"displayName":{"other":"Albanian lekë (1946–1965)","one":"Albanian lek (1946–1965)"},"symbol":"ALK","narrow":"ALK"},"ALL":{"displayName":{"other":"Albanian lekë","one":"Albanian lek"},"symbol":"ALL","narrow":"ALL"},"AMD":{"displayName":{"other":"Armenian drams","one":"Armenian dram"},"symbol":"AMD","narrow":"֏"},"ANG":{"displayName":{"other":"Netherlands Antillean guilders","one":"Netherlands Antillean guilder"},"symbol":"ANG","narrow":"ANG"},"AOA":{"displayName":{"other":"Angolan kwanzas","one":"Angolan kwanza"},"symbol":"AOA","narrow":"Kz"},"AOK":{"displayName":{"other":"Angolan kwanzas (1977–1991)","one":"Angolan kwanza (1977–1991)"},"symbol":"AOK","narrow":"AOK"},"AON":{"displayName":{"other":"Angolan new kwanzas (1990–2000)","one":"Angolan new kwanza (1990–2000)"},"symbol":"AON","narrow":"AON"},"AOR":{"displayName":{"other":"Angolan readjusted kwanzas (1995–1999)","one":"Angolan readjusted kwanza (1995–1999)"},"symbol":"AOR","narrow":"AOR"},"ARA":{"displayName":{"other":"Argentine australs","one":"Argentine austral"},"symbol":"ARA","narrow":"ARA"},"ARL":{"displayName":{"other":"Argentine pesos ley (1970–1983)","one":"Argentine peso ley (1970–1983)"},"symbol":"ARL","narrow":"ARL"},"ARM":{"displayName":{"other":"Argentine pesos (1881–1970)","one":"Argentine peso (1881–1970)"},"symbol":"ARM","narrow":"ARM"},"ARP":{"displayName":{"other":"Argentine pesos (1983–1985)","one":"Argentine peso (1983–1985)"},"symbol":"ARP","narrow":"ARP"},"ARS":{"displayName":{"other":"Argentine pesos","one":"Argentine peso"},"symbol":"ARS","narrow":"$"},"ATS":{"displayName":{"other":"Austrian schillings","one":"Austrian schilling"},"symbol":"ATS","narrow":"ATS"},"AUD":{"displayName":{"other":"Australian dollars","one":"Australian dollar"},"symbol":"A$","narrow":"$"},"AWG":{"displayName":{"other":"Aruban florin"},"symbol":"AWG","narrow":"AWG"},"AZM":{"displayName":{"other":"Azerbaijani manats (1993–2006)","one":"Azerbaijani manat (1993–2006)"},"symbol":"AZM","narrow":"AZM"},"AZN":{"displayName":{"other":"Azerbaijani manats","one":"Azerbaijani manat"},"symbol":"AZN","narrow":"₼"},"BAD":{"displayName":{"other":"Bosnia-Herzegovina dinars (1992–1994)","one":"Bosnia-Herzegovina dinar (1992–1994)"},"symbol":"BAD","narrow":"BAD"},"BAM":{"displayName":{"other":"Bosnia-Herzegovina convertible marks","one":"Bosnia-Herzegovina convertible mark"},"symbol":"BAM","narrow":"KM"},"BAN":{"displayName":{"other":"Bosnia-Herzegovina new dinars (1994–1997)","one":"Bosnia-Herzegovina new dinar (1994–1997)"},"symbol":"BAN","narrow":"BAN"},"BBD":{"displayName":{"other":"Barbadian dollars","one":"Barbadian dollar"},"symbol":"BBD","narrow":"$"},"BDT":{"displayName":{"other":"Bangladeshi takas","one":"Bangladeshi taka"},"symbol":"BDT","narrow":"৳"},"BEC":{"displayName":{"other":"Belgian francs (convertible)","one":"Belgian franc (convertible)"},"symbol":"BEC","narrow":"BEC"},"BEF":{"displayName":{"other":"Belgian francs","one":"Belgian franc"},"symbol":"BEF","narrow":"BEF"},"BEL":{"displayName":{"other":"Belgian francs (financial)","one":"Belgian franc (financial)"},"symbol":"BEL","narrow":"BEL"},"BGL":{"displayName":{"other":"Bulgarian hard leva","one":"Bulgarian hard lev"},"symbol":"BGL","narrow":"BGL"},"BGM":{"displayName":{"other":"Bulgarian socialist leva","one":"Bulgarian socialist lev"},"symbol":"BGM","narrow":"BGM"},"BGN":{"displayName":{"other":"Bulgarian leva","one":"Bulgarian lev"},"symbol":"BGN","narrow":"BGN"},"BGO":{"displayName":{"other":"Bulgarian leva (1879–1952)","one":"Bulgarian lev (1879–1952)"},"symbol":"BGO","narrow":"BGO"},"BHD":{"displayName":{"other":"Bahraini dinars","one":"Bahraini dinar"},"symbol":"BHD","narrow":"BHD"},"BIF":{"displayName":{"other":"Burundian francs","one":"Burundian franc"},"symbol":"BIF","narrow":"BIF"},"BMD":{"displayName":{"other":"Bermudan dollars","one":"Bermudan dollar"},"symbol":"BMD","narrow":"$"},"BND":{"displayName":{"other":"Brunei dollars","one":"Brunei dollar"},"symbol":"BND","narrow":"$"},"BOB":{"displayName":{"other":"Bolivian bolivianos","one":"Bolivian boliviano"},"symbol":"BOB","narrow":"Bs"},"BOL":{"displayName":{"other":"Bolivian bolivianos (1863–1963)","one":"Bolivian boliviano (1863–1963)"},"symbol":"BOL","narrow":"BOL"},"BOP":{"displayName":{"other":"Bolivian pesos","one":"Bolivian peso"},"symbol":"BOP","narrow":"BOP"},"BOV":{"displayName":{"other":"Bolivian mvdols","one":"Bolivian mvdol"},"symbol":"BOV","narrow":"BOV"},"BRB":{"displayName":{"other":"Brazilian new cruzeiros (1967–1986)","one":"Brazilian new cruzeiro (1967–1986)"},"symbol":"BRB","narrow":"BRB"},"BRC":{"displayName":{"other":"Brazilian cruzados (1986–1989)","one":"Brazilian cruzado (1986–1989)"},"symbol":"BRC","narrow":"BRC"},"BRE":{"displayName":{"other":"Brazilian cruzeiros (1990–1993)","one":"Brazilian cruzeiro (1990–1993)"},"symbol":"BRE","narrow":"BRE"},"BRL":{"displayName":{"other":"Brazilian reals","one":"Brazilian real"},"symbol":"R$","narrow":"R$"},"BRN":{"displayName":{"other":"Brazilian new cruzados (1989–1990)","one":"Brazilian new cruzado (1989–1990)"},"symbol":"BRN","narrow":"BRN"},"BRR":{"displayName":{"other":"Brazilian cruzeiros (1993–1994)","one":"Brazilian cruzeiro (1993–1994)"},"symbol":"BRR","narrow":"BRR"},"BRZ":{"displayName":{"other":"Brazilian cruzeiros (1942–1967)","one":"Brazilian cruzeiro (1942–1967)"},"symbol":"BRZ","narrow":"BRZ"},"BSD":{"displayName":{"other":"Bahamian dollars","one":"Bahamian dollar"},"symbol":"BSD","narrow":"$"},"BTN":{"displayName":{"other":"Bhutanese ngultrums","one":"Bhutanese ngultrum"},"symbol":"BTN","narrow":"BTN"},"BUK":{"displayName":{"other":"Burmese kyats","one":"Burmese kyat"},"symbol":"BUK","narrow":"BUK"},"BWP":{"displayName":{"other":"Botswanan pulas","one":"Botswanan pula"},"symbol":"BWP","narrow":"P"},"BYB":{"displayName":{"other":"Belarusian rubles (1994–1999)","one":"Belarusian ruble (1994–1999)"},"symbol":"BYB","narrow":"BYB"},"BYN":{"displayName":{"other":"Belarusian rubles","one":"Belarusian ruble"},"symbol":"BYN","narrow":"р."},"BYR":{"displayName":{"other":"Belarusian rubles (2000–2016)","one":"Belarusian ruble (2000–2016)"},"symbol":"BYR","narrow":"BYR"},"BZD":{"displayName":{"other":"Belize dollars","one":"Belize dollar"},"symbol":"BZD","narrow":"$"},"CAD":{"displayName":{"other":"Canadian dollars","one":"Canadian dollar"},"symbol":"CA$","narrow":"$"},"CDF":{"displayName":{"other":"Congolese francs","one":"Congolese franc"},"symbol":"CDF","narrow":"CDF"},"CHE":{"displayName":{"other":"WIR euros","one":"WIR euro"},"symbol":"CHE","narrow":"CHE"},"CHF":{"displayName":{"other":"Swiss francs","one":"Swiss franc"},"symbol":"CHF","narrow":"CHF"},"CHW":{"displayName":{"other":"WIR francs","one":"WIR franc"},"symbol":"CHW","narrow":"CHW"},"CLE":{"displayName":{"other":"Chilean escudos","one":"Chilean escudo"},"symbol":"CLE","narrow":"CLE"},"CLF":{"displayName":{"other":"Chilean units of account (UF)","one":"Chilean unit of account (UF)"},"symbol":"CLF","narrow":"CLF"},"CLP":{"displayName":{"other":"Chilean pesos","one":"Chilean peso"},"symbol":"CLP","narrow":"$"},"CNH":{"displayName":{"other":"Chinese yuan (offshore)"},"symbol":"CNH","narrow":"CNH"},"CNX":{"displayName":{"other":"Chinese People’s Bank dollars","one":"Chinese People’s Bank dollar"},"symbol":"CNX","narrow":"CNX"},"CNY":{"displayName":{"other":"Chinese yuan"},"symbol":"CN¥","narrow":"¥"},"COP":{"displayName":{"other":"Colombian pesos","one":"Colombian peso"},"symbol":"COP","narrow":"$"},"COU":{"displayName":{"other":"Colombian real value units","one":"Colombian real value unit"},"symbol":"COU","narrow":"COU"},"CRC":{"displayName":{"other":"Costa Rican colóns","one":"Costa Rican colón"},"symbol":"CRC","narrow":"₡"},"CSD":{"displayName":{"other":"Serbian dinars (2002–2006)","one":"Serbian dinar (2002–2006)"},"symbol":"CSD","narrow":"CSD"},"CSK":{"displayName":{"other":"Czechoslovak hard korunas","one":"Czechoslovak hard koruna"},"symbol":"CSK","narrow":"CSK"},"CUC":{"displayName":{"other":"Cuban convertible pesos","one":"Cuban convertible peso"},"symbol":"CUC","narrow":"$"},"CUP":{"displayName":{"other":"Cuban pesos","one":"Cuban peso"},"symbol":"CUP","narrow":"$"},"CVE":{"displayName":{"other":"Cape Verdean escudos","one":"Cape Verdean escudo"},"symbol":"CVE","narrow":"CVE"},"CYP":{"displayName":{"other":"Cypriot pounds","one":"Cypriot pound"},"symbol":"CYP","narrow":"CYP"},"CZK":{"displayName":{"other":"Czech korunas","one":"Czech koruna"},"symbol":"CZK","narrow":"Kč"},"DDM":{"displayName":{"other":"East German marks","one":"East German mark"},"symbol":"DDM","narrow":"DDM"},"DEM":{"displayName":{"other":"German marks","one":"German mark"},"symbol":"DEM","narrow":"DEM"},"DJF":{"displayName":{"other":"Djiboutian francs","one":"Djiboutian franc"},"symbol":"DJF","narrow":"DJF"},"DKK":{"displayName":{"other":"Danish kroner","one":"Danish krone"},"symbol":"DKK","narrow":"kr"},"DOP":{"displayName":{"other":"Dominican pesos","one":"Dominican peso"},"symbol":"DOP","narrow":"$"},"DZD":{"displayName":{"other":"Algerian dinars","one":"Algerian dinar"},"symbol":"DZD","narrow":"DZD"},"ECS":{"displayName":{"other":"Ecuadorian sucres","one":"Ecuadorian sucre"},"symbol":"ECS","narrow":"ECS"},"ECV":{"displayName":{"other":"Ecuadorian units of constant value","one":"Ecuadorian unit of constant value"},"symbol":"ECV","narrow":"ECV"},"EEK":{"displayName":{"other":"Estonian kroons","one":"Estonian kroon"},"symbol":"EEK","narrow":"EEK"},"EGP":{"displayName":{"other":"Egyptian pounds","one":"Egyptian pound"},"symbol":"EGP","narrow":"E£"},"ERN":{"displayName":{"other":"Eritrean nakfas","one":"Eritrean nakfa"},"symbol":"ERN","narrow":"ERN"},"ESA":{"displayName":{"other":"Spanish pesetas (A account)","one":"Spanish peseta (A account)"},"symbol":"ESA","narrow":"ESA"},"ESB":{"displayName":{"other":"Spanish pesetas (convertible account)","one":"Spanish peseta (convertible account)"},"symbol":"ESB","narrow":"ESB"},"ESP":{"displayName":{"other":"Spanish pesetas","one":"Spanish peseta"},"symbol":"ESP","narrow":"₧"},"ETB":{"displayName":{"other":"Ethiopian birrs","one":"Ethiopian birr"},"symbol":"ETB","narrow":"ETB"},"EUR":{"displayName":{"other":"euros","one":"euro"},"symbol":"€","narrow":"€"},"FIM":{"displayName":{"other":"Finnish markkas","one":"Finnish markka"},"symbol":"FIM","narrow":"FIM"},"FJD":{"displayName":{"other":"Fijian dollars","one":"Fijian dollar"},"symbol":"FJD","narrow":"$"},"FKP":{"displayName":{"other":"Falkland Islands pounds","one":"Falkland Islands pound"},"symbol":"FKP","narrow":"£"},"FRF":{"displayName":{"other":"French francs","one":"French franc"},"symbol":"FRF","narrow":"FRF"},"GBP":{"displayName":{"other":"British pounds","one":"British pound"},"symbol":"£","narrow":"£"},"GEK":{"displayName":{"other":"Georgian kupon larits","one":"Georgian kupon larit"},"symbol":"GEK","narrow":"GEK"},"GEL":{"displayName":{"other":"Georgian laris","one":"Georgian lari"},"symbol":"GEL","narrow":"₾"},"GHC":{"displayName":{"other":"Ghanaian cedis (1979–2007)","one":"Ghanaian cedi (1979–2007)"},"symbol":"GHC","narrow":"GHC"},"GHS":{"displayName":{"other":"Ghanaian cedis","one":"Ghanaian cedi"},"symbol":"GHS","narrow":"GH₵"},"GIP":{"displayName":{"other":"Gibraltar pounds","one":"Gibraltar pound"},"symbol":"GIP","narrow":"£"},"GMD":{"displayName":{"other":"Gambian dalasis","one":"Gambian dalasi"},"symbol":"GMD","narrow":"GMD"},"GNF":{"displayName":{"other":"Guinean francs","one":"Guinean franc"},"symbol":"GNF","narrow":"FG"},"GNS":{"displayName":{"other":"Guinean sylis","one":"Guinean syli"},"symbol":"GNS","narrow":"GNS"},"GQE":{"displayName":{"other":"Equatorial Guinean ekwele"},"symbol":"GQE","narrow":"GQE"},"GRD":{"displayName":{"other":"Greek drachmas","one":"Greek drachma"},"symbol":"GRD","narrow":"GRD"},"GTQ":{"displayName":{"other":"Guatemalan quetzals","one":"Guatemalan quetzal"},"symbol":"GTQ","narrow":"Q"},"GWE":{"displayName":{"other":"Portuguese Guinea escudos","one":"Portuguese Guinea escudo"},"symbol":"GWE","narrow":"GWE"},"GWP":{"displayName":{"other":"Guinea-Bissau pesos","one":"Guinea-Bissau peso"},"symbol":"GWP","narrow":"GWP"},"GYD":{"displayName":{"other":"Guyanaese dollars","one":"Guyanaese dollar"},"symbol":"GYD","narrow":"$"},"HKD":{"displayName":{"other":"Hong Kong dollars","one":"Hong Kong dollar"},"symbol":"HK$","narrow":"$"},"HNL":{"displayName":{"other":"Honduran lempiras","one":"Honduran lempira"},"symbol":"HNL","narrow":"L"},"HRD":{"displayName":{"other":"Croatian dinars","one":"Croatian dinar"},"symbol":"HRD","narrow":"HRD"},"HRK":{"displayName":{"other":"Croatian kunas","one":"Croatian kuna"},"symbol":"HRK","narrow":"kn"},"HTG":{"displayName":{"other":"Haitian gourdes","one":"Haitian gourde"},"symbol":"HTG","narrow":"HTG"},"HUF":{"displayName":{"other":"Hungarian forints","one":"Hungarian forint"},"symbol":"HUF","narrow":"Ft"},"IDR":{"displayName":{"other":"Indonesian rupiahs","one":"Indonesian rupiah"},"symbol":"IDR","narrow":"Rp"},"IEP":{"displayName":{"other":"Irish pounds","one":"Irish pound"},"symbol":"IEP","narrow":"IEP"},"ILP":{"displayName":{"other":"Israeli pounds","one":"Israeli pound"},"symbol":"ILP","narrow":"ILP"},"ILR":{"displayName":{"other":"Israeli shekels (1980–1985)","one":"Israeli shekel (1980–1985)"},"symbol":"ILR","narrow":"ILR"},"ILS":{"displayName":{"other":"Israeli new shekels","one":"Israeli new shekel"},"symbol":"₪","narrow":"₪"},"INR":{"displayName":{"other":"Indian rupees","one":"Indian rupee"},"symbol":"₹","narrow":"₹"},"IQD":{"displayName":{"other":"Iraqi dinars","one":"Iraqi dinar"},"symbol":"IQD","narrow":"IQD"},"IRR":{"displayName":{"other":"Iranian rials","one":"Iranian rial"},"symbol":"IRR","narrow":"IRR"},"ISJ":{"displayName":{"other":"Icelandic krónur (1918–1981)","one":"Icelandic króna (1918–1981)"},"symbol":"ISJ","narrow":"ISJ"},"ISK":{"displayName":{"other":"Icelandic krónur","one":"Icelandic króna"},"symbol":"ISK","narrow":"kr"},"ITL":{"displayName":{"other":"Italian liras","one":"Italian lira"},"symbol":"ITL","narrow":"ITL"},"JMD":{"displayName":{"other":"Jamaican dollars","one":"Jamaican dollar"},"symbol":"JMD","narrow":"$"},"JOD":{"displayName":{"other":"Jordanian dinars","one":"Jordanian dinar"},"symbol":"JOD","narrow":"JOD"},"JPY":{"displayName":{"other":"Japanese yen"},"symbol":"¥","narrow":"¥"},"KES":{"displayName":{"other":"Kenyan shillings","one":"Kenyan shilling"},"symbol":"KES","narrow":"KES"},"KGS":{"displayName":{"other":"Kyrgystani soms","one":"Kyrgystani som"},"symbol":"KGS","narrow":"KGS"},"KHR":{"displayName":{"other":"Cambodian riels","one":"Cambodian riel"},"symbol":"KHR","narrow":"៛"},"KMF":{"displayName":{"other":"Comorian francs","one":"Comorian franc"},"symbol":"KMF","narrow":"CF"},"KPW":{"displayName":{"other":"North Korean won"},"symbol":"KPW","narrow":"₩"},"KRH":{"displayName":{"other":"South Korean hwan (1953–1962)"},"symbol":"KRH","narrow":"KRH"},"KRO":{"displayName":{"other":"South Korean won (1945–1953)"},"symbol":"KRO","narrow":"KRO"},"KRW":{"displayName":{"other":"South Korean won"},"symbol":"₩","narrow":"₩"},"KWD":{"displayName":{"other":"Kuwaiti dinars","one":"Kuwaiti dinar"},"symbol":"KWD","narrow":"KWD"},"KYD":{"displayName":{"other":"Cayman Islands dollars","one":"Cayman Islands dollar"},"symbol":"KYD","narrow":"$"},"KZT":{"displayName":{"other":"Kazakhstani tenges","one":"Kazakhstani tenge"},"symbol":"KZT","narrow":"₸"},"LAK":{"displayName":{"other":"Laotian kips","one":"Laotian kip"},"symbol":"LAK","narrow":"₭"},"LBP":{"displayName":{"other":"Lebanese pounds","one":"Lebanese pound"},"symbol":"LBP","narrow":"L£"},"LKR":{"displayName":{"other":"Sri Lankan rupees","one":"Sri Lankan rupee"},"symbol":"LKR","narrow":"Rs"},"LRD":{"displayName":{"other":"Liberian dollars","one":"Liberian dollar"},"symbol":"LRD","narrow":"$"},"LSL":{"displayName":{"other":"Lesotho lotis","one":"Lesotho loti"},"symbol":"LSL","narrow":"LSL"},"LTL":{"displayName":{"other":"Lithuanian litai","one":"Lithuanian litas"},"symbol":"LTL","narrow":"Lt"},"LTT":{"displayName":{"other":"Lithuanian talonases","one":"Lithuanian talonas"},"symbol":"LTT","narrow":"LTT"},"LUC":{"displayName":{"other":"Luxembourgian convertible francs","one":"Luxembourgian convertible franc"},"symbol":"LUC","narrow":"LUC"},"LUF":{"displayName":{"other":"Luxembourgian francs","one":"Luxembourgian franc"},"symbol":"LUF","narrow":"LUF"},"LUL":{"displayName":{"other":"Luxembourg financial francs","one":"Luxembourg financial franc"},"symbol":"LUL","narrow":"LUL"},"LVL":{"displayName":{"other":"Latvian lati","one":"Latvian lats"},"symbol":"LVL","narrow":"Ls"},"LVR":{"displayName":{"other":"Latvian rubles","one":"Latvian ruble"},"symbol":"LVR","narrow":"LVR"},"LYD":{"displayName":{"other":"Libyan dinars","one":"Libyan dinar"},"symbol":"LYD","narrow":"LYD"},"MAD":{"displayName":{"other":"Moroccan dirhams","one":"Moroccan dirham"},"symbol":"MAD","narrow":"MAD"},"MAF":{"displayName":{"other":"Moroccan francs","one":"Moroccan franc"},"symbol":"MAF","narrow":"MAF"},"MCF":{"displayName":{"other":"Monegasque francs","one":"Monegasque franc"},"symbol":"MCF","narrow":"MCF"},"MDC":{"displayName":{"other":"Moldovan cupon"},"symbol":"MDC","narrow":"MDC"},"MDL":{"displayName":{"other":"Moldovan lei","one":"Moldovan leu"},"symbol":"MDL","narrow":"MDL"},"MGA":{"displayName":{"other":"Malagasy ariaries","one":"Malagasy ariary"},"symbol":"MGA","narrow":"Ar"},"MGF":{"displayName":{"other":"Malagasy francs","one":"Malagasy franc"},"symbol":"MGF","narrow":"MGF"},"MKD":{"displayName":{"other":"Macedonian denari","one":"Macedonian denar"},"symbol":"MKD","narrow":"MKD"},"MKN":{"displayName":{"other":"Macedonian denari (1992–1993)","one":"Macedonian denar (1992–1993)"},"symbol":"MKN","narrow":"MKN"},"MLF":{"displayName":{"other":"Malian francs","one":"Malian franc"},"symbol":"MLF","narrow":"MLF"},"MMK":{"displayName":{"other":"Myanmar kyats","one":"Myanmar kyat"},"symbol":"MMK","narrow":"K"},"MNT":{"displayName":{"other":"Mongolian tugriks","one":"Mongolian tugrik"},"symbol":"MNT","narrow":"₮"},"MOP":{"displayName":{"other":"Macanese patacas","one":"Macanese pataca"},"symbol":"MOP","narrow":"MOP"},"MRO":{"displayName":{"other":"Mauritanian ouguiyas (1973–2017)","one":"Mauritanian ouguiya (1973–2017)"},"symbol":"MRO","narrow":"MRO"},"MRU":{"displayName":{"other":"Mauritanian ouguiyas","one":"Mauritanian ouguiya"},"symbol":"MRU","narrow":"MRU"},"MTL":{"displayName":{"other":"Maltese lira"},"symbol":"MTL","narrow":"MTL"},"MTP":{"displayName":{"other":"Maltese pounds","one":"Maltese pound"},"symbol":"MTP","narrow":"MTP"},"MUR":{"displayName":{"other":"Mauritian rupees","one":"Mauritian rupee"},"symbol":"MUR","narrow":"Rs"},"MVP":{"displayName":{"other":"Maldivian rupees (1947–1981)","one":"Maldivian rupee (1947–1981)"},"symbol":"MVP","narrow":"MVP"},"MVR":{"displayName":{"other":"Maldivian rufiyaas","one":"Maldivian rufiyaa"},"symbol":"MVR","narrow":"MVR"},"MWK":{"displayName":{"other":"Malawian kwachas","one":"Malawian kwacha"},"symbol":"MWK","narrow":"MWK"},"MXN":{"displayName":{"other":"Mexican pesos","one":"Mexican peso"},"symbol":"MX$","narrow":"$"},"MXP":{"displayName":{"other":"Mexican silver pesos (1861–1992)","one":"Mexican silver peso (1861–1992)"},"symbol":"MXP","narrow":"MXP"},"MXV":{"displayName":{"other":"Mexican investment units","one":"Mexican investment unit"},"symbol":"MXV","narrow":"MXV"},"MYR":{"displayName":{"other":"Malaysian ringgits","one":"Malaysian ringgit"},"symbol":"MYR","narrow":"RM"},"MZE":{"displayName":{"other":"Mozambican escudos","one":"Mozambican escudo"},"symbol":"MZE","narrow":"MZE"},"MZM":{"displayName":{"other":"Mozambican meticals (1980–2006)","one":"Mozambican metical (1980–2006)"},"symbol":"MZM","narrow":"MZM"},"MZN":{"displayName":{"other":"Mozambican meticals","one":"Mozambican metical"},"symbol":"MZN","narrow":"MZN"},"NAD":{"displayName":{"other":"Namibian dollars","one":"Namibian dollar"},"symbol":"NAD","narrow":"$"},"NGN":{"displayName":{"other":"Nigerian nairas","one":"Nigerian naira"},"symbol":"NGN","narrow":"₦"},"NIC":{"displayName":{"other":"Nicaraguan córdobas (1988–1991)","one":"Nicaraguan córdoba (1988–1991)"},"symbol":"NIC","narrow":"NIC"},"NIO":{"displayName":{"other":"Nicaraguan córdobas","one":"Nicaraguan córdoba"},"symbol":"NIO","narrow":"C$"},"NLG":{"displayName":{"other":"Dutch guilders","one":"Dutch guilder"},"symbol":"NLG","narrow":"NLG"},"NOK":{"displayName":{"other":"Norwegian kroner","one":"Norwegian krone"},"symbol":"NOK","narrow":"kr"},"NPR":{"displayName":{"other":"Nepalese rupees","one":"Nepalese rupee"},"symbol":"NPR","narrow":"Rs"},"NZD":{"displayName":{"other":"New Zealand dollars","one":"New Zealand dollar"},"symbol":"NZ$","narrow":"$"},"OMR":{"displayName":{"other":"Omani rials","one":"Omani rial"},"symbol":"OMR","narrow":"OMR"},"PAB":{"displayName":{"other":"Panamanian balboas","one":"Panamanian balboa"},"symbol":"PAB","narrow":"PAB"},"PEI":{"displayName":{"other":"Peruvian intis","one":"Peruvian inti"},"symbol":"PEI","narrow":"PEI"},"PEN":{"displayName":{"other":"Peruvian soles","one":"Peruvian sol"},"symbol":"PEN","narrow":"PEN"},"PES":{"displayName":{"other":"Peruvian soles (1863–1965)","one":"Peruvian sol (1863–1965)"},"symbol":"PES","narrow":"PES"},"PGK":{"displayName":{"other":"Papua New Guinean kina"},"symbol":"PGK","narrow":"PGK"},"PHP":{"displayName":{"other":"Philippine pisos","one":"Philippine piso"},"symbol":"₱","narrow":"₱"},"PKR":{"displayName":{"other":"Pakistani rupees","one":"Pakistani rupee"},"symbol":"PKR","narrow":"Rs"},"PLN":{"displayName":{"other":"Polish zlotys","one":"Polish zloty"},"symbol":"PLN","narrow":"zł"},"PLZ":{"displayName":{"other":"Polish zlotys (PLZ)","one":"Polish zloty (PLZ)"},"symbol":"PLZ","narrow":"PLZ"},"PTE":{"displayName":{"other":"Portuguese escudos","one":"Portuguese escudo"},"symbol":"PTE","narrow":"PTE"},"PYG":{"displayName":{"other":"Paraguayan guaranis","one":"Paraguayan guarani"},"symbol":"PYG","narrow":"₲"},"QAR":{"displayName":{"other":"Qatari rials","one":"Qatari rial"},"symbol":"QAR","narrow":"QAR"},"RHD":{"displayName":{"other":"Rhodesian dollars","one":"Rhodesian dollar"},"symbol":"RHD","narrow":"RHD"},"ROL":{"displayName":{"other":"Romanian Lei (1952–2006)","one":"Romanian leu (1952–2006)"},"symbol":"ROL","narrow":"ROL"},"RON":{"displayName":{"other":"Romanian lei","one":"Romanian leu"},"symbol":"RON","narrow":"lei"},"RSD":{"displayName":{"other":"Serbian dinars","one":"Serbian dinar"},"symbol":"RSD","narrow":"RSD"},"RUB":{"displayName":{"other":"Russian rubles","one":"Russian ruble"},"symbol":"RUB","narrow":"₽"},"RUR":{"displayName":{"other":"Russian rubles (1991–1998)","one":"Russian ruble (1991–1998)"},"symbol":"RUR","narrow":"р."},"RWF":{"displayName":{"other":"Rwandan francs","one":"Rwandan franc"},"symbol":"RWF","narrow":"RF"},"SAR":{"displayName":{"other":"Saudi riyals","one":"Saudi riyal"},"symbol":"SAR","narrow":"SAR"},"SBD":{"displayName":{"other":"Solomon Islands dollars","one":"Solomon Islands dollar"},"symbol":"SBD","narrow":"$"},"SCR":{"displayName":{"other":"Seychellois rupees","one":"Seychellois rupee"},"symbol":"SCR","narrow":"SCR"},"SDD":{"displayName":{"other":"Sudanese dinars (1992–2007)","one":"Sudanese dinar (1992–2007)"},"symbol":"SDD","narrow":"SDD"},"SDG":{"displayName":{"other":"Sudanese pounds","one":"Sudanese pound"},"symbol":"SDG","narrow":"SDG"},"SDP":{"displayName":{"other":"Sudanese pounds (1957–1998)","one":"Sudanese pound (1957–1998)"},"symbol":"SDP","narrow":"SDP"},"SEK":{"displayName":{"other":"Swedish kronor","one":"Swedish krona"},"symbol":"SEK","narrow":"kr"},"SGD":{"displayName":{"other":"Singapore dollars","one":"Singapore dollar"},"symbol":"SGD","narrow":"$"},"SHP":{"displayName":{"other":"St. Helena pounds","one":"St. Helena pound"},"symbol":"SHP","narrow":"£"},"SIT":{"displayName":{"other":"Slovenian tolars","one":"Slovenian tolar"},"symbol":"SIT","narrow":"SIT"},"SKK":{"displayName":{"other":"Slovak korunas","one":"Slovak koruna"},"symbol":"SKK","narrow":"SKK"},"SLL":{"displayName":{"other":"Sierra Leonean leones","one":"Sierra Leonean leone"},"symbol":"SLL","narrow":"SLL"},"SOS":{"displayName":{"other":"Somali shillings","one":"Somali shilling"},"symbol":"SOS","narrow":"SOS"},"SRD":{"displayName":{"other":"Surinamese dollars","one":"Surinamese dollar"},"symbol":"SRD","narrow":"$"},"SRG":{"displayName":{"other":"Surinamese guilders","one":"Surinamese guilder"},"symbol":"SRG","narrow":"SRG"},"SSP":{"displayName":{"other":"South Sudanese pounds","one":"South Sudanese pound"},"symbol":"SSP","narrow":"£"},"STD":{"displayName":{"other":"São Tomé & Príncipe dobras (1977–2017)","one":"São Tomé & Príncipe dobra (1977–2017)"},"symbol":"STD","narrow":"STD"},"STN":{"displayName":{"other":"São Tomé & Príncipe dobras","one":"São Tomé & Príncipe dobra"},"symbol":"STN","narrow":"Db"},"SUR":{"displayName":{"other":"Soviet roubles","one":"Soviet rouble"},"symbol":"SUR","narrow":"SUR"},"SVC":{"displayName":{"other":"Salvadoran colones","one":"Salvadoran colón"},"symbol":"SVC","narrow":"SVC"},"SYP":{"displayName":{"other":"Syrian pounds","one":"Syrian pound"},"symbol":"SYP","narrow":"£"},"SZL":{"displayName":{"other":"Swazi emalangeni","one":"Swazi lilangeni"},"symbol":"SZL","narrow":"SZL"},"THB":{"displayName":{"other":"Thai baht"},"symbol":"THB","narrow":"฿"},"TJR":{"displayName":{"other":"Tajikistani rubles","one":"Tajikistani ruble"},"symbol":"TJR","narrow":"TJR"},"TJS":{"displayName":{"other":"Tajikistani somonis","one":"Tajikistani somoni"},"symbol":"TJS","narrow":"TJS"},"TMM":{"displayName":{"other":"Turkmenistani manat (1993–2009)"},"symbol":"TMM","narrow":"TMM"},"TMT":{"displayName":{"other":"Turkmenistani manat"},"symbol":"TMT","narrow":"TMT"},"TND":{"displayName":{"other":"Tunisian dinars","one":"Tunisian dinar"},"symbol":"TND","narrow":"TND"},"TOP":{"displayName":{"other":"Tongan paʻanga"},"symbol":"TOP","narrow":"T$"},"TPE":{"displayName":{"other":"Timorese escudos","one":"Timorese escudo"},"symbol":"TPE","narrow":"TPE"},"TRL":{"displayName":{"other":"Turkish Lira (1922–2005)","one":"Turkish lira (1922–2005)"},"symbol":"TRL","narrow":"TRL"},"TRY":{"displayName":{"other":"Turkish Lira","one":"Turkish lira"},"symbol":"TRY","narrow":"₺"},"TTD":{"displayName":{"other":"Trinidad & Tobago dollars","one":"Trinidad & Tobago dollar"},"symbol":"TTD","narrow":"$"},"TWD":{"displayName":{"other":"New Taiwan dollars","one":"New Taiwan dollar"},"symbol":"NT$","narrow":"$"},"TZS":{"displayName":{"other":"Tanzanian shillings","one":"Tanzanian shilling"},"symbol":"TZS","narrow":"TZS"},"UAH":{"displayName":{"other":"Ukrainian hryvnias","one":"Ukrainian hryvnia"},"symbol":"UAH","narrow":"₴"},"UAK":{"displayName":{"other":"Ukrainian karbovantsiv","one":"Ukrainian karbovanets"},"symbol":"UAK","narrow":"UAK"},"UGS":{"displayName":{"other":"Ugandan shillings (1966–1987)","one":"Ugandan shilling (1966–1987)"},"symbol":"UGS","narrow":"UGS"},"UGX":{"displayName":{"other":"Ugandan shillings","one":"Ugandan shilling"},"symbol":"UGX","narrow":"UGX"},"USD":{"displayName":{"other":"US dollars","one":"US dollar"},"symbol":"$","narrow":"$"},"USN":{"displayName":{"other":"US dollars (next day)","one":"US dollar (next day)"},"symbol":"USN","narrow":"USN"},"USS":{"displayName":{"other":"US dollars (same day)","one":"US dollar (same day)"},"symbol":"USS","narrow":"USS"},"UYI":{"displayName":{"other":"Uruguayan pesos (indexed units)","one":"Uruguayan peso (indexed units)"},"symbol":"UYI","narrow":"UYI"},"UYP":{"displayName":{"other":"Uruguayan pesos (1975–1993)","one":"Uruguayan peso (1975–1993)"},"symbol":"UYP","narrow":"UYP"},"UYU":{"displayName":{"other":"Uruguayan pesos","one":"Uruguayan peso"},"symbol":"UYU","narrow":"$"},"UYW":{"displayName":{"other":"Uruguayan nominal wage index units","one":"Uruguayan nominal wage index unit"},"symbol":"UYW","narrow":"UYW"},"UZS":{"displayName":{"other":"Uzbekistani som"},"symbol":"UZS","narrow":"UZS"},"VEB":{"displayName":{"other":"Venezuelan bolívars (1871–2008)","one":"Venezuelan bolívar (1871–2008)"},"symbol":"VEB","narrow":"VEB"},"VEF":{"displayName":{"other":"Venezuelan bolívars (2008–2018)","one":"Venezuelan bolívar (2008–2018)"},"symbol":"VEF","narrow":"Bs"},"VES":{"displayName":{"other":"Venezuelan bolívars","one":"Venezuelan bolívar"},"symbol":"VES","narrow":"VES"},"VND":{"displayName":{"other":"Vietnamese dong"},"symbol":"₫","narrow":"₫"},"VNN":{"displayName":{"other":"Vietnamese dong (1978–1985)"},"symbol":"VNN","narrow":"VNN"},"VUV":{"displayName":{"other":"Vanuatu vatus","one":"Vanuatu vatu"},"symbol":"VUV","narrow":"VUV"},"WST":{"displayName":{"other":"Samoan tala"},"symbol":"WST","narrow":"WST"},"XAF":{"displayName":{"other":"Central African CFA francs","one":"Central African CFA franc"},"symbol":"FCFA","narrow":"FCFA"},"XAG":{"displayName":{"other":"troy ounces of silver","one":"troy ounce of silver"},"symbol":"XAG","narrow":"XAG"},"XAU":{"displayName":{"other":"troy ounces of gold","one":"troy ounce of gold"},"symbol":"XAU","narrow":"XAU"},"XBA":{"displayName":{"other":"European composite units","one":"European composite unit"},"symbol":"XBA","narrow":"XBA"},"XBB":{"displayName":{"other":"European monetary units","one":"European monetary unit"},"symbol":"XBB","narrow":"XBB"},"XBC":{"displayName":{"other":"European units of account (XBC)","one":"European unit of account (XBC)"},"symbol":"XBC","narrow":"XBC"},"XBD":{"displayName":{"other":"European units of account (XBD)","one":"European unit of account (XBD)"},"symbol":"XBD","narrow":"XBD"},"XCD":{"displayName":{"other":"East Caribbean dollars","one":"East Caribbean dollar"},"symbol":"EC$","narrow":"$"},"XDR":{"displayName":{"other":"special drawing rights"},"symbol":"XDR","narrow":"XDR"},"XEU":{"displayName":{"other":"European currency units","one":"European currency unit"},"symbol":"XEU","narrow":"XEU"},"XFO":{"displayName":{"other":"French gold francs","one":"French gold franc"},"symbol":"XFO","narrow":"XFO"},"XFU":{"displayName":{"other":"French UIC-francs","one":"French UIC-franc"},"symbol":"XFU","narrow":"XFU"},"XOF":{"displayName":{"other":"West African CFA francs","one":"West African CFA franc"},"symbol":"F CFA","narrow":"F CFA"},"XPD":{"displayName":{"other":"troy ounces of palladium","one":"troy ounce of palladium"},"symbol":"XPD","narrow":"XPD"},"XPF":{"displayName":{"other":"CFP francs","one":"CFP franc"},"symbol":"CFPF","narrow":"CFPF"},"XPT":{"displayName":{"other":"troy ounces of platinum","one":"troy ounce of platinum"},"symbol":"XPT","narrow":"XPT"},"XRE":{"displayName":{"other":"RINET Funds units","one":"RINET Funds unit"},"symbol":"XRE","narrow":"XRE"},"XSU":{"displayName":{"other":"Sucres","one":"Sucre"},"symbol":"XSU","narrow":"XSU"},"XTS":{"displayName":{"other":"Testing Currency units","one":"Testing Currency unit"},"symbol":"XTS","narrow":"XTS"},"XUA":{"displayName":{"other":"ADB units of account","one":"ADB unit of account"},"symbol":"XUA","narrow":"XUA"},"XXX":{"displayName":{"other":"(unknown currency)","one":"(unknown unit of currency)"},"symbol":"¤","narrow":"¤"},"YDD":{"displayName":{"other":"Yemeni dinars","one":"Yemeni dinar"},"symbol":"YDD","narrow":"YDD"},"YER":{"displayName":{"other":"Yemeni rials","one":"Yemeni rial"},"symbol":"YER","narrow":"YER"},"YUD":{"displayName":{"other":"Yugoslavian hard dinars (1966–1990)","one":"Yugoslavian hard dinar (1966–1990)"},"symbol":"YUD","narrow":"YUD"},"YUM":{"displayName":{"other":"Yugoslavian new dinars (1994–2002)","one":"Yugoslavian new dinar (1994–2002)"},"symbol":"YUM","narrow":"YUM"},"YUN":{"displayName":{"other":"Yugoslavian convertible dinars (1990–1992)","one":"Yugoslavian convertible dinar (1990–1992)"},"symbol":"YUN","narrow":"YUN"},"YUR":{"displayName":{"other":"Yugoslavian reformed dinars (1992–1993)","one":"Yugoslavian reformed dinar (1992–1993)"},"symbol":"YUR","narrow":"YUR"},"ZAL":{"displayName":{"other":"South African rands (financial)","one":"South African rand (financial)"},"symbol":"ZAL","narrow":"ZAL"},"ZAR":{"displayName":{"other":"South African rand"},"symbol":"ZAR","narrow":"R"},"ZMK":{"displayName":{"other":"Zambian kwachas (1968–2012)","one":"Zambian kwacha (1968–2012)"},"symbol":"ZMK","narrow":"ZMK"},"ZMW":{"displayName":{"other":"Zambian kwachas","one":"Zambian kwacha"},"symbol":"ZMW","narrow":"ZK"},"ZRN":{"displayName":{"other":"Zairean new zaires (1993–1998)","one":"Zairean new zaire (1993–1998)"},"symbol":"ZRN","narrow":"ZRN"},"ZRZ":{"displayName":{"other":"Zairean zaires (1971–1993)","one":"Zairean zaire (1971–1993)"},"symbol":"ZRZ","narrow":"ZRZ"},"ZWD":{"displayName":{"other":"Zimbabwean dollars (1980–2008)","one":"Zimbabwean dollar (1980–2008)"},"symbol":"ZWD","narrow":"ZWD"},"ZWL":{"displayName":{"other":"Zimbabwean dollars (2009)","one":"Zimbabwean dollar (2009)"},"symbol":"ZWL","narrow":"ZWL"},"ZWR":{"displayName":{"other":"Zimbabwean dollars (2008)","one":"Zimbabwean dollar (2008)"},"symbol":"ZWR","narrow":"ZWR"}},"numbers":{"nu":["latn"],"symbols":{"latn":{"decimal":".","group":",","list":";","percentSign":"%","plusSign":"+","minusSign":"-","approximatelySign":"~","exponential":"E","superscriptingExponent":"×","perMille":"‰","infinity":"∞","nan":"NaN","timeSeparator":":"}},"percent":{"latn":"#,##0%"},"decimal":{"latn":{"standard":"#,##0.###","long":{"1000":{"other":"0 thousand"},"10000":{"other":"00 thousand"},"100000":{"other":"000 thousand"},"1000000":{"other":"0 million"},"10000000":{"other":"00 million"},"100000000":{"other":"000 million"},"1000000000":{"other":"0 billion"},"10000000000":{"other":"00 billion"},"100000000000":{"other":"000 billion"},"1000000000000":{"other":"0 trillion"},"10000000000000":{"other":"00 trillion"},"100000000000000":{"other":"000 trillion"}},"short":{"1000":{"other":"0K"},"10000":{"other":"00K"},"100000":{"other":"000K"},"1000000":{"other":"0M"},"10000000":{"other":"00M"},"100000000":{"other":"000M"},"1000000000":{"other":"0B"},"10000000000":{"other":"00B"},"100000000000":{"other":"000B"},"1000000000000":{"other":"0T"},"10000000000000":{"other":"00T"},"100000000000000":{"other":"000T"}}}},"currency":{"latn":{"currencySpacing":{"beforeInsertBetween":" ","afterInsertBetween":" "},"standard":"¤#,##0.00","accounting":"¤#,##0.00;(¤#,##0.00)","unitPattern":"{0} {1}","short":{"1000":{"other":"¤0K"},"10000":{"other":"¤00K"},"100000":{"other":"¤000K"},"1000000":{"other":"¤0M"},"10000000":{"other":"¤00M"},"100000000":{"other":"¤000M"},"1000000000":{"other":"¤0B"},"10000000000":{"other":"¤00B"},"100000000000":{"other":"¤000B"},"1000000000000":{"other":"¤0T"},"10000000000000":{"other":"¤00T"},"100000000000000":{"other":"¤000T"}}}}},"nu":["latn"]},"locale":"en"}
)
}
}

if (!("Intl"in self&&"DateTimeFormat"in self.Intl&&"formatRangeToParts"in self.Intl.DateTimeFormat&&self.Intl.DateTimeFormat.supportedLocalesOf("en").length
)) {

// Intl.DateTimeFormat.~locale.en
/* @generated */

  // prettier-ignore
  if (Intl.DateTimeFormat && typeof Intl.DateTimeFormat.__addLocaleData === 'function') {
    Intl.DateTimeFormat.__addLocaleData({"data":{"am":"AM","pm":"PM","weekday":{"narrow":["S","M","T","W","T","F","S"],"short":["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],"long":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},"era":{"narrow":{"BC":"B","AD":"A"},"short":{"BC":"BC","AD":"AD"},"long":{"BC":"Before Christ","AD":"Anno Domini"}},"month":{"narrow":["J","F","M","A","M","J","J","A","S","O","N","D"],"short":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],"long":["January","February","March","April","May","June","July","August","September","October","November","December"]},"timeZoneName":{"America/Rio_Branco":{"long":["Acre Standard Time","Acre Summer Time"]},"Asia/Kabul":{"long":["Afghanistan Time","Afghanistan Time"]},"Africa/Maputo":{"long":["Central Africa Time","Central Africa Time"]},"Africa/Bujumbura":{"long":["Central Africa Time","Central Africa Time"]},"Africa/Gaborone":{"long":["Central Africa Time","Central Africa Time"]},"Africa/Lubumbashi":{"long":["Central Africa Time","Central Africa Time"]},"Africa/Blantyre":{"long":["Central Africa Time","Central Africa Time"]},"Africa/Kigali":{"long":["Central Africa Time","Central Africa Time"]},"Africa/Lusaka":{"long":["Central Africa Time","Central Africa Time"]},"Africa/Harare":{"long":["Central Africa Time","Central Africa Time"]},"Africa/Nairobi":{"long":["East Africa Time","East Africa Time"]},"Africa/Djibouti":{"long":["East Africa Time","East Africa Time"]},"Africa/Asmera":{"long":["East Africa Time","East Africa Time"]},"Africa/Addis_Ababa":{"long":["East Africa Time","East Africa Time"]},"Indian/Comoro":{"long":["East Africa Time","East Africa Time"]},"Indian/Antananarivo":{"long":["East Africa Time","East Africa Time"]},"Africa/Mogadishu":{"long":["East Africa Time","East Africa Time"]},"Africa/Dar_es_Salaam":{"long":["East Africa Time","East Africa Time"]},"Africa/Kampala":{"long":["East Africa Time","East Africa Time"]},"Indian/Mayotte":{"long":["East Africa Time","East Africa Time"]},"Africa/Johannesburg":{"long":["South Africa Standard Time","South Africa Standard Time"]},"Africa/Maseru":{"long":["South Africa Standard Time","South Africa Standard Time"]},"Africa/Mbabane":{"long":["South Africa Standard Time","South Africa Standard Time"]},"Africa/Lagos":{"long":["West Africa Standard Time","West Africa Summer Time"]},"Africa/Luanda":{"long":["West Africa Standard Time","West Africa Summer Time"]},"Africa/Porto-Novo":{"long":["West Africa Standard Time","West Africa Summer Time"]},"Africa/Kinshasa":{"long":["West Africa Standard Time","West Africa Summer Time"]},"Africa/Bangui":{"long":["West Africa Standard Time","West Africa Summer Time"]},"Africa/Brazzaville":{"long":["West Africa Standard Time","West Africa Summer Time"]},"Africa/Douala":{"long":["West Africa Standard Time","West Africa Summer Time"]},"Africa/Libreville":{"long":["West Africa Standard Time","West Africa Summer Time"]},"Africa/Malabo":{"long":["West Africa Standard Time","West Africa Summer Time"]},"Africa/Niamey":{"long":["West Africa Standard Time","West Africa Summer Time"]},"Africa/Ndjamena":{"long":["West Africa Standard Time","West Africa Summer Time"]},"Asia/Aqtobe":{"long":["West Kazakhstan Time","West Kazakhstan Time"]},"America/Juneau":{"long":["Alaska Standard Time","Alaska Daylight Time"],"short":["AKST","AKDT"]},"Asia/Almaty":{"long":["East Kazakhstan Time","East Kazakhstan Time"]},"America/Manaus":{"long":["Amazon Standard Time","Amazon Summer Time"]},"America/Chicago":{"long":["Central Standard Time","Central Daylight Time"],"short":["CST","CDT"]},"America/Belize":{"long":["Central Standard Time","Central Daylight Time"],"short":["CST","CDT"]},"America/Winnipeg":{"long":["Central Standard Time","Central Daylight Time"],"short":["CST","CDT"]},"America/Costa_Rica":{"long":["Central Standard Time","Central Daylight Time"],"short":["CST","CDT"]},"America/Guatemala":{"long":["Central Standard Time","Central Daylight Time"],"short":["CST","CDT"]},"America/Tegucigalpa":{"long":["Central Standard Time","Central Daylight Time"],"short":["CST","CDT"]},"America/Mexico_City":{"long":["Central Standard Time","Central Daylight Time"],"short":["CST","CDT"]},"America/El_Salvador":{"long":["Central Standard Time","Central Daylight Time"],"short":["CST","CDT"]},"America/New_York":{"long":["Eastern Standard Time","Eastern Daylight Time"],"short":["EST","EDT"]},"America/Nassau":{"long":["Eastern Standard Time","Eastern Daylight Time"],"short":["EST","EDT"]},"America/Toronto":{"long":["Eastern Standard Time","Eastern Daylight Time"],"short":["EST","EDT"]},"America/Port-au-Prince":{"long":["Eastern Standard Time","Eastern Daylight Time"],"short":["EST","EDT"]},"America/Jamaica":{"long":["Eastern Standard Time","Eastern Daylight Time"],"short":["EST","EDT"]},"America/Cayman":{"long":["Eastern Standard Time","Eastern Daylight Time"],"short":["EST","EDT"]},"America/Panama":{"long":["Eastern Standard Time","Eastern Daylight Time"],"short":["EST","EDT"]},"America/Denver":{"long":["Mountain Standard Time","Mountain Daylight Time"],"short":["MST","MDT"]},"America/Edmonton":{"long":["Mountain Standard Time","Mountain Daylight Time"],"short":["MST","MDT"]},"America/Hermosillo":{"long":["Mountain Standard Time","Mountain Daylight Time"],"short":["MST","MDT"]},"America/Los_Angeles":{"long":["Pacific Standard Time","Pacific Daylight Time"],"short":["PST","PDT"]},"America/Vancouver":{"long":["Pacific Standard Time","Pacific Daylight Time"],"short":["PST","PDT"]},"America/Tijuana":{"long":["Pacific Standard Time","Pacific Daylight Time"],"short":["PST","PDT"]},"Asia/Anadyr":{"long":["Anadyr Standard Time","Anadyr Summer Time"]},"Pacific/Apia":{"long":["Apia Standard Time","Apia Daylight Time"]},"Asia/Riyadh":{"long":["Arabian Standard Time","Arabian Daylight Time"]},"Asia/Bahrain":{"long":["Arabian Standard Time","Arabian Daylight Time"]},"Asia/Baghdad":{"long":["Arabian Standard Time","Arabian Daylight Time"]},"Asia/Kuwait":{"long":["Arabian Standard Time","Arabian Daylight Time"]},"Asia/Qatar":{"long":["Arabian Standard Time","Arabian Daylight Time"]},"Asia/Aden":{"long":["Arabian Standard Time","Arabian Daylight Time"]},"America/Buenos_Aires":{"long":["Argentina Standard Time","Argentina Summer Time"]},"America/Argentina/San_Luis":{"long":["Western Argentina Standard Time","Western Argentina Summer Time"]},"Asia/Ashgabat":{"long":["Turkmenistan Standard Time","Turkmenistan Summer Time"]},"America/Halifax":{"long":["Atlantic Standard Time","Atlantic Daylight Time"],"short":["AST","ADT"]},"America/Antigua":{"long":["Atlantic Standard Time","Atlantic Daylight Time"],"short":["AST","ADT"]},"America/Anguilla":{"long":["Atlantic Standard Time","Atlantic Daylight Time"],"short":["AST","ADT"]},"America/Aruba":{"long":["Atlantic Standard Time","Atlantic Daylight Time"],"short":["AST","ADT"]},"America/Barbados":{"long":["Atlantic Standard Time","Atlantic Daylight Time"],"short":["AST","ADT"]},"Atlantic/Bermuda":{"long":["Atlantic Standard Time","Atlantic Daylight Time"],"short":["AST","ADT"]},"America/Kralendijk":{"long":["Atlantic Standard Time","Atlantic Daylight Time"],"short":["AST","ADT"]},"America/Curacao":{"long":["Atlantic Standard Time","Atlantic Daylight Time"],"short":["AST","ADT"]},"America/Dominica":{"long":["Atlantic Standard Time","Atlantic Daylight Time"],"short":["AST","ADT"]},"America/Grenada":{"long":["Atlantic Standard Time","Atlantic Daylight Time"],"short":["AST","ADT"]},"America/Thule":{"long":["Atlantic Standard Time","Atlantic Daylight Time"],"short":["AST","ADT"]},"America/Guadeloupe":{"long":["Atlantic Standard Time","Atlantic Daylight Time"],"short":["AST","ADT"]},"America/St_Kitts":{"long":["Atlantic Standard Time","Atlantic Daylight Time"],"short":["AST","ADT"]},"America/St_Lucia":{"long":["Atlantic Standard Time","Atlantic Daylight Time"],"short":["AST","ADT"]},"America/Marigot":{"long":["Atlantic Standard Time","Atlantic Daylight Time"],"short":["AST","ADT"]},"America/Martinique":{"long":["Atlantic Standard Time","Atlantic Daylight Time"],"short":["AST","ADT"]},"America/Montserrat":{"long":["Atlantic Standard Time","Atlantic Daylight Time"],"short":["AST","ADT"]},"America/Puerto_Rico":{"long":["Atlantic Standard Time","Atlantic Daylight Time"],"short":["AST","ADT"]},"America/Lower_Princes":{"long":["Atlantic Standard Time","Atlantic Daylight Time"],"short":["AST","ADT"]},"America/Port_of_Spain":{"long":["Atlantic Standard Time","Atlantic Daylight Time"],"short":["AST","ADT"]},"America/St_Vincent":{"long":["Atlantic Standard Time","Atlantic Daylight Time"],"short":["AST","ADT"]},"America/Tortola":{"long":["Atlantic Standard Time","Atlantic Daylight Time"],"short":["AST","ADT"]},"America/St_Thomas":{"long":["Atlantic Standard Time","Atlantic Daylight Time"],"short":["AST","ADT"]},"Australia/Adelaide":{"long":["Australian Central Standard Time","Australian Central Daylight Time"]},"Australia/Eucla":{"long":["Australian Central Western Standard Time","Australian Central Western Daylight Time"]},"Australia/Sydney":{"long":["Australian Eastern Standard Time","Australian Eastern Daylight Time"]},"Australia/Perth":{"long":["Australian Western Standard Time","Australian Western Daylight Time"]},"Atlantic/Azores":{"long":["Azores Standard Time","Azores Summer Time"]},"Asia/Thimphu":{"long":["Bhutan Time","Bhutan Time"]},"America/La_Paz":{"long":["Bolivia Time","Bolivia Time"]},"Asia/Kuching":{"long":["Malaysia Time","Malaysia Time"]},"America/Sao_Paulo":{"long":["Brasilia Standard Time","Brasilia Summer Time"]},"Europe/London":{"long":["Greenwich Mean Time","Greenwich Mean Time"],"short":["GMT","GMT"]},"Asia/Brunei":{"long":["Brunei Darussalam Time","Brunei Darussalam Time"]},"Atlantic/Cape_Verde":{"long":["Cape Verde Standard Time","Cape Verde Summer Time"]},"Antarctica/Casey":{"long":["Casey Time","Casey Time"]},"Pacific/Saipan":{"long":["North Mariana Islands Time","North Mariana Islands Time"]},"Pacific/Guam":{"long":["Guam Standard Time","Guam Standard Time"]},"Pacific/Chatham":{"long":["Chatham Standard Time","Chatham Daylight Time"]},"America/Santiago":{"long":["Chile Standard Time","Chile Summer Time"]},"Asia/Shanghai":{"long":["China Standard Time","China Daylight Time"]},"Asia/Choibalsan":{"long":["Choibalsan Standard Time","Choibalsan Summer Time"]},"Indian/Christmas":{"long":["Christmas Island Time","Christmas Island Time"]},"Indian/Cocos":{"long":["Cocos Islands Time","Cocos Islands Time"]},"America/Bogota":{"long":["Colombia Standard Time","Colombia Summer Time"]},"Pacific/Rarotonga":{"long":["Cook Islands Standard Time","Cook Islands Half Summer Time"]},"America/Havana":{"long":["Cuba Standard Time","Cuba Daylight Time"]},"Antarctica/Davis":{"long":["Davis Time","Davis Time"]},"Antarctica/DumontDUrville":{"long":["Dumont-d’Urville Time","Dumont-d’Urville Time"]},"Asia/Dushanbe":{"long":["Tajikistan Time","Tajikistan Time"]},"America/Paramaribo":{"long":["Suriname Time","Suriname Time"]},"Asia/Dili":{"long":["East Timor Time","East Timor Time"]},"Pacific/Easter":{"long":["Easter Island Standard Time","Easter Island Summer Time"]},"America/Guayaquil":{"long":["Ecuador Time","Ecuador Time"]},"Europe/Paris":{"long":["Central European Standard Time","Central European Summer Time"]},"Europe/Andorra":{"long":["Central European Standard Time","Central European Summer Time"]},"Europe/Tirane":{"long":["Central European Standard Time","Central European Summer Time"]},"Europe/Vienna":{"long":["Central European Standard Time","Central European Summer Time"]},"Europe/Sarajevo":{"long":["Central European Standard Time","Central European Summer Time"]},"Europe/Brussels":{"long":["Central European Standard Time","Central European Summer Time"]},"Europe/Zurich":{"long":["Central European Standard Time","Central European Summer Time"]},"Europe/Prague":{"long":["Central European Standard Time","Central European Summer Time"]},"Europe/Berlin":{"long":["Central European Standard Time","Central European Summer Time"]},"Europe/Copenhagen":{"long":["Central European Standard Time","Central European Summer Time"]},"Europe/Madrid":{"long":["Central European Standard Time","Central European Summer Time"]},"Europe/Gibraltar":{"long":["Central European Standard Time","Central European Summer Time"]},"Europe/Zagreb":{"long":["Central European Standard Time","Central European Summer Time"]},"Europe/Budapest":{"long":["Central European Standard Time","Central European Summer Time"]},"Europe/Rome":{"long":["Central European Standard Time","Central European Summer Time"]},"Europe/Vaduz":{"long":["Central European Standard Time","Central European Summer Time"]},"Europe/Luxembourg":{"long":["Central European Standard Time","Central European Summer Time"]},"Europe/Monaco":{"long":["Central European Standard Time","Central European Summer Time"]},"Europe/Podgorica":{"long":["Central European Standard Time","Central European Summer Time"]},"Europe/Skopje":{"long":["Central European Standard Time","Central European Summer Time"]},"Europe/Malta":{"long":["Central European Standard Time","Central European Summer Time"]},"Europe/Amsterdam":{"long":["Central European Standard Time","Central European Summer Time"]},"Europe/Oslo":{"long":["Central European Standard Time","Central European Summer Time"]},"Europe/Warsaw":{"long":["Central European Standard Time","Central European Summer Time"]},"Europe/Belgrade":{"long":["Central European Standard Time","Central European Summer Time"]},"Europe/Stockholm":{"long":["Central European Standard Time","Central European Summer Time"]},"Europe/Ljubljana":{"long":["Central European Standard Time","Central European Summer Time"]},"Arctic/Longyearbyen":{"long":["Central European Standard Time","Central European Summer Time"]},"Europe/Bratislava":{"long":["Central European Standard Time","Central European Summer Time"]},"Europe/San_Marino":{"long":["Central European Standard Time","Central European Summer Time"]},"Africa/Tunis":{"long":["Central European Standard Time","Central European Summer Time"]},"Europe/Vatican":{"long":["Central European Standard Time","Central European Summer Time"]},"Europe/Bucharest":{"long":["Eastern European Standard Time","Eastern European Summer Time"]},"Europe/Mariehamn":{"long":["Eastern European Standard Time","Eastern European Summer Time"]},"Europe/Sofia":{"long":["Eastern European Standard Time","Eastern European Summer Time"]},"Asia/Nicosia":{"long":["Eastern European Standard Time","Eastern European Summer Time"]},"Africa/Cairo":{"long":["Eastern European Standard Time","Eastern European Summer Time"]},"Europe/Helsinki":{"long":["Eastern European Standard Time","Eastern European Summer Time"]},"Europe/Athens":{"long":["Eastern European Standard Time","Eastern European Summer Time"]},"Asia/Amman":{"long":["Eastern European Standard Time","Eastern European Summer Time"]},"Asia/Beirut":{"long":["Eastern European Standard Time","Eastern European Summer Time"]},"Asia/Damascus":{"long":["Eastern European Standard Time","Eastern European Summer Time"]},"Europe/Minsk":{"long":["Further-eastern European Time","Further-eastern European Time"]},"Europe/Kaliningrad":{"long":["Further-eastern European Time","Further-eastern European Time"]},"Atlantic/Canary":{"long":["Western European Standard Time","Western European Summer Time"]},"Atlantic/Faeroe":{"long":["Western European Standard Time","Western European Summer Time"]},"Atlantic/Stanley":{"long":["Falkland Islands Standard Time","Falkland Islands Summer Time"]},"Pacific/Fiji":{"long":["Fiji Standard Time","Fiji Summer Time"]},"America/Cayenne":{"long":["French Guiana Time","French Guiana Time"]},"Indian/Kerguelen":{"long":["French Southern & Antarctic Time","French Southern & Antarctic Time"]},"Asia/Bishkek":{"long":["Kyrgyzstan Time","Kyrgyzstan Time"]},"Pacific/Galapagos":{"long":["Galapagos Time","Galapagos Time"]},"Pacific/Gambier":{"long":["Gambier Time","Gambier Time"]},"Pacific/Tarawa":{"long":["Gilbert Islands Time","Gilbert Islands Time"]},"Atlantic/Reykjavik":{"long":["Greenwich Mean Time","Greenwich Mean Time"],"short":["GMT","GMT"]},"Africa/Ouagadougou":{"long":["Greenwich Mean Time","Greenwich Mean Time"],"short":["GMT","GMT"]},"Africa/Abidjan":{"long":["Greenwich Mean Time","Greenwich Mean Time"],"short":["GMT","GMT"]},"Africa/Accra":{"long":["Greenwich Mean Time","Greenwich Mean Time"],"short":["GMT","GMT"]},"Africa/Banjul":{"long":["Greenwich Mean Time","Greenwich Mean Time"],"short":["GMT","GMT"]},"Africa/Conakry":{"long":["Greenwich Mean Time","Greenwich Mean Time"],"short":["GMT","GMT"]},"Africa/Bamako":{"long":["Greenwich Mean Time","Greenwich Mean Time"],"short":["GMT","GMT"]},"Africa/Nouakchott":{"long":["Greenwich Mean Time","Greenwich Mean Time"],"short":["GMT","GMT"]},"Atlantic/St_Helena":{"long":["Greenwich Mean Time","Greenwich Mean Time"],"short":["GMT","GMT"]},"Africa/Freetown":{"long":["Greenwich Mean Time","Greenwich Mean Time"],"short":["GMT","GMT"]},"Africa/Dakar":{"long":["Greenwich Mean Time","Greenwich Mean Time"],"short":["GMT","GMT"]},"Africa/Lome":{"long":["Greenwich Mean Time","Greenwich Mean Time"],"short":["GMT","GMT"]},"America/Scoresbysund":{"long":["East Greenland Standard Time","East Greenland Summer Time"]},"America/Godthab":{"long":["West Greenland Standard Time","West Greenland Summer Time"]},"Asia/Dubai":{"long":["Gulf Standard Time","Gulf Standard Time"]},"Asia/Muscat":{"long":["Gulf Standard Time","Gulf Standard Time"]},"America/Guyana":{"long":["Guyana Time","Guyana Time"]},"Pacific/Honolulu":{"long":["Hawaii-Aleutian Standard Time","Hawaii-Aleutian Daylight Time"],"short":["HAST","HADT"]},"Asia/Hong_Kong":{"long":["Hong Kong Standard Time","Hong Kong Summer Time"]},"Asia/Hovd":{"long":["Hovd Standard Time","Hovd Summer Time"]},"Asia/Calcutta":{"long":["India Standard Time","India Standard Time"]},"Asia/Colombo":{"long":["Lanka Time","Lanka Time"]},"Indian/Chagos":{"long":["Indian Ocean Time","Indian Ocean Time"]},"Asia/Bangkok":{"long":["Indochina Time","Indochina Time"]},"Asia/Phnom_Penh":{"long":["Indochina Time","Indochina Time"]},"Asia/Vientiane":{"long":["Indochina Time","Indochina Time"]},"Asia/Makassar":{"long":["Central Indonesia Time","Central Indonesia Time"]},"Asia/Jayapura":{"long":["Eastern Indonesia Time","Eastern Indonesia Time"]},"Asia/Jakarta":{"long":["Western Indonesia Time","Western Indonesia Time"]},"Asia/Tehran":{"long":["Iran Standard Time","Iran Daylight Time"]},"Asia/Irkutsk":{"long":["Irkutsk Standard Time","Irkutsk Summer Time"]},"Asia/Jerusalem":{"long":["Israel Standard Time","Israel Daylight Time"]},"Asia/Tokyo":{"long":["Japan Standard Time","Japan Daylight Time"]},"Asia/Kamchatka":{"long":["Petropavlovsk-Kamchatski Standard Time","Petropavlovsk-Kamchatski Summer Time"]},"Asia/Karachi":{"long":["Pakistan Standard Time","Pakistan Summer Time"]},"Asia/Qyzylorda":{"long":["Qyzylorda Standard Time","Qyzylorda Summer Time"]},"Asia/Seoul":{"long":["Korean Standard Time","Korean Daylight Time"]},"Pacific/Kosrae":{"long":["Kosrae Time","Kosrae Time"]},"Asia/Krasnoyarsk":{"long":["Krasnoyarsk Standard Time","Krasnoyarsk Summer Time"]},"Europe/Samara":{"long":["Samara Standard Time","Samara Summer Time"]},"Pacific/Kiritimati":{"long":["Line Islands Time","Line Islands Time"]},"Australia/Lord_Howe":{"long":["Lord Howe Standard Time","Lord Howe Daylight Time"]},"Asia/Macau":{"long":["Macao Standard Time","Macao Summer Time"]},"Antarctica/Macquarie":{"long":["Macquarie Island Time","Macquarie Island Time"]},"Asia/Magadan":{"long":["Magadan Standard Time","Magadan Summer Time"]},"Indian/Maldives":{"long":["Maldives Time","Maldives Time"]},"Pacific/Marquesas":{"long":["Marquesas Time","Marquesas Time"]},"Pacific/Majuro":{"long":["Marshall Islands Time","Marshall Islands Time"]},"Indian/Mauritius":{"long":["Mauritius Standard Time","Mauritius Summer Time"]},"Antarctica/Mawson":{"long":["Mawson Time","Mawson Time"]},"America/Santa_Isabel":{"long":["Northwest Mexico Standard Time","Northwest Mexico Daylight Time"]},"America/Mazatlan":{"long":["Mexican Pacific Standard Time","Mexican Pacific Daylight Time"]},"Asia/Ulaanbaatar":{"long":["Ulaanbaatar Standard Time","Ulaanbaatar Summer Time"]},"Europe/Moscow":{"long":["Moscow Standard Time","Moscow Summer Time"]},"Asia/Rangoon":{"long":["Myanmar Time","Myanmar Time"]},"Pacific/Nauru":{"long":["Nauru Time","Nauru Time"]},"Asia/Katmandu":{"long":["Nepal Time","Nepal Time"]},"Pacific/Noumea":{"long":["New Caledonia Standard Time","New Caledonia Summer Time"]},"Pacific/Auckland":{"long":["New Zealand Standard Time","New Zealand Daylight Time"]},"Antarctica/McMurdo":{"long":["New Zealand Standard Time","New Zealand Daylight Time"]},"America/St_Johns":{"long":["Newfoundland Standard Time","Newfoundland Daylight Time"]},"Pacific/Niue":{"long":["Niue Time","Niue Time"]},"Pacific/Norfolk":{"long":["Norfolk Island Standard Time","Norfolk Island Daylight Time"]},"America/Noronha":{"long":["Fernando de Noronha Standard Time","Fernando de Noronha Summer Time"]},"Asia/Novosibirsk":{"long":["Novosibirsk Standard Time","Novosibirsk Summer Time"]},"Asia/Omsk":{"long":["Omsk Standard Time","Omsk Summer Time"]},"Pacific/Palau":{"long":["Palau Time","Palau Time"]},"Pacific/Port_Moresby":{"long":["Papua New Guinea Time","Papua New Guinea Time"]},"America/Asuncion":{"long":["Paraguay Standard Time","Paraguay Summer Time"]},"America/Lima":{"long":["Peru Standard Time","Peru Summer Time"]},"Asia/Manila":{"long":["Philippine Standard Time","Philippine Summer Time"]},"Pacific/Enderbury":{"long":["Phoenix Islands Time","Phoenix Islands Time"]},"America/Miquelon":{"long":["St. Pierre & Miquelon Standard Time","St. Pierre & Miquelon Daylight Time"]},"Pacific/Pitcairn":{"long":["Pitcairn Time","Pitcairn Time"]},"Pacific/Ponape":{"long":["Ponape Time","Ponape Time"]},"Asia/Pyongyang":{"long":["Pyongyang Time","Pyongyang Time"]},"Indian/Reunion":{"long":["Réunion Time","Réunion Time"]},"Antarctica/Rothera":{"long":["Rothera Time","Rothera Time"]},"Asia/Sakhalin":{"long":["Sakhalin Standard Time","Sakhalin Summer Time"]},"Pacific/Pago_Pago":{"long":["Samoa Standard Time","Samoa Daylight Time"]},"Indian/Mahe":{"long":["Seychelles Time","Seychelles Time"]},"Asia/Singapore":{"long":["Singapore Standard Time","Singapore Standard Time"]},"Pacific/Guadalcanal":{"long":["Solomon Islands Time","Solomon Islands Time"]},"Atlantic/South_Georgia":{"long":["South Georgia Time","South Georgia Time"]},"Asia/Yekaterinburg":{"long":["Yekaterinburg Standard Time","Yekaterinburg Summer Time"]},"Antarctica/Syowa":{"long":["Syowa Time","Syowa Time"]},"Pacific/Tahiti":{"long":["Tahiti Time","Tahiti Time"]},"Asia/Taipei":{"long":["Taipei Standard Time","Taipei Daylight Time"]},"Asia/Tashkent":{"long":["Uzbekistan Standard Time","Uzbekistan Summer Time"]},"Pacific/Fakaofo":{"long":["Tokelau Time","Tokelau Time"]},"Pacific/Tongatapu":{"long":["Tonga Standard Time","Tonga Summer Time"]},"Pacific/Truk":{"long":["Chuuk Time","Chuuk Time"]},"Pacific/Funafuti":{"long":["Tuvalu Time","Tuvalu Time"]},"America/Montevideo":{"long":["Uruguay Standard Time","Uruguay Summer Time"]},"Pacific/Efate":{"long":["Vanuatu Standard Time","Vanuatu Summer Time"]},"America/Caracas":{"long":["Venezuela Time","Venezuela Time"]},"Asia/Vladivostok":{"long":["Vladivostok Standard Time","Vladivostok Summer Time"]},"Europe/Volgograd":{"long":["Volgograd Standard Time","Volgograd Summer Time"]},"Antarctica/Vostok":{"long":["Vostok Time","Vostok Time"]},"Pacific/Wake":{"long":["Wake Island Time","Wake Island Time"]},"Pacific/Wallis":{"long":["Wallis & Futuna Time","Wallis & Futuna Time"]},"Asia/Yakutsk":{"long":["Yakutsk Standard Time","Yakutsk Summer Time"]},"UTC":{"long":["Coordinated Universal Time","Coordinated Universal Time"],"short":["UTC","UTC"]}},"gmtFormat":"GMT{0}","hourFormat":"+HH:mm;-HH:mm","dateFormat":{"full":"EEEE, MMMM d, y","long":"MMMM d, y","medium":"MMM d, y","short":"M/d/yy"},"timeFormat":{"full":"h:mm:ss a zzzz","long":"h:mm:ss a z","medium":"h:mm:ss a","short":"h:mm a"},"dateTimeFormat":{"full":"{1} 'at' {0}","long":"{1} 'at' {0}","medium":"{1}, {0}","short":"{1}, {0}"},"formats":{"gregory":{"Bh":"h B","Bhm":"h:mm B","Bhms":"h:mm:ss B","d":"d","E":"ccc","EBhm":"E h:mm B","EBhms":"E h:mm:ss B","Ed":"d E","Ehm":"E h:mm a","EHm":"E HH:mm","Ehms":"E h:mm:ss a","EHms":"E HH:mm:ss","Gy":"y G","GyMMM":"MMM y G","GyMMMd":"MMM d, y G","GyMMMEd":"E, MMM d, y G","h":"h a","H":"HH","hm":"h:mm a","Hm":"HH:mm","hms":"h:mm:ss a","Hms":"HH:mm:ss","hmsv":"h:mm:ss a v","Hmsv":"HH:mm:ss v","hmv":"h:mm a v","Hmv":"HH:mm v","M":"L","Md":"M/d","MEd":"E, M/d","MMM":"LLL","MMMd":"MMM d","MMMEd":"E, MMM d","MMMMd":"MMMM d","ms":"mm:ss","y":"y","yM":"M/y","yMd":"M/d/y","yMEd":"E, M/d/y","yMMM":"MMM y","yMMMd":"MMM d, y","yMMMEd":"E, MMM d, y","yMMMM":"MMMM y","EEEE, MMMM d, y":"EEEE, MMMM d, y","MMMM d, y":"MMMM d, y","MMM d, y":"MMM d, y","M/d/yy":"M/d/yy","h:mm:ss a zzzz":"h:mm:ss a zzzz","h:mm:ss a z":"h:mm:ss a z","h:mm:ss a":"h:mm:ss a","h:mm a":"h:mm a","EEEE, MMMM d, y 'at' h:mm:ss a zzzz":"EEEE, MMMM d, y 'at' h:mm:ss a zzzz","MMMM d, y 'at' h:mm:ss a zzzz":"MMMM d, y 'at' h:mm:ss a zzzz","MMM d, y, h:mm:ss a zzzz":"MMM d, y, h:mm:ss a zzzz","M/d/yy, h:mm:ss a zzzz":"M/d/yy, h:mm:ss a zzzz","d, h:mm:ss a zzzz":"d, h:mm:ss a zzzz","E, h:mm:ss a zzzz":"ccc, h:mm:ss a zzzz","Ed, h:mm:ss a zzzz":"d E, h:mm:ss a zzzz","Gy, h:mm:ss a zzzz":"y G, h:mm:ss a zzzz","GyMMM, h:mm:ss a zzzz":"MMM y G, h:mm:ss a zzzz","GyMMMd, h:mm:ss a zzzz":"MMM d, y G, h:mm:ss a zzzz","GyMMMEd, h:mm:ss a zzzz":"E, MMM d, y G, h:mm:ss a zzzz","M, h:mm:ss a zzzz":"L, h:mm:ss a zzzz","Md, h:mm:ss a zzzz":"M/d, h:mm:ss a zzzz","MEd, h:mm:ss a zzzz":"E, M/d, h:mm:ss a zzzz","MMM, h:mm:ss a zzzz":"LLL, h:mm:ss a zzzz","MMMd, h:mm:ss a zzzz":"MMM d, h:mm:ss a zzzz","MMMEd, h:mm:ss a zzzz":"E, MMM d, h:mm:ss a zzzz","MMMMd 'at' h:mm:ss a zzzz":"MMMM d 'at' h:mm:ss a zzzz","y, h:mm:ss a zzzz":"y, h:mm:ss a zzzz","yM, h:mm:ss a zzzz":"M/y, h:mm:ss a zzzz","yMd, h:mm:ss a zzzz":"M/d/y, h:mm:ss a zzzz","yMEd, h:mm:ss a zzzz":"E, M/d/y, h:mm:ss a zzzz","yMMM, h:mm:ss a zzzz":"MMM y, h:mm:ss a zzzz","yMMMd, h:mm:ss a zzzz":"MMM d, y, h:mm:ss a zzzz","yMMMEd, h:mm:ss a zzzz":"E, MMM d, y, h:mm:ss a zzzz","yMMMM 'at' h:mm:ss a zzzz":"MMMM y 'at' h:mm:ss a zzzz","EEEE, MMMM d, y 'at' h:mm:ss a z":"EEEE, MMMM d, y 'at' h:mm:ss a z","MMMM d, y 'at' h:mm:ss a z":"MMMM d, y 'at' h:mm:ss a z","MMM d, y, h:mm:ss a z":"MMM d, y, h:mm:ss a z","M/d/yy, h:mm:ss a z":"M/d/yy, h:mm:ss a z","d, h:mm:ss a z":"d, h:mm:ss a z","E, h:mm:ss a z":"ccc, h:mm:ss a z","Ed, h:mm:ss a z":"d E, h:mm:ss a z","Gy, h:mm:ss a z":"y G, h:mm:ss a z","GyMMM, h:mm:ss a z":"MMM y G, h:mm:ss a z","GyMMMd, h:mm:ss a z":"MMM d, y G, h:mm:ss a z","GyMMMEd, h:mm:ss a z":"E, MMM d, y G, h:mm:ss a z","M, h:mm:ss a z":"L, h:mm:ss a z","Md, h:mm:ss a z":"M/d, h:mm:ss a z","MEd, h:mm:ss a z":"E, M/d, h:mm:ss a z","MMM, h:mm:ss a z":"LLL, h:mm:ss a z","MMMd, h:mm:ss a z":"MMM d, h:mm:ss a z","MMMEd, h:mm:ss a z":"E, MMM d, h:mm:ss a z","MMMMd 'at' h:mm:ss a z":"MMMM d 'at' h:mm:ss a z","y, h:mm:ss a z":"y, h:mm:ss a z","yM, h:mm:ss a z":"M/y, h:mm:ss a z","yMd, h:mm:ss a z":"M/d/y, h:mm:ss a z","yMEd, h:mm:ss a z":"E, M/d/y, h:mm:ss a z","yMMM, h:mm:ss a z":"MMM y, h:mm:ss a z","yMMMd, h:mm:ss a z":"MMM d, y, h:mm:ss a z","yMMMEd, h:mm:ss a z":"E, MMM d, y, h:mm:ss a z","yMMMM 'at' h:mm:ss a z":"MMMM y 'at' h:mm:ss a z","EEEE, MMMM d, y 'at' h:mm:ss a":"EEEE, MMMM d, y 'at' h:mm:ss a","MMMM d, y 'at' h:mm:ss a":"MMMM d, y 'at' h:mm:ss a","MMM d, y, h:mm:ss a":"MMM d, y, h:mm:ss a","M/d/yy, h:mm:ss a":"M/d/yy, h:mm:ss a","d, h:mm:ss a":"d, h:mm:ss a","E, h:mm:ss a":"ccc, h:mm:ss a","Ed, h:mm:ss a":"d E, h:mm:ss a","Gy, h:mm:ss a":"y G, h:mm:ss a","GyMMM, h:mm:ss a":"MMM y G, h:mm:ss a","GyMMMd, h:mm:ss a":"MMM d, y G, h:mm:ss a","GyMMMEd, h:mm:ss a":"E, MMM d, y G, h:mm:ss a","M, h:mm:ss a":"L, h:mm:ss a","Md, h:mm:ss a":"M/d, h:mm:ss a","MEd, h:mm:ss a":"E, M/d, h:mm:ss a","MMM, h:mm:ss a":"LLL, h:mm:ss a","MMMd, h:mm:ss a":"MMM d, h:mm:ss a","MMMEd, h:mm:ss a":"E, MMM d, h:mm:ss a","MMMMd 'at' h:mm:ss a":"MMMM d 'at' h:mm:ss a","y, h:mm:ss a":"y, h:mm:ss a","yM, h:mm:ss a":"M/y, h:mm:ss a","yMd, h:mm:ss a":"M/d/y, h:mm:ss a","yMEd, h:mm:ss a":"E, M/d/y, h:mm:ss a","yMMM, h:mm:ss a":"MMM y, h:mm:ss a","yMMMd, h:mm:ss a":"MMM d, y, h:mm:ss a","yMMMEd, h:mm:ss a":"E, MMM d, y, h:mm:ss a","yMMMM 'at' h:mm:ss a":"MMMM y 'at' h:mm:ss a","EEEE, MMMM d, y 'at' h:mm a":"EEEE, MMMM d, y 'at' h:mm a","MMMM d, y 'at' h:mm a":"MMMM d, y 'at' h:mm a","MMM d, y, h:mm a":"MMM d, y, h:mm a","M/d/yy, h:mm a":"M/d/yy, h:mm a","d, h:mm a":"d, h:mm a","E, h:mm a":"ccc, h:mm a","Ed, h:mm a":"d E, h:mm a","Gy, h:mm a":"y G, h:mm a","GyMMM, h:mm a":"MMM y G, h:mm a","GyMMMd, h:mm a":"MMM d, y G, h:mm a","GyMMMEd, h:mm a":"E, MMM d, y G, h:mm a","M, h:mm a":"L, h:mm a","Md, h:mm a":"M/d, h:mm a","MEd, h:mm a":"E, M/d, h:mm a","MMM, h:mm a":"LLL, h:mm a","MMMd, h:mm a":"MMM d, h:mm a","MMMEd, h:mm a":"E, MMM d, h:mm a","MMMMd 'at' h:mm a":"MMMM d 'at' h:mm a","y, h:mm a":"y, h:mm a","yM, h:mm a":"M/y, h:mm a","yMd, h:mm a":"M/d/y, h:mm a","yMEd, h:mm a":"E, M/d/y, h:mm a","yMMM, h:mm a":"MMM y, h:mm a","yMMMd, h:mm a":"MMM d, y, h:mm a","yMMMEd, h:mm a":"E, MMM d, y, h:mm a","yMMMM 'at' h:mm a":"MMMM y 'at' h:mm a","EEEE, MMMM d, y 'at' Bh":"EEEE, MMMM d, y 'at' h B","MMMM d, y 'at' Bh":"MMMM d, y 'at' h B","MMM d, y, Bh":"MMM d, y, h B","M/d/yy, Bh":"M/d/yy, h B","d, Bh":"d, h B","E, Bh":"ccc, h B","Ed, Bh":"d E, h B","Gy, Bh":"y G, h B","GyMMM, Bh":"MMM y G, h B","GyMMMd, Bh":"MMM d, y G, h B","GyMMMEd, Bh":"E, MMM d, y G, h B","M, Bh":"L, h B","Md, Bh":"M/d, h B","MEd, Bh":"E, M/d, h B","MMM, Bh":"LLL, h B","MMMd, Bh":"MMM d, h B","MMMEd, Bh":"E, MMM d, h B","MMMMd 'at' Bh":"MMMM d 'at' h B","y, Bh":"y, h B","yM, Bh":"M/y, h B","yMd, Bh":"M/d/y, h B","yMEd, Bh":"E, M/d/y, h B","yMMM, Bh":"MMM y, h B","yMMMd, Bh":"MMM d, y, h B","yMMMEd, Bh":"E, MMM d, y, h B","yMMMM 'at' Bh":"MMMM y 'at' h B","EEEE, MMMM d, y 'at' Bhm":"EEEE, MMMM d, y 'at' h:mm B","MMMM d, y 'at' Bhm":"MMMM d, y 'at' h:mm B","MMM d, y, Bhm":"MMM d, y, h:mm B","M/d/yy, Bhm":"M/d/yy, h:mm B","d, Bhm":"d, h:mm B","E, Bhm":"ccc, h:mm B","Ed, Bhm":"d E, h:mm B","Gy, Bhm":"y G, h:mm B","GyMMM, Bhm":"MMM y G, h:mm B","GyMMMd, Bhm":"MMM d, y G, h:mm B","GyMMMEd, Bhm":"E, MMM d, y G, h:mm B","M, Bhm":"L, h:mm B","Md, Bhm":"M/d, h:mm B","MEd, Bhm":"E, M/d, h:mm B","MMM, Bhm":"LLL, h:mm B","MMMd, Bhm":"MMM d, h:mm B","MMMEd, Bhm":"E, MMM d, h:mm B","MMMMd 'at' Bhm":"MMMM d 'at' h:mm B","y, Bhm":"y, h:mm B","yM, Bhm":"M/y, h:mm B","yMd, Bhm":"M/d/y, h:mm B","yMEd, Bhm":"E, M/d/y, h:mm B","yMMM, Bhm":"MMM y, h:mm B","yMMMd, Bhm":"MMM d, y, h:mm B","yMMMEd, Bhm":"E, MMM d, y, h:mm B","yMMMM 'at' Bhm":"MMMM y 'at' h:mm B","EEEE, MMMM d, y 'at' Bhms":"EEEE, MMMM d, y 'at' h:mm:ss B","MMMM d, y 'at' Bhms":"MMMM d, y 'at' h:mm:ss B","MMM d, y, Bhms":"MMM d, y, h:mm:ss B","M/d/yy, Bhms":"M/d/yy, h:mm:ss B","d, Bhms":"d, h:mm:ss B","E, Bhms":"ccc, h:mm:ss B","Ed, Bhms":"d E, h:mm:ss B","Gy, Bhms":"y G, h:mm:ss B","GyMMM, Bhms":"MMM y G, h:mm:ss B","GyMMMd, Bhms":"MMM d, y G, h:mm:ss B","GyMMMEd, Bhms":"E, MMM d, y G, h:mm:ss B","M, Bhms":"L, h:mm:ss B","Md, Bhms":"M/d, h:mm:ss B","MEd, Bhms":"E, M/d, h:mm:ss B","MMM, Bhms":"LLL, h:mm:ss B","MMMd, Bhms":"MMM d, h:mm:ss B","MMMEd, Bhms":"E, MMM d, h:mm:ss B","MMMMd 'at' Bhms":"MMMM d 'at' h:mm:ss B","y, Bhms":"y, h:mm:ss B","yM, Bhms":"M/y, h:mm:ss B","yMd, Bhms":"M/d/y, h:mm:ss B","yMEd, Bhms":"E, M/d/y, h:mm:ss B","yMMM, Bhms":"MMM y, h:mm:ss B","yMMMd, Bhms":"MMM d, y, h:mm:ss B","yMMMEd, Bhms":"E, MMM d, y, h:mm:ss B","yMMMM 'at' Bhms":"MMMM y 'at' h:mm:ss B","EEEE, MMMM d, y 'at' h":"EEEE, MMMM d, y 'at' h a","MMMM d, y 'at' h":"MMMM d, y 'at' h a","MMM d, y, h":"MMM d, y, h a","M/d/yy, h":"M/d/yy, h a","d, h":"d, h a","E, h":"ccc, h a","Ed, h":"d E, h a","Gy, h":"y G, h a","GyMMM, h":"MMM y G, h a","GyMMMd, h":"MMM d, y G, h a","GyMMMEd, h":"E, MMM d, y G, h a","M, h":"L, h a","Md, h":"M/d, h a","MEd, h":"E, M/d, h a","MMM, h":"LLL, h a","MMMd, h":"MMM d, h a","MMMEd, h":"E, MMM d, h a","MMMMd 'at' h":"MMMM d 'at' h a","y, h":"y, h a","yM, h":"M/y, h a","yMd, h":"M/d/y, h a","yMEd, h":"E, M/d/y, h a","yMMM, h":"MMM y, h a","yMMMd, h":"MMM d, y, h a","yMMMEd, h":"E, MMM d, y, h a","yMMMM 'at' h":"MMMM y 'at' h a","EEEE, MMMM d, y 'at' H":"EEEE, MMMM d, y 'at' HH","MMMM d, y 'at' H":"MMMM d, y 'at' HH","MMM d, y, H":"MMM d, y, HH","M/d/yy, H":"M/d/yy, HH","d, H":"d, HH","E, H":"ccc, HH","Ed, H":"d E, HH","Gy, H":"y G, HH","GyMMM, H":"MMM y G, HH","GyMMMd, H":"MMM d, y G, HH","GyMMMEd, H":"E, MMM d, y G, HH","M, H":"L, HH","Md, H":"M/d, HH","MEd, H":"E, M/d, HH","MMM, H":"LLL, HH","MMMd, H":"MMM d, HH","MMMEd, H":"E, MMM d, HH","MMMMd 'at' H":"MMMM d 'at' HH","y, H":"y, HH","yM, H":"M/y, HH","yMd, H":"M/d/y, HH","yMEd, H":"E, M/d/y, HH","yMMM, H":"MMM y, HH","yMMMd, H":"MMM d, y, HH","yMMMEd, H":"E, MMM d, y, HH","yMMMM 'at' H":"MMMM y 'at' HH","EEEE, MMMM d, y 'at' hm":"EEEE, MMMM d, y 'at' h:mm a","MMMM d, y 'at' hm":"MMMM d, y 'at' h:mm a","MMM d, y, hm":"MMM d, y, h:mm a","M/d/yy, hm":"M/d/yy, h:mm a","d, hm":"d, h:mm a","E, hm":"ccc, h:mm a","Ed, hm":"d E, h:mm a","Gy, hm":"y G, h:mm a","GyMMM, hm":"MMM y G, h:mm a","GyMMMd, hm":"MMM d, y G, h:mm a","GyMMMEd, hm":"E, MMM d, y G, h:mm a","M, hm":"L, h:mm a","Md, hm":"M/d, h:mm a","MEd, hm":"E, M/d, h:mm a","MMM, hm":"LLL, h:mm a","MMMd, hm":"MMM d, h:mm a","MMMEd, hm":"E, MMM d, h:mm a","MMMMd 'at' hm":"MMMM d 'at' h:mm a","y, hm":"y, h:mm a","yM, hm":"M/y, h:mm a","yMd, hm":"M/d/y, h:mm a","yMEd, hm":"E, M/d/y, h:mm a","yMMM, hm":"MMM y, h:mm a","yMMMd, hm":"MMM d, y, h:mm a","yMMMEd, hm":"E, MMM d, y, h:mm a","yMMMM 'at' hm":"MMMM y 'at' h:mm a","EEEE, MMMM d, y 'at' Hm":"EEEE, MMMM d, y 'at' HH:mm","MMMM d, y 'at' Hm":"MMMM d, y 'at' HH:mm","MMM d, y, Hm":"MMM d, y, HH:mm","M/d/yy, Hm":"M/d/yy, HH:mm","d, Hm":"d, HH:mm","E, Hm":"ccc, HH:mm","Ed, Hm":"d E, HH:mm","Gy, Hm":"y G, HH:mm","GyMMM, Hm":"MMM y G, HH:mm","GyMMMd, Hm":"MMM d, y G, HH:mm","GyMMMEd, Hm":"E, MMM d, y G, HH:mm","M, Hm":"L, HH:mm","Md, Hm":"M/d, HH:mm","MEd, Hm":"E, M/d, HH:mm","MMM, Hm":"LLL, HH:mm","MMMd, Hm":"MMM d, HH:mm","MMMEd, Hm":"E, MMM d, HH:mm","MMMMd 'at' Hm":"MMMM d 'at' HH:mm","y, Hm":"y, HH:mm","yM, Hm":"M/y, HH:mm","yMd, Hm":"M/d/y, HH:mm","yMEd, Hm":"E, M/d/y, HH:mm","yMMM, Hm":"MMM y, HH:mm","yMMMd, Hm":"MMM d, y, HH:mm","yMMMEd, Hm":"E, MMM d, y, HH:mm","yMMMM 'at' Hm":"MMMM y 'at' HH:mm","EEEE, MMMM d, y 'at' hms":"EEEE, MMMM d, y 'at' h:mm:ss a","MMMM d, y 'at' hms":"MMMM d, y 'at' h:mm:ss a","MMM d, y, hms":"MMM d, y, h:mm:ss a","M/d/yy, hms":"M/d/yy, h:mm:ss a","d, hms":"d, h:mm:ss a","E, hms":"ccc, h:mm:ss a","Ed, hms":"d E, h:mm:ss a","Gy, hms":"y G, h:mm:ss a","GyMMM, hms":"MMM y G, h:mm:ss a","GyMMMd, hms":"MMM d, y G, h:mm:ss a","GyMMMEd, hms":"E, MMM d, y G, h:mm:ss a","M, hms":"L, h:mm:ss a","Md, hms":"M/d, h:mm:ss a","MEd, hms":"E, M/d, h:mm:ss a","MMM, hms":"LLL, h:mm:ss a","MMMd, hms":"MMM d, h:mm:ss a","MMMEd, hms":"E, MMM d, h:mm:ss a","MMMMd 'at' hms":"MMMM d 'at' h:mm:ss a","y, hms":"y, h:mm:ss a","yM, hms":"M/y, h:mm:ss a","yMd, hms":"M/d/y, h:mm:ss a","yMEd, hms":"E, M/d/y, h:mm:ss a","yMMM, hms":"MMM y, h:mm:ss a","yMMMd, hms":"MMM d, y, h:mm:ss a","yMMMEd, hms":"E, MMM d, y, h:mm:ss a","yMMMM 'at' hms":"MMMM y 'at' h:mm:ss a","EEEE, MMMM d, y 'at' Hms":"EEEE, MMMM d, y 'at' HH:mm:ss","MMMM d, y 'at' Hms":"MMMM d, y 'at' HH:mm:ss","MMM d, y, Hms":"MMM d, y, HH:mm:ss","M/d/yy, Hms":"M/d/yy, HH:mm:ss","d, Hms":"d, HH:mm:ss","E, Hms":"ccc, HH:mm:ss","Ed, Hms":"d E, HH:mm:ss","Gy, Hms":"y G, HH:mm:ss","GyMMM, Hms":"MMM y G, HH:mm:ss","GyMMMd, Hms":"MMM d, y G, HH:mm:ss","GyMMMEd, Hms":"E, MMM d, y G, HH:mm:ss","M, Hms":"L, HH:mm:ss","Md, Hms":"M/d, HH:mm:ss","MEd, Hms":"E, M/d, HH:mm:ss","MMM, Hms":"LLL, HH:mm:ss","MMMd, Hms":"MMM d, HH:mm:ss","MMMEd, Hms":"E, MMM d, HH:mm:ss","MMMMd 'at' Hms":"MMMM d 'at' HH:mm:ss","y, Hms":"y, HH:mm:ss","yM, Hms":"M/y, HH:mm:ss","yMd, Hms":"M/d/y, HH:mm:ss","yMEd, Hms":"E, M/d/y, HH:mm:ss","yMMM, Hms":"MMM y, HH:mm:ss","yMMMd, Hms":"MMM d, y, HH:mm:ss","yMMMEd, Hms":"E, MMM d, y, HH:mm:ss","yMMMM 'at' Hms":"MMMM y 'at' HH:mm:ss","EEEE, MMMM d, y 'at' hmsv":"EEEE, MMMM d, y 'at' h:mm:ss a v","MMMM d, y 'at' hmsv":"MMMM d, y 'at' h:mm:ss a v","MMM d, y, hmsv":"MMM d, y, h:mm:ss a v","M/d/yy, hmsv":"M/d/yy, h:mm:ss a v","d, hmsv":"d, h:mm:ss a v","E, hmsv":"ccc, h:mm:ss a v","Ed, hmsv":"d E, h:mm:ss a v","Gy, hmsv":"y G, h:mm:ss a v","GyMMM, hmsv":"MMM y G, h:mm:ss a v","GyMMMd, hmsv":"MMM d, y G, h:mm:ss a v","GyMMMEd, hmsv":"E, MMM d, y G, h:mm:ss a v","M, hmsv":"L, h:mm:ss a v","Md, hmsv":"M/d, h:mm:ss a v","MEd, hmsv":"E, M/d, h:mm:ss a v","MMM, hmsv":"LLL, h:mm:ss a v","MMMd, hmsv":"MMM d, h:mm:ss a v","MMMEd, hmsv":"E, MMM d, h:mm:ss a v","MMMMd 'at' hmsv":"MMMM d 'at' h:mm:ss a v","y, hmsv":"y, h:mm:ss a v","yM, hmsv":"M/y, h:mm:ss a v","yMd, hmsv":"M/d/y, h:mm:ss a v","yMEd, hmsv":"E, M/d/y, h:mm:ss a v","yMMM, hmsv":"MMM y, h:mm:ss a v","yMMMd, hmsv":"MMM d, y, h:mm:ss a v","yMMMEd, hmsv":"E, MMM d, y, h:mm:ss a v","yMMMM 'at' hmsv":"MMMM y 'at' h:mm:ss a v","EEEE, MMMM d, y 'at' Hmsv":"EEEE, MMMM d, y 'at' HH:mm:ss v","MMMM d, y 'at' Hmsv":"MMMM d, y 'at' HH:mm:ss v","MMM d, y, Hmsv":"MMM d, y, HH:mm:ss v","M/d/yy, Hmsv":"M/d/yy, HH:mm:ss v","d, Hmsv":"d, HH:mm:ss v","E, Hmsv":"ccc, HH:mm:ss v","Ed, Hmsv":"d E, HH:mm:ss v","Gy, Hmsv":"y G, HH:mm:ss v","GyMMM, Hmsv":"MMM y G, HH:mm:ss v","GyMMMd, Hmsv":"MMM d, y G, HH:mm:ss v","GyMMMEd, Hmsv":"E, MMM d, y G, HH:mm:ss v","M, Hmsv":"L, HH:mm:ss v","Md, Hmsv":"M/d, HH:mm:ss v","MEd, Hmsv":"E, M/d, HH:mm:ss v","MMM, Hmsv":"LLL, HH:mm:ss v","MMMd, Hmsv":"MMM d, HH:mm:ss v","MMMEd, Hmsv":"E, MMM d, HH:mm:ss v","MMMMd 'at' Hmsv":"MMMM d 'at' HH:mm:ss v","y, Hmsv":"y, HH:mm:ss v","yM, Hmsv":"M/y, HH:mm:ss v","yMd, Hmsv":"M/d/y, HH:mm:ss v","yMEd, Hmsv":"E, M/d/y, HH:mm:ss v","yMMM, Hmsv":"MMM y, HH:mm:ss v","yMMMd, Hmsv":"MMM d, y, HH:mm:ss v","yMMMEd, Hmsv":"E, MMM d, y, HH:mm:ss v","yMMMM 'at' Hmsv":"MMMM y 'at' HH:mm:ss v","EEEE, MMMM d, y 'at' hmv":"EEEE, MMMM d, y 'at' h:mm a v","MMMM d, y 'at' hmv":"MMMM d, y 'at' h:mm a v","MMM d, y, hmv":"MMM d, y, h:mm a v","M/d/yy, hmv":"M/d/yy, h:mm a v","d, hmv":"d, h:mm a v","E, hmv":"ccc, h:mm a v","Ed, hmv":"d E, h:mm a v","Gy, hmv":"y G, h:mm a v","GyMMM, hmv":"MMM y G, h:mm a v","GyMMMd, hmv":"MMM d, y G, h:mm a v","GyMMMEd, hmv":"E, MMM d, y G, h:mm a v","M, hmv":"L, h:mm a v","Md, hmv":"M/d, h:mm a v","MEd, hmv":"E, M/d, h:mm a v","MMM, hmv":"LLL, h:mm a v","MMMd, hmv":"MMM d, h:mm a v","MMMEd, hmv":"E, MMM d, h:mm a v","MMMMd 'at' hmv":"MMMM d 'at' h:mm a v","y, hmv":"y, h:mm a v","yM, hmv":"M/y, h:mm a v","yMd, hmv":"M/d/y, h:mm a v","yMEd, hmv":"E, M/d/y, h:mm a v","yMMM, hmv":"MMM y, h:mm a v","yMMMd, hmv":"MMM d, y, h:mm a v","yMMMEd, hmv":"E, MMM d, y, h:mm a v","yMMMM 'at' hmv":"MMMM y 'at' h:mm a v","EEEE, MMMM d, y 'at' Hmv":"EEEE, MMMM d, y 'at' HH:mm v","MMMM d, y 'at' Hmv":"MMMM d, y 'at' HH:mm v","MMM d, y, Hmv":"MMM d, y, HH:mm v","M/d/yy, Hmv":"M/d/yy, HH:mm v","d, Hmv":"d, HH:mm v","E, Hmv":"ccc, HH:mm v","Ed, Hmv":"d E, HH:mm v","Gy, Hmv":"y G, HH:mm v","GyMMM, Hmv":"MMM y G, HH:mm v","GyMMMd, Hmv":"MMM d, y G, HH:mm v","GyMMMEd, Hmv":"E, MMM d, y G, HH:mm v","M, Hmv":"L, HH:mm v","Md, Hmv":"M/d, HH:mm v","MEd, Hmv":"E, M/d, HH:mm v","MMM, Hmv":"LLL, HH:mm v","MMMd, Hmv":"MMM d, HH:mm v","MMMEd, Hmv":"E, MMM d, HH:mm v","MMMMd 'at' Hmv":"MMMM d 'at' HH:mm v","y, Hmv":"y, HH:mm v","yM, Hmv":"M/y, HH:mm v","yMd, Hmv":"M/d/y, HH:mm v","yMEd, Hmv":"E, M/d/y, HH:mm v","yMMM, Hmv":"MMM y, HH:mm v","yMMMd, Hmv":"MMM d, y, HH:mm v","yMMMEd, Hmv":"E, MMM d, y, HH:mm v","yMMMM 'at' Hmv":"MMMM y 'at' HH:mm v","EEEE, MMMM d, y 'at' ms":"EEEE, MMMM d, y 'at' mm:ss","MMMM d, y 'at' ms":"MMMM d, y 'at' mm:ss","MMM d, y, ms":"MMM d, y, mm:ss","M/d/yy, ms":"M/d/yy, mm:ss","d, ms":"d, mm:ss","E, ms":"ccc, mm:ss","Ed, ms":"d E, mm:ss","Gy, ms":"y G, mm:ss","GyMMM, ms":"MMM y G, mm:ss","GyMMMd, ms":"MMM d, y G, mm:ss","GyMMMEd, ms":"E, MMM d, y G, mm:ss","M, ms":"L, mm:ss","Md, ms":"M/d, mm:ss","MEd, ms":"E, M/d, mm:ss","MMM, ms":"LLL, mm:ss","MMMd, ms":"MMM d, mm:ss","MMMEd, ms":"E, MMM d, mm:ss","MMMMd 'at' ms":"MMMM d 'at' mm:ss","y, ms":"y, mm:ss","yM, ms":"M/y, mm:ss","yMd, ms":"M/d/y, mm:ss","yMEd, ms":"E, M/d/y, mm:ss","yMMM, ms":"MMM y, mm:ss","yMMMd, ms":"MMM d, y, mm:ss","yMMMEd, ms":"E, MMM d, y, mm:ss","yMMMM 'at' ms":"MMMM y 'at' mm:ss"}},"intervalFormats":{"intervalFormatFallback":"{0} – {1}","Bh":{"B":"h B – h B","h":"h – h B"},"Bhm":{"B":"h:mm B – h:mm B","h":"h:mm – h:mm B","m":"h:mm – h:mm B"},"d":{"d":"d – d"},"Gy":{"G":"y G – y G","y":"y – y G"},"GyM":{"G":"M/y GGGGG – M/y GGGGG","M":"M/y – M/y GGGGG","y":"M/y – M/y GGGGG"},"GyMd":{"d":"M/d/y – M/d/y GGGGG","G":"M/d/y GGGGG – M/d/y GGGGG","M":"M/d/y – M/d/y GGGGG","y":"M/d/y – M/d/y GGGGG"},"GyMEd":{"d":"E, M/d/y – E, M/d/y GGGGG","G":"E, M/d/y GGGGG – E, M/d/y GGGGG","M":"E, M/d/y – E, M/d/y GGGGG","y":"E, M/d/y – E, M/d/y GGGGG"},"GyMMM":{"G":"MMM y G – MMM y G","M":"MMM – MMM y G","y":"MMM y – MMM y G"},"GyMMMd":{"d":"MMM d – d, y G","G":"MMM d, y G – MMM d, y G","M":"MMM d – MMM d, y G","y":"MMM d, y – MMM d, y G"},"GyMMMEd":{"d":"E, MMM d – E, MMM d, y G","G":"E, MMM d, y G – E, MMM d, y G","M":"E, MMM d – E, MMM d, y G","y":"E, MMM d, y – E, MMM d, y G"},"h":{"a":"h a – h a","h":"h – h a"},"H":{"H":"HH – HH"},"hm":{"a":"h:mm a – h:mm a","h":"h:mm – h:mm a","m":"h:mm – h:mm a"},"Hm":{"H":"HH:mm – HH:mm","m":"HH:mm – HH:mm"},"hmv":{"a":"h:mm a – h:mm a v","h":"h:mm – h:mm a v","m":"h:mm – h:mm a v"},"Hmv":{"H":"HH:mm – HH:mm v","m":"HH:mm – HH:mm v"},"hv":{"a":"h a – h a v","h":"h – h a v"},"Hv":{"H":"HH – HH v"},"M":{"M":"M – M"},"Md":{"d":"M/d – M/d","M":"M/d – M/d"},"MEd":{"d":"E, M/d – E, M/d","M":"E, M/d – E, M/d"},"MMM":{"M":"MMM – MMM"},"MMMd":{"d":"MMM d – d","M":"MMM d – MMM d"},"MMMEd":{"d":"E, MMM d – E, MMM d","M":"E, MMM d – E, MMM d"},"y":{"y":"y – y"},"yM":{"M":"M/y – M/y","y":"M/y – M/y"},"yMd":{"d":"M/d/y – M/d/y","M":"M/d/y – M/d/y","y":"M/d/y – M/d/y"},"yMEd":{"d":"E, M/d/y – E, M/d/y","M":"E, M/d/y – E, M/d/y","y":"E, M/d/y – E, M/d/y"},"yMMM":{"M":"MMM – MMM y","y":"MMM y – MMM y"},"yMMMd":{"d":"MMM d – d, y","M":"MMM d – MMM d, y","y":"MMM d, y – MMM d, y"},"yMMMEd":{"d":"E, MMM d – E, MMM d, y","M":"E, MMM d – E, MMM d, y","y":"E, MMM d, y – E, MMM d, y"},"yMMMM":{"M":"MMMM – MMMM y","y":"MMMM y – MMMM y"}},"hourCycle":"h12","nu":["latn"],"ca":["gregory"],"hc":["h12","","h23",""]},"locale":"en"}
)
  }
}

if (!((function(e){try{if(Object.prototype.hasOwnProperty.call(e,"WeakSet")&&0===e.WeakSet.length){var t={},r=new e.WeakSet([t])
return r.has(t)&&!1===r["delete"](0)}return!1}catch(a){return!1}})(self)
)) {

// WeakSet
/* global Call, CreateMethodProperty, Get, GetIterator, IsArray, IsCallable, IteratorClose, IteratorStep, IteratorValue, OrdinaryCreateFromConstructor, SameValueZero, Type, Symbol */
(function (global) {
	// Deleted set items mess with iterator pointers, so rather than removing them mark them as deleted. Can't use undefined or null since those both valid keys so use a private symbol.
	var undefMarker = Symbol('undef');
	// 23.4.1.1. WeakSet ( [ iterable ] )
	var WeakSet = function WeakSet() {
		// 1. If NewTarget is undefined, throw a TypeError exception.
		if (!(this instanceof WeakSet)) {
			throw new TypeError('Constructor WeakSet requires "new"');
		}
		// 2. Let set be ? OrdinaryCreateFromConstructor(NewTarget, "%WeakSetPrototype%", « [[WeakSetData]] »).
		var set = OrdinaryCreateFromConstructor(this, WeakSet.prototype, {
			_values: [],
			_size: 0,
			_es6WeakSet: true
		});

		// 3. Set set.[[WeakSetData]] to a new empty List.
		// Polyfill.io - This step was done as part of step two.

		// 4. If iterable is not present, let iterable be undefined.
		var iterable = arguments.length > 0 ? arguments[0] : undefined;
		// 5. If iterable is either undefined or null, return set.
		if (iterable === null || iterable === undefined) {
			return set;
		}
		// 6. Let adder be ? Get(set, "add").
		var adder = Get(set, 'add');
		// 7. If IsCallable(adder) is false, throw a TypeError exception.
		if (!IsCallable(adder)) {
			throw new TypeError("WeakSet.prototype.add is not a function");
		}
		try {
			// 8. Let iteratorRecord be ? GetIterator(iterable).
			var iteratorRecord = GetIterator(iterable);
			// 9. Repeat,
			// eslint-disable-next-line no-constant-condition
			while (true) {
				// a. Let next be ? IteratorStep(iteratorRecord).
				var next = IteratorStep(iteratorRecord);
				// b. If next is false, return set.
				if (next === false) {
					return set;
				}
				// c. Let nextValue be ? IteratorValue(next).
				var nextValue = IteratorValue(next);
				// d. Let status be Call(adder, set, « nextValue »).
				try {
					Call(adder, set, [nextValue]);
				} catch (e) {
					// e. If status is an abrupt completion, return ? IteratorClose(iteratorRecord, status).
					return IteratorClose(iteratorRecord, e);
				}
			}
		} catch (e) {
			// Polyfill.io - For user agents which do not have iteration methods on argument objects or arrays, we can special case those.
			if (IsArray(iterable) ||
				Object.prototype.toString.call(iterable) === '[object Arguments]' ||
				// IE 7 & IE 8 return '[object Object]' for the arguments object, we can detect by checking for the existence of the callee property
				(!!iterable.callee)) {
				var index;
				var length = iterable.length;
				for (index = 0; index < length; index++) {
					Call(adder, set, [iterable[index]]);
				}
			}
		}
		return set;
	};

	// 23.4.2.1. WeakSet.prototype
	// The initial value of WeakSet.prototype is the intrinsic %WeakSetPrototype% object.
	// This property has the attributes { [[Writable]]: false, [[Enumerable]]: false, [[Configurable]]: false }.
	Object.defineProperty(WeakSet, 'prototype', {
		configurable: false,
		enumerable: false,
		writable: false,
		value: {}
	});

	// 23.4.3.1. WeakSet.prototype.add ( value )
	CreateMethodProperty(WeakSet.prototype, 'add', function add(value) {
		// 1. Let S be the this value.
		var S = this;
		// 2. If Type(S) is not Object, throw a TypeError exception.
		if (Type(S) !== 'object') {
			throw new TypeError('Method WeakSet.prototype.add called on incompatible receiver ' + Object.prototype.toString.call(S));
		}
		// 3. If S does not have a [[WeakSetData]] internal slot, throw a TypeError exception.
		if (S._es6WeakSet !== true) {
			throw new TypeError('Method WeakSet.prototype.add called on incompatible receiver ' + Object.prototype.toString.call(S));
		}
		// 4. If Type(value) is not Object, throw a TypeError exception.
		if (Type(value) !== 'object') {
			throw new TypeError('Invalid value used in weak set');
		}
		// 5. Let entries be the List that is S.[[WeakSetData]].
		var entries = S._values;
		// 6. For each e that is an element of entries, do
		for (var i = 0; i < entries.length; i++) {
			var e = entries[i];
			// a. If e is not empty and SameValue(e, value) is true, then
			if (e !== undefMarker && SameValueZero(e, value)) {
				// i. Return S.
				return S;
			}
		}
		// 7. Append value as the last element of entries.
		S._values.push(value);
		// 8. Return S.
		return S;
	});

	// 23.4.3.2. WeakSet.prototype.constructor
	CreateMethodProperty(WeakSet.prototype, 'constructor', WeakSet);

	// 23.4.3.3. WeakSet.prototype.delete ( value )
	CreateMethodProperty(WeakSet.prototype, 'delete', function (value) {
		// 1. Let S be the this value.
		var S = this;
		// 2. If Type(S) is not Object, throw a TypeError exception.
		if (Type(S) !== 'object') {
			throw new TypeError('Method WeakSet.prototype.delete called on incompatible receiver ' + Object.prototype.toString.call(S));
		}
		// 3. If S does not have a [[WeakSetData]] internal slot, throw a TypeError exception.
		if (S._es6WeakSet !== true) {
			throw new TypeError('Method WeakSet.prototype.delete called on incompatible receiver ' + Object.prototype.toString.call(S));
		}
		// 4. If Type(value) is not Object, return false.
		if (Type(value) !== 'object') {
			return false;
		}
		// 5. Let entries be the List that is S.[[WeakSetData]].
		var entries = S._values;
		// 6. For each e that is an element of entries, do
		for (var i = 0; i < entries.length; i++) {
			var e = entries[i];
			// a. If e is not empty and SameValue(e, value) is true, then
			if (e !== undefMarker && SameValueZero(e, value)) {
				// i. Replace the element of entries whose value is e with an element whose value is empty.
				entries[i] = undefMarker;
				// ii. Return true.
				return true;
			}
		}
		// 7. Return false.
		return false;
	});

	// 23.4.3.4. WeakSet.prototype.has ( value )
	CreateMethodProperty(WeakSet.prototype, 'has', function has(value) {
		// 1. Let S be the this value.
		var S = this;
		// 2. If Type(S) is not Object, throw a TypeError exception.
		if (Type(S) !== 'object') {
			throw new TypeError('Method WeakSet.prototype.has called on incompatible receiver ' + Object.prototype.toString.call(S));
		}
		// 3. If S does not have a [[WeakSetData]] internal slot, throw a TypeError exception.
		if (S._es6WeakSet !== true) {
			throw new TypeError('Method WeakSet.prototype.has called on incompatible receiver ' + Object.prototype.toString.call(S));
		}
		// 4. Let entries be the List that is S.[[WeakSetData]].
		var entries = S._values;
		// 5. If Type(value) is not Object, return false.
		if (Type(value) !== 'object') {
			return false;
		}
		// 6. For each e that is an element of entries, do
		for (var i = 0; i < entries.length; i++) {
			var e = entries[i];
			// a. If e is not empty and SameValue(e, value) is true, return true.
			if (e !== undefMarker && SameValueZero(e, value)) {
				return true;
			}
		}
		// 7. Return false.
		return false;
	});

	// 23.4.3.5. WeakSet.prototype [ @@toStringTag ]
	// The initial value of the @@toStringTag property is the String value "WeakSet".
	// This property has the attributes { [[Writable]]: false, [[Enumerable]]: false, [[Configurable]]: true }.

	// Polyfill.io - Safari 8 implements Set.name but as a non-configurable property, which means it would throw an error if we try and configure it here.
	if (!('name' in WeakSet)) {
		// 19.2.4.2 name
		Object.defineProperty(WeakSet, 'name', {
			configurable: true,
			enumerable: false,
			writable: false,
			value: 'WeakSet'
		});
	}

	// Export the object
	try {
		CreateMethodProperty(global, 'WeakSet', WeakSet);
	} catch (e) {
		// IE8 throws an error here if we set enumerable to false.
		// More info on table 2: https://msdn.microsoft.com/en-us/library/dd229916(v=vs.85).aspx
		global.WeakSet = WeakSet;
	}

}(self));

}

if (!("Window"in self
)) {

// Window
if ((typeof WorkerGlobalScope === "undefined") && (typeof importScripts !== "function")) {
	(function (global) {
		if (global.constructor) {
			global.Window = global.constructor;
		} else {
			(global.Window = global.constructor = new Function('return function Window() {}')()).prototype = self;
		}
	}(self));
}

}

if (!((function(n){if(!("Event"in n))return!1
try{return new Event("click"),!0}catch(t){return!1}})(self)
)) {

// Event
(function () {
	var unlistenableWindowEvents = {
		click: 1,
		dblclick: 1,
		keyup: 1,
		keypress: 1,
		keydown: 1,
		mousedown: 1,
		mouseup: 1,
		mousemove: 1,
		mouseover: 1,
		mouseenter: 1,
		mouseleave: 1,
		mouseout: 1,
		storage: 1,
		storagecommit: 1,
		textinput: 1
	};

	// This polyfill depends on availability of `document` so will not run in a worker
	// However, we asssume there are no browsers with worker support that lack proper
	// support for `Event` within the worker
	if (typeof document === 'undefined' || typeof window === 'undefined') return;

	var existingProto = (window.Event && window.Event.prototype) || null;
	function Event(type, eventInitDict) {
		if (!type) {
			throw new Error('Not enough arguments');
		}

		var event;
		// Shortcut if browser supports createEvent
		if ('createEvent' in document) {
			event = document.createEvent('Event');
			var bubbles = eventInitDict && eventInitDict.bubbles !== undefined ? eventInitDict.bubbles : false;
			var cancelable = eventInitDict && eventInitDict.cancelable !== undefined ? eventInitDict.cancelable : false;

			event.initEvent(type, bubbles, cancelable);

			return event;
		}

		event = document.createEventObject();

		event.type = type;
		event.bubbles = eventInitDict && eventInitDict.bubbles !== undefined ? eventInitDict.bubbles : false;
		event.cancelable = eventInitDict && eventInitDict.cancelable !== undefined ? eventInitDict.cancelable : false;

		return event;
	}
	Event.NONE = 0;
	Event.CAPTURING_PHASE = 1;
	Event.AT_TARGET = 2;
	Event.BUBBLING_PHASE = 3;
	window.Event = Window.prototype.Event = Event;
	if (existingProto) {
		Object.defineProperty(window.Event, 'prototype', {
			configurable: false,
			enumerable: false,
			writable: true,
			value: existingProto
		});
	}

	if (!('createEvent' in document)) {
		window.addEventListener = Window.prototype.addEventListener = Document.prototype.addEventListener = Element.prototype.addEventListener = function addEventListener() {
			var
			element = this,
			type = arguments[0],
			listener = arguments[1];

			if (element === window && type in unlistenableWindowEvents) {
				throw new Error('In IE8 the event: ' + type + ' is not available on the window object. Please see https://github.com/Financial-Times/polyfill-service/issues/317 for more information.');
			}

			if (!element._events) {
				element._events = {};
			}

			if (!element._events[type]) {
				element._events[type] = function (event) {
					var
					list = element._events[event.type].list,
					events = list.slice(),
					index = -1,
					length = events.length,
					eventElement;

					event.preventDefault = function preventDefault() {
						if (event.cancelable !== false) {
							event.returnValue = false;
						}
					};

					event.stopPropagation = function stopPropagation() {
						event.cancelBubble = true;
					};

					event.stopImmediatePropagation = function stopImmediatePropagation() {
						event.cancelBubble = true;
						event.cancelImmediate = true;
					};

					event.currentTarget = element;
					event.relatedTarget = event.fromElement || null;
					event.target = event.target || event.srcElement || element;
					event.timeStamp = new Date().getTime();

					if (event.clientX) {
						event.pageX = event.clientX + document.documentElement.scrollLeft;
						event.pageY = event.clientY + document.documentElement.scrollTop;
					}

					while (++index < length && !event.cancelImmediate) {
						if (index in events) {
							eventElement = events[index];

							if (list.includes(eventElement) && typeof eventElement === 'function') {
								eventElement.call(element, event);
							}
						}
					}
				};

				element._events[type].list = [];

				if (element.attachEvent) {
					element.attachEvent('on' + type, element._events[type]);
				}
			}

			element._events[type].list.push(listener);
		};

		window.removeEventListener = Window.prototype.removeEventListener = Document.prototype.removeEventListener = Element.prototype.removeEventListener = function removeEventListener() {
			var
			element = this,
			type = arguments[0],
			listener = arguments[1],
			index;

			if (element._events && element._events[type] && element._events[type].list) {
				index = element._events[type].list.indexOf(listener);

				if (index !== -1) {
					element._events[type].list.splice(index, 1);

					if (!element._events[type].list.length) {
						if (element.detachEvent) {
							element.detachEvent('on' + type, element._events[type]);
						}
						delete element._events[type];
					}
				}
			}
		};

		window.dispatchEvent = Window.prototype.dispatchEvent = Document.prototype.dispatchEvent = Element.prototype.dispatchEvent = function dispatchEvent(event) {
			if (!arguments.length) {
				throw new Error('Not enough arguments');
			}

			if (!event || typeof event.type !== 'string') {
				throw new Error('DOM Events Exception 0');
			}

			var element = this, type = event.type;

			try {
				if (!event.bubbles) {
					event.cancelBubble = true;

					var cancelBubbleEvent = function (event) {
						event.cancelBubble = true;

						(element || window).detachEvent('on' + type, cancelBubbleEvent);
					};

					this.attachEvent('on' + type, cancelBubbleEvent);
				}

				this.fireEvent('on' + type, event);
			} catch (error) {
				event.target = element;

				do {
					event.currentTarget = element;

					if ('_events' in element && typeof element._events[type] === 'function') {
						element._events[type].call(element, event);
					}

					if (typeof element['on' + type] === 'function') {
						element['on' + type].call(element, event);
					}

					element = element.nodeType === 9 ? element.parentWindow : element.parentNode;
				} while (element && !event.cancelBubble);
			}

			return true;
		};

		// Add the DOMContentLoaded Event
		document.attachEvent('onreadystatechange', function() {
			if (document.readyState === 'complete') {
				document.dispatchEvent(new Event('DOMContentLoaded', {
					bubbles: true
				}));
			}
		});
	}
}());

}

if (!("CustomEvent"in self&&("function"==typeof self.CustomEvent||self.CustomEvent.toString().indexOf("CustomEventConstructor")>-1)
)) {

// CustomEvent
self.CustomEvent = function CustomEvent(type, eventInitDict) {
	if (!type) {
		throw Error('TypeError: Failed to construct "CustomEvent": An event name must be provided.');
	}

	var event;
	eventInitDict = eventInitDict || {bubbles: false, cancelable: false, detail: null};

	if ('createEvent' in document) {
		try {
			event = document.createEvent('CustomEvent');
			event.initCustomEvent(type, eventInitDict.bubbles, eventInitDict.cancelable, eventInitDict.detail);
		} catch (error) {
			// for browsers which don't support CustomEvent at all, we use a regular event instead
			event = document.createEvent('Event');
			event.initEvent(type, eventInitDict.bubbles, eventInitDict.cancelable);
			event.detail = eventInitDict.detail;
		}
	} else {

		// IE8
		event = new Event(type, eventInitDict);
		event.detail = eventInitDict && eventInitDict.detail || null;
	}
	return event;
};

CustomEvent.prototype = Event.prototype;

}

if (!("document"in self&&"hidden"in document&&"visibilityState"in document
)) {

// document.visibilityState
// PageVisibility
(function () {
	var prefix = document.webkitVisibilityState ? 'webkit' : document.mozVisibilityState ? 'moz' : null;

	function normalizeState () {
		document.hidden = document[prefix + 'Hidden'];
		document.visibilityState = document[prefix + 'VisibilityState'];
	}

	if (!prefix) {
		return;
	}

	normalizeState();

	document.addEventListener(prefix + 'visibilitychange', function () {
		normalizeState();
		document.dispatchEvent(new CustomEvent('visibilitychange'));
	});

}());

}

if (!((function(){var n=!1
return document.documentElement.addEventListener("focusin",function(){n=!0}),document.documentElement.dispatchEvent(new Event("focusin")),n})()
)) {

// Event.focusin
self.addEventListener('focus', function (event) {
	event.target.dispatchEvent(new Event('focusin', {
		bubbles: true,
		cancelable: true
	}));
}, true);

self.addEventListener('blur', function (event) {
	event.target.dispatchEvent(new Event('focusout', {
		bubbles: true,
		cancelable: true
	}));
}, true);

}

if (!("onhashchange"in self&&(null==self.onhashchange||"function"==typeof self.onhashchange)
)) {

// Event.hashchange
(function (global) {
	var hash = global.location.hash;

	function poll() {
		if (hash !== global.location.hash) {
			hash = global.location.hash;

			global.dispatchEvent(new Event('hashchange'));
		}

		setTimeout(poll, 500);
	}

	// Make sure a check for 'onhashchange' in window will pass (note: setting to undefined IE<9 causes 'Not implemented' error)
	global.onhashchange = function () { };

	poll();
}(self));

}

if (!("XMLHttpRequest"in self&&"prototype"in self.XMLHttpRequest&&"addEventListener"in self.XMLHttpRequest.prototype
)) {

// XMLHttpRequest
/* global ActiveXObject */
(function (global, NativeXMLHttpRequest) {
	// <Global>.XMLHttpRequest
	global.XMLHttpRequest = function XMLHttpRequest() {
		var request = this, nativeRequest = request._request = NativeXMLHttpRequest ? new NativeXMLHttpRequest() : new ActiveXObject('MSXML2.XMLHTTP.3.0');

		nativeRequest.onreadystatechange = function () {
			request.readyState = nativeRequest.readyState;

			var readyState = request.readyState === 4;

			request.response = request.responseText = readyState ? nativeRequest.responseText : null;
			request.status = readyState ? nativeRequest.status : null;
			request.statusText = readyState ? nativeRequest.statusText : null;

			request.dispatchEvent(new Event('readystatechange'));

			if (readyState) {
				request.dispatchEvent(new Event('load'));
			}
		};

		if ('onerror' in nativeRequest) {
			nativeRequest.onerror = function () {
				request.dispatchEvent(new Event('error'));
			};
		}
	};

	global.XMLHttpRequest.UNSENT = 0;
	global.XMLHttpRequest.OPENED = 1;
	global.XMLHttpRequest.HEADERS_RECEIVED = 2;
	global.XMLHttpRequest.LOADING = 3;
	global.XMLHttpRequest.DONE = 4;

	var XMLHttpRequestPrototype = global.XMLHttpRequest.prototype;

	XMLHttpRequestPrototype.addEventListener = global.addEventListener;
	XMLHttpRequestPrototype.removeEventListener = global.removeEventListener;
	XMLHttpRequestPrototype.dispatchEvent = global.dispatchEvent;

	XMLHttpRequestPrototype.abort = function abort() {
		return this._request();
	};

	XMLHttpRequestPrototype.getAllResponseHeaders = function getAllResponseHeaders() {
		return this._request.getAllResponseHeaders();
	};

	XMLHttpRequestPrototype.getResponseHeader = function getResponseHeader(header) {
		return this._request.getResponseHeader(header);
	};

	XMLHttpRequestPrototype.open = function open(method, url) {
		// method, url, async, username, password
		this._request.open(method, url, arguments[2], arguments[3], arguments[4]);
	};

	XMLHttpRequestPrototype.overrideMimeType = function overrideMimeType(mimetype) {
		this._request.overrideMimeType(mimetype);
	};

	XMLHttpRequestPrototype.send = function send() {
		this._request.send(0 in arguments ? arguments[0] : null);
	};

	XMLHttpRequestPrototype.setRequestHeader = function setRequestHeader(header, value) {
		this._request.setRequestHeader(header, value);
	};
}(self, self.XMLHttpRequest));

}

})
('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
