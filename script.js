jQuery(document).ready(function($){

    var currentDayEl = document.querySelector("#currentDay");
    currentDayEl.textContent = moment().format('MMMM Do YYYY');

    //should I make time blocks a string so I can traverse them easier?
    //should I add values to the time blocks and pass the vals in instead of the text?
    //What data type does moment use?

    //add in if statement to vaild what time it is and change css based on hour

    //for (var i = 0; i < blockHourEl.length; i++) {
        console.log($(".time-block"));
    // $(".time-block").each(element => {
    //     if (testEl > element[0].id) {
    //         element.addClass("past");
    //     } else if (testEl = blockHourEl) {
    //         element.addClass("present");
    //     } else {
    //         element.addClass("future");
    //     }
    //});

    var currentHourEl = moment().format('HH');

       $(".time-block").each(function (index, element) {
            if (currentHourEl > $(element).attr("id")) {
                $(element).addClass("past");
            } else if (currentHourEl === $(element).attr("id")) {
                $(element).addClass("present");
            } else {
                $(element).addClass("future");
            }
       });

      // console.log($(element));
//};
    //add local storge saving 
});
