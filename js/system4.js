/*jslint devel: true */
function submitform() {
	"use strict";
	if (typeof (Storage) !== "undefined" && localStorage.password) {
		var first = document.getElementById('name').value,
			second = document.getElementById('password').value,
			a = localStorage.getItem('password');
		
		if (first === "") {
			alert("Username cannot be blank\nEnter a valid user name");
		} else if (second === "") {
			alert("Password cannot be blank\nEnter a password");
		} else if (first === "system") {
			if (second === a) {
				window.open("../html/myprofile2.html");
			} else {
				alert("Password incorrect\nEnter a valid password");
			}
		} else if (first !== "system") {
			alert("Enter a valid user name");
		}
	}
}

function setFocusToTextBox() {
	"use strict";
	document.getElementById("myname").focus();
}
