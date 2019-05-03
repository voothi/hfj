var balance = 10500;
var cameraOn = true;
function steal(steal_balance, amount) {
    cameraOn = false;
    if (amount < steal_balance) {
        balance = steal_balance - amount;
    }
    cameraOn = true;
    return amount;
}
var amount = steal(balance, 1250);
console.log("Criminal: you stole " + amount + "!");
console.log(balance)
console.log(cameraOn)