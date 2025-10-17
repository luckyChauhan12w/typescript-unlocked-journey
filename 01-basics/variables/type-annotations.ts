/* 

string --> "Hello"
Number --> 1, 1.0
Boolean --> true, false
any --> it store any thing (avoid if possible)
unknown --> it is safer version of any

*/

// Type Annotations

let animalName: string;
animalName = "monkey"
// animalName = 20  //Error: Type 'number' is not assignable to type 'string'.

let score: number;
score = 100
// score = "high"   //Error: Type 'string' is not assignable to type 'number'.

let isCorrect: boolean;
isCorrect = true
// isCorrect = "high"   //Error: Type 'string' is not assignable to type 'boolean'

let dataAny: any;
dataAny = "Hello";
dataAny = 123;
dataAny = { name: "TypeScript" };

console.log(dataAny.toString());