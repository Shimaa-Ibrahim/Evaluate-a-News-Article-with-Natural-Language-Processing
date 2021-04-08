import { clickTextButton, clickURLButton } from '../src/client/js/btnsClickHandler'

document.body.innerHTML =
    `<div id="urlForm" style="display:none;"></div>
     <div id="textForm" style="display:none;"></div>
     <button id="url"/>
     <button id="text"/>`;

const urlBtn = document.getElementById('url');
const txtBtn = document.getElementById('text');
const urlform = document.getElementById('urlForm');
const textform = document.getElementById('textForm');

urlBtn.addEventListener('click', clickURLButton);
txtBtn.addEventListener('click', clickTextButton);

// url button
describe("Testing clickURLButton functionality", () => {
    test("Testing the clickURLButton() function", () => {
        expect(clickURLButton).toBeDefined();
    });

    test("should change the display of url form to block", () => {
        urlBtn.click();
        expect(urlform.style.display).toEqual("block");
    });

    test("should change the display of text form to none", () => {
        urlBtn.click();
        expect(textform.style.display).toEqual("none");
    });

});

// text button
describe("Testing clickTextButton functionality", () => {
    test("Testing the clickURLButton() function", () => {
        expect(clickURLButton).toBeDefined();
    });

    test("should change the display of text form to block", () => {
        txtBtn.click();
        expect(textform.style.display).toEqual("block");
    });

    test("should change the display of url form to none", () => {
        txtBtn.click();
        expect(urlform.style.display).toEqual("none");
    });

});