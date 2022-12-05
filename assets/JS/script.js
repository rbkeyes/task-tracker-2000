// document.ready function to prevent action until DOM is ready
$(function () {
    console.log('ready to go!')

    var index = 0;
    var hourArr = [];
    var taskArr = [];
    var hourID = [];
    var schedule = $('.time-block');
    var scheduleHour;
    var scheduleItem = $('textArea');

    // get current time
    const now = dayjs().hour();
    console.log(now);
    console.log(typeof now);
    // to do: 
    // set interval to not so it auto-refreshes current time
    // auto-refresh past/present/future when now changes
    // auto-refresh current date when now === 0

    function loadPage() {
        currentDate();
        // loop through to get each time block, get ID value & push to hourID array
        for (index = 0; index < schedule.length; index++) {
            scheduleHour = $(schedule[index]);
            console.log(scheduleHour);
            hourID.push(scheduleHour.attr("id"));
            if (typeof hourID === Number);
            console.log("number");
            renderSavedTasks();

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

            console.log(hourID);
        }
        console.log()
    };

    // display date
    function currentDate() {
        const date = dayjs().format('MMMM D, YYYY');
        $("#currentDay").text(date)
    }

    // get saved tasks
    function getSavedTasks() {
        var savedHour = JSON.parse(localStorage.getItem('hour'));
        hourArr = savedHour;
        console.log(hourArr);
        var savedTask = JSON.parse(localStorage.getItem('task'));
        taskArr = savedTask;
        console.log(taskArr);
    };

    // render saved tasks
    function renderSavedTasks() {
        getSavedTasks();
        if (hourArr !== null && taskArr !== null) {
            console.log(true);
            console.log(hourArr.length);
            for (var h = 0; h < hourArr.length; h++) {
                if (hourArr[h] == hourID[index]) {
                    console.log(hourArr[h]);
                }
            }
        }
    };

    // add event listener to save btn
    $(".saveBtn").click(function (event) {
        event.preventDefault();
        // set variable hour to id arribute of div element 
        var hourEl = $(this).parent().attr("id");
        // push to hour array
        hourArr.push(hourEl);
        // empty var hourArr
        hourArr;
        // get value of the element with class of "description" 
        var taskEl = $(this).siblings(".description").val();
        // push to task array
        taskArr.push(taskEl);
        // empty var taskArr
        taskArr;
        //set items in local storage.
        localStorage.setItem('hour', JSON.stringify(hourArr));
        console.log(hourArr);
        localStorage.setItem('task', JSON.stringify(taskArr));
        console.log(taskArr);
    });


    // retrieve saved tasks from local storage and write to page
    // $("#9 .description").text(localStorage.getItem("9"));
    // $("#10 .description").text(localStorage.getItem("10"));
    // $("#11 .description").text(localStorage.getItem("11"));
    // $("#12 .description").text(localStorage.getItem("12"));
    // $("#13 .description").text(localStorage.getItem("13"));
    // $("#14 .description").text(localStorage.getItem("14"));
    // $("#15 .description").text(localStorage.getItem("15"));
    // $("#16 .description").text(localStorage.getItem("16"));
    // $("#17 .description").text(localStorage.getItem("17"));

    // for (var i = 0; i < localStorage.length; i++) {
    //     var key   = localStorage.key(i);
    //     var value = localStorage.getItem(key);
    //     var taskHour = $('id[0]'.children('.description'))
    //         console.log(taskHour)
    //         console.log(key + ": " + value);
    //     console.log($(taskHour).text(value));
    //     }

    // console.log(localStorage);

    // for (var i = 9; i <= 17; i++) {
    //     var savedTask = localStorage.getItem(i);
    //     if (savedTask !== null) {
    //         console.log(savedTask);
    //         $("#" + i).children($('textarea')).text($(savedTask));
    //     }
    // }


    // $('id .description').val(localStorage.getItem(hour));
    // if (savedTask !== null) {
    //     var textArea = $(scheduleHour.children('.description'))
    //     $(scheduleHour.children('.description')).val(localStorage.getItem(hour))
    //     console.log(scheduleHour);
    //     console.log($(textInput[hour]));
    //     console.log(textArea);

    // }


    loadPage();

});



