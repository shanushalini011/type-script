/*
    {
        "created_at" : "24 April 2017",
        "aim_of_script" : "Reversing digits of any +ve integer in TypeScript(using Recursion)",
        "coded_by" : "Rishikesh Agrawani",
        "special" : "My own approach to reverse the digits"
    }
*/

function reverseDigits(n:number){

	if( Math.floor(n/10)==0)
	{
		return Math.floor(n) + ""	//Concatenation
	}

	// "" string is required, placing "" at end will generate improper result
	return  parseInt((n%10) + "" + reverseDigits(Math.floor(n/10)) )	//Recursive call 
}

var revNum = reverseDigits(1234)

console.log("1234 reversed form is ", revNum)
console.log("Type of ",revNum," is ", typeof revNum)

console.log("64534 reversed form is ", reverseDigits(64534))
console.log("1912387 reversed form is ", reverseDigits(1912387))
console.log("1984645234 reversed form is ", reverseDigits(1984645234))

/*
1234 reversed form is  4321
Type of  4321  is  number
64534 reversed form is  43546
1912387 reversed form is  7832191
1984645234 reversed form is  4325464891
*/