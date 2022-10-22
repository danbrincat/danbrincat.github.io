// MAIN SCRIPT FOR HOUSE QUIZ
// LAST UPDATED: 19-10-22

grf = 0;
sly = 0;
huf = 0;
rav = 0;

//start quiz
function startQ() {
	var startQ = document.getElementById("startQ");
	var q1 = document.getElementById("q1");
	startQ.classList.add("hidden");
	q1.classList.remove("hidden");
}

//next q1
function nextQ1() {
	var q1 = document.getElementById("q1");
	var q2 = document.getElementById("q2");
	var q1A = document.getElementById("q1A");
	var q1B = document.getElementById("q1B");
	var q1C = document.getElementById("q1C");
	var q1D = document.getElementById("q1D");
	if (q1A.checked) {
		rav += 1;
		q1.classList.add("hidden");
		q2.classList.remove("hidden");
	} else if (q1B.checked) {
		grf += 1;
		q1.classList.add("hidden");
		q2.classList.remove("hidden");
	} else if (q1C.checked) {
		sly += 1;
		q1.classList.add("hidden");
		q2.classList.remove("hidden");
	} else if (q1D.checked) {
		huf += 1;
		q1.classList.add("hidden");
		q2.classList.remove("hidden");
	} else {
		alert("Please choose an option");
	};
}

//next q2
function nextQ2() {
	var q2 = document.getElementById("q2");
	var q3 = document.getElementById("q3");
	var q2A = document.getElementById("q2A");
	var q2B = document.getElementById("q2B");
	var q2C = document.getElementById("q2C");
	var q2D = document.getElementById("q2D");
	if (q2A.checked) {
		grf += 1;
		q2.classList.add("hidden");
		q3.classList.remove("hidden");
	} else if (q2B.checked) {
		sly += 1;
		q2.classList.add("hidden");
		q3.classList.remove("hidden");
	} else if (q2C.checked) {
		huf += 1;
		q2.classList.add("hidden");
		q3.classList.remove("hidden");
	} else if (q2D.checked) {
		rav += 1;
		q2.classList.add("hidden");
		q3.classList.remove("hidden");
	} else {
		alert("Please choose an option");
	};
}

//next q3
function nextQ3() {
	var q3 = document.getElementById("q3");
	var q3A = document.getElementById("q3A");
	var q3B = document.getElementById("q3B");
	var q3C = document.getElementById("q3C");
	var q3D = document.getElementById("q3D");
	var results = document.getElementById("results");
	if (q3A.checked) {
		grf += 1;
		q3.classList.add("hidden");
		results.classList.remove("hidden");
	} else if (q3B.checked) {
		sly += 1;
		q3.classList.add("hidden");
		results.classList.remove("hidden");
	} else if (q3C.checked) {
		huf += 1;
		q3.classList.add("hidden");
		results.classList.remove("hidden");
	} else if (q3D.checked) {
		rav += 1;
		q3.classList.add("hidden");
		results.classList.remove("hidden");
	} else {
		alert("Please choose an option");
	};
	quizGo()
}


//results
function quizGo() {

console.log("Gryffindor = " + grf);
console.log("Ravenclaw = " + rav);
console.log("Slytherin = " + sly);
console.log("Hufflepuff = " + huf);

var chckbrd = document.getElementById("results");

if (grf > rav && grf > sly && grf > huf) {
	chckbrd.classList.add("grf");
	result = "GRYFFINDOR";
	descrip = "You might belong in Gryffindor, Where dwell the brave at heart, Their daring, nerve, and chivalry Set Gryffindors apart";
} else if (rav > grf && rav > sly && rav > huf) {
	chckbrd.classList.add("rav");
	result = "RAVENCLAW"
	descrip = "Or yet in wise old Ravenclaw, If you've a ready mind, Where those of wit and learning, Will always find their kind.";
} else if (sly > grf && sly > rav && sly > huf) {
	chckbrd.classList.add("sly");
	result = "SLYTHERIN";
	descrip = "Or perhaps in Slytherin, You'll make your real friends, Those cunning folk use any means, To achieve their ends.";
} else if (huf > grf && huf > rav && huf > sly) {
	chckbrd.classList.add("huf");
	result = "HUFFLEPUFF"
	descrip = "You might belong in Hufflepuff, Where they are just and loyal, Those patient Hufflepuffs are true, And unafraid of toil.";
} else {
	result = "Oh No!";
	desrip = "Somethings Gone Wrong!";
};

document.getElementById("result-display").innerHTML = result;
document.getElementById("descrip-display").innerHTML = descrip;

}