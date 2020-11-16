$(document).ready(function() { // uses moment to display current day on page
    $("#currentDay").text(moment().format("dddd, MMMM Do"));
});

var scheduleText = document.querySelector("col-md-10 text")

//utilizing a function to save to local storage
function saveData(){
    localStorage.setItem('data', JSON.stringify(scheduleText));
    localStorage.getItem ('data');
    var data = 'data'
    scheduleText.append('data');          
}
// uses moment to display the time in the console
function getTime(){ 
    var time = moment().format('HH:mm');
    console.log(time)
     
    //conditional statements to change the attributes of the time blocks
        if (time == $('container.div id:first-child')) {
            $('.row time-block').addClass('.present');
        }
        else if (time > $('container.div id:first-child')) { 
            $('.row time-block').addClass('.future');
        }
        else (time < $('container.div id:first-child'))
            $('.row time-block').addClass('.past');
    
}

// setInterval(getTime(), 5000);
setInterval(function(){ getTime()}, 3000);
  
//save button functionality event listener    
$('saveBtn').on("click", saveData());
