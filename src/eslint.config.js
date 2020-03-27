"use strict";

import bestPractices from "./rules/best-practices.js";
import ecmascript2015 from "./rules/ecmascript2015.js";
import node from "./rules/node.js";
import possibleErrors from "./rules/possible-errors.js";
import strictMode from "./rules/strict-mode.js";
import stylisticIssues from "./rules/stylistic-issues.js";
import variables from "./rules/variables.js";

export default {
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
