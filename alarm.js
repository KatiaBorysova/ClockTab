
function initAlarmLogic() {
   var currentDate = new Date(),
        createAlarmHours = document.querySelector("#a-hour"),
        createAlarmMinutes = document.querySelector("#a-minute"),
        createAlarmSeconds = document.querySelector("#a-second"),         
        setAlarmTime = document.querySelector("#set-alarm-time"),
        createAlarm = document.querySelector("#create-alarm"),
        alarmsContainer = document.querySelector("#alarms-container");

    showCurrentTime();
    setAlarm();
    checkActiveAlarms();

function showCurrentTime() {
    appendTime(); 
    setInterval(function() {
        appendTime();
    }, 1000); 
};

function appendTime() {    
    createAlarmHours.innerHTML = correctDisplayindTime(new Date().getHours());
    createAlarmMinutes.innerHTML = correctDisplayindTime(new Date().getMinutes());
    createAlarmSeconds.innerHTML = correctDisplayindTime(new Date().getSeconds()); 
};

function correctDisplayindTime(selector) {
    if(selector < 10  ) {
        selector =  "0" + selector;
    }
    return selector;
};

function setAlarm() {
    createAlarm.addEventListener("click", function() {
        var node = document.createElement('div');   
        document.getElementById("alarms-container").appendChild(node);
        node.innerHTML = createAlarmTemplate();
        setAlarmSelectors();

    });
};

function createAlarmTemplate() {
    return  '<div class="text-alarm">' + 
                '<div class="alert alert-info col-md-6 progress-alarm" role="alert"> </div>' +
                '<img class="image-clear-alarm" src="images/delete.png">' +
            '</div>'
    };

function setAlarmSelectors() {
    var textAlarm = document.querySelectorAll(".text-alarm"),
        progressAlarm = document.querySelectorAll(".progress-alarm"),
        clearAlarm = document.querySelectorAll(".image-clear-alarm");
        textAlarm = textAlarm[textAlarm.length-1];
        progressAlarm = progressAlarm[progressAlarm.length-1];
        clearAlarm = clearAlarm[clearAlarm.length-1];
        textAlarm.style.display = "flex";
        progressAlarm.innerHTML = "Будильник установлен на <p class='alert-time'>" + setAlarmTime.value+ "</p>";

        setRemoveAlertListener(textAlarm, clearAlarm);    
};

function setRemoveAlertListener(alarmNode, clearNode) {
    clearNode.addEventListener("click",function() {  
         alarmNode.innerHTML ='';
     });
};

function checkActiveAlarms() {
    setInterval(function() {
        var alarms = document.querySelectorAll(".alert-time");
        if (alarms.length != 0) {
            //console.log(alarms.length);            
            alarms.forEach(function(el, i) {
                startAlarm(el.innerHTML, i);
            });
        };     
    }, 1000);
};

function startAlarm(time, i) {
    var setTime = time,
        hoursValue = setTime.slice(0,2),
        minutesValue = setTime.slice(-2),
        alarmExpectedTime = +hoursValue + +minutesValue,
        currentTime = new Date().getHours() + new Date().getMinutes()
        if (alarmExpectedTime == currentTime) {
            notifyAlertEnd(time, i);  
        }
};

function notifyAlertEnd(time, i) {
    document.querySelectorAll(".progress-alarm")[i].innerHTML = '<div class="active-alarm alert-time">Будильник сработал!</div>';
};

};