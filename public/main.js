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
let playerSum = 0
let dealerSum = 0

const enableHitButton = document.querySelector('.hit-button')
const enableStandButton = document.querySelector('.stand-button')
const enableReplayButton = document.querySelector('.replay-button')
const disableDealerHitButton = document.querySelector('.dealer-hit-button')
  .disabled

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
}

const dealerPlays = () => {
  flipCard('.dealer-hand')
  showSum(dealerHand, '.dealer-sum')
  document.querySelector('.stand-button').disabled = true
  document.querySelector('.hit-button').disabled = true
  console.log(dealerPlays)
}

const flipCard = imageContainer => {
  for (
    let i = 0;
    i < document.querySelector(imageContainer).children.length;
    i++
  ) {
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

const hitPlayer = () => {
  for (let n = 0; n < 1; n++) {
    const hitPlayerHand = deck.pop()
    playerHand.push(hitPlayerHand)
    const playerHandLiTwo = document.createElement('li')
    const imgTwo = document.createElement('img')
    imgTwo.src = './images/cards/' + hitPlayerHand.imageUrl
    playerHandLiTwo.appendChild(imgTwo)
    document.querySelector('.player-hand').appendChild(playerHandLiTwo)
    showSum(playerHand, '.player-sum')
  }
  if (playerHand > 21) {
    document.querySelector('.player-sum').textContent = 'BUST'
    document.querySelector('.dealer-sum').textContent = 'WINNER'
    document.querySelector('.hit-button').disabled = true
    document.querySelector('.dealer-hit-button').disabled = true
    document.querySelector('.stand-button').disabled = true
  } else if (showSum === 21) {
    document.querySelector(h3).textContent = 'WINNER'
    document.querySelector(h3).textContent = 'BUST'
    document.querySelector('.hit-button').disabled = true
    document.querySelector('.stand-button').disabled = true
  }
}

const hitDealer = () => {
  for (let i = 0; i < 1; i++) {
    const hitDealerHand = deck.pop()
    dealerHand.push(hitDealerHand)
    const dealerHandLiTwo = document.createElement('li')
    const imgTwo = document.createElement('img')
    imgTwo.src = './images/cards/' + hitDealerHand.imageUrl
    dealerHandLiTwo.appendChild(imgTwo)
    document.querySelector('.dealer-hand').appendChild(dealerHandLiTwo)
    showSum(dealerHand, '.dealer-sum')
  }
}

// while (dealerSum <= 17)
if (dealerSum < 17) {
  document.querySelector('.dealer-hit-button').disabled = false
}
if (dealerSum > 21) {
  document.querySelector('.player-hand').textContent = 'WINNER'
  document.querySelector('.dealer-hand').textContent = 'BUST'
  document.querySelector('.hit-button').disabled = true
  document.querySelector('.stand-button').disabled = true
  document.querySelector('.deal-button').disabled = true
} else if (dealerSum === 21) {
  document.querySelector('.player-hand').textContent = 'BUST'
  document.querySelector('.view-details').textContent = 'WINNER'
  document.querySelector('.hit-button').disabled = true
  document.querySelector('.stand-button').disabled = true
  document.querySelector('.deal-button').disabled = true
} else if (dealerSum > playerSum) {
  document.querySelector('.player-hand').textContent = 'BUST'
  document.querySelector('.dealer-hand').textContent = 'WINNER'
  document.querySelector('.hit-button').disabled = true
  document.querySelector('.stand-button').disabled = true
  document.querySelector('.deal-button').disabled = true
}

const replay = () => {
  location.reload()
}

document.addEventListener('DOMContentLoaded', main)
document.querySelector('.stand-button').addEventListener('click', dealerPlays)
document.querySelector('.hit-button').addEventListener('click', hitPlayer)
document
  .querySelector('.dealer-hit-button')
  .addEventListener('click', hitDealer)
document.querySelector('.replay-button').addEventListener('click', replay)
