let dialog = document.getElementsByClassName("dialog")[0];
let buyButtons = document.getElementsByClassName("buy_button");
let close = document.getElementsByClassName("close")[0];
let saveButton = document.getElementById("saveButton");

for (let button of buyButtons) {
    button.onclick = function () {
        dialog.style.display = "block";
    }
}

close.onclick = function () {
    dialog.style.display = "none";
}

saveButton.onclick = function () {
    dialog.style.display = "none";
}
