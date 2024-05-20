/* eslint-env browser */

const playerFactory = (name, mark) => {
  const playTurn = (board, cell) => {
    const idx = board.cells.findIndex(position => position === cell);
    if (board.boardArray[idx] === '') {
      board.render();
      return idx;
    }
    return null;
  };

  return { name, mark, playTurn };
};

const boardModule = (() => {
  let boardArray = ['', '', '', '', '', '', '', '', ''];
  const gameBoard = document.querySelector('#board');
  const cells = Array.from(document.querySelectorAll('.cell'));
  let winner = null;

  const render = () => {
    boardArray.forEach((mark, idx) => {
      cells[idx].textContent = boardArray[idx];
    });
  };

  const reset = () => {
    boardArray = ['', '', '', '', '', '', '', '', ''];
  };

  const checkWin = () => {
    const winArrays = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    winArrays.forEach((combo) => {
      if (boardArray[combo[0]]
        && boardArray[combo[0]] === boardArray[combo[1]]
        && boardArray[combo[0]] === boardArray[combo[2]]) {
        winner = 'current';
      }
    });
    return winner || (boardArray.includes('') ? null : 'Tie');
  };

  return {
    render, gameBoard, cells, boardArray, checkWin, reset,
  };
})();

const gamePlay = (() => {
  const playerOneName = document.querySelector('#player1');
  const playerTwoName = document.querySelector('#player2');
  const form = document.querySelector('.player-info');
  const resetBtn = document.querySelector('#reset');
  let currentPlayer;
  let playerOne;
  let playerTwo;

  const switchTurn = () => {
    currentPlayer = currentPlayer === playerOne ? playerTwo : playerOne;
  };

  const gameRound = () => {
    const board = boardModule;
    const gameStatus = document.querySelector('.game-status');
    if (currentPlayer.name !== '') {
      gameStatus.textContent = `${currentPlayer.name}'s Turn`;
    } else {
      gameStatus.textContent = 'Board: ';
    }

    board.gameBoard.addEventListener('click', (event) => {
      event.preventDefault();
      const play = currentPlayer.playTurn(board, event.target);
      if (play !== null) {
        board.boardArray[play] = `${currentPlayer.mark}`;
        board.render();
        const winStatus = board.checkWin();
        if (winStatus === 'Tie') {
          gameStatus.textContent = 'Tie!';
        } else if (winStatus === null) {
          switchTurn();
          gameStatus.textContent = `${currentPlayer.name}'s Turn`;
        } else {
          gameStatus.textContent = `Winner is ${currentPlayer.name}`;
          board.reset();
          board.render();
        }
      }
    });
  };

  const gameInit = () => {
    if (playerOneName.value !== '' && playerTwoName.value !== '') {
      playerOne = playerFactory(playerOneName.value, 'X');
      playerTwo = playerFactory(playerTwoName.value, 'O');
      currentPlayer = playerOne;
      gameRound();
    }
  };

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (playerOneName.value !== '' && playerTwoName.value !== '') {
      gameInit();
      form.classList.add('hidden');
      document.querySelector('.place').classList.remove('hidden');
    } else {
      window.location.reload();
    }
  });

  resetBtn.addEventListener('click', () => {
    document.querySelector('.game-status').textContent = 'Board: ';
    document.querySelector('#player1').value = '';
    document.querySelector('#player2').value = '';
    window.location.reload();
  });
  return {
    gameInit,
  };
})();

gamePlay.gameInit();
