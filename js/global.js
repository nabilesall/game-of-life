import { createEmptyGrid, 
  displayGrid, 
  updateGrid, 
  handleZoom, 
  handleMouseDrag,
  getRegeneratedCount,
  resetRegeneratedCount
} from './functions.js';

import { ROWS, 
  COLS, 
  CELL_SIZE 
} from './constantes.js';

import { initializeRandomGrid, 
  initializeRandomGrid2, 
  initializeWithRandomGrid 
} from './frames/randomGame.js';

import { initializeLetterI,
  initializeLetterN,
  initializeLetterS,
  initializeCanonPlaneurs,
  initializeEaterGrid
} from './frames/name.js';

import { getPattern } from './frames/patterns.js';

const CANVAS = document.getElementById('canvasGame');
const MODAL_GAME = document.getElementById('modalGame');
const CLOSE_MODAL_BUTTON = document.getElementById('closeModale');
const RESET_BUTTON = document.getElementById('reset-game');
const LOADING = document.querySelector('.loadingspinner');
const NAVIGATION_BUTTONS = document.querySelectorAll('.navigation-button');
const SELECT_PATTERN = document.getElementById('selectPattern');
const RUN_STOP_CB = document.getElementById('run-stop');
const RANGE_VITESSE = document.getElementById('range-vitesse');
const VITESS_TEXTE = document.querySelector('.range-slidervalue');

let grid = createEmptyGrid();
let zoom = 1.4;
let offsetX = (CANVAS.width / (CELL_SIZE * zoom) - COLS) / 2;
let offsetY = (CANVAS.height / (CELL_SIZE * zoom) - ROWS) / 2;

const ABS = Math.floor(-offsetY);
const ORD = Math.floor(-offsetX);



function initializerName(){
  initializeLetterI(grid,ABS-3,ORD-5);
  initializeLetterN(grid,ABS-3,ORD-5);
  initializeLetterS(grid,ABS-3,ORD-5);
  initializeEaterGrid(grid,ABS-3,ORD-8);
  initializeCanonPlaneurs(grid, ABS-15, ORD-12);
}

function initializerRandom(grid){
  initializeRandomGrid(grid, ABS+25, ORD+45);
  initializeRandomGrid2(grid, ABS+40, ORD);
  initializeWithRandomGrid(grid, ABS+5, ORD+5);
}

function handleZoomWrapper(e){
  zoom = handleZoom(e,zoom);
}

function handleMouseDragWrapper(e){
  const result = handleMouseDrag(e,CANVAS,zoom,offsetX,offsetY);
  if(result === undefined) return;
  offsetX = result.offsetX;
  offsetY = result.offsetY;
}


// Add or remove cells on mouse click
function handleMouseClick(e) {
  const mouseX = e.clientX - CANVAS.getBoundingClientRect().left;
  const mouseY = e.clientY - CANVAS.getBoundingClientRect().top;

  const clickedRow = Math.floor((mouseY / (CELL_SIZE * zoom)) - offsetY);
  const clickedCol = Math.floor((mouseX / (CELL_SIZE * zoom)) - offsetX);

  if (
    clickedRow >= 0 &&
    clickedCol >= 0 &&
    clickedRow < ROWS &&
    clickedCol < COLS
  ) {
    grid[clickedRow][clickedCol] = 1 - grid[clickedRow][clickedCol];
    displayGrid(grid, CANVAS, zoom,offsetX,offsetY)  
  }
}


// Draw or clear cells on mouse hover
function handleMouseHover(e) {
  
  const isShiftPressed = e.shiftKey;
  const isAltPressed = e.altKey;
  if (isShiftPressed || isAltPressed) {
    const mouseX = e.clientX - CANVAS. getBoundingClientRect().left;
    const mouseY = e.clientY - CANVAS. getBoundingClientRect().top;

    const gridX = Math.floor(mouseX / (CELL_SIZE * zoom)) - Math.floor(offsetX);
    const gridY = Math.floor(mouseY / (CELL_SIZE * zoom)) - Math.floor(offsetY);

    if (
      gridX >= 0 &&
      gridY >= 0 &&
      gridX < COLS &&
      gridY < ROWS
    ) {
      grid[gridY-1][gridX-1] = isAltPressed ? 0 : 1;
      displayGrid(grid, CANVAS, zoom,offsetX,offsetY)  
    }
  }
}


CANVAS.addEventListener('click', handleMouseClick);
CANVAS.addEventListener('mousemove', handleMouseHover);
CANVAS.addEventListener('contextmenu', function(e) {
  e.preventDefault();
  handleRightClick(e);
});


