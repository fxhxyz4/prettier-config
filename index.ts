import type { Config } from "prettier";

/** @type {import("prettier").Config} */

export const config: Config = {
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
