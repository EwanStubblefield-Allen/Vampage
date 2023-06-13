const locations = [
  '🎭', '🎪', '🎢', '🏟️', '🏨',
  '🏤', '🏥', '🏭', '🏢', '🏣',
  '🏰', '🏬', '🏥', '🏦', '🏪'
]

const people = [
  {
    name: 'Jimbo',
    picture: '🤵',
    isHunter: false,
    location: ''
  },
  {
    name: 'Sammy',
    picture: '🙆‍♀️',
    isHunter: false,
    location: ''
  },
  {
    name: 'Michael',
    picture: '👷',
    isHunter: false,
    location: ''
  },
  {
    name: 'Robert',
    picture: '👷',
    isHunter: false,
    location: ''
  },
  {
    name: 'Terry',
    picture: '🤴',
    isHunter: false,
    location: '',
  },
  {
    name: 'Bill',
    picture: '🕵️',
    isHunter: false,
    location: '',
  },
  {
    name: 'Marie',
    picture: '👩‍🍳',
    isHunter: false,
    location: '',
  },
  {
    name: 'Mykeal',
    picture: '💂',
    isHunter: false,
    location: '',
  },
  {
    name: 'Phil',
    picture: '🧜‍♂️',
    isHunter: false,
    location: '',
  },
  {
    name: 'Wilson',
    picture: '🏐',
    isHunter: false,
    location: '',
  },
  {
    name: 'Wendy',
    picture: '👩‍⚕️',
    isHunter: false,
    location: '',
  },
  {
    name: 'Jeremy',
    picture: '🦹',
    isHunter: false,
    location: '',
  },
  {
    name: 'Mary',
    picture: '👩‍⚖️',
    isHunter: false,
    location: '',
  }
]

let round = 0
let difficulty = 8

function makeHunter() {
  randomNumber = Math.floor(Math.random() * people.length)
  hunter = people[randomNumber]
  hunter.isHunter = true
}

function hunterLocation(hunters) {
  let batFam = people.filter(person => person.picture == '🦇')
  for (let i = 0; i < batFam.length; i++) {
    if (batFam[i].location == hunters.location) {
      return window.alert('The hunter is near a 🦇')
    }
  }
}

function movePeople() {
  people.forEach(person => {
    let randomLocation = Math.floor(Math.random() * locations.length)
    person.location = locations[randomLocation]
  })
}

function drawPeople() {
  movePeople()
  locations.forEach(location => {
    let currentLocation = document.getElementById(location)
    currentLocation.innerText = ''
  })
  people.forEach(person => {
    let peopleLocations = document.getElementById(person.location)
    peopleLocations.innerText += person.picture
  })
  winningCondition()
}

function consume(index) {
  let location = locations[index]
  let consumedPeople = people.filter(person => person.location == location)
  consumedPeople.forEach(person => person.picture = '🦇')
  drawPeople()
}

function winningCondition() {
  let remainingPeople = people.filter(person => person.picture != '🦇')
  let hunters = people.find(person => person.isHunter)
  console.log('hunter', hunters)
  if (hunters.picture == '🦇' && remainingPeople.length > 1) {
    window.alert('Vamp is kinda mid... He dead')
    return resetPeople()
  } else if (remainingPeople.length == 0) {
    window.alert('Vamp has consumed all, Vamp is all')
    return resetPeople()
  } else if (round == difficulty) {
    window.alert('Vamp is kinda mid... He dead')
    return resetPeople()
  } else {
    round++
  }
  hunterLocation(hunters)
}

function resetPeople() {
  window.location.reload()
}

makeHunter()
drawPeople()