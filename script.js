var name = prompt("Enter Your Name");
var welcome = document.getElementById("welcome");
if(name=="Fahad"){
welcome.innerHTML = "Welcome " + " " + name + "(we have the same name lol)!";
}else{
welcome.innerHTML = "Welcome " + " " + name + "!";
}

function changeSize(){
  var logo = document.getElementById("smallLogo");
  logo.style.height = (logo.style.height=="50px") ? "25px":"50px"; 
}
