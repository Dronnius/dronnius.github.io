function sum()
{
	
}

function printWeb(string)
{
	console.log("printing " + string + " to page");
	document.write(string);
}

const coltxt = document.querySelector(".coltxt")

function changeColour()
{
	if(coltxt == null)
	{
		alert("failed to select text");
	}
	coltxt.style.color = "red";
}

var op = "add"

var a = document.getElementById("txtA");
var b = document.getElementById("txtB");

var ans = document.getElementById("ans");

var button = document.getElementById("calc");
button.onclick = function()
{
	var aint = parseInt(a.value);
	var bint = parseInt(b.value);
	
	if(Number.isNaN(aint) || Number.isNaN(bint))
	{
		alert("Please enter integers into the text fields");
		if(Number.isNaN(aint))
			a.value = "";
		if(Number.isNaN(bint))
			b.value = "";
	}
	else
	{
		var res;
		switch(op)
		{
			case "add":
				res = aint + bint;
				break;
			case "sub":
				res = aint - bint;
				break;
			case "mul":
				res = aint * bint;
				break;
			case "div":
				res = aint / bint;
				break;
			default:
				break;
		}
		ans.innerHTML = "Answer: " + res
	}
}

function setOp(newOp)
{
	op = newOp;
	var texOp = document.getElementById("opTxt");
	switch(op)
	{
		case "add":
			texOp.innerHTML = "+"
			break;
		case "sub":
			texOp.innerHTML = "-"
			break;
		case "mul":
			texOp.innerHTML = "x"
			break;
		case "div":
			texOp.innerHTML = "/"
			break;
		default:
			break;
	}
	//alert("operation set to: " + newOp)
}
var addOp = document.getElementById("add");
addOp.onclick = function(){setOp("add")}
var subOp = document.getElementById("sub");
subOp.onclick = function(){setOp("sub")}
var mulOp = document.getElementById("mul");
mulOp.onclick = function(){setOp("mul")}
var divOp = document.getElementById("div");
divOp.onclick = function(){setOp("div")}


//printWeb("Hello World!!!");
//alert("Hello World!");
