/**
 * Youtube (Clever Programmer): JavaScript Tutorial for Beginners - Full Course in 12 Hours (2022)
 * 
 * CHAPTER 01 -- COMMENTS
 * CHAPTER 02 -- OPERATORS
 * CHAPTER 03 -- FUNCTIONS
 * CHAPTER 04 -- ARRAY
 * CHAPTER 05 -- OBJECTS
 * CHAPTER 06 -- FOR LOOPS
 * CHAPTER 07 -- Array & Object Exercises
 * CHAPTER 08 -- ARRAY METHODS
 * CHAPTER 09 -- DOM (Document Object Model) Manipulation - in index3.html & pgScript.js
 * CHAPTER 10 -- Advanced Tip Calculator - in index4.html & tcScript.js
 * CHAPTER 11 -- Advanced Rock Paper Scissors - index5.html, rpsScript.js, & rpsStyle.css
 * CHAPTER 12 -- API (Advance Programming Interface) - indexApi.html, apiScript.js, & apiStyle.css
 * CHAPTER 13 -- Asynchronous Programming - in CHAPTER 12's files
 * CHAPTER 14 -- Advance Weather App - in indexWeap.html, weapScript.js, weapStyle.css
 */

//https://www.microsoft.com/en-us/microsoft-365/outlook/email-and-calendar-software-microsoft-outlook?deeplink=%2fowa%2f%3frealm%3dlive.com&sdf=0
//https://login.live.com/login.srf?wa=wsignin1.0&rpsnv=16&ct=1695397459&rver=7.0.6738.0&wp=MBI_SSL&wreply=https%3a%2f%2foutlook.live.com%2fowa%2f%3fcobrandid%3dab0455a0-8d03-46b9-b18b-df2f57b9e44c%26nlp%3d1%26deeplink%3dowa%252f%26RpsCsrfState%3d224a4343-f5de-f592-a438-883d974c9b53&id=292841&aadredir=1&CBCXT=out&lw=1&fl=dob%2cflname%2cwld&cobrandid=ab0455a0-8d03-46b9-b18b-df2f57b9e44c
//https://javascript-course-2022-by-clever-programmer.cleverprogrammer.repl.co/

// https://pythontutor.com/

console.log('Hello world');

/* CHAPTER 01 -- COMMENTS */
//VARIABLES
sentence = "Hello world from variable 'sentence'"
console.log(sentence)

//MATH OPERATORS (CALCULATION like +, -, *, /, %, ** (power of == n^x), ..., etc)
let food = 20 //prompt('Food Price?')
console.log(food)

var tipPercentage = 0.2
tipAmount = food * tipPercentage
console.log('tipAmount = ' + tipAmount)

/* CHAPTER 02 -- OPERATORS */
//USER INPUT
/*
buah = prompt('Apakah buah kesukaan anda?')
console.log('Buah kesukaan anda adalah: ' + buah)

fruitPrice = Number(prompt('Masukkan harga buah anda')) //'Number' CONVERT String to int
tipAmount = fruitPrice * tipPercentage
console.log('Tips 20% buah anda adalah: ' + tipAmount)

totalPrice = fruitPrice + tipAmount
console.log('jumlah tips', tipAmount, 3)
console.log('total harga', totalPrice)
console.log(tipAmount, fruitPrice, 4)
alert('Total yang harus dibayar untuk buah ' + buah + ' adalah: ' + totalPrice)
*/

/* DATA TYPES (string, numers, arrays, objects, boolean)
numbers --> 1, 5, 10, 100, 2.5
string --> 'hello', "what is up"
arrays --> []
objects --> {}
boolean --> true/false
*/

/* MATH METHODS
Math.floor(...) --> ROUNDS a NUMBER DOWN to the nearest integer & return the result
Math.ceil(...) --> ROUNDS a NUMBER UP to the nearest integer & return the result
Math.random() --> return RANDOM NUMBER between 0...1; 0 (inclusive), 1 (exclusive)
*/
console.log('110.25 * 0.2 = ' + 110.25 * 0.2)
console.log('110.25 * 0.2 = ' + Math.floor(110.25 * 0.2) + ' --> Math.floor')
console.log('110.25 * 0.2 = ' + Math.ceil(110.25 * 0.2) + ' --> Math.ceil')
console.log(Math.random())
console.log(Math.random() * 2 + ' --> Math.random() * 2')
console.log(Math.random() * 3 + ' --> Math.random() * 3')

