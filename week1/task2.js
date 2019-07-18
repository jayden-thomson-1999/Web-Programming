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