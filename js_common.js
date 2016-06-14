var sec;
var min;
var hour;
var mer;

function initiate()
{
	document.getElementById("dlt_btn_1").style.display = 'none';
	document.getElementById("dlt_btn_2").style.display = 'none';
	document.getElementById("dlt_btn_3").style.display = 'none';
	document.getElementById("dlt_btn_4").style.display = 'none';
	document.getElementById("dlt_btn_5").style.display = 'none';
	document.getElementById("dlt_btn_6").style.display = 'none';
	document.getElementById("dlt_btn_7").style.display = 'none';
	document.getElementById("dlt_btn_8").style.display = 'none';
	document.getElementById("dlt_btn_9").style.display = 'none';
	document.getElementById("dlt_btn_10").style.display = 'none';
	document.getElementById('digits').innerHTML = addZero(c_hour)+':'+addZero(c_min)+':'+addZero(c_sec)+':'+addZero(c_mil_sec);
}

	

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

    beat1();beat2();beat3();beat4();beat5();
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

function show(target)
{
	document.getElementById(target).style.display = 'block';
	document.getElementById("show_set").style.display = 'none';
}

function hide(target)
{
	document.getElementById(target).style.display = 'none';
	document.getElementById("show_set").style.display = 'block';
}

