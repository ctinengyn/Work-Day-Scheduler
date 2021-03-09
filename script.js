// This will give you today's date (display)

// Format Dates:
// "MMMM" = Month (January, Febuary, March, etc)
// "Do" = Day (1st, 2nd, 3rd, etc)
// "YYYY" = Year (1990, 1991, 1992, etc)
// "h" = Hour
// "m" = Minutes
// "ss" = Seconds
// "a" = AM/PM

var todayDate = function () {
    var date = moment().format("MMMM Do YYYY, h:mm:ss a");
    $("#currentDay").html(date);

}

setInterval(todayDate);

$(document).ready(function () {

    // Local storage for information in timeblocks
    $("#hour8 .description").val(localStorage.getItem("hour8"));
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));

    timeTracker();

    function timeTracker() {
        // Current time of the day
        var timeNow = moment().hour();

        // Loop for each time blocks
        $(".row").each(function () {
            var blockTime = parseInt($(this).attr("id").split("hour")[1]);

            // "Future" = Green
            // "Present" = Red
            // "Past" = Gray
            if (blockTime > timeNow) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (blockTime === timeNow) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");

            }
        })
    }

    // saveBtn (button) click listener 
    $(".saveBtn").on("click", function () {
        // Get nearby values of the description in JQuery
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        // Save information in local storage
        localStorage.setItem(time, text);
    })

})