//function keyPress(){alert('key pressed');}

function Calculator()
{
	alert("calc created");
	this._inputArray = [];
	// this._displayResult = $("#displayResult");
	this._displayResult;

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

Object.defineProperty(Calculator, "getResultScreen",
	{
	get:
	function()
	{
		return this._displayResult;
	}}

);

Object.defineProperty(Calculator, "setResultScreen",
    {
        set:
            function(screen)
            {
                this._displayResult = screen;
            }}

);

$(document).ready(function()
{
	alert('dom is ready.');
	var calc = new Calculator();

	var numKeys = $(".numKey");
	var opKeys = $(".opKey");
	var adminKeys = $(".adminKey");

	// var resultScreen = $("#displayResult");
	calc.setResultScreen =  $("#displayResult");
	var EquationScreen = $("displayEquations");

	
//	$(".adminKey").on("click",function(){calc.keyPress();});
//	$(".numKey").on("click",function(){calc.keyPress();});
//	$(".opKey").on("click",function(){calc.keyPress();});
	$(".Key").on("click",function(){calc.keyPress();});
	
	
});