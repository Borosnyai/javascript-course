// Arrays
/*
//          0         1
names = ["Jannick","Peter"]
console.log(names);

console.log(names[0]);
console.log(names[1]);

numbers = [1, 10, 20];

random = ["X", 10, "Jannick"];

console.log(random);
*/
/********************************************************** */
/*
// The first element of the array is at index 0
fruits = ["Apple", "Banana", "Orange"];
console.log(fruits);
fruits[0] = "Apple";
console.log(fruits);
// undefined: there is no element at this index
console.log(fruits[3]);

console.log(fruits[1]);
*/
/************************************************************************ */
/** The array length property */
//
/*
console.log(fruits.length);

console.log(fruits[fruits.length - 1]);
fruits[2];
fruits[fruits.length - 1];

// add elements to the array

var names = ["John", "Bill", "Martin"];
console.log(names);
// push: add to the end
names.push("Karin");
console.log(names);

var names_2 = []

names_2.push("Tim");
console.log(names_2);
*/
/*********************************************************************** */
/* Insert elements at a specific position in the array */
/*
var numbers = [1,2,3,4,5,6];

numbers.splice(1,0,2);

console.log(numbers);

var names = ["a", "b", "d", "e"]

names.splice(2, 0,"c")

console.log(names);
*/
/************************************************************************* */
/* Join/concatenate several arrays */
/*
var numbers = [1,2,3,4]
var numbersTwo = [5,6,7,8]
var newArray = numbers.concat(numbersTwo)
numbers.concat(numbersTwo);
console.log(numbers)

console.log(newArray)

var numbers = [1,2,3,4]

var numbersTwo = [4,5,6,7,8,99]

numbers.concat(numbersTwo)
//console.log(numbers)
console.log(numbersTwo);

var numbers = [1,2,3,4]

var numbersTwo = [4,5,6,7,8]

var newArray = numbers.concat(numbersTwo);

console.log(newArray)
*/

/*********************************************************************** */
/** Remove elements from an array */
/*
var numbers = [1,2,3,4,5,6,7,8,9]
// remove the first element
numbers.shift()
// start at the second element and remove 3 elements
numbers.splice(2, 3)

var numbers = [1,2,3,4,5,6,7,8,9]
//remove the last element  9

numbers.pop()
// remove the first element
numbers.shift()

numbers.splice(2, 3)


console.log(numbers)

console.log(numbers)

*/
/***************************************************************************** */
/** Find an element/index in an array */
/*
var numbers = [1,2,3,4,5,6,7,8,9]

// we want to check whether the array contains the element 4.
var result = numbers.find(element => element == 4)

console.log(result)

var numbersTwo = [4,6,7,2,4,3]

var resultTwo = numbersTwo.indexOf(6)
console.log(resultTwo)

var numbersThree = [4,6,7,2,4,3, 4]
var resultThree = numbersThree.lastIndexOf(4)
console.log(resultThree)
*/
/***************************************************************************** */
/* Sort or reverse arrays */

var names = ["John", "Marie","Andreas", "Tina"]
names.sort()
console.log(names) 
