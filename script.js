$(document).ready(function($){

    var currentDayEl = document.querySelector("#currentDay");
    currentDayEl.textContent = moment().format('MMMM Do YYYY');

    var currentHourEl = moment().format('HH');

    var tasks = JSON.parse(localStorage.getItem("tasks"));

    if (tasks != null){
        $("textarea").each(function (index, element){
            var currentHourSavedValue = tasks[index];
            $(element).val(currentHourSavedValue); 
        });
    }

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
        tasks = $("textarea").map(function(){
            return $(this).val();
        });
        localStorage.setItem("tasks", JSON.stringify(tasks));
       });
    

});
