const form = document.querySelector('form').addEventListener('submit', preventMyDefault)
const listOfPeople = []



function preventMyDefault(event) {
    event.preventDefault()
    const nameInput = document.querySelector('#firstName')
    const birthdateInput = document.querySelector('#birthdate')
    let person = createPerson(nameInput.value, birthdateInput.value)
    listOfPeople.push(person)
    nameInput.value = ''
    birthdateInput.value = ''
   
}



function createPerson(nameInput, birthdateInput) {
    const newPerson = {
      name: nameInput,
      birthdate: birthdateInput,
      
  }
    const zodiac = getZodiacFromBirthdate(newPerson.birthdate)
    newPerson.zodiacSign = zodiac
    addPerson(newPerson)
    return newPerson
}



const addPerson = person => {
  const imageTag = document.createElement('img')
  const displayInput = document.createElement('li')
  const paragraphTag = document.createElement('p')
  const trashCan = document.createElement('button')
  const editPerson = document.createElement('button')

  const container = document.querySelector('#addPerson')

  imageTag.classList.add('zodiacImage')
 
  editPerson.setAttribute('data-modal-target','#modal')
  trashCan.innerText = 'Delete'
  editPerson.innerText = 'Edit'
 
  displayInput.classList.add("cardLi")
  displayInput.setAttribute('data-index', listOfPeople.length)

  trashCan.addEventListener('click', removePerson)
  editPerson.addEventListener('click', updateResults)

  imageTag.src = createHoroscopeImage(person.zodiacSign)
  paragraphTag.innerHTML = `<span>${person.name}</span> ${person.zodiacSign.toUpperCase()} ${createHoroscopesResults(person.zodiacSign)}`

  container.append(displayInput)
  displayInput.append(imageTag)
  displayInput.append(paragraphTag)
  displayInput.append(trashCan)
  displayInput.append(editPerson)
}

// const addPerson = person => {
//   const trashCan = document.createElement('button')
//   const editPerson = document.createElement('button')
//   trashCan.addEventListener('click', removePerson)
//   editPerson.addEventListener('click', updateResults)

//   document.querySelector(".resultsContainers").innerHTML = `
//       <div class="card">
//   <div class="profile-sidebar">
//       <img class="profile-image" src="${createHoroscopeImage(person.zodiacSign)}" width=70% alt="recipe image">
//   </div>
//   <div class="profile-main">
//       <h2 class="profile-name">${person.name}</h2>
//       <p class="profile-position">${person.zodiacSign.toUpperCase()}</p>
//       <p class="card-text">${createHoroscopesResults(person.zodiacSign)}</p>
//           <a href="" class="btn btn-primary getRecipe">Delete</a>
//           <a href="" class="btn btn-primary getRecipe">Edit</a>
//   </div>
//   </div>`
// }


const createHoroscopeImage = zodiacSign => {
    const horoscopes = {
      Aries: '/images/aries2.jpg',
      Taurus: 'images/taurus2.jpg',
      Gemini: '/images/gemini2.jpg',
      Cancer: '/images/cancer2.jpg',
      Leo: '/images/leo2.jpg',
      Virgo: '/images/virgo2.jpg',
      Libra: '/images/libra2.jpg',
      Scorpio: '/images/scorpio2.jpg',
      Sagittarius: '/images/sagittatius2.jpg',
      Capicorn: '/images/capicorn2.jpg',
      Aquarius: '/images/aquarius2.jpg',
      Pisces: '/images/pisces2.jpg',
  }
  return horoscopes[zodiacSign]
}




function removePerson(event) {
    let deletePerson = event.target
    deletePerson.parentElement.remove()

    listOfPeople.splice(deletePerson.parentElement.dataset.index, 1)
    console.log(
      'Ouch! Why did you delete me?  Did you not like what your future holds?'
  )
}



function updateResults(event) {
  const openModalButtons = document.querySelectorAll('[data-modal-target]')
  const closeModalButtons = document.querySelectorAll('[data-close-button]')
  const overlay = document.getElementById('overlay')

openModalButtons.forEach(button =>{
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
})


// form.addEventListener("submit", () => {
//        preventMyDefault(event)
//   })


overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal => {
        closeModal(modal)
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal')
        closeModal(modal)
    })
})

