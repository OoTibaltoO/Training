const easy = [
    "530070000600195000098000060800060003400803001700020006060000280000419005000080079",
    "003020600900305001001806400008102900700000008006708200002609500800203009005010300",
    "200080300060070084030500209000105408000000000402706000301007040720040060004010003"
];
const medium = [
    "000260701680070090190004500820100040004602900050003028009300074040050036703018000",
    "100489006380006000006000000000000000000000000000000000000000000000000000000000000",
    "000000907000420180000705026100904000050000040000507009920108000034059000507000000"
];
const hard = [
    "005300000800000020070010500400005300010070006003200080060500009004000030000009700",
    "000900002050123400400000000000000000000000000000000000000000000000000000000000000",
    "000000000000000000000000000000000000000000000000000000000000000000000000000000000"
];
let currentGrid = "";
let initialGrid = "";
let difficulty = "easy";

/**
 * =====================================
 * Générateur de grilles Sudoku (simplifié)
 * =====================================
 */

                                                                                                // Mélange les éléments d'un tableau (pour rendre l'ordre aléatoire)

                                                                                                // Fonction qui mélange les éléments d'un tableau de façon aléatoire (algorithme de Fisher-Yates)
/**
 * Mélange les éléments d'un tableau de façon aléatoire (algorithme de Fisher-Yates)
 * @param {Array} array - Tableau à mélanger
 * @returns {Array} Tableau mélangé
 */

function shuffle(array) {
                                                                                                // On parcourt le tableau à l'envers
    for (let lastIndex = array.length - 1; lastIndex > 0; lastIndex--) {
                                                                                                // On choisit un indice aléatoire entre 0 et lastIndex inclus
        const randomIndex = Math.floor(Math.random() * (lastIndex + 1));
                                                                                                // On échange la valeur à l'indice lastIndex avec celle à l'indice randomIndex
        [array[lastIndex], array[randomIndex]] = [array[randomIndex], array[lastIndex]];
    }
                                                                                                // On retourne le tableau mélangé
    return array;
}

                                                                                                // Remplit la grille de Sudoku de façon récursive

                                                                                                // Remplit la grille de Sudoku de façon récursive (backtracking)
/**
 * Remplit la grille de Sudoku de façon récursive (backtracking)
 * @param {Array} grid - Tableau représentant la grille
 * @returns {Boolean} true si la grille est remplie, false sinon
 *
 * Parcourt chaque case de la grille. Si la case est vide, essaie de placer chaque chiffre de 1 à 9 (dans un ordre aléatoire).
 * Si le chiffre respecte les règles du Sudoku, il est placé et la fonction continue récursivement.
 * Si aucun chiffre ne convient, la fonction revient en arrière (backtracking).
 */
function fillGrid(grid) {
                                                                                                // Parcourt chaque case de la grille
    for (let cellIndex = 0; cellIndex < 81; cellIndex++) {
                                                                                                // Si la case est vide (0)
        if (grid[cellIndex] === 0) {
                                                                                                // Mélange les chiffres de 1 à 9 pour essayer dans un ordre aléatoire
            let numbers = shuffle([1,2,3,4,5,6,7,8,9]);
                                                                                                // Essaie chaque chiffre
            for (let num of numbers) {
                                                                                                // Vérifie si le chiffre peut être placé à cette position
                if (isSafe(grid, cellIndex, num)) {
                    grid[cellIndex] = num;                                                      // Place le chiffre
                                                                                                // Appelle récursivement pour remplir la suite
                    if (fillGrid(grid)) return true;
                    grid[cellIndex] = 0;                                                        // Annule si ça ne marche pas
                }
            }
                                                                                                // Si aucun chiffre ne convient, retourne false (échec)
            return false;
        }
    }
                                                                                                // Si toutes les cases sont remplies, retourne true (succès)
    return true;
}

                                                                                                // Vérifie si un chiffre peut être placé à une position donnée
/**
 * Vérifie si un chiffre peut être placé à une position donnée
 * @param {Array} grid - Tableau représentant la grille
 * @param {Number} idx - Index de la case à tester
 * @param {Number} num - Chiffre à placer
 * @returns {Boolean} true si le chiffre peut être placé, false sinon
 *
 * Vérifie la ligne, la colonne et le bloc 3x3 pour s'assurer que le chiffre n'est pas déjà présent.
 */

