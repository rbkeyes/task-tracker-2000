// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
    // day.js for current date
    // add to header

// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
    // add timeblocks for 9-5

// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
    // link to day.js current time
    // function to change color for < current time, == current time, > current time

// WHEN I click into a timeblock
// THEN I can enter an event
    // add text to text area

// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
    // json, save to local storage

// WHEN I refresh the page
// THEN the saved events persist 
    // get & display saved events from local storage at page open