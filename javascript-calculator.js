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

	// these properties contain the displays
	this._displayResult = $("#displayResult").val();
	this._displayEquation = $("#displayEquation").val();
	
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

		return $(this);
        // return pressedKey.id;


	}


	this.resetCalculator = function(resultValue)
	{// reset both displays to 0.

		this.setResultScreen = resultValue;
        // $("#displayResult").val(resultValue);
        // $("#displayEquation").val('0');
	}
}
// Instantiate our Calculator object.
var calc = new Calculator();

Object.defineProperty(calc, "getResultScreen",
 	{// get from _displayResults property
 	get:
 		function()
 		{
 			return this._displayResult;
 		}
 	}
 );

 Object.defineProperty(calc, "setResultScreen",
     {// set to _displayResult
         set:
             function(screen)
             {
             	this._displayResult = screen;
                 $("#displayResult").val(screen);
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
// $(".Key").on("click",function(){calc.keyPress(event);});

// EVENT HANDLERS FOR BUTTONS

$(".numKey").on("click",function(event)
{
	// toAppend should contain the value of the button that was clicked.
	var toAppend =  event.target.id;

	//////////////////////////////////////////////////////STATE #1

	// getResultScreen accessor of calc object returns jQuery object for result screen.
	var currentVal = calc.getResultScreen;

	console.log("current display val: " + currentVal);
	
	if (calc._opSet1 === false){
		
	}
	
	
	
	
	
	// if the display shows 0, we need to remove it before appending the new number.
	if (currentVal == '0')
	{
		currentVal = "";
		console.log("after test for 0, currentVal: "+currentVal);
	}
	var newVal = currentVal + toAppend;//toAppend is the value of the numButton

	$("#displayResult").val(newVal);
	calc.setResultScreen = $("#displayResult").val();

///////////////////////////////////////////////////////////////

});

$("#backButton").on("click",function()//working
{
	var screenSlice = calc.getResultScreen;
	if(screenSlice.length <2)
	{
		calc.setResultScreen = "0";
		return null;
	}
	screenSlice = screenSlice.slice(0,-1);// backspace applied

    $("#displayResult").val(screenSlice);
    calc.setResultScreen = $("#displayResult").val();
});

$("#decimalPoint").on("click",function()//working
{
	var screen = calc.getResultScreen;
//	console.log(typeof screen); // its  a string
	console.log(screen.indexOf(".'"));
	if (screen.indexOf(".") === -1)
	{// if decimal point is NOT FOUND
		calc.setResultScreen = screen + ".";
	}
	else {
		return null;
	}
});

$("#clearButton").on("click",function()
{
	calc.resetCalculator(0);
});

$("#clearAllButton").on("click",function()
{
	calc.resetCalculator("0");
});

$("#plusMinusButton").on("click", function()
{
	var screen = calc.getResultScreen;
	
	console.log("from plusMinus btn---screen value is: " + screen +
			   " and screen type is: "+typeof screen);
	console.log("screen.indexOf: " + screen.indexOf("-"));
	
	
	
	if( (screen != "0")  && (screen.indexOf("-") == -1))
	{// if '-' character is NOT FOUND, add it
		screen = ("-".concat(screen));
        $("#displayResult").val(screen);
        calc.setResultScreen = $("#displayResult").val();
	}
	else
	{// else, if ' - ' IS FOUND, take slice
		if (screen === "0") 
		{
			return null;
		}
		console.log("before slice: "+screen);
		screen = screen.slice(1);
		console.log("after slice: "+screen);
		$("#displayResult").val(screen);
        calc.setResultScreen = $("#displayResult").val();
	}

	
	
	
	
});

$("#moduloButton").on("click", function()
{
	
});
	
$("#squareRootButton").on("click", function()
{
	calc.setResultScreen = Math.sqrt(calc.getResultScreen).toString();
});

$("#recipButton").on("click", function()
{
	calc.setResultScreen = (1 / (calc.getResultScreen)).toString();
});
	
	
// console.dir(calc.keys[0]);
// console.dir(calc.getResultScreen);
// calc.resetCalculator();

});
