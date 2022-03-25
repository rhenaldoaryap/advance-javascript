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

/*
    Until now, we are only able to find the first string match characters once.
    If we want to find the match more than one at the first matching characters we can use another flag.
    That flag is "g" or global
*/

const findMore = "Twinkle, twinkle little start";
const moreRegex = /Twinkle/gi;
const resultMore = findMore.match(moreRegex);
console.log(resultMore);
/*
    result:
    [ Twinkle, twinkle ]
*/

/*
    Sometimes we don't need to know the exact characters in our patterns.
    We only care about the patterns not the characters.
    For doing that, we can use the wildcard character in regex, it also known as a dot or period.
*/

const dotCharacter = "Let's have fun with Regular Expression";
const dotCharacterAgain =
  "We could find any string that we want to search based on our pattern";
const findMyPattern = /fi.|.ve/; // We looking for a word start with "fi" OR ended with ve word
const firstResult = findMyPattern.test(dotCharacter);
const secondResult = findMyPattern.test(dotCharacterAgain);
console.log(firstResult, secondResult); // true true

/*
    Match single characters with multiple possibilies.
    Thus far we are only use the literal patterns /pattern/ and wildcard character /./
    Those are two extremes of regular expression, where one finds exact matches
    and the other matches everything.

    There are options that are a balance between those two exremes.
    The option is we use the character class and place it between of square bracket [ ].
    WTF is that?
    We could find the word based on the pattern but using the character class to filter the result.

    See code below:
*/

const bagStr = "bag";
const bigStr = "big";
const bugStr = "bug";
const begStr = "beg";
const bogStr = "bog";

const characterClassRegex = /b[aiue]g/;

const res1 = bagStr.match(characterClassRegex);
const res2 = bigStr.match(characterClassRegex);
const res3 = bugStr.match(characterClassRegex);
const res4 = begStr.match(characterClassRegex);
const res5 = bogStr.match(characterClassRegex);

console.log(res1, res2, res3, res4, res5);

/*
    result:
    [ 'bag', index: 0, input: 'bag', groups: undefined ] [ 'big', index: 0, input: 'big', groups: undefined ] [ 'bug', index: 0, input: 'bug', groups: undefined
] [ 'beg', index: 0, input: 'beg', groups: undefined ] null
*/

/*
    Another example of character class regular expression
*/

const quoteSample = "Once you stop learning you start dying";
const vowelRegex = /[aiueo]/gi;
const resultVowel = quoteSample.match(vowelRegex);
console.log(resultVowel);
