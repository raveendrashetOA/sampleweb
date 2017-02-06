/*jslint devel: true */
function passchange() {
	"use strict";
	alert("HI");
	var two = document.getElementById("newpw").value,
		three = document.getElementById("confirmpw").value,
		a;
	if (two === "") {
		alert("newpassword cannot be left empty");
	} else if (three === "") {
		alert("confirm password left blank");
	} else { if (two === three) {
		
		alert("password changed succcesfully");
	} else {
		alert("new password doesnt match confirm password");
	}
		   }
	if (typeof (Storage) !== "undefined") {
		a = document.getElementById('confirmpw').value;
		localStorage.password = a;
		//document.getElementById("notes").innerHTML="Last name: " + localStorage.lastname;
	}
}