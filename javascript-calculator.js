$(document).ready(function()
{

function Calculator()
{
	// alert("calc object created");
	// OPERAND PROPERTIES

	// stores the state of the operands.
	this._operandOne = '';
	this._operandTwo = '';

	// STATUS FLAG PROPERTIES

	// store binary true or false representing the status of the operands.  true if set, false if empty.
	this._opSet1 = false;
	this._opSet2 = false;

	// Calculator will be in freshState when script loads and also when equals function returns.
	this._freshState = true;

	//
	this._displayResult = $("#displayResult");
	this._displayEquation = $("#displayEquation");
	
	// BUTTON PROPERTIES
	this.numKeys = $(".numKey");
	this.adminKeys = $(".adminKey");
	this.opKeys = $(".opKeys");
	this.keys = $(".Key");

	// METHODS
	this.keyPress = function(event)
    {
        // What happens when a numKey is pressed?
        // 1) Find out what kind of key it was.  num/admin/op
        //		look at class html attribute:  [numKey, adminKey,
        //		opKey]

        // The event.target property returns which DOM element triggered the event.
        var pressedKey = event.target.id;
        alert(pressedKey);
        // console.log(typeof pressedKey);
        // return this.updateResultScreen(pressedKey)


        // return pressedKey.id;


	}

	this.updateResultScreen = function(key)
	{
		// this.setResultScreen = this.getResultScreen + key;
		$("#displayResult").innerHTML = $("#displayResult").innerHTML + key;
	}

	this.resetCalculator = function(resultValue)
	{// reset both displays to 0.

		$("#displayResult").val(resultValue);
        $("#displayEquation").val('0');
	}

}
// Instantiate our Calculator object.
var calc = new Calculator();

Object.defineProperty(calc, "getResultScreen",
 	{
 	get:
 		function()
 		{
 			return this._displayResult;
 			alert(_displayResult);
 		}
 	}
 );

 Object.defineProperty(calc, "setResultScreen",
     {
         set:
             function(screen)
             {
                 this._displayResult = screen;
             }
     }
 );

 Object.defineProperty(calc, "getEquationScreen",
     {
         get:
             function()
             {
                 return this._displayEquation;
             }
     }
 );

 Object.defineProperty(calc, "setEquationScreen",
     {
         set:
             function(screen)
             {
                 this._displayEquation = screen;
             }
     }
 );

 // Generic event handler for any button
$(".Key").on("click",function(){calc.keyPress(event);});

// EVENT HANDLERS FOR BUTTONS

$(".numKey").on("click",function()
{// event handler for number buttons

//////////////////////////////////////////////////////STATE #1

	// getResultScreen accessor of calc object returns jQuery object for result screen.  .val() extracts the value
	var newVal = calc.getResultScreen.val();

	if (newVal === '0'){newVal = '';}


///////////////////////////////////////////////////////////////

	// alert(typeof newVal);

});

$("#clearAllButton").on("click",function()
{
	calc.resetCalculator();
});


console.dir(calc.keys[0]);
console.dir(calc.getResultScreen);
// calc.resetCalculator();



});


//
// $(document).ready(function()
// {
// 	alert('dom is ready.');
// //	var calc = new Calculator();
//
// 	// var numKeys = $(".numKey");
// 	// var opKeys = $(".opKey");
// 	// var adminKeys = $(".adminKey");
// 	// var keys = $('.Key');
//
// 	// calc.setResultScreen =  $("#displayResult");
// 	// calc.setEquationScreen = $("#displayEquations");
// 	// calc.getResultScreen();
//
//
// //	$(".adminKey").on("click",function(){calc.keyPress();});
// //	$(".numKey").on("click",function(){calc.keyPress();});
// //	$(".opKey").on("click",function(){calc.keyPress();});
//
// 	$(".Key").on("click",function(){calc.keyPress();});
// 	console.log(calc.keys[1]);
// });