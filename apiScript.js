/**
 * Youtube (Clever Programmer): JavaScript Tutorial for Beginners - Full Course in 12 Hours (2022)
 * 
 * superheroapi.com access-token: 2014352955590456, 10161022533439670
 * 
 * API used for this exercise
 * - https://dog.ceo/api/breeds/image/random
 * - https://superheroapi.com
 * - https://jsonplaceholder.typicode.com/users/1
 * 
 * CHAPTER 12 -- API (Application Programming Interface) 
 * CHAPTER 13 -- Asynchronous Programming
 * - Promises
 * - Async & Await
 */

let jason

/* API Anjing */
console.log('Hello dog API!')

console.log('This is what asynchronous programming looks like')
console.log('Should appear 1st')

const photoAnjingDiv = document.getElementById('photoAnjing')
const acakAnjingButton = document.getElementById('tombolAcakAnjing')

//NORMALLY FOLLOWING CODES will APPEAR 2nd AFTER EXECUTED BUT it is NOT
const gantiAnjing = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
    /* '.then' --> Promises (a concept from 'asynchronous programming'); it will GIVE WHAT is PROMISED by the '.fetch()'
        ASYNCHRONOUS programming >< SYNCHRONOUS programming (REGULAR SCRIPT)
        
        ASYNCHRONOUS programming -- stuff you have to wait for
        e.g: dealing with getting data from somewhere else or 3rd party websites
        
        SYNCHRONOUS programming -- stuff you don't have to wait for
        - LIST of INSTRUCTIONS
        - RUN the CODE LINE-by-LINE
    */
        .then(response => response.json()) //TURN the FETCHED DATA into JSON
        .then(json => {
            console.log("Shoud appear 2nd. This happen because it takes some times for this line of code to finish running. Return of this kind of code is called 'JS Promises'", json)
            photoAnjingDiv.innerHTML = `<img src="${json.message}" height=300/>`
        })
}

acakAnjingButton.onclick = () => {
    console.log('Request ganti gambar anjing')

    gantiAnjing()
}

console.log('Should appear 3rd')
console.log('Should appear 4th')
console.log('Should appear 5th')

/* API Super Hero */
const SUPERHERO_TOKEN = '2014352955590456'
const BASE_URL = `https://superheroapi.com/api.php/${SUPERHERO_TOKEN}`
const gambarPahlawanDiv = document.getElementById('gambarPahlawan')

//THIS function() will GET HERO RANDOMLY
const getRandomSuperHero = (id) => { //PARAM 'id' for RANDOM PIC of HEROES & 'name' for SEARCHED one
/* name --> base_url/search/[name]
    id --> base_url/id

    FOR SEARCHED HERO: json.results[0].image.url --> GET FIRST RESULT of 'image.url' from MULTIPLE URLs
    FOR RANDOM HERO: json.image.url
*/

    console.log('Get Super Hero')

    fetch(`${BASE_URL}/${id}`)
        .then(response => response.json())
        .then(json => {
            // console.log('Hero ' + json.name + ' image url: ' + json.image.url)
            console.log(json.powerstats)

            // document.querySelector('body').innerHTML += `<p><img src="${json.image.url}" height=300><p>` --> THIS will ADD NEW ONE instead of REPLACE NEW ONE
            // gambarPahlawanDiv.innerHTML = `<h2>${json.name}</h2><img src="${json.image.url}" height=300>${getStatsHTML(json)}` --> COMMENTED DUE to USE of LINE 110, 111, 127, & 'getStatsHTML(json)'

            jason = json
            console.log('jason is defined!')

            getStatsHTML(json)
        })
}

const acakAngkaPahlawan = () => {
    const jumlahPahlawan = 731

    return Math.floor(Math.random() * jumlahPahlawan) + 1 //'+ 1' SO RANDOM NUMBERS will START from 1 INSTEAD of 0
}

//THIS function() will GET HERO BASED ON given KEYWORD
const getSearchedSuperHero = (name) => {
    //name = document.getElementById('kotakCari')
    console.log('Get hero with name: ' + name)

    fetch(`${BASE_URL}/search/${name}`)
        .then(response => response.json())
        .then(json => {
            console.log('Total hero search = ' + json.results.length)
            console.log('Searched hero ' + json.results[0].name +' image: ', json.results[0].image.url)

            // gambarPahlawanDiv.innerHTML = `<h2>${json.results[0].name}<\h2><img src="${json.results[0].image.url}" height=300>${getStatsHTML(json.results[0])}` --> COMMENTED DUE to USE of LINE 110, 111, 127, & getStatsHTML(json.results[0])

            getStatsHTML(json.results[0])
        })
}

