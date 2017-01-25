/*jslint devel: true */
function myfunc() {
	"use strict";
	var first = document.getElementById('myname').value,
		second = document.getElementById('pw').value,
		a = localStorage.getItem('password');
	alert(a);
	if (first === "") {
		alert("Username cannot be blank\nEnter a valid user name");
	} else if (second === "") {
		alert("Password cannot be blank\nEnter a password");
	} else if (first === "system") {
		if (second === "system" || second === a) {
			window.location = "http://localhost:8777/e.bis/login.html";
		} else {
			alert("Password incorrect\nEnter a valid password");
		}
	} else if (first !== "system") {
		alert("Enter a valid user name");
	}
}

function setFocusToTextBox() {
	"use strict";
	document.getElementById("myname").focus();
}
