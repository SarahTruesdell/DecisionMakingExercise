let randomnum = Math.floor((Math.random()*5));
randomnum++;
console.log(randomnum)

//other option
//let random = Math.floor((Math.random()))+1;
//console.log(randomnum)

//other option
//let random = Math.random();
//randomnum *= 5;
//randomnum = Math.floor(randomnum);
//randomNum++;
//console.log(randomnum)

if (randomnum >=4){
    console.log("Greater than or equal to 4");
} else if (randomnum === 3 || randomnum === 2){
    console.log("Equal to 2 or 3");
} else {
    console.log("Equal to 1");
}

if (randomnum !== 3){
    console.log("Not equal to 3")
}

if (randomnum !== 3 && randomnum !== 5){
    console.log("Not equal to 3 AND not equal to 5")
}


if (randomnum === 2 || randomnum === 4){
    console.log("Equal to 2 or equal to 4");
}


//Bonus

// if (randomnum >= 4){
    // console.log("greater than or equal to 4");
// } else {
    // console.log("less than 4")
// }

randomnum = (randomnum >= 4) ? "Greater than or equal to 4" : "Less than or equal to 4";
console.log(randomnum);


//Switch statement takes a parameter/argument and returns something based on the case (or the match) that the parameter/argument goes with.
//In this example if randomnum is 1, it will display "one" in the terminal, if randomnum is 2, it will display "two" in the terminal, etc
switch (randomnum) {
    case 1:
        console.log("one");
        //Break keywords are needed between each case so that the code for the case that follow does not also run
        break;
        case 2:
            console.log("two");
            break;
        case 3:
            console.log("three");
            break;
        case 4:
            console.log("four");
            break;
        case 5:
            console.log("five");
        //There is no need for a break at the end of a switch statement since there are no other cases.
}
