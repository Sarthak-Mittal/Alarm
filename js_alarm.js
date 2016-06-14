var status;
var arr = [0,0,0,0,0];
var initial_beat = [0,0,0,0,0];

var h0,h1,h2,h3,h4;
var m0,m1,m2,m3,m4;
var mer10,mer11,mer12,mer13,mer14;
var mer20,mer21,mer22,mer23,mer24;

var audio1 = new Audio('sound/Alarm Beep.mp3');
var audio2 = new Audio('sound/Alarm Beep.mp3');
var audio3 = new Audio('sound/Alarm Beep.mp3');
var audio4 = new Audio('sound/Alarm Beep.mp3');
var audio5 = new Audio('sound/Alarm Beep.mp3');

function deleteAlarm1()
{
	audio1.pause();
	document.getElementById("showAlarm1_l").style.color = "white";	
	document.getElementById("showAlarm1_r").style.color = "white";
	document.getElementById('showAlarm1_r').innerHTML = " ";
	document.getElementById('showAlarm1_l').innerHTML = " ";	
	arr[0]=0;
	initial_beat[0]=0;
	document.getElementById("dlt_btn_1").style.display = 'none';
}

function deleteAlarm2()
{
	audio2.pause();
	document.getElementById("showAlarm2_l").style.color = "white";	
	document.getElementById("showAlarm2_r").style.color = "white";
	document.getElementById('showAlarm2_r').innerHTML = " ";
	document.getElementById('showAlarm2_l').innerHTML = " ";	
	arr[1]=0;
	initial_beat[1]=0;
	document.getElementById("dlt_btn_2").style.display = 'none';
}

function deleteAlarm3()
{
	audio3.pause();
	document.getElementById("showAlarm3_l").style.color = "white";	
	document.getElementById("showAlarm3_r").style.color = "white";
	document.getElementById('showAlarm3_r').innerHTML = " ";
	document.getElementById('showAlarm3_l').innerHTML = " ";	
	arr[2]=0;
	initial_beat[2]=0;
	document.getElementById("dlt_btn_3").style.display = 'none';
}

function deleteAlarm4()
{
	audio4.pause();
	document.getElementById("showAlarm4_l").style.color = "white";	
	document.getElementById("showAlarm4_r").style.color = "white";
	document.getElementById('showAlarm4_r').innerHTML = " ";
	document.getElementById('showAlarm4_l').innerHTML = " ";	
	arr[3]=0;
	initial_beat[3]=0;	
	document.getElementById("dlt_btn_4").style.display = 'none';

}

function deleteAlarm5()
{
	audio5.pause();
	document.getElementById("showAlarm5_l").style.color = "white";	
	document.getElementById("showAlarm5_r").style.color = "white";
	document.getElementById('showAlarm5_r').innerHTML = " ";
	document.getElementById('showAlarm5_l').innerHTML = " ";	
	arr[4]=0;
	initial_beat[4]=0;
	document.getElementById("dlt_btn_5").style.display = 'none';
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

	// Storing Field Values In Variables
	var h = document.getElementById("h").value;
	var m = document.getElementById("m").value;
	var am = document.getElementById("mer1").checked;
	var pm = document.getElementById("mer2").checked;

	if(status == 0)
		{
			initial_beat[0] = 1;
			h0=h; m0=m; mer10=am; mer20=pm;
			printAlarm1();
			beat1();
			document.getElementById("dlt_btn_1").style.display = 'block';
			document.getElementById("dlt_btn_1").src = "images/delete_alarm_b.png";
		}
	else if(status == 1)
		{
			initial_beat[1] = 1;
			h1=h; m1=m; mer11=am; mer21=pm;
			printAlarm2();
			beat2();
			document.getElementById("dlt_btn_2").style.display = 'block';
			document.getElementById("dlt_btn_2").src = "images/delete_alarm_b.png";		}
	else if(status == 2)
		{
			initial_beat[2] = 1;
			h2=h; m2=m; mer12=am; mer22=pm;
			printAlarm3();
			beat3();
			document.getElementById("dlt_btn_3").style.display = 'block';
			document.getElementById("dlt_btn_3").src = "images/delete_alarm_b.png";		}
	else if(status == 3)
		{
			initial_beat[3] = 1;
			h3=h; m3=m; mer13=am; mer23=pm;
			printAlarm4();
			beat4();
			document.getElementById("dlt_btn_4").style.display = 'block';
			document.getElementById("dlt_btn_4").src = "images/delete_alarm_b.png";		}
	else if(status == 4)
		{
			initial_beat[4] = 1;
			h4=h; m4=m; mer14=am; mer24=pm;
			printAlarm5();
			beat5();
			document.getElementById("dlt_btn_5").style.display = 'block';
			document.getElementById("dlt_btn_5").src = "images/delete_alarm_b.png";		}
}

