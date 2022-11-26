// document.ready function to prevent action until DOM is ready
$(function () {
    console.log('ready to go!')

    // display date
    const date = dayjs().format('MMMM D, YYYY');
    $("#currentDay").text(date);

    let task = "";
    let hour = "";

// add event listener to save btn
$(".saveBtn").click(function () {

    // get value of the element with class of "description" (sibling to button)
    task = $(this).siblings(".description").val(); 
    console.log(this);
    // set variable hour to id arribute of div element (parent to button)
    hour = $(this).parent().attr("id");
    //set items in local storage.
    // key=hour
    // value=task
    localStorage.setItem(hour, JSON.stringify(task));

    console.log(hour);
    console.log(task);
} );

// getFromLocalStorage();
function displaySavedOnPage() {
    JSON.parse(localStorage.getItem(hour));

      } 


// color code time blocks by past/present/future
function pastPresentFuture() {
    // current time
    const now = dayjs().hour();
    console.log(now);
    if (typeof now === Number);
    console.log("number");

    var schedule = $('.time-block');
    console.log(schedule);

    for (var i=0; i< schedule.length;i++) {
        var scheduleBlock = $(schedule[i]);
        console.log(scheduleBlock);

        var blockID = scheduleBlock.attr("id");
        console.log(blockID);   
        if (typeof blockID === Number);
        console.log("number");
        
    // var past = (blockID < now);
    var present = (blockID == now);
    console.log(present);
    var future = (blockID > now);
    console.log(future);

    if (blockID < now) {
        console.log("past");
        console.log(this.schedule);

    }
} 

pastPresentFuture();

displaySavedOnPage();
}
}
);

// function colorCodeHours() {
//     var allCards = $('.time-block');
//     for (let i = 0; i < allCards.length; i++) {
//       var currentCard = $(allCards[i]);
//       var currentCardID = currentCard.attr('id');
//       var isCurrentHour = currentCardID == currentHourID;
//       var isCurrentBlock = currentCard.is(".present");
//       var hourIsChanged = isCurrentHour && !isCurrentBlock
//       if (hourIsChanged) {
//         var oldPresentCard = $('.present');
//         oldPresentCard.addClass('past');
//         oldPresentCard.removeClass('present');
//         currentCard.addClass('present');
//         currentCard.removeClass('future');
//       }
//     }
//   }


    // get saved tasks from local storage
    // function getFromLocalStorage() {
    // get each time block element
  
// function getSavedTasks() {
// }
// var schedule = $('.time-block');   
// console.log(schedule);
//     // get each time block element ID
    
//     // loop through to retrieve all saved tasks
// for (var i=0; i<schedule.length; i++) {
//     let scheduleItem = schedule[i];
//         console.log(scheduleItem);
// }










// TODO: Add code to apply the past, present, or future class to each time block by comparing the id to the current hour. HINTS: How can the id attribute of each time-block be used to conditionally add or remove the past, present, and future classes? How can Day.js be used to get the current hour in 24-hour time?
// var timeBlock = $('time-block');
// var taskInput = $('textarea');
// var pastTasks = $('.past');
// var presentTasks = $('.present');
// var futureTasks = $('.future');
//
// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?

// 
// }



  // display tasks to appropriate timeblock on page
// function displayTasks() {
//     // clear current projects on the page
//     projectDisplayEl.empty();
  
//     // get projects from localStorage
    // var projects = readProjectsFromStorage();
  
  
      
      // add class to row by comparing project date to today's date
//       if (projectDate.isBefore(today)) {
//         rowEl.addClass('project-late');
//       } else if (projectDate.isSame(today)) {
//         rowEl.addClass('project-today');
//       }
  
//       // append elements to DOM to display them
//       rowEl.append(nameEL, typeEl, dateEl, deleteEl);
//       projectDisplayEl.append(rowEl);
//     }
//   }


// }

