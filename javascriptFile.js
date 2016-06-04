// below function is just to add 0 at tenth place of number
 function addZero(i)
 {
    if(i < 10)
        i = "0" + i;
        
    return i;
}

// Below Function is used to update Time
function updateClock() 
{
    var now = new Date();
	var s = addZero(now.getSeconds());
	var m = addZero(now.getMinutes());
	var h = now.getHours();
    var mer = "AM";
        
    // condition to set AM and PM
        if(h>12)
            mer = "PM";
        else
            mer = "AM";
        
        h=h%12;
        h=addZero(h);

    document.getElementById('currentTime').innerHTML = h+':'+m+':'+s+' '+mer;

    // call this function again in 1000ms
    setTimeout(updateClock, 1000);
}

// Below Function is used to update Date
 function updateDate()
 {
    var now = new Date();
    var months = ['January', 'February', 'March','April','May','June','July','August','September','October','November','December']; 
    var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

    var dates = now.getDate()+" "+months[now.getMonth()]+" "+now.getFullYear()

    document.getElementById('currentDate').innerHTML = days[now.getDay()]+', '+dates;

	 // call this function again in 1000ms
    setTimeout(updateDate, 1000);
}


// Below Function Executes On Form Submit
function ValidationEvent() 
{
// Storing Field Values In Variables
var h = document.getElementById("h").value;
var m = document.getElementById("m").value;
var s = document.getElementById("s").value;


// Conditions
	if (h <= 12) 
	{
		if (m <= 59) 
		{
			if (s <= 59) 
			{
				//alert("Alarm set");
				setAlarm();
				return true;
			} 
			else 
			{
				alert("Enter valid value for seconds");
				return false;
			}
		} 
		else 
		{
			alert("Enter valid value for minutes");
			return false;
		}
	} 
	else 
	{
		alert("Enter valid value for hours");
		return false;
	}

}


function setAlarm()
{
	var ds = "hello";
	document.write(ds);

return true;
}

function show(target){
	document.getElementById(target).style.display = 'block';
	document.getElementById("show_setAlarm").style.display = 'none';
}
function hide(target){
	document.getElementById(target).style.display = 'none';
	document.getElementById("show_setAlarm").style.display = 'block';
}