/* VARIABLES TYPE
cont -- the value cannot be changed
let -- the value can be changed
var -- the value can be changed (outdated, no longer used)
*/

/* CONDITIONAL
..are used in statements to compare variables' values and/or data types

always RETURN BOOLEAN true or false

CONDITION OPERATORS (==, ===, >, <, <=, >=, !=, !==)
== --> check for EQUALITY
x == 8 : false
x == 5 : true
x == '5' : true

=== --> check for EQUALITY & DATA TYPE
x === 5 : true
x === '5' : false ~ because data type mismatch

> --> GREATER than
< --> LESS than
8 > x : true
x < 8 : false

>= --> GREATER THAN or EQUAL TO
<= --> LESS THAN or EQUAL TO
35 >= x : true
8 <= x : true

!= --> NOT EQUAL
x != 8 : true

!== --> NOT EQUAL VALUE or TYPE 
x !== "35" : true ~ same value, different type
x !== 35 : false ~ same value, same type
*/
//BABY LEVEL WEATHER APP
let weather = 'snow'

if (weather == 'rain') {
    console.log('BABY WEATHER APP: Grab your umbrella; weather: ' + weather)
} else {
    console.log('BABY WEATHER APP: Wear your sunglasses; weather: ' + weather)
}

/* CHAPTER 03 -- FUNCTIONS
--> a block of code designed to perform a particular task and is executed when "something" call it

*) DYNAMIC Functions: function() that TAKES PARAMETERS --> function([param/arguments])
--> function arguments are the values received by the function when it is called, they behave as variables, however they only live within the function and cannot be accessed outside
*/
function calculateTips() {
    let buah = prompt('Apakah buah kesukaan anda?')
    console.log('Buah kesukaan anda adalah: ' + buah)

    let fruitPrice = Number(prompt('Masukkan harga buah anda'))
    let tipAmount = fruitPrice * tipPercentage
    console.log('Tips 20% buah anda adalah: ' + tipAmount)

    let totalPrice = fruitPrice + tipAmount
    console.log('jumlah tips', tipAmount, 3)
    console.log('total harga', totalPrice)
    console.log(tipAmount, fruitPrice, 4)
    alert('Total yang harus dibayar untuk buah ' + buah + ' adalah: ' + totalPrice)
}

calculateTips()

function funcWithParam(args) {
    console.log(args)
}

funcWithParam('arguments of funcWithParam()')

/* TEMPLATE LITERALS provide an easy way to interpolate variables and expressions into strings
INTERPOLATION is an efficient way of concatenation
*/

/**
 * Standard way of documenting through commenting. Find more information on jsdoc.app
 * Example:
 * 
 * Adds two numbers
 * @param {number} num1 The first number to add.
 * @param {number} num2 The second number to add.
 * @return {number} The result of adding num1 and num2.
 */

// Functions
// this is a function called 'greeting'
// it has 1 argument called 'name'
// does: it logs out whatever assign to the argument 'name'
function greeting(name) {
    // greet = 'hi ' + name + ', nice to meet you!'
    
    /* STRING INTERPOLATION
    --> Referencing a variable within a string. In this case, ${name} will be replaced with the value of 'name'
    */
    greet = `hi ${name}, nice to meet ya!`

    console.log(greet)
}

greeting('Amber Heard')

function sum(a, b) {
    /* The 'return' statement stops the execution of a function and returns a value
    'return' statement makes the function reusable. You can use same function in multiple places
    */

    //return result of addition
    return a + b //console.log(a + b) //--> this will go 'undefined' because a and b are not defined
}

num1 = sum(1, 2)
console.log('Sum of 1 + 2 is: ' + num1)

/* 03 - BUILD TIP CALCULATOR */
function calculateTips2(food, tip) {
    const tipPercentage = tip / 100
    const tipAmount = food * tipPercentage
    const totalPrice = sum(food, tipAmount) //food + tipAmount

    return totalPrice
}

console.log('calculateTips2(100, 20) = ' + calculateTips2(100, 20))

/** ARROW FUNCTION
 * --> allows us to write shorter function syntax
 * --> MODERN WAY of WRITING FUNCTION in javascript
 * example:
 * 
 * Regular Functions (OLD) --> ES-5 STYLE/WAY
 * function myFunction (name) {
 *  console.log('hi ${name}')
 * }
 * 
 * Regular Functions (NEW) --> ES-6 STYLE/WAY
 * const myFunction = (name) => {
 *  console.log('hi ${name}')
 * }
*/

