
const b1 = document.getElementById("btn1")
const colorbox=["red","green"];
b1.addEventListener("click",changecolor);

function changecolor()
{
	let i= Math.round(Math.random()*1);
	x =prompt("enter any colour");
	if(x==colorbox[i])
{
	alert("congratulations...");
        
}
else
{
	alert("betterlucknexttime")
}
	document.body.style.backgroundColor=colorbox[i];
}
