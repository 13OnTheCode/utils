# @13OnTheCode/Utils

<img src="https://github-production-user-asset-6210df.s3.amazonaws.com/137921275/289103135-37cc1802-66d7-4951-9a15-c9f3a7bebef7.svg" width="100" height="100" align="right" alt="JavaScript" />

[![Version](https://img.shields.io/npm/v/@13onthecode/utils?color=ffd600&label=)](https://www.npmjs.com/package/@13onthecode/utils)
[![License](https://img.shields.io/npm/l/@13onthecode/utils?color=ffd600&label=)](LICENSE.md)

English | [简体中文](README.CN.md)

A collection of JavaScript/TypeScript utility tools

## Features

- Zero dependency
- Tree Shakable

## Prerequisites

### Node.js
- Version >= 16.0.0
- ESM Project

## Install

```bash
npm install @13onthecode/utils --save-dev
```

## Usage

```javascript
import { mergeObject } from '@13onthecode/utils'

const foo = {
  foo: 'foo',
  other: {
    foo: 'foo'
  }
}

const bar = {
  bar: 'bar',
  other: {
    bar: 'bar'
  }
}

const merged = mergeObject(foo, bar)

// => {
//   foo: "foo"
//   bar: "bar"
//   other: {
//       bar: 'bar'
//   }
// }

const deepMerged = mergeObject(foo, bar, { mode: 'deep' })

// => {
//   foo: "foo"
//   bar: "bar"
//   other: {
//       foo: "foo"
//       bar: "bar"
//   }
// }
```

## API

### Array

- [`Unique`](src/array/unique.ts)
- [`MergeArray`](src/array/mergeArray.ts)

### Collocation

- [`Clone`](src/collocation/clone.ts)
- [`GetRawType`](src/collocation/getRawType.ts)
- [`MatchRawType`](src/collocation/matchRawType.ts)
- [`ToArray`](src/collocation/toArray.ts)
- [`ToEntries`](src/collocation/toEntries.ts)

### Guard

- [`IsArray`](src/guard/isArray.ts)
- [`IsArrayBuffer`](src/guard/isArrayBuffer.ts)
- [`IsAsyncFunction`](src/guard/isAsyncFunction.ts)
- [`IsAsyncIterable`](src/guard/isAsyncIterable.ts)
- [`IsBigInt`](src/guard/isBigInt.ts)
- [`IsBigInt64Array`](src/guard/isBigInt64Array.ts)
- [`IsBigUint64Array`](src/guard/isBigUint64Array.ts)
- [`IsBlob`](src/guard/isBlob.ts)
- [`IsBoolean`](src/guard/isBoolean.ts)
- [`IsDataView`](src/guard/isDataView.ts)
- [`IsDate`](src/guard/isDate.ts)
- [`IsEmptyArray`](src/guard/isEmptyArray.ts)
- [`IsEmptyMap`](src/guard/isEmptyMap.ts)
- [`IsEmptyObject`](src/guard/isEmptyObject.ts)
- [`IsEmptySet`](src/guard/isEmptySet.ts)
- [`IsEmptyString`](src/guard/isEmptyString.ts)
- [`IsError`](src/guard/isError.ts)
- [`IsFalse`](src/guard/isFalse.ts)
- [`IsFile`](src/guard/isFile.ts)
- [`IsFloat32Array`](src/guard/isFloat32Array.ts)
- [`IsFloat64Array`](src/guard/isFloat64Array.ts)
- [`IsFormData`](src/guard/isFormData.ts)
- [`IsFunction`](src/guard/isFunction.ts)
- [`IsInfiniteNumber`](src/guard/isInfiniteNumber.ts)
- [`IsInt8Array`](src/guard/isInt8Array.ts)
- [`IsInt16Array`](src/guard/isInt16Array.ts)
- [`IsInt32Array`](src/guard/isInt32Array.ts)
- [`IsIterable`](src/guard/isIterable.ts)
- [`IsMap`](src/guard/isMap.ts)
- [`IsNaN`](src/guard/isNaN.ts)
- [`IsNegativeNumber`](src/guard/isNegativeNumber.ts)
- [`IsNonEmptyArray`](src/guard/isNonEmptyArray.ts)
- [`IsNonEmptyMap`](src/guard/isNonEmptyMap.ts)
- [`IsNonEmptyObject`](src/guard/isNonEmptyObject.ts)
- [`IsNonEmptySet`](src/guard/isNonEmptySet.ts)
- [`IsNonEmptyString`](src/guard/isNonEmptyString.ts)
- [`IsNull`](src/guard/isNull.ts)
- [`IsNumber`](src/guard/isNumber.ts)
- [`IsObject`](src/guard/isObject.ts)
- [`IsPositiveNumber`](src/guard/isPositiveNumber.ts)
- [`IsPrimitive`](src/guard/isPrimitive.ts)
- [`IsPromise`](src/guard/isPromise.ts)
- [`IsRegExp`](src/guard/isRegExp.ts)
- [`IsSet`](src/guard/isSet.ts)
- [`IsString`](src/guard/isString.ts)
- [`IsSymbol`](src/guard/isSymbol.ts)
- [`IsTrue`](src/guard/isTrue.ts)
- [`IsTypedArray`](src/guard/isTypedArray.ts)
- [`IsUint8Array`](src/guard/isUint8Array.ts)
- [`IsUint8ClampedArray`](src/guard/isUint8ClampedArray.ts)
- [`IsUint16Array`](src/guard/isUint16Array.ts)
- [`IsUint32Array`](src/guard/isUint32Array.ts)
- [`IsUndefined`](src/guard/isUndefined.ts)
- [`IsWeakMap`](src/guard/isWeakMap.ts)
- [`IsWeakRef`](src/guard/isWeakRef.ts)
- [`IsWeakSet`](src/guard/isWeakSet.ts)

### Node

- [`IsDev`](src/node/isDev.ts)
- [`IsProd`](src/node/isProd.ts)

### Object

- [`HasOwnProperty`](src/object/hasOwnProperty.ts)
- [`MergeObject`](src/object/mergeObject.ts)

### Runtime

- [`IsBrowser`](src/runtime/isBrowser.ts)
- [`IsBun`](src/runtime/isBun.ts)
- [`IsDeno`](src/runtime/isDeno.ts)
- [`IsNode`](src/runtime/isNode.ts)
- [`IsServer`](src/runtime/isServer.ts)

### String

- [`CamelCase`](src/string/camelCase.ts)
- [`CapitalCase`](src/string/capitalCase.ts)
- [`Capitalize`](src/string/capitalize.ts)
- [`CustomCase`](src/string/customCase.ts)
- [`IsLowerCase`](src/string/isLowerCase.ts)
- [`IsUpperCase`](src/string/isUpperCase.ts)
- [`KebabCase`](src/string/kebabCase.ts)
- [`PascalCase`](src/string/pascalCase.ts)
- [`SnakeCase`](src/string/snakeCase.ts)
- [`SpaceCase`](src/string/spaceCase.ts)
- [`UnCapitalize`](src/string/unCapitalize.ts)

## Check Also

- [`@13onthecode/types`](https://github.com/13OnTheCode/types)

## License

[MIT](LICENSE.md) License &copy; 2023-PRESENT [13OnTheCode](https://github.com/13OnTheCode)
