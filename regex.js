/*
    Regular expressions or Regex are used in programming language to match parts of strings.
    You create a patterns to help you do that matching.

    JavaScript has multiple ways to use regexes.
    One way to test a regex is using the .test() method
    .test() method takes the regex, applies it to a string (inside of its parantheses)
    and will return true or false if your pattern finds something or not.

    Regex is case sensitive, if there is a differ that will throw a false automatically.
*/

const myString = "Rhenaldo";
const myRegex = /aldo/;
const result = myRegex.test(myString);
console.log(result); // true

/*
    Using regex like above is limitted because we only have one pattern.
    We can search for multiple patterns using the alternation operator (OR) and its symbol is |
*/
const pet = "Aldo has a pet cat";
const petRegex = /dog|cat|bird/;
const petResult = petRegex.test(pet);
console.log(petResult); // true

/*
    For ignores the sensitive case we can use the flag.
    There are other flag but here we'll focus on the flag to ignore the sensitive case.
    That flag is "i", you can use it by appending it to the regex
    example: /ignorecase/i
*/

const alwaysLearn = "Still learning about coding and tech stuff";
const learnRegex = /LearNinG/i;
const learnResult = learnRegex.test(alwaysLearn);
console.log(learnResult); // true

/*
    Thus far we only checking if a pattern exists or not within a string.
    We can also extract the actual matches that we found with the .match() method

    NOTE: .match() method is the "opposite" of the .test() method.
    Which means, we only swap the variable when we store the regex result.
*/

const extractString = "Aldo always learn about 'coding' every single day";
const extractRegex = /coding/;
const extractResult = extractString.match(extractRegex);
console.log(extractResult);
/*
    result:
    [
        'coding',
        index: 25,
        input: "Aldo always learn about 'coding' every single day",
        groups: undefined
    ]
*/
