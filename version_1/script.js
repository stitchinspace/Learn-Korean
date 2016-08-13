"use strict"; //makes sure I'm doing it right
document.addEventListener("DOMContentLoaded", function() { //loads page after html loads
    (function(window) { //IIFE to maintain local namespace

        var dict = [{
            "part": "noun",
            "hangeul": "발",
            "translit": "bal",
            "english": "foot"
        }, ]

        document.getElementById("rand-box").addEventListener("onclick", random);
        var items = document.getElementsByClassName("grid");
        for (var i; i < items.length; i++) {
            items.i.addEventListener("hover", changeText);
            items.i.addEventListener("onclick", wordMenu);
        }

        //choose a random object from the array of objects and render to page
        function random() {
            console.log("random called");
            return function() { //bind function
                // var choice = Math.floor(Math.random()*dict.length);
                var choice = 0;
                console.log(choice);
                var location = document.getElementById("rand-box");
                console.log(location);
                location.firstChild.innerHTML = dict[choice].translit.value;
            }
        }

        function changeText() {
            // make text of section "click to see _______(name? id?)"
        }

        function wordMenu() {
            //for item in object, if item[i].value == noun then render onto page

        }

        //window.variable = variable will expose a variable to the windowspace
    })(window); //close and call IIFE
}); //close DOMcontentLoaded function
