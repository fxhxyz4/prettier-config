### @fxhxyz/prettier-config

#

### how to use?
+ ***npm***
```
npm install @fxhxyz/prettier-config -D
```

+ ***yarn***
```
yarn add @fxhxyz/prettier-config -D
```

+ ***pnpm***
```
pnpm add @fxhxyz/prettier-config -D
```

+ ***usage commonjs***
```js
// .prettierrc.cjs
module.exports = require("@fxhxyz/prettier-config");

// package.json
"scripts": {
    "format": "prettier --write ."
}
```

+ ***usage es6***
```js
// .prettierrc.mjs/.js
import { config } from "@fxhxyz/prettier-config";
export { config };

// package.json
"scripts": {
    "format": "prettier --write ."
}
```


#

### copying prettierignore & editorconfig from node_modules
```
# linux/mac
cp node_modules/@fxhxyz/prettier-config/.prettierignore .prettierignore &&
cp node_modules/@fxhxyz/prettier-config/.editorconfig .editorconfig

# win
copy node_modules/@fxhxyz/prettier-config/.prettierignore .prettierignore &&
copy node_modules/@fxhxyz/prettier-config/.editorconfig .editorconfig
```
