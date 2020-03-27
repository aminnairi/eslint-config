"use strict";

export default {
    "init-declarations": ["error", "always"],
    "no-delete-var": "error",
    "no-label-var": "error",
    "no-shadow": "error",
    "no-shadow-restricted-names": "error",
    "no-undef": "error",
    "no-undef-init": "error",
    "no-undefined": "error",
    "no-unused-vars": ["error", { "vars": "all", "args": "after-used", "ignoreRestSiblings": false }],
    "no-use-before-define": ["error", { "functions": true, "classes": true, "variables": true }],
};
