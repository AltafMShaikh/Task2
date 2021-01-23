push()
const array = [1, 2, 3, 4]
array.push(10) 

join()
var meals = ['breakfast', 'lunch', 'dinner'];
meals.join(' AND ');


pop()
const array = [1, 2, 3 , 4]
array.pop() 

unshift()
const array = [1, 2, 3, 4]
array.unshift(9, 10) 
 

shift()
const array = [1, 2, 3, 4]
array.shift() 

forEach()
const array = [1, 2, 3, 4]
array.forEach((element, index) => {
   console.log(`Element ${element} at index ${index}`)
}

filter()
const array = [1, 2, 3, 4]
const filteredArray = array.filter(element => element%2)


map()
const array = [1, 2, 3, 4]
const mapArray = array.map(element => element * 2)


reduce()
const array = [1, 2, 3, 4]
const result = array.reduce((accumulator, current) => (
   accumulator + current
), 10)

sort()
var meals = ['dinner', 'supper', 'breakfast', 'lunch'];
meals.sort();


slice()
const array = [1, 2, 3, 4]
const slicedArray = array.slice(0, 2)

splice()
var cars = ["Audi", "MG", "Tesla", "Jaguar"];
cars.splice(2, 1, "Tata", "Kia");

concat()
const array = [1, 2, 3, 4]
const concatArray = array.concat([5, 6, 7, 8])

includes()
const array = [1, 2, 3];
console.log(array.includes(2));
