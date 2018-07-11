class Person{

	constructor(fullName, faveColor){
		this.name = fullName;
		this.color =faveColor
	}

	
	greet() {
		console.log("hey my name is " + this.name + " and my fave color is " + this.color + ".");
	}
}

//module.exports = Person; 
export default Person;