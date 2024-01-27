// complete this js code
function Person(name, age) {}

Person.prototype.greet=function(){
	let str=`hello my name is${this.name} , I am ${this.age} yerars old.`
}
function Employee(name, age, jobTitle) {}

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
