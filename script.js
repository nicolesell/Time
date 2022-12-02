//const moment = require('moment');

function getLanguage() {  
    var list = document.getElementById('list');  
    var cur = list.value; 
    var text = list.options[list.selectedIndex].text;
    console.log("Selected language: " + text);
}

var update = function() {
    document.getElementById("time")
    .innerHTML = moment().format('h:mm:ss a');
}
setInterval(update, 1000);