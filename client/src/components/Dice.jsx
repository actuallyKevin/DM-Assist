//! Dice function => 3d6 = Dice(3, 6); 8d4 = Dice(8, 4)

function Dice(numberOfDice, maxValue){
    let reply = [];
    for(i = 1; i <= numberOfDice; i++){
        let face = Math.floor(Math.random()*maxValue) + 1;
        reply.push(face)
    }
    let reply_sum = reply.reduce((a, b) => a + b, 0);
    return `${reply}, total = ${reply_sum}`
}