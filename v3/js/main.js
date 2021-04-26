/*Create a horoscope page
Type in first name 
Type in birthdate  
click something 
When a monthInput and dayInput are selected a prediction should pop up on the screen
need 12 predictions (if this date range is choosen, show xyz)
refesh and choose a differnt dayInput
♈ Aries (Ram): March 21–April 19
♉ Taurus (Bull): April 20–May 20
♊ Gemini (Twins): May 21–June 21
♋ Cancer (Crab): June 22–July 22
♌ Leo (Lion): July 23–August 22
♍ Virgo (Virgin): August 23–September 22
♎ Libra (Balance): September 23–October 23
♏ Scorpius (Scorpion): October 24–November 21
♐ Sagittarius (Archer): November 22–December 21
♑ Capricornus (Goat): December 22–January 19
♒ Aquarius (Water Bearer): January 20–February 18
♓ Pisces (Fish): February 19–March 20
*/

const form = document.querySelector('form').addEventListener("submit",preventMyDefault)

function preventMyDefault(event){
    event.preventDefault()
    const nameInput = document.querySelector('#firstName')
    const monthInput = document.querySelector('#month')
    const dayInput = document.querySelector('#day')
    addPerson(nameInput.value, monthInput.value, dayInput.value)
    nameInput.value = ''
}

const addPerson = (nameInput, monthInput, dayInput) => {
    const displayInput = document.createElement('li')
    const trashCan = document.createElement('span')
    const container = document.querySelector('#addPerson')
    displayInput.innerText = `${nameInput} ${monthInput} ${dayInput} ${horoscopeChecker()}`
    trashCan.innerText = " Delete"
    // container.innerText = displayInput.innerText
    container.append(displayInput)
    displayInput.append(trashCan)
    horoscopeChecker()
   
}

const horoscopes = {
    aries : "Aries: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi excepturi magnam inventore rerum non ullam sunt consequuntur est architecto, eaque expedita, delectus obcaecati? Quibusdam odit est soluta ipsum impedit odio.",
    taurus : "Taurus: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi excepturi magnam inventore rerum non ullam sunt consequuntur est architecto, eaque expedita, delectus obcaecati? Quibusdam odit est soluta ipsum impedit odio.",
    gemini : "Gemini: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi excepturi magnam inventore rerum non ullam sunt consequuntur est architecto, eaque expedita, delectus obcaecati? Quibusdam odit est soluta ipsum impedit odio.",
    cancer : "Cancer: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi excepturi magnam inventore rerum non ullam sunt consequuntur est architecto, eaque expedita, delectus obcaecati? Quibusdam odit est soluta ipsum impedit odio.",
    leo : "Leo: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi excepturi magnam inventore rerum non ullam sunt consequuntur est architecto, eaque expedita, delectus obcaecati? Quibusdam odit est soluta ipsum impedit odio.",
    virgo : "Virgo: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi excepturi magnam inventore rerum non ullam sunt consequuntur est architecto, eaque expedita, delectus obcaecati? Quibusdam odit est soluta ipsum impedit odio.",
    libra : "Libra: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi excepturi magnam inventore rerum non ullam sunt consequuntur est architecto, eaque expedita, delectus obcaecati? Quibusdam odit est soluta ipsum impedit odio.",
    scorpio : "Scorpio: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi excepturi magnam inventore rerum non ullam sunt consequuntur est architecto, eaque expedita, delectus obcaecati? Quibusdam odit est soluta ipsum impedit odio.",
    sagittarius: "Sagittarius: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi excepturi magnam inventore rerum non ullam sunt consequuntur est architecto, eaque expedita, delectus obcaecati? Quibusdam odit est soluta ipsum impedit odio.",
    capicorn : "Capicorn: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi excepturi magnam inventore rerum non ullam sunt consequuntur est architecto, eaque expedita, delectus obcaecati? Quibusdam odit est soluta ipsum impedit odio.",
    aquarius : "Aquarius: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi excepturi magnam inventore rerum non ullam sunt consequuntur est architecto, eaque expedita, delectus obcaecati? Quibusdam odit est soluta ipsum impedit odio.",
    pisces : "Pisces: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi excepturi magnam inventore rerum non ullam sunt consequuntur est architecto, eaque expedita, delectus obcaecati? Quibusdam odit est soluta ipsum impedit odio."
}

function horoscopeChecker(monthInput, dayInput){

if (monthInput === "March" && dayInput >= 21 || monthInput === "April" && dayInput <= 19){
    return "hello"
}else if(monthInput === "April" && dayInput >= 20 || monthInput === "May" && dayInput <= 20){
    return "hello"
}else if(monthInput === "May" && dayInput >= 21 || monthInput === "June" && dayInput <= 21){
    return "hello"
}else if(monthInput === "June" && dayInput >= 22 || monthInput === "July" && dayInput <= 22){
    return "hello"
}else if(monthInput === "July" && dayInput >= 23 || monthInput === "August" && dayInput <= 22){
    return "hello"
}else if(monthInput === "August" && dayInput >= 23 || monthInput === "April" && dayInput <= 22){
    return "hello"
}else if(monthInput === "September" && dayInput >= 23 || monthInput === "October" && dayInput <= 23){
    return "hello"
}else if(monthInput === "October" && dayInput >= 24 || monthInput === "November" && dayInput <= 21){
    return "hello"
}else if(monthInput === "November" && dayInput >= 22 || monthInput === "December" && dayInput <= 21){
    return "hello"
}else if(monthInput === "December" && dayInput >= 22 || monthInput === "January" && dayInput <= 19){
    return "hello"
}else if(monthInput === "January" && dayInput >= 20 || monthInput === "February" && dayInput <= 18){
    return "hello"
}else if(monthInput === "February" && dayInput >= 19 || monthInput === "March" && dayInput <= 20){
    return "hello"
}
console.log("please work")
console.log(monthInput)
console.log(dayInput)
}
