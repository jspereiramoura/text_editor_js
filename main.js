var editor, textoEscrito;

editor = document.getElementById("editor");
textoEscrito = editor.innerHTML;


function formatDoc(cmd, value) {
    document.execCommand(cmd, false, value);
    editor.focus();
}

const textColorButton = document.getElementById("text-color__button");
const paleteTextColor = document.getElementById("color-palete");

textColorButton.addEventListener("click", function() {
    if (paleteTextColor.style.display == "flex")
        paleteTextColor.style.display = "none";
    else
        paleteTextColor.style.display = "flex";
});

const item__colorPalete = document.getElementsByClassName("item__color-palete");

Array.prototype.forEach.call(item__colorPalete, function(el) {
    el.addEventListener('click', () => {
        formatDoc('forecolor', el.style.backgroundColor);
    });
});

function fontsizeChange(fontsize) {
    const selection = window.getSelection();
    const element = selection.anchorNode.parentNode;

    if (element.style.fontSize != fontsize) {
        const range = selection.getRangeAt(0);
        let change = document.createTextNode(range);
        let fontTag = document.createElement("font");
        fontTag.style.fontSize = fontsize;

        range.deleteContents();
        fontTag.appendChild(change);
        range.insertNode(fontTag);
    }
}

document.getElementById("minus-font").addEventListener('click', () => {
    var select = document.getElementById("fontsize__select");
    const fontsize = parseInt(select.value.replace("px", ""));
    if (fontsize > 12) {
        select.value = fontsize - 2 + "px";
        fontsizeChange(select.value);
    }
});

document.getElementById("plus-font").addEventListener('click', () => {
    var select = document.getElementById("fontsize__select");
    const fontsize = parseInt(select.value.replace("px", ""));

    if (fontsize < 32) {
        select.value = fontsize + 2 + "px";
        fontsizeChange(select.value);
    }
});