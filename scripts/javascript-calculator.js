$(document).ready(function()
{

$("#form-container").draggable();
	
function Calculator()
{
	// OPERAND PROPERTIES

	// stores the state of the operands and operators.
	this._operandOne = '0';
	this._operandTwo = '';
//	this._operator = '';
	this._opCode = 0;			// 0 unset, 1 add,2 subtract,3 mult.,4 divide
	// STATUS FLAG PROPERTIES

	// store binary true or false representing the status of the operands
	// and operator; true if set, false if empty.
	this._operand1Locked = false;
	this._operand2Locked = false;
	this._operatorLocked = false;
	this._previousOperation = false;

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
        // The event.target property returns which DOM element triggered the event.
        var pressedKey = event.target.id;
        alert(pressedKey);
        // console.log(typeof pressedKey);
        // return this.updateResultScreen(pressedKey)

		return $(this);
        // return pressedKey.id;
	}

	this.clearScreen = function(event)
	{
		this.setResultScreen = "0";
	}

	this.resetCalculator = function(value)
	{// reset both displays to 0.

		this.setResultScreen = value;
		this._operandOne = value;
		this._operandTwo = "0";
		this._operand1Locked = false;
		this._operand2Locked = false;
		this._operatorLocked = false;
		this._previousOperation = false;
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

// Object.defineProperty(calc, "getEquationScreen",
//     {
//         get:
//             function()
//             {
//                 return this._displayEquation;
//             }
//     }
// );

// Object.defineProperty(calc, "setEquationScreen",
//     {
//         set:
//             function(screen)
//             {
//                 this._displayEquation = screen;
//             }
//     }
// );

// Generic event handler for any button
// $(".Key").on("click",function(){calc.keyPress(event);});

// EVENT HANDLERS FOR BUTTONS
$(".numKey").on("click", function(event)
{
//	if ( (calc._operatorLocked && !calc._operand2Locked))// || calc._previousOperation)
//	{
//		calc.clearScreen();
//	}
	
	if (calc._previousOperation)
	{
		calc.setResultScreen = '';
		//		calc.clearScreen();// clear screen puts a 0 into the display
		calc._previousOperation = false;
	}
	
	var digitToAppend =  $(this).val();// gets number from button
	var currentScreen = calc.getResultScreen;
	console.log("current display val: " + currentScreen);	
	
	// if the display shows 0, we need to remove it before appending the new number.
	if (currentScreen == '0')
	{
		currentScreen = "";
		console.log("after test for 0, currentVal: " + currentScreen);
	}
	var newScreenVal = currentScreen + digitToAppend;
	
	if(calc._operand1Locked)
	{
//		calc.clearScreen();
		calc._operandTwo = newScreenVal;//+=
		calc._operand2Locked = true;
	}	
	else
	{
		calc._operandOne = newScreenVal;	
	}
	console.log("op1 is: " + calc._operandOne + " and op2 is: " + calc._operandTwo);
	console.log("op1 is locked?: " + calc._operand1Locked + ".  op2 is locked?: " + calc._operand2Locked);
//	calc._operandOne = newVal;
	$("#displayResult").val(newScreenVal);
	calc.setResultScreen = $("#displayResult").val();
});

//$(".numKey").on( "keydown", function(event) 
//{
//	console.log(event.which);
//});
	
$("#backButton").on("click", function()
{
	var screenSlice = calc.getResultScreen;
//	alert(screenSlice.length);
//	alert(screenSlice.indexOf("-"));	
	if (calc._previousOperation == true )
	{
		return null;
	}
	else if (screenSlice.length == 2 && screenSlice.indexOf("-") === 0)
	{
		calc.resetCalculator("0");
		return null;
	}
	else if(screenSlice.length <2)
	{
		calc.setResultScreen = "0";
		return null;
	}
	screenSlice = screenSlice.slice(0,-1);// backspace applied
    $("#displayResult").val(screenSlice);
    calc.setResultScreen = $("#displayResult").val();
});

$("#decimalPoint").on("click", function()//working
{
	if(calc._operatorLocked)
	{
		calc.clearScreen();
	}
	
	var currentScreen = calc.getResultScreen;
	console.log("currentScreen inside decimal point function: "+ currentScreen);
	console.log(currentScreen.indexOf("."));
	
	if (currentScreen.indexOf(".") === -1)
	{// if decimal point is NOT FOUND
		calc.setResultScreen = currentScreen + ".";
	}
	else {// if decimal point is found, do nothing
		return null;
	}
});

$("#addButton").on("click", function()
{
	calc._operand1Locked = true;
	calc._operatorLocked = true;
	calc._opCode = 1;
//	console.log("opcode: "+calc._opCode);	
	calc.clearScreen();
});

$("#subtractButton").on("click", function()
{
	calc._operand1Locked = true;
	calc._operatorLocked = true;
	calc._opCode = 2;
	calc.clearScreen();
});

$("#multiplyButton").on("click", function()
{
	calc._operand1Locked = true;
	calc._operatorLocked = true;
	calc._opCode = 3;
	calc.clearScreen();
});
	
$("#divideButton").on("click", function()
{
	calc._operand1Locked = true;
	calc._operatorLocked = true;
	calc._opCode = 4;
	calc.clearScreen();
});

$("#clearButton").on("click", function()
{

	calc.setResultScreen = 0;
	//	calc.resetCalculator(0);
});

$("#clearAllButton").on("click",function()
{
	calc.resetCalculator("0");
});

$("#plusMinusButton").on("click", function()
{

//	if (calc._previousOperation === true)
//	{
//		return null;
//	}
	
	var screen = calc.getResultScreen;
	
//	console.log("from plusMinus btn---screen value is: " + screen +
//			   " and screen type is: "+typeof screen);
//	console.log("screen.indexOf: " + screen.indexOf("-"));
		
	if( (screen != "0")  && (screen.indexOf("-") == -1))
	{// if '-' character is NOT FOUND, add it
		screen = ("-".concat(screen));
        $("#displayResult").val(screen);
        calc.setResultScreen = $("#displayResult").val();
//		calc._previousOperation = true;
	}
	else
	{// else, if ' - ' IS FOUND, take slice
		if (screen === "0") 
		{
			return null;
		}
//		console.log("before slice: "+screen);
		screen = screen.slice(1);
//		console.log("after slice: "+screen);
		$("#displayResult").val(screen);
        calc.setResultScreen = $("#displayResult").val();
	}
});

$("#percentButton").on("click", function()
{
	calc.setResultScreen = (calc.getResultScreen / 100);
});

$("#squareButton").on("click", function()
{
	var squareInput = calc.getResultScreen;// the base of exponentiation
	var result = Math.pow(squareInput,2)
	
	if(calc._operand1Locked)
	{
		calc._operandTwo =  result;
	}
	else
	{
		calc._operandOne = result;
	}
	
	calc.setResultScreen = result;
	calc._previousOperation = true;
});
	
$("#squareRootButton").on("click", function()
{
	var sqrtInput = calc.getResultScreen;
	var result;
	if( sqrtInput.substring(0,1) == '-' || sqrtInput == '0' )
	{// disallow taking square root of a negative number.
		return null;
	}
	result = Math.sqrt(calc.getResultScreen).toFixed(4).toString();
	
	if(calc._operand1Locked)
	{
		calc._operandTwo =  result;
	}
	else
	{
		calc._operandOne = result;
	}
	
	calc.setResultScreen = result;
	calc._previousOperation = true;
});

$("#recipButton").on("click", function()
{
	if(calc.getResultScreen == '0'){return null;}
	var result;
	result = (1 / (calc.getResultScreen)).toString();
	
	if(calc._operand1Locked)
	{
		calc._operandTwo =  result;
	}
	else
	{
		calc._operandOne = result;
	}
	
//	calc.setResultScreen = (1 / (calc.getResultScreen)).toString();
	calc.setResultScreen = result;
	calc._previousOperation = true;
});

$("#piButton").on("click", function()
{
	var pi = Math.PI;
	
		if(calc._operand1Locked)
	{
		calc._operandTwo =  pi;
	}
	else
	{
		calc._operandOne = pi;
	}
	
	calc.setResultScreen = pi;
	calc._previousOperation = true;
	
});
	
$("#equalsButton").on("click", function()
{
//	if (!calc._operand1Locked || !calc._operand2Locked)
//	{
//		console.log("One of the operands is not locked");
//		return null;
//	}

	console.log(calc.getResultScreen);
	var result;
	
	switch(calc._opCode)
	{
		case 1://addition
			console.log('case1 entered');
			result = parseFloat(calc._operandOne) + parseFloat(calc._operandTwo);
			console.log(result);
			break;
		case 2://subtract
			console.log('case2 entered');
			result = parseFloat(calc._operandOne) - parseFloat(calc._operandTwo);
			break;
		case 3://mult.
			console.log('case3 entered');
			result = parseFloat(calc._operandOne) * parseFloat(calc._operandTwo);
			break;
		case 4://div.
//			console.log('case4 entered');
			if(calc._operandTwo == "0")
			{
				calc.setResultScreen = "Cannot divide by 0";
				return null;
			}
			result = parseFloat(calc._operandOne) / parseFloat(calc._operandTwo);
			break;
	}
	// always entered after switch

	calc.resetCalculator(result);
//	calc.setResultScreen = result;
	calc._previousOperation = true;
});

});