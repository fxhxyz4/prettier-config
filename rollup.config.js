let config = {};

export default config = {
  input: `./.prettierrc.js`,
  output: [
    {
      file: `./.prettierrc.cjs`,
      format: 'cjs',
      sourcemap: false,
    },
    {
      file: `./.prettierrc.js`,
      format: 'esm',
      exports: 'named',
      sourcemap: false,
    }
  ]
}
