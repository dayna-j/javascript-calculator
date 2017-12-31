//function keyPress(){alert('key pressed');}

function Calculator()
{
	alert("calc created");
	this._inputArray = [];
	this._displayResult = '';
	this._displayEquation = '';
	this.keyPress = function()
	{
		var pressedKey;
		// What happens when a numKey is pressed?  
		// 1) Find out what kind of key it was.  num/admin/op
		//		look at class html attribute:  [numKey, adminKey, 
		//		opKey]
		alert("keyPress is working");
			
	}
}

$(document).ready(function()
{
	alert('dom is ready.');
	var calc = new Calculator();
//	$(".adminKey").on("click",function(){calc.keyPress();});
//	$(".numKey").on("click",function(){calc.keyPress();});
//	$(".opKey").on("click",function(){calc.keyPress();});
	$(".Key").on("click",function(){calc.keyPress();});
	
	
});