var $ = require('jquery');
//var Person = require('./modules/Person'); 
import Person from './modules/Person';

alert("test  2 !!");

class Adult extends Person {
	payTaxes(){
		console.log(this.name + " now owes 0$ in taxes.")
	}
}

var jhon = new Person("John Doe", "blue");
jhon.greet();


var jane = new Adult("Jane Smith", "orange");
jane.greet();
jane.payTaxes();
