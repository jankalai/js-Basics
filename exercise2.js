let janphonenum = ["US","IND"]
console.log(janphonenum)
janphonenum.pop()
console.log(janphonenum)
janphonenum.push("CAN")
console.log(janphonenum)
janphonenum.unshift("AUS")
console.log(janphonenum)

let citizenship = "US"

switch(citizenship) {
  case "GC":
    console.log("He is GC")
    break;
  case "US":
    console.log("He is US Citizen")
    console.log("Take photo")
    console.log("Welcome US Citizen send him to pick up")
    break;
  case "ESTA":
  	console.log("He is ESTA")
    break;
  default:
    console.log("He is visa holder")
}
let x = 6;
let y = 7;

if (x > y){
	console.log("x is greater")
}
else{
	console.log("y is greater")
}
var tx = 6;
var ty = 7;
{
console.log(tx > ty ? "x is greater" : "y is greater") 
}
let temp = 30;

while(temp < 50){
	console.log("Humidfier on temp is " + temp)
	temp++;
}