// My first JavaScript code.
console.log('Hello World');

//variable.
let FirstName = 'Uman';
let LastName = 'Rai.';
console.log(FirstName , LastName);

//constants
const interestRate = 1;
console.log(interestRate);

//object
let person={
	name : 'uman',
	age : 23
}
console.log(person);
// dot notation Dynamic typing
person.name = 'rai';
console.log(person.name);
// bracket notation Dynamic typing
person['name'] = 'dungbocha';
console.log(person['name']);

//array
let bikes = [ 'beneli', 'duke' ];
bikes[2] = 'fz';
console.log(bikes);

//function
function fun() {
	console.log('Hello World');
}
fun();
function greet(name , lastName) {
	console.log('Hello'  + name + ' ' + lastName);
}
greet('Uman' , 'Rai');

function square(number) {
	return number * number;
}
console.log(square(4));

// A simple function to return the weight
function sayMyWeight( weight )
{
	alert('Your weight is ' + weight)
}

// calling the above method
sayMyWeight(65)