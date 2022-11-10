const getCell = (index) => document.getElementById(index);

let cellsInfo = [
  { cell: null, isAvailable: true, player: null },
  { cell: null, isAvailable: true, player: null },
  { cell: null, isAvailable: true, player: null },
  { cell: null, isAvailable: true, player: null },
  { cell: null, isAvailable: true, player: null },
  { cell: null, isAvailable: true, player: null },
  { cell: null, isAvailable: true, player: null },
  { cell: null, isAvailable: true, player: null },
  { cell: null, isAvailable: true, player: null },
];

cellsInfo = cellsInfo.map((elmento, index) => {
  //se obtiene el elemento html (celda) por medio de su id
  elmento.cell = getCell(index + 1);
  elmento.cell.addEventListener("click", () => {
    //cuando la celda esta disponible
    if (elmento.isAvailable) {
      //asumimos que el primer turno es del jugador 1
      elmento.cell.innerText = "X";
      elmento.player = 1;
    }
  });
  return elmento;
});

console.log(cellsInfo);
