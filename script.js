//get the container to inject html
const container = document.querySelector('.container');

//------------------------------------STORE FRUITS IN ARRAY
//variable to be use following logic
const fruits = "./asset/img/cartes.png";
let pos = 100;
let fruitArr = [];

//loops two times to creat of copy of each fruit and inject some html to display cards/fruits
for (let i = 0; i < 2; i++) {
    pos = 100;
    for (let i = 0; i < 8; i++) {
        fruitArr.push({
            url: `
            <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <h2>???${i}</h2>
                    </div>
                    <div class="flip-card-back">
                        <img style="object-position: 0 ${pos -= 100}px;" class="container__img" src="${fruits}" alt="fruit">
                    </div>
                </div>
            </div>`,
            id: i + 1
        });
    };
};

//------------------------------------SHUFFLE ARRAYS
fruitArr.sort((a, b) => 0.5 - Math.random());

//------------------------------------INJECT FRUITS ARRAY TO HTML
for (const el of fruitArr) {
    container.innerHTML += el.url;
};

// // const startBtn = document.querySelector('.container__btn');

// startBtn.addEventListener('click', function(){
//     container.innerHTML = '';
//     for (const el of fruitArr) {
//         container.innerHTML += el.url;
//     };
// });


//------------------------------------FIND PAIR
const fruit = document.querySelectorAll('.container__img');
let firstId = 0;
let secondId = 0;
let tempIndex1 = 0;
let tempIndex2 = 0;
let score = 0;
let flipCard = document.querySelectorAll('.flip-card');
let flipCardInner = document.querySelectorAll('.flip-card-inner');

// function that compare the next 2 cards you'll click on to check if they match.
for (let i = 0; i < fruit.length; i++) {
    flipCard[i].addEventListener('click', function () {

        if (firstId === 0) {
            firstId = fruitArr[i].id;
            tempIndex1 = i;
            console.log(tempIndex1)

            flipCard[i].classList.add('rotate-on');
            flipCardInner[i].classList.add('rotate-on');

            console.log("first id =", firstId);

        } else if (secondId === 0) {
            secondId = fruitArr[i].id;
            tempIndex2 = i;

            flipCard[i].classList.add('rotate-on');
            flipCardInner[i].classList.add('rotate-on');

            console.log("second id =", secondId);

            if (firstId === secondId) {
                firstId = 0;
                secondId = 0;
                score += 1;

                findWinner();

                console.log('win');

            } else {

                setTimeout(function () {
                    console.log(tempIndex1)
                    flipCard[tempIndex1].classList.remove('rotate-on');
                    flipCardInner[tempIndex1].classList.remove('rotate-on');

                    console.log(tempIndex2)
                    flipCard[tempIndex2].classList.remove('rotate-on');
                    flipCardInner[tempIndex2].classList.remove('rotate-on');
                }, 1000);

                firstId = 0;
                secondId = 0;

                console.log("lose")
            };
        };
    });
};

//------------------------------------FIND WINNER
function findWinner() {
    if (score === 8) {
        window.alert("you win");
    };
};

//------------------------------------TEST

class voiture {

    couleur = "";
    #essence = 100;
    km = 0;

    constructor(couleur){
        this.couleur=couleur;
    }

    avancer() {
        this.km += 10;
        this.essence -= 1;
    }
}

var citroen = new voiture("yellow");
citroen.avancer();
console.log(citroen.couleur, citroen.essence);


class newGame {

    

}