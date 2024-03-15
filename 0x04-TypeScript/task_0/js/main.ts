interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

const studentA: Student = {
    firstName: "Uchenna",
    lastName: "Oko",
    age: 29,
    location: "Lagos",
}

const studentB: Student = {
    firstName: "Emmanuel",
    lastName: "Mike",
    age: 33,
    location: "Rivers",
}

const studentsList = [studentA, studentB];

document.addEventListener('DOMContentLoaded', () => {

	const table = document.getElementById('studentTable') as HTMLTableElement;

	studentsList.forEach((student) => {
		const row = table.insertRow();
		const firstNameCell = row.insertCell(0);
		const locationCell = row.insertCell(1);

		firstNameCell.innerHTML = student.firstName;
		locationCell.innerHTML = student.location;
	})
})
