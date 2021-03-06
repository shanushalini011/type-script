/*
    {
        "created_at" : "23 May 2017",
        "aim_of_script" : "Sorting array of persons(objects) based on their age",
        "coded_by" : "Rishikesh Agrawani",
    }
*/
interface Person{
	name: string 
	age: number
}

var persons:Person[] = [
		{name: "Rob Pike", age: 60},
		{name: "Hemkesh", age: 23},
		{name: "Gurucharan Das", age: 25},
		{name: "Malinikesh", age: 21},
		{name: "Ritu", age: 20},
]

console.log("Initially:-")
console.log(persons)

//Sorting persons in ascending according to their age
persons.sort (
	function(person1:Person, person2:Person) {
		return (person1.age - person2.age)
	}
)

console.log("\nSorting in ascending order(age based):-")
console.log(persons)

/*

Initially:-
[ { name: 'Rob Pike', age: 60 },
  { name: 'Hemkesh', age: 23 },
  { name: 'Gurucharan Das', age: 25 },
  { name: 'Malinikesh', age: 21 },
  { name: 'Ritu', age: 20 } ]

Sorting in ascending order(age based):-
[ { name: 'Ritu', age: 20 },
  { name: 'Malinikesh', age: 21 },
  { name: 'Hemkesh', age: 23 },
  { name: 'Gurucharan Das', age: 25 },
  { name: 'Rob Pike', age: 60 } ]

*/