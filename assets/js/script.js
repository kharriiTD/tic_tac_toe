const statusDisplay = document.querySelector('.game--status');

const cells = document.querySelectorAll(".cell")

cells.forEach((cell, index) =>

    cell.addEventListener('click', event => {
        const clickedCell = event.target;
        clickedCell.innerText = "X";
        console.log(index)
    }));

let currentPlayer = "X"

let winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

function handleCellClick(clickCellEvent) {
    const clickedCell = clickCellEvent.target;
    const ClickCellindex = parseInt(clickedCell.getAttribute('data-cell'));
    console.log("Clicked")
}

clickedCell.style.pointerEvents = 'none';


function changePlayer() {
    currentPlayer = currentPlayer === "X" ? "O" : "X";

    clickedCell.style.pointerEvents = 'none';


}