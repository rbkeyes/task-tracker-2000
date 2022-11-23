
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// add timeblocks for 9-5 in HTML
var scheduleRow = $('.row');
var timeBlock = $('time-block');

// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// get variables past/present/future
var pastTasks = $('.past');
var presentTasks = $('.present');
var futureTasks = $('.future');


// link to day.js current time
// function to change color for < current time, == current time, > current time

// WHEN I click into a timeblock
// THEN I can enter an event
// add text to text area
// get variable textarea



// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// get save button element

// WHEN I refresh the page
// THEN the saved events persist 
// get & display saved events from local storage at page open


// $(document).ready() function
// shorthand = $(function(){})
// prevents code being read until DOM is ready
$(function () {
    console.log('ready to go!')

    // today's date, display in header
    
    var today = dayjs();
    $('#currentDay').text(today.format('MMMM D, YYYY h:mm a'));
    
    var textInput = $('.description');

        // TODO: Add a listener for click events on the save button. This code should use the id in the containing time-block as a key to save the user input in local storage. 
        // HINT: What does `this` reference in the click listener function? 
        // How can DOM traversal be used to get the "hour-x" id of the time-block containing the button that was clicked? 
        // How might the id be useful when saving the description in local storage?
});

    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.

