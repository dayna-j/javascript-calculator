function Calculator()
{
	// this._operandOne = '';
	this._operandOne = '';
	this._operandTwo = '';

	alert("calc created");
	this._inputArray = [];
	this._displayResult = $("#displayResult");
	this._displayEquation = $("#displayEquation");

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

// Object.defineProperty(calc, "getResultScreen",
// 	{
// 	get:
// 	function()
// 	{
// 		return this._displayResult;
// 		alert("_displayResult");
// 	}}
//
// );
//
// Object.defineProperty(Calculator, "setResultScreen",
//     {
//         set:
//             function(screen)
//             {
//                 this._displayResult = screen;
//             }}
//
// );
//
// Object.defineProperty(Calculator, "getEquationScreen",
//     {
//         get:
//             function()
//             {
//                 return this._displayEquation;
//             }}
//
// );
//
// Object.defineProperty(Calculator, "setEquationScreen",
//     {
//         set:
//             function(screen)
//             {
//                 this._displayEquation = screen;
//             }}
//
// );

$(document).ready(function()
{
	alert('dom is ready.');
	var calc = new Calculator();

	var numKeys = $(".numKey");
	var opKeys = $(".opKey");
	var adminKeys = $(".adminKey");

	// calc.setResultScreen =  $("#displayResult");
	// calc.setEquationScreen = $("#displayEquations");
	// calc.getResultScreen();

	
//	$(".adminKey").on("click",function(){calc.keyPress();});
//	$(".numKey").on("click",function(){calc.keyPress();});
//	$(".opKey").on("click",function(){calc.keyPress();});
	$(".Key").on("click",function(){calc.keyPress();});
});