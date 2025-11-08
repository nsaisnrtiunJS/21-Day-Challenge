// It's a day-2 of 21-day challenge

// QS-1. Find the maximum of three numbers. for example: there are 3 number 10,20,15 and the biggest numbers is 20
// let maxNum = document.getElementById("displayMaxNum")
/*
function maxOfThree(a,b,c){
    // debugger;
    console.log(a,b,c);

    if(a > b && a > c){
    console.log(`${a} is the biggest number among the all three numbers(${a},${b},${c}).`);
} else if(b > c){
    console.log(`${b} is the biggest number among the all three numbers(${a},${b},${c}).`);
} else{
    console.log(`${c} is the biggest number among the all three numbers(${a},${b},${c}).`);
}
}
maxOfThree(4,4,3)
*/


// QS-2. Check if a number is Positive, Negative or Zero
/*function checkNumberType(num){
    if(num === 0){
        console.log(`${num} is a Zero.`);
    } else if(num > 0){
        console.log(`${num} is a Positive Number.`);
    } else{
        console.log(`${num} is a Negative Number.`);
    }
}
checkNumberType(Number(prompt('Enter a number: ')))
*/



// QS-3. Calculate Electricity Bill 

/* 
function calculateElectricityBill(unit){
    if(unit < 0){
        console.log('Your electricity unit should be positive');
    } else if(unit <= 100){
        console.log(unit * 5);
    } else if(unit <= 200){
        console.log((100 * 5) + ((unit - 100) * 7));
    } else if(unit <= 300){
        console.log((100 * 5) + (100 * 7) + ((unit - 200) * 10));
    }
     else if(unit > 300){
        console.log((100*5) + (100*7) + (100*10) + ((unit - 300) * 12));
    }

}
    calculateElectricityBill(Number(prompt(`Enter your electricity unit: `)))
    */


/*              // OR
function calculateElectricityBill(unit){
  if(unit < 0) return 'Invalid unit';
  else if(unit <= 100) return unit * 5;
  else if(unit <= 200) return (100 * 5) + ((unit - 100) * 7);
  else if(unit <= 300) return (100 * 5) + (100 * 7) + ((unit - 200) * 10);
  else return (100 * 5) + (100 * 7) + (100 * 10) + ((unit - 300) * 12);
}

console.log(calculateElectricityBill(410));
*/




// QS-4. Check if a character is a Vowel or Consonant
/*
function checkVowelOrConsonant(str){
    if(!/^[a-z]$/i.test(str)){
        alert('Not an alphabetical character!')
    }

    if(/[aeiou]/i.test(str)){
        console.log(`${str} is a Vowel.`);
    } else{
        console.log(`${str} is a Consonant.`);
    }
}
checkVowelOrConsonant(prompt('Enter a character.'))
*/




// QS-5. Check if a year is a Leap Year or not ?
function checkLeapYear(year){
    if(year % 4 === 0){
        if(year % 100 === 0){
            if(year % 400 === 0){
                console.log(`${year} is a Leap year.`);
            } else{
                console.log(`${year} is not a Leap year.`);
            }
        } else{
            console.log(`${year} is a Leap year.`);
        }
    } else{
        console.log(`${year} is not a Leap year.`);
    }
}
checkLeapYear(prompt(`Enter a year : `))