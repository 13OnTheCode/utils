# @13OnTheCode/Utils

<img src="https://github-production-user-asset-6210df.s3.amazonaws.com/137921275/289103135-37cc1802-66d7-4951-9a15-c9f3a7bebef7.svg" width="100" height="100" align="right" alt="JavaScript" />

[![Version](https://img.shields.io/npm/v/@13onthecode/utils?color=ffd600&label=)](https://www.npmjs.com/package/@13onthecode/utils)
[![License](https://img.shields.io/npm/l/@13onthecode/utils?color=ffd600&label=)](LICENSE.md)

[English](README.md) | 简体中文

JavaScript/TypeScript 实用工具集

## Features

- 零依赖 (zero-dependency)
- 可摇树 (tree-shakable)

## Prerequisites

### Node.js
- 版本 >= 16.0.0
- ESM 项目

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

- [`unique`](src/array/unique.ts)
- [`mergeArray`](src/array/mergeArray.ts)

### Collocation

- [`clone`](src/collocation/clone.ts)
- [`getRawType`](src/collocation/getRawType.ts)
- [`matchRawType`](src/collocation/matchRawType.ts)
- [`toArray`](src/collocation/toArray.ts)
- [`toEntries`](src/collocation/toEntries.ts)

### Guard

- [`isArray`](src/guard/isArray.ts)
- [`isArrayBuffer`](src/guard/isArrayBuffer.ts)
- [`isArrayBufferView`](src/guard/isArrayBufferView.ts)
- [`isAsyncFunction`](src/guard/isAsyncFunction.ts)
- [`isAsyncIterable`](src/guard/isAsyncIterable.ts)
- [`isBigInt`](src/guard/isBigInt.ts)
- [`isBigInt64Array`](src/guard/isBigInt64Array.ts)
- [`isBigUint64Array`](src/guard/isBigUint64Array.ts)
- [`isBlob`](src/guard/isBlob.ts)
- [`isBoolean`](src/guard/isBoolean.ts)
- [`isDataView`](src/guard/isDataView.ts)
- [`isDate`](src/guard/isDate.ts)
- [`isEmptyArray`](src/guard/isEmptyArray.ts)
- [`isEmptyMap`](src/guard/isEmptyMap.ts)
- [`isEmptyObject`](src/guard/isEmptyObject.ts)
- [`isEmptySet`](src/guard/isEmptySet.ts)
- [`isEmptyString`](src/guard/isEmptyString.ts)
- [`isError`](src/guard/isError.ts)
- [`isFalse`](src/guard/isFalse.ts)
- [`isFile`](src/guard/isFile.ts)
- [`isFloat32Array`](src/guard/isFloat32Array.ts)
- [`isFloat64Array`](src/guard/isFloat64Array.ts)
- [`isFormData`](src/guard/isFormData.ts)
- [`isFunction`](src/guard/isFunction.ts)
- [`isInfiniteNumber`](src/guard/isInfiniteNumber.ts)
- [`isInt8Array`](src/guard/isInt8Array.ts)
- [`isInt16Array`](src/guard/isInt16Array.ts)
- [`isInt32Array`](src/guard/isInt32Array.ts)
- [`isIterable`](src/guard/isIterable.ts)
- [`isMap`](src/guard/isMap.ts)
- [`isModule`](src/guard/isModule.ts)
- [`isNaN`](src/guard/isNaN.ts)
- [`isNegativeNumber`](src/guard/isNegativeNumber.ts)
- [`isNonEmptyArray`](src/guard/isNonEmptyArray.ts)
- [`isNonEmptyMap`](src/guard/isNonEmptyMap.ts)
- [`isNonEmptyObject`](src/guard/isNonEmptyObject.ts)
- [`isNonEmptySet`](src/guard/isNonEmptySet.ts)
- [`isNonEmptyString`](src/guard/isNonEmptyString.ts)
- [`isNull`](src/guard/isNull.ts)
- [`isNumber`](src/guard/isNumber.ts)
- [`isObject`](src/guard/isObject.ts)
- [`isPositiveNumber`](src/guard/isPositiveNumber.ts)
- [`isPrimitive`](src/guard/isPrimitive.ts)
- [`isPromise`](src/guard/isPromise.ts)
- [`isReadableStream`](src/guard/isReadableStream.ts)
- [`isRegExp`](src/guard/isRegExp.ts)
- [`isSet`](src/guard/isSet.ts)
- [`isString`](src/guard/isString.ts)
- [`isSymbol`](src/guard/isSymbol.ts)
- [`isTrue`](src/guard/isTrue.ts)
- [`isTypedArray`](src/guard/isTypedArray.ts)
- [`isUint8Array`](src/guard/isUint8Array.ts)
- [`isUint8ClampedArray`](src/guard/isUint8ClampedArray.ts)
- [`isUint16Array`](src/guard/isUint16Array.ts)
- [`isUint32Array`](src/guard/isUint32Array.ts)
- [`isUndefined`](src/guard/isUndefined.ts)
- [`isURLSearchParams`](src/guard/isURLSearchParams.ts)
- [`isWeakMap`](src/guard/isWeakMap.ts)
- [`isWeakRef`](src/guard/isWeakRef.ts)
- [`isWeakSet`](src/guard/isWeakSet.ts)

### Node

- [`isDev`](src/node/isDev.ts)
- [`isProd`](src/node/isProd.ts)

### Object

- [`hasOwnProperty`](src/object/hasOwnProperty.ts)
- [`mergeObject`](src/object/mergeObject.ts)

### Runtime

- [`isBrowser`](src/runtime/isBrowser.ts)
- [`isBun`](src/runtime/isBun.ts)
- [`isDeno`](src/runtime/isDeno.ts)
- [`isNode`](src/runtime/isNode.ts)
- [`isServer`](src/runtime/isServer.ts)

### String

- [`camelCase`](src/string/camelCase.ts)
- [`capitalCase`](src/string/capitalCase.ts)
- [`capitalize`](src/string/capitalize.ts)
- [`customCase`](src/string/customCase.ts)
- [`isLowerCase`](src/string/isLowerCase.ts)
- [`isUpperCase`](src/string/isUpperCase.ts)
- [`kebabCase`](src/string/kebabCase.ts)
- [`pascalCase`](src/string/pascalCase.ts)
- [`snakeCase`](src/string/snakeCase.ts)
- [`spaceCase`](src/string/spaceCase.ts)
- [`unCapitalize`](src/string/unCapitalize.ts)

## Check Also

- [`@13onthecode/types`](https://github.com/13OnTheCode/types)

## License

[MIT](LICENSE.md) License &copy; 2023-PRESENT [13OnTheCode](https://github.com/13OnTheCode)
