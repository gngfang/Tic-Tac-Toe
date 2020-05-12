


const grid = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
]


let player_1 = "X";
let player_2 = "O";




/* game functions */




/* functions for listener */






/* Jquery */

$('#reset').on("click", function () {
    alert("is working");
})

/* Logging the symbol into the squares */

// top-left
$('#top-left').on("click", function () {
    console.log("top left square");
    $('#top-left').text("X");

})
// top-middle
$('#top-middle').on("click", function () {
    console.log("top middle square");
    $('#top-middle').text("X");
})
// top-right
$('#top-right').on("click", function () {
    console.log("top right square");
    $('#top-right').text("X");
})
// middle-left
$('#middle-left').on("click", function () {
    console.log("middle left square");
    $('#middle-left').text("X");
})
// middle-middle
$('#middle-middle').on("click", function () {
    console.log("middle middle square");
    $('#middle-middle').text("X");
})
// middle-right
$('#middle-right').on("click", function () {
    console.log("middle right square");
    $('#middle-right').text("X");
})
// bottom-left
$('#bottom-left').on("click", function () {
    console.log("bottom left square");
    $('#bottom-left').text("X");
})
// bottom-middle
$('#bottom-middle').on("click", function () {
    console.log("bottom middle square");
    $('#bottom-middle').text("X");
})
// bottom-right
$('#bottom-right').on("click", function () {
    console.log("bottom right square");
    $('#bottom-right').text("X");
})
