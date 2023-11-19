function line(grid, x, y){
  grid[x][y] = 1;
  grid[x+1][y] = 1;
  grid[x+2][y] = 1;
  grid[x+3][y] = 1;
  grid[x+4][y] = 1;
  grid[x+5][y] = 1;
  grid[x+6][y] = 1;
  grid[x+7][y] = 1;
  grid[x+8][y] = 1;
  grid[x+9][y] = 1;
  grid[x+10][y] = 1;
  grid[x+11][y] = 1;
  grid[x+12][y] = 1;
  grid[x+13][y] = 1;
  grid[x+14][y] = 1;
  grid[x+15][y] = 1;
  grid[x+16][y] = 1;
  grid[x+17][y] = 1;
  grid[x+18][y] = 1;
  grid[x+19][y] = 1;
  grid[x+20][y] = 1;
  grid[x+21][y] = 1;
  grid[x+22][y] = 1;
  grid[x+23][y] = 1;
  grid[x+24][y] = 1;
  grid[x+25][y] = 1;
  grid[x+26][y] = 1;
  grid[x+27][y] = 1;
  grid[x+28][y] = 1;
  grid[x+29][y] = 1;
  grid[x+30][y] = 1;
  grid[x+31][y] = 1;
  grid[x+32][y] = 1;
  grid[x+33][y] = 1;
  grid[x+34][y] = 1;
  grid[x+35][y] = 1;
  grid[x+36][y] = 1;
  grid[x+37][y] = 1;
  grid[x+38][y] = 1;
  grid[x+39][y] = 1;
  grid[x+40][y] = 1;
  
  return grid;
}

function canonPlanneurs(grid, x, y) {
  grid[x+10][y+10] = 1;
  grid[x+10][y+11] = 1;
  grid[x+11][y+10] = 1;
  grid[x+11][y+11] = 1;
  grid[x+10][y+20] = 1;
  grid[x+11][y+20] = 1;
  grid[x+12][y+20] = 1;
  grid[x+9][y+21] = 1;
  grid[x+13][y+21] = 1;
  grid[x+8][y+22] = 1;
  grid[x+14][y+22] = 1;
  grid[x+8][y+23] = 1;
  grid[x+14][y+23] = 1;
  grid[x+11][y+24] = 1;
  grid[x+9][y+25] = 1;
  grid[x+13][y+25] = 1;
  grid[x+10][y+26] = 1;
  grid[x+11][y+26] = 1;
  grid[x+12][y+26] = 1;
  grid[x+11][y+27] = 1;
  grid[x+8][y+30] = 1;
  grid[x+9][y+30] = 1;
  grid[x+10][y+30] = 1;
  grid[x+8][y+31] = 1;
  grid[x+9][y+31] = 1;
  grid[x+10][y+31] = 1;
  grid[x+7][y+32] = 1;
  grid[x+11][y+32] = 1;
  grid[x+6][y+34] = 1;
  grid[x+7][y+34] = 1;
  grid[x+11][y+34] = 1;
  grid[x+12][y+34] = 1;
  grid[x+8][y+44] = 1;
  grid[x+9][y+44] = 1;
  grid[x+8][y+45] = 1;
  grid[x+9][y+45] = 1;

  return grid;
}

function heart(grid, x, y){

  grid[x][y] = 1;
  grid[x][y+1] = 1;
  grid[x+1][y] = 1;
  grid[x+1][y+1] = 1;
  grid[x+2][y] = 1;
  grid[x+2][y+1] = 1;
  grid[x+3][y] = 1;
  grid[x+3][y+1] = 1;
  grid[x+4][y] = 1;
  grid[x+4][y+1] = 1;
  grid[x+5][y] = 1;
  grid[x+5][y+1] = 1;
  grid[x+5][y+2] = 1;
  grid[x+5][y+3] = 1;
  grid[x+5][y+4] = 1;
  grid[x+5][y+5] = 1;
  grid[x+5][y+6] = 1;
  grid[x+4][y+6] = 1;
  grid[x+4][y+5] = 1;
  grid[x+3][y+5] = 1;
  grid[x+3][y+6] = 1;
  grid[x+2][y+6] = 1;
  grid[x+2][y+5] = 1;
  grid[x+1][y+5] = 1;
  grid[x+1][y+6] = 1;
  grid[x][y+6] = 1;
  grid[x][y+5] = 1;

  return grid;
}