//ES-6
//ARROW function '=>' with EXPLICIT RETURN
const sumArrow = (a, b) => {
    return a + b
}

//ARROW function '=>' with IMPLICIT RETURN, REMOVOVE squigglies/CURLY BRACKET
const sumArrow2 = (a, b) => a + b

console.log('sumArrow(3, 4) = ' + sumArrow(3, 4))
console.log('sumArrow2(5, 6) = ' + sumArrow2(5, 6))

const divArrow = (a, b) => a/b
console.log('divArrow(1, 0) = ' + divArrow(1, 0))

/* CHAPTER 04 -- ARRAY
--> ARRAY allow you to STORE MULTIPLE VALUES inside of them
--> array has INDEX that GIVES you the LOCATION of VALUE WITHIN an ARRAY. It SIMILAR to a STREET NUMBER
implementation: arrayName[obj-0, obj-1, ..., obj-n] ~ CALL with arrayName[n]

SOME Array METHODS: slice(), push(), indexOf(), length()
*/
const groceries = ['banana', 'apple', 'orange', 'pear']
console.log('groceries[]: ', groceries)
console.log('object of array groceries[3] is ' + groceries[3] + ' & groceries[4] is ' + groceries[4])

/* .push(OBJ_TO_PUSH) --> ADDS one or more ELEMENTS TO the END of an ARRAY & RETURN the NEW LENGTH of array */
console.log('array groceries[] before .push: ' + groceries)
groceries.push('potato', 'cookies') //you CAN ADD MORE than ONE
console.log('array groceries[] after .push: ' + groceries)

/* .slice(START_IDX, END_IDX_NORMAL) --> RETURNS the PORTION of the ARRAY you WANT IN a NEW ARRAY */
console.log(groceries.slice(3, 6)) //start from 3 INCLUSIVE and UP to INDEX-6 ~ [3, 4, 5]
console.log('array groceries.slice(0, 13) will NOT OUT of BOND: ' + groceries.slice(0, 13))

/* .indexOf(ANY_OBJ_IN_ARRAY) --> RETURNS INDEX of ARRAY OBJECT */
console.log("index of 'orange' in array groceries[] is: " + groceries.indexOf('orange'))

/* .length() --> ARRAY PROPERTY that RETURNS the NUMBER of ELEMENTS you have IN a given ARRAY or ANY THING with STRING TYPE */
console.log('length of array groceries[] is ' + groceries.length)

/* CHAPTER 05 -- OBJECTS
--> a TYPE of VARIABLE, quite SIMILAR to ARRAYS BUT they HAVE something CALLED 'Key-Value' PAIRS
--> EVERY OBJECT has PROPERTIES (this is ACTUALLY a KEY); a property is just one of the key value pairs
example:

const myObject = {
    key1: 'value1',
    key2: 'value2'
}

METHOD --> a PROPERTY CONTAINING a FUNCTION definition ~ .SOME_METHOD(param/no_param)
*/
const person = {
    name: 'Leonardo',
    shirt: 'white',
    suit: 'black',
    assets: 100000,
    liability: 5000,
    //netWorth: assets - liability --> THIS will GO 'ReferenceError'
    netWorth: function () { //set function() or METHOD INSIDE OBJECT is POSSIBLE
        //'this.' REFER to OBJECT 'person'
        return this.assets - this.liability
    }
}

//ACCESS 'Key-Value' pair OBJECT in ARRAY can be DONE with .dot NOTATION or BRACKET NOTATION
console.log(person.name + '\'s suite color: ' + person['suit'])

//ASSIGN 'Key-Value' pair OBJECT to ARRAY
console.log('person[] before being assigned with new key-pair', person)
person.phone = '1-222-333-4444'
person['gender'] = 'male'
console.log('person[] after being assigned with new key-pair', person)

const introducer = (name, shirt) => {
    // return `Hi, my name is ${name}, the color of my shirt is ${shirt} & my net worth is USD ${person.assets - person['liability']}`
    return `Hi, my name is ${name}, the color of my shirt is ${shirt} & my net worth is USD ${person.netWorth()}`
}
console.log('INTRODUCER')
console.log(introducer(person.name, person['shirt']))

/* CHAPTER 06 -- FOR LOOPS */
console.log('groceries.length = ' + groceries.length)
console.log("print 'groceries' by using for-each:")
groceries.forEach(element => {
    // process.stdout.write(element) //--> THIS will NOT WORK if NOT USING node.js
    console.log(element)
});
console.log("\nprint 'groceries' by using for-of:")

