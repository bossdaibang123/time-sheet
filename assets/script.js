// set time for the whole site
var currentHour = moment().format('HH')
var dayDisplay = $('#currentDay')  
var currentDay = moment();
dayDisplay.text(currentDay.format('dddd MMM Do YYYY, h:mm:ss'));

//localStorage.clear(); 

// make a emty arry to store time list

var calender = JSON.parse(localStorage.getItem("localData")) || [];            


// calling time list for calender 
console.log(calender)
calender = [{
    ivalue : 1,
    hour : 9,
    surfix : 'AM',
    note : ''
},
{
    ivalue :2 ,
    hour : 10,
    surfix : 'AM',
    note : ''
},
{
    ivalue : 3,
    hour : 11,
    surfix : 'AM',
    note : ''
},
{
    ivalue : 4,
    hour : 12,
    surfix : 'PM',
    note : ''
},
{
    ivalue : 5,
    hour : 1,
    surfix : 'pM',
    note : ''
},
{
    ivalue : 6,
    hour : 2,
    surfix : 'PM',
    note : ''
},
{
    ivalue: 7,
    hour  : 3,
    surfix : 'PM',
    note : ''
},
{
    ivalue: 8,
    hour  : 4,
    surfix : 'PM',
    note : ''
},{
    ivalue: 9,
    hour  : 5,
    surfix : 'PM',
    note : ''
}];
   /*  for ( i=9; i<18; i++) {
        
        if ( i>=13) {
            var j = i - 12 
        } else {
            j = i
        }
        
        var time = {
            ivalue : i,
            hour : j,
            surfix : "AM",
            note : []
        }
        
        if ( i>11) { time.surfix = "PM"; }

        data.push(time);
    } */
// make the line work with time by change the color
function checkHour (containerInput, index) {
    if (calender[index].ivalue == currentHour) {
        containerInput.addClass('present');
    } else if (calender[index].ivalue < currentHour) {
        containerInput.addClass('past');
    } else {
        containerInput.addClass('furture');
    }
}

// set up the table
var container = $("#container");

// container = repeat the line element by i< data.length   
calender.forEach(function (calender, index){
    //   divContainer =  time + input + button
    var  divContainer = $('<div class="row">'); 

    // time
    var containerTime = $('<div>');
        containerTime.addClass('time-block hour col-1');
        containerTime.text(calender.hour+':00'+' '+calender.surfix);
        divContainer.append(containerTime);
        
    // inpt 
    var containerInput = $('<textarea>');
        containerInput.addClass('description col-10');
        containerInput.text(calender.note);
        containerInput.attr('data-index', index)
        checkHour(containerInput, index);
        divContainer.append(containerInput);        

    // button     
    var containerBtn = $('<button><i class="fas fa-save fa"></i>');
        containerBtn.addClass('saveBtn col-1');
        calender.note = containerBtn.val();
        divContainer.append(containerBtn)

    container.append(divContainer); 
});

// work with the btn that can save and update data
container.on('click', '.saveBtn', function () {    

    // transfer the text input to save button
    var dataEntered = $(this).siblings('textarea');
    // specified the text input by add data-idx
    var dataEnteredIndex = dataEntered.attr('data-index');
    // check if user add text or not  
    if (calender[dataEnteredIndex].note === dataEntered.val()) {
        return 
    } else {
        // push the text in dataEntered to note in array data
        calender[dataEnteredIndex].note = dataEntered.val() ;
    }


    // check if there is any 
    
   // localStorage.setItem("localData", JSON.stringify(data[dataEnteredIndex].note));
    localStorage.setItem("localDate", JSON.stringify(calender));
    console.log (JSON.stringify(calender))
});






