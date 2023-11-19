function initializeRandomGrid(grid, x = 25+ABS, y = 45+ORD) {
  grid[x][y] = 1;
  grid[x][y + 1] = 1;
  grid[x + 1][y] = 1;
  grid[x + 1][y + 1] = 1;
  grid[x][y + 10] = 1;
  grid[x + 1][y + 10] = 1;
  grid[x + 2][y + 10] = 1;
  grid[x - 1][y + 11] = 1;
  grid[x + 3][y + 11] = 1;
  grid[x - 2][y + 12] = 1;
  grid[x + 4][y + 12] = 1;
  grid[x - 2][y + 13] = 1;
  grid[x + 4][y + 13] = 1;
  grid[x + 1][y + 14] = 1;
  grid[x - 1][y + 15] = 1;
  grid[x + 3][y + 15] = 1;
  grid[x][y + 16] = 1;
  grid[x + 1][y + 16] = 1;
  grid[x + 2][y + 16] = 1;
  grid[x + 1][y + 17] = 1;
  grid[x + 20][y] = 1;
  grid[x + 21][y - 1] = 1;
  grid[x + 21][y + 1] = 1;
  grid[x + 22][y] = 1;
  grid[x + 22][y - 1] = 1;
}

function initializeRandomGrid2(grid, x = 40+ABS, y = ORD) {
  grid[x][y] = 1;
  grid[x][y + 1] = 1;
  grid[x + 1][y] = 1;
  grid[x + 1][y + 1] = 1;
  grid[x][y + 10] = 1;
  grid[x + 1][y + 10] = 1;
  grid[x + 2][y + 10] = 1;
  grid[x - 1][y + 11] = 1;
  grid[x + 3][y + 11] = 1;
  grid[x - 2][y + 12] = 1;
  grid[x + 4][y + 12] = 1;
  grid[x - 2][y + 13] = 1;
  grid[x + 4][y + 13] = 1;
  grid[x + 1][y + 14] = 1;
  grid[x - 1][y + 15] = 1;
  grid[x + 3][y + 15] = 1;
  grid[x][y + 16] = 1;
  grid[x + 1][y + 16] = 1;
  grid[x + 2][y + 16] = 1;
  grid[x + 1][y + 17] = 1;
  grid[x + 20][y] = 1;
  grid[x + 21][y - 1] = 1;
  grid[x + 21][y + 1] = 1;
  grid[x + 22][y] = 1;
  grid[x + 22][y - 1] = 1;
}

function initializeWithRandomGrid(grid, x = 5+ABS, y = 5+ORD) {
  for (let i = 0; i < 800; i++) {
    grid[x + Math.floor(Math.random() * 45)][y + Math.floor(Math.random() * 80)] = 1;
  }
}

export {initializeWithRandomGrid,initializeRandomGrid,initializeRandomGrid2}