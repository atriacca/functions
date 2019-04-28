function largest(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return num1;
    } else if (num2 > num3) {
        return num2;
    } else {
        return num3;
    }
}
console.log(largest(3, 5, 7));

function oddOrEven(num1) {
    if (num1 % 2 == 0) {
        return "number is even";
    } else {
        return "number is odd";
    }
}
console.log(oddOrEven(3));

function str(s) {
    if (s.length <= 20) {
        return (s + s);
    } else {
        return s.substr(0, (s.length / 2));
    }
}
console.log(str('cut this string in half if more than 20 characters'));

/*
Optional Challenge
Write a function that accepts a number ‘n’ as a parameter. Then print the first ‘n’ Fibonacci numbers 
and return their sum.
The first numbers are:

1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144

So if n were 6, the sum of 1+1+2+3+5+8 would be 20

Don't hardcode the sequence.

Write a function that accepts a string as a parameter. Return the most frequently occuring letter in 
that string. ( White spaces count as a letter )
*/