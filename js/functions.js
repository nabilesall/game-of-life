import { ROWS, COLS, CELL_SIZE, COLORS } from './constantes.js';

let regeneratedCount = 0;

function createEmptyGrid() {
  return Array.from({ length: ROWS }, () => Array(COLS).fill(0));
}


function displayGrid(grid, canvas,zoom,offsetX,offsetY) {
  let context = canvas.getContext('2d');
  context.clearRect(0, 0, canvas.width, canvas.height);

  grid.forEach((row, i) => {
    row.forEach((cell,j) =>{
      const x =(j+offsetX)*CELL_SIZE*zoom;
      const y =(i+offsetY)*CELL_SIZE*zoom;

      context.fillStyle = cell === 1 ? COLORS[Math.floor(Math.random() * COLORS.length)] : '#fff';
      context.fillRect(x, y, CELL_SIZE*zoom, CELL_SIZE*zoom);
      context.strokeRect(x, y, CELL_SIZE*zoom, CELL_SIZE*zoom);    

    });
  });
  // grid.forEach((row, i) => {
  //   row.forEach((cell, j) => {
  //     const x = (j + offsetX) * CELL_SIZE * zoom + CELL_SIZE * zoom / 2;
  //     const y = (i + offsetY) * CELL_SIZE * zoom + CELL_SIZE * zoom / 2;

  //     context.fillStyle = cell === 1 ? COLORS[Math.floor(Math.random() * COLORS.length)] : '#fff';
  //     context.beginPath();
  //     context.arc(x, y, CELL_SIZE * zoom / 2, 0, 2 * Math.PI);
  //     context.fill();
  //     context.stroke();
  //   });
  // });
}


function updateGrid(grid) {
  const newGrid = createEmptyGrid();
  
  for (let i = 0; i < ROWS; i++) {
    for (let j = 0; j < COLS; j++) {
      const neighbors = countNeighbors(grid, i, j);
      if (grid[i][j] === 1) {
        newGrid[i][j] = (neighbors === 2 || neighbors === 3) ? 1 : 0;
      }
      else {
        newGrid[i][j] = (neighbors === 3) ? 1 : 0;
        regeneratedCount++;
      }
    }
  }
  return newGrid;
}

//let regeneratedCount = 0;

// function updateGrid(grid, previousGrid) {
//   const newGrid = createEmptyGrid();

//   for (let i = 0; i < ROWS; i++) {
//     for (let j = 0; j < COLS; j++) {
//       const neighbors = countNeighbors(previousGrid, i, j);
//       if (previousGrid[i][j] === 1) {
//         newGrid[i][j] = (neighbors === 2 || neighbors === 3) ? 1 : 0;
//       } else {
//         newGrid[i][j] = (neighbors === 3) ? 1 : 0;

//         // Si une cellule est régénérée, incrémenter le compteur
//         if (previousGrid[i][j] !== newGrid[i][j]) {
//           regeneratedCount++;
//         }
//       }
//     }
//   }
//   return newGrid;
// }


function countNeighbors(grid, x, y) {
  let count = 0;
  
  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      const row = x + i;
      const col = y + j;
      if (row >= 0 && col >= 0 && row < ROWS && col < COLS) {
        count += grid[row][col];
      }
    }
  }
  // remove the cell we are checking
  count -= grid[x][y];
  return count;
}


function handleZoom(e,zoom){
  if (e.deltaY < 0) {
    zoom *= 1.1; // Zoom in
  } else {
    zoom /= 1.1; // Zoom out
  }
  
  if (zoom < 1.3) zoom = 1.3; // Minimum zoom
  if (zoom > 7) zoom = 7; // Maximum zoom
  return zoom;
}


function handleMouseDrag(e,canvas, zoom,offsetX,offsetY){
  if (e.buttons === 1) {
    offsetX += e.movementX / (CELL_SIZE * zoom);
    offsetY += e.movementY / (CELL_SIZE * zoom);

    if(offsetX > 0) offsetX = 0;
    if(offsetY > 0) offsetY = 0;

    const maxOffsetX = COLS - (canvas.width / (CELL_SIZE * zoom));
    const maxOffsetY = ROWS - (canvas.height / (CELL_SIZE * zoom));
    
    if(offsetX < -maxOffsetX) offsetX = -maxOffsetX;
    if(offsetY < -maxOffsetY) offsetY = -maxOffsetY;

    return {offsetX,offsetY};
  }
}

function resetRegeneratedCount() {
  regeneratedCount = 0;
}

function getRegeneratedCount() {
  return regeneratedCount;
}

export { createEmptyGrid, displayGrid, updateGrid, handleZoom, handleMouseDrag, resetRegeneratedCount, getRegeneratedCount };