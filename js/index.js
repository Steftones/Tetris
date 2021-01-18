const theScore = document.getElementById('the-score')
const theLevel = document.getElementById('the-level')
const nextPiece = Array.from(document.getElementsByClassName('next-piece'))

const gameState = {
  score: 0,
  level: 1,
  levelSpeed: 650,
  isRunning: true,
  scoreUp(){
    this.score++
    if (this.score % 10 === 0){
      this.level++
      this.levelSpeed -= 50
      clearInterval(intervalId)
      timedEvent(this.levelSpeed)
    }
    theScore.innerHTML = `SCORE: ${this.score}`
    theLevel.innerHTML = `LEVEL: ${this.level}`
  }
}

let intervalId
function timedEvent(time){
  console.log('timer started')
  intervalId = setInterval(() => {
    moveDown()
    drawBoard()
    for (let i = 3; i <= 12; i++){ // check, doesn't seem to work 100%
      if (board[3][i] === 1){
        clearInterval(intervalId)
        alert('Game over! You scored ' + gameState.score)
        gameState.isRunning = false
        return
      }
    }
  }, time)
}

const cleanBoard = [
  [1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1], // obscured from user // 15
  [1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1], // obscured from user
  [1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1], // obscured from user
  [1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1],
  [1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1], 
  [1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1],
  [1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1],
  [1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1],
  [1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1],
  [1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1], 
  [1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1], // 10
  [1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1],
  [1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1],
  [1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1],
  [1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1],
  [1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1],
  [1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1],
  [1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1],
  [1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1],
  [1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1],
  [1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1],
  [1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1],
  [1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1] // 25
]  

let board = [
  [1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1],
  [1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1],
  [1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1],
  [1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1],
  [1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1], 
  [1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1],
  [1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1],
  [1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1],
  [1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1],
  [1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1], 
  [1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1], // 10
  [1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1],
  [1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1],
  [1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1],
  [1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1],
  [1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1],
  [1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1],
  [1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1],
  [1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1],
  [1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1],
  [1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1], // 3 lines of random mess need to be created
  [1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1], // 3 lines of random mess need to be created
  [1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1], // 3 lines of random mess need to be created
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
]  

const pieces = {
  currentPiece: [],
  J: [
    [0,0,0],
    [8,0,0],
    [8,8,8]
  ],
  L: [
    [0,0,0],
    [0,0,8],
    [8,8,8]
  ],
  T: [
    [0,0,0],
    [0,8,0],
    [8,8,8]
  ],
  Z: [
    [0,0,0],
    [8,8,0],
    [0,8,8]
  ],
  S: [
    [0,0,0],
    [0,8,8],
    [8,8,0]
  ],
  O: [
    [0,0,0],
    [8,8,0],
    [8,8,0]
  ],
  I: [
    [0,0,0,0],
    [8,8,8,8],
    [0,0,0,0],
    [0,0,0,0]
  ],
  random: [],
  randomPieces(){
    const arr = ['J', 'L', 'T', 'Z', 'S', 'O', 'I'].sort(() => Math.random() - 0.5)
    return arr
  },
  drawNextPiece(){
    const nextPieceLetter = this.random[this.random.length - 1]
    const arr = this[`${nextPieceLetter}`]
    // reset divs - make them all white
    nextPiece.forEach((e) => {
      Array.from(e.children).forEach(e => e.style.backgroundColor = '')
    })
    for (let i = 1; i < arr.length; i++){
      for (let j = 0; j < arr[0].length; j++){
        if (arr[i][j] === 8) nextPiece[i].children[j].style.backgroundColor = 'red'
      }
    }
  },
  setCurrentPiece(){
    if (this.random.length === 0) this.random = this.randomPieces()
    const piece = this.random.pop()
    this.currentPiece = this[`${piece}`]
    clearBoard()
    drawBoard()
    initializePiece(point.get())
    // nextPiece.innerHTML = this.random[this.random.length - 1]
    this.drawNextPiece()
    if (this.random.length === 1){
      const concatArr = this.randomPieces()
      this.random = concatArr.concat(this.random)
    }
  }
}

