console.log ('JS OK')


// # OPERAZIONI DI BASE

// - 1 Recupero tutti gli elementi

const grid = document.getElementById('grid');
const button = document.getElementById('btn')

// - 2 Costruisco i dati di partenza

const rows = 10;
const cols = 10;

// - 3 sommo le costanti

const totalCells = rows * cols;

// # FUNZIONI

// - 4 Invocazione della funzione

button.addEventListener('click', generateGrid);

// - 5 Dichiarazione della funzione

function generateGrid() {

    // - 6 Rimuovo l'event listener della crezione della celle

    button.removeEventListener('click', generateGrid);

    button.disabled = true;
   
    for(let i = 0; i < totalCells; i++) {

        // - 7 Creo la celle

        const cell = document.createElement('div');
        cell.className = 'cell';

        // - 8 Aggiungo i numeri dentro le celle

        cell.innerText = i + 1;
        
        // - 9 Aggiungo un event listener al click che si attiva per ogni singola cella

        cell.addEventListener('click', function () {
            this.classList.toggle('clicked');
        })

        // - 10 Aggiungo la cella alla pagina

        grid.appendChild(cell);   
    }
};


