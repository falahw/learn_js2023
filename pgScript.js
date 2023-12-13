/**
 * Youtube (Clever Programmer): JavaScript Tutorial for Beginners - Full Course in 12 Hours (2022)
 * 
 * CHAPTER 09 -- DOM (Document Object Model) Manipulation -- in index3.html as well
 */
console.log('Hello World from pgScript.js')

//document.getElementById(TAG_ID) --> PULL any ELEMENT IN HTML-page that REFERS to THIS JS-script FILE that HAS SAME DEFINED Id
let divId = document.getElementById('judul').innerHTML
console.log("Value of element with id 'judul' in index3.html BEFORE CHANGE:", divId)
divId = document.getElementById('judul').innerText = 'Hello Goodbye'

//divId.innerText = 'test script' --> THIS is NOT WORKING

console.log("Value of element with id 'judul' in index3.html AFTER CHANGE:", divId)

//'.innerHTML' will CHANGE WHOLE VALUE inside its CORRESPONDED HTML page
let newMessage = 'Halo dulur dulur!'
document.getElementById('judul').innerHTML = `<h2>${newMessage}</h2>`

/* 
 * RED-YELLOW-GREEN BOX
 */
//'document.getElementById[TAG_ID]' CAN be WRAPPED INSIDE a VARIABLE so NO NEED to REDECLARE EVERY single TIME
divId = document.getElementById('judul')
divId.style.backgroundColor = 'black'
divId.style.color = 'red'

let redDiv = document.getElementById('red')
let yellowDiv = document.getElementById('yellow')
let greenDiv = document.getElementById('green')

/* --> COMMENTED DUE to REPLACEMENT in LINE-44
//'.onClick' is an EVENT LISTENER
redDiv.onclick = () => console.log('you click the red box')
yellowDiv.onclick = () => console.log('you click the yellow box')
greenDiv.onclick = () => console.log('you click the green box')
*/

//.querySelectorAll(CLASS_NAME_IN_HTML_PAGE) --> THIS is USED for GET ALL ELEMENTS with SAME NAME
const squareBoxes = document.querySelectorAll('.colorSquare')
console.log(squareBoxes)
console.log('squareBoxes[0] value = ' + squareBoxes[0].value) //VALUE of '.value' is TAKEN from CORRESPONDED HTML-page

squareBoxes.forEach(squareBox => console.log(squareBox.value + ' --> forEach(ANONYMOUS_FUNCTION)'))

for (let i = 0; i < squareBoxes.length; i++) {
    console.log('nilai dari squareBoxes[' + i + '] = ' + squareBoxes[i].value + ' --> REGULAR for-loop')
}

const timesClicked = {'merah': 0, 'kuning': 0, 'hijau': 0}
squareBoxes.forEach(squareBox => {
    //UPDATE the '.onClick' PROPERTY & SET ITS FUNCTIONS ('= (PARAM) => DEFINED_FUNCTION')
    squareBox.onclick = () => {
        console.log('kotak ' + squareBox.value + ' di-klik')
        timesClicked[squareBox.value] += 1 //OBJECT VALUE inside ARRAY 'timesClicked' is INCREASED by 1
        console.log('timesClicked[squareBox.value] = ' + timesClicked[squareBox.value])
        squareBox.innerText = timesClicked[squareBox.value] + ' click' //ASSIGN the INCREASED VALUE of ARRAY 'timesClicked' OBJECT to HTML-page's ELEMENT that SUIT the 'style' with SAME 'class' & 'value'
    }
})

//SET ALL innerText VALUE in document.querySelectorAll('.colorSquare) into 0
const clearBoxesScores = () => {
    squareBoxes.forEach(squareBox => squareBox.innerText = 0)

    console.log("Set all square boxes' value into 0")
}
const clearScoresBtn = document.getElementById('clear-scores-button')
clearScoresBtn.onclick = () => clearBoxesScores() //CALL FUNCTION clearBoxesScores() WHEN <button id='clear-scores-button'> is CLICKED