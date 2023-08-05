document.addEventListener('DOMContentLoaded', function() {
    let board = ['', '', '', '', '', '', '', '', ''];
    let currentPlayer = 'X';
    let gameOver = false;
  
    let cells = document.getElementsByClassName('cell');
    for (let i = 0; i < cells.length; i++) {
      cells[i].addEventListener('click', cellClick);
    }
  
    function cellClick() {
      if (gameOver) {
        return;
      }
  
      let cellIndex = Array.prototype.indexOf.call(cells, this);
  
      if (board[cellIndex] === '') {
        board[cellIndex] = currentPlayer;
        this.innerText = currentPlayer;
        this.classList.add(currentPlayer);
  
        let winner = checkWinner();
        if (winner) {
          gameOver = true;
          alert('Игрок ' + winner + ' выиграл!');
        } else if (board.indexOf('') === -1) {
          gameOver = true;
          alert('voch voqi');
        } else {
          currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
      }
    }
  
    function checkWinner() {
      let winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Горизонтальные комбинации
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Вертикальные комбинации
        [0, 4, 8], [2, 4, 6] // Диагональные комбинации
      ];
  
      for (let i = 0; i < winningCombinations.length; i++) {
        let [a, b, c] = winningCombinations[i];
        if (board[a] !== '' && board[a] === board[b] && board[a] === board[c]) {
          return board[a];
        }
      }
  
      return null;
    }
  });

  
  
  
  

  