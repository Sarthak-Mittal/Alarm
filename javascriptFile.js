var sec;
var min;
var hour;
var mer;
var status;
var arr = [0,0,0,0,0];
var initial_beat_1 = 0;
var initial_beat_2 = 0;
var initial_beat_3 = 0;
var initial_beat_4 = 0;
var initial_beat_5 = 0;


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
    beat1();beat2();beat3();beat4();beat5();
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

function checkDivStatus()
{
	var j;

	for (var i = 0; i < arr.length; i++) 
	{
		if(arr[i] == 0)
		{	
			j=i;
			arr[i]=1;
			return j;
		}
	}
	return -1;
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
				status = checkDivStatus();
				printAlarm(status);
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


function printAlarm(status) 
{


if(status == 0)
	initial_beat_1 = 1;
else if(status == 1)
	initial_beat_2 = 1;
else if(status == 2)
	initial_beat_3 = 1;
else if(status == 3)
	initial_beat_4 = 1;
else if(status == 4)
	initial_beat_5 = 1;

}



function beat1()
{

	if(initial_beat_1)
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
			

		var stringg = "alarm set for - "+addZero(h)+':'+addZero(m)+' '+
						ampm+'<br>Will ring in - '+addZero(aRing_hour)+':'+addZero(aRing_min)+':'+addZero(aRing_sec);


			document.getElementById('showAlarm1').innerHTML = stringg;

	}

}


function beat2()
{

	if(initial_beat_2)
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
			

		var stringg = "alarm set for - "+addZero(h)+':'+addZero(m)+' '+
						ampm+'<br>Will ring in - '+addZero(aRing_hour)+':'+addZero(aRing_min)+':'+addZero(aRing_sec);


			document.getElementById('showAlarm2').innerHTML = stringg;

	}
}

function beat3()
{

	if(initial_beat_3)
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
			

		var stringg = "alarm set for - "+addZero(h)+':'+addZero(m)+' '+
						ampm+'<br>Will ring in - '+addZero(aRing_hour)+':'+addZero(aRing_min)+':'+addZero(aRing_sec);


			document.getElementById('showAlarm3').innerHTML = stringg;

	}
}

function beat4()
{

	if(initial_beat_4)
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
			

		var stringg = "alarm set for - "+addZero(h)+':'+addZero(m)+' '+
						ampm+'<br>Will ring in - '+addZero(aRing_hour)+':'+addZero(aRing_min)+':'+addZero(aRing_sec);


			document.getElementById('showAlarm4').innerHTML = stringg;

	}
}

function beat5()
{

	if(initial_beat_5)
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
			

		var stringg = "alarm set for - "+addZero(h)+':'+addZero(m)+' '+
						ampm+'<br>Will ring in - '+addZero(aRing_hour)+':'+addZero(aRing_min)+':'+addZero(aRing_sec);


			document.getElementById('showAlarm5').innerHTML = stringg;

	}
}