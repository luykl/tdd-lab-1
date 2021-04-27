//Use TDD practices to build a function that translates from English to Pig Latin

function translate(string) {
    let lowerCaseString = string.toLowerCase();
    if (checkForVowel(lowerCaseString[0])) {
        return lowerCaseString+"way";
    } else if (checkForVowel(lowerCaseString[1])) {
        let firstLetter = lowerCaseString[0];
        let newString = lowerCaseString.substr(1);
        return newString + firstLetter + "ay";
    } else  if (checkForVowel(lowerCaseString[2])){
        let firstTwoLetters = lowerCaseString[0] + lowerCaseString[1];
        let newString = lowerCaseString.substr(2);
        return newString + firstTwoLetters + "ay";
    } else {
        let firstThreeLetters = lowerCaseString[0] + lowerCaseString[1] + lowerCaseString[2];
        let newString = lowerCaseString.substr(3);
        return newString + firstThreeLetters + "ay";
    }
};

function checkForVowel (letter) {
    if (letter === "a" 
        || letter === "e"
        || letter === "i"
        || letter === "o"
        || letter === "u"
        ) {
            return true;
        }
};

module.exports = translate;