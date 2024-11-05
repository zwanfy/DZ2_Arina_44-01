var numbers =   [10, 20, 30, 50, 235, 3000];
for (var    i = 0; i < numbers.length-1; i++) {
var firstDigit = numbers[i].toString()[0];
if ( firstDigit === '1' || firstDigit === '2' || firstDigit === '5' ) {
    console.log(numbers[i]);
 }
}

for (var i = 20; i >= 0; i--) {
    console.log(i)
}

const trafficLight = {
    'красный': 'Стоп',
    'желтый': 'Приготовьтесь',
    'зеленый': 'Можно идти'
};
let color = prompt("Введите цвет светофора(красный, желтый, зеленый):").toLocaleLowerCase();
if (trafficLight[color]) {
    alert(trafficLight[color]);
}   else {
    alert("Введите один из цветов: красный, желтый, зеленый.");
}