// Q1
function showDateTime() {
    var date = new Date();
    console.log(date); // console output
}
showDateTime();


// Q2
function greetUser(firstName, lastName) {
    var fullName = firstName + " " + lastName;
    console.log("Hello " + fullName);
}
greetUser("Ali", "Khan");


// Q3
function addNumbers(num1, num2) {
    var sum = num1 + num2;
    return sum;
}
console.log(addNumbers(5, 10));


// Q4
function calculator(num1, num2, operator) {
    if (operator == "+") {
        return num1 + num2;
    }
    if (operator == "-") {
        return num1 - num2;
    }
    if (operator == "*") {
        return num1 * num2;
    }
    if (operator == "/") {
        return num1 / num2;
    }
}
console.log(calculator(10, 2, "+"));


// Q5
function square(num) {
    return num * num;
}
console.log(square(4));


// Q6
function factorial(num) {
    var fact = 1;
    for (var i = 1; i <= num; i++) {
        fact = fact * i;
    }
    return fact;
}
console.log(factorial(5));


// Q7
function counting(start, end) {
    for (var i = start; i <= end; i++) {
        console.log(i);
    }
}
counting(1, 10);


// Q8
function calculateHypotenuse(base, perpendicular) {

    function calculateSquare(num) {
        return num * num;
    }

    var result = calculateSquare(base) + calculateSquare(perpendicular);
    console.log(result);
}
calculateHypotenuse(3, 4);


// Q9
function areaRectangle(width, height) {
    return width * height;
}

console.log(areaRectangle(5, 10));

var w = 6;
var h = 8;
console.log(areaRectangle(w, h));


// Q10
function isPalindrome(str) {
    var reverse = str.split("").reverse().join("");
    if (str == reverse) {
        console.log("Palindrome");
    } else {
        console.log("Not Palindrome");
    }
}
isPalindrome("madam");


// Q11
function titleCase(str) {
    var words = str.split(" ");
    for (var i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
    return words.join(" ");
}
console.log(titleCase("the quick brown fox"));


// Q12
function longestWord(str) {
    var words = str.split(" ");
    var longest = "";
    for (var i = 0; i < words.length; i++) {
        if (words[i].length > longest.length) {
            longest = words[i];
        }
    }
    return longest;
}
console.log(longestWord("Web Development Tutorial"));


// Q13
function countLetter(str, letter) {
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] == letter) {
            count++;
        }
    }
    return count;
}
console.log(countLetter("JSResourceS.com", "o"));


// Q14
function calcCircumference(radius) {
    var c = 2 * 3.14 * radius;
    console.log("The circumference is " + c);
}

function calcArea(radius) {
    var a = 3.14 * radius * radius;
    console.log("The area is " + a);
}

calcCircumference(5);
calcArea(5);
