(function() {

    var dataTime = document.querySelector("#data-time"),
        mainTimer = document.querySelector("#main-timer"),
        mainAlarm = document.querySelector("#main-alarm"),
        navigationButtons = document.querySelectorAll(".nav-buttons"),
        //settings = document.querySelector("#settings"),
        firstData = document.querySelector(".first-data"),
        secondTimer = document.querySelector(".second-timer"),
        thirdAlarm = document.querySelector(".third-alarm"),
        //siteWrapper = document.body,
        
        currentDate = new Date(),
        nextYearDate = new Date (2019,0,1),
        showCurrentDate = document.querySelector("#day-place"),
        createHours = document.querySelector("#hour"),
        createMinutes = document.querySelector("#minute"),
        createSeconds = document.querySelector("#second"),
        showNextDate = document.querySelector("#next-year"),

        settimerHours = document.querySelector("#set-timer-hours"),
        settimerMinutes = document.querySelector("#set-timer-minutes"),
        settimerSeconds = document.querySelector("#set-timer-seconds"),
        timerHours = document.querySelector(".timer-hour"),
        timerMinutes = document.querySelector(".timer-minute"),
        timerSeconds = document.querySelector(".timer-second"),
        readyTimer = document.querySelector("#ready"),
        startTimer = document.querySelector("#start"),
        stopTimer = document.querySelector("#stop");

        renderInitialState(); 
        setNavListeners();
        //setBrightness();

function renderInitialState() {
    renderDateView();
}
    function setNavListeners() {
        addListenerOnDateBut();
        addListenerOnTimerBut();
        addListenerOnAlarmBut();
      };      

function addListenerOnDateBut() {
        dataTime.addEventListener("click", function(e) {
           renderDateView();
        });
 };
     
function addListenerOnTimerBut() {
        mainTimer.addEventListener("click", function(e) {  
            renderTimerView();
        });
};
function addListenerOnAlarmBut() {
    mainAlarm.addEventListener("click", function(e) {
        renderAlarmView();
    })
};

function renderDateView() {
    cleanPage();
    setProperViewClasses(firstData, dataTime);  
    appendCurrentDate();
    appendTime();
    appendCountDown();

    setInterval(function() {
        appendTime();
    }, 1000); 
}

function renderTimerView() {
    cleanPage();
    setProperViewClasses(secondTimer, mainTimer);
    initTimerLogic();
}

function renderAlarmView() {
    cleanPage();
    setProperViewClasses(thirdAlarm, mainAlarm);
    initAlarmLogic(); 
}

// Current Date
function appendCurrentDate() {
    showCurrentDate.innerHTML = "Сeгодня " + getDays() + ", " + getDates() + " " + getMonths();
};

function getDays() {
    var today = currentDate.getDay();
    var days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];  
    var currentDay = days[today];

    return currentDay;
};

function getDates() {
    var currentNumber;

    return currentNumber = currentDate.getDate();
};

function getMonths() {
    var todayMonth = currentDate.getMonth()
    var month = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
    var currentMonth =  month[todayMonth];

    return currentMonth;
};

// Current Time
function appendTime() {    
    createHours.innerHTML = correctDisplayindTime(new Date().getHours());
    createMinutes.innerHTML = correctDisplayindTime(new Date().getMinutes());
    createSeconds.innerHTML = correctDisplayindTime(new Date().getSeconds()); 
};

function correctDisplayindTime(selector) {
    if(selector < 10) {
    selector = "0" + selector;
    }
    return selector;
};

// Countdown
function appendCountDown() {
    showNextDate.innerHTML = "До 2019 года осталось " + getCountDown() + " " + validateDays();
};

function getCountDown() {
    if (nextYearDate > currentDate){
        var numberOfDays = nextYearDate - currentDate;
        numberOfDays = parseInt(numberOfDays / (1000 * 60 * 60 * 24));
        numberOfDays = String(numberOfDays);
        return numberOfDays; 
    } else {
        showNextDate.innerHTML = "Дата недействительна."
    };
};

function validateDays() {
        var currentNumber = getCountDown();
        var lastNumber = currentNumber.slice(-1);
        var twoLastNubbers = currentNumber.slice(-2);
        var days1 = "день.",  
            days2 = "дня.", 
            days3 = "дней.";
    if (currentNumber == 1 || lastNumber == 1 ) { 
        return days1;
    }
    else if (twoLastNubbers >= 10 && twoLastNubbers < 21 && lastNumber == 0) {
        return days3;
    }
    else if(lastNumber > 1 && lastNumber < 5) {
        return days2;
        }
        else if (lastNumber >= 5 && lastNumber < 21) {
        return days3;
        }
};

//---------------------------- Timer page ------------------------------//
function initTimerLogic() {
    setstartTimer();
};

function setstartTimer() {
    readyTimer.addEventListener("click", function() {
        appendTimer();
    });
};

function appendTimer() {
    timerHours.innerHTML = correctDisplayindTime(settimerHours.value);
    timerMinutes.innerHTML = correctDisplayindTime(settimerMinutes.value);
    timerSeconds.innerHTML = correctDisplayindTime(settimerSeconds.value); 
};

// auxiliary function 

function cleanPage() {
    hideAllViews();
    removeActiveNavs();
}

function hideAllViews() {
    firstData.classList.add('hide');
    secondTimer.classList.add('hide');
    thirdAlarm.classList.add('hide');
}

function removeActiveNavs() {
    dataTime.classList.remove('active');
    mainTimer.classList.remove('active');
    mainAlarm.classList.remove('active');
}

function setProperViewClasses(showSelector, activeSelector) {
    showSelector.classList.remove('hide');
    activeSelector.classList.add('active');  
}

})();
