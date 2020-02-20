var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
    greeting = 'Evening is a great time for ice cream!';
} else if (hourNow > 12) {
    greeting = 'Afternoon is a great time for ice cream!!';
} else if (hourNow > 0) {
    greeting = 'Morning is a great time for ice cream!!';
} else {
    greeting = 'It is ALWAYS a great time for ice cream!'
}

document.write(greeting);