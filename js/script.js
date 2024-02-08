// seleziono la griglia
const gridElement = document.querySelector('#grid');

// creo un array per numerare le celle
let gridArray = [];

// DIFFICULTY BUTTON
document.querySelector('#easy-diff').addEventListener('click', function () {
    this.classList.toggle('active');
    console.log('easy selected');

    if (this.classList.contains('active')) {
        document.querySelector('#grid').classList.remove('row-9', 'row-7')
        document.querySelector('#grid').classList.add('row-10')
        document.querySelector('#medium-diff').classList.remove('active');
        document.querySelector('#hard-diff').classList.remove('active');

        document.querySelector('#grid').style = 'max-width: 800px;';



    }

});

document.querySelector('#medium-diff').addEventListener('click', function () {
    this.classList.toggle('active');
    console.log('medium selected');

    if (this.classList.contains('active')) {
        document.querySelector('#grid').classList.remove('row-10', 'row-7')
        document.querySelector('#grid').classList.add('row-9')
        document.querySelector('#easy-diff').classList.remove('active');
        document.querySelector('#hard-diff').classList.remove('active');

        document.querySelector('#grid').style = 'max-width: 790px;';
    }
});

document.querySelector('#hard-diff').addEventListener('click', function () {
    this.classList.toggle('active');
    console.log('hard selected');

    if (this.classList.contains('active')) {
        document.querySelector('#grid').classList.remove('row-10', 'row-9')
        document.querySelector('#grid').classList.add('row-7')
        document.querySelector('#easy-diff').classList.remove('active');
        document.querySelector('#medium-diff').classList.remove('active');

        document.querySelector('#grid').style = 'max-width: 600px;';
    }
});

// END DIFFICULTY BUTTON






// START GAME BUTTON
// collego un bottone per generare la griglia al click
document.querySelector("#start-btn").addEventListener('click', function () {
    console.log('game started!');

    const diffButton = document.querySelector('#diff-btn');
    diffButton.setAttribute('disabled', 'true');


    gridElement.innerHTML = '';
    gridArray = [];


    function gridSize() {

        if (document.querySelector('#easy-diff').classList.contains('active')) {
            return 100

        } else if (document.querySelector('#medium-diff').classList.contains('active')) {
            return 81;

        } else if (document.querySelector('#hard-diff').classList.contains('active')) {
            return 49;

        } else {
            return 100;
        }
    }

    let cellsNumber = gridSize(100, 81, 49);
    console.log(cellsNumber);

    // creo gli elementi che andranno a comporre la griglia con un ciclo for 
    // la griglia sarà composta da 100 celle, ogni riga dovrà contenere 10 celle 
    for (let i = 0; i < cellsNumber; i++) {
        // crate 100 celle e disposte in pagina 
        const cellElement = document.createElement('button');
        cellElement.classList.add('cell');
        cellElement.classList.add('btn');
        cellElement.classList.add('btn-info');

        gridElement.append(cellElement);

        // inserisco il nummero della cella 
        cellElement.textContent = i + 1;



        // inserisco le celle nell'array
        gridArray.push(cellElement);

        // creo un evento click per ogni cella
        cellElement.addEventListener('click', function () {
            console.log('this is the cell number: +' + (i + 1));

            this.classList.toggle('active');

            cellElement.setAttribute('disabled', 'true');
            console.log('cell disabled');


        });

        function randomNumbers() {
            let randomNUmbers = [];

            while (randomNUmbers.length < 16) {
                let random = Math.floor(Math.random() * cellsNumber) + 1;
                if (!randomNUmbers.includes(random)) {
                    randomNUmbers.push(random);
                }
            }
            return randomNUmbers;
        }
    }

    console.log(randomNumbers());










});
// END START GAME BUITTON   

