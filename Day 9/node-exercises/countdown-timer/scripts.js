var secondsLeft;
var interval;

function resetPage(){
	document.getElementById("inputArea").style.display = "block";
}

function tick(){
	var displayTime = document.getElementById("time");
	
	var min = Math.floor(secondsLeft / 60);
	var sec = secondsLeft - (min * 60);
	
	if (sec < 10) { sec = "0" + sec; }
	var message = min.toString() + ":" + sec;
	displayTime.innerHTML = message;

	if (secondsLeft === 0){
		alert("Done!");
		clearInterval(interval);
		resetPage();
	}
	secondsLeft--;
}

function startCountdown(){
	function resetPage(){
		document.getElementById("inputArea").style.display = "block";
	}

	var minutes = document.getElementById("minutes").value;
	
	if (isNaN(minutes)){
		alert("Please enter a number");
		return;
	}

	secondsLeft = minutes * 60;
	
	interval = setInterval(tick, 1000);

	document.getElementById("inputArea").style.display = "none";
}

window.onload = function(){
	var inputMinutes = document.createElement("input");
	inputMinutes.setAttribute("id", "minutes");
    inputMinutes.setAttribute("type", "text");
	inputMinutes.setAttribute("placeholder", "minutes...");
	
    var startButton = document.createElement("input");
	startButton.setAttribute("type","button");
	startButton.setAttribute("value","Start Countdown");
	startButton.onclick = function(){
		startCountdown();
	};

	document.getElementById("inputArea").appendChild(inputMinutes);
	document.getElementById("inputArea").appendChild(startButton);
}
