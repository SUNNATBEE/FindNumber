var startGame = confirm("Sonni top oyinini oynashni xoxlasangiz OK tugmasini bosing")
var elForm = document.querySelector(".form-js");
var elInput = document.querySelector(".input-js");
var elAlert = document.querySelector(".result-js");
var elAttemps = document.querySelector(".attemps");
var elBtn = document.querySelector(".btn")
var randomNumber = Math.round(Math.random() * 100);

if(startGame == true){
    elForm.classList.add("form-block");
}else{
    alert("Bosh vaqtingizda oynab koring")
}
elAlert.textContent = "Bu yerda sizga raqam topishingizga yordam beramiz"
var attempsNumber = 6;
elAttemps.textContent = attempsNumber;
elForm.addEventListener("submit" , function(evt){
    evt.preventDefault()
    var inputValue = Number(elInput.value);
    attempsNumber--;
    elAttemps.textContent = attempsNumber;
    if (inputValue == 0 || "") {
        alert("iltimos son kiriting bolmasa urinishlar sonigiz kamayib boradi");
    } else if (inputValue == randomNumber) {
        elAlert.textContent =
        inputValue + " soni random raqami edi tabriklaymiz siz yutdingiz";
        elInput.disabled = true;
        elBtn.disabled = true;
    } else if (attempsNumber === 0) {
        elAlert.textContent = "Afsuski siz yutqizdingiz";
        elInput.disabled = true;
        elBtn.disabled = true;
        elAttemps.textContent = "Urinishlar soni tugadi";
    } else if (inputValue > randomNumber) {
        elAlert.textContent = inputValue + " soni random raqamdan katta";
    } else if (inputValue < randomNumber) {
        elAlert.textContent = inputValue + " soni random raqamdan kichkina";
    } 
    elInput.value = ""
})