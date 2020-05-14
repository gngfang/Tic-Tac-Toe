

/* Variables */

let player1 = 'x';
let player2 = 'o';
let turnCount = 1;


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
            // to make the event to be not clickable
            $(event.target).css('pointer-events', "none");
            $('.playerStatus').text('Player O Turn');
            console.log('x player');


            // else the turn numb is not divisible by 2 with a remainder 0 is player 0 turn 
        }
    } else if (event.target.classList.contains('o') === false) {

        $(event.target).addClass('o');
        $(event.target).text('o');
        $(event.target).css("pointer-events", "none");
        $('.playerStatus').text('Player X Turn');
        console.log('o player');

    }
    if (turnCount === 10) {
        console.log("tie");
        $('playerStatus').text("Tie Game");
    }
}



const winningCheck = () => {

    // if statement inside the if statement to determine if x or o won.
    if ($box1.text() === 'x' && $box2.text() === 'x' && $box3.text() === 'x') {

        $('.playerStatus').text('Player X Won');
        $('.playerStatus').css('color', '#483D8B');
        $('.playerStatus').css('font-size', '30px');

    } else if ($box1.text() === 'o' && $box2.text() === 'o' && $box3.text() === 'o') {

        $('.playerStatus').text("Player O Won");
        $('.playerStatus').css('color', '#ecce6d');
        $('.playerStatus').css('font-size', '30px');
    }

    if ($box4.text() === 'x' && $box5.text() === 'x' && $box6.text() === 'x') {

        $('.playerStatus').text('Player X Won');
        $('.playerStatus').css('color', '#483D8B');
        $('.playerStatus').css('font-size', '30px');

    } else if ($box4.text() === 'o' && $box5.text() === 'o' && $box6.text() === 'o') {

        $('.playerStatus').text("Player O Won");
        $('.playerStatus').css('color', '#ecce6d');
        $('.playerStatus').css('font-size', '30px');
    }

    if ($box7.text() === 'x' && $box8.text() === 'x' && $box9.text() === 'x') {
        $('.playerStatus').text('Player X Won');
        $('.playerStatus').css('color', '#483D8B');
        $('.playerStatus').css('font-size', '30px');
    } else if ($box7.text() === 'o' && $box8.text() === 'o' && $box9.text() === 'o') {

        $('.playerStatus').text("Player O Won");
        $('.playerStatus').css('color', '#ecce6d');
        $('.playerStatus').css('font-size', '30px');
    }

    if ($box1.text() === 'x' && $box4.text() === 'x' && $box7.text() === 'x') {

        $('.playerStatus').text('Player X Won');
        $('.playerStatus').css('color', '#483D8B');
        $('.playerStatus').css('font-size', '30px');
    } else if ($box1.text() === 'o' && $box4.text() === 'o' && $box7.text() === 'o') {
        $('.playerStatus').text("Player O Won");
        $('.playerStatus').css('color', '#ecce6d');
        $('.playerStatus').css('font-size', '30px');
    };

    if ($box2.text() === 'x' && $box5.text() === 'x' && $box8.text() === 'x') {

        $('.playerStatus').text('Player X Won');
        $('.playerStatus').css('color', '#483D8B');
        $('.playerStatus').css('font-size', '30px');
    } else if ($box2.text() === 'o' && $box5.text() === 'o' && $box8.text() === 'o') {
        $('.playerStatus').text("Player O Won");
        $('.playerStatus').css('color', '#ecce6d');
        $('.playerStatus').css('font-size', '30px');
    };

    if ($box3.text() === 'x' && $box6.text() === 'x' && $box9.text() === 'x') {


        $('.playerStatus').css('color', '#483D8B');
        $('.playerStatus').css('font-size', '30px');
        $('.playerStatus').text('Player X Won');
    } else if ($box3.text() === 'o' && $box6.text() === 'o' && $box9.text() === 'o') {
        $('.playerStatus').css('color', '#ecce6d');
        $('.playerStatus').css('font-size', '30px');
        $('.playerStatus').text("Player O Won");
    };

    if ($box1.text() === 'x' && $box5.text() === 'x' && $box9.text() === 'x') {

        $('.playerStatus').text('Player X Won');
        $('.playerStatus').css('color', '#483D8B');
        $('.playerStatus').css('font-size', '30px');
    } else if ($box1.text() === 'o' && $box5.text() === 'o' && $box9.text() === 'o') {
        $('.playerStatus').text("Player O Won");
        $('.playerStatus').css('color', '#ecce6d');
        $('.playerStatus').css('font-size', '30px');
    };

    if ($box3.text() === 'x' && $box5.text() === 'x' && $box7.text() === 'x') {

        $('.playerStatus').text('Player X Won');
        $('.playerStatus').css('color', '#483D8B');
        $('.playerStatus').css('font-size', '30px');

    } else if ($box3.text() === 'o' && $box5.text() === 'o' && $box7.text() === 'o  ') {
        $('.playerStatus').text("Player O Won");
        $('.playerStatus').css('color', '#ecce6d');
        $('.playerStatus').css('font-size', '30px');
    };


}





const resetGame = () => {

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


};


// event listener
$container.on("click", '.boxes', gameFunctions);
$container.on('click', '.boxes', winningCheck);
$('#reset').on("click", resetGame);