Package.describe({
  summary: "DataTable - jQuery plugin for sortable, pagable data"
});

Package.on_use(function (api) {
  api.use('jquery', 'client');
  api.use('bootstrap-3', 'client');
  api.add_files([
    'lib/jquery.dataTables.js',
    'lib/datatables.js',
    'lib/jquery.dataTables.css',
    'lib/datatables.css',
    'lib/images/sort_asc.png',
    'lib/images/sort_asc_disabled.png',
    'lib/images/sort_both.png',
    'lib/images/sort_desc.png',
    'lib/images/sort_desc_disabled.png',
  ], 'client'
  );
});

Package.on_test( function(api) {
    api.use('datatables-bootstrap3');

    api.use('test-helpers');
    api.use('tinytest');

    api.add_files("tests/test.js");
});
