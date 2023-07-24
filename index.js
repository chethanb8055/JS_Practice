// ---------------------Assignment-01--------------------


// ----------------------Problem-Statement---------------
// Write a code which can give grades to students according to theirs marks using Conditionals

// *80%-100%, Distinction
// *60%-79%, First Class
// *50%-59%, Second Class
// *35%-49%, Pass
// *0%-34%, FAIL


// -------------------------Solution-------------------------

// function studentsGrade(marks) {
//     if (marks >= 80 && marks <= 100) {
//       return "Distinction";
//     } else if (marks >= 60 && marks <= 79) {
//       return "First Class";
//     } else if (marks >= 50 && marks <= 59) {
//       return "Second Class";
//     } else if (marks >= 35 && marks <= 49) {
//       return "Pass";
//     } else if (marks >= 0 && marks <= 34) {
//       return "FAIL";
//     } else {
//       return "Invalid marks";
//     }
//   }
  

   
//   let useMark =prompt()
//  const Ramesh = prompt("Enter Marks of Ramesh")
//  const Rajesh = prompt("Enter Marks of Rajesh")
//  const Rav = prompt("Enter Marks of Rav")
//  const Kiran = prompt("Enter Marks of Kiran")


// let studentRamesh = studentsGrade(Ramesh);
// let studentRajesh = studentsGrade(Rajesh);
// let studentRavi = studentsGrade(Rav);
// let studentKiran= studentsGrade(Kiran);

  
//   console.log(" Ramesh grade:", studentRamesh);
//   console.log(" Rajesh grade:", studentRajesh);
//   console.log(" Ravi grade:", studentRavi);
//   console.log(" Kiran grade:", studentKiran);
  // console.log("Student One grade:", studentOne);

  

  // ---------------------Assignment-02--------------------

// ----------------------Problem-Statement---------------

// Get user input using prompt(“Enter your age:”). if the user is 18 years or older than 18 years allow him to vote, else infrom him how many more years he needs to become a voter.



// -------------------------Solution---------------------

//   let age = prompt("Enter your age:");

// if (age >= 18) {
//   console.log("You are eligible to vote!");
// } else if(age >=0 && age<18){
//     let remainingYears = 18 - age;
//     console.log("You need", remainingYears, "more years to become a voter.");
// }else{
//     console.log("Invalid age")
// }




// ----------------------------assigmen ----------------------------------


// function ranDom(min,max){

//   return Math.floor(Math.random() * (max - min + 1)) + min
// }


// let pass = [] 


// Number Part

// let charList ="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
// console.log(charList.length)

// let reqChar = prompt("How many characters do you want in your password?")

// for(let i=0;i<reqChar;i++ ){
  
//   let randNum = ranDom(0, charList.length);
//   let chart = charList.charAt(randNum)
  
//   pass.push(chart)
  
// }
// let reqNum = prompt("How many numbers do you want in your password?")
// for(let i=0;i<reqNum;i++ ){
  
//   pass.push(ranDom(0,9))
  
// }





//chart Part
// alert(`Copy this:-${pass.join("")}`)
// // pass.join(" ")
// console.log(
//   pass.join(""))

// console.log(pass)


// -------------------------------Asssingment 5--------------------

//01)------ print any random 5 chart & covert that into ASCII Code-----

//To get random value from give range


// function getRndInteger(min,max){
//   return Math.floor(Math.random()*(max-min)) +min;
// }

// let charList ="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
// let listChart = []


// for(let i =0;i<(rqChart=10);i++){
//   let alpha = getRndInteger(0,charList.length)
//   listChart.push(charList[alpha])
// }
// let liToStr = ""
// listChart.forEach((li)=>liToStr+=li)
// console.log(liToStr)

// for(char of liToStr){
//   console.log(`the ASCII value of ${char} is ${char.charCodeAt()}`)
// }


//02)-------Print Alpha char of 10 ANd reverse that string-----

// function getRndInteger(min,max){
//   return Math.floor(Math.random()*(max-min)) +min;
// }
// // random single number 
// function generateRandomNumber(){
//    return getRndInteger(0,9);
// }
// let listChart = []

// for(let i =0;i<(reNum=5);i++){
//   let num = generateRandomNumber()  
//   listChart.push(num)
// }

// let charList ="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

// for(let i =0;i<(rqChart=5);i++){
//   let alpha = getRndInteger(0,charList.length)
//   listChart.push(charList[alpha])
// }
// let checkLi = ""
// listChart.forEach((li)=>checkLi+=li)
// console.log(`Before Reversing String like this ${checkLi}`)
// let ReList = listChart.reverse()
// let liToStr = ""
// ReList.forEach((li)=>liToStr+=li)
// console.log(`After Reversing String like this ${liToStr}`)
// console.log("The length of String is",liToStr.length)

