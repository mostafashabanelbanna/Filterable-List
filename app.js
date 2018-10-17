// Grap input element
let filterInput = document.getElementById('filterInput');

// Add event listener
filterInput.addEventListener('keyup', filterNames);

function filterNames() {
	// Get value of input
	let filterValue = document.getElementById('filterInput').value.toUpperCase();
	// Get names ul
	let ul = document.getElementById('names');
	// Get lis from ul
	let li = ul.querySelectorAll('li.collection-item')

}