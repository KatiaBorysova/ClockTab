(function(){

    var currentDate = new Date();
    var newDate = new Date (2019,0,1);
    createDatePage();
     
    function createDatePage(){
        appendCurrentDate();
        appendTime(); 
        appendCountDown();
        setInterval(function() {
            appendTime(); 
        }, 1000);
    } 
// Current Date
    function appendCurrentDate(){
        var showCurrentDate = document.getElementById("day-place");
        showCurrentDate.innerHTML = "Сeгодня " + getDays() + ", " + getDates() + " " + getMonths();
    };

    function getDays() {
        var today = currentDate.getDay();
        var days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];  
        var currentDay = days[today];
        return currentDay;
    };

    function getDates() {
        var todayNumber = currentDate.getDate();
        return todayNumber;
    };

    function getMonths() {
        var todayMonth = currentDate.getMonth()
        var month = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
        var currentMonth =  month[todayMonth];
        return currentMonth;
    };

// Current Time
    function appendTime() {
        document.getElementById("hour").innerHTML = appendHours();
        document.getElementById("minute").innerHTML = appendMinutes();
        document.getElementById("second").innerHTML = appendSeconds();   
    };
   
    function appendHours() {
        var hours = new Date().getHours();
        if(hours < 10) {
            hours = '0' + hours;
        }
        return hours;
    }

    function appendMinutes() {
        var minutes = new Date().getMinutes();
        if(minutes < 10) {
            minutes = '0' + minutes;
        }
        return minutes;
    }
    function appendSeconds() {
        var seconds = new Date().getSeconds();
        if(seconds < 10) {
            seconds = '0' + seconds;
        }
        return seconds;
    }
   
// Countdown
    function appendCountDown() {
        var showNextDate = document.getElementById("next-year");
        showNextDate.innerHTML = "До 2019 года осталось " + getCountDown() + " " + validateDays() + "." ;
    };

    function getCountDown() {
        if (newDate > currentDate){
            var numberOfDays = newDate - currentDate;
            numberOfDays = parseInt(numberOfDays / (1000 * 60 * 60 * 24));
            numberOfDays = String(numberOfDays);
            return numberOfDays; 
        }
        else {showNextDate.innerHTML = "Дата недействительна."};
    };

    function validateDays() {
         var currentNumber = getCountDown();
         var lastNumber = currentNumber.slice(-1);
         var twoLastNubbers = currentNumber.slice(-2);
         var days1 = "день",  
             days2 = "дня", 
             days3 = "дней";
        if (currentNumber === 1 || lastNumber === 1 ) { 
          return days1;
        }
        else if (twoLastNubbers > 10 &&  twoLastNubbers < 21) {
            return days3;
        }
        else if(lastNumber > 1 && lastNumber < 5) {
            return days2;
         }
         else if (lastNumber >= 5 && lastNumber < 21) {
            return days3;
         }
    };

    })();
