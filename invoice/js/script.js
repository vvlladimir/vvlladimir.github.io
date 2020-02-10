//javascript
// date picker
  $(function() {
    $( "#datepicker" ).datepicker();
  });
  
  //tabele
  function toggleTableCustomers() {
		var lTable = document.getElementById("customersTable");
		lTable.style.display = (lTable.style.display == "block") ? "none" : "block";
		var hTable = document.getElementById("itemsTable");
		hTable.style.display = "none";
		var hTable = document.getElementById("invoicesTable");
		hTable.style.display = "none";
		
		var activeCustomersBtn = document.getElementById("customersBtn");
		activeCustomersBtn.className = (activeCustomersBtn.className == "customers active") ? "customers" : "customers active";
		var activeItemsBtn = document.getElementById("itemsBtn");
		activeItemsBtn.className = ("items");
		var activeInvoicesBtn = document.getElementById("invoicesBtn");
		activeInvoicesBtn.className = ("invoices");
	}
	function toggleTableItems() {
		var lTable = document.getElementById("itemsTable");
		lTable.style.display = (lTable.style.display == "block") ? "none" : "block";
		var hTable = document.getElementById("customersTable");
		hTable.style.display = "none";
		var hTable = document.getElementById("invoicesTable");
		hTable.style.display = "none";
		
		var activeCustomersBtn = document.getElementById("customersBtn");
		activeCustomersBtn.className = ("customers");
		var activeItemsBtn = document.getElementById("itemsBtn");
		activeItemsBtn.className = (activeItemsBtn.className == "items active") ? "items" : "items active";
		var activeInvoicesBtn = document.getElementById("invoicesBtn");
		activeInvoicesBtn.className = ("invoices");
	}
	function toggleTableInvoices() {
		var lTable = document.getElementById("invoicesTable");
		lTable.style.display = (lTable.style.display == "block") ? "none" : "block";
		var hTable = document.getElementById("customersTable");
		hTable.style.display = "none";
		var hTable = document.getElementById("itemsTable");
		hTable.style.display = "none";
		
		var activeCustomersBtn = document.getElementById("customersBtn");
		activeCustomersBtn.className = ("customers");
		var activeItemsBtn = document.getElementById("itemsBtn");
		activeItemsBtn.className = ("items");
		var activeInvoicesBtn = document.getElementById("invoicesBtn");
		activeInvoicesBtn.className = (activeInvoicesBtn.className == "invoices active") ? "invoices" : "invoices active";
	}
	<!-- add Customer dialog -->
	function addCustomerDialog() {
		var aDialog = document.getElementById("addCustomerDialog");
		aDialog.style.display = "block";
	}
	function addCustomerClose() {
		var btnClose = document.getElementById("addCustomerDialog");
		btnClose.style.display = "none";
	}
	<!-- add Item dialog -->
	function addItemDialog() {
		var aDialog = document.getElementById("addItemDialog");
		aDialog.style.display = "block";
	}
	function addItemClose() {
		var btnClose = document.getElementById("addItemDialog");
		btnClose.style.display = "none";
	}
	<!-- add Invoice dialog -->
	function addInvoiceDialog() {
		var aDialog = document.getElementById("addInvoiceDialog");
		aDialog.style.display = "block";
	}
	function addInvoiceClose() {
		var btnClose = document.getElementById("addInvoiceDialog");
		btnClose.style.display = "none";
	}
	<!-- edit dialog -->
	function editCustomerDialog() {
		var eDialog = document.getElementById("editCustomerDialog");
		eDialog.style.display = "block";
	}
	function editCustomerClose() {
		var btnClose = document.getElementById("editCustomerDialog");
		btnClose.style.display = "none";
	}
	<!-- edit Items dialog -->
	function editItemDialog() {
		var eDialog = document.getElementById("editItemDialog");
		eDialog.style.display = "block";
	}
	function editItemClose() {
		var btnClose = document.getElementById("editItemDialog");
		btnClose.style.display = "none";
	}
	<!-- edit Invoices dialog -->
	function editInvoiceDialog() {
		var eDialog = document.getElementById("editInvoiceDialog");
		eDialog.style.display = "block";
	}
	function editInvoiceClose() {
		var btnClose = document.getElementById("editInvoiceDialog");
		btnClose.style.display = "none";
	}
	
	<!-- Delete Row from Table>
	function deleteCustomersRow(r) {
		var i = r.parentNode.parentNode.rowIndex;
		document.getElementById("customersTableElement").deleteRow(i);
	}
	function deleteItemsRow(r) {
		var i = r.parentNode.parentNode.rowIndex;
		document.getElementById("itemsTableElement").deleteRow(i);
	}
	function deleteInvoicesRow(r) {
		var i = r.parentNode.parentNode.rowIndex;
		document.getElementById("invoicesTableElement").deleteRow(i);
	}
	
	<!-- Create Row from ADD DIALOG -->
	function createCustomers() {
		var table = document.getElementById("customersTableElement");
		  {
		  var row = table.insertRow();
		  var cell1 = row.insertCell(0);
		  var cell2 = row.insertCell(1);
		  var cell3 = row.insertCell(2);
		  var cell4 = row.insertCell(3);
		  cell4.className = 'btn'; 
		  var cell5 = row.insertCell(4);
		  cell5.className = 'btn';  
		  cell1.innerHTML = "NEW CELL1";
		  cell2.innerHTML = "NEW CELL2";
		  cell3.innerHTML = "NEW CELL3";
		  cell4.innerHTML = '<button onclick="editCustomerDialog();" title="Edit this invoice" class="edit-icon"></button>';
		  cell5.innerHTML = '<button onclick="deleteCustomersRow(this);"  title="Delete this customer" class="delete-icon"></button>';
		  }
		}
	function createItems() {
		var table = document.getElementById("itemsTableElement");
		  {
		  var row = table.insertRow();
		  var cell1 = row.insertCell(0);
		  var cell2 = row.insertCell(1);
		  var cell3 = row.insertCell(2);
		  var cell4 = row.insertCell(3);
		  cell4.className = 'btn'; 
		  var cell5 = row.insertCell(4);
		  cell5.className = 'btn';  
		  cell1.innerHTML = "NEW CELL1";
		  cell2.innerHTML = "NEW CELL2";
		  cell3.innerHTML = "NEW CELL3";
		  cell4.innerHTML = '<button onclick="editItemDialog();" title="Edit this item" class="edit-icon"></button>';
		  cell5.innerHTML = '<button onclick="deleteItemsRow(this);" title="Delete this item" class="delete-icon"></button>';
		  }
		}
	
	function createInvoices() {
		var table = document.getElementById("invoicesTableElement");
		  {
		  var row = table.insertRow();
		  var cell1 = row.insertCell(0);
		  var cell2 = row.insertCell(1);
		  var cell3 = row.insertCell(2);
		  var cell4 = row.insertCell(3);
		  var cell5 = row.insertCell(4);
		  var cell6 = row.insertCell(5);
		  var cell7 = row.insertCell(6);
		  var cell8 = row.insertCell(7);
		  cell8.className = 'btn'; 
		  var cell9 = row.insertCell(8);
		  cell9.className = 'btn';  
		  cell1.innerHTML = "NEW CELL1";
		  cell2.innerHTML = "NEW CELL2";
		  cell3.innerHTML = "NEW CELL3";
		  cell4.innerHTML = "NEW CELL4";
		  cell5.innerHTML = "NEW CELL5";
		  cell6.innerHTML = "NEW CELL6";
		  cell7.innerHTML = "NEW CELL7";
		  cell8.innerHTML = '<button onclick="editInvoiceDialog();" title="Edit this invoice" class="edit-icon"></button>';
		  cell9.innerHTML = '<button onclick="deleteInvoicesRow(this);" title="Delete this invoice" class="delete-icon"></button>';
		  }
		}
	