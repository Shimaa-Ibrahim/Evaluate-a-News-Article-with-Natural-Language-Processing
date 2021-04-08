function clickURLButton() {
    document.getElementById('textForm').style.display = "none";
    document.getElementById('urlForm').style.display = "block";

   
}

function clickTextButton() {
    document.getElementById('urlForm').style.display = "none";
    document.getElementById('textForm').style.display = "block";
}
export { 
    clickURLButton,
    clickTextButton
 }
