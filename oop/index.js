// example of encapsulation
let employee={
	baseSalary : 30_000,
	overtime : 10,
	rate : 20,
	getWage : function(){
		return this.baseSalary + (this.overtime * this.rate);
	}
};
employee.getWage();
console.log(employee);