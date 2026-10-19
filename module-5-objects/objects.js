 // Objects
/*
 var human = {
    name: "Jannick",
    height: "180",
    age: "30",
    country: "DE",
    children: ["Maria","Karla", "Jens"]
}

var car = {
    engine: "3000",
    color: "Black",
    year: "2025",
    price: "25000"
}
*/
/******************************************************************************** */
/* Read object properties */

var human = {
    name: "Jannick",
    height: "180",
    age: "30",
    country: "DE",
    children: ["Maria","Karla", "Jen"]

}
// access the value by its property name
console.log(human["age"])
console.log(human.children)

/********************************************************************************* */
/* Change object properties */
var human = {
    name: "Jannick",
    height: "180",
    age: "30",
    country: "DE",
    children: [
        {name: "Maria", age: 10 }, 
        {name: "Maria", age: 14}, 
        {name: "Jen", age : 20}
    ]

}
human["age"] = 35;
human.age = 35;
console.log(human)

human.age = "thirty";
console.log(human)
// we get the age property of the second child.
console.log(human.children[1].age)





