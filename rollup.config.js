"use strict";

import commonjs from "@rollup/plugin-commonjs";
import nodeResolve from "@rollup/plugin-node-resolve";
import remove from "rollup-plugin-delete";
import babel from "rollup-plugin-babel";

import { resolve } from "path";
import { terser } from "rollup-plugin-terser";

export default {
    input: resolve("src", "eslint.config.js"),

    plugins: [
        remove({ targets: resolve("lib") }),
        commonjs(),
        nodeResolve(),
        babel(),
        terser()
    ],

    output: {
        file: resolve("lib", "eslint.config.js"),
        format: "cjs"
    }
};
