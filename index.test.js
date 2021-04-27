
const { translate } = require("./index.js");

// STARTING TESTS:
// Words starting with different vowels
// translate("apple") → "applyway"
// translate("else") → "elseway"
// Words starting with one consonant
// translate("giraffe") → "iraffegay" 

//ADDITIONAL TESTS
// At least five (5) tests for words starting with different vowels.
// At least two (2) tests for words starting with one consonant.
// At least one (1) test for words starting with two consonants.
// At least one (1) test for words starting with three consonants.
// At least one (1) test checking for lower case conversion.


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

    test("starts with a", () => {
        let result = translate("after");
        expect(result).toEqual("afterway");
    });

    test("starts with e", () => {
        let result = translate("empire");
        expect(result).toEqual("empireway");
    });
    
    test("starts with i", () => {
        let result = translate("igloo");
        expect(result).toEqual("iglooway");
    });
    
    test("starts with o", () => {
        let result = translate("omelet");
        expect(result).toEqual("omeletway");
    });
    
    test("starts with u", () => {
        let result = translate("upside");
        expect(result).toEqual("upsideway");
    });

    test("starts with y", () => {
        let result = translate("yellow");
        expect(result).toEqual("ellowyay")
    });
    
    test("starts one consonant", () => {
        let result = translate("consonant");
        expect(result).toEqual("onsonantcay");
    });
    
    test("starts with another consonant", () => {
        let result = translate("result");
        expect(result).toEqual("esultray");
    });

    test("check for lowercase", () => {
        let result = translate("Purple");
        expect(result).toEqual("urplepay");
    });

    test("starts with two consonants", () => {
        let result = translate("play");
        expect(result).toEqual("ayplay");
    });

    test("another starts with two consonants", () => {
        let result = translate("stick");
        expect(result).toEqual("ickstay");
    });

    test("another starts with three consonants", () => {
        let result = translate("throw");
        expect(result).toEqual("owthray");
    });

    // test("wtf", () => {
    //     let result = translate("rhythm");
    //     expect(result).toEqual("???");
    // });






});
