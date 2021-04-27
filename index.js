//Use TDD practices to build a function that translates from English to Pig Latin

function translate(string) {
    let lowerCaseString = string.toLowerCase();
    let firstVowelIndex = getVowelIndex(lowerCaseString);
    if (firstVowelIndex === 0) {
        return lowerCaseString + "way";
    } else {
        let firstConsonants = lowerCaseString.substr(0, firstVowelIndex);
        let restOfString = lowerCaseString.substr(firstVowelIndex);
        return restOfString + firstConsonants + "ay";
    }

};

function checkForVowel (letter) {
    if (letter === "a" ||
        letter === "e" || 
        letter === "i" || 
        letter === "o" || 
        letter === "u") {
            return true;
        }
};

function getVowelIndex (checkString) {
    for (let letter of checkString) {
        if (checkForVowel(letter)) {
            return checkString.indexOf(letter);
        }
    }
};

module.exports.translate = translate;