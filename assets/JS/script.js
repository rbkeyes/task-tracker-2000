// GIVEN I am using a daily planner to create a schedule

// today's date
function todaysDate() {
    var today = dayjs();
    $('#currentDay').text(today.format('MMMM D, YYYY'));
    console.log(today);
}
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// add timeblocks for 9-5 in HTML
// get variables for time blocks
var scheduleRow = $('.row');
var timeBlock = $('time-block');
var nineAM = $('#hour-9');
var tenAM = $('#hour-10');
var elevenAM = $('#hour-11');
var noon = $('#hour-12');
var onePM = $('#hour-13');
var twoPM = $('#hour-14');
var threePM = $('#hour-15');
var fourPM = $('#hour-16');
var fivePM = $('#hour-17');


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
var task = $('.description');

// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// get save button element
var saveBtn = $(".saveBtn");
// saveBtn.on("click", saveToDoItem);


// WHEN I refresh the page
// THEN the saved events persist 
// get & display saved events from local storage at page open

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
    todaysDate();
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
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
});
