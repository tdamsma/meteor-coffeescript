Package.describe({
  summary: "Javascript dialect with fewer braces and semicolons",
  version: "1.0.3",
  git: "https://github.com/foxbenjaminfox/meteor-coffeescript.git"
});

Package.registerBuildPlugin({
  name: "compileCoffeescript",
  use: [],
  sources: [
    'plugin/compile-coffeescript.js'
  ],
  npmDependencies: {"coffee-script": "1.7.1", "source-map": "0.1.32"}
});

Package.onTest(function (api) {
  api.use(['coffee:script', 'tinytest']);
  api.use(['coffeescript-test-helper'], ['client', 'server']);
  api.addFiles('bare_test_setup.coffee', ['client'], {bare: true});
  api.addFiles('bare_tests.js', ['client']);
  api.addFiles([
    'coffeescript_test_setup.js',
    'tests/coffeescript_tests.coffee',
    'tests/coffeescript_strict_tests.coffee',
    'tests/litcoffeescript_tests.litcoffee',
    'tests/litcoffeescript_tests.coffee.md',
    'tests/testTemplate.helpers.coffee',
    'tests/testTemplate2.helpers.coffee',
    'tests/testTemplate.events.coffee',
    'coffeescript_tests.js'
  ], ['client', 'server']);
});
