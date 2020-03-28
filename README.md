# :wrench: eslint-config

## :pushpin: Requirements

- [Node.js](https://nodejs.org)
- [NPM](https://www.npmjs.com)

## :building_construction: Installation

```console
$ npm install --save-dev aminnairi/eslint-config
```

## :thinking: Usage

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

## :construction_worker: Development

### :pushpin: Requirements

- [Git](https://git-scm.com/)
- [Docker](https://docs.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- [GNU/Make](https://www.gnu.org/software/make/)

### :building_construction: Installation

```console
$ git clone https://github.com/aminnairi/eslint-config.git
$ cd eslint-config
```

### :thinking: Usage

```console
$ make install  # install the dependencies
$ make build    # build the configuration into the "lib" folder
```
