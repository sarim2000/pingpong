const p1 = document.getElementById("player1");
const p2 = document.getElementById("player2");
const reset = document.getElementById("reset");
const playingto = document.getElementById("playingto");
const p1score = document.getElementById("score1");
const p2score = document.getElementById("score2");
var x = 0;
var y = 0;
let winningscore = 3;
let isgameover = false;
p1.addEventListener("click", function () {
	if (!isgameover) {
		x++;
		if (x == winningscore) {
			isgameover = true;
			p1score.style.color = "green";
			p2score.style.color = "red";
			p1.disabled = true;
			p2.disabled = true;
		}
		p1score.innerText = x;
	}
});
p2.addEventListener("click", function () {
	if (!isgameover) {
		y++;
		if (y == winningscore) {
			isgameover = true;
			p2score.style.color = "green";
			p1score.style.color = "red";
			p1.disabled = true;
			p2.disabled = true;
		}
		p2score.innerText = y;
	}
});
reset.addEventListener("click", function () {
	x = 0;
	y = 0;
	isgameover = false;
	p1score.innerHTML = 0;
	p2score.innerHTML = 0;
	p2score.style.color = "black";
	p1score.style.color = "black";
	p1.disabled = false;
	p2.disabled = false;
});

playingto.addEventListener("change", function () {
	winningscore = playingto.value;
	x = 0;
	y = 0;
	isgameover = false;
	p1score.innerHTML = 0;
	p2score.innerHTML = 0;
	p2score.style.color = "black";
	p1score.style.color = "black";
	p1.disabled = false;
	p2.disabled = false;
});
