const ranks = [
  'Ace',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  'Jack',
  'Queen',
  'King'
]
// getting values as a parallel array
// const values = [11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10]
const suits = ['Spades', 'Diamonds', 'Clubs', 'Hearts']

const deck = []
const playerHand = []
const dealerHand = []
const show = true
const hide = false

// get values using a if statement
const getCardValue = rank => {
  if (rank === 'Ace') {
    return 11
  } else if (rank === 'King' || rank === 'Queen' || rank === 'Jack') {
    return 10
  } else {
    return parseInt(rank)
  }
}

const main = () => {
  for (let i = 0; i < suits.length; i++) {
    for (let j = 0; j < ranks.length; j++) {
      const card = {
        rank: ranks[j],
        suit: suits[i],
        value: getCardValue(ranks[j]),
        imageUrl: ranks[j] + '_of_' + suits[i] + '.svg'
      }
      deck.push(card)
    }
  }
  for (let i = 0; i < deck.length; i++) {
    const j = Math.floor(Math.random() * 52)
    const temp = deck[i]
    deck[i] = deck[j]
    deck[j] = temp
  }
  console.log(deck)
  beginGame()
}

const showSum = (hand, sumContainer) => {
  let playerSum = 0
  for (let i = 0; i < hand.length; i++) {
    playerSum += hand[i].value
  }
  document.querySelector(sumContainer).textContent = playerSum
}

const dealCard = (deckFrom, handTo, imageContainer, showHide) => {
  handTo.push(deckFrom.pop())

  const cardLi = document.createElement('li')
  const img = document.createElement('img')
  if (showHide) {
    img.src = './images/cards/' + handTo[handTo.length - 1].imageUrl
    img.alt = './images/cards/card_back.svg'
  } else {
    img.alt = './images/cards/' + handTo[handTo.length - 1].imageUrl
    img.src = './images/cards/card_back.svg'
  }
  cardLi.appendChild(img)
  document.querySelector(imageContainer).appendChild(cardLi)
}

const dealerPlays = () => {
  flipCard('.dealer-hand')
  showSum(dealerHand, '.dealer-sum')
  //
}

const flipCard = imageContainer => {
  // console.log(document.querySelector(imageContainer).children.length)
  for (
    let i = 0;
    i < document.querySelector(imageContainer).children.length;
    i++
  ) {
    // console.log(document.querySelector(imageContainer).children[i].children[0])
    const img = document.querySelector(imageContainer).children[i].children[0]
    const temp = img.src
    img.src = img.alt
    img.alt = temp
  }
}

const beginGame = () => {
  dealCard(deck, playerHand, '.player-hand', show)
  dealCard(deck, dealerHand, '.dealer-hand', hide)
  dealCard(deck, playerHand, '.player-hand', show)
  dealCard(deck, dealerHand, '.dealer-hand', hide)

  showSum(playerHand, '.player-sum')
}

// const dealPlayerCard = () => {
//   for (let z = 0; z < 2; z++) {
//     const drawnCard = deck.pop()
//     playerHand.push(drawnCard)

//   }
//   let playerSum = 0
//   for (let i = 0; i < playerHand.length; i++) {
//     playerSum += playerHand[i].value
//   }

//   document.querySelector('.player-sum').textContent = playerSum
// }

// const dealDealerCard = () => {
//   for (let z = 0; z < 2; z++) {
//     const drawnCard = deck.pop()
//     dealerHand.push(drawnCard)
//     const dealerCardLi = document.createElement('li')
//     const img = document.createElement('img')
//     img.src = './images/cards/' + drawnCard.imageUrl
//     dealerCardLi.appendChild(img)
//     document.querySelector('.dealer-hand').appendChild(dealerCardLi)
//   }

//   let dealerSum = 0
//   for (let i = 0; i < dealerHand.length; i++) {
//     dealerSum += dealerHand[i].value
//   }
//   document.querySelector('.dealer-sum').textContent = dealerSum

document.addEventListener('DOMContentLoaded', main)

// document
//   .querySelector('button.deal-button')
// .addEventListener('click', dealPlayerCard)
// document.querySelector('button.shuffle').addEventListener('click', shuffle)
document.querySelector('.stand-button').addEventListener('click', dealerPlays)

