var isSock = prompt("isSock");
var isSale = prompt("isSale");

if (isSock == true) {
    if (isSale == true) {
        alert("Купить!");
    } else {
        alert("isSale is " + isSale)
    }
} else {
    alert("isSock is " + isSock)
}