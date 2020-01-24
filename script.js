jQuery(document).ready(function($){

    var currentDayEl = document.querySelector("#currentDay");
    currentDayEl.textContent = moment().format('MMMM Do YYYY');

    var currentHourEl = moment().format('HH');

    var taskEL = document

    $(".time-block").each(function (index, element) {
            if (currentHourEl > $(element).attr("id")) {
                $(element).addClass("past");
            } else if (currentHourEl === $(element).attr("id")) {
                $(element).addClass("present");
            } else {
                $(element).addClass("future");
            }
       });

       //add local storage saving 
       $("button").click(function(){
        alert ();
        localStorage.setItem("task", JSON.stringify(window.HTMLTextAreaElement));
       });


});
