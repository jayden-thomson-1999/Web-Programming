//Question 5
function multiplyNums(x, y, z) {
    return 'new numer is ' + (x * y * z);
}

const arrowMultiplyNums = (x, y, z) => {return 'new numer is ' + x * y * z};

console.log(multiplyNums(2,2,3));
console.log(arrowMultiplyNums(2,2,3));