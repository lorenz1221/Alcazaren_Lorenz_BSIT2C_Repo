var dogName = "Barbara";
var dogWeight = 25;
if (dogWeight > 20) {
    console.log(dogName + "says WOOF WOOF");
} else {
    console.log(dogName + "says woof woof");
}

var dogName = "Natoy";
var dogWeight = 21;
if (dogWeight > 20) {
    console.log(dogName + "says WOOF WOOF");
} else {
    console.log(dogName + "says woof woof");
}

var dogName = "Bon";
var dogWeight = 19;
if (dogWeight > 20) {
    console.log(dogName + "says WOOF WOOF");
} else {
    console.log(dogName + "says woof woof");
}

var dogName = "Ash";
var dogWeight = 15;
if (dogWeight > 20) {
    console.log(dogName + "says WOOF WOOF");
} else {
    console.log(dogName + "says woof woof");
}

function bark(name, weight) {
    if (weight > 20) {
        console.log(name + "says WOOF WOOF");
    } else {
        console.log(name, + "says woof woof");
    }
}

bark("Natoy", 21);
bark("Ash", 15);
bark("Bon", 19);
bark("Barbara", 25);