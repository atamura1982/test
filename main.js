// Encoding for the standard input
process.stdin.setEncoding('utf8');

// require readline module.
var rl = require('readline');

// #####################################################################################################################
// ################################################ C L A S S E S ######################################################
// #####################################################################################################################

function Calculator() {
	// constructor //
	this.operator = '';
	this.phase = 0;
	this.value = 0;
	this.result = 0;
}

Calculator.prototype.runOperation = function(){
	switch(this.operator){
		case '+':
			this.result = add(this.value, this.result);
			break;
		case '-':
			this.result = sub(this.value, this.result);
			break;
		case '*':
			this.result = times(this.value, this.result);
			break;
		case '/':
			this.result = divide(this.value, this.result);
			break;
		default:
			return false;
	}
};

Calculator.prototype.handler = function(){
	var self = this;
	// init readline interface.
	var i = rl.createInterface(process.stdin,process.stdout, null);
	// setting default pronpt.
	i.setPrompt('? ');

	// Event listener
	i.on('line',function(line){
		if(line == "exit"){
			self.phase = 9;
		}
		switch (self.phase) {
			case 0:
				if ((self.value = inputValueFilter(line)) ||
				    self.value === 0) {
					self.result = self.value;
					self.phase = 1;
					i.setPrompt(self.result + ' ? ');
				}
				break;
			case 1:
				if (inputOperatorFilter(line)) {
					self.operator = operator;
					self.phase = 2;
					i.setPrompt(self.result + ' ' + self.operator + ' ? ');
				}
				break;
			case 2:
				if ((self.value = inputValueFilter(line)) ||
				    self.value === 0) {
					calculator.runOperation();
					self.phase = 1;
					i.setPrompt('= ' + self.result + ' ? ');
				}
				break;
			case 9:
				console.log('bye');
				i.close();
				process.stdin.destroy();
				break;
			default:
				break;
		}
		if(self.phase != 9){
			i.prompt();
		}
	});
	i.prompt();
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

/**
 * Main proccess functions
 *
 */

function inputValueFilter(input) {
	var Input = Number(input);
	if (isNaN(Input)) {
		console.log('!error!');
		return false;
	}else{
		return Input;
	}
}

function inputOperatorFilter(input) {
	if (input === '+' ||
	    input === '-' ||
	    input === '*' ||
	    input === '/') {
		return operator = input;
	}else{
		console.log('!error!');
		return false;
	}
}

// #####################################################################################################################
// ################################################### M A I N #########################################################
// #####################################################################################################################

console.log('Starting Javascript Calculator...');

// init Calculator
var calculator = new Calculator();

// handler start
calculator.handler();

// END
