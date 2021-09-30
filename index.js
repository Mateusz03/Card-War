const cards = [
  {
    name: "As",
    color: "Heatrs",
    value: 13,
  },
  {
    name: "As",
    color: "Diamonds",
    value: 13,
  },
  {
    name: "As",
    color: "Spades",
    value: 13,
  },
  {
    name: "As",
    color: "Clubs",
    value: 13,
  },
  {
    name: "Two",
    color: "Hearts",
    value: 2,
  },
  {
    name: "Two",
    color: "Diamonds",
    value: 2,
  },
  {
    name: "Two",
    color: "Spades",
    value: 2,
  },
  {
    name: "Two",
    color: "Clubs",
    value: 2,
  },
  {
    name: "Three",
    color: "Hearts",
    value: 3,
  },
  {
    name: "Three",
    color: "Diamonds",
    value: 3,
  },
  {
    name: "Three",
    color: "Spades",
    value: 3,
  },
  {
    name: "Three",
    color: "Clubs",
    value: 3,
  },
  {
    name: "Four",
    color: "Hearts",
    value: 4,
  },
  {
    name: "Four",
    color: "Diamonds",
    value: 4,
  },
  {
    name: "Four",
    color: "Spades",
    value: 4,
  },
  {
    name: "Four",
    color: "Clubs",
    value: 4,
  },
  {
    name: "Five",
    color: "Hearts",
    value: 5,
  },
  {
    name: "Five",
    color: "Diamonds",
    value: 5,
  },
  {
    name: "Five",
    color: "Spades",
    value: 5,
  },
  {
    name: "Five",
    color: "Clubs",
    value: 5,
  },
  {
    name: "Six",
    color: "Hearts",
    value: 6,
  },
  {
    name: "Six",
    color: "Diamonds",
    value: 6,
  },
  {
    name: "Six",
    color: "Spades",
    value: 6,
  },
  {
    name: "Six",
    color: "Clubs",
    value: 6,
  },
  {
    name: "Seven",
    color: "Hearts",
    value: 7,
  },
  {
    name: "Seven",
    color: "Diamonds",
    value: 7,
  },
  {
    name: "Seven",
    color: "Spades",
    value: 7,
  },
  {
    name: "Seven",
    color: "Clubs",
    value: 7,
  },
  {
    name: "Eight",
    color: "Hearts",
    value: 8,
  },
  {
    name: "Eight",
    color: "Diamonds",
    value: 8,
  },
  {
    name: "Eight",
    color: "Spades",
    value: 8,
  },
  {
    name: "Eight",
    color: "Clubs",
    value: 8,
  },
  {
    name: "Nine",
    color: "Hearts",
    value: 9,
  },
  {
    name: "Nine",
    color: "Diamonds",
    value: 9,
  },
  {
    name: "Nine",
    color: "Spades",
    value: 9,
  },
  {
    name: "Nine",
    color: "Clubs",
    value: 9,
  },
  {
    name: "Ten",
    color: "Hearts",
    value: 10,
  },
  {
    name: "Ten",
    color: "Diamonds",
    value: 10,
  },
  {
    name: "Ten",
    color: "Spades",
    value: 10,
  },
  {
    name: "Ten",
    color: "Clubs",
    value: 10,
  },
  {
    name: "Jack",
    color: "Hearts",
    value: 11,
  },
  {
    name: "Jack",
    color: "Diamonds",
    value: 11,
  },
  {
    name: "Jack",
    color: "Spades",
    value: 11,
  },
  {
    name: "Jack",
    color: "Clubs",
    value: 11,
  },
  {
    name: "Queen",
    color: "Hearts",
    value: 12,
  },
  {
    name: "Queen",
    color: "Diamonds",
    value: 12,
  },
  {
    name: "Queen",
    color: "Spades",
    value: 12,
  },
  {
    name: "Queen",
    color: "Clubs",
    value: 12,
  },
  {
    name: "King",
    color: "Hearts",
    value: 13,
  },
  {
    name: "King",
    color: "Diamonds",
    value: 13,
  },
  {
    name: "King",
    color: "Spades",
    value: 13,
  },
  {
    name: "King",
    color: "Clubs",
    value: 13,
  },
  {
    name: "Joker",
    color: "Red",
    value: 14,
  },
  {
    name: "Joker",
    color: "Black",
    value: 14,
  },
  {
    name: "Joker",
    color: "Red",
    value: 14,
  },
  {
    name: "Joker",
    color: "Black",
    value: 14,
  },
];

let player1 = [];
let player2 = [];

let numbersOfCards = [];

for (let i = 0; i < 56; i++) {
  numbersOfCards.push(i);
}
const shuffledArray = numbersOfCards.sort((a, b) => 0.5 - Math.random());

for (let i = 0; i < shuffledArray.length / 2; i++) {
  player1.push(shuffledArray[i]);
}
shuffledArray.splice(0, 28);
for (let i = 0; i < shuffledArray.length; i++) {
  player2.push(shuffledArray[i]);
}
console.log(player1);
console.log(player2);
