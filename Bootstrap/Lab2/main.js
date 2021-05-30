let age = 12;
let subjectName = "Enterprise apps";
let state = "";
let person = {
    firstname: "Ahmed",
    age: 21,
    subjects: ['OOP', "WEB"],
    address: { streetNo: 234, houseNo: 3, city: 'Sukkur' }
}
console.log(subjectName);
console.log(typeof person);
console.log(person.address);
arr = ['OOP','CCN'];
arr.forEach((element, index) => {
    console.log(element, 'Index:', index);

});
console.log(Object.keys(person));
console.log(Object.values(person));
