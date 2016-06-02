$("#calcBody").draggable();

function addChar(input, character) {
    if (input.value === null || input.value == "0") {
        input.value = character;
    }else {
        input.value += character;
    }
}

function compute(form) {
    form.display.value = eval(form.display.value)
}

function checkNum(str) {
    for (var i = 0; i < str.length; i++) {
        var ch = str.substring(i, i+1);
        if (ch < "0" && ch >"9") {
            if (ch !="+" && ch !="-" && ch !="*" && ch !="/" && ch !=".") {
                alert("Invalid Entry");
                return false;
            }
        }
    }
    return true;
}

function deleteChar(form) {
	form.value = form.value.substring(0, form.value.length-1);
}