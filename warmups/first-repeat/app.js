function firstRepeat(string) {
    checkLetter = "";
    for (var i = 0; i < string.length; i++) {
        if (checkLetter === "") {
            checkLetter += string[i];
        } else if (checkLetter.indexOf(string[i]) < 0) {
            console.log (string[i]);
            break;
        }
    }
}

firstRepeat("ggggggysudfygsuvy");