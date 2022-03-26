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

/*
    result:
    [
    'O', 'e', 'o', 'u',
    'o', 'e', 'a', 'i',
    'o', 'u', 'a', 'i'
    ]
*/

/*
    It can be cumbersome to write all of the characters that we want to match
    we have to write it one-by-one from a to z, like this abcdefghijklmn.. and so on.
    Fortunately, there is a build in function that can help us to avoid write all of those characters.
    Still use character set but with a bit differ, see the code:
*/

const quoteLearning = "Learn, unlearn and relearn";
const findAllCharacters = /[a-z]/gi;
const resultAllCharacters = quoteLearning.match(findAllCharacters);
console.log(resultAllCharacters);

/*
    result:
    [
    'L', 'e', 'a', 'r', 'n',
    'u', 'n', 'l', 'e', 'a',
    'r', 'n', 'a', 'n', 'd',
    'r', 'e', 'l', 'e', 'a',
    'r', 'n'
    ]
*/

/*
    Using hypen (-) to match a range of characters is not limited to letters.
    It also works to match a range of numbers.

    For example, /[0-5]/ matches any number between 0 until 5, including the 0 and 5.
*/

const words = "Indonesia independent in 1945 and was colonized for 350 years";
const wordsRegex = /[h-s0-3]/gi;
const resultWord = words.match(wordsRegex);
console.log(resultWord);

/*
    result:
    [
    'I', 'n', 'o', 'n', 's', 'i',
    'i', 'n', 'p', 'n', 'n', 'i',
    'n', '1', 'n', 's', 'o', 'l',
    'o', 'n', 'i', 'o', 'r', '3',
    '0', 'r', 's'
    ]
*/

/*
    Thus far, we only learn about how to matching all the characters,
    but never learning about how we NOT match the characters.

    Now, we will learn it.
    To NOT to match the characters we want, we using another character sets,
    and it is called "negated character sets".

    To create a negated character set, you place a CARET character (^) after the opening bracket
    and before all the characters you DO NOT WANT TO MATCH.

    CARET character also used for searching at the beginning of strings.

    NOTE: characters are like ., !, [, @, / and WHITE SPACE are matched
    the negated character set only work according to the pattern we setting it up.
*/
const simpleWord = "There are 3 mice in the yard.";
const regexPattern = /[^a-o]/gi; // not matches all characters from a until o with ignore case sensitive and not only find first macthes word
const resultSimple = simpleWord.match(regexPattern);
console.log(resultSimple);

/*
    result:
    [
    'T', 'r', ' ', 'r',
    ' ', '3', ' ', ' ',
    ' ', 't', ' ', 'y',
    'r', '.'
    ]
*/

/*
    If CARET character used for search at the beginning of strings,
    how we can search at THE END of the string?

    For search at THE END of string we can use $ (dollar) sign in Regular Expression
*/
const caboose = "The last car on a train is the caboose";
const regexCaboose = /caboose$/;
const wrongEndCaboose = /ending$/;
const resultCaboose = regexCaboose.test(caboose); // true
const anotherResultCaboose = wrongEndCaboose.test(caboose); // false

console.log(resultCaboose, anotherResultCaboose);

/*
    result:
    true false
*/

/*
    There are an option to search a character that occur one or more times.
    What does that mean?
    For example, you have a character that contain word "Mississipi"
    and you want to an output a character that occur one or more times.
    To be able doing that, we could use another syntax in Regular Expression
    that syntax is + (plus) sign
*/

const misspellingWord = "Mississipi";
const regexSpelling = /s+/g;
const resultSpelling = misspellingWord.match(regexSpelling);
console.log(resultSpelling);

/*
    result:
    [ 'ss', 'ss' ]
*/

/*
    Also we have an option to matches characters that occur zero or more times.
    To be able doing that, we can use another sytax, that syntax is * (asteriks) sign
*/

const asteriksRegex = /si*/g;
const resultAsteriks = misspellingWord.match(asteriksRegex);
console.log(resultAsteriks);

/*
    result:
    [ 's', 'si', 's', 'si' ]
*/

/*
    Matching all numbers and characters using longhand and shorthand.

    As you learn, you could find all of characters using square bracket
    and fill in with the character you want to search. e.g /[a-z]/.

    So, if you want to find all of characters that maybe contain a number
    or even a uppercase character and event the underscore (_).
    Probably you will write the regex like this:
    /[A-Za-z0-9_]/

    Fortunately, there is a shorthand for writing all of those Regular Expression
    and that is equal for that longhand find characters using Regex.
    that shorthand is:
    \w
*/

const anotherQuote = "Change is the end result of all true learning";
const regexQuote = /\w/g;
const resultQuote = anotherQuote.match(regexQuote).length;
console.log(resultQuote); // 37 (total characters inside of anotherQuote variable)

/*
    Is there an opposite of those pattern?
    Absolutely.
    The opposite of those pattern is
    \W (with the capital letter)
*/
const oppositeRegexQuote = /\W/g;
const resultOpposite = anotherQuote.match(oppositeRegexQuote).length;
console.log(resultOpposite); // 8 (count from non-alphanumeric)

/*
    non-alphanumeric is like !@#$%^&*() and so on
*/

/*
    There are another shorthand for looking only FOR NUMBER or DIGIT
    the syntax is:
    \d
    with lowercase d
*/

const movieName = "2014: Interstellar movie was released";
const regexOnlyNumber = /\d/g;
const resultOnlyNumber = movieName.match(regexOnlyNumber).length;
console.log(resultOnlyNumber); // 4 (only looking for number / digit, 2014 consist of 4 characters)

/*
    for the opposite of number or digit only we use another syntax.
    the syntax is:
    \D
    with uppercase D
*/

const notOnlyNumber = /\D/g;
const resultNotOnlyNumber = movieName.match(notOnlyNumber).length;
console.log(resultNotOnlyNumber); // 33 (count from total characters at movieName variable)

/*
    character class for search the whitespace, return, tab, form feed, and newline
    that syntax is:
    \s
*/

const sample = "Whitespace is important in separating words.";
const countWhitespace = /\s/g;
const resultWhitespace = sample.match(countWhitespace).length;
console.log(resultWhitespace);

/*
    result:
    [ ' ', ' ', ' ', ' ', ' ' ]
    OR
    5 (if we using .length built-in function)
*/

/*
    The opposite for NOT looking the whitespace is:
    /\S/
    with s uppercase
*/
const notCountWhitespace = /\S/g;
const resultNotCountWhitespace = sample.match(notCountWhitespace);
console.log(resultNotCountWhitespace);

/*
    result:
    [
    'W', 'h', 'i', 't', 'e', 's', 'p',
    'a', 'c', 'e', 'i', 's', 'i', 'm',
    'p', 'o', 'r', 't', 'a', 'n', 't',
    'i', 'n', 's', 'e', 'p', 'a', 'r',
    'a', 't', 'i', 'n', 'g', 'w', 'o',
    'r', 'd', 's', '.'
    ]
    OR
    39 (if we using .lenght built-in function)
*/

/*
    How if you want to specify your pattern like lower and upper of patterns?
    You can do that by use patterns called quantity specifiers.
    Quantity specifiers are used with curly brackets {}.
    You put two numbers between the curly-brackets - for the lower and upper number of patterns.
*/

const A4 = "aaaah";
const A2 = "aah";
const multipleA = /a{3,5}h/;
console.log(multipleA.test(A4), multipleA.test(A2)); // true false;
