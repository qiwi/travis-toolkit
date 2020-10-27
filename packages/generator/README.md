# @travis-toolkit/generator
Code generator for travis-ci API V3

## Install
```shell script
yarn add @travis-toolkit/generator
```

## Usage
```javascript
import { generates } from '@travis-toolkit/generator'
await generates(
  path_to_save,
  'https://developer.travis-ci.com',
)
```
