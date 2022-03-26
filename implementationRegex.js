/*Restrict Possible Usernames
    Usernames are used everywhere on the internet.
    They are what give users a unique identity on their favorite sites.

    You need to check all the usernames in a database.
    Here are some simple rules that users have to follow when creating their username.

    1. Usernames can only use alpha-numeric characters.

    2. The only numbers in the username have to be at the end.
    There can be zero or more of them at the end. Username cannot start with the number.

    3. Username letters can be lowercase and uppercase.

    4. Usernames have to be at least two characters long.
    A two-character username can only use alphabet letters as characters.
*/

const userName = "Rhenaldo Arya Pangestu";
const userCheck = /^[a-z]([0-9]{2,}|[a-z]+\d*)$/i;
const result = userCheck.test(userName);
console.log(result); // false

/*
    Explanation:
    1. ^ - start of input
    2. [a-z] - first character is a letter
    3. [0-9]{2,0} - ends with two or more numbers
    4. | - or
    5. [a-z]+ - has one or more letters next
    6. \d* - and ends with zero or more numbers
    7. $ - end of input
    8. i - ignore case of input
*/
