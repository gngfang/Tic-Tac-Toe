


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
    } else if (second.middleLeft == 'x' && second.middleMiddle == 'x' && second.middleRight == 'x') {
        alert('you won the game with the second way');

    } else if (third.bottomLeft == 'x' && third.bottomMiddle == 'x' && third.bottomRight == 'x') {
        alert('you won the game with the third way');

    } else if (fourth.topMiddle == 'x' && fourth.middleMiddle == 'x' && fourth.bottomMiddle == 'x') {
        alert('you won the game with the fourth way');
    } else if (fifth.topLeft == 'x' && fifth.middleLeft == 'x' && fifth.bottomLeft == 'x') {
        alert('you won the game with the fifth way');
    } else if (sixth.topRight == 'x' && sixth.middleRight == 'x' && sixth.bottomRight == 'x') {
        alert('you won the game with the sixth way');
    } else if (seven.topLeft == 'x' && seven.middleMiddle == 'x' && seven.bottomRight == 'x') {
        alert('you won the game with the sevenway');
    } else if (eight.topRight == 'x' && eight.middleMiddle == 'x' && eight.bottomLeft == 'x') {
        alert('you won the game with the eight way');
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
    fifth.topLeft = 'x';
    seven.topLeft = 'x';

    winningState();
})
// top-middle
$('#top-middle').on("click", function () {
    console.log("top middle square");
    $('#top-middle').text("X");

    first.topMiddle = 'x';
    fourth.topMiddle = 'x';
    winningState();
})
// top-right
$('#top-right').on("click", function () {
    console.log("top right square");
    $('#top-right').text("X");

    first.topRight = 'x';
    sixth.topRight = 'x';
    eight.topRight = 'x';
    winningState();
})
// middle-left
$('#middle-left').on("click", function () {
    console.log("middle left square");
    $('#middle-left').text("X");

    second.middleLeft = 'x';
    fifth.middleLeft = 'x';
    winningState();

})
// middle-middle
$('#middle-middle').on("click", function () {
    console.log("middle middle square");
    $('#middle-middle').text("X");

    second.middleMiddle = 'x';
    fourth.middleMiddle = 'x';
    seven.middleMiddle = 'x';
    eight.middleMiddle = 'x';
    winningState();
})
// middle-right
$('#middle-right').on("click", function () {
    console.log("middle right square");
    $('#middle-right').text("X");

    second.middleRight = 'x';
    sixth.middleRight = 'x';
    winningState();


})
// bottom-left
$('#bottom-left').on("click", function () {
    console.log("bottom left square");
    $('#bottom-left').text("X");

    third.bottomLeft = 'x';
    fifth.bottomLeft = 'x';
    eight.bottomLeft = 'x';
    winningState();
})
// bottom-middle
$('#bottom-middle').on("click", function () {
    console.log("bottom middle square");
    $('#bottom-middle').text("X");

    third.bottomMiddle = 'x';
    fourth.bottomMiddle = 'x';
    winningState();

})
// bottom-right
$('#bottom-right').on("click", function () {
    console.log("bottom right square");
    $('#bottom-right').text("X");

    third.bottomRight = 'x';
    sixth.bottomRight = 'x';
    seven.bottomRight = 'x';
    winningState();
})
