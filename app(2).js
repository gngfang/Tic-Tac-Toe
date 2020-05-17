

/* Variables */

let player1 = 'x';
let player2 = 'o';
let turnCount = 1;
let scoreBoardX = 0;
let scoreBoardO = 0;


/* Container in Jquery */

const $container = $('.container');
const $box = $('.boxes');
const $playerStatus = $('.playerStatus');

/* The grid boxes in Jquery */
const $box1 = $('#top-left');
const $box2 = $('#top-middle');
const $box3 = $('#top-right');
const $box4 = $('#middle-left');
const $box5 = $('#middle-middle');
const $box6 = $('#middle-right');
const $box7 = $('#bottom-left');
const $box8 = $('#bottom-middle');
const $box9 = $('#bottom-right');



/* playerScore jqueries */

const $playerScore1 = $('.playerScore1');
const $playerScore2 = $('.playerScore2');



const gameFunctions = function (event) {

    // add turn 

    turnCount++


    // if the turn number is divisible by 2 with a 0 remainder then x player can mark the board
    if (turnCount % 2 === 0) {
        if (event.target.classList.contains('x') === false) {

            $(event.target).addClass('x');
            $(event.target).text(player1);
            // to make the event to be not clickable
            $(event.target).css('pointer-events', "none");
            $('.playerStatus').text('Player O Turn');
            console.log('x player');

        }

        // else the turn numb is not divisible by 2 with a remainder 0 is player 0 turn 
    } else if (event.target.classList.contains('o') === false) {
        $(event.target).addClass('o');
        $(event.target).text('o');
        $(event.target).css("pointer-events", "none");
        $('.playerStatus').text('Player X Turn');
        console.log('o player');
    }
    if (turnCount === 10) {
        $('.playerStatus').text("Tie Game");
        $('.playerStatus').css('font-size', '30px');
        $('.playerStatus').css('color', '#996600');
        console.log('TIE GAME');

    }


}

function scoreBoard() {

    scoreBoardX++
    $('.playerStatus').text('Player X Won');
    $('.playerStatus').css('color', '#483D8B');
    $('.playerStatus').css('font-size', '30px');
    $('.boxes').css('pointer-events', "none");
    $playerScore1.text(`Player X Score : ${scoreBoardX}`);
    if (scoreBoardX === 3) {
        $('.playerStatus').text('Player O is the LOSERR');
        $('.playerStatus').css('font-size', '25px');
        $('#nextTurn').css('pointer-events', 'none');
    } else if (scoreBoardO === 3) {
        $('.playerStatus').text('Player X is the LOSERR');
        $('.playerStatus').css('font-size', '25px');
        $('.playerStatus').css('color', '#ecce6d');
        $('#nextTurn').css('pointer-events', 'none');
    }


};




function scoreBoard2() {

    scoreBoardO++
    $('.playerStatus').text("Player O Won");
    $('.playerStatus').css('color', '#ecce6d');
    $('.playerStatus').css('font-size', '30px');
    $('.boxes').css('pointer-events', "none");
    $playerScore2.text(`Player O Score : ${scoreBoardO}`);
    if (scoreBoardX === 3) {
        $('.playerStatus').text('Player O is the LOSERR');
        $('.playerStatus').css('font-size', '25px');
        $('#nextTurn').css('pointer-events', 'none');
    } else if (scoreBoardO === 3) {
        $('.playerStatus').text('Player X is the LOSERR');
        $('.playerStatus').css('font-size', '25px');
        $('.playerStatus').css('color', '#ecce6d');
        $('#nextTurn').css('pointer-events', 'none');
    }

}




function winningCheck() {

    if ($box1.text() === 'x' && $box2.text() === 'x' && $box3.text() === 'x') {

        scoreBoard();


    } else if ($box1.text() === 'o' && $box2.text() === 'o' && $box3.text() === 'o') {

        scoreBoard2();
        nextRound();

    }

    if ($box4.text() === 'x' && $box5.text() === 'x' && $box6.text() === 'x') {


        scoreBoard();



    } else if ($box4.text() === 'o' && $box5.text() === 'o' && $box6.text() === 'o') {


        scoreBoard2();

    }



    if ($box7.text() === 'x' && $box8.text() === 'x' && $box9.text() === 'x') {

        scoreBoard();


    } else if ($box7.text() === 'o' && $box8.text() === 'o' && $box9.text() === 'o') {


        scoreBoard2();


    }

    if ($box1.text() === 'x' && $box4.text() === 'x' && $box7.text() === 'x') {


        scoreBoard();



    } else if ($box1.text() === 'o' && $box4.text() === 'o' && $box7.text() === 'o') {

        scoreBoard2();


    }

    if ($box2.text() === 'x' && $box5.text() === 'x' && $box8.text() === 'x') {


        scoreBoard();



    } else if ($box2.text() === 'o' && $box5.text() === 'o' && $box8.text() === 'o') {

        scoreBoard2();


    }

    if ($box3.text() === 'x' && $box6.text() === 'x' && $box9.text() === 'x') {



        scoreBoard();



    } else if ($box3.text() === 'o' && $box6.text() === 'o' && $box9.text() === 'o') {

        scoreBoard2();


    }

    if ($box1.text() === 'x' && $box5.text() === 'x' && $box9.text() === 'x') {

        scoreBoard();



    } else if ($box1.text() === 'o' && $box5.text() === 'o' && $box9.text() === 'o') {

        scoreBoard2();


    }

    if ($box3.text() === 'x' && $box5.text() === 'x' && $box7.text() === 'x') {


        scoreBoard();



    } else if ($box3.text() === 'o' && $box5.text() === 'o' && $box7.text() === 'o') {

        scoreBoard2();



    }

}

function nextRound() {

    $(".playerStatus").empty();
    $(".playerStatus").text("Player X Start the New Round");
    $('.playerStatus').css("color", "#f1f1f1");
    $('.playerStatus').css('font-size', '20px');
    $(".boxes").empty();
    $('div').removeClass("x");
    $('div').removeClass("o");
    $('div').css('pointer-events', 'auto');
    turnCount = 1;

}


function resetGame() {

    // reseting the playerStatus
    $(".playerStatus").empty();
    // turn back to the beginning title
    $(".playerStatus").text("Player X Start the Game");
    // removing the classes that were added in the game function
    $('div').removeClass("x");
    $('div').removeClass("o");
    // deleting the content
    $(".boxes").empty();
    // change back the color to normal after the win
    $('.playerStatus').css("color", "#f1f1f1");
    // change back the normal font size after winning
    $('.playerStatus').css('font-size', '20px');
    turnCount = 1;
    // removing the not clickable using div to enable it through the parent
    $('div').css('pointer-events', 'auto');
    $('.playerScore1').text('Player X Score : 0');
    $('.playerScore2').text('Player O Score : 0');
    scoreBoardX = 0;  //.text(`Player X Score : ${scoreBoardX}`);
    scoreBoardO = 0; //.text(`Player O Score : ${scoreBoardO}`);
    $('#nextTurn').css('pointer-events', 'auto');
};



// event listener
$('#nextTurn').on("click", nextRound);
$('#reset').on("click", resetGame);
$container.on("click", '.boxes', gameFunctions);
$container.on('click', '.boxes', winningCheck);




