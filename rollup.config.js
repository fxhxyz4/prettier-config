import pkg from './package.json' assert { type: "json" };

let banner = `/**\n* @F @fxhxyz/prettier-config v${pkg.version}\n`
  + `* @F (c)${new Date().getFullYear()} fxhxyz\n`
  + `* @F MIT License\n`
  + `* @F github.com/fxhxyz4/prettier-config\n*/\n`


let config = {};

export default config = {
  input: `./.prettierrc.js`,
  output: [
    {
      file: `./.prettierrc.cjs`,
      format: 'cjs',
      exports: 'named',
      sourcemap: false,
      banner: banner,
    }
  ]
}
