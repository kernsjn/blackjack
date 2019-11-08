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
}

const dealACard = () => {
  for (let z = 0; z < 2; z++) {
    // document.querySelector('.player-hand').textContent = deck[0]
    const drawnCard = deck.pop()
    playerHand.push(drawnCard)
    const playerCardLi = document.createElement('li')
    // cardLi.textContent = drawnCard.rank + ' of ' + drawnCard.suit
    const img = document.createElement('img')
    img.src = './images/cards/' + drawnCard.imageUrl
    // cardLi.appendChild(p)
    playerCardLi.appendChild(img)
    document.querySelector('.player-hand').appendChild(playerCardLi)
  }

  // const dealACard = () => {
  //   for (let z = 0; z < 2; z++) {
  //     // document.querySelector('.dealer-hand').textContent = deck[0]
  //     const drawnCard = deck.pop()
  //     dealerHand.push(drawnCard)
  //     const CardLi = document.createElement('li')
  //     const img = document.createElement('img')
  //     img.src = './images/cards/' + drawnCard.imageUrl
  //     // cardLi.appendChild(p)
  //     dealerCardLi.appendChild(img)
  //     document.querySelector('.player-hand').appendChild(dealerCardLi)

  let sum = 0
  for (let i = 0; i < playerHand.length; i++) {
    sum += playerHand[i].value
  }
  document.querySelector('.player-sum').textContent = sum
}

// const shuffle = () => {
//   const shuffle = null
//   playerHand = 0
//   DealerHand = 0
//   document.querySelector('.stand').disabled = false
//   document.querySelector('.deal').disabled = false
//   document.querySelector('.hit').disabled = false

// const shuffle = () => {
//   for (let i = 0; i < deck.length; i++) {
//     const j = Math.floor(Math.random() * 52)
//     const temp = deck[i]
//     deck[i] = deck[j]
//     deck[j] = temp
//   }
// }

document.addEventListener('DOMContentLoaded', main)

document.querySelector('button.deal').addEventListener('click', dealACard)
// document.querySelector('button.shuffle').addEventListener('click', shuffle)
