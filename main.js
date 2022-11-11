let cellsInfo = [
  { noCell: 1, isAvailable: true, card: null },
  { noCell: 2, isAvailable: true, card: null },
  { noCell: 3, isAvailable: true, card: null },
  { noCell: 4, isAvailable: true, card: null },
  { noCell: 5, isAvailable: true, card: null },
  { noCell: 6, isAvailable: true, card: null },
  { noCell: 7, isAvailable: true, card: null },
  { noCell: 8, isAvailable: true, card: null },
  { noCell: 9, isAvailable: true, card: null },
];

let player = "X";

const combinacion1 = [0, 1, 2];
const combinacion2 = [3, 4, 5];
const combinacion3 = [6, 7, 8];

const combinacion4 = [0, 3, 6];
const combinacion5 = [1, 4, 7];
const combinacion6 = [2, 5, 8];

const combinacion7 = [0, 4, 8];
const combinacion8 = [2, 4, 6];

const combinations = [
  combinacion1,
  combinacion2,
  combinacion3,
  combinacion4,
  combinacion5,
  combinacion6,
  combinacion7,
  combinacion8,
];

const validateCombination = (combination) => {
  const row = [];
  console.log(combination);
  combination.forEach((element) => {
    const cell = cellsInfo[element];
    const player = cell.card;
    row.push(player);
  });
  console.log("estos son los jugadores de la row: ", row);
  if (row[0] === row[1] && row[1] === row[2]) {
    return row[0];
  } else {
    return null;
  }
};

const isTheWinner = () => {
  let ganador = null;
  combinations.forEach((combination) => {
    const evaluacion = validateCombination(combination);
    if (evaluacion != null) {
      ganador = evaluacion;
      console.log("gan este player: ", ganador);
    }
  });
  return ganador;
};

const clickCell = (event) => {
  if (cellsInfo[event.target.id - 1].isAvailable) {
    event.target.innerText = player;
    cellsInfo[event.target.id - 1].card = player;
    cellsInfo[event.target.id - 1].isAvailable = false;
    player = player == "X" ? "O" : "X";
    const ganador = isTheWinner();
    console.log("este es el ganador", ganador);
    if (ganador != undefined) {
      alert("Gano el player " + ganador);
    }
  }

  console.log(cellsInfo);
};

const htmlCells = Array.from(document.getElementsByTagName("td"));
htmlCells.forEach((element) => {
  element.addEventListener("click", clickCell);
});
