var playerScore = 0;
var computerScore = 0;

function playGame(playerChoice) {
  var computerChoice = getComputerChoice();
  
  var result;
  if (playerChoice === computerChoice) {
    result = 'Empate';
  } else if (
    (playerChoice === 'piedra' && computerChoice === 'tijera') ||
    (playerChoice === 'papel' && computerChoice === 'piedra') ||
    (playerChoice === 'tijera' && computerChoice === 'papel')
  ) {
    result = 'Ganaste';
    playerScore++;
  } else {
    result = 'Perdiste';
    computerScore++;
  }
  
  var resultsContainer = document.getElementById('results');
  resultsContainer.innerHTML += `<p>Player 1: ${playerChoice} vs Computer: ${computerChoice} - ${result}</p>`;
  
  if (playerScore === 3 || computerScore === 3) {
    var winnerMessageContainer = document.getElementById('winner-message');
    var winner = playerScore > computerScore ? 'Player 1' : 'Computer';
    winnerMessageContainer.innerHTML = `<p>El juego ha finalizado. El ganador es: ${winner}</p>`;
  }
}

function getComputerChoice() {
  var choices = ['piedra', 'papel', 'tijera'];
  var randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}
