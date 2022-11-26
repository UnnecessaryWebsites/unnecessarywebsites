var loop = setInterval(updateText, 100);

function updateText() {
    var inputBox = document.getElementById("input-box");
    var outputBox = document.getElementById("output-box");

    outputBox.value = inputBox.value;
}