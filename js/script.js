console.log ('JS OK')

// # OPERAZIONI DI BASE

// - 1 Recupero tutti gli elementi

const grid = document.getElementById('grid');
const button = document.getElementById('btn');
const scoreDisplay = document.getElementById('score');   


// # FUNZIONI INTERNE
// Funzione di crezione della cella
const createCell = cellNumber => {
    const cell = document.createElement('div');
    cell.className = 'cell';
    cell.append(cellNumber);
    return cell;
} 

// Funzione per generare 16 bombe casuali.
const generateBombs = (maxBombNumber, totalBombs) => {
    const bombs = [];
    while (bombs.length  < totalBombs) {
        const randomNumber = Math.floor(Math.random() * maxBombNumber) + 1;
        if (!bombs.includes(randomNumber)) bombs.push(randomNumber);
    }
    return bombs;
}

// Funzione per rivelare tutte le celle
const revealAllCells = (bombs) => {
    const cells = document.querySelectorAll('.cell');

    for (let cell of cells) {
        cell.classList.add('clicked');
        if (bombs.includes(parseInt(cell.innerText))) {
            cell.classList.add('bomb')
        }
    }
}
// Funzione che gestisce la fine del gioco
const endGame = (score, bombs, revealFunction, hasWon = false) => {
    const message = hasWon
    ? `Hai vinto! Complimenti!`
    :`Hai perso! Hai totalizzato ${score} punti.`
    
    alert(message);

    revealFunction(bombs);
}

// # OPERAZIONI DI BASE

// - 2 Costruisco i dati di partenza

const rows = 10;
const cols = 10;

// - 3 Creo le bombe
const totalBombs = 16

// - 4 Sommo le costanti

const totalCells = rows * cols;

// - 5 Preparo una variabile per il conteggio dei punti

let score = 0 

// - 6 Calcolo il punteggio massimo

const MaxPoints = totalCells - totalBombs;

// - 7 Genero le bombe

const bombs = generateBombs(totalCells, totalBombs)

// # FUNZIONE DELL'EFFETTIVO SVOLGIMENTO DEL GIOCO 


// - 8 Invocazione della funzione

button.addEventListener('click', generateGrid);

// - 9 Dichiarazione della funzione

function generateGrid() {

    // - 10 Rimuovo l'event listener della crezione della celle

    button.removeEventListener('click', generateGrid);
   
    for(let i = 0; i < totalCells; i++) {

        // - 11 Creo una cella 
        const cell = createCell(i);
  
        // - 12 Aggiungo un event listener al click che si attiva per ogni singola cella

        cell.addEventListener('click', () => {

            //! Verifico se la cella è già stata cliccata
            if (cell.classList.contains('clicked')) return;

            // Aggiungo la classe clicked
            cell.classList.add('clicked');

            // Verifico se l'utente ha cliccato una bomba
            const hasHitBomb = bombs.includes(parseInt(cell.innerText))

            if (hasHitBomb) {
                cell.classList.add('bomb')
                endGame(score, bombs, revealAllCells, false)
            } else {
              // Incremento il punteggio
              scoreDisplay.innerText = ++score;
              
              // Controllo se l'utente ha vinto 
              if (score === MaxPoints) {
                endGame(score, bombs, revealAllCells, true)
              }
            }
        })

        // - 13 Aggiungo la cella alla pagina

        grid.appendChild(cell);   
    }
};


