// Code your solutions in this file
const names = []

function writeCards(names, event) {
    let newCards = []
    for (let i = 0; i < names.length; i++) { 
        newCards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
    return newCards
}

writeCards(names, "birthday")


function countDown(number) {
    while (number >= 0) {
        console.log(number)
        number -= 1;
}

};


countDown(9);
//       1) returns an array of thank you messages for each name provided to the function
//   countDown()
//       2) invokes console.log once for each number, counting down from the number provided to zero
//       3) logs each number when counting down, starting from the number provided