for (const item of groceries) {
    console.log(item) //console.log(groceries) will PRINT ALL ELEMENTS of ARRAY 'groceries' AS MANY as NUMBER of ELEMENTS of 'groceries'
}

const numbers = [1, 2, 3, 4, 5, 6]

const double = (params) => {
    let result = [] //'[]' MEANS an EMPTY ARRAY
    console.log('result[] before .push() = ' + result)

    for (let i = 0; i < params.length; i++) {
        console.log(params[i] + ' square = ' + (params[i] ** 2));
        result.push(params[i] ** 2)
    }
    // console.log('result[] after .push() = ' + result)
    return result
}

console.log('result[] after .push() = ' + double(numbers))

/* CHAPTER 07 -- Array & Object Exercises */
const letterCounter = (phrase) => {
    /*
    for (const iterator of phrase) { //THIS for-loop will RETURN's LETTER VALUE in 'phrase' ONE-by-ONE
        console.log(iterator)
    }
    */
    for (iterator in phrase) { //THIS for-loop will RETURN LETTER's INDEX in 'phrase' ONE-by-ONE
    }
    
    console.log('phrase: \'' + phrase + "'")
    console.log("Total letters of phrase '" + phrase + '\': ' + (Number(iterator) + 1) + ' --> counted using letterCounter()')
    // console.log("Total letters of phrase '" + phrase + '\': ' + phrase.length + ' --> counted using .length')
}

const letterCounter2 = (phrase) => {
    return {phraseLength: phrase.length} //{result: phrase.length}
}

const phrase = prompt('Enter your phrase') //'hey, can you go to grocery store with me?'
letterCounter(phrase) //console.log(letterCounter())
console.log("Total letters of phrase '" + phrase + "': " + letterCounter2(phrase) + ' --> counted using letterCounter2()')
console.log(letterCounter2(phrase))

const sumArray = (nums) => {
    let hasil = 0;

    for (const num of nums) {
        console.log(num)
        hasil = hasil + num
    }
    return {hasil} //return hasil --> will SHOW ONLY VALUE of 'hasil' but NOT INCLUDING VARIABLE
}
console.log(sumArray(numbers)) //REUSING VARIABLE 'numbers' from LINE 304

const findMax = (nums) => {
    let hasil = nums[0]

    for (const num of nums) {
        if (num > hasil) { //EVERYTIME VALUE of 'num' is GREATHER than 'hasil', ASSIGN VALUE of 'num' INTO 'hasil'
            hasil = num
        }
    }

    return hasil
}

console.log('angka terbesar array findMax: ' + findMax([1, 2, 3, 4, 1, 2, 1, 2, 20, 10]))

freqEg = {'a': 1}
console.log("'a' in freqEg: ")
console.log('a' in freqEg)

//EXPECTED OUTPUT: countLetterFrequency('haha') --> {'h':2, 'a':2}
const countLetterFrequency = (katakata) => {
    console.log('proceed term: ' + katakata)

    //PSEUDO-CODE: make an empty 'freqLetter' object {}
    let freqLetter = {}

    for (const iterator of katakata) { //'iterator' will CONTAIN an ELEMENT of 'katakata' per-LOOP
        console.log('iterator: ' + iterator + '; freqLetter[' + iterator + ']: ' + freqLetter[iterator])
        //PSEUDO-CODE: check if letter exists in object 'freqLetter'
        if (iterator in freqLetter) {
            //PSEUDO-CODE (nested): increment the value by +1
            freqLetter[iterator]++ //freqLetter[iterator] += 1 //freqLetter[iterator] = freqLetter[iterator] + 1
        } else {
            //PESUDO-CODE: otherwise, set the value to 1
            freqLetter[iterator] = 1
        }
    }

    return freqLetter
}

// console.log(countLetterFrequency('haha'))
console.log(countLetterFrequency('lol, what are you doing later tonight lol, haha!'))

/* INCREMENTAL OPERATORS: ++, --, +=, -= */

