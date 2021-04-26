
/*Create a horoscope page
Type in first name 
Type in birthdate  
click something 
When a month and day are selected a prediction should pop up on the screen
need 12 predictions (if this date range is choosen, show xyz)
refesh and choose a differnt day
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
    const zodiacInput = document.querySelector('#zodiac')
    addPerson(nameInput.value, zodiacInput.value)
    nameInput.value = ''
    zodiacInput.value = ''
}

const addPerson = (nameInput, zodiacInput) => {
    const displayInput = document.createElement('li')
    const trashCan = document.createElement('span')
    const container = document.querySelector('#addPerson')
    const zodiac = document.createElement("p")
    displayInput.innerText = `${nameInput} ${zodiacInput} ${horoscopeResults(results)}`
    trashCan.innerText = "Delete"
    container.append(displayInput)
    displayInput.append(trashCan)
}

function horoscopeResults (results){
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
  return horoscopes[results]
}

let virgo = horoscopeResults("virgo")
console.log("after running: ", virgo)


