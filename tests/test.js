if (Meteor.isClient) {

	Tinytest.add('check jQuery', function (test) {
	  var jQuery_enabled = (typeof jQuery !== 'undefined');
	  test.isTrue(jQuery_enabled, 'jQuery is enabled');
	});

	Tinytest.add('check bootstrap3', function (test) {
	  var bootstrap3_enabled = (typeof $().emulateTransitionEnd == 'function');
	  test.isTrue(bootstrap3_enabled, 'Bootstrap3 is enabled');
	});

	Tinytest.add('check datatables', function (test) {
		var table = document.createElement("table"),
		thead = table.createTHead(),
    	thRow = thead.insertRow(0),
    	thCell1 = thRow.insertCell(0),
    	thCell2 = thRow.insertCell(1),
    	thCell3 = thRow.insertCell(2),
    	thCell4 = thRow.insertCell(3);
    	thCell1.innerHTML = "Rendering engine";
    	thCell2.innerHTML = "Browser";
    	thCell3.innerHTML = "Platform(s)";
    	thCell4.innerHTML = "Engine version";
    	var tbody = table.createTBody();

        table.id = "example";
        table.class = "display";
        table.cellspacing = "0";
        table.width = "100%";

        var row = tbody.insertRow(0);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        cell1.innerHTML = "Trident";
        cell2.innerHTML = "Internet Explorer 4.0";
        cell3.innerHTML = "Win 95+";
        cell4.innerHTML = "4";

        document.body.appendChild(table);

        // do we have a table with id = example ?
        var example = document.getElementById('example');
        test.equal(example.id, 'example', "table example created");
        // if we call dataTable(), do we have a dataTable ?
	  	var oTable = $('#example').dataTable();
        // let's improve the rendering a little bit
        oTable.removeClass( 'display' ).addClass('table table-striped table-bordered');
	  	test.isTrue($.fn.DataTable.fnIsDataTable(example), 'it is a DataTable');
	  	// is the class set as a bootstrap one ?
        var divClass = $("#example_wrapper div div").attr('class');
        console.log(divClass);
	  	test.equal(divClass, "col-sm-6", 'datatable created as bootstrap');
	});
}

