# eslint-config

## Requirements

- [Node.js](https://nodejs.org)
- [NPM](https://www.npmjs.com)

## Installation

```console
$ npm install --save-dev aminnairi/eslint-config
```

## Usage

```console
$ touch .eslintrc.js
```

```javascript
"use strict";

module.exports = {
    "extends": [
        "@aminnairi"
    ]
};
```

## Development

### Requirements

- Git
- Docker
- Docker Compose
- GNU/Make

### Installation

```console
$ git clone https://github.com/aminnairi/eslint-config.git
$ cd eslint-config
```

### Usage

```console
$ make install  # install the dependencies
$ make build    # build the configuration into the "lib" folder
```
