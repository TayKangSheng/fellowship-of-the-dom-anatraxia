console.log('Linked.')

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
]

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
]

var lands = ['The Shire', 'Rivendell', 'Mordor']
var body = document.querySelector('body')

// Part 1

function makeMiddleEarth () {
  var middleEarth = document.createElement('section')
  middleEarth.id = 'middle-earth'
  lands.forEach(function (landName) {
    var land = document.createElement('article')
    var h1 = document.createElement('h1')
    land.setAttribute('id', landName)
    h1.textContent = landName
    land.appendChild(h1)
    middleEarth.appendChild(land)
  })
  body.appendChild(middleEarth)
  // create a section tag with an id of middle-earth
  // add each land as an article tag
  // inside each article tag include an h1 with the name of the land
  // append middle-earth to your document body
}

makeMiddleEarth()

// Part 2

function makeHobbits () {
  // display an unordered list of hobbits in the shire (which is the first article tag on the page)
  // give each hobbit a class of hobbit
  var hobbitsUl = document.createElement('ul')
  hobbits.forEach(function (x) {
    var hobbitsLi = document.createElement('li')
    hobbitsLi.innerHTML = x
    hobbitsLi.setAttribute('class', 'hobbit')
    hobbitsUl.appendChild(hobbitsLi)
  })
  var shireArticle = document.getElementById('middle-earth').getElementsByTagName('article')[0]
  shireArticle.appendChild(hobbitsUl)
}
makeHobbits()
// Part 3

function keepItSecretKeepItSafe () {
  // create a div with an id of 'the-ring'
  // give the div a class of 'magic-imbued-jewelry'
  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  // add the ring as a child of Frodo
  var ringDiv = document.createElement('div')
  ringDiv.setAttribute('id', 'the-ring')
  ringDiv.setAttribute('class', 'magic-imbued-jewelry')
  ringDiv.addEventListener('click', nazgulScreech)
  var frodoElement = document.getElementsByClassName('hobbit')[0]
  frodoElement.appendChild(ringDiv)
}
keepItSecretKeepItSafe()
// Part 4

function makeBuddies () {
  // create an aside tag
  var rivenAside = document.createElement('aside')
  var buddiesUl = document.createElement('ul')
  buddies.forEach(function (x) {
    var buddiesLi = document.createElement('li')
    buddiesLi.innerHTML = x
    buddiesUl.appendChild(buddiesLi)
  })
  // attach an unordered list of the 'buddies' in the aside
  rivenAside.appendChild(buddiesUl)
  // insert your aside as a child element of rivendell
  var riverArticle = document.getElementById('middle-earth').getElementsByTagName('article')[1]
  riverArticle.appendChild(rivenAside)
}
makeBuddies()
// Part 5

function beautifulStranger () {
  var elementList = document.querySelector('aside').getElementsByTagName('li')[3]
  elementList.textContent = 'Aragon'
}
beautifulStranger()
// Part 6

function leaveTheShire () {
  // assemble the hobbits and move them to Rivendell
  var shireUl = document.getElementById('The Shire').getElementsByTagName('ul')[0]
  var hobbitli = document.getElementById('The Shire').getElementsByTagName('li')
  var rivendellUl = document.getElementById('Rivendell').getElementsByTagName('ul')[0]

  for (var i = 0; i < hobbitli.length; i) {
    var hobbitliRemoved = shireUl.removeChild(hobbitli[i])
    rivendellUl.appendChild(hobbitliRemoved)
  }
}
leaveTheShire()
// Part 7

