/*
1.Array squared
Square the value of every element in the array. 
Presume that you will only get numbers in the input array.
*/

const input = [1, 2, 3, 4, 5];
const result = input.map(map => map * map)
console.log(result) // [1, 4, 9, 16, 25];

/*
2.Sum of every positive element
If the given input is an array of numbers, 
return the sum of all the positives ones. If the array is 
empty or there aren’t any positive numbers, return 0.
*/

const input_2 = [1, -4, 12, 0, -3, 29, -150];
const result_2 = input_2.filter(num => num > 0).reduce((a, c) => a + c)
console.log(result_2) // 42;

/*
3.Calculate median and mean
Calculate the mean and median values of the number 
elements from the input array.
*/

const input_3 = [12, 46, 32, 64];
const result_3 = {mean: input_3.reduce((n,c) => n + c)/input_3.length , 
median: Math.ceil(input_3.reduce((n,c) => n + c)/input_3.length)}
console.log(result_3) //  { mean: 38.5, median: 39 }

/*
4.Get name initials
The given input is a string of multiple words with a single space between each of them. 
Abbreviate the name and return the name initials.
*/

const input_4 = "George Raymond Richard Martin";
const re = /\W*\W/;
const result_4 = input_4.split(re).map(letter => letter[0]).join("");
console.log(result_4) // "GRRM";

/*
5.Age difference from the youngest and oldest
Find the difference in age between the oldest and youngest family members, 
and return their respective ages and the age difference.
*/

const input_5 = [
  {
    name: "John",
    age: 13,
  },
  {
    name: "Mark",
    age: 56,
  },
  {
    name: "Rachel",
    age: 45,
  },
  {
    name: "Nate",
    age: 67,
  },
  {
    name: "Jennifer",
    age: 65,
  },
];

const process = input_5.map((a) => a.age).sort()
const result_5 = [Math.min(...process),Math.max(...process),
Math.max(...process) - Math.min(...process)]
console.log(result_5) // [13, 67, 54];

/*
6.Numeronyms
Devs like to abbreviate everything: k8s means Kubernetes, a11y means accessibility, l10n means localization. 
You get the Dev numeronyms by taking the first and the last letter and counting the number of letters in between. 
Words that have less than 4 letters aren’t abbreviated, because that would just be odd. 
The input is a sentence, and you should abbreviate every word that is 4 letters long or longer. 
There won’t be any punctuation in the sentence. g2d l2k e6e

*/

const input_6 = "Every developer likes to mix kubernetes and javascript";

// "E3y d7r l3s to mix k8s and j8t";