const playerHits = (deckFrom, handTo, imageContainer, showHide) => {
  handTo.push(deckFrom.pop())
  handTo = playerHand
  if (showHide) {
    img.src = './images/cards/' + handTo[handTo.length - 1].imageUrl
    img.alt = './images/cards/card_back.svg'
  } else {
    img.alt = './images/cards/' + handTo[handTo.length - 1].imageUrl
    img.src = './images/cards/card_back.svg'
  }
  cardLi.appendChild(img)
  document.querySelector(imageContainer).appendChild(cardLi)

  let sum = 0
  for (let i = 0; i < playerHand.length; i++) {
    sum += playerHand[i].value
  }
  document.querySelector('.player-sum').textContent = sum
}

document.querySelector('.stand-button').disabled = true
console.log(dealerPlays)



// November 10, 2019
const ranks = [
  'Ace',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  'Jack',
  'Queen',
  'King'
]
// getting values as a parallel array
// const values = [11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10]
const suits = ['Spades', 'Diamonds', 'Clubs', 'Hearts']

const deck = []
const playerHand = []
const dealerHand = []
const show = true
const hide = false

const enableHitButton = document.querySelector('.hit-button')
const enableStandButton = document.querySelector('.stand-button')
const enableReplayButton = document.querySelector('.replay-button')

// get values of ranks using a if statement
const getCardValue = rank => {
  if (rank === 'Ace') {
    return 11
  } else if (rank === 'King' || rank === 'Queen' || rank === 'Jack') {
    return 10
  } else {
    return parseInt(rank)
  }
}

const main = () => {
  for (let i = 0; i < suits.length; i++) {
    for (let j = 0; j < ranks.length; j++) {
      const card = {
        rank: ranks[j],
        suit: suits[i],
        value: getCardValue(ranks[j]),
        imageUrl: ranks[j] + '_of_' + suits[i] + '.svg'
      }
      deck.push(card)
    }
  }
  for (let i = 0; i < deck.length; i++) {
    const j = Math.floor(Math.random() * 52)
    const temp = deck[i]
    deck[i] = deck[j]
    deck[j] = temp
  }
  console.log(deck)
  beginGame()
}

const


const beginGame = () => {
  dealCard(deck, playerHand, '.player-hand', show)
  dealCard(deck, dealerHand, '.dealer-hand', hide)
  dealCard(deck, playerHand, '.player-hand', show)
  dealCard(deck, dealerHand, '.dealer-hand', hide)

  showSum(playerHand, '.player-sum')
}


const dealCard = (deckFrom, handTo, imageContainer, showHide) => {
  handTo.push(deckFrom.pop())

  const cardLi = document.createElement('li')
  const img = document.createElement('img')
  if (showHide) {
    img.src = './images/cards/' + handTo[handTo.length - 1].imageUrl
    img.alt = './images/cards/card_back.svg'
  } else {
    img.alt = './images/cards/' + handTo[handTo.length - 1].imageUrl
    img.src = './images/cards/card_back.svg'
  }
  cardLi.appendChild(img)

  document.querySelector(imageContainer).appendChild(cardLi)
}

const showSum = (hand, sumContainer) => {
  let playerSum = 0
  for (let i = 0; i < hand.length; i++) {
    playerSum += hand[i].value
    document.querySelector(sumContainer).textContent = playerSum
  }
  if (playerSum > 21) {
    document.querySelector('h3').textContent = 'Bust'
  }
}

const dealerPlays = () => {
  flipCard('.dealer-hand')
  showSum(dealerHand, '.dealer-sum')
  document.querySelector('.stand-button').disabled = true
  console.log(dealerPlays)
}

const flipCard = imageContainer => {
  // console.log(document.querySelector(imageContainer).children.length)
  for (
    let i = 0;
    i < document.querySelector(imageContainer).children.length;
    i++
  ) {
    // console.log(document.querySelector(imageContainer).children[i].children[0])
    const img = document.querySelector(imageContainer).children[i].children[0]
    const temp = img.src
    img.src = img.alt
    img.alt = temp
  }
}



const replayGame = () => {
  const ReplayButton = 0
  playerHand = 
  dealerHand = null

  document.querySelector('button.hit-button').disabled = false
  document.querySelector('button.stand-button').disabled = false
  document.querySelector('.player-hand').textContent = replayButton
  document.querySelector('.dealer-hand').textContent = replayButton
}

document.querySelector('.stand-button').addEventListener('click', dealerPlays)
document.querySelector('.replay-button').addEventListener('click', replayGame)
document.addEventListener('DOMContentLoaded', main)
