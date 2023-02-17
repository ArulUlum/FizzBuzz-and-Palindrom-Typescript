console.log("Fizz Buzz");
var output = " ";
for (var i = 1; i <= 30; i++) {
    if (i % 15 === 0) {
        output = output + "FizzBuzz ";
    }
    else if (i % 3 === 0) {
        output = output + "Fizz ";
    }
    else if (i % 5 === 0) {
        output = output + "Buzz ";
    }
    else {
        output = output + i + " ";
    }
}
console.log(output);
console.log("Palindrom");
function isPalindrome(str) {
    str = str.toLowerCase();
    return str === str.split('').reverse().join('');
}
console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));
