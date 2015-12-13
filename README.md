##What is it?
This is a package built for use Datatables 1.10.10 with Meteor and Bootstrap 3 library, using the ian:bootstrap-3 as a basis (but it should work with any other bootstrap package).

##How to install
meteor add lc3t35:meteor-datatables-bootstrap3

##How to run tests
meteor test-packages meteor-datatables-bootstrap3/

##HTML & Javascript quick start

    <table cellpadding="0" cellspacing="0" border="0" class="table table-striped table-bordered" id="example">
        <thead>
           <tr>
              <th>Rendering engine</th>
              <th>Browser</th>
              <th>Platform(s)</th>
              <th>Engine version</th>
              <th>CSS grade</th>
            </tr>
          </thead>
          <tbody>
            <tr class="odd gradeX">
              <td>Trident</td>
              <td>Internet
                 Explorer 4.0</td>
              <td>Win 95+</td>
              <td class="center"> 4</td>
              <td class="center">X</td>
            </tr>
            </tbody>
        </table>

##
    $('#example').dataTable();
    $('.datatable').dataTable({"sPaginationType": "bs_normal"});
    $('.datatable').dataTable({"sPaginationType": "bs_two_button"});
    $('.datatable').dataTable({"sPaginationType": "bs_four_button"});
    $('.datatable').dataTable({"sPaginationType": "bs_full"});

You can learn more about the [DataTables API here](http://datatables.net/index).
