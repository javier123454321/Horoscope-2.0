/*
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
const deletePerson = document.querySelector(".removePerson").addEventListener("click", removePerson)
const listOfPeople = []



//to submit items in form without refreshing the page 
function preventMyDefault(event){
    event.preventDefault()
    const nameInput = document.querySelector('#firstName')
    const zodiacInput = document.querySelector('#zodiac')
    let person = createPerson(nameInput.value, zodiacInput.value.toLowerCase())
    listOfPeople.push(person)
    nameInput.value = ''
    zodiacInput.value = ''
}

//to add a person after the submit 
const addPerson = person => {
        const displayInput = document.createElement('li')
        const trashCan = document.createElement('span')
        const container = document.querySelector('#addPerson')

        displayInput.innerText = `${person.name} ${horoscopeResults(person.zodiac)}`

        trashCan.classList.add("delete")
        trashCan.innerText = "Delete"
        // trashCan.innerHTML = <i class="fas fa-trash-alt"></i>

        container.append(displayInput)
        displayInput.append(trashCan)
    
}

//storing the person in an object 
function createPerson(nameInput, zodiacInput) {
    const newPerson = {
        name: nameInput,
        zodiac: zodiacInput,
    }
    addPerson(newPerson)
    return newPerson
}


// removing the item from the dom (need to remove the item from the array object )
function removePerson(event){
    if (event.target.classList.contains("delete")){
        console.log("you tried to delete me")
        let deletePerson = event.target
        deletePerson.parentElement.remove()
        listOfPeople.shift()
        //this doesn't work, it is only taking off the first person from the list rather then the person who was actually deleted.  Note sure how to fix this. 
      
    }
}


//list of objects that contain the prediction for the year 
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





