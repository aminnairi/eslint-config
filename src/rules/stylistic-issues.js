"use strict";

export default {
    "array-bracket-newline": ["error", "consistent"],
    "array-bracket-spacing": ["error", "never"],
    "array-element-newline": ["error", "consistent"],
    "block-spacing": ["error", "always"],
    "brace-style": ["error", "1tbs", { "allowSingleLine": false }],
    "camelcase": ["error", { "properties": "always", "ignoreDestructuring": false }],
    "capitalized-comments": "off",
    "comma-dangle": ["error", { "arrays": "never", "objects": "never", "imports": "never", "exports": "never", "functions": "never" }],
    "comma-spacing": ["error", { "before": false, "after": true }],
    "comma-style": ["error", "first"],
    "computed-property-spacing": ["error", "never"],
    "consistent-this": ["off"],
    "eol-last": ["error", "always"],
    "func-call-spacing": ["error", "never"],
    "func-name-matching": ["error", "always", { "includeCommonJSModuleExports": true, "considerPropertyDescriptor": true }],
    "func-names": ["error", "always", { "generators": "always" }],
    "func-style": ["error", "expression"],
    "function-call-argument-newline": ["error", "consistent"],
    "function-paren-newline": ["error", "consistent"],
    "implicit-arrow-linebreak": ["error", "beside"],
    "indent": ["error", 4],
    "jsx-quotes": ["error", "prefer-double"],
    "key-spacing": ["error", { "beforeColon": false, "afterColon": true, "mode": "strict" }],
    "keyword-spacing": ["error", { "before": true, "after": true }],
    "line-comment-position": "off",
    "linebreak-style": ["error", "unix"],
    "lines-around-comment": ["off"],
    "lines-between-class-members": ["error", "always"],
    "max-depth": "off",
    "max-len": "off",
    "max-lines": "off",
    "max-lines-per-function": "off",
    "max-nested-callbacks": "off",
    "max-params": "off",
    "max-statements": "off",
    "max-statements-per-line": "off",
    "multiline-comment-style": "off",
    "multiline-ternary": ["error", "always-multiline"],
    "new-cap": ["error", { "newIsCap": true, "capIsNew": true, "properties": true }],
    "new-parens": ["error", "always"],
    "newline-per-chained-call": "off",
    "no-array-constructor": "error",
    "no-bitwise": "error",
    "no-continue": "off",
    "no-inline-comments": "error",
    "no-lonely-if": "error",
    "no-mixed-operators": "error",
    "no-mixed-spaces-and-tabs": "error",
    "no-multi-assign": "error",
    "no-multiple-empty-lines": "error",
    "no-negated-condition": "error",
    "no-nested-ternary": "error",
    "no-new-object": "error",
    "no-plusplus": "off",
    "no-tabs": ["error", { allowIndentationTabs: false }],
    "no-ternary": "error",
    "no-trailing-spaces": ["error", { "skipBlankLines": false, "ignoreComments": true }],
    "no-underscore-dangle": ["error", { "allowAfterThis": false, "allowAfterSuper": false, "allowAfterThisConstructor": false, "enforceInMethodNames": true }],
    "no-unneeded-ternary": "off",
    "no-whitespace-before-property": "error",
    "nonblock-statement-body-position": ["error", "below", { "overrides": { "while": "below", "do": "below" }}],
    "object-curly-newline": ["error", { "consistent": true }],
    "object-curly-spacing": ["error", "never", {"arraysInObjects": false, "objectsInObjects": false}],
    "object-property-newline": "off",
    "one-var": ["error", "never"],
    "one-var-declaration-per-line": ["error", "always"],
    "operator-assignment": "off",
    "operator-linebreak": ["error", "after"],
    "padded-blocks": ["error", "never"],
    "padding-line-between-statements": "off",
    "prefer-exponentiation-operator": "error",
    "prefer-object-spread": "error",
    "quote-props": ["error", "consistent-as-needed"],
    "quotes": ["error", "double", { "avoidEscape": true, "allowTemplateLiterals": true }],
    "semi": ["error", "always"],
    "semi-spacing": ["error", { "before": false, "after": false }],
    "semi-style": ["error", "last"],
    "sort-keys": ["error", "asc", { "caseSensitive": false, "natural": true }],
    "sort-vars": ["error", { "ignoreCase": true }],
    "space-before-blocks": "error", "space-before-function-paren": ["error", { "anonymous": "never", "named": "never", "asyncArrow": "always" }],
    "space-in-parens": ["error", "never"],
    "space-infix-ops": ["error", { "int32Hint": false }],
    "space-unary-ops": [1, { "words": true, "nonwords": false }],
    "spaced-comment": "off",
    "switch-colon-spacing": ["error", {"after": false, "before": false}],
    "template-tag-spacing": ["error", "never"],
    "unicode-bom": ["error", "never"],
    "wrap-regex": "off"
};
