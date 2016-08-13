"use strict"; //makes sure I'm doing it right
document.addEventListener("DOMContentLoaded", function() { //loads page after html loads
    var iife = (function() {
        document.getElementById("rand-box").addEventListener("click", showRandom);

        function showRandom() {
            var choice = Math.floor(Math.random() * dict.length);
            var randbox = document.getElementById("rand-box");
            randbox.children[0].innerHTML = dict[choice].translit;
            randbox.children[1].innerHTML = dict[choice].hangul;
            randbox.children[2].innerHTML = dict[choice].english;
        }
        //Set event listener for each item in the part-of-speech grid
        var gridItems = document.querySelectorAll(".grid");
        var gLength = gridItems.length;
        for (var i = 0; i < gLength; i++) {
            gridItems[i].addEventListener("click", makeWordList);
        }
        function makeWordList(clicked) {
            document.querySelector("#study").style.display = "block";
            document.querySelector("#main").style.display = "none";
            console.log(this);

var wordList = dict.filter(item, function(item) {
return item.part ===clicked.id;
});

    chooseStudyWord();
}
        var studyWord;

        function chooseStudyWord() {
            document.querySelector("#new").innerHTML = "new word";
            document.querySelector("#back").innerHTML = "back";
            document.querySelector("#translit").innerHTML = "click for transliteration";
            document.querySelector("#hangul").innerHTML = "click for Hangul";
            document.querySelector("#english").innerHTML = "click for English";
          }
studyWord = wordList[Math.floor(Math.random() * wordList.length)];

        var studySection = document.querySelectorAll(".study")
        for (var k = 0; k < studySection.length; k++) {
            studySection[k].addEventListener("click", showStudyWord)
        }

        function showStudyWord(clicked) {
            var translit = document.querySelector("#translit").innerHTML;
            var hangul = document.querySelector("#hangul").innerHTML;
            var english = document.querySelector("#english").innerHTML;
            if (translit != "click for transliteration" && hangul != "click for hangul" && english != "click for English") {
                setTimeout(chooseStudyWord(), 2000);
            } else {
                var targetObject = clicked.target;
                targetObject.innerHTML = studyWord[targetObject.id];
            }
        }
        //write JSON to the text field to copy into the dictData file to be used by other functions.
        //Maybe I will make this slicker when I learn Back End.
        document.querySelector("#submit").addEventListener("click", addNew);

        function addNew() {
            var translit = document.querySelector("#translitInput").value;
            var hangul = document.querySelector("#hangulInput").value;
            var english = document.querySelector("#englishInput").value;
            var part = document.querySelector('input[name=part]:checked').value;
            var result = document.querySelector("#result-area");
            result.innerHTML =
                '{"translit":"' + translit + '", "hangul":"' + hangul + '", "english":"' + english + '", "part":"' + part + '"},';
            document.querySelector("form").reset();
        }

        document.querySelector("#new").addEventListener("click", chooseStudyWord);
        document.querySelector("#back").addEventListener("click", returnHome);

        function returnHome() {
            wordList = [];
            document.querySelector("#study").style.display = 'none';
            document.querySelector("#main").style.display = "block";
        }
    }());
}); //close DOMcontentLoaded function