function handleRightClick(e) {
  const mouseX = e.clientX - CANVAS.getBoundingClientRect().left;
  const mouseY = e.clientY - CANVAS.getBoundingClientRect().top;

  const clickedRow = Math.floor((mouseY / (CELL_SIZE * zoom)) - offsetY);
  const clickedCol = Math.floor((mouseX / (CELL_SIZE * zoom)) - offsetX);

  if (
    clickedRow >= 0 &&
    clickedCol >= 0 &&
    clickedRow < ROWS &&
    clickedCol < COLS
  ) {

    SELECT_PATTERN.classList.add('show-select-pattern');
    // select position
    SELECT_PATTERN.style.left = `${mouseX+140}px`;
    SELECT_PATTERN.style.top = `${mouseY+40}px`;

    const changeHandler = function() {
      const selectedValue = SELECT_PATTERN.value;
      let pattern = getPattern(selectedValue);
      grid = pattern(grid, clickedRow, clickedCol);
      displayGrid(grid, CANVAS, zoom, offsetX, offsetY);
      SELECT_PATTERN.classList.remove('show-select-pattern');
      SELECT_PATTERN.value = 'default';

      SELECT_PATTERN.removeEventListener('change', changeHandler);
    };

    SELECT_PATTERN.addEventListener('change', changeHandler);
  }
}

CLOSE_MODAL_BUTTON.addEventListener('click', function() {
  MODAL_GAME.classList.remove('show-modal');
  MODAL_GAME.classList.add('hide-modal');
  CANVAS.classList.remove('hide-canvas');
  CANVAS.classList.add('show-canvas');
});

function runGame() {

  initializerName();

  NAVIGATION_BUTTONS.forEach(button => {
    button.addEventListener('click', function() {
      grid = createEmptyGrid();
      const frameName = button.getAttribute('frame-name');
      frameName === 'my-name' ? initializerName() : initializerRandom(grid);
      displayGrid(grid, CANVAS,zoom,offsetX,offsetY);      
    });
  });
  
  let isRunning = false;

  function loop(){
    if(isRunning){
      grid = updateGrid(grid);
      displayGrid(grid, CANVAS,zoom,offsetX,offsetY);
    }
    //requestAnimationFrame(loop);
  }
  
  RANGE_VITESSE.addEventListener('input', function() {
    let vitesse = this.value;
    VITESS_TEXTE.innerHTML = `${vitesse}X`;
    
    clearInterval(intervalId);
    intervalId = setInterval(loop, 450 - vitesse);
  });

  let intervalId = setInterval(loop, 450 - RANGE_VITESSE.value);

  RUN_STOP_CB.addEventListener('change', function() {
    isRunning = this.checked;
  });
  
  RESET_BUTTON.addEventListener('click', function() {
    grid = createEmptyGrid();
    displayGrid(grid, CANVAS,zoom,offsetX,offsetY);
    RUN_STOP_CB.checked = false;
    isRunning = false;
  });
  
  displayGrid(grid, CANVAS,zoom,offsetX,offsetY);

  CANVAS.addEventListener('wheel', handleZoomWrapper);
  CANVAS.addEventListener('mousemove', handleMouseDragWrapper);
}

runGame();

window.addEventListener('load', function(){
  this.setTimeout(function(){
    LOADING.classList.add('hide-loading'); 
    MODAL_GAME.classList.remove('hide-modal');
    MODAL_GAME.classList.add('show-modal');
    // CANVAS.classList.remove('hide-canvas');
    // CANVAS.classList.add('show-canvas');
    //CANVAS.classList.remove('show-canvas');
  }, 1000);
});


//shortcut
onkeyup = function(e) {
  // Espace pour mettre en pause
  if (e.code === "Space") {
    RUN_STOP_CB.click();
  }

  // r for reset
  if (e.code === "KeyR") {
    RESET_BUTTON.click();
  }

  // - for decrease the speed
  if (e.code === "ArrowDown" || e.code === 'NumpadSubtract') {
    RANGE_VITESSE.value = parseInt(RANGE_VITESSE.value, 10) - 10;
    RANGE_VITESSE.dispatchEvent(new Event('input'));
  }

  // + for increase the speed
  if (e.code === "ArrowUp" || e.code === 'NumpadAdd') {
    RANGE_VITESSE.value = parseInt(RANGE_VITESSE.value, 10) + 10;
    RANGE_VITESSE.dispatchEvent(new Event('input'));
  }

  //suppr for delete select pattern
  if (e.code === "Delete") {
    SELECT_PATTERN.classList.remove('show-select-pattern');
  }

  //i for info-modal
  if(e.code === 'KeyI'){
    MODAL_GAME.classList.remove('hide-modal');
    MODAL_GAME.classList.add('show-modal');
    CANVAS.classList.add('hide-canvas');
  }
};
