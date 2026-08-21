import json from "@rollup/plugin-json";

export default {
  input: "./.prettierrc.js",
  plugins: [json()],
  output: [
    {
      file: "./dist/.prettierrc.cjs",
      format: "cjs",
      exports: "default",
    },
    {
      file: "./dist/.prettierrc.js",
      format: "esm",
    },
  ],
  external: [
    "@ianvs/prettier-plugin-sort-imports",
    "prettier-plugin-multiline-arrays",
  ],
}