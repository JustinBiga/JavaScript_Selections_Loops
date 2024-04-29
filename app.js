console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

for (let i = 1; i <= 100; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
    else{
        continue;
    }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

for (let i = 1; i <= 100; i++){
    if (i % 3 == 0)
    console.log(`FIZZ`);
    if (i % 5 ==0)
    console.log(`BUZZ`);
    if (i % 3 == 0 && i % 5 ==0)
    console.log(`FIZZBUZZ`);
}

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");
console.log("\n While loop on Ex 1:\n====================\n")


let i = 1;
while (i <= 100) {
    if (i % 2 !== 0) {
        console.log(i);
    }
    i++;
}

console.log("\n do-while loop on Ex 1:\n====================\n")

let z = 1;
do{
    if (z % 2 != 0){
    console.log(z);
    }
    z++;
    continue
}
while (z <= 100);

// while loop on Exercise 2
console.log("\n While loop on Ex 2:\n====================\n")

let y = 1;
while (y <= 100){
    if (y % 3 == 0){
        console.log(`FIZZ`);
    }
    if (y % 5 == 0){
        console.log(`BUZZ`);
    }
    if (y % 3 == 0 && y % 5 == 0){
        console.log(`FIZZBUZZ`);
    }
    y++;
}
// do-while for Exercise 2
console.log("\n do-while loop on Ex 2:\n====================\n")

let x = 1;
do {
    if (x % 3 == 0){
        console.log(`FIZZ`);
    }
    if (x % 5 == 0){
        console.log (`BUZZ`);
    }
    if (x % 3 == 0 && x % 5 == 0){
        console.log(`FIZZBUZZ`);
    }
    x++;
}
while (x <= 100);

//Exercise 4.
console.log("\n Exercise 4: Find Value\n=======================\n")


let value = Math.round(Math.random() * 500);
let num = Math.round(Math.random() * (500 - 100) + 100);

let found = false;
for (let i = 1; i <= num; i++) {
    if (i === value) {
        console.log("Found value!");
        found = true;
        break;
    }
}
if (!found) {
    console.log("Did not find value");
}

//Exercise 5.
console.log("\n Exercise 5: Customized FIZZBUZZ \n================================\n")

let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let n = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);

for (let i = start; i <= n; i++) {
    if (i % fizzDivisor === 0 && i % buzzDivisor === 0) {
        console.log('FIZZBUZZ');
    } else if (i % fizzDivisor === 0) {
        console.log('FIZZ');
    } else if (i % buzzDivisor === 0) {
        console.log('BUZZ');
    }
}