// let Itm = [1,0,0,1,1,0]

// for(cher of Itm){
//   if(cher = )
//     console.log(cher)
// }


//---------------------

// function hiddNum(num){
//   let hiddList = []
//   for(let i=0;i<num.length;i++){
//     if(i<=1){
//       hiddList.push(num[i])
//     }
//     else if(i>=2 && i<num.length-2){
//       hiddList.push("x")
//     }
//     else{
//       hiddList.push(num[i])
//     }
//   }
//   return hiddList
// } 
// let num1 =prompt("Enter your number")

// let userNum = hiddNum(num1)
// let Str = ""
// userNum.forEach((el)=>Str+=el)
// console.log(Str)

// function charCount(){
//   let ob ={};
//   [1,0,1,0,1,0,1,1,1,1,1].forEach((el)=>{
//     ob[el]=ob[el]?ob[el]+1:1;
//   })
//   return ob
// }
// const li = new Array(...Object.entries(charCount()))
// // console.log("[",li[0],li[1],"]")

// console.log(charCount())

// let num = prompt("please Enter any number").split("")


// let zer =num.filter(zeroReturn)
// console.log(zer)

// let one =num.filter(oneReturn)
// console.log(one)

// function zeroReturn (num){
//   return num==0;
// }

// function oneReturn (num){
//   return num==1;
// }
// console.log(num)












//for number
// let reNum = prompt("Enter Required number u need")

// for(let i =0;i<reNum;i++){
//   let num = generateRandomNumber()
//   // let alpha = getRndInteger(0,charList.length)
  
//   listChart.push(num)
//   // listChart.push(charList[alpha])
  
// }

//for Chart






//For shuffle the array

// function shufflePassword(array) {
//   for (let i = array.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));
//       const temp = array[i];
//       array[i] = array[j];
//       array[j] = temp;
//   }
//   let str = "";
//   array.forEach((el) => (str += el));
  
//   return str;
  
// }
// let sList = shufflePassword(listChart)
// console.log("this is shuffled list and modified the original array ",listChart)

// console.log(sList)

// let strList = "";
// listChart.forEach((it)=>strList+=it)
// console.log(strList)


// for(char of strList ){
//   // let itemString = char.toString();
//   console.log(`the asci of ${char} is ${char.charCodeAt()}`)
// }
//////


// function hidde(num){
//   console.log(num.length)

// }


// hidde("86188722701234")


// 1. Write a function to check if a given string is a palindrome:


function isPalindrome(str) {
  const reversedStr = str.split('').reverse().join('');
  return str === reversedStr;
}

console.log(isPalindrome('level')); // Output: true
console.log(isPalindrome('hello')); // Output: false

// 
// 2. Write a function that takes an array of numbers and returns the sum of all positive numbers:


function sumOfPositiveNumbers(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }
  return sum;
}

console.log(sumOfPositiveNumbers([1, -2, 3, -4, 5])); // Output: 9
console.log(sumOfPositiveNumbers([-1, -2, -3, -4, -5])); // Output: 0

// 
// 3. Implement a function to remove duplicates from an array:


function removeDuplicates(arr) {
  return [...new Set(arr)];
}

console.log(removeDuplicates([1, 2, 3, 2, 4, 3, 5])); // Output: [1, 2, 3, 4, 5]
console.log(removeDuplicates(['a', 'b', 'a', 'c', 'b'])); // Output: ['a', 'b', 'c']

// 
// 4. Write a function that reverses a string without using the built-in `reverse()` method:


function reverseString(str) {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

console.log(reverseString('hello')); // Output: 'olleh'
console.log(reverseString('JavaScript')); // Output: 'tpircSavaJ'

// 
// 5. Implement a function to find the maximum and minimum elements in an array:


function findMaxAndMin(arr) {
  let max = arr[0];
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return { max, min };
}

console.log(findMaxAndMin([4, 2, 9, 6, 1])); // Output: { max: 9, min: 1 }
console.log(findMaxAndMin([-1, 0, 5, -3, 2])); // Output: { max: 5, min: -3 }

// 
// 6. Write a function to find the factorial of a given number:


function factorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  }
  let result = 1;
  for (let i = 2; i <= num; i++) {
    result *= i;
  }
  return result;
}

console.log(factorial(5)); // Output: 120
console.log(factorial(0)); // Output: 1
// 