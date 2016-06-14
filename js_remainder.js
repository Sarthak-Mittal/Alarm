var arr_r = [0,0,0,0,0];
var status_r;
var init_r0=0,init_r1=0,init_r2=0,init_r3=0,init_r4=0;
var h0_r,h1_r,h2_r,h3_r,h4_r;
var m0_r,m1_r,m2_r,m3_r,m4_r;
var mer0_r,mer1_r,mer2_r,mer3_r,mer4_r;

var audio6 = new Audio('sound/Alarm Beep.mp3');
var audio7 = new Audio('sound/Alarm Beep.mp3');
var audio8 = new Audio('sound/Alarm Beep.mp3');
var audio9 = new Audio('sound/Alarm Beep.mp3');
var audio10 = new Audio('sound/Alarm Beep.mp3');


function valid()
{
	// Storing Field Values In Variables
	var h = document.getElementById("h_r").value;
	var m = document.getElementById("m_r").value;
	var am = document.getElementById("mer1_r").checked;
	var pm = document.getElementById("mer2_r").checked;
	

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
				status_r = checkDivStatus_r();		
				printRemainder(status_r);
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


function checkDivStatus_r()
{
	var j;

	for (var i = 0; i < arr_r.length; i++) 
	{
		if(arr_r[i] == 0)
		{	
			j=i;
			arr_r[i]=1;
			return j;
		}
	}
	return -1;
}


function printRemainder(sta) 
{

	// Storing Field Values In Variables
	var h = document.getElementById("h_r").value;
	var m = document.getElementById("m_r").value;
	var am = document.getElementById("mer1_r").checked;
	var pm = document.getElementById("mer2_r").checked;
	var text = document.getElementById("msg_r").value;
	var ampm = "MM";


		if(am==true)
			ampm='AM';
		else if(pm==true)
			ampm='PM';


	var str = addZero(h)+':'+addZero(m)+" "+ampm;
		
	if(sta == 0)
		{
			h0_r=h; m0_r=m; mer0_r=ampm; init_r0 = 1;
			document.getElementById('remainder_time1').innerHTML = str;
			document.getElementById('showRemainder1_b').innerHTML = text;
			document.getElementById("dlt_btn_6").style.display = 'block';
			document.getElementById("dlt_btn_6").src = "images/delete_alarm_b.png";
			beat_rem_1();
		}
	else if(sta == 1)
		{
			h1_r=h; m1_r=m; mer1_r=ampm; init_r1 = 1;			
			document.getElementById('remainder_time2').innerHTML = str;
			document.getElementById('showRemainder2_b').innerHTML = text;
			document.getElementById("dlt_btn_7").style.display = 'block';
			document.getElementById("dlt_btn_7").src = "images/delete_alarm_b.png";
			beat_rem_2();
		}
	else if(sta == 2)
		{
			h2_r=h; m2_r=m; mer2_r=ampm; init_r2 = 1;
			document.getElementById('remainder_time3').innerHTML = str;
			document.getElementById('showRemainder3_b').innerHTML = text;
			document.getElementById("dlt_btn_8").style.display = 'block';
			document.getElementById("dlt_btn_8").src = "images/delete_alarm_b.png";
			beat_rem_3();
		}
	else if(sta == 3)
		{
			h3_r=h; m3_r=m; mer3_r=ampm; init_r3 = 1;
			document.getElementById('remainder_time4').innerHTML = str;
			document.getElementById('showRemainder4_b').innerHTML = text;
			document.getElementById("dlt_btn_9").style.display = 'block';
			document.getElementById("dlt_btn_9").src = "images/delete_alarm_b.png";
			beat_rem_4();
		}
	else if(sta == 4)
		{
			h4_r=h; m4_r=m; mer4_r=ampm; init_r4 = 1;			
			document.getElementById('remainder_time5').innerHTML = str;
			document.getElementById('showRemainder5_b').innerHTML = text;
			document.getElementById("dlt_btn_10").style.display = 'block';
			document.getElementById("dlt_btn_10").src = "images/delete_alarm_b.png";
			beat_rem_5();		
		}
}

function beat_rem_1()
{
	if(init_r0 == 1)
	{
		if(h0_r == hour && m0_r == min)
			{
			document.getElementById("remainder_time1").style.color = "F52A2A";
			document.getElementById("showRemainder1_b").style.color = "F52A2A";
			document.getElementById("dlt_btn_6").src = "images/alarm_off.png";	
			audio6.play();
			init_r0 = 0;
			}

	    setTimeout(beat_rem_1, 1000);
	}
}


function beat_rem_2()
{
	if(init_r1 == 1)
	{
		if(h1_r == hour && m1_r == min)
			{
			document.getElementById("remainder_time2").style.color = "F52A2A";
			document.getElementById("showRemainder2_b").style.color = "F52A2A";
			document.getElementById("dlt_btn_7").src = "images/alarm_off.png";	
			audio7.play();
			init_r1 = 0;
			}

	    setTimeout(beat_rem_2, 1000);
	}
}

function beat_rem_3()
{
	if(init_r2 == 1)
	{
		if(h2_r == hour && m2_r == min)
			{
			document.getElementById("remainder_time3").style.color = "F52A2A";
			document.getElementById("showRemainder3_b").style.color = "F52A2A";
			document.getElementById("dlt_btn_8").src = "images/alarm_off.png";	
			audio8.play();
			init_r2 = 0;
			}

	    setTimeout(beat_rem_3, 1000);
	}
}

function beat_rem_4()
{
	if(init_r3 == 1)
	{
		if(h3_r == hour && m3_r == min)
			{
			document.getElementById("remainder_time4").style.color = "F52A2A";
			document.getElementById("showRemainder4_b").style.color = "F52A2A";
			document.getElementById("dlt_btn_9").src = "images/alarm_off.png";	
			audio9.play();
			init_r3 = 0;
			}

	    setTimeout(beat_rem_4, 1000);
	}
}


function beat_rem_5()
{
	if(init_r4 == 1)
	{
		if(h4_r == hour && m4_r == min)
			{
			document.getElementById("remainder_time5").style.color = "F52A2A";
			document.getElementById("showRemainder5_b").style.color = "F52A2A";
			document.getElementById("dlt_btn_10").src = "images/alarm_off.png";	
			audio10.play();
			init_r4 = 0;
			}

	    setTimeout(beat_rem_5, 1000);
	}
}



function delete_rem_1()
{
	audio6.pause();
	document.getElementById("remainder_time1").style.color = "white";
	document.getElementById("showRemainder1_b").style.color = "white";
	document.getElementById('remainder_time1').innerHTML = " ";
	document.getElementById('showRemainder1_b').innerHTML = " ";	
	arr_r[0]=0;
	document.getElementById("dlt_btn_6").style.display = 'none';
}

function delete_rem_2()
{
	audio7.pause();
	document.getElementById("remainder_time2").style.color = "white";
	document.getElementById("showRemainder2_b").style.color = "white";
	document.getElementById('remainder_time2').innerHTML = " ";
	document.getElementById('showRemainder2_b').innerHTML = " ";	
	arr_r[1]=0;
	document.getElementById("dlt_btn_7").style.display = 'none';
}
function delete_rem_3()
{
	audio8.pause();
	document.getElementById("remainder_time3").style.color = "white";
	document.getElementById("showRemainder3_b").style.color = "white";
	document.getElementById('remainder_time3').innerHTML = " ";
	document.getElementById('showRemainder3_b').innerHTML = " ";	
	arr_r[2]=0;
	document.getElementById("dlt_btn_8").style.display = 'none';
}
function delete_rem_4()
{
	audio9.pause();
	document.getElementById("remainder_time4").style.color = "white";
	document.getElementById("showRemainder4_b").style.color = "white";
	document.getElementById('remainder_time4').innerHTML = " ";
	document.getElementById('showRemainder4_b').innerHTML = " ";	
	arr_r[3]=0;
	document.getElementById("dlt_btn_9").style.display = 'none';
}
function delete_rem_5()
{
	audio10.pause();
	document.getElementById("remainder_time5").style.color = "white";
	document.getElementById("showRemainder5_b").style.color = "white";
	document.getElementById('remainder_time5').innerHTML = " ";
	document.getElementById('showRemainder5_b').innerHTML = " ";	
	arr_r[4]=0;
	document.getElementById("dlt_btn_10").style.display = 'none';
}