function beat1()
{

	if(initial_beat[0])
	{
		var ampm='AM';
		var aRing_min;
		var aRing_hour;
		var aRing_sec;
		aRing_sec = 59 - sec; 
	
		if(mer10==true)
			ampm='AM';
		else if(mer20==true)
			ampm='PM';


		aRing_min = (60-min)+(m0-1);
		aRing_hour = (h0-hour)-1;
		if(aRing_min>59)
			aRing_hour++;
		aRing_min = aRing_min % 60;


		if(mer != ampm)
			aRing_hour+=12;

		if(mer == ampm)
		{
			if(h0 == hour)
			{
				if(m0 <= min)
					aRing_hour = 24 + aRing_hour;
			}
			if(h0 < hour)
				aRing_hour = 24 + aRing_hour;
		}
		if(aRing_hour==0 && aRing_min==0 && aRing_sec==0)
				{
					initial_beat[0] = 0;
					document.getElementById("showAlarm1_l").style.color = "F52A2A";
					document.getElementById("showAlarm1_r").style.color = "F52A2A";
					document.getElementById("dlt_btn_1").src = "images/alarm_off.png";
					audio1.play();
				}

		var string2 = addZero(aRing_hour)+':'+addZero(aRing_min)+':'+addZero(aRing_sec);
		document.getElementById('showAlarm1_r').innerHTML = string2;

	}
}

function beat2()
{

	if(initial_beat[1])
	{
		
		var ampm='AM';
		var aRing_min;
		var aRing_hour;
		var aRing_sec;
		aRing_sec = 59 - sec; 
	
		if(mer11==true)
			ampm='AM';
		else if(mer21==true)
			ampm='PM';


		aRing_min = (60-min)+(m1-1);
		aRing_hour = (h1-hour)-1;
		if(aRing_min>59)
			aRing_hour++;
		aRing_min = aRing_min % 60;


		if(mer != ampm)
			aRing_hour+=12;

		if(mer == ampm)
		{
			if(h1 == hour)
			{
				if(m1 <= min)
					aRing_hour = 24 + aRing_hour;
			}
			if(h1 < hour)
				aRing_hour = 24 + aRing_hour;
		}		
	
		if(aRing_hour==0 && aRing_min==0 && aRing_sec==0)
			{
				initial_beat[1] = 0;
				document.getElementById("showAlarm2_l").style.color = "F52A2A";
				document.getElementById("showAlarm2_r").style.color = "F52A2A";
				document.getElementById("dlt_btn_2").src = "images/alarm_off.png";
				audio2.play();
			}

		var string2 = addZero(aRing_hour)+':'+addZero(aRing_min)+':'+addZero(aRing_sec);
		document.getElementById('showAlarm2_r').innerHTML = string2;
	}
}

function beat3()
{

	if(initial_beat[2])
	{
		
		var ampm='AM';
		var aRing_min;
		var aRing_hour;
		var aRing_sec;
		aRing_sec = 59 - sec; 
	
		if(mer12==true)
			ampm='AM';
		else if(mer22==true)
			ampm='PM';


		aRing_min = (60-min)+(m2-1);
		aRing_hour = (h2-hour)-1;
		if(aRing_min>59)
			aRing_hour++;
		aRing_min = aRing_min % 60;


		if(mer != ampm)
			aRing_hour+=12;

		if(mer == ampm)
		{
			if(h2 == hour)
			{
				if(m2 <= min)
					aRing_hour = 24 + aRing_hour;
			}
			if(h2 < hour)
				aRing_hour = 24 + aRing_hour;
		}

		if(aRing_hour==0 && aRing_min==0 && aRing_sec==0)
				{
					initial_beat[2] = 0;
					document.getElementById("showAlarm3_l").style.color = "F52A2A";
					document.getElementById("showAlarm3_r").style.color = "F52A2A";
					document.getElementById("dlt_btn_3").src = "images/alarm_off.png";
					audio3.play();
				}			

		var string2 = addZero(aRing_hour)+':'+addZero(aRing_min)+':'+addZero(aRing_sec);
		document.getElementById('showAlarm3_r').innerHTML = string2;	}
}

