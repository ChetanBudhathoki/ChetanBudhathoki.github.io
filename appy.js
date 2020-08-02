
var scores, roundscore, activeplayer, player1, gameplay;

scores = [0, 0];
roundscore = 0;
activeplayer = 0;
player1 = true;
gameplay=true;


// var dice=Math.floor(Math.random()*6)+1;
document.querySelector('#pani').style.display = 'none';

document.querySelector('.two').textContent = '0';
document.querySelector('.three').textContent = '0';
document.querySelector('#what').textContent = '0';
document.querySelector('#twat').textContent = '0';
// document.querySelector('#pani').src='dice-'+dice+'.png';
// document.querySelector('#once').style.display='none'
document.querySelector('#once-1').style.display = 'none';

document.querySelector('#pani-1').addEventListener('click', function () {
    if (gameplay == true) {

        var dice = Math.floor(Math.random() * 6) + 1;
        document.querySelector('#pani').src = 'dice-' + dice + '.png';
        document.querySelector('#pani').style.display = 'block';

        if (dice !== 1) {
            roundscore = roundscore + dice;
            if (player1) {
                document.querySelector('#pani-2').textContent = roundscore;
            }
            else {
                document.querySelector('#twat').textContent = roundscore;
            }

        }
        else {
            nextplayer();


        }
    }

});
// document.querySelector('.ass').textContent='dice';
document.querySelector('.ass').addEventListener('click', function () {
    if(gameplay==true){
        if (player1) {
            scores[0] = scores[0] + roundscore;
            document.querySelector('.two').textContent = scores[0];
            if (scores[0] >= 100) {
                document.querySelector('.PLAYER-1').textContent = 'WINNER!';
                document.querySelector('#pani').style.display = 'none';
                document.querySelector('#once').style.display = 'none';
                gameplay = false;
                // document.querySelector('.PLAYER-1').textContent='player-1';
    
            }
            // nextplayer();
            else {
                nextplayer();
            }
    
        }
        else {
            scores[1] = scores[1] + roundscore;
            document.querySelector('#what').textContent = scores[1];
            if (scores[1] >= 100) {
                document.querySelector('.PLAYER-2').textContent = 'WINNER!';
                document.querySelector('#pani').style.display = 'none';
                document.querySelector('#once-1').style.display = 'none';
                gameplay =false;
            }
            // nextplayer();
            else {
                nextplayer();
            }
        } 
    }

});

// document.querySelector('.newgame').
document.querySelector('.dick').addEventListener('click', init);


function init() {
    scores = [0, 0];
    roundscore = 0;
    activeplayer = 0;
    player1 = true;
    gameplay = true;
    document.querySelector('#pani').style.display = 'none';

    document.querySelector('.two').textContent = '0';
    document.querySelector('.three').textContent = '0';
    document.querySelector('#what').textContent = '0';
    document.querySelector('#twat').textContent = '0';
    // document.querySelector('#pani').src='dice-'+dice+'.png';
    // document.querySelector('#once').style.display='none'
    document.querySelector('#once-1').style.display = 'none';
    document.querySelector('.PLAYER-1').textContent = 'PLAYER-1';
    document.querySelector('.PLAYER-2').textContent = 'PLAYER-2';
    document.querySelector('#once').style.display = 'none';
    document.querySelector('#once-1').style.display = 'none';
    document.querySelector('#once').style.display = 'block';


}

function nextplayer() {
    player1 = !player1;
    roundscore = 0;
    document.querySelector('.three').textContent = '0';
    document.querySelector('#twat').textContent = '0';
    // document.querySelector('#once').style.display='block'
    // document.querySelector('#once-1').style.display='block'
    // document.querySelector('#once').classList.remove('active');
    // document.querySelector('.#once').classList.add('active');
    if (player1) {
        document.querySelector('#once-1').style.display = 'none';
        document.querySelector('#once').style.display = 'block';
        // document.querySelector('#once').style.display='none';
        // document.querySelector('#once-1').style.display='block';
    }
    else {
        document.querySelector('#once').style.display = 'none';
        document.querySelector('#once-1').style.display = 'block';
        // document.querySelector('#once-1').style.display='none';
        // document.querySelector('#once').style.display='block';
    }
    document.querySelector('#pani').style.display = 'none';
}