//EXPECTED OUTPUT: countWordFrequency('lol what lol') --> {'lol: 2, 'what': 1}
const countWordFrequency = (kalimat) => {
    console.log('proceed sentence: ' + kalimat)

    let freqWord = {}
    words = kalimat.split(' ')

/*
    for (const iterator of words) {
        console.log('iterator: ' + iterator + '; freqWord[' + iterator + ']: ' + freqWord[iterator])

        if (iterator in freqWord) {
            freqWord[iterator] += 1
        } else {
            freqWord[iterator] = 1
        }
    }

    return freqWord
    */
    //CALLING FUNCTION (countLetterFrequency([param])) from INSIDE FUNCTION
    return countLetterFrequency(words) //countLetterFrequency(words) --> WITHOUT 'return' will RESULTS 'undefined'
}

const countWordInput = prompt('countWordFrequency() -- Write your sentence')
console.log(countWordFrequency(countWordInput))

/* CHAPTER 08 -- ARRAY METHODS

Array Higher Order Functions (takes IN a FUNCTION AS an ARGUMENT):
- .map() --> loops & return the array (replacing .push()) or array's elements as its exact
- .filter() --> loops & return the array or array's elements with matching condition
- .reduce() --> used for summing (sum) or accumulating; reduce loops & gives back the accumulator
*/

/* 08 - Array Methods .map() */
console.log('Print arrays\' element using map() BEFORE DOUBLED:')
/*
[1, 2, 3, 4].map(number => {
    console.log(number)

    return number
}) --> NOT WORKING!!

[1, 2, 3, 4].forEach(number => {
    console.log(number)
}) --> NOT WORKING!!
*/
let nomor = [1, 2, 3, 4]
nomor.map(num => console.log(num)) //THIS is CALLED 'Implicit Return' --> WORKING WELL
/*
nomor.map(number => {
    console.log(number + ' haha')
}) --> WORKING WELL
*/
console.log("Print arrays' element using map() AFTER DOUBLED & with IMPLICIT RETURN:")

//in THIS CASE, map() AUTOMATICALLY do LOOPING & DOUBLE ITS ELEMENTS VALUE AS being DONE in FUNCTION 'const double()' IN LINE 306
nomor = [1, 2, 3, 4].map(num => num * 2)
console.log(nomor)

const doubleUsingMap = (params) => {
    /*
    return params.map(function(num) { //'function(num)' IS an ANONYMOUS FUNCTION (CREATING a LAMBDA/NO NAME function()ON THE FLY)
        return num * 2
    })
    */

    //ABOVE LINE of CODES CAN be WRITTEN as FOLLOW
    return params.map(num => num * 2)
}

console.log("Print arrays' element using map() AFTER DOUBLED AGAIN & with EXPLICIT RETURN:")
// console.log(doubleUsingMap([1, 2, 3])) --> WORKING WELL
console.log(doubleUsingMap(nomor))

/* 08 - Array Methods .filter() */
//EXPECTED OUTPUT: filter([1, 2, 3, 4, 5, 6], 3) --> [4, 5, 6]
const selectGreater = (numbers2, greaterThan) => {
    let hasilFilter = []

    for (const num2 of numbers2) {
        if (num2 > greaterThan) {
            hasilFilter.push(num2)
        }
    }

    return hasilFilter
}

console.log('Select from [1, 2, 3, 4, 5, 6] that is greater than 3: ' + selectGreater([1, 2, 3, 4, 5, 6], 3))

console.log('Select array\'s element greater than 3: ' + numbers.filter(num2 => num2 > 3)) //REUSING VARIABLE 'numbers' from LINE 304

/* LOGIC TABLE

OR
true || true = true
true || false = true
false || true = true
false || false = false

AND
true && true = true
true && false = false
false && true = false
false && false = false

REAL-LIFE IMPLEMENTATION example (check youtube user login & status):

//using OR ('||')
if (userIsAuthenticated || userIsPayingMember) {
    -- CODE GOES HERE (show youtube videos) --
}

//using AND ('&&')
if (userIsAuthenticated && userIsPayingMember) { //OR CAN be DECLARED AS 'if (userIsAuthenticated == true && userIsPayingMember == true)'
    -- CODE GOES HERE (to show no ads) --
} else {
    -- CODE GOES HERE (to show ads) --
}

*/

console.log("Select array's element less than 2 OR greater than 4: " + numbers.filter(num => num > 4 || num < 2)) //REUSING VARIABLE 'numbers' from LINE 304
console.log("Select array's element less than 2 AND greater than 4: " + numbers.filter(num => num > 4 && num < 2)) //REUSING VARIABLE 'numbers' from LINE 304

