// document.ready function to prevent action until DOM is ready
$(function () {
    console.log('ready to go!')

    var index = 0;
    var hourArr = [];
    var taskArr = [];
    var hourID = [];
    var schedule = $('.time-block');
    var scheduleHour;
    var scheduleItem = $('.description');

    // get current time
    const now = dayjs().hour();
    console.log(now);
    // to do: 
    // set interval to not so it auto-refreshes current time
    // auto-refresh past/present/future when now changes
    // auto-refresh current date when now === 0

    function loadPage() {
        currentDate();
        // loop through to get each time block, get ID value & push to hourID array
        for (index = 0; index < schedule.length; index++) {
            scheduleHour = $(schedule[index]);
            hourID.push(scheduleHour.attr("id"));
            // set class for each time block based on current time compared to ID
            if ((hourID[index] < now)) {
                console.log("past");
                scheduleHour.removeClass("future").addClass("past");
            } else if (hourID[index] == now) {
                console.log("present");
                scheduleHour.removeClass("future").addClass("present");
            } else {
                console.log("future");
                scheduleHour.removeClass("past").addClass("future");
            }
            console.log('hour: ' + hourID[index]);
            renderSavedTasks()
        }
        console.log(hourID);
        localStorage.setItem('hourID', hourID);
    };

    // display date
    function currentDate() {
        const date = dayjs().format('MMMM D, YYYY');
        $("#currentDay").text(date)
    }

    // get saved tasks
    function getSavedTasks() {
        var savedHour = JSON.parse(localStorage.getItem('hour'));
        var savedTask = JSON.parse(localStorage.getItem('task'));
        if (savedHour && savedTask) {
            hourArr = savedHour;
            taskArr = savedTask;
        }
    };

    // render saved tasks
    function renderSavedTasks() {
        getSavedTasks();
        if (hourArr !== null && taskArr !== null) {
            for (var h = 0; h < hourArr.length; h++) {
                if (hourArr[h] == hourID[index]) {
                    console.log('task: ' + taskArr[h]);
                    scheduleItem[index].textContent = taskArr[h];
                }
            }
        } else {
            scheduleItem[index].textContent = ""
            return;
        }
    };

    // add event listener to save btn
    $(".saveBtn").click(function (event) {
        event.preventDefault();
        if (scheduleItem !== null) {
            // set variables
            var hourEl = $(this).parent().attr("id");
            var taskEl = $(this).siblings(".description").val();
            // push to array
            hourArr.push(hourEl);
            taskArr.push(taskEl);
            //set items to local storage.
            localStorage.setItem('hour', JSON.stringify(hourArr));
            console.log(hourArr);
            localStorage.setItem('task', JSON.stringify(taskArr));
            console.log(taskArr);
            // empty var hourArr
            hourArr;
            taskArr;
        }
    });
    
    // clear clear local storage, refresh page
    $('#clear-tasks-button').click(function(event){
        event.preventDefault();
        localStorage.clear();
        location.reload();
    })

    loadPage();

});



