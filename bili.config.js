module.exports = {
  format: ['umd', 'es', 'iife-min'],
  banner: true,
  moduleName: 'randomID',
  plugin: [
    require('rollup-plugin-clear')({
      targets: ['./dist/']
    })
  ],
  exports: 'named'
}