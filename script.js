

$(document).ready(function() {
    // listen for save button clicks
    $(".saveBtn").on("click", function() {
      // get nearby values
      var value = $(this).siblings(".text").val();
      var time = $(this).parent().attr("id");
      // save in localStorage
      localStorage.setItem(time, value);
    });
    function hourUpdater() {
      // get current number of hours
      var currentHour = moment().hours();
      // loop over time blocks
      $(".time-block").each(function() {
        var blockHour = parseInt($(this).attr("id").split("-")[1]);
        // check if we've moved past this time
        if (blockHour < currentHour) {
          $(this).addClass("past");
        } 
        else if (blockHour === currentHour) {
          $(this).removeClass("past");
          $(this).addClass("present");
        } 
        else {
          $(this).removeClass("past");
          $(this).removeClass("present");
          $(this).addClass("future");
        }
      });
    }
    hourUpdater();
    // set up interval to check if current time needs to be updated
    var interval = setInterval(hourUpdater, 15000);
    // load any saved data from localStorage
    $(".col-md-10 text").val(localStorage.getItem("09:00"));
    $(".col-md-10 text").val(localStorage.getItem("10:00"));
    $(".col-md-10 text").val(localStorage.getItem("11:00"));
    $(".col-md-10 text").val(localStorage.getItem("12:00"));
    $(".col-md-10 text").val(localStorage.getItem("13:00"));
    $(".col-md-10 text").val(localStorage.getItem("14:00"));
    $(".col-md-10 text").val(localStorage.getItem("15:00"));
    $(".col-md-10 text").val(localStorage.getItem("16:00"));
    $(".col-md-10 text").val(localStorage.getItem("17:00"));

  });