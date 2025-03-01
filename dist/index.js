"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
/** @type {import("prettier").Config} */
exports.config = {
    tabWidth: 2,
    useTabs: true,
    printWidth: 140,
    singleQuote: true,
    jsxSingleQuote: true,
    arrowParens: "avoid",
    semi: true,
    jsxBracketSameLine: false,
    trailingComma: "es5",
    bracketSpacing: true,
    proseWrap: "always",
    quoteProps: "as-needed",
    htmlWhitespaceSensitivity: "css",
    parser: "jsonc",
    endOfLine: "lf",
};
