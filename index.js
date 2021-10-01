const cards = [
  {
    name: "As",
    color: "Heatrs",
    value: 14,
    img: "asH.png",
  },
  {
    name: "As",
    color: "Diamonds",
    value: 14,
    img: "asD.png",
  },
  {
    name: "As",
    color: "Spades",
    value: 14,
    img: "asS.png",
  },
  {
    name: "As",
    color: "Clubs",
    value: 14,
    img: "asC.png",
  },
  {
    name: "Two",
    color: "Hearts",
    value: 2,
    img: "2H.png",
  },
  {
    name: "Two",
    color: "Diamonds",
    value: 2,
    img: "2D.png",
  },
  {
    name: "Two",
    color: "Spades",
    value: 2,
    img: "2S.png",
  },
  {
    name: "Two",
    color: "Clubs",
    value: 2,
    img: "2C.png",
  },
  {
    name: "Three",
    color: "Hearts",
    value: 3,
    img: "3H.png",
  },
  {
    name: "Three",
    color: "Diamonds",
    value: 3,
    img: "3D.png",
  },
  {
    name: "Three",
    color: "Spades",
    value: 3,
    img: "3S.png",
  },
  {
    name: "Three",
    color: "Clubs",
    value: 3,
    img: "3C.png",
  },
  {
    name: "Four",
    color: "Hearts",
    value: 4,
    img: "4H.png",
  },
  {
    name: "Four",
    color: "Diamonds",
    value: 4,
    img: "4D.png",
  },
  {
    name: "Four",
    color: "Spades",
    value: 4,
    img: "4S.png",
  },
  {
    name: "Four",
    color: "Clubs",
    value: 4,
    img: "4C.png",
  },
  {
    name: "Five",
    color: "Hearts",
    value: 5,
    img: "5H.png",
  },
  {
    name: "Five",
    color: "Diamonds",
    value: 5,
    img: "5D.png",
  },
  {
    name: "Five",
    color: "Spades",
    value: 5,
    img: "5S.png",
  },
  {
    name: "Five",
    color: "Clubs",
    value: 5,
    img: "5C.png",
  },
  {
    name: "Six",
    color: "Hearts",
    value: 6,
    img: "6H.png",
  },
  {
    name: "Six",
    color: "Diamonds",
    value: 6,
    img: "6D.png",
  },
  {
    name: "Six",
    color: "Spades",
    value: 6,
    img: "6S.png",
  },
  {
    name: "Six",
    color: "Clubs",
    value: 6,
    img: "6C.png",
  },
  {
    name: "Seven",
    color: "Hearts",
    value: 7,
    img: "7H.png",
  },
  {
    name: "Seven",
    color: "Diamonds",
    value: 7,
    img: "7D.png",
  },
  {
    name: "Seven",
    color: "Spades",
    value: 7,
    img: "7S.png",
  },
  {
    name: "Seven",
    color: "Clubs",
    value: 7,
    img: "7C.png",
  },
  {
    name: "Eight",
    color: "Hearts",
    value: 8,
    img: "8H.png",
  },
  {
    name: "Eight",
    color: "Diamonds",
    value: 8,
    img: "8D.png",
  },
  {
    name: "Eight",
    color: "Spades",
    value: 8,
    img: "8S.png",
  },
  {
    name: "Eight",
    color: "Clubs",
    value: 8,
    img: "8C.png",
  },
  {
    name: "Nine",
    color: "Hearts",
    value: 9,
    img: "9H.png",
  },
  {
    name: "Nine",
    color: "Diamonds",
    value: 9,
    img: "9D.png",
  },
  {
    name: "Nine",
    color: "Spades",
    value: 9,
    img: "9S.png",
  },
  {
    name: "Nine",
    color: "Clubs",
    value: 9,
    img: "9C.png",
  },
  {
    name: "Ten",
    color: "Hearts",
    value: 10,
    img: "10H.png",
  },
  {
    name: "Ten",
    color: "Diamonds",
    value: 10,
    img: "10D.png",
  },
  {
    name: "Ten",
    color: "Spades",
    value: 10,
    img: "10S.png",
  },
  {
    name: "Ten",
    color: "Clubs",
    value: 10,
    img: "10C.png",
  },
  {
    name: "Jack",
    color: "Hearts",
    value: 11,
    img: "JH.png",
  },
  {
    name: "Jack",
    color: "Diamonds",
    value: 11,
    img: "JD.png",
  },
  {
    name: "Jack",
    color: "Spades",
    value: 11,
    img: "JS.png",
  },
  {
    name: "Jack",
    color: "Clubs",
    value: 11,
    img: "JC.png",
  },
  {
    name: "Queen",
    color: "Hearts",
    value: 12,
    img: "QH.png",
  },
  {
    name: "Queen",
    color: "Diamonds",
    value: 12,
    img: "QD.png",
  },
  {
    name: "Queen",
    color: "Spades",
    value: 12,
    img: "QS.png",
  },
  {
    name: "Queen",
    color: "Clubs",
    value: 12,
    img: "QC.png",
  },
  {
    name: "King",
    color: "Hearts",
    value: 13,
    img: "KH.png",
  },
  {
    name: "King",
    color: "Diamonds",
    value: 13,
    img: "KD.png",
  },
  {
    name: "King",
    color: "Spades",
    value: 13,
    img: "KS.png",
  },
  {
    name: "King",
    color: "Clubs",
    value: 13,
    img: "KC.png",
  },
  {
    name: "Joker",
    color: "Red",
    value: 15,
    img: "joker.jpg",
  },
  {
    name: "Joker",
    color: "Black",
    value: 15,
    img: "joker.jpg",
  },
  {
    name: "Joker",
    color: "Red",
    value: 15,
    img: "joker.jpg",
  },
  {
    name: "Joker",
    color: "Black",
    value: 15,
    img: "joker.jpg",
  },
];

