//Use TDD practices to build a function that translates from English to Pig Latin

function translate(string) {
    let lowerCaseString = string.toLowerCase();
    if (lowerCaseString[0] === "a" || lowerCaseString[0] === "e") {
        return lowerCaseString+"way";
    } else {
        let firstLetter = lowerCaseString[0];
        let newString = lowerCaseString.substr(1);
        return newString + firstLetter + "ay";
    }
};

module.exports = translate;