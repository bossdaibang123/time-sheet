// set time for the whole site
var currentHour = moment().format('HH')
var dayDisplay = $('#currentDay')  
var currentDay = moment();
dayDisplay.text(currentDay.format('dddd MMM Do YYYY, h:mm:ss'));

//localStorage.clear(); 


// make a emty arry to store time list
var X = localStorage.getItem("localData")
var data = JSON.parse(X) || []            

// calling time list for calender 
for ( i=9; i<18; i++) {
    
    if ( i>=13) {
        var j = i - 12 
    } else {
        j = i
    }
    
    var time = {
        ivalue : i,
        hour : j,
        surfix : "AM",
        note : ""
    }

    if ( i>11) { time.surfix = "PM"; }

    data.push(time); 
}

// make the line work with time by change the color
function checkHour (containerInput, index) {
    if (data[index].ivalue == currentHour) {
        containerInput.addClass('present');
    } else if (data[index].ivalue < currentHour) {
        containerInput.addClass('past');
    } else {
        containerInput.addClass('furture');
    }
}

// set up the table
var container = $("#container");

// container = repeat the line element by i< data.length   
data.forEach( function (data, index){
    // line elememt  =  time + input + button
    var  divContainer = $('<div class="row">'); 

    // time div
    var containerTime = $('<div>');
        containerTime.addClass('time-block hour col-1');
        containerTime.text(data.hour+':00'+' '+data.surfix);
        divContainer.append(containerTime);
        
    // inpt div    
    var containerInput = $('<textarea>');
        containerInput.addClass('description col-10');
        containerInput.text(data.note);
        containerInput.attr('data-index', index)
        checkHour(containerInput, index);
        divContainer.append(containerInput);        

    // btn  div    
    var containerBtn = $('<button><i class="fas fa-save fa"></i>');
        containerBtn.addClass('saveBtn col-1');
        data.note = containerBtn.val();
        divContainer.append(containerBtn)

    container.append(divContainer); 
});



// work with the btn that can save and update data
container.on('click', '.saveBtn', function () {    

    // transfer the text input to save button
    var dataEntered = $(this).siblings('textarea');
    // specified the text input by add data-idx
    var dataEnteredIndex = dataEntered.attr('data-index');
    // push the text in dataEntered to note in array data
    data[dataEnteredIndex].note = dataEntered.val() ;
    
    console.log(dataEntered.val())
    console.log(data[dataEnteredIndex].note)

    localStorage.setItem("localData", JSON.stringify(data));
});








