

/* Variables */

let player1 = 'x';
let player2 = 'o';
let turnCount = 1;
let game = true;


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


/* reset button */


const gameFunctions = function (event) {

    // add turn 
    turnCount++

    // if the turn number is divisible by 2 with a 0 remainder then x player can mark the board
    if (turnCount % 2 === 0) {
        if (event.target.classList.contains('x') === false) {
            $(event.target).addClass('x');
            $(event.target).text(player1);
            $('.playerStatus').text('Player O Turn');
            console.log('x player');

        }

        // else the turn numb is not divisible by 2 with a remainder 0 is player 0 turn 
    } else {
        if (event.target.classList.contains('o') === false) {
            $(event.target).addClass('o');
            $(event.target).text('o');
            $('.playerStatus').text('Player X Turn');
            console.log('o player');
        }

    }
    // if statement for winning Checks Point
    if ($box1 && $box1.text() === $box2.text() && $box2.text() === $box3.text()) {
        // if statement inside the if statement to determine if x or o won.
        if ($box1.text() === 'x' && $box2.text() === 'x' && $box3.text() === 'x') {

            $('.playerStatus').text('Player X Won');
        } else if ($box1.text() === 'o' && $box2.text() === 'o' && $box3.text() === 'o') {

            $('.playerStatus').text("Player O Won");
        };

    } else if ($box4 && $box4.text() === $box5.text() && $box5.text() === $box6.text()) {

        if ($box4.text() === 'x' && $box5.text() === 'x' && $box6.text() === 'x') {

            $('.playerStatus').text('Player X Won');
        } else if ($box4.text() === 'o' && $box5.text() === 'o' && $box6.text() === 'o') {
            $('.playerStatus').text("Player O Won");
        }

    } else if ($box7 && $box7.text() === $box8.text() && $box8.text() === $box9.text()) {

        if ($box7.text() === 'x' && $box8.text() === 'x' && $box9.text() === 'x') {

            $('.playerStatus').text('Player X Won');
        } else if ($box7.text() === 'o' && $box8.text() === 'o' && $box9.text() === 'o') {
            $('.playerStatus').text("Player O Won");
        };

    } else if ($box1 && $box1.text() === $box4.text() && $box4.text() === $box7.text()) {
        if ($box1.text() === 'x' && $box4.text() === 'x' && $box7.text() === 'x') {

            $('.playerStatus').text('Player X Won');
        } else if ($box1.text() === 'o' && $box4.text() === 'o' && $box7.text() === 'o') {
            $('.playerStatus').text("Player O Won");
        };
    } else if ($box2 && $box2.text() === $box5.text() && $box5.text() === $box8.text()) {
        if ($box2.text() === 'x' && $box5.text() === 'x' && $box8.text() === 'x') {

            $('.playerStatus').text('Player X Won');
        } else if ($box2.text() === 'o' && $box5.text() === 'o' && $box8.text() === 'o') {
            $('.playerStatus').text("Player O Won");
        };
    } else if ($box3 && $box3.text() === $box6.text() && $box6.text() === $box9.text()) {
        if ($box3.text() === 'x' && $box6.text() === 'x' && $box9.text() === 'x') {

            $('.playerStatus').text('Player X Won');
        } else if ($box3.text() === 'o' && $box6.text() === 'o' && $box9.text() === 'o') {
            $('.playerStatus').text("Player O Won");
        };
    } else if ($box1 && $box1.text() === $box5.text() && $box5.text() === $box9.text()) {
        if ($box1.text() === 'x' && $box5.text() === 'x' && $box9.text() === 'x') {

            $('.playerStatus').text('Player X Won');
        } else if ($box1.text() === 'o' && $box5.text() === 'o' && $box9.text() === 'o') {
            $('.playerStatus').text("Player O Won");
        };
    } else if ($box3 && $box3.text() === $box5.text() && $box5.text() === $box7.text()) {
        if ($box3.text() === 'x' && $box5.text() === 'x' && $box7.text() === 'x') {

            $('.playerStatus').text('Player X Won');

        } else if ($box3.text() === 'o' && $box5.text() === 'o' && $box7.text() === 'o') {
            $('.playerStatus').text("Player O Won");
        };


    }

}
const resetGame = () => {


    $('div').removeClass("x");
    $('div').removeClass("o");
    $(".boxes").empty();
    $(".playerStatus").empty();
    $(".playerStatus").text("Player X Start the Game");
    turnCount = 1;

};


$('#reset').on("click", resetGame)
// event listener
$container.on("click", '.boxes', gameFunctions);