//THIS function() will GET HERO INFO
const getStatsHTML = (heroCharacter) => {
    const nama = `<h2>${heroCharacter.name}</h2>`
    const gambarHero = `<img src="${heroCharacter.image.url}" height=300>`

    for (stat in heroCharacter.powerstats) {
        console.log('stat', stat)
    }

    console.log('stats', Object.keys(heroCharacter.powerstats))
    console.log('stats: ' + Object.keys(heroCharacter.powerstats))

    const stats2 = Object.keys(heroCharacter.powerstats).map(stat2 => {
        return `<p>${stat2.toUpperCase()}: ${heroCharacter.powerstats[stat2]}</p>`
    }).join('')

    //.join('') will TURN an ARRAY ELEMENT into a STRING
    // console.log('stats2: ' + stats2.join('')) --> CAUSE ERROR DUE to USE .join('') in LINE 117

    gambarPahlawanDiv.innerHTML = `${nama}${gambarHero}${stats2}`

    // return stats2.join('') --> COMMENTED DUE to USE of LINE 110, 111, 127
}

const acakPahlawanButton = document.getElementById('tombolAcakPahlawan')
acakPahlawanButton.onclick = () => getRandomSuperHero(acakAngkaPahlawan())

const cariPahlawanButton = document.getElementById('tombolCariPahlawan')
let kataKunci = document.getElementById('kotakCari')
cariPahlawanButton.onclick = () => getSearchedSuperHero(kataKunci.value)

/* 13 -- ASYNCHRONOUS PROGRAMMING
    Analogy step-by-step:
    - you order tomato soup
    - meanwhile you continue your conversation with a friend
    - RESOLVED -> (soup is SERVED) your server brings you soup
    - REJECTED -> (soup is REJECTED) no soup today
*/
console.log('\nWaiting for jason to be defined...')
console.log('jason should already defined')

const nungguJason = () => console.log('jason', jason)

//'setTimeOut(ANYTHING_TO_BE_CALLED, TIME_IN_MILISECOND) is ALSO CALLED THREAD-BLOCKING (user is STOPED from DOING OTHER THING)
setTimeout(nungguJason, 2000) //'3000' MEANS 3s SINCE 1000ms = 1s

/* 13 -- Asynchronous Programming - PROMISES */
//DOING 'new' in javascript MEANS CREATING a NEW OBJECT from THE CLASS
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        //(variable) = [ARRAY of ELEMENTS][INDEX of CHOSEN ELEMENT]
        const isReady = [true, false][Math.floor(Math.random() * 2)]

        /*
        BELOW CODE is EQUAL to:
        if (isReady == true) {
            console.log('This is promise1')
        } else {
            console.log('promise1 is failed')
        }
        */

        //FORMAT: (Condition) ? (Run if TRUE) : (Run if FALSE) --> FALSE condition WILL be THROWN as ERROR MESSAGE
        //'(Condition)' CAN be HARD CODED with VALUE 'true' or 'false'
        isReady ? resolve('This is promise1 (Soup is served)'): reject('promise1 is failed (Soup is not served)')
    }, 2500)
})

//.'then' is a SPECIAL PROPERTY belong to CLASS Property()
console.log(promise1
    .then(nilai => console.log("RESOLVE value of 'promise1' = ", nilai)) //[RESOLVE action]
    .catch(nilai => console.log("REJECT value of 'promise1' = ", {nilai})) //[REJECT action] --> '.catch()' will CATCH & SHOW ERROR MESSAGE in CONSOLE (NOT as ERROR MESSAGE)
)

