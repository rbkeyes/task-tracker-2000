
// document.ready function to prevent action until DOM is ready
$(function () {
    console.log('ready to go!')

    // display date
    function currentDate() {
        const date = dayjs().format('MMMM D, YYYY');
        $("#currentDay").text(date)
    }
    currentDate()

    var task = "";
    var hour = "";
    var hourID = "";

    var schedule = $('.time-block');
    var textInput = $('.description');

    // get current time
    const now = dayjs().hour();
    console.log(now);
    if (typeof now === Number);
    console.log("number");


    // add event listener to save btn
    $(".saveBtn").click(function (event) {
        event.preventDefault();
        // get value of the element with class of "description" 
        task = $(this).siblings(".description").val();
        // set variable hour to id arribute of div element 
        hour = $(this).parent().attr("id");
        //set items in local storage.
        localStorage.setItem(hour, JSON.stringify(task)).trim();
        console.log(hour);
        console.log(task);
    });

    // function pastPresentFuture() {
    // loop through to get each time block + ID
    for (var i = 0; i < schedule.length; i++) {
        var scheduleHour = $(schedule[i]);
        console.log(scheduleHour);

        hourID = scheduleHour.attr("id");
        console.log(hourID);

        if (typeof hourID === Number);
        console.log("number");

        // set class for each time block based on current time compared to ID
        if ((hourID < now)) {
            console.log("past");
            scheduleHour.removeClass("future").addClass("past");
        } else if (hourID == now) {
            console.log("present");
            scheduleHour.removeClass("future").addClass("present");
        } else {
            console.log("future");
            scheduleHour.removeClass("past").addClass("future");
        }
    }
    
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

        for (var i = 9; i <= 17; i++) {
            var savedTask = localStorage.getItem(i);
            if (savedTask !== null) {
                console.log(savedTask);

                $("#" + i).children($('textarea')).text($(savedTask));
            }

            // $('id .description').val(localStorage.getItem(hour));
            // if (savedTask !== null) {
            //     var textArea = $(scheduleHour.children('.description'))
            //     $(scheduleHour.children('.description')).val(localStorage.getItem(hour))
            //     console.log(scheduleHour);
            //     console.log($(textInput[hour]));
            //     console.log(textArea);

            // }
        }

});



