//objects
let obj = {
    name: 'Mr X',
    job: 'Hacker',
    salary: 1000,
    address: 'Bangaluru'
}
console.log(Object.keys(obj)); // [name, job, salary, address]
let ob1 = {
    name: 'Mr X',
    job: 'Hacker',
    salary: 1000,
    address: 'Bangaluru'
}
let isEq1 = obj == obj1; // false
let isEq2 = obj === obj2; // false
console.log(isEq1)
console.log(isEq2)