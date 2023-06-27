function playGame(playerChoice) {
    var choices = ['piedra', 'papel', 'tijera'];
    var computerChoice = choices[Math.floor(Math.random() * choices.length)];
  
    var result;
  
    if (playerChoice === computerChoice) {
      result = 'Empate';
    } else if (
      (playerChoice === 'piedra' && computerChoice === 'tijera') ||
      (playerChoice === 'papel' && computerChoice === 'piedra') ||
      (playerChoice === 'tijera' && computerChoice === 'papel')
    ) {
      result = 'Ganaste';
    } else {
      result = 'Perdiste';
    }
  
    var iconsHTML = `
      <p>Tu elección: <span class="icon">${getPlayerIcon(playerChoice)}</span></p>
      <p>Elección de la computadora: <span class="icon">${getPlayerIcon(computerChoice)}</span></p>
      <p>Resultado: ${result}</p>
    `;
  
    document.getElementById('gameIcons').innerHTML = iconsHTML;
  }
  
  function getPlayerIcon(choice) {
    switch (choice) {
      case 'piedra':
        return '✊';
      case 'papel':
        return '✋';
      case 'tijera':
        return '✌️';
    }
  }
  