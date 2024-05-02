import { useState } from 'react';


import Player from './components/Player.jsx'
import Gameboard from './components/GameBoard.jsx'
import Log from './components/Log.jsx'
import GameOver from './components/GameOver.jsx';
import { WINNING_COMBINATIONS } from './winning-combination.js';

const PLAYERS ={
  X: 'Player1 ',
  O: 'Player2 '
}

const INITIAL_GAME_BOARD = [
  [null, null, null], [null, null, null], [null, null, null]
]

function deriveActivePlayer(gameTurns) {
  let currentPlayer = 'X';
  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O';
  }
  return currentPlayer;  
}

function deriveGameBoard(gameTurns){
  let gameBoard = [...INITIAL_GAME_BOARD.map(array => [...array])];

  for (const turn of gameTurns){  
    const {square, player} = turn;
    const {row, col} = square;
    gameBoard[row][col] = player;
  }
  return gameBoard;
}

function deriveWinner(gameBoard, players) {
  let winner;

  for (const combination of WINNING_COMBINATIONS){
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];        

    if(firstSquareSymbol && 
      firstSquareSymbol === secondSquareSymbol && 
      firstSquareSymbol === thirdSquareSymbol ){
        winner = players[firstSquareSymbol];
      }
  }

  return winner;
}



function App() {

  const [players, setPlayers] = 
  useState(PLAYERS);

  console.log('PLAYERS:'+PLAYERS.X +PLAYERS.O);
  console.log('players:'+players.X + players.O);
  const [gameTurns, setGameTurns] = useState([]);
  //const [hasWinner, setHasWinner] = useState(false);

  //const[activePlayer, setActivePlayer] =useState('X');
  const activePlayer = deriveActivePlayer(gameTurns);



  const gameBoard = deriveGameBoard(gameTurns);
  const winner = deriveWinner(gameBoard, players);


  const hasDraw = gameTurns.length === 9 && !winner;



//

  // //다른예시
  // if (gameTurns.length > 4) {
  //   const Xhas = gameTurns.filter((gameTurn) => gameTurn.player === 'X');
  //   const Ohas = gameTurns.filter((gameTurn) => gameTurn.player === 'O');
  //   for (const combination of WINNING_COMBINATIONS) {
  //     let xCnt = 0, oCnt = 0;
  //     for (const combi of combination) {
  //       for (const Xo of Xhas) {
  //         if (Xo.square.col === combi.column && Xo.square.row === combi.row) {
  //           xCnt++;
  //         }
  //       }
  //       for (const Oo of Ohas) {
  //         if (Oo.square.col === combi.column && Oo.square.row === combi.row) {
  //           oCnt++;
  //         }
  //       }
  //       if (xCnt === 3 | oCnt === 3) {
  //         console.log('finish');
  //         if (xCnt == 3) {
  //           console.log('winner is X');
  //         } else {
  //           console.log('winner is O');
  //         }
  //       }
  //     }
  //   }
  // }

  function handleSelectSquare(rowIndex, colIndex) {
    //setActivePlayer((curActivePlayer)=> curActivePlayer === 'X' ? 'O' : 'X');
    setGameTurns(prevTurns => {
      const currentPlayer = deriveActivePlayer(prevTurns);

      const updatedTurns = [{ square: { row: rowIndex, col: colIndex }, player: currentPlayer }, ...prevTurns];
      //player: activePlayer를 사용하면 안된다. 상태가 병합되어 꼬이므로

      return updatedTurns;
    });
  }

  function handleRestart(){
    setGameTurns([]);
    setPlayers(PLAYERS);
  }

  function handlePlayerNameChange(symbol, newName){
    setPlayers(prevPlayers =>{
      return{
        ...prevPlayers,
        [symbol]: newName
      };
    });
  }

  return (

    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player key={players.X} initialName={players.X} symbol="X" isActive={activePlayer === 'X'} onChangeName={handlePlayerNameChange} />
          <Player key={players.O} initialName={players.O} symbol="O" isActive={activePlayer === 'O'} onChangeName={handlePlayerNameChange}/>


        </ol>
        {(winner || hasDraw) && <GameOver winner={winner} onRestart={handleRestart}/>}
        <Gameboard onSelectSquare={handleSelectSquare} board={gameBoard} />
      </div>

      <Log turns={gameTurns} />
    </main>

  )
}

export default App
