


// const grid = [
//     ['','',''],
//     ['','',''],
//     ['','','']
// ];

const first = {
    topLeft: '',
    topMiddle: '',
    topRight: ''
}

const second = {
    middleLeft: '',
    middleMiddle: '',
    middleRight: ''
}

const third = {
    bottomLeft: '',
    bottomMiddle: '',
    bottomRight: ''
}

const fourth = {
    topMiddle: '',
    middleMiddle: '',
    bottomMiddle: ''
}

const fifth = {
    topLeft: '',
    middleLeft: '',
    bottomLeft: ''
}

const sixth = {
    topRight: '',
    middleRight: '',
    bottomRight: ''
}

const seven = {
    topLeft: '',
    middleMiddle: '',
    bottomRight: ''
}

const eight = {
    topRight: '',
    middleMiddle: '',
    bottomLeft: ''
}


const winningState = () => {
    if (first.topLeft == 'x' && first.topMiddle == 'x' && first.topRight == 'x') {
        alert("you won");
    } else {
        console.log('have not win yet');
    }
};


/* Switch Player */



/* Winning Logic */
// looping through the whole array
/* for (let i = 0; i < grid.length; i++) {
    const grids = grid[i];
    for (let j = 0; j < grids.length; j++) {
        if (grid[0][0] === false) {
            alert("you won");
            
        }
    }
    
}
*/




/* Jquery */

$('#reset').on("click", function () {
    alert("is working");
})



/* Logging the symbol into the squares */

// top-left
$('#top-left').on("click", function () {
    console.log("top left square");
    $('#top-left').text("X");
    first.topLeft = 'x';
    winningState();
})
// top-middle
$('#top-middle').on("click", function () {
    console.log("top middle square");
    $('#top-middle').text("X");
    first.topMiddle = 'x';
    winningState();
})
// top-right
$('#top-right').on("click", function () {
    console.log("top right square");
    $('#top-right').text("X");
    first.topRight = 'x';
    winningState();
})
// middle-left
$('#middle-left').on("click", function () {
    console.log("middle left square");
    $('#middle-left').text("X");
    grid[1][0] = "x";
})
// middle-middle
$('#middle-middle').on("click", function () {
    console.log("middle middle square");
    $('#middle-middle').text("X");
    grid[1][1] = 'X';
})
// middle-right
$('#middle-right').on("click", function () {
    console.log("middle right square");
    $('#middle-right').text("X");
    grid[1][2] = 'X';
})
// bottom-left
$('#bottom-left').on("click", function () {
    console.log("bottom left square");
    $('#bottom-left').text("X");
    grid[2][0] = 'X';
})
// bottom-middle
$('#bottom-middle').on("click", function () {
    console.log("bottom middle square");
    $('#bottom-middle').text("X");
    grid[2][1] = 'X';
})
// bottom-right
$('#bottom-right').on("click", function () {
    console.log("bottom right square");
    $('#bottom-right').text("X");
    grid[2][2] = 'X';
})
