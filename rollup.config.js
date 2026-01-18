export default {
  input: './.prettierrc.js',
  output: [
    {
      file: '.prettierrc.cjs',
      format: 'cjs',
      exports: 'default'
    },
    {
      file: '.prettierrc.js',
      format: 'esm'
    }
  ],
  external: [
    'prettier',
    '@ianvs/prettier-plugin-sort-imports',
    'prettier-plugin-multiline-arrays'
  ]
};