let player1 = [];
let player2 = [];

let replacementPlayer1 = [];
let replacementPlayer2 = [];
let w8tingArr = [];

function cardShuffling() {
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
}
function replacementDataCardsPlayer1() {
  for (let i = 0; i < player1.length; i++) {
    replacementPlayer1.push(cards[player1[i]]);
  }
}
function replacementDataCardsPlayer2() {
  for (let i = 0; i < player2.length; i++) {
    replacementPlayer2.push(cards[player2[i]]);
  }
}

let p1Container = document.querySelector(".p1Container");
let p2Container = document.querySelector(".p2Container");
let p1length = document.querySelector(".p1length");
let p2length = document.querySelector(".p2length");

let NextTour = document.querySelector(".NextTour");
NextTour.addEventListener("click", () => {
  p1Container.innerHTML =
    `<img src= "cards/` + replacementPlayer1[0].img + `" class= "image">`;
  p1length.innerHTML = replacementPlayer1.length;
  p2Container.innerHTML =
    `<img src= "cards/` + replacementPlayer2[0].img + `" class= "image">`;
  p2length.innerHTML = replacementPlayer2.length;
  if (replacementPlayer1[0].value > replacementPlayer2[0].value) {
    let c1 = replacementPlayer1.shift();
    let c2 = replacementPlayer2.shift();
    replacementPlayer1.push(c1);
    replacementPlayer1.push(c2);
    if (w8tingArr.length > 0) {
      replacementPlayer1.push(...w8tingArr);
      w8tingArr = [];
      document.querySelector(".reverseDiv").style.display = "none";
    }
  } else if (replacementPlayer1[0].value < replacementPlayer2[0].value) {
    let c1 = replacementPlayer1.shift();
    let c2 = replacementPlayer2.shift();
    replacementPlayer2.push(c2);
    replacementPlayer2.push(c1);
    if (w8tingArr.length > 0) {
      replacementPlayer2.push(...w8tingArr);
      w8tingArr = [];
      document.querySelector(".reverseDiv").style.display = "none";
    }
  } else {
    let c1 = replacementPlayer1.shift();
    let c2 = replacementPlayer2.shift();
    w8tingArr.push(c1);
    w8tingArr.push(c2);

    document.querySelector(".reverseDiv").style.display = "block";
  }

  if (replacementPlayer1.length === 0) {
    console.log("p2 win");
    alert("p2 win");
  } else if (replacementPlayer2.length === 0) {
    console.log("p1 win");
    alert("p1 win");
  }
});

cardShuffling();
replacementDataCardsPlayer1();
replacementDataCardsPlayer2();
