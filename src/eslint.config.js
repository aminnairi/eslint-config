"use strict";

const bestPractices = require("./rules/best-practices.js");
const ecmascript2015 = require("./rules/ecmascript2015.js");
const node = require("./rules/node.js");
const possibleErrors = require("./rules/possible-errors.js");
const strictMode = require("./rules/strict-mode.js");
const stylisticIssues = require("./rules/stylistic-issues.js");
const variables = require("./rules/variables.js");

module.exports = {
    rules: {
        ...bestPractices,
        ...ecmascript2015,
        ...node,
        ...possibleErrors,
        ...strictMode,
        ...stylisticIssues,
        ...variables
    }
};
