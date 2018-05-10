const validate = {}
let result

validate.check = (string) => {
	startEnd(string);
	return result
}

//check if string begin and end with right characters
function startEnd(input)
{
	if(input[0]!=="(" && !checkDigit(input[0]))
	{
		outputResult(false, "String has to start with a digit or (.");
		return result;
	}
	
	if (input[input.length - 1] != "$") 
	{
		outputResult(false, "String has to end with \"$\"");
		return result;
	}
	
	checkForExtraSymbols(input);
}

//checks;
//1) if there are more than one $
//2) if number of ( matches )
function checkForExtraSymbols(input)
{
	var numOfDollarSigns=0;
	var numOfOpenBrace=0;
	var numOfCloseBrace=0;
	
	for(var i=0; i<input.length; i++)
	{
		if(input[i]=="$")
			numOfDollarSigns++;
		if(input[i]=="(")
			numOfOpenBrace++;
		if(input[i]==")")
			numOfCloseBrace++;
	}

	if(numOfDollarSigns>1)
	{
		outputResult(false, "too many $");
		return;
	}
	
	if(numOfOpenBrace!=numOfCloseBrace)
	{
		outputResult(false, "parentheses must be matching.");
		return;
	}
	
	checkIllegalCharacters(input);
}

//checks if there are any illegal characters such as alphabets !, @, etc...
function checkIllegalCharacters(input)
{
	for(var i=0; i<input.length; i++)
	{
		if(!checkDigit(input[i]) && input[i]!=="(" && input[i]!==")" && input[i]!=="$" && input[i]!=="+" && input[i] !== "-" && input[i] !== "*" && input[i] !== "/")
		{
			outputResult(false, `the character '${input[i]}' is not legal`);
			return;
		}
	}

	checkWhatIsBeforeAndAfterSymbols(input);
}

//make sure right characters are before and after each symbol, and digit.
function checkWhatIsBeforeAndAfterSymbols(input)
{
	for(var i=0; i<input.length; i++)
	{
		if(checkDigit(input[i]))
		{
			if(checkDigit(input[(i-1)]) || checkDigit(input[(i+1)]))
			{
				outputResult(false, "can only have digits 0-3");
				return;
			}
		}
		
		if(input[i]=="(")
		{
			//checks if ( is followed by a number
			if( input[i+1]!=="(" && !checkDigit(input[(i+1)]))
			{
				outputResult(false, "( must be followed by a digit 0-3 or a (");
				return;
			}
		}
		
		if(input[i]==")")
		{
			if(!checkDigit(input[(i-1)]) && input[i-1]!==")")
			{
				outputResult(false, ") must have a number before it or a )");
				return;
			}
			
			if(input[i+1]!=="$" && input[i+1]!==")" && input[i+1]!=="+" && input[i+1]!=="-" && input[i+1]!=="*" && input[i+1]!=="/")
			{
				outputResult(false, ") must be followed by an operator, a $, or a )");
				return;
			}
		}
		
		if(input[i]=="+" || input[i]=="-" || input[i]=="*" || input[i]=="/")
		{
			if(input[(i-1)]!=")" && !checkDigit(input[(i-1)]))
			{
				outputResult(false, "operators must have digits or ) before them");
				return;
			}
				
			if( input[(i+1)]!="(" && !checkDigit(input[(i+1)]))
			{
				outputResult(false, "operators must be followed by digits or (");
				return;
			}
		}
	}
	
	checkMatchingBraces(input);
}

//check if open brace has matching close brace
function checkMatchingBraces(input)
{
	var matchFound=0;
	for(var i=0; i<input.length; i++)
	{
		if(input[i]=="(")
		{
			matchFound++;
			var j=i+1;
			while(matchFound!=0 && j<input.length)
			{
				if(input[j]==")")
				matchFound--;
			
				if(input[j]=="(")
				matchFound++;
				
				j++;
			}
		}
	}

	if(matchFound===0)

		outputResult(true, "");
	else 
		outputResult(false, "open parenthesis must have matching close parenthesis")
}

//checks if passed in character is a number between 0 and 3
function checkDigit(digit)
{
	if(digit!=="0" && digit!=="1" && digit!=="2" && digit!=="3")
	{
		return false;
	}
	return true;
}

function outputResult(res, why)
{
	
	if(res)
	{
		
		result="Valid String";
		// console.log(result)
	}
	else
	{		
		
		result=`Invalid String: ${why}`;
		// console.log(result)
	}
	return;
}

export default validate