function isSafe(grid, idx, num) {
    let rowIndex = Math.floor(idx / 9);                                                         // Ligne de la case
    let colIndex = idx % 9;                                                                     // Colonne de la case
                                                                                                // Vérifie la ligne, la colonne et le bloc 3x3
    for (let positionIndex = 0; positionIndex < 9; positionIndex++) {
        if (grid[rowIndex * 9 + positionIndex] === num) return false;                           // Ligne
        if (grid[positionIndex * 9 + colIndex] === num) return false;                           // Colonne
                                                                                                // Calcul pour le bloc 3x3
        let boxRow = 3 * Math.floor(rowIndex / 3) + Math.floor(positionIndex / 3);
        let boxCol = 3 * Math.floor(colIndex / 3) + positionIndex % 3;
        if (grid[boxRow * 9 + boxCol] === num) return false;                                    // Bloc
    }
    return true;                                                                                // Si aucune contrainte n'est violée
}

                                                                                                // Génère une grille complète puis enlève des chiffres selon la difficulté
/**
 * Génère une grille complète puis enlève des chiffres selon la difficulté
 * @param {String} difficulty - 'easy', 'medium', 'hard'
 * @returns {String} Grille sous forme de chaîne de caractères
 *
 * Crée une grille complète puis retire des chiffres pour créer le puzzle.
 */

function generateSudoku(difficulty = 'easy') {
    let grid = Array(81).fill(0);                                                               // Crée une grille vide
    fillGrid(grid);                                                                             // Remplit la grille complètement
                                                                                                // Détermine le nombre d'indices (cases pré-remplies) selon la difficulté
    let clues = difficulty === 'easy' ? 40 : difficulty === 'medium' ? 32 : 24;
                                                                                                // Mélange les positions pour retirer des chiffres aléatoirement
    let positions = shuffle([...Array(81).keys()]);
    for (let positionIndex = 0; positionIndex < 81 - clues; positionIndex++) {
        grid[positions[positionIndex]] = 0; // Enlève des chiffres
    }
                                                                                                // Retourne la grille sous forme de chaîne de caractères
    return grid.map(n => n.toString()).join('');
}

                                                                                                // Choisit une grille à afficher (génère une nouvelle grille)
/**
 * Choisit une grille à afficher (génère une nouvelle grille)
 * @returns {String} Grille Sudoku générée
 */

function pickGrid() {
                                                                                                // Utilise le générateur aléatoire au lieu du tableau
    return generateSudoku(difficulty);
}

                                                                                                // Affiche la grille Sudoku dans le DOM
/**
 * Affiche la grille Sudoku dans le DOM
 * @param {String} grid - Grille Sudoku sous forme de chaîne
 *
 * Crée les éléments HTML pour chaque case et ajoute les écouteurs d'événements pour la saisie.
 */

function renderBoard(grid) {
    const board = document.getElementById("sudoku-board");
    board.innerHTML = "";                                                                       // Vide le plateau
    for (let rowIndex = 0; rowIndex < 9; rowIndex++) {
        const rowDiv = document.createElement("div");
        rowDiv.className = "row";
        for (let colIndex = 0; colIndex < 9; colIndex++) {
            const cell = document.createElement("input");
            cell.type = "text";
            cell.maxLength = 1;
            cell.className = "cell";
            const val = grid[rowIndex * 9 + colIndex];
            if (val !== "0") {
                cell.value = val;                                                               // Pré-rempli
                cell.disabled = true;                                                           // Non modifiable
                cell.classList.add("prefilled");
            } else {
                                                                                                // Empêche la saisie de lettres et vérifie la complétion
                cell.addEventListener("input", function(e) {
                    if (!/^[1-9]?$/.test(cell.value)) {
                        cell.value = "";
                    }
                    checkCompletion();
                });
            }
            rowDiv.appendChild(cell);
        }
        board.appendChild(rowDiv);
    }
}

                                                                                                // Vérifie si la grille est complétée et correcte
/**
 * Vérifie si la grille est complétée et correcte
 * Affiche un message selon la validité
 *
 * Parcourt toutes les cases, vérifie qu'elles sont remplies et que la grille est valide.
 */

function checkCompletion() {
    const cells = document.querySelectorAll('#sudoku-board .cell');
    let userGrid = [];
    for (let cellIndex = 0; cellIndex < cells.length; cellIndex++) {
        let val = cells[cellIndex].value;
        if (!val || !/^[1-9]$/.test(val)) {
            return;                                                                             // Si une case est vide ou incorrecte, on arrête
        }
        userGrid.push(parseInt(val));
    }
                                                                                                // Vérifie si la grille est valide
    if (isValidSudoku(userGrid)) {
        showCongratsMessage();
    } else {
        showErrorMessage();
    }
}

                                                                                                // Affiche un message d'erreur si la grille n'est pas correcte
