// Encoding for the standard input
process.stdin.setEncoding('utf8');

// require readline module.
var rl = require('readline');

// #####################################################################################################################
// ################################################ C L A S S E S ######################################################
// #####################################################################################################################

function Calculator() {
	// constructor //
	this.result = 0;
	this.operator = '';
	this.value = 0;
}

Calculator.prototype.requestToInputValues = function(){
	console.log('<< Please input some numbers... >>');
	console.log(this.result + ' ' + this.operator + ' ?');
	console.log('');	
};

Calculator.prototype.requestToInputFirstValues = function(){
	console.log('<< Please input some numbers... >>');
	console.log('?');
	console.log('');
};

Calculator.prototype.requestToSelectOperators = function(){
	console.log('<< Please select operators... >>');
	console.log('+  or  -  or  /  or  *');
	console.log('');
	console.log(this.result + ' ?');
	console.log('');
};

Calculator.prototype.outputResult = function(){
	console.log('= ' + this.result);
	console.log('');
};

// #####################################################################################################################
// ############################################## F U N C T I O N S ####################################################
// #####################################################################################################################

function add(value, result){
	return result + value;
}

function sub(value, result) {
	return result - value;
}

function times(value, result) {
	return result * value;
}

function divide(value, result) {
	if (value === 0) {
		throw new Error('Value = 0 Error');
	}
	return result / value;
}

function change(value, operaton, result){
	switch(operaton){
	case '+':
		return add(value, result);
	case '-':
		return sub(value, result);
	case '*':
		return times(value, result);
	case '/':
		return divide(value, result);
	default:
		break;
	}
}

/**
 * Main proccess functions
 * 
 */

function calculatorHundler() {
	// init readline interface.
	var i = rl.createInterface(process.stdin,process.stdout, null);
	// setting Pronpt.
	i.setPrompt('? ');
	// Event
	i.on('line',function(line){
		value = line;
		console.log('value is ' + value);
		i.prompt();
	});
}


// #####################################################################################################################
// ################################################### M A I N #########################################################
// #####################################################################################################################

console.log('Starting Javascript Calculator...');

// init Calculator
var calculator = new Calculator();
var result,operator,value;
console.log(calculator);

// input test
calculatorHundler();

// END