//ALTERNATIVE of ABOVE CODE
/* RESOLVED - if waiter CAN bring the soup:
    1) tip the waiter
    2) pay for soup

    REJECTED - if waiter CAN NOT bring the soup
    1) no tip
*/
//BELOW METHOD/function() will ACT as GET SOUP function()
const checkResolveRejectPromise = async () => {
    //in ARRAY OBJECT, EMPTY value CAN be DEFINED as 'null' or 'undefined' --> THESE are SPECIAL VALUES
    const customerReview = {rating: null, tip: null, pay: null, review: null} //{rating: 0, tip: 0, pay: 0, review: 0}

    try { //[RESOLVE action] --> ALL ACTION of 'resolve' GOING HERE
        const promiseResponse = await promise1

        console.log("RESOLVE promise1 AFTER 2.5s 'await': ", promiseResponse)
        
        customerReview.rating = 5 //rate restaurant with 5
        customerReview.tip = .2 //tip 20% to waiter
        customerReview.pay = 10 //pay for the soup
        customerReview.review = 5 //give 5 star for review

        return customerReview //console.log('customerReview: ', customerReview) --> THIS is WORKING
    } catch(error) { //[REJECT action] --> 'catch()' will CATCH & SHOW ERROR MESSAGE in CONSOLE (NOT as ERROR MESSAGE) --> ALL ACTION of 'reject' GOING HERE
        console.log("REJECT promise1 AFTER 2.5s 'await': ", error)

        customerReview.rating = 1
        customerReview.tip = null //0
        customerReview.pay = 0
        customerReview.review = undefined //1

        return customerReview //console.log('customerReview: ', customerReview) --> THIS is WORKING
    }
}

//in ASYNCHRONOUS PROGRAMMING, use '.then' to EXTRACT DATA from 'async function()'
//if USING THIS FORMAT then there IS NO NEED to USE/DECLARE 'await OBJECT_OF_PROMISE'
checkResolveRejectPromise().then(nilai => console.log('customerReview: ', nilai))

/* ASYNCHRONOUS INSIDE an ASYNCHRONOUS
    -> FOLLOWING is FORCING code INSIDE method() STYLE --> UGLY WAY of CODE
*/
console.log('fetching random dog API: ',
    fetch('https://dog.ceo/api/breeds/image/random') //THIS NEED its OWN TIME
    // .then(response => console.log('response of random dog API: ', response.json())) //'response.json' IS an OBJECT of Promise() AS WELL --> THIS NEEDS its OWN TIME; THIS is WORKING
    .then(response => response.json())
    .then(data => console.log('data anjing random: ', data))
)

/* 13 -- Asynchronous Programming - ASYNC & AWAIT
    -> WHENEVER 'await' is USED then 'async' WILL be ALSO USED
    -> 'async' is USED (almost % 99.999..) whenever ASYNCHRONOUS function() is NEEDED DUE to TIME-GAP of REQUEST & RESPONSE from ACCESSING 3rd PARTY WEBSITES or DATABASES, e.g: fetch() request, API request ('POST' or 'GET'), etc.
    -> IF 'async' is USED WITHOUT 'await' then THE CODES will be EXECUTED WITHOUT WAITING for RESPONSES & WITHOUT return ANY RESPONSES

    RULES for USING async / await:
    1) 'async' can only be used together with a function
    -> EVERY function() use 'async' will RETURN its RESULT AS a PROMISE/OBJECT of Promise() 
    2) 'await' is USED to WAIT & CATCH response from any Promise() ACCESSED by fetch()
*/

//SIMPLE EXAMPLE of USE of 'async' & 'await'
async function sum(a, b) {
    return a+b
}
//in ASYNCHRONOUS PROGRAMMING, use '.then' to EXTRACT DATA from 'async function()'
//if USING THIS FORMAT then there IS NO NEED to USE/DECLARE 'await OBJECT_OF_PROMISE'
sum(1, 2).then(value => console.log('sum(1, 2) = ' + value + ' => SIMPLE async-await')) //console.log(sum(1, 2), 'sum') --> THIS NOT WORKS

const getRandomDog = async () => {
    const url = 'https://dog.ceo/api/breeds/image/random'
    const response = await fetch(url) //await fetch(...) == fetch(...).then(response => [SOMETHING])
    const randomDogData = await response.json()

    console.log('randomDogData await: ', randomDogData)
}

getRandomDog()

//RANDOM EXAMPLE of async-await
async function ambilDataUser() {
    //instead of .then() and .catch() we can use try-catch
    try {
        const dataPengguna = await fetch('https://jsonplaceholder.typeicode.com/users/1')
        const pengguna = await dataPengguna.json()

        //if you console log 'pengguna' what would get printed out
        return pengguna
    } catch (error) {
        console.error('TERJADI ERROR:\n' + error)
    }
}
console.log(ambilDataUser()) // console.log('ambilDataUser(): ' + ambilDataUser()) --> ERROR PARAH!