function beat4()
{

	if(initial_beat[3])
	{
		
		var ampm='AM';
		var aRing_min;
		var aRing_hour;
		var aRing_sec;
		aRing_sec = 59 - sec; 
	
		if(mer13==true)
			ampm='AM';
		else if(mer23==true)
			ampm='PM';


		aRing_min = (60-min)+(m3-1);
		aRing_hour = (h3-hour)-1;
		if(aRing_min>59)
			aRing_hour++;
		aRing_min = aRing_min % 60;


		if(mer != ampm)
			aRing_hour+=12;

		if(mer == ampm)
		{
			if(h3 == hour)
			{
				if(m3 <= min)
					aRing_hour = 24 + aRing_hour;
			}
			if(h3 < hour)
				aRing_hour = 24 + aRing_hour;
		}

		if(aRing_hour==0 && aRing_min==0 && aRing_sec==0)
				{
					initial_beat[3] = 0;
					document.getElementById("showAlarm4_l").style.color = "F52A2A";
					document.getElementById("showAlarm4_r").style.color = "F52A2A";
					document.getElementById("dlt_btn_4").src = "images/alarm_off.png";
					audio4.play();
				}
			

		var string2 = addZero(aRing_hour)+':'+addZero(aRing_min)+':'+addZero(aRing_sec);
		document.getElementById('showAlarm4_r').innerHTML = string2;	}
}

function beat5()
{

	if(initial_beat[4])
	{

		var ampm='AM';
		var aRing_min;
		var aRing_hour;
		var aRing_sec;
		aRing_sec = 59 - sec; 
	
		if(mer14==true)
			ampm='AM';
		else if(mer24==true)
			ampm='PM';


		aRing_min = (60-min)+(m4-1);
		aRing_hour = (h4-hour)-1;
		if(aRing_min>59)
			aRing_hour++;
		aRing_min = aRing_min % 60;


		if(mer != ampm)
			aRing_hour+=12;

		if(mer == ampm)
		{
			if(h4 == hour)
			{
				if(m4 <= min)
					aRing_hour = 24 + aRing_hour;
			}
			if(h4 < hour)
				aRing_hour = 24 + aRing_hour;
		}			
			if(aRing_hour==0 && aRing_min==0 && aRing_sec==0)
			{
				initial_beat[4] = 0;
				document.getElementById("showAlarm5_l").style.color = "F52A2A";
				document.getElementById("showAlarm5_r").style.color = "F52A2A";
				document.getElementById("dlt_btn_5").src = "images/alarm_off.png";
				audio5.play();
			}
		var string2 = addZero(aRing_hour)+':'+addZero(aRing_min)+':'+addZero(aRing_sec);
		document.getElementById('showAlarm5_r').innerHTML = string2;
	}
}

function printAlarm1()
{
		var ampm='AM';

		if(mer10==true)
			ampm='AM';
		else if(mer20==true)
			ampm='PM';

		var string1 = addZero(h0)+':'+addZero(m0)+' '+ampm;
		document.getElementById('showAlarm1_l').innerHTML = string1;
}

function printAlarm2()
{
		var ampm='AM';

		if(mer11==true)
			ampm='AM';
		else if(mer21==true)
			ampm='PM';

		var string1 = addZero(h1)+':'+addZero(m1)+' '+ampm;
		document.getElementById('showAlarm2_l').innerHTML = string1;
}

function printAlarm3()
{
		var ampm='AM';

		if(mer12==true)
			ampm='AM';
		else if(mer22==true)
			ampm='PM';

		var string1 = addZero(h2)+':'+addZero(m2)+' '+ampm;
		document.getElementById('showAlarm3_l').innerHTML = string1;
}

function printAlarm4()
{
		var ampm='AM';

		if(mer13==true)
			ampm='AM';
		else if(mer23==true)
			ampm='PM';

		var string1 = addZero(h3)+':'+addZero(m3)+' '+ampm;
		document.getElementById('showAlarm4_l').innerHTML = string1;
}

function printAlarm5()
{
		var ampm='AM';

		if(mer14==true)
			ampm='AM';
		else if(mer24==true)
			ampm='PM';

		var string1 = addZero(h4)+':'+addZero(m4)+' '+ampm;
		document.getElementById('showAlarm5_l').innerHTML = string1;
}
