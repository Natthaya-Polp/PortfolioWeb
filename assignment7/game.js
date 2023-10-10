window.onload = pageLoad;

function pageLoad()
{
	document.getElementById("start").onclick = startGame;
	var x = document.getElementById('clock');
	x.innerHTML = 30;
}

var timer = null;

function startGame()
{
	clearInterval(timer);
	clearScreen();
	
	alert("Ready");
	addBox();
	timeStart();
}

function timeStart()
{
	var TIMER_TICK = 1000;
	var min = 0.5; // 0.5 minute
	var second = min*60; 
	var x = document.getElementById('clock');
	console.log(timer);

	//setting timer using setInterval function
	timer = setInterval(timeCount,TIMER_TICK);
	
	function timeCount()
	{
		var allbox = document.querySelectorAll("#layer button");

		second--;
		x.innerHTML = second;
		console.log(allbox.length)
			
		if (allbox.length == 0)
		{
			alert("YOU WIN!");
			clearInterval(timer);
			clearScreen();
			x.innerHTML = 30;
		}
		else if (second < 0)
		{
			alert("GAME OVER!");
			clearInterval(timer);
			clearScreen();
			x.innerHTML = 30;
		}

		// จัดการเกี่ยวกับเวลา เช่น ถ้ายังมีกล่องเหลืออยู่ เวลาจะลดลงเรื่อยๆ 
		// ถ้าไม่มีกล่องเหลือแล้ว และเวลายังเหลืออยู่จะขึ้นว่า You win!
		// ถ้าเวลาหมด แต่ยังมีกล่องเหลืออยู่ จะบอกว่า Game over และทำการ clear screen
	}
}

function addBox()
{
	// สร้างกล่องตาม input ที่เราใส่ 
	var numbox = document.getElementById("numbox").value;
	var gameLayer = document.getElementById("layer");
	console.log(gameLayer);
	var colorDrop = document.getElementById("color").value;

	for (var i = 0; i < numbox; i++)
	{
		var tempbox = document.createElement("button");
		tempbox.className = "square";
		tempbox.id = "box" + i;
		tempbox.style.left = Math.random() * (500 - 25) + "px";
		tempbox.style.top = Math.random() * (500 - 25) + "px";
		tempbox.style.backgroundColor = colorDrop;

		//add element to HTML node
		gameLayer.appendChild(tempbox);
		bindBox(tempbox);
	}
}

function bindBox(box)
{
	//เมื่อกดแล้ว กล่องจะหายไป
	box.onclick = box.remove;
}

function clearScreen()
{
	// ทำการลบ node ของกล่องทั้งหมด ออกจาก หน้าจอ
	var allbox = 0;
	allbox = document.querySelectorAll("#layer button");

	//delete all  div
	for (var i = 0; i < allbox.length; i++)
	{
		allbox[i].remove();
	}
}




