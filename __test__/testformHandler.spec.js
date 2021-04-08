import { handleSubmit } from '../src/client/js/formHandler'
// document.body.innerHTML =
//     `<form id="form">
//      <input id="id" value="https://learn.meaningcloud.com/developer/sentiment-analysis/2.1/doc/what-is-sentiment-analysis">
//      <button id="button" type="submit"/>
//      </form>`;
// const form = document.getElementById("form");
// form.addEventListener("submit", ()=> handleSubmit(event, id,'url'));

describe("Testing handleSubmit functionality", () =>{
    test("Testing handleSubmit() function", () => {
            expect(handleSubmit).toBeDefined();
    });




});