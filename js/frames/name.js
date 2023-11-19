// lettre I
function initializeLetterI(grid, x = ABS-3, y = ORD-5) {
  grid[x+10][y+10] = 1;
  grid[x+10][y+11] = 1;
  grid[x+11][y+10] = 1;
  grid[x+11][y+13] = 1;
  grid[x+12][y+13] = 1;
  grid[x+12][y+12] = 1;

  grid[x+11][y+17] = 1;
  grid[x+12][y+18] = 1;
  grid[x+12][y+19] = 1;
  grid[x+11][y+20] = 1;
  grid[x+10][y+19] = 1;
  grid[x+10][y+18] = 1;

  grid[x+10][y+24] = 1;
  grid[x+10][y+25] = 1;
  grid[x+11][y+24] = 1;
  grid[x+11][y+27] = 1;
  grid[x+12][y+27] = 1;
  grid[x+12][y+26] = 1;

  grid[x+16][y+20] = 1;
  grid[x+16][y+19] = 1;
  grid[x+17][y+20] = 1;
  grid[x+17][y+18] = 1;
  grid[x+18][y+19] = 1;

  grid[x+24][y+17] = 1;
  grid[x+22][y+18] = 1;
  grid[x+23][y+17] = 1;
  grid[x+24][y+18] = 1;
  grid[x+23][y+19] = 1;

  grid[x+28][y+18] = 1;
  grid[x+28][y+19] = 1;
  grid[x+29][y+20] = 1;
  grid[x+29][y+17] = 1;
  grid[x+30][y+18] = 1;
  grid[x+30][y+19] = 1;

  grid[x+34][y+18] = 1;
  grid[x+34][y+17] = 1;
  grid[x+35][y+17] = 1;
  grid[x+36][y+18] = 1;
  grid[x+35][y+19] = 1;

  grid[x+40][y+19] = 1;
  grid[x+41][y+18] = 1;
  grid[x+41][y+20] = 1;
  grid[x+42][y+20] = 1;
  grid[x+42][y+19] = 1;

  grid[x+47][y+17] = 1;
  grid[x+46][y+18] = 1;
  grid[x+46][y+19] = 1;
  grid[x+47][y+20] = 1;
  grid[x+48][y+19] = 1;
  grid[x+48][y+18] = 1;

  grid[x+46][y+10] = 1;
  grid[x+46][y+11] = 1;
  grid[x+47][y+10] = 1;
  grid[x+47][y+13] = 1;
  grid[x+48][y+13] = 1;
  grid[x+48][y+12] = 1;
  
  grid[x+46][y+24] = 1;
  grid[x+46][y+25] = 1;
  grid[x+47][y+24] = 1;
  grid[x+47][y+27] = 1;
  grid[x+48][y+27] = 1;
  grid[x+48][y+26] = 1;  
}

// lettre N
function initializeLetterN(grid, x = ABS-3, y = ORD-5) {
  //grid[ROWS/2][COLS/2] = 1;
  grid[x+30][y+52] = 1;
  grid[x+30][y+53] = 1;
  grid[x+31][y+52] = 1;
  grid[x+31][y+53] = 1;
  
  //left
  grid[x+48][y+34] = 1;
  grid[x+48][y+36] = 1;
  grid[x+47][y+34] = 1;
  grid[x+47][y+35] = 1;
  grid[x+47][y+37] = 1;
  grid[x+48][y+37] = 1;

  grid[x+42][y+37] = 1;
  grid[x+42][y+36] = 1;
  grid[x+41][y+37] = 1;
  grid[x+41][y+34] = 1;
  grid[x+40][y+34] = 1;
  grid[x+40][y+35] = 1;

  grid[x+36][y+35] = 1;
  grid[x+36][y+34] = 1;
  grid[x+35][y+34] = 1;
  grid[x+35][y+37] = 1;
  grid[x+34][y+37] = 1;
  grid[x+34][y+36] = 1;

  grid[x+30][y+37] = 1;
  grid[x+30][y+36] = 1;
  grid[x+29][y+37] = 1;
  grid[x+30][y+34] = 1;
  grid[x+29][y+34] = 1;
  grid[x+29][y+35] = 1;
  
  grid[x+24][y+35] = 1;
  grid[x+24][y+34] = 1;
  grid[x+23][y+34] = 1;
  grid[x+23][y+37] = 1;
  grid[x+22][y+37] = 1;
  grid[x+22][y+36] = 1;

  //right
  grid[x+10][y+70] = 1;
  grid[x+10][y+69] = 1;
  grid[x+11][y+70] = 1;
  grid[x+11][y+68] = 1;
  grid[x+11][y+67] = 1;
  grid[x+10][y+67] = 1;

  grid[x+16][y+67] = 1;
  grid[x+16][y+68] = 1;
  grid[x+17][y+67] = 1;
  grid[x+17][y+70] = 1;
  grid[x+18][y+70] = 1;
  grid[x+18][y+69] = 1;

  grid[x+22][y+69] = 1;
  grid[x+22][y+70] = 1;
  grid[x+23][y+70] = 1;
  grid[x+23][y+67] = 1;
  grid[x+24][y+67] = 1;
  grid[x+24][y+68] = 1;

  grid[x+29][y+67] = 1;
  grid[x+29][y+68] = 1;
  grid[x+30][y+67] = 1;
  grid[x+30][y+70] = 1;
  grid[x+30][y+69] = 1;
  grid[x+29][y+70] = 1;

  grid[x+35][y+69] = 1;
  grid[x+35][y+70] = 1;
  grid[x+36][y+70] = 1;
  grid[x+36][y+67] = 1;
  grid[x+37][y+67] = 1;
  grid[x+37][y+68] = 1;
}

