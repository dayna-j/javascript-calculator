$(document).ready(function()
{

function Calculator()
{
	alert("calc object created");
	// OPERAND PROPERTIES

	// this._operandOne = '';
	this._operandOne = '';
	this._operandTwo = '';

	this._inputArray = [];
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
        var pressedKey = event.target;
        alert(pressedKey.id);
        console.log(typeof pressedKey.id);

        

        // return pressedKey.id;


	}

	this.updateResultScreen = function(key)
	{
		this.setResultScreen = this.getResultScreen + key;
	}

}

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

$(".Key").on("click",function(){calc.keyPress(event);});

console.dir(calc.keys[0]);
console.dir(calc.getResultScreen);



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