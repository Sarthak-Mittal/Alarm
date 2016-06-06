// below function is just to add 0 at tenth place of number
 function addZero(i)
 {
    if(i < 10)
        i = "0" + i;
        
    return i;
}
var sec;
var min;
var hour;
var mer;

// Below Function is used to update Time
function updateClock() 
{
    var now = new Date();
	sec = addZero(now.getSeconds());
	min = addZero(now.getMinutes());
	hour = now.getHours();
    mer = "AM";
        
    // condition to set AM and PM
        if(hour>12)
            mer = "PM";
        else
            mer = "AM";
        
        hour=hour%12;

    document.getElementById('currentTime').innerHTML = addZero(hour)+':'+min+':'+sec+' '+mer;

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
var am = document.getElementById("mer1").checked;
var pm = document.getElementById("mer2").checked;

// Conditions
	if (h <= 12) 
	{
		if (m <= 59) 
		{
			if(am==false && pm==false) 
			{
    			alert("You must select AM or PM");
   				return false;
			}
			else
			{
				return true;
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

function show(target)
{
	document.getElementById(target).style.display = 'block';
	document.getElementById("show_setAlarm").style.display = 'none';
}
function hide(target)
{
	document.getElementById(target).style.display = 'none';
	document.getElementById("show_setAlarm").style.display = 'block';
}

function printAlarm() 
{
// Storing Field Values In Variables
var h = document.getElementById("h").value;
var m = document.getElementById("m").value;
var mer1 = document.getElementById("mer1").checked;
var mer2 = document.getElementById("mer2").checked;
var ampm='AM';
var aRing_min;
var aRing_hour;
var aRing_sec;
aRing_sec = 59 - sec; 

if(mer1)
	ampm='AM';
else if(mer2)
	ampm='PM';


aRing_min = (60-min)+(m-1);
aRing_hour = (h-hour)-1;
if(aRing_min>60)
	aRing_hour++;
aRing_min = aRing_min % 60;


if(mer != ampm)
	aRing_hour+=12;

if(mer == ampm)
	if(h <= hour)
		aRing_hour = 24 + aRing_hour;
	

var stringg = "alarm set for - "+addZero(h)+':'+addZero(m)+' '+ampm+'<br>Will ring in - '+addZero(aRing_hour)+':'+addZero(aRing_min)+':'+addZero(aRing_sec);

document.getElementById('showAlarm1').innerHTML = stringg;

setTimeout(printAlarm, 100);
}