//THESE FORMAT of API is called 'json' which IS an ARRAY of OBJECTS
const actors = [
    {name: 'johnny', netWorth: 2000000},
    {name: 'amber', netWorth: 10},
    {name: 'matt', netWorth: 170000000},
    {name: 'brad', netWorth: 300000000},
    {name: 'leonardo', netWorth: 10000000},
]
console.log("Actors (object) with net worth greater than 0: ")
console.log(actors.filter(actor => actor.netWorth > 10))

idxOfActors = actors.findIndex(actor => actor.name == 'leonardo')
console.log("index of object with name 'leonardo' in array 'actors' = " + idxOfActors)
console.log('Joining all 3 names of actors: ' + actors.map(actor => actor.name).join('-'))

let getActorNWBase = actors.filter(actor => actor.netWorth > 10)
console.log("Print all objects in array 'actors': " + `${JSON.stringify(actors)}`)

let getActorNWBaseName = getActorNWBase.map(aktor => aktor.name).join(', ')
console.log("Actors (name) with net worth greater than 10: " + getActorNWBaseName)

/*
var playground = document.getElementById('yourPlaygroundId')
playground.innerHTML = '<h1>Leonardo</h1>'//`<h1>${getActorNWBase[0].name}</h1>`
//document.appendChild(playground)
*/

/* 08 - Array Methods .reduce() */
let hasil2 = numbers.reduce(function (prev, current) { //REUSING VARIABLE 'numbers' from LINE 304
    return prev + current //console.log(current)
})
console.log("summing array 'numbers' with EXPLICIT RETURN .reduce(..): " + hasil2)

hasil2 = numbers.reduce((prev, current) => prev + current, -10) //prev * current; ARGS '0' NORMALLY is NOT WRITTEN except OTHER VALUES is DEFINED or NEED to EXTRACTING OBJECT's VALUE from the array
console.log("summing array 'numbers' with IMPLICIT RETURN .reduce(..): " + hasil2)

hasil2 = numbers.reduce(sum) //REUSING function() 'sum()' from LINE 170
console.log("summing array 'numbers' with IMPLICIT RETURN .reduce(sum): " + hasil2)

console.log("Total net worth of all actors in array 'actors' = " + actors.reduce((prev, curr) => prev + curr.netWorth, 0))

/** CHAPTER 09 -- DOM (Document Object Model) Manipulation
 * 
 *  in index3.html & pgScript.js
 */

/** CHAPTER 10 -- Advanced Tip Calculator
 * 
 *  in index4.html & script.js
*/

/* CHAPTER 11 -- Advanced Rock Paper Scissors */
/* Selecting Random Elements */
let buah2an = ['kedondong', 'salak', 'kesemek', 'bengkoang']

const acakPilihBuah = (buah2an) => {
    let angkaAcak = Math.floor(Math.random() * buah2an.length) //USE 4 as LIMIT because the LENGTH of ARRAY we USE is 4 & 'Math.random() * 4' will NEVER MAKE RANDOM NUMBER to 4 and THIS is SUITABLE with EXISTING INDEX in ARRAY OBJECT angkaAcak[] which is ONLY 0, 1, 2, 3

    return buah2an[angkaAcak]
}

console.log('Buah yang terpilih adalah: ' + acakPilihBuah(buah2an))
console.log('Buah yang terpilih adalah: ' + acakPilihBuah(buah2an))
console.log('Buah yang terpilih adalah: ' + acakPilihBuah(buah2an))
console.log('Buah yang terpilih adalah: ' + acakPilihBuah(buah2an))
console.log('Buah yang terpilih adalah: ' + acakPilihBuah(buah2an))

/* Nested 'if-else' Statement */
//condition exercise: hujan(1), terik(-1), mendung(0)
const penilaiCuaca = (cuaca, cuaca2) => {
    let nilaiCuaca
    
    if (cuaca == 'hujan' && cuaca2 == 'mendung') {
        nilaiCuaca = 2
    } else if (cuaca == 'hujan') {
        nilaiCuaca = 1
    } else if (cuaca == 'terik') {
        nilaiCuaca = -1
    } else {
        nilaiCuaca = 0
    }

    return nilaiCuaca
}

console.log('nilai cuaca hujan + mendung = ' + penilaiCuaca('hujan', 'mendung'))
console.log('nilai cuaca hujan + terik = ' + penilaiCuaca('hujan', 'terik'))
console.log('nilai cuaca hujan = ' + penilaiCuaca('hujan'))
console.log('nilai cuaca terik = ' + penilaiCuaca('terik'))
console.log('nilai cuaca mendung = ' + penilaiCuaca('mendung'))