const validate = {}
let result

validate.check = (string) => {
	grammarValidation(string);
	return result
}

const grammarValidation = (string) => {
	if(string[0] !== "(" && !scanDigit(string[0])) {
		validationResult(false, "string must start with ( or a digit 0-3");
		return result;
	}
	
	if (string[string.length - 1] != "$") {
		validationResult(false, "string must have \"$\" at the end");
		return result;
	}
	
	scanExtra(string);
}

const scanExtra = (string) => {
	let terminalSymb=0;
	let openParens=0;
	let closeParens=0;
	
	for(let i=0; i<string.length; i++) {
		if(string[i]=="$")
			terminalSymb++;
		if(string[i]=="(")
			openParens++;
		if(string[i]==")")
			closeParens++;
	}

	if(terminalSymb>1) {
		validationResult(false, "only one $ allowed");
		return;
	}
	
	if(openParens!=closeParens) {
		validationResult(false, "parentheses must be matching.");
		return;
	}
	
	scanIllegal(string);
}

const scanIllegal = (string) => {
	let legalChars = ["(", ")", "$", "+", "-", "*", "/"]
	for(let i=0; i<string.length; i++) {
		if(!scanDigit(string[i]) && !legalChars.includes(string[i]))
		{
			validationResult(false, `the character '${string[i]}' is not legal`);
			return;
		}
	}

	scanBeforeAfter(string);
}

const scanBeforeAfter = (string) => {
	for(let i=0; i<string.length; i++) {
		if(scanDigit(string[i])) {
			if(scanDigit(string[(i-1)]) || scanDigit(string[(i+1)])) {
				validationResult(false, "can only have digits 0, 1, 2, 3");
				return;
			}
		}
		
		if(string[i]=="(") {
			if(string[i+1]!=="(" && !scanDigit(string[(i+1)])) {
				validationResult(false, "( must have a 0, 1, 2, 3 or a ( after it");
				return;
			}
		}
		
		if(string[i]==")") {
			if(!scanDigit(string[(i-1)]) && string[i-1]!==")") {
				validationResult(false, ") must be preceded by a 0, 1, 2, 3 or a )");
				return;
			}
			
			if(string[i+1]!=="$" && string[i+1]!==")" && string[i+1]!=="+" && string[i+1]!=="-" && string[i+1]!=="*" && string[i+1]!=="/") {
				validationResult(false, ") must have an operator, $, or ) after them");
				return;
			}
		}
		
		if(string[i]=="+" || string[i]=="-" || string[i]=="*" || string[i]=="/") {
			if(string[(i-1)]!=")" && !scanDigit(string[(i-1)])) {
				validationResult(false, "all operators must be preceded by digits or )");
				return;
			}
				
			if( string[(i+1)]!="(" && !scanDigit(string[(i+1)])) {
				validationResult(false, "all operators must have digits or ( after them");
				return;
			}
		}
	}
	
	scanParenth(string);
}

const scanParenth = (string) => {
	let matchedParens=0;
	for(let i=0; i<string.length; i++) {
		if(string[i]=="(") {
			matchedParens++;
			let j=i+1;
			while(matchedParens!=0 && j<string.length)
			{
				if(string[j]==")")
				matchedParens--;
			
				if(string[j]=="(")
				matchedParens++;
				j++;
			}
		}
	}

	if(matchedParens===0) {
		validationResult(true, '');
	}
	else {
		validationResult(false, "'(' must be closed with a ')'");
	}
}

const scanDigit = (digit) => {
	let numbers = ["0", "1", "2", "3"];
	if(!numbers.includes(digit)) {
		return false;
	}
	return true;
}

const validationResult = (res, why) => {
	if(res) {
		result = "String is valid";
	}
	else {		
		result = `Invalid String: ${why}`;
	}
	return;
}

export default validate