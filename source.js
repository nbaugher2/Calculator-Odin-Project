//variables used by calculator
let num1 = "";
let num2 = "";
let operator = "";
let display = document.querySelector(".window");
let numberList = document.querySelectorAll(".number");
let operatorList = document.querySelectorAll(".operator");
let displayValue = "";
let justOperated = false;

//used for calculator addition
function add(a,b){ 
	return a + b;
}

//used for calculator subtraction
function sub(a,b){ 
	return a - b;
}

//used for calculator multiplication
function mul(a,b){
	return a * b;
}

//used for calculator division
function div(a,b){
	return a / b;
}

//takes in two numbers and applies operator op
function operate(a, b, op){
	if (op === "+") return add(a,b);

	if (op === "-") return sub(a,b);

	if (op === "*") return mul(a,b);

	if (op === "/") return div(a,b);
}

//function to attach to number buttons
function numClick(event){
	let buttonText = this.textContent;
	display.textContent = "";
	//user did operation and then selected a new number
	if (justOperated || num1 === ""){
		num1 = buttonText;
		displayValue = num1;
	}
	//operator not selected but number selected so extend number
	else if(operator === ""){
		num1 = num1 + buttonText;
		displayValue = num1;
	}
	//num2 already selected but another number chosen so extend num2
	else if(num2 !== ""){
		num2 = num2 + buttonText;
		displayValue = num2;
	}
	//num2 selected
	else if(num2 === ""){
		num2 = buttonText;
		displayValue = num2;
	}
	justOperated = false;
	display.textContent = displayValue;
}

//function to attach to operators
function operatorClick(event){
	let buttonText = this.textContent;
	display.textContent = "";
	//clear all content
	if (buttonText === "Cl"){
		num1 = "";
		displayValue = "";
		num2 = "";
		justOperated = false;
		operator = "";
		display.textContent = "0";
		return;
	}
	//equals button selected, operate
	//checking for num2 ensures num1, operate, and num2 fields are all filled
	else if (buttonText === "=" && num2 !== ""){
		displayValue = (operate(Number(num1), Number(num2), operator)).toString();
		justOperated = true;
		num1 = displayValue;
		operator = "";
		num2 = "";
	}
	//operator selected
	else if(buttonText !== "="){
		//number has been set so allow operator change
		if (num1 !== "" && num2 === ""){

			operator = buttonText;
			justOperated = false;
		}
		//operator selected with all fields filled so operate before operator change
		/*justOperated not set to true because we use justOperated to determine if user
		wants to override the last operation value with a new number but here they already
		selected an operator so they cannot override num1*/
		else if (num2 !== ""){
			displayValue = (operate(Number(num1), Number(num2), operator)).toString();
			num1 = displayValue;
			operator = buttonText;
			num2 = "";
		}
	}
	display.textContent = displayValue;
}

//give all number buttons the on click event
for(let i = 0; i < numberList.length; i++){
	numberList[i].addEventListener("click", numClick);
}

for(let i = 0; i < operatorList.length; i++){
	operatorList[i].addEventListener("click", operatorClick);
}