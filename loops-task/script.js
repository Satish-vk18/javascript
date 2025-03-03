//Write a for loop to print numbers from 1 to 10.

for(var i=1;i<=10;i++){
    console.log(i);
}

//Write a for loop to calculate the sum of all numbers from 1 to 100.

var sum = 0
for(var i=1;i<=100;i++){
    sum = sum +i
}
console.log(`sum of numbers from 1 to 100 is ${sum}`);

//Write a for loop to print the multiplication table of 7 (up to 10).

var n = 7
for(var i=1;i<=10;i++){
    console.log(`${n} * ${i} = ${n * i}`);
}

//Write a for loop to print all even numbers between 1 and 20.

for(var i=1;i<=20;i++){
    if(i%2==0){
        console.log(i);
    }
}

//or

for(var i=2;i<=20;i+=2)
console.lohg(i)

//Write a for loop to calculate the factorial of a number (e.g., 5!).

var num = 5
sum = 1
for(var i=1;i<=5;i++){
    sum = sum * i
}
console.log(`${num}! is ${sum}`)

//Write a for loop to calculate the power of a number (e.g., 2^5).

var num = 2
var power = 5
for(var i=0;i<=power;i++){
    sum = num ** i
}
console.log(`${num}^${power} is ${sum}`)

//Write a for loop to print all odd numbers between 20 and 1 in reverse order.

for(var i=20;i>=1;i--){
    if(i%2 != 0 ){
        console.log(i)
    }
}
