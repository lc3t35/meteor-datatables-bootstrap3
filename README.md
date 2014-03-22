##What is it?
This is a smart package built for use with Meteor and the Twitter Bootstrap 3 library, using the [example defined here](https://github.com/Jowin/Datatables-Bootstrap3) as a basis.

##How to install
1. `npm install -g meteorite` (if not already installed)
2. `mrt add datatables-bootstrap3`

##How to run tests
mrt test-packages datatables-bootstrap3

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

    $('.datatable').dataTable({"sPaginationType": "bs_normal"});    
    $('.datatable').dataTable({"sPaginationType": "bs_two_button"});
    $('.datatable').dataTable({"sPaginationType": "bs_four_button"});
    $('.datatable').dataTable({"sPaginationType": "bs_full"});
    
You can learn more about the [DataTables API here](http://datatables.net/index).
