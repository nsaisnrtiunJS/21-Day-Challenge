
// Please Check All The Problem One By One Otherwise It Will Show Error 




// 1. Print numbers from 1 to N 
 let num1 = document.getElementById("num")
let btn = document.getElementById("btn")
let displayBtn = document.getElementById("displayNum")
  // Show input number on input field
  let n = parseInt(prompt('Please enter a number: '))
  num1.value = n;
  // Print all the numbers
  btn.addEventListener("click", function(){
    let htmlNum = ""
    for(let i = 1; i <= n; i++){
        htmlNum += i + '<br>';
    }
    displayBtn.innerHTML = htmlNum
  })



// 2. Print numbers from N to 1 without changing condition of above question
// let num2 = 10;
// for(let i = 1; i <= 10; i++){
//     console.log(num2 - i + 1);
// }


// 3. Print all even numbers from 1 to N 
// for(let i = 1; i <= 10; i++){
//     if(i % 2 === 0){
//         console.log(i);
//     }
// }


// 4. Sum of first N natural numbers 
     // Brute Force solution It takes 12 seconds
console.time()   // time() use for check how much time it will take to complete
// let n1 = 100000000n    // Use "bigInt"
// let sum = 0n  
// for(let i = 1n; i <= n1; i++){
//     sum = sum + i;
// }
// console.log(sum);

      // Optimized Solution, it takes less than 0.1ms
// let n2 = 100000000
// let calculate = (n2 * (n2+1)) / 2
// console.log(calculate);

// console.timeEnd()




// 5. Product(Factorial) of N 

let fact = document.getElementById("fact")
let factBtn = document.getElementById("fact-btn")
let displayFact = document.getElementById("displayFactorial")

let num = parseInt(prompt('Please enter a number: '))
fact.value = num;

factBtn.addEventListener("click", function() {
  let mul = 1;
  for(let i = 1; i <= num; i++){
    mul *= i;
  }
  displayFact.innerHTML = mul;
})
 


// 6. Sum of all Even Numbers up to N 
   // Brute Force solution
// let sum = 0;
// for(let i = 1; i <= 10; i++){
//     if(i % 2 === 0){
//         sum += i;
//     }
// }
// console.log(sum);

// First 5 even numbers' sum
// let nu = 5;
// let calculate = nu * (nu + 1)
// console.log(calculate);


// 7. Print Squares of Numbers from 1 to N**
// let num = prompt("Enter a number: ")
// for(let i = 1; i <= num; i++){
//     let sqe = i * i;
//     console.log(sqe);
// }


// 8.Print all even numbers which is divisible by 3 and 5 up to N 
/*
let n = 45;
console.log('All the numbers divisible by both 3 and 5: ');
for(let i = 1; i <= n; i++){
  if((i % 3 === 0) && (i % 5 === 0)){
    console.log(i);
  }
}
  */


// 9. Find the sum of all the odd nums up to n
/*
let n = 10;
let sum = 0;
for(let i = 1; i <= n; i++){ 
  if(i % 2 === 1){
    sum += i;
  }
}
console.log(sum);
*/


// 10. Find the cube of numbers from 1 to N 
/*
for(let i = 1; i <= 5; i++){
  console.log(Math.pow(i, 3));
 // OR --> console.log(i ** 3);
}
 */


// 11. Print only the numbes that are both even and perfect square at the same time 
function findEvenPerfectSquare(num){
  for(let i = 1; i <= num; i++){
    let perfectSquare = Number.isInteger(Math.sqrt(i))
    let isEven = i % 2 === 0;
    if(perfectSquare && isEven){
      console.log(i);
    }
  }
}
findEvenPerfectSquare(500)