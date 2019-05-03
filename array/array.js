/**
 * Массив для хранения сортов мороженного
 * Определение массива ничинается с [
 * Перечисляются элементы массива через , (набора значений)
 * Первый элемент имеет индекс 0
 * В массив обычно группируются сходные данные, для хранения нескольких переменных
 * Массив - способ струкрурирования данных 
 */

var flavors = ["vanilla", "butterscotch", "lavender", "chocolate", "cookie dough"];
var arr1 = [1, 2, 3];

console.log(flavors[2]); //lavender

var flavorOfTheDay = flavors[2]; // Третий элемент массива

// Обновление значения в массиве
flavors[3] = "vanilla chocolate chip";

// Кол-во эл-во в массиве
var numFlavors = flavors.length;

// Возвращаем последний элемент, который был добавлен в массив
var last = flavors[flavors.length - 1];