// example of encapsulation
let employee={
	baseSalary : 30_000,
	overtime : 10,
	rate : 20,
	getWage : function(){
		return this.baseSalary + (this.overtime * this.rate);
	}
};
var wage = employee.getWage();
console.log(wage)



function getWage(salary, overtime, rate){
	return salary + (overtime * rate);
}

let baseSalary = 30_000;
let	overtime = 10;
let	rate = 20;

console.log(getWage(baseSalary, overtime, rate))

// object
var circle = {
	radius: 1,
	location: {
		x:1,
		y:1
	},
	draw: function() {
		console.log('draw');
	}
};

circle.draw();

//factory
function createCircle(radius){
	return {
		radius,
		draw: function() {
			console.log('draw');
		}
	};
}
var circle = createCircle(1);
circle.draw();

console.log(circle)

var first = "uman";
var last = "rai"
var age = 22


// method or function

function sayAnything (first_name, last_name, age)
{
	return 'my name is ' + first_name + ' ' + last_name + ' and my age is ' + age;
}


// console.log(sayAnything(first, last, age))

const Person = {

	first_name: "Uman",
	last_name: "Rai",
	age: 22,
	// anonymous function
	sayAnything: function (salary) {
		console.log(this)
		return 'my name is ' + this.first_name + ' ' + 
		this.last_name + ' and my age is ' + this.age + ' and salary is ' +salary;
	}
}

console.log(Person.sayAnything(5000))