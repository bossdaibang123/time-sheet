

//set up the table
var container = $("#container")

/* container
h2 + input + button
*/

var containerH2 = $('<h2>')

containerH2.text("Time"+j + console.log("test"));
containerH2.css('border', 'black 1px solid');
container.append(containerH2);

// set time for the whole site

var data = JSON.parse(localStorage.getItem("time")) || []

for (i=9; i<18; i++) {
    
    if (i>=13) {
        var j = i - 12 
    } else {
        j = i
    }
    
    if (i<12) {
        var time = {
            hour : j,
            morning : true,
            surfix : "AM",
            data : ""
        }
    }else {
        var time = {
            hour : j,
            morning : false,
            surfix : "PM",
            data : ""
        }
    }
    data.push(time);
}

console.log(data)

function updateLS() {
    localStorage.setItem('time', JSON.stringify(data))
}
// made a line "time, input, save btn"

// repeat the line with i< time.length


// work with the btn that can save the data
// data save in localStore

//made the line work with time