console.log(1 + "2" + "2");// output:122 because it concatenate the string format.


console.log(1 + +"2" + "2");//output:32 because it has 1 + + "2" it add or perform concatenate operation.

console.log(1 + -"1" + "2");//output: 02 it perform minus opertion because operators are simultaneously occured.

console.log(+"1" + "1" + "2");// output:112 because it perform concatenation of a string and not affected by +"1".

console.log( "A" - "B" + "2");// output:NaN2 because string a can't be perform delete operation and it add "2" as concatenate string.

console.log( "A" - "B" + 2);//output:NAN because as same as upper case but it will not add 2 because 2 as a number not a string. 
