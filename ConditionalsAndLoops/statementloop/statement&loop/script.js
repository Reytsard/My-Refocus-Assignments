const birth_year = 1999;
let current_year = new Date().getFullYear();
let age = current_year - birth_year;
console.log(`Patient's age: ${age}`);

let birth_month = 12;
const current_month = new Date().getMonth();

current_year -= 1;
age = current_year - birth_year;

if(current_month > birth_month){
    age++;
}

console.log(`Patient's Accurate age: ${age}`);




