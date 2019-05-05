function lieDetectorTest() {
    var lies = 0;
    var stolenDiamond = {};
    if (stolenDiamond) {
        console.log("You stole the diamond");
        lies++;
    }
    // пустой объект, true +1
    
    var car = {
        keysInPocket: null
    };
    
    if (car.keysInPocket) {
        console.log("Uh oh, guess you stole the car!");
        lies++;
    }
    // null, false
    
    if (car.emptyGasTank) {
        console.log("You drove the car after you stole it!");
        lies++;
    }
    // несуществующее свойство объекта - undef, false

    var foundYouAtTheCrimeScene = [];
    if (foundYouAtTheCrimeScene) {
        console.log("A sure sign of guilt");
        lies++;
    }
    // пустой массив, true

    if (foundYouAtTheCrimeScene[0]) {
        console.log("Caught with a stolen item!");
        lies++;
    }
    // первый эл массива, false

    var yourName = " ";
    if (yourName) {
        console.log("Guess you lied about your name");
        lies++;
    }
    // не пустая строка, true

    return lies;
}
var numberOfLies = lieDetectorTest();
console.log("You told " + numberOfLies + " lies!");
if (numberOfLies >= 3) {
    console.log("Guilty as charged");
}