function openModal(modal){
    if (modal == null) return 
    modal.classList.add('active')
    overlay.classList.add('active')
}


function closeModal(modal){
    if (modal == null) return 
    modal.classList.remove('active')
    overlay.classList.remove('active')
}
    console.log('Oh no! Do you need to make a change?')
}





function getZodiacFromBirthdate(birthdate) {
    const userBirthdate = new Date(`${birthdate}Z`)
    const userInputMonth = userBirthdate.getMonth() + 1 
    const userBirthDay = userBirthdate.getDate() + 1 
    const userBirthYear = userBirthdate.getFullYear() // for Leap Year Fix.

    if (
      (userInputMonth === 1 && userBirthDay >= 21 && userBirthDay <= 31) ||
      (userInputMonth === 2 && userBirthDay >= 1 && userBirthDay <= 19)
    ) {
      return "Aquarius"
    } else if (
      userInputMonth === 2 &&
     userBirthDay === 29 &&
      userBirthYear % 400 === 0
    ) {
      //If divisible by 400 Leap Year is true
      return "Pisces"
    } else if (
      userInputMonth === 2 &&
     userBirthDay === 29 &&
      userBirthYear % 100 === 0
    ) {
      //If divisible by 100 Leap Year is false
      alert("Did you enter your birth date correctly?")
      /* PISCES [FEB 20-MAR 20] LEAP YEAR 3  */
    } else if (
      userInputMonth === 2 &&
     userBirthDay === 29 &&
      userBirthYear % 4 === 0
    ) {
      //If divisibe by 4 Leap Year is true
      return "Pisces"
      /* PISCES [FEB 20-MAR 20] NON-LEAP YEAR  */
    } else if (
      (userInputMonth === 2 && userBirthDay >= 20 && userBirthDay <= 28) ||
      (userInputMonth === 3 && userBirthDay >= 1 && userBirthDay <= 20)
    ) {
      return "Pisces"
      /* Aries [MAR 21-APR 20] */
    } else if (
      (userInputMonth === 3 && userBirthDay >= 21 && userBirthDay <= 31) ||
      (userInputMonth === 4 && userBirthDay >= 1 && userBirthDay <= 20)
    ) {
      return "Aries"
      /* TAURUS [APR 21-MAY 21] */
    } else if (
      (userInputMonth === 4 && userBirthDay >= 21 && userBirthDay <= 30) ||
      (userInputMonth === 5 && userBirthDay >= 1 && userBirthDay <= 21)
    ) {
      return "Taurus"
      /* GEMINI [MAY 22-JUNE 21] */
    } else if (
      (userInputMonth === 5 && userBirthDay >= 22 && userBirthDay <= 31) ||
      (userInputMonth === 6 && userBirthDay >= 1 && userBirthDay <= 21)
    ) {
      return "Gemini"
      /* CANCER [JUN 22-JULY 22] */
    } else if (
      (userInputMonth === 6 && userBirthDay >= 22 && userBirthDay <= 30) ||
      (userInputMonth === 7 && userBirthDay >= 1 && userBirthDay <= 22)
    ) {
      return "Cancer"
      /* LEO [JUL 23-AUG 23] */
    } else if (
      (userInputMonth === 7 && userBirthDay >= 23 && userBirthDay <= 31) ||
      (userInputMonth === 8 && userBirthDay >= 1 && userBirthDay <= 23)
    ) {
      return "Leo"
      /* VIRGO [AUG 24 - SEP 23] */
    } else if (
      (userInputMonth === 8 && userBirthDay >= 24 && userBirthDay <= 31) ||
      (userInputMonth === 9 && userBirthDay >= 1 && userBirthDay <= 23)
    ) {
      return "Virgo"
      /* LIBRA [SEP 24 - OCT 23] */
    } else if (
      (userInputMonth === 9 && userBirthDay >= 24 && userBirthDay <= 30) ||
      (userInputMonth === 10 && userBirthDay >= 1 && userBirthDay <= 23)
    ) {
      return "Libra"
      /* SCORPIO [OCT 24 - NOV 22] */
    } else if (
      (userInputMonth === 10 && userBirthDay >= 24 && userBirthDay <= 31) ||
      (userInputMonth === 11 && userBirthDay >= 1 && userBirthDay <= 22)
    ) {
      return "Scorpio"
      /* SAGITTARIUS [NOV 23 - DEC 21]*/
    } else if (
      (userInputMonth === 11 && userBirthDay >= 23 && userBirthDay <= 30) ||
      (userInputMonth === 12 && userBirthDay >= 1 && userBirthDay <= 21)
    ) {
      return "Sagittarius"
      /* CAPRICORN [DEC 22 - JAN 20] */
    } else if (
      (userInputMonth === 12 && userBirthDay >= 22 && userBirthDay <= 31) ||
      (userInputMonth === 1 && userBirthDay >= 1 && userBirthDay <= 20)
    ) {
      return "Capicorn"
      /* Error Alert */
    } else {
      alert("Did you enter your birth date correctly?")
    }

    console.log("Zodiac is working")
}

