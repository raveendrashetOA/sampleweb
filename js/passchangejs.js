/*jslint devel: true */
function passchange() {
	"use strict";
	var two = document.getElementById("newp").value,
		three = document.getElementById("confp").value,
		a;
	if (two === "") {
		alert("newpassword cannot be left empty");
	} else if (three === "") {
		alert("confirm password left blank");
	} else if (two === three) {
		
		alert("password changed succcesfully");
	} else {
		alert("new password doesnt match confirm password");
	}
	if (typeof (Storage) !== "undefined") {
		a = document.getElementById('confp').value;
		localStorage.password = a;
		alert(a);
		//document.getElementById("notes").innerHTML="Last name: " + localStorage.lastname;
	}
}
