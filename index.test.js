
const translate = require("./index.js");

// Starting tests:
// Words starting with different vowels
// translate("apple") → "applyway"
// translate("else") → "elseway"
// Words starting with one consonant
// translate("giraffe") → "iraffegay" 

describe("translate function", () => {

    test("test apple", () => {
        let result = translate("apple");
        expect(result).toEqual("appleway");
    });

    test("test else", () => {
        let result = translate("else");
        expect(result).toEqual("elseway");
    });

    test("test giraffe", () => {
        let result = translate("giraffe");
        expect(result).toEqual("iraffegay");
    });

});
