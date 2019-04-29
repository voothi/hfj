var randomLoc = Math.floor(Math.random() * 5);
var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;

var guess;
var hits = 0;
var guesses = 0;

var isSunk = false;


while (isSunk == false) {
    guess = prompt("Готовноть, прицел, огонь! (введите число 0-6:)");

    if (guess < 0 || guess > 6) {
        alert("Введите привильное значение - число 0-6:");
    } else {
        guesses++;
        alert("Число догадок: " + guesses);

        if (guess == location1 || guess == location2 || guess == location3) {
            alert("Точное попадание!");

            hits++;

            if (hits == 3) {
                isSunk = true;
                alert("Корабль потоплен!");
            }
        } else {
            alert("Мазила!");
        }
    }
    var stats = "Вы выстрелили " + guesses + " раз для потопления корабля. " + "Ваша точность составила " + (3 / guesses)
    alert(stats);
}