// lettre S
function initializeLetterS(grid, x = ABS-3, y = ORD-5) {
  grid[x+48][y+77] = 1;
  grid[x+48][y+78] = 1;
  grid[x+47][y+77] = 1;
  grid[x+47][y+80] = 1;
  grid[x+46][y+80] = 1;
  grid[x+46][y+79] = 1;

  grid[x+48][y+84] = 1;
  grid[x+48][y+85] = 1;
  grid[x+47][y+84] = 1;
  grid[x+47][y+87] = 1;
  grid[x+46][y+87] = 1;
  grid[x+46][y+86] = 1;

  grid[x+48][y+91] = 1;
  grid[x+48][y+92] = 1;
  grid[x+47][y+91] = 1;
  grid[x+47][y+94] = 1;
  grid[x+46][y+94] = 1;
  grid[x+46][y+93] = 1;

  grid[x+42][y+94] = 1;
  grid[x+42][y+93] = 1;
  grid[x+41][y+94] = 1;
  grid[x+41][y+91] = 1;
  grid[x+40][y+91] = 1;
  grid[x+40][y+92] = 1;

  grid[x+36][y+92] = 1;
  grid[x+36][y+91] = 1;
  grid[x+35][y+92] = 1;
  grid[x+35][y+89] = 1;
  grid[x+34][y+89] = 1;
  grid[x+34][y+90] = 1;

  grid[x+30][y+84] = 1;
  grid[x+30][y+85] = 1;
  grid[x+29][y+84] = 1;
  grid[x+29][y+87] = 1;
  grid[x+28][y+87] = 1;
  grid[x+28][y+86] = 1;

  grid[x+24][y+79] = 1;
  grid[x+24][y+80] = 1;
  grid[x+23][y+79] = 1;
  grid[x+23][y+82] = 1;
  grid[x+22][y+82] = 1;
  grid[x+22][y+81] = 1;

  grid[x+18][y+77] = 1;
  grid[x+18][y+78] = 1;
  grid[x+17][y+77] = 1;
  grid[x+17][y+80] = 1;
  grid[x+16][y+80] = 1;
  grid[x+16][y+79] = 1;

  grid[x+10][y+77] = 1;
  grid[x+10][y+78] = 1;
  grid[x+11][y+77] = 1;
  grid[x+11][y+80] = 1;
  grid[x+12][y+80] = 1;
  grid[x+12][y+79] = 1;

  grid[x+10][y+84] = 1;
  grid[x+10][y+85] = 1;
  grid[x+11][y+84] = 1;
  grid[x+11][y+87] = 1;
  grid[x+12][y+87] = 1;
  grid[x+12][y+86] = 1;
  
  grid[x+10][y+91] = 1;
  grid[x+10][y+92] = 1;
  grid[x+11][y+91] = 1;
  grid[x+11][y+94] = 1;
  grid[x+12][y+94] = 1;
  grid[x+12][y+93] = 1;

  grid[x+40][y+81] = 1;
  grid[x+40][y+82] = 1;
  grid[x+40][y+83] = 1;

  grid[x+18][y+88] = 1;
  grid[x+18][y+89] = 1;
  grid[x+18][y+90] = 1;
}

// canon à planeurs
function initializeCanonPlaneurs(grid, x = ABS-15, y = ORD-12) {
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
}

function initializeEaterGrid(grid, x = ABS-3, y = ORD-8){
  grid[x+45][y+70] = 1;
  grid[x+45][y+71] = 1;
  grid[x+46][y+70] = 1;
  grid[x+47][y+71] = 1;
  grid[x+47][y+72] = 1;
  grid[x+47][y+73] = 1;
  grid[x+48][y+73] = 1;
}

export {initializeCanonPlaneurs, initializeEaterGrid, initializeLetterI, initializeLetterN, initializeLetterS }