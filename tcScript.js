/*
Youtube (Clever Programmer): JavaScript Tutorial for Beginners - Full Course in 12 Hours (2022)

CHAPTER 10 -- DOM (Document Object Model) Manipulation: Tip Calculator

---

🌟 APP: Tip Calculator

These are the 3 functions you must use 👇
=========================================
calculateBill()
increasePeople()
decreasePeople()

These functions are hard coded in the HTML. So, you can't change their names.

These are all the DIV ID's you're gonna need access to 👇
========================================================
#1 ID 👉 'billTotalInput' = User input for bill total
#2 ID 👉 'tipInput' = User input for tip
#3 ID 👉 'numberOfPeople' = Current number of people you're splitting the bill between
#4 ID 👉 'perPersonTotal' = Total dollar value owed per person
*/

console.log('Hello tip-calculator')

// Get global access to all inputs / divs here (you'll need them later 😘)
// bill input, tip input, number of people div, and per person total div
const billInputDiv = document.getElementById('billTotalInput')
const tipInputDiv =  document.getElementById('tipInput')
const numberOfPeopleDiv = document.getElementById('numberOfPeople')
const perPersonTotalDiv = document.getElementById('perPersonTotal')

// Get number of people from number of people div
let numberOfPeople = (numberOfPeopleDiv.innerText)

// ** Calculate the total bill per person **
const calculateBill = () => {
  // console.log(numberOfPeople)
  // console.log(billInputDiv.value)
  
  // get bill from user input & convert it into a number
  const bill = Number(billInputDiv.value)
  console.log('bill = ' + bill)
  
  // get the tip from user & convert it into a percentage (divide by 100)
  const tipPercentage = Number(tipInputDiv.value)/100
  console.log('tipPercentage = ' + tipPercentage)

  // get the total tip amount
  const tipAmount = bill * tipPercentage
  //NOTE: PRINT '{VARIABLE}' with console.log() will PRINT THE OBJECT in BROWSER's CONSOLE
  console.log({tipAmount}) //'{tipAmount}' CAN also WRITTEN as '{tipAmount: tipAmount}'

  // calculate the total (tip amount + bill)
  const total = tipAmount + bill
  console.log('total paid = ' + total)

  // calculate the per person total (total divided by number of people)
  const perPersonTotal = total/numberOfPeople
  console.log('perPersonTotal = ' + perPersonTotal)

  // update the perPersonTotal on DOM & show it to user
  perPersonTotalDiv.innerText = `$${perPersonTotal.toFixed(2).toLocaleString('en-US')}` //'.toFixed(MAX_NUM)' will LIMIT DECIMAL SIZE to TWO NUMBERS as DEFINED by PARAM 'MAX_NUM'

}
  
  // ** Splits the bill between more people **
  const increasePeople = () => {
    // increment the amount of people
    numberOfPeople++ //numberOfPeople += 1 --> GIVE RETURN numberOfPeople = 111111...1
    console.log('numberOfPeople = ' + numberOfPeople)
  
    // update the DOM with the new number of people
    numberOfPeopleDiv.innerText = numberOfPeople
  
    // calculate the bill based on the new number of people
    calculateBill()
  }
  
  // ** Splits the bill between fewer people **
  const decreasePeople = () => {
    // GUARD CLAUSE
    // if amount is 1 or less simply return
    // (a.k.a you can't decrease the number of people to 0 or negative!)
    if (numberOfPeople <= 1) {
      /* --> THIS is WORK WELL
      console.log("APP is STOPPED because numberofPeople <= 1")
      alert("You can't have less than 1 person")

      return //'return' will BREAK the APPLICATION when CONDITION 'numberOfPeople <= 1' is FULFILLED
      */

      throw "You can't have less than 1 person"
    }
    
    // decrement the amount of people
    numberOfPeople--
    console.log('numberOfPeople = ' + numberOfPeople)
  
    // update the DOM with the new number of people
    numberOfPeopleDiv.innerText = numberOfPeople
  
    // calculate the bill based on the new number of people
    calculateBill()
  }