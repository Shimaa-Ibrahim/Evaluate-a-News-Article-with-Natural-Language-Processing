import { checkInput } from '../src/client/js/inputChecker'
let output;

describe("Testing checkInput functionality", () => {

    test("Testing the checkInput() function", () => {
        expect(checkInput).toBeDefined();
    });

    test("should return falsy object if empty input", () => {
        output = {
            check: false,
            msg: 'url required!'
        };
        expect(checkInput('', 'url')).toEqual(output);
    });

    test("should return falsy object if invalid url", () => {
        output = {
            check: false,
            msg: 'Invalid URL!'
        };
        expect(checkInput('invalidUrl', 'url')).toEqual(output);
    });

    test("should return truthy object if valid url", () => {
        output = {
            check: true
        };
        
        expect(checkInput('http://www.article.com', 'url')).toEqual(output);
    });


});
