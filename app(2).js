


/* Variables */

let player1 = 'x';
let player2 = 'o';

let game = true


/* Array Grid */
const grid = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']

];


/* Check winning status */

function checkWinner() {
    const $box1 = $('#top-left');
    const $box2 = $('#top-middle');
    const $box3 = $('#top-right');
    const $box4 = $('#middle-left');
    const $box5 = $('#middle-middle');
    const $box6 = $('#middle-right');
    const $box7 = $('#bottom-left');
    const $box8 = $('#bottom-middle');
    const $box9 = $('#bottom-right');
    if ($box1 && $box1.text() === $box2.text() && $box1.text() === $box3.text()) {

    } else if ($box1 && $box1.text() === $box2.text() && $box1.text() === $box3.text()) {


    } else if ($box4 && $box4.text() === $box5.text() && $box4.text() === $box6.text()) {

    } else if ($box7 && $box7.text() === $box8.text() && $box7.text() === $box9.text()) {

    } else if ($box1 && $box1.text() === $box4.text() && $box1.text() === $box7.text()) {

    } else if ($box2 && $box2.text() === $box5.text() && $box2.text() === $box8.text()) {

    } else if ($box3 && $box3.text() === $box6.text() && $box3.text() === $box9.text()) {

    } else if ($box1 && $box1.text() === $box5.text() && $box1.text() === $box9.text()) {

    } else if ($box3 && $box3.text() === $box5.text() && $box3.text() === $box7.text()) {

    }


}



checkWinner();











/* Change players turn */












/* reset button */
$('#reset').on("click", function () {
    alert("is working");
})

/* Boxes Interaction */


