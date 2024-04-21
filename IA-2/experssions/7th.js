// What is the output of the following code
let myPhone = {
    name: 'iPhone',
    company: 'Apple',
    date: '2023',
    price: 100000,
    color: 'blue'
}
let { name, company } = myPhone;
console.log(name, company);
console.log(Object.keys(myPhone))