const createHoroscopesResults = zodiacSign => {
  const zodiacResults = {
    Aquarius:
      "2021 is more than defining for you, it is a personal revolution. This year asks you to commit to yourself and your growth in tangible and focused ways, all while discerning between the treasures and the outdated systems that you’ve inherited. It all comes down to what you recycle and what reclaim.",

    Pisces:
      "2021 releases you from the professional and public roles that hold little meaning for you. At this point, what becomes clear is your need for honest exchanges and healing incubators. With a flood of fortunate situations on their way, this year asks you to do a little behind the scenes clearing in preparation.",

    Aries:
      "The roles that you inhabit in your community become some of the most important portals of success for you in 2021. You also come to understand how best to use your resources in service of collective works and movement building.",

    Taurus:
      "Professional commitments bring opportunities for growth, expansion, and success while you undergo pivotal personal changes. Sometimes the two don’t always go together, but it makes for some very lively and interesting growth spurts that, in the end, come to define your life for far more than just this year.",

    Gemini:
      "A personally potent year, you get to understand your impact, grow your professional presence, and expand your horizons through practices that help you heal, be disciplined, and that encourage self-awareness.",

    Cancer:
      "Expansion and growth happens through the collaborations that help you manifest your hopes and dreams. Streamlining professional projects and roles is imperative if you want to move definitively towards your long-term goals, but it’s not always comfortable.",

    Leo: 
      "With an increased role in your communities and networks, partnerships of all kinds become a major focus for you. A central theme in your unions will be about innovating the kinds of commitments that you are in and challenging the structures of them.",

    Virgo:
      "2021 brings you many opportunities to expand your professional and public roles, projects, and pursuits; you’ll just have to make sure that the growth aligns with your long-term plans, and ultimately with what gives your life a sense of meaning.",

    Libra:
      "Growth comes through your creative outlets and projects in 2021. Whatever you commit to making will need plenty of your resources: make sure you have enough time, energy, and care to give to both your collaborative work and your personal pursuits.",

    Scorpio:
      "The changes that you are asked to make this year impact the foundations of your life, the structures of your relationships, and help you to revolutionize the meaning of home and family. The more you are able to lay down foundations that support your growth, the more connected you are to the prosperity of your life.",

    Sagittarius:
      "With an increase of speaking engagements, proposals, and daily activities, you’ll be feeling the need to structure your time with an exacting precision. Work projects demand that you bring forth ideas that clash with the status quo making it important for you to keep your reasons for doing so in neat and tidy file folders to recall for naysayers when necessary.",

    Capricorn:
      "After surviving the onslaught of activity in Capricorn in 2020, 2021 turns its focus towards the resources you have to work with and how to make the most of them. Growth is imminent, but honest self-expression is a must. If you have to smooth out your edge too much, you’ll never cut to the core of your talent.",
  }
  return zodiacResults[zodiacSign]
}