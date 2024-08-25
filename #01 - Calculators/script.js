import { evaluate } from "https://esm.sh/mathjs";


// display the value when clicked
function display_value(val) {
  document.getElementById("result").value += val;
}
window.display_value = display_value;


// Catch keys when they are clicked, otherwise nothing would happen here
function catch_key(event) {
	const accepted_keys = ['0','1','2','3','4','5','6','7','8','9','.','^','/','*','-','+']
	if (accepted_keys.includes(event.key)) {
      document.getElementById("result").value += event.key;
	}
}
window.catch_key = catch_key;


// Keydown event listener to the whole document to catch keys
document.addEventListener('keydown', catch_key);


// Keyup event listener to the calculator element to handle Enter key
document.addEventListener('DOMContentLoaded', (event) => {
	document.getElementById("calculator").addEventListener('keyup', function (event) {
		if (event.keyCode === 13) {
			console.log("Enter");
			let x = document.getElementById("result").value;
			console.log(x);
			solve();
		}
	});
});


// solves the function using the mathjs library
function solve() {
	let x = document.getElementById("result").value;
	try {
		let y = evaluate(x);
		document.getElementById("result").value = y;
	} catch (e) {
		document.getElementById("result").value = "Error";
	}
}
window.solve = solve;


// Clears the display field
function clr() {
	document.getElementById("result").value = "";
}
window.clr = clr;
