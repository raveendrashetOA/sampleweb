function hover(element) {
    element.style.color= "#B0E0E6";
}
function hoveroff(element) {
    element.style.color = "white";
}



function editable() {
    var x = document.getElementsByClassName("class1");
  var i;
for (i = 0; i < x.length; i++) {
   x[i].removeAttribute("readonly");
}
  
    document.getElementById("id1").focus();
}

  