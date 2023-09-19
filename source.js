//variables used by calculator
let num1 = 0;
let num2 = 0;
let operator = "";

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
