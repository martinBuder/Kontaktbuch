contactList = [];

let myContact

function addContact(firstName, familyName, phone) {
	myContact = new Contact(firstName, familyName, phone);
	contactList.push(myContact);
	myContact.printFullName()
}

addContact('Martin', 'Buder', '015128997385')


