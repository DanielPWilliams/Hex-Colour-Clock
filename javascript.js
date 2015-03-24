//lets display the current time
// Variable representing the date, hours, minutes, seconds and colour;
var d, h, m, s, colour;


/* At the point we are calling our displayTime() function, the rest of the page has not rendered so the program will only
 * result in a while and blank page. In order to make sure the function is created and called when every element of the page
 * has rendered we use window.onload. */

window.onload = function displayTime() {

    // New Date object.
    d = new Date();
    // Set the time variables.
    h = d.getHours();
    m = d.getMinutes();
    s = d.getSeconds();

    // This will make sure zeros are added to the ledt of the numbers if the numbers are sinlge digits.
    if(h <= 9) h = '0'+h;
    if(m <= 9) m = '0'+m;
    if(s <= 9) s = '0'+s;

    // Add the hash symbol to the colour variable.
    colour = "#"+h+m+s;
    // Set the background colour.
    document.body.style.background = colour;
    // Set the time.
    document.getElementById("hex").innerHTML = colour;

    // Retrigger the function every second.
    setTimeout(displayTime, 1000);
}

// Call the displayTime() function to get the program to run.
displayTime();