const point = {
  x: 6,
  y: 3,
  get(){
    return [this.x, this.y]
  },
  set(arr){
    this.x = arr[0]
    this.y = arr[1]
  },
  reset(){
    this.x = 6
    this.y = 3
  }
}
console.log(point.get())

function initializePiece(location){
  const x = location[0]
  const y = location[1]
  
  const rows = pieces.currentPiece.length - 1
  for (let i = rows, j = 0; (i >= 0) && (j <= rows); i--, j++){
    for (let k = 0; k < rows + 1; k++){
      if (pieces.currentPiece[j][k] !== 0){
        board[y - i][x + k] = pieces.currentPiece[j][k]
      }
    }
  }
}

// removes everything other than 1s
function clearBoard(){
  const newBoard = cleanBoard
  for (let i = 0; i < board.length; i++){
    for (let j = 0; j < board[0].length; j++){
      if (board[i][j] === 8){
        newBoard[i][j] = 0
      } else {
        newBoard[i][j] = board[i][j]
      }
    }
  }
  board = newBoard
}

function rotatePiece(){
  const newPiece = [[],[],[]]
  if (pieces.currentPiece.length === 4) newPiece.push([]) 
  for (let i = 0; i < pieces.currentPiece.length; i++){
    for (let j = 0; j < pieces.currentPiece[i].length; j++){
      newPiece[i][j] = pieces.currentPiece[j][i]
    }
    newPiece[i].reverse()
  }
  return pieces.currentPiece = newPiece
}

function moveRotation(){
  const previousLocation = point.get()
  if (checkCollision('rotation')){
    return
  } else {
    console.log('piece rotated')
    clearBoard()
    rotatePiece()
    initializePiece(previousLocation)
    drawBoard()
  }
}

function moveDown(){
  if (checkCollision('block')){
    return
  } else {
    const newLocation = [point.x, (point.y + 1)]
    point.set(newLocation)
    clearBoard()
    initializePiece(newLocation)
    drawBoard()
  }
}

function moveLeft(){
  if (checkCollision('left')){
    return
  } else {
    const newLocation = [(point.x - 1), point.y]
    initializePiece(newLocation)
    console.log('moving left')
    point.set(newLocation)
    clearBoard()
    initializePiece(newLocation)
    drawBoard()
  }
}

function moveRight(){
  if (checkCollision('right')){
    return
  } else {
    const newLocation = [(point.x + 1), point.y]
    initializePiece(newLocation)
    console.log('moving right')
    point.set(newLocation)
    clearBoard()
    initializePiece(newLocation)
    drawBoard()
  }
}

// key handling
document.addEventListener('keydown', (e) => {
  if (e.key === 'p'){
    gameState.isRunning = !gameState.isRunning
    if (!gameState.isRunning){
      clearInterval(intervalId)
    } else {
      clearInterval(intervalId)
      timedEvent(gameState.levelSpeed)
    }
  }
  if (!gameState.isRunning) return
  if (e.key === 'w'){
    if (pieces.currentPiece !== pieces.O) moveRotation()
  } else if (e.key === 'a'){
    moveLeft()
  } else if (e.key === 'd'){
    moveRight()
  } else if (e.key === 's'){
    moveDown()
  }
})

