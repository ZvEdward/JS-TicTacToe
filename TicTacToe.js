const prompt = require('prompt-sync')();

const board = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let turn = 0;

function ifWon(board){
    let won = false;
    if(compair(board[0], board[1], board[2])){
        won = true;
    } else if(compair(board[0], board[1], board[2])){
        won = true;
    } else if(compair(board[3], board[4], board[5])){
        won = true;
    } else if(compair(board[6], board[7], board[8])){
        won = true;
    } else if(compair(board[0], board[3], board[6])){
        won = true;
    } else if(compair(board[1], board[4], board[7])){
        won = true;
    } else if(compair(board[2], board[5], board[8])){
        won = true;
    } else if(compair(board[0], board[4], board[8])){
        won = true;
    } else if(compair(board[2], board[4], board[6])){
        won = true;
    }
    return won;
}

function compair(x, y, z){
    return x === y && y === z ? true: false;
}

function printBoard(board){
    console.log("This is the board at the moment:");
    console.log(board[0] + "|" + board[1] + "|" + board[2] + "|");
    console.log("--------------------------------");
    console.log(board[3] + "|" + board[4] + "|" + board[5] + "|");
    console.log("--------------------------------");
    console.log(board[6] + "|" + board[7] + "|" + board[8] + "|");
    console.log("--------------------------------");
}

function getAndCheck(board){
    const notNumberPattern = /[^0-9]/;
    let check = prompt("Where would you like to go? ==>  ");
    let heDidntChooseAnythingStupid = false;
    while(!heDidntChooseAnythingStupid){
        if(notNumberPattern.test(check)){
            console.log("That wasn't a number, choose a number!");
            check = prompt("Where would you like to go? ==>  ");
        }else{
            check = Number(check);
            check --;
            if(check < 0 || check > 8){
                console.log("I dont know which board you playin on but it aint this one for sure!");
                check = prompt("Where would you like to go ON THIS BOARD THIS TIME? ==>  ");
            }else if(board[check] === "x" || board[check] === "O"){
                console.log("Excuse me! That place is taken!");
                check = prompt("Please choose a spot thats free ==>  ");
            }
            else{
                heDidntChooseAnythingStupid = true;
            }
        }
    }
    return check;
}


while(turn < 9)
{
    printBoard(board);
    turn%2 ? console.log("O turn"): console.log("X turn");
    let whereTo = getAndCheck(board);
    board[whereTo] = turn%2 ? "O" : "x";
    if(ifWon(board)){
        printBoard(board);
        console.log(`Look! ${turn%2 ? "O" : "X"} has won!`);
        turn = 10;
    }
    turn++;
}