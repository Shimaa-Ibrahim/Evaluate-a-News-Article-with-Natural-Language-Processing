import { handleResponse } from '../src/client/js/responseHandler'

// Set up document body
document.body.innerHTML =
    '<div id="results" style="display:none;"><div id="res"></div></div>';
let input;
let output;

describe('Testing handleResponse functionality', () => {
    test("Testing the checkInput() function", () => {
        expect(handleResponse).toBeDefined();
    });

    test("Should return sentiment Analysis", () => {
        input = {
            status: {
                code: "0"
            },
            score_tag: "P",
            agreement: "AGREEMENT",
            subjectivity: "SUBJECTIVE",
            confidence: "98",
            irony: "NONIRONIC"
        }
        output = '<div id="results" style="display: block;">' +
            '<div id="res">' +
            '<p>Polarity : Positive</p>' +
            '<p>Agreement : AGREEMENT</p>' +
            '<p>Subjectivity : SUBJECTIVE</p>' +
            '<p>Confidence : 98</p>' +
            '<p>Irony : NONIRONIC</p>' +
            '</div></div>'
        handleResponse(input);
        expect(document.body.innerHTML).toEqual(output);

    });

    test("Sould return error message", () => {
        input = {
            status: {
                code: "1",
                msg: "Invalid URL!"
            }
        }
        output = '<div id="results" style="display: block;"><div id="res">' +
            '<p>Error : Invalid URL!</p></div></div>'

        handleResponse(input);
        expect(document.body.innerHTML).toBe(output);
    });
});