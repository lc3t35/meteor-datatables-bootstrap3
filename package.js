Package.describe({
  name: 'lc3t35:datatables-bootstrap3',
  summary: "Bootstrap'ed DataTables for meteor",
  version: '1.10.10', // changed version to match datatables
  git: 'https://github.com/lc3t35/meteor-datatables-bootstrap3'
});

Package.on_use(function (api) {
  api.use('jquery', 'client');
  api.add_files([
    'lib/jquery.dataTables.min.js',
    'lib/dataTables.bootstrap.min.js',
    'lib/dataTables.bootstrap.min.css'],

    'client');
  api.addAssets([
    'lib/images/favicon.ico',
    'lib/images/sort_asc.png',
    'lib/images/sort_asc_disabled.png',
    'lib/images/sort_both.png',
    'lib/images/sort_desc.png',
    'lib/images/sort_desc_disabled.png'],

    'client');
});

Package.on_test( function(api) {
    api.use([
      'jquery',
      'ian:bootstrap-3',
      'lc3t35:datatables-bootstrap3',
      'test-helpers',
      'tinytest'
      ]);

    api.add_files("tests/test.js");
});
