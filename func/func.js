function speak(kind) {
    var defaultSound = "";

    if (kind == "dog") {
        alert("WOOF!!");
    } else if (kind == "cat") {
        alert("Meow~~");
    } else {
        alert(defaultSound);
    }
}

var pet = prompt("Введите тип питомца: ");
speak(pet);