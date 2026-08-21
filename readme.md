### @fxhxyz/prettier-config

#

### how to use?

- _**npm**_

```
npm install @fxhxyz/prettier-config -D
```

- _**yarn**_

```
yarn add @fxhxyz/prettier-config -D
```

- _**pnpm**_

```
pnpm add @fxhxyz/prettier-config -D
```

- _**usage commonjs**_

```js
// .prettierrc.cjs
module.exports = require("@fxhxyz/prettier-config");

// package.json
"scripts": {
"format": "prettier --write ."
}
```

- _**usage es6**_

```js
// .prettierrc.mjs/.js
import config from "@fxhxyz/prettier-config";
export default config;

// package.json
"scripts": {
"format": "prettier --write ."
}
```

#

### copying prettierignore & editorconfig from node_modules

```
# linux/mac
cp node_modules/@fxhxyz/prettier-config/misc/.prettierignore .prettierignore &&
cp node_modules/@fxhxyz/prettier-config/misc/.editorconfig .editorconfig

# win
copy node_modules/@fxhxyz/prettier-config/misc/.prettierignore .prettierignore &&
copy node_modules/@fxhxyz/prettier-config/misc/.editorconfig .editorconfig
```