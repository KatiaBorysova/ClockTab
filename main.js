(function(){

    var currentDate = new Date();
    var nextYearDate = new Date (2019,0,1);

    var showCurrentDate = document.getElementById("day-place");
    var appendHours = document.getElementById("hour");
    var appendMinutes = document.getElementById("minute");
    var appendSeconds = document.getElementById("second");
    var showNextDate = document.getElementById("next-year");  

    var hours = new Date().getHours();
    var minutes = new Date().getMinutes();
    var seconds = new Date().getSeconds();

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
        appendHours.innerHTML = correctDisplayindTime(hours);
        appendMinutes.innerHTML = correctDisplayindTime(minutes);
        appendSeconds.innerHTML = correctDisplayindTime(seconds); 
    };
   
   function correctDisplayindTime(selector){
       if(selector < 10) {
        selector = '0' + selector;
        }
        return selector;
   }

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
        if (currentNumber === 1 || lastNumber === 1 ) { 
          return days1;
        }
        else if (twoLastNubbers >= 10 &&  twoLastNubbers < 21) {
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
