var init = 1;
var c_mil_sec = 0;
var c_sec=0;
var c_min=0;
var c_hour=0; 
var lock = 1;

function play()
{
	if(lock == 1)
	{
		startCountdown();
	}
}

function startCountdown() 
{

	if(init == 1)
	{
		lock = 0;

	    c_mil_sec += 1;

		if(c_mil_sec == 99)
		{
			c_sec += 1; c_mil_sec = 0;
			if(c_sec == 59)
			{
				c_min += 1; c_sec=0;
				if(c_min == 59)
				{
					c_hour += 1; c_min=0;
					if(c_hour == 23 && c_min== 59 && c_sec== 59)
					{
						c_sec=0;c_min=0;c_mil_sec=0;c_hour=0;
					}
				}
			}
		}

	document.getElementById('digits').innerHTML = addZero(c_hour)+':'+addZero(c_min)+':'+addZero(c_sec)+':'+addZero(c_mil_sec);

	    setTimeout(startCountdown, 10);
	}

}

function stopCountdown()
{
	init = 0;
	lock = 1;
}

function resetCountdown()
{
	stopCountdown();
	c_mil_sec = 0;
	c_sec=0;
	c_min=0;
	c_hour=0;  
	setTimeout(function() {init = 1}, 100);
	document.getElementById('digits').innerHTML = addZero(c_hour)+':'+addZero(c_min)+':'+addZero(c_sec)+':'+addZero(c_mil_sec);
}
