//Use TDD practices to build a function that translates from English to Pig Latin

function translate(string) {
    let lowerCaseString = string.toLowerCase();
    if (lowerCaseString[0] === "a" || lowerCaseString[0] === "e" || lowerCaseString[0] === "i" || lowerCaseString[0] === "o" || lowerCaseString[0] === "u") {
        return lowerCaseString+"way";
    } else if (lowerCaseString[1] === "a" || lowerCaseString[1] === "e" || lowerCaseString[1] === "i" || lowerCaseString[1] === "o" || lowerCaseString[1] === "u") {
        let firstLetter = lowerCaseString[0];
        let newString = lowerCaseString.substr(1);
        return newString + firstLetter + "ay";
    } else  if (lowerCaseString[2] === "a" || lowerCaseString[2] === "e" || lowerCaseString[2] === "i" || lowerCaseString[2] === "o" || lowerCaseString[2] === "u"){
        let firstTwoLetters = lowerCaseString[0] + lowerCaseString[1];
        let newString = lowerCaseString.substr(2);
        return newString + firstTwoLetters + "ay";
    } else {
        let firstThreeLetters = lowerCaseString[0] + lowerCaseString[1] + lowerCaseString[2];
        let newString = lowerCaseString.substr(3);
        return newString + firstThreeLetters + "ay";
    }
};

module.exports = translate;