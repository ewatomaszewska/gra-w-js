var newGameBtn = document.getElementById('js-newGameButton');

    newGameBtn.addEventListener('click', newGame);

// koniec - button nowa gra, ma się chować podczas rozgrywki;

var pickRock = document.getElementById('js-playerPick_rock');
var pickPaper = document.getElementById('js-playerPick_paper');
var pickScissors = document.getElementById('js-playerPick_scissors');

    pickRock.addEventListener('click', function() { playerPick('rock') });
    pickPaper.addEventListener('click', function() { playerPick('paper') });
    pickScissors.addEventListener('click', function() { playerPick('scissors') });

//koniec skryptu - wybrór gracza - przyciski; przypisanie zmiennych do buttonów wyboru gracza;

var gameState = 'notStarted',  //started // ended
    player = {
        name: '',
        score: 0
    },
    computer = {
        score: 0
    };
// początek gry;

var newGameBtn = document.getElementById('js-newGameButton'),
    newGameElem = document.getElementById('js-newGameElement'),
    pickElem = document.getElementById('js-playerPickElement'),
    resultsElem = document.getElementById('js-resultsTableElement');

// przypisanie zmiennych do id;

function setGameElements() {
    switch(gameState) {

        case 'started':
            newGameElem.style.display = 'none';
            pickElem.style.display = 'block';
            resultsElem.style.display = 'block';
        break;

        case 'ended':
            newGameBtn.innerText = 'Jeszcze raz';

        case 'notStarted':

    default:
        newGameElem.style.display = 'block';
        pickElem.style.display = 'none';
        resultsElem.style.display = 'none';
  }

}

setGameElements();
// funkcja statusu gry

var playerPointsElem = document.getElementById('js-playerPoints'),
    playerNameElem = document.getElementById('js-playerName'),
    computerPointsElem = document.getElementById('js-computerPoints');


    function newGame() {

    player.name = prompt('Graczu, wpisz swoje imię', 'imię gracza');

    if (player.name) {

        player.score = computer.score = 0;
        gameState = 'started';
        setGameElements();

        playerNameElem.innerHTML = player.name;
        setGamePoints(); 

    }
  
}
//koniec - dodawanie nazwy gracza;


    function playerPick(playerPick) {
        console.log(playerPick);
    }
// koniec-wybór gracza;


    function getComputerPick() {
        var possiblePicks = ['rock', 'paper', 'scissors'];

        return possiblePicks[Math.floor(Math.random()*3)];
    }
//wybór komputera metoda math


var playerPickElem = document.getElementById('js-playerPick'),
    computerPickElem = document.getElementById('js-computerPick'),
    playerResultElem = document.getElementById('js-playerResult'),
    computerResultElem = document.getElementById('js-computerResult');

    function playerPick(playerPick) {
        var computerPick = getComputerPick();
        
        playerPickElem.innerHTML = playerPick;
        computerPickElem.innerHTML = computerPick;
    }
//umieszczamy na stronie;

    function checkRoundWinner(playerPick, computerPick) {
        playerResultElem.innerHTML = computerResultElem.innerHTML = '';

        var winnerIs = 'player';

            if (playerPick == computerPick) {
                winnerIs = 'noone'; // remis

            } else if (
                (computerPick == 'rock' &&  playerPick == 'scissors') ||
                (computerPick == 'scissors' &&  playerPick == 'paper') ||
                (computerPick == 'paper' &&  playerPick == 'rock') ) {
           
                        winnerIs = 'computer';
                }

            if (winnerIs == 'player') {
                playerResultElem.innerHTML = "Wygrana!";
                player.score++;

            } else if (winnerIs == 'computer') {
                computerResultElem.innerHTML = "Wygrana!";
                computer.score++;
            }  
    }
//przyrównywanie i zliczanie wyniku


    function playerPick(playerPick) {
        var computerPick = getComputerPick();
        
        playerPickElem.innerHTML = playerPick;
        computerPickElem.innerHTML = computerPick;
        
        checkRoundWinner(playerPick, computerPick);
    }

    function setGamePoints() {
        playerPointsElem.innerHTML = player.score;
        computerPointsElem.innerHTML = computer.score;
    }
    
    setGamePoints();