function animInfinie(grid, x, y){

  grid[x][y+1]=1;
  grid[x+1][y]=1;
  grid[x+1][y+2]=1;
  grid[x+2][y]=1;
  grid[x+2][y+1]=1;

  grid[x+6][y+1]=1;
  grid[x+6][y+2]=1;
  grid[x+7][y]=1;
  grid[x+7][y+3]=1;
  grid[x+8][y+1]=1;
  grid[x+8][y+2]=1;
  grid[x+7][y+1]=1;

  grid[x+12][y]=1;
  grid[x+12][y+1]=1;
  grid[x+13][y]=1;
  grid[x+13][y+2]=1;
  grid[x+14][y+1]=1;


  return grid;
}  

function animFinie(grid, x, y){
  grid[x][y]=1;
  grid[x][y+1]=1;
  grid[x][y+2]=1;
  grid[x][y+4]=1;
  grid[x][y+5]=1;
  grid[x][y+6]=1;
  grid[x+1][y+3]=1;
  grid[x+2][y+3]=1;

  return grid;
}

function planeurBottomRight(grid, x, y){
  grid[x][y+1]=1;
  grid[x+1][y+2]=1;
  grid[x+2][y]=1;
  grid[x+2][y+1]=1;
  grid[x+2][y+2]=1;

  return grid;
}

function planneurTopLeft(grid, x, y){
  grid[x][y]=1;
  grid[x][y+1]=1;
  grid[x][y+2]=1;
  grid[x+1][y]=1;
  grid[x+2][y+1]=1;

  return grid;
}

function plannneurTopRight(grid, x, y){
  grid[x][y]=1;
  grid[x][y+1]=1;
  grid[x][y+2]=1;
  grid[x+1][y+2]=1;
  grid[x+2][y+1]=1;

  return grid;
}

function planeurBottomLeft(grid, x, y){
  grid[x][y+1]=1;
  grid[x+1][y]=1;
  grid[x+2][y]=1;
  grid[x+2][y+1]=1;
  grid[x+2][y+2]=1;

  return grid;
}

function HWSS(grid, x, y){
  grid[x][y]=1;
  grid[x][y+3]=1;
  grid[x+1][y+4]=1;
  grid[x+2][y]=1;
  grid[x+2][y+4]=1;
  grid[x+3][y+1]=1;
  grid[x+3][y+2]=1;
  grid[x+3][y+3]=1;
  grid[x+3][y+4]=1;

  return grid;
}

function eater(grid, x, y){
  grid[x][y]=1;
  grid[x][y+1]=1;
  grid[x+1][y]=1;

  grid[x+2][y+1]=1;
  grid[x+2][y+2]=1;
  grid[x+2][y+3]=1;
  grid[x+3][y+3]=1;

  return grid;
}

function bloc(grid, x, y){
  grid[x][y]=1;
  grid[x][y+1]=1;
  grid[x+1][y]=1;
  grid[x+1][y+1]=1;

  return grid;
}

function turnSignal(grid, x, y){
  grid[x][y]=1;
  grid[x][y+1]=1;
  grid[x][y+2]=1;

  return grid;
}

function phare(grid, x, y){
  grid[x][y]=1;
  grid[x][y+1]=1;
  grid[x+1][y]=1;
  grid[x+1][y+1]=1;

  grid[x+2][y+2]=1;
  grid[x+2][y+3]=1;
  grid[x+3][y+2]=1;
  grid[x+3][y+3]=1;

  return grid;
}

function defaultGrid(grid, x, y) { return grid[0][0] = 1}

function getPattern(pattern){
  switch(pattern){
    case 'line-animation':
      return line;
    case 'canon-planneurs':
      return canonPlanneurs;
    case 'heart':
      return heart;
    case 'anim-inifinie':
      return animInfinie;
    case 'anim-finie' :
      return animFinie;
    case 'planeur-bottom-right':
      return planeurBottomRight;
    case 'planeur-top-left':
      return planneurTopLeft;
    case 'planeur-top-right':
      return plannneurTopRight;
    case 'planeur-bottom-left':
      return planeurBottomLeft;
    case 'hwss':
      return HWSS;
    case 'eater':
      return eater;
    case 'bloc':
      return bloc;
    case 'turn-signal':
      return turnSignal;
    case 'phare':
      return phare;
    default:
      return defaultGrid;
  }
}


export{ getPattern }