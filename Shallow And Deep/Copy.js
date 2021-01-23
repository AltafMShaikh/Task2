//Deep Vs Shallow Copy
const a={id:1,name:"Elon Musk"} 
const b=a
b.id=5
console.log("A value ",a)
console.log("B value ",b)

let person1 = {
    firstName: 'Elon Musk',
    lastName: 'Jack Ma'
};
let person2 = person1;


person2.firstName = 'Mukesh';
console.log(person); 


//Shallow copy 

let person = {
    firstName: 'Altaf',
    lastName: 'Shaikh',
    address: {
        street: 'Kopargaon',
        city: 'No where',
        state: 'Mh',
        country: 'IND'
    }
};


let person2 = Object.assign({}, person);

person2.firstName = 'sam';

person2.address.street = 'any where'; 
person2.address.city = 'python View'; 

console.log(person2);

//Deep copy

let person = {
    firstName: 'Elon',
    lastName: 'Musk',
    address: {
        street: 'Digital road',
        city: 'WD',
        state: 'Mars',
        country: 'USA'
    }
};


let person2 = JSON.parse(JSON.stringify(person));

person2.firstName = 'Mukesh'; 
person2.address.street = 'IND';
person2.address.city = 'OWN View';

console.log(person);