class Contact extends Person {
	phone; // contact hat zusätzlich die Werte von person

	constructor(firstName, familyName, phone) {
		super();
		this.firstName = firstName;
		this.familyName = familyName;
		this.phone = phone;
	}

	printFullName() {
		console.log(this.firstName, this.familyName)
	}

	call() {
		window.location.href = 'tel:.' + this.phone;
	}
};


class Person {
	firstName;
	familyName;

	constructor() {
		//geht erst nach dem oberen super
	}
}