/**
 * Affiche un message d'erreur si la grille n'est pas correcte
 */

function showErrorMessage() {
    const messageDiv = document.getElementById("message");
    messageDiv.innerHTML = `<div class='error-anim'>❌ La grille n'est pas correcte !<br>Corrigez les erreurs pour valider.</div>`;
    messageDiv.style.animation = "shake 0.5s";
    setTimeout(() => { messageDiv.style.animation = ""; }, 600);
}

                                                                                                // Vérifie si la grille Sudoku est valide (aucun chiffre en double dans lignes, colonnes, blocs)
/**
 * Vérifie si la grille Sudoku est valide (aucun chiffre en double dans lignes, colonnes, blocs)
 * @param {Array} grid - Tableau représentant la grille
 * @returns {Boolean} true si la grille est valide, false sinon
 *
 * Vérifie chaque ligne, colonne et bloc 3x3 pour s'assurer qu'il n'y a pas de doublons.
 */

function isValidSudoku(grid) {
                                                                                                // Vérifie les lignes
    for (let rowIndex = 0; rowIndex < 9; rowIndex++) {
        let rowSet = new Set();
        for (let colIndex = 0; colIndex < 9; colIndex++) {
            let val = grid[rowIndex * 9 + colIndex];
            if (rowSet.has(val)) return false;
            rowSet.add(val);
        }
    }
                                                                                                // Vérifie les colonnes
    for (let colIndex = 0; colIndex < 9; colIndex++) {
        let colSet = new Set();
        for (let rowIndex = 0; rowIndex < 9; rowIndex++) {
            let val = grid[rowIndex * 9 + colIndex];
            if (colSet.has(val)) return false;
            colSet.add(val);
        }
    }
                                                                                                // Vérifie les blocs 3x3
    for (let blockIndex = 0; blockIndex < 9; blockIndex++) {
        let blockValues = new Set();
        let startRow = 3 * Math.floor(blockIndex / 3);
        let startCol = 3 * (blockIndex % 3);
        for (let rowOffset = 0; rowOffset < 3; rowOffset++) {
            for (let colOffset = 0; colOffset < 3; colOffset++) {
                let val = grid[(startRow + rowOffset) * 9 + (startCol + colOffset)];
                if (blockValues.has(val)) return false;
                blockValues.add(val);
            }
        }
    }
    return true;                                                                                // Si aucune erreur, la grille est valide
}

                                                                                                // Affiche un message de félicitations si la grille est correcte
/**
 * Affiche un message de félicitations si la grille est correcte
 */

function showCongratsMessage() {
    const messageDiv = document.getElementById("message");
    messageDiv.innerHTML = `<div class="congrats-anim">🎉 Félicitations, grille complétée ! 🎉<br>Voulez-vous recommencer ?<br><button id='play-again'>Oui</button></div>`;
    messageDiv.style.animation = "pulse 1s infinite alternate";
    document.getElementById('play-again').onclick = () => {
        newGame();
        messageDiv.style.animation = "";
    };
}

                                                                                                // Démarre une nouvelle partie
/**
 * Démarre une nouvelle partie
 * Génère une nouvelle grille et l'affiche
 */

function newGame() {
    currentGrid = pickGrid();                                                                   // Génère une nouvelle grille
    initialGrid = currentGrid;                                                                  // Sauvegarde la grille initiale
    renderBoard(currentGrid);                                                                   // Affiche la grille
    document.getElementById("message").textContent = "";
}

                                                                                                // Relance la partie avec la grille initiale

/**
 * Relance la partie avec la grille initiale
 * Réaffiche la grille initiale
 */
function restartGame() {
    renderBoard(initialGrid);
    document.getElementById("message").textContent = "";
}

                                                                                                // Gestion des boutons et de la difficulté
/**
 * Gestion des boutons et de la difficulté
 *
 * Ajoute les écouteurs d'événements pour les boutons et le sélecteur de difficulté.
 */

document.getElementById("new-game").onclick = () => {
    newGame();
};
document.getElementById("restart-game").onclick = () => {
    restartGame();
};
document.getElementById("difficulty").onchange = (e) => {
    difficulty = e.target.value;
    newGame();
};

                                                                                                // Initialisation au chargement de la page
/**
 * Initialisation au chargement de la page
 *
 * Lance une nouvelle partie dès que la page est chargée.
 */

document.addEventListener("DOMContentLoaded", () => {
    newGame();
});
