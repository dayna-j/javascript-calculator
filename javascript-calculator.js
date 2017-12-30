
function Calculator()
{
	this._inputArray = [];
	this._displayResult = '';
	this._displayEquation = '';
	this.keyPress = function(){
	// What happens when a numKey is pressed?  
	// 1) Find out what kind of key it was.  num/admin/op
	//		look at class html attribute:  [numKey, adminKey, opKey]
		alert("keyPress is working");
	}
	
	
	this.appendDisplay = function()
	{
		
	}
}

$(document).ready(function()
{
	var calc = new Calculator();
})