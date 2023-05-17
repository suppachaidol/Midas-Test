"use strict";
function getQuestionPart(phrases) {
    let a = 0;
    let word = '';
    for (let j = 1; j <= phrases[0].length; j++) {
        if (phrases[1].includes(phrases[0].slice(a, j))) {
            //console.log(phrases[0].slice(a,j),a,j)
            word = phrases[0].slice(a, j);
        }
        else {
            a++;
        }
    }
    //console.log(word)
    let words = [];
    for (let i = 0; i < phrases.length; i++) {
        let s = phrases[i].replace(word, "").trim();
        words.push(s);
    }
    return words;
}
console.log(getQuestionPart(["BATHROOM", "BATH SALTS", "BLOODBATH"]));
console.log(getQuestionPart(["BEFRIEND", "GIRLFRIEND", "FRIENDSHIP"]));
