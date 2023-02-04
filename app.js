document.addEventListener("DOMContentLoaded", () => {
  //card options
  const cardArray = [
    {
      name: "1",
      img: "What´s your name?",
    },
    {
      name: "1",
      img: "Wie heißt du?",
    },
    {
      name: "2",
      img: "How are you?",
    },
    {
      name: "2",
      img: "Wie geht es dir?",
    },
    {
      name: "3",
      img: "I´m fine.",
    },
    {
      name: "3",
      img: "Mir geht's gut.",
    },
    {
      name: "4",
      img: "What´s this?",
    },
    {
      name: "4",
      img: "Was ist das?",
    },
    {
      name: "5",
      img: "Where are you?",
    },
    {
      name: "5",
      img: "Wo bist du?",
    },
    {
      name: "6",
      img: "I am at home.",
    },
    {
      name: "6",
      img: "Ich bin zu Hause.",
    },
    {
      name: "7",
      img: "Where are you going?",
    },
    {
      name: "7",
      img: "Wo gehst du hin?",
    },
    {
      name: "8",
      img: "I am so excited!",
    },
    {
      name: "8",
      img: "Ich bin so aufgeregt!",
    },
    {
      name: "9",
      img: "How old are you?",
    },
    {
      name: "9",
      img: "Wie alt bist du?",
    },
    {
      name: "10",
      img: "Ich bin 7 Jahre alt.",
    },
    {
      name: "10",
      img: "I am 7 years old.",
    },
    {
      name: "11",
      img: "Do you have a sister or brother?",
    },
    {
      name: "11",
      img: "Hast du einen Bruder oder eine Schwester?",
    },
    {
      name: "12",
      img: "How is the weather today?",
    },
    {
      name: "12",
      img: "Wie ist das Wetter heute?",
    },
  ];

  cardArray.sort(() => 0.5 - Math.random());

  const grid = document.querySelector(".grid");
  const resultDisplay = document.querySelector("#result");
  let cardsChosen = [];
  let cardsChosenId = [];
  let cardsWon = [];

  //create your board
  /* function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const cardd = document.createElement('div')
      const card = document.createElement('img')
      card.setAttribute('src', 'images/blank.png')

      const cardtext = document.createElement('h5')
      cardtext.textContent = i+1
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard)
      cardd.appendChild(card)
      grid.appendChild(cardd)
      cardd.appendChild(cardtext)
    }
  } */

  function createBoard() {
    cardArray.forEach(function (item, i) {
      const cardd = document.createElement("div");
      cardd.setAttribute("class", "box");
      const card = document.createElement("img");
      card.setAttribute("src", "images/blank.png");

      const cardtext = document.createElement("h5");
      cardtext.textContent = item.img;
      cardd.setAttribute("data-id", i);
      cardd.addEventListener("click", flipCard);
      cardd.appendChild(card);
      grid.appendChild(cardd);
      cardd.appendChild(cardtext);
    });
  }

  //check for matches
  function checkForMatch() {
    const cards = document.querySelectorAll("img");
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];

    if (optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute("src", "images/blank.png");
      cards[optionTwoId].setAttribute("src", "images/blank.png");

      alert("You have clicked the same image!");
    } else if (cardsChosen[0] === cardsChosen[1]) {
      var audio = new Audio("images/sound.mp3");
      audio.play();
      // alert('You found a match')
      cards[optionOneId].setAttribute("src", "images/white.png");
      cards[optionTwoId].setAttribute("src", "images/white.png");
      cards[optionOneId].removeEventListener("click", flipCard);
      cards[optionTwoId].removeEventListener("click", flipCard);
      cardsWon.push(cardsChosen);
      cards[optionOneId].parentElement.setAttribute("class", "hide");
      cards[optionTwoId].parentElement.setAttribute("class", "hide");
    } else {
      cards[optionOneId].setAttribute("src", "images/blank.png");
      cards[optionTwoId].setAttribute("src", "images/blank.png");
      cards[optionOneId].parentElement.classList.remove("green");
      cards[optionTwoId].parentElement.classList.remove("green");
      var audio1 = new Audio("images/nothing.mp3");
      audio1.play();
      // alert('Sorry, try again')
    }
    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length;
    if (cardsWon.length === cardArray.length / 2) {
      resultDisplay.innerHTML =
        ' <h1>Congratulations! You found them all!</h1><h2>Level 1 completed!</h2><a href="https://elaidina.github.io/deu1/level2.html"> Continue to Level 2</a>';

      var audio3 = new Audio("images/end.mp3");
      audio3.play();
    }
  }

  //flip your card
  function flipCard() {
    let cardId = this.getAttribute("data-id");
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);

    this.classList.add("green");
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }

  createBoard();
});
