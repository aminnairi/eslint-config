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

## Contributing

So, you tried it and you like it! Except for some rules that could be better based on your personnal preference. If that is your case, instead of proposing a pull request, you should rather [fork](https://help.github.com/en/github/getting-started-with-github/fork-a-repo) the project and make modifications based on your own usage of this module. Why? Simply because you and I may not be in agreement for the thing you may want to update in this configuration. Maybe you like single quotes, and I like double quotes. I won't accept PR for using single quotes for instance, so you would better be using your own version. But that would be a pretty long road to customize all of the rules available. That is why forking the project might be your best shot in this situation.
