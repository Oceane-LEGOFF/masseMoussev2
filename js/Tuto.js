let someMillisecondValue = Date.now();
let date = new Date();
let minute = date.getMinutes();
let hour = date.getHours();

let hourText = document.getElementById("hour");
hourText.addEventListener("click", showHour);

function showHour(){
    if (hour <= 1 && minute <= 1) {
        hourText.innerHTML = "Il est " + hour + " heure et 0" + minute + " minute";
        someMillisecondValue = Date.now();
        date = new Date();
        minute = date.getMinutes();
        hour = date.getHours();
    }
    else if (hour > 1 && minute <= 1) {
        hourText.innerHTML = "Il est " + hour + " heures et 0" + minute + " minute";
        someMillisecondValue = Date.now();
        date = new Date();
        minute = date.getMinutes();
        hour = date.getHours();
    }
    else if (hour <= 1 && minute <= 9) {
        hourText.innerHTML = "Il est " + hour + " heure et 0" + minute + " minutes";
        someMillisecondValue = Date.now();
        date = new Date();
        minute = date.getMinutes();
        hour = date.getHours();
    }
    else if (hour > 1 && minute > 9) {
        hourText.innerHTML = "Il est " + hour + " heures et " + minute + " minutes";
        someMillisecondValue = Date.now();
        date = new Date();
        minute = date.getMinutes();
        hour = date.getHours();
    }
    else if (hour > 1 && minute <= 9) {
        hourText.innerHTML = "Il est " + hour + " heures et 0" + minute + " minutes";
        someMillisecondValue = Date.now();
        date = new Date();
        minute = date.getMinutes();
        hour = date.getHours();
    }
}

