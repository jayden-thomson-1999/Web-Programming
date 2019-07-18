//Question 1
console.log('Hello World, Node.js!');

//Question 2
let arr = [1,2,3,4,5];
console.log(arr);

arr.push(6);
console.log(arr);

arr.unshift(0);
console.log(arr);

arr.splice(3,0,2.5);
console.log(arr);

arr.pop();
console.log(arr);

arr.splice(1,1);
console.log(arr);

arr[4] = 100;   
console.log(arr);

arr.sort(function(a,b) {
    return a > b;
});
console.log(arr);

//Question 3

let people = {
    people: [
        {firstname: 'John', lastname: 'Doe'},
        {firstname: 'Jane', lastname: 'Doe'},
        {firstname: 'Joe', lastname: 'Dane'}
    ]
}

console.log(people);

let str = JSON.stringify(people);
console.log(str);

let people_parse = JSON.parse(str);
console.log(people_parse);

//Question 4
const arrayAdd = require('array-add-num');

arr = [5,4,3,8];
total = arrayAdd(arr);

console.log(`Sum of Array is ${total}`);

//Question 5
function multiplyNums(x, y, z) {
    return 'new numer is ' + (x * y * z);
}

const arrowMultiplyNums = (x, y, z) => {return 'new numer is ' + x * y * z};

console.log(multiplyNums(2,2,3));
console.log(arrowMultiplyNums(2,2,3));