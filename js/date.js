
var dv = document.getElementById("content");
dv.style.opacity = 0;
var val = 0;

function timer() {
    // Thời điểm đích
    const targetDate = new Date('2023-11-15T23:11:00').getTime();

    setInterval(function() {

        const now = new Date().getTime();

        const distance = now - targetDate;

        const d = Math.floor(distance / (1000 * 60 * 60 * 24));
        const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("d").innerHTML = d;
        document.getElementById("h").innerHTML = h;
        document.getElementById("m").innerHTML = m;
        document.getElementById("s").innerHTML = s;
    }, 1000);
}

function fadein(){
	if(val < 1){
		val += 0.025;
		dv.style.opacity = val;
	}
	else{
		clearInterval(fadeinInterval);
		if(ok == 2){
			ok += 1;
		}
	}
}

var fadeInterval;
var fadeinInterval;

timer();
setInterval(timer, 1000);
fadeInterval = setInterval(function(){
	if(ok == 2){
		clearInterval(fadeInterval);
		fadeinInterval = setInterval(fadein, 50);
	}
}, 50)
