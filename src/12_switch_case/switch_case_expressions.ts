/*
    {
        "created_at" : "27 April 2017",
        "aim_of_script" : "Using complicated constant expressions as case value",
        "coded_by" : "Rishikesh Agrawani",
    }
*/



function printMessages(n:number|string){ //Unions
	switch(n){
		case 4+5:
					console.log("This is 9")
					break
		case (6+7)*3:
					console.log("This is 39")
					break
		case "Nagpur":
					console.log("This is Nagpur")
					break
		case 45/4:
					console.log("This is 11.25")
					break
		case 56+9-3:
					console.log("This is 62")
					break
		default:
					console.log("I didn't find any valid number")
	}
}

var arr:number[] = [9, 39, 11.25, 62];

for(var i:number=0;i<arr.length;i++){
	printMessages( arr[i] )
}

printMessages("Nagpur")

printMessages("Raipur")