function forgeTheFellowShip () {
  // create a new div called 'the-fellowship' within rivendell
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
  var fellowshipDiv = document.createElement('div')
  fellowshipDiv.setAttribute('id', 'the-fellowship')
  var rivendellArticle = document.getElementById('Rivendell')
  rivendellArticle.appendChild(fellowshipDiv)

  var rivendellUl = document.getElementById('Rivendell').getElementsByTagName('ul')[0]
  var rivendelList = rivendellUl.getElementsByTagName('li')

  for (var i = 0; i < rivendelList.length; i) {
    var rivendellRemoved = rivendellUl.removeChild(rivendelList[i])
    fellowshipDiv.appendChild(rivendellRemoved)
    alert(rivendellRemoved.textContent + ' has joined the fellowship')
  }
}
forgeTheFellowShip()
// Part 8

function theBalrog () {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border
  var gandalfElement = document.getElementById('the-fellowship').getElementsByTagName('li')[0]
  gandalfElement.textContent = 'Gandalf the White'
  gandalfElement.style.background = 'white'
  gandalfElement.style.border = 'thick solid grey'
}
theBalrog()
// Part 9

function hornOfGondor () {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
  alert("horn of gondor has been blown.Boromir's been killed by the Uruk-hai!")
  var boromirElement = document.getElementById('the-fellowship').getElementsByTagName('li')[4]
  boromirElement.style.textDecoration = 'line-through'
  document.getElementById('the-fellowship').removeChild(boromirElement)
}
hornOfGondor()
// Part 10

function itsDangerousToGoAlone () {
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
  var mountDoomDiv = document.createElement('div')
  mountDoomDiv.id = 'mount-doom'
  var mordorUl = document.createElement('ul')
  var mordorArticle = document.getElementById('Mordor')

  var frodoElement = document.getElementById('the-fellowship').getElementsByTagName('li')[4]
  var samElement = document.getElementById('the-fellowship').getElementsByTagName('li')[5]

  var frodoRemoved = document.getElementById('the-fellowship').removeChild(frodoElement)
  var samRemoved = document.getElementById('the-fellowship').removeChild(samElement)
  mordorUl.appendChild(frodoRemoved)
  mordorUl.appendChild(samRemoved)

  mordorArticle.appendChild(mordorUl)
  mordorArticle.appendChild(mountDoomDiv)
}
itsDangerousToGoAlone()
// Part 11

function weWantsIt () {
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
  var gollumDiv = document.createElement('div')
  gollumDiv.id = 'gollum'
  mordorArticle = document.getElementById('Mordor')
  mordorArticle.appendChild(gollumDiv)
  var frodoElement = mordorArticle.getElementsByTagName('li')[0]
  var ringElement = document.getElementById('the-ring')
  var ringRemoved = frodoElement.removeChild(ringElement)
  gollumDiv.appendChild(ringRemoved)
  var mountDoomDiv = mordorArticle.getElementById('mount-doom')
  var gollumMoved = mordorArticle.removeChild(gollumDiv)
  mountDoomDiv.appendChild(gollumMoved)
}
weWantsIt()

// Part 12

function thereAndBackAgain () {
  // remove Gollum and the Ring from the document
  var mountDoomDiv = document.getElementById('mount-doom')
  var gollumDiv = document.getElementById('gollum')
  mountDoomDiv.removeChild(gollumDiv)
  // Move all the hobbits back to the shire
  var shireUl = document.getElementById('The Shire').getElementsByTagName('ul')[0]
  var mordorUl = document.getElementById('Mordor').getElementsByTagName('ul')[0]
  var rivendellUl = document.getElementById('Rivendell').getElementsByTagName('ul')[0]

  var frodoElement = mordorUl.getElementsByTagName('li')[0]
  var samElement = mordorUl.getElementsByTagName('li')[1]
  var merryElement = rivendellUl.getElementsByTagName('tagName')('li')[4]
  var pippinElement = rivendellUl.getElementsByTagName('tagName')('li')[5]

  // remove frodo and sam from mordor and add to shire
  var frodoRemove = mordorUl.removeChild(frodoElement)
  shireUl.appendChild(frodoRemove)
  var samRemove = mordorUl.removeChild(samElement)
  shireUl.appendChild(samRemove)
  // remove pippin and meery from fellowship

  // remove all the buddies from the document
}
