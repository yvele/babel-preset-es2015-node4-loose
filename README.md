# babel-preset-es2015-node4-loose

> Babel preset that uses [modify-babel-preset] to modify [babel-preset-es2015-node4]
and enable [loose mode] where available.


[![npm version](https://img.shields.io/npm/v/babel-preset-es2015-node4-loose.svg)](https://www.npmjs.com/package/babel-preset-es2015-node4-loose)
[![MIT licensed](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Travis Status](https://img.shields.io/travis/yvele/babel-preset-es2015-node4-loose/master.svg?label=travis)](https://travis-ci.org/yvele/babel-preset-es2015-node4-loose)

## Install

Install both this preset, and the core 'babel-preset-es2015-node4' that it modifies:

```sh
$ npm install --save-dev babel-preset-es2015-node4-loose babel-preset-es2015-node4
```

Why do you need to install both? The idea is that `babel-preset-es2015-node4-loose`
will always be up to date because it will always use the version of
`babel-preset-2015-node4` that you have installed. If you don't want to update to
the latest Babel release - you don't have to. Just pin `babel-preset-2015` to
the version you need.

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "presets": ["es2015-node4-loose"]
}
```

### Via CLI

```sh
$ babel script.js --presets es2015-loose-loose
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  presets: ["es2015-loose-loose"]
})
```

## Does not include regenerator!

[babel-preset-es2015-node4] doesn't include regenerator [as mentioned here](https://github.com/jbach/babel-preset-es2015-node4#does-not-include-regenerator).

If you need it you will have to `npm install` and include regenerator yourself:

```json
{
    "presets": ["es2015-node4-loose"],
    "plugins": ["transform-regenerator"]
}
```

Note: Regenerator doesn't have a loose mode.

## About

This project has been highly inspired by [babel-preset-es2015-loose]. It will probably become obsolete when Babel team will [support passing options to presets](https://github.com/babel/babel/pull/3331).

[babel-preset-es2015-node4]: https://github.com/jbach/babel-preset-es2015-node4
[babel-preset-es2015-loose]: https://github.com/bkonkle/babel-preset-es2015-loose
[loose mode]: http://www.2ality.com/2015/12/babel6-loose-mode.html
[modify-babel-preset]: https://github.com/developit/modify-babel-preset
