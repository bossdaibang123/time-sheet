



// THE JQUERY FILE DONT WORK ?????????
// THE JMOMENT DONT WORK ?????



// set time for the whole site
var dayDisplay = $('#currentDay')  
var currentDay = "moment();"                                                      //moment is not defined
dayDisplay.text("currentDay.format('dddd MMM Do YYYY, h:mm:ss')");

// calling time list for calender 
var data = JSON.parse(localStorage.getItem("time")) || []

for ( i=9; i<18; i++) {
    
    if ( i>=13) {
        var j = i - 12 
    } else {
        j = i
    }
    
    if ( i<12) {
        var time = {
            hour : j,
            surfix : "AM",
            note : ""
        }
    }else {
        var time = {
            hour : j,
            surfix : "PM",
            note : ""
        }
    }
    data.push(time);
}

//set up the table
var container = $("#container");
container.css( 'display', 'flex');
container.css( 'flex-direction', 'row');


// container  =  repeat the line element by i< data.length 
for ( i=0; i < data.length; i++) {
    //console.log( "test" + i )
    
    // line elememt  =  time + input + button                                  //ask, it isn't showing up        
       
    // time div
    var containerTime = $('<div>');
        containerTime.addClass('divTime'+i);
        containerTime.text("Time");
        containerTime.css('border', 'black 1px solid');
        container.append(containerTime);
        
    // inpt div    
    var containerInput = $('<input>');
        containerInput.addClass('divInput'+i);
        container.append(containerInput);

    // btn  div    
    var containerBtn = $('<button>');
        containerBtn.addClass('saveBtn'+i);
        container.append(containerBtn);
};


console.log(data)


// work with the btn that can save the data
container.on('click', 'button', function(){
    // work only with one data.line 
    //var btnClass = $(this).attr('class');
    console.log(btnClass)

    // clear the local storage first then add
    localStorage.clear();
    containerInput.val('');


    // save the input 
    console.log(containerInput)

});


// data save in localStore
function updateLS() {
    localStorage.setItem('time', JSON.stringify(data))
}

//made the line work with time