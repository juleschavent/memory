class newGame {

    //get the container to inject html
    container = document.querySelector('.container');

    //------------------------------------STORE FRUITS IN ARRAY
    //variable to be use following logic
    fruits = "./asset/img/cartes.png";
    pos = 100;
    fruitArr = [];

    //loops two times to creat of copy of each fruit and inject some html to display cards/fruits
    for (i = 0; i < 2; i++) {
        for (let i = 0; i < 8; i++) {
            fruitArr.push({
                url: `
            <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <h2>???</h2>
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


}