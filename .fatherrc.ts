export default {
  target: 'browser',
  esm: 'babel',
  cjs: 'babel',
  umd: {
    name: 'dumi-demo',
    sourcemap: true,
  },
  lessInBabelMode: true, // babel 模式下做 less 编译
  runtimeHelpers: true,
  extraBabelPlugins: [['babel-plugin-import']],
};