function checkCollision(area){
  const indices = new Array
  if (area === 'floor' || area === 'top'){
    area === 'floor' ? indices.push(23,25) : indices.push(0,2)
    for (let i = indices[0]; i <= indices[1]; i++){
      if (board[i].includes(8)){ 
        return true 
      }
    }
  } else if (area === 'block') {
    for (let i = 1; i <= (point.y + 1); i++){
      for (let j = 3; j <= 12; j++){
        if (board[i][j] === 1 && board[i - 1][j] === 8){
          console.log('block below collision')
          fixAllBlocks() // changes 8 to 1
          pieces.setCurrentPiece() // loads new piece
          gameState.scoreUp()
          return true
        }
      }
    }
  } else if (area === 'left') {
    for (let i = 0; i < board.length; i++){
      for (let j = 0; j < board[0].length; j++){
        if (board[i][j] === 8){
          if (board[i][j - 1] === 1){
            console.log('left collision')
            return true
          }
        }
      }
    }
  } else if (area === 'right') {
    for (let i = 0; i < board.length; i++){
      for (let j = 0; j < board[0].length; j++){
        if (board[i][j] === 8){
          if (board[i][j + 1] === 1){
            console.log('right collision')
            return true
          }
        }
      }
    }
  } else if (area === 'rotation'){
    // get current coordinates
    const x = point.x
    const y = point.y

    let currentBoardSnapshot = []
    // get an array of 3 * 3 or 4 * 4 from that point (BOARD SNAPSHOT)
    if (pieces.currentPiece.length === 3){
      currentBoardSnapshot = [
        [board[y - 2][x], board[y - 2][x + 1], board[y - 2][x + 2]],
        [board[y - 1][x], board[y - 1][x + 1], board[y - 1][x + 2]],
        [board[y][x], board[y][x + 1], board[y][x + 2]]
      ]
    } else {
      currentBoardSnapshot = [
        [board[y - 3][x], board[y - 3][x + 1], board[y - 3][x + 2], board[y - 3][x + 3]],
        [board[y - 2][x], board[y - 2][x + 1], board[y - 2][x + 2], board[y - 2][x + 3]],
        [board[y - 1][x], board[y - 1][x + 1], board[y - 1][x + 2], board[y - 1][x + 3]],
        [board[y][x], board[y][x + 1], board[y][x + 2], board[y][x + 3]]
      ]
    }

    // get an array of on board with no pieces (BOARD NO PIECE SNAPSHOT) 
    const onBoardNoPieces = currentBoardSnapshot.map(e => {
      return e.map(element => {
        if (element === 8){
          return 0
        } else {
          return element
        }
      })
    })

    // get an array of current piece rotated (ROTATION SNAPSHOT)
    rotatePiece()
    const rotatedPiece = pieces.currentPiece
    rotatePiece() // reset the rotation
    rotatePiece()
    rotatePiece()

    // compare if ROTATION SNAPSHOT(i) === 8 && NO PIECE SNAPSHOT(i) === 1 #=> collision true

    for (let i = 0; i < currentBoardSnapshot.length; i++){
      for (let j = 0; j < currentBoardSnapshot[0].length; j++){
        if (rotatedPiece[i][j] === 8 && onBoardNoPieces[i][j] === 1){
          console.log('rotation collision detected')
          return true
        }
      }
    }

  }
}

function fixAllBlocks(){
  for (let i = 0; i < board.length; i++){
    for (let j = 0; j < board[0].length; j++){
      if (board[i][j] === 8){
        board[i][j] = 1
      }
    }
  }
  checkLine()
  clearBoard()
  point.reset()
  initializePiece(point.get())
  drawBoard()
}

function checkLine(){
  for (let i = 3; i < 23; i++){
    if (board[i].every(e => e === 1 )){
      board.splice(i,1)
      board.splice(3,0,[1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1])
      gameState.scoreUp()
      clearBoard()
      drawBoard()
    }
  }
}


const divs = document.getElementsByClassName('inputdiv')
function drawBoard(){
  for (let i = 3; i < board.length - 3; i++){
    for (let j = 3; j <= 12; j++){
      if (board[i][j] === 8 || board[i][j] === 1){
        divs[i - 3].children[j - 3].style.backgroundColor = 'red'
      } else if (board[i][j] === 0){
        divs[i - 3].children[j - 3].style.backgroundColor = 'rgb(158, 241, 241)'
      } 
      // divs[i].children[j].innerHTML = board[i][j]
    }
  }
}

// init piece on the board at the start
pieces.setCurrentPiece()
initializePiece(point.get())
timedEvent(gameState.levelSpeed)
drawBoard()

