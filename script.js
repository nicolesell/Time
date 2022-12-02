function getLanguage() {  
    var list = document.getElementById('list');  
    var cur = list.value; 
    var text = list.options[list.selectedIndex].text;
    console.log("Selected language: " + text);
    if(text = "en-US"){
        moment.tz.setDefault("America/New_York");
    }
    if(text = "en-GB"){
        moment.tz.setDefault("Europe/London");
    }
    if(text = "pt-BR")
    {
        moment.tz.setDefault("America/Belem");
    }
}

var update = function() {
    document.getElementById("time")
    .innerHTML = moment().format('h:mm:ss a ');
}
setInterval(update, 1000);
