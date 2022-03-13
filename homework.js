//1 no of character in a string//

function countChar(intputstring) {

    total_no_ofchar = intputstring.length

    return total_no_ofchar;
}
console.log(countChar("Janani"));

//2 find the largest no of 2//

function largestNo(num1, num2) {
    if (num1 < num2)
        largestNum = num2;
    else
        largestNum = num1;
    return largestNum;
}
console.log(largestNo(45, 65))

//3 find a number between 5000 to 9999//

function numberBetween(num) {
    if (num < 9999 && num > 5000)
        result = true;
    else
        result = false;
    return result;
}
console.log(numberBetween(4000))

//4 cube root of the number//

function cuberoot(num) {
    answer = Math.cbrt(num);
    return answer;
}
console.log(cuberoot(64))

//5 Convert feet into inches//

function convert(inches) {
    feet = inches * 0.083333
    return feet;
}
console.log(convert(4))

//6 converts degrees to Fahrenheit//

function convertCelsiusFahrenheit(C) {
    Fahrenheit = (C * 1.8) + 32;
    return Fahrenheit
}
console.log(convertCelsiusFahrenheit(25))

//7 kilograms to pound//
function weightConverter(kg) {
    lb = kg * 2.2046;
    return lb + " lb";
}
console.log(weightConverter(50))

//7 Pound to Kilogram//
function Measureweight(lb) {
    kg = (lb / 2.2046);
    return kg  + " kg";
}
console.log(Measureweight(110))

//10 returns the longest string
function findLongestWord(str1, str2) {

    if (str1.length > str2.length)
        longestString = str1;
    else
        longestString = str2;
    return longestString;
}
console.log(findLongestWord("welcome", "thankyou"))

//10 another method////

function findLongestWord(str1,str2) {

    let longestString;

   if (str1.length > str2.length)
       longestString = str1;
    else if (str1.length < str2.length)
       longestString =str2;
    else
       longestString = "Both are same length"
    return longestString;
}
console.log(findLongestWord("jananik","gowshik"))

//11 the string of shortest length
function findshorestString(stringAarray){
let shortestString=stringAarray[0];

for(let i=0;i<=stringAarray.length;i++){
    if(shortestString.length > String(stringAarray[i]).length)
        shortestString = stringAarray[i];
}


return shortestString;
}
console.log(findshorestString(["circle","triangle","cube","square","rectangle"]))