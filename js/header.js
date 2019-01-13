var arr = ["Designers.", "Illustrators.", "Geeks.", "Coders' Club.", ];
var i = 0;

function changeText() {
    if (i != arr.length) {
        $("strong").text(arr[i]);
        i++;
    }
};

var t = setInterval(changeText, 800);
