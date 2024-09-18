
//number 1

function calculateDifference(arg1, arg2) {
    return arg1 - arg2;
}
let result = calculateDifference(15, 8);
console.log(result); 

//number 2
function isOdd(num) {
    return num % 2 !== 0;
}

let result1 = isOdd(7);
let result2 = isOdd(10);
console.log(result1);    
console.log(result2); 

//number 3
function findMin(numbers) {
    return Math.min(...numbers);
}

let num = [20, -5, 6, 22, 2];
let minNum = findMin(num);
console.log(minNum); 

//number 4

function filterEvenNumbers(numbers) {
    return numbers.filter(num => num % 2 === 0);
}

let shanka = [1, 2, 3, 4, 5, 6, 7, 8];
let evenNums = filterEvenNumbers(shanka);
console.log(evenNums);

//number 5

function sortArrayDescending(arr) {
    return arr.sort((a,b) =>b-a);
}

let numbers = [10, 3, 5, 1, 8, 7];
let sortedNumbers = sortArrayDescending(numbers);
console.log(sortedNumbers);

//number 6

function lowercaseFirstLetter(str) {
    return str[0].toLowerCase() + str.slice(1);
}

let Result = lowercaseFirstLetter("Hello");
console.log(Result); 

//number 7

function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    return str.split('').filter(char => vowels.includes(char)).length;
}

let REsult = countVowels("Hello World");
console.log(REsult);


//number 8

function findAverage(arr) {
    
    let sum = 0;
    for (let num of arr) {
        sum += num; 
    }
    return sum / arr.length;
}


let Numbers = [10, 20, 30, 40, 50];
let average = findAverage(Numbers);
console.log(average);
