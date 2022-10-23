//MAIN SCRIPT FOR HOUSE QUIZ
// LAST UPDATED: 44857

grf = 0
sly = 0
huf = 0
rav = 0

//start quiz
function startQ() {
var startQ = document.getElementById("startQ");
var q1 = document.getElementById("q1");
var progBar = document.getElementById("prog-Bar");
var prog = document.getElementById('prog');
startQ.classList.add("hidden");
q1.classList.remove("hidden");
progBar.classList.remove("hidden");
prog.style.width = "8.33333333333333%";
}

//next q1
function nextQ1() {
var q1 = document.getElementById("q1");
var q2 = document.getElementById("q2");
var q1A = document.getElementById("q1A");
var q1B = document.getElementById("q1B");
var q1C = document.getElementById("q1C");
var q1D = document.getElementById("q1D");
var prog = document.getElementById('prog');
if (q1A.checked) {
huf += 1;
} else if (q1B.checked) {
rav += 1;
} else if (q1C.checked) {
sly += 1;
} else if (q1D.checked) {
grf += 1;
} else {
alert("Please choose an option");
return
};
q1.classList.add("hidden");
q2.classList.remove("hidden");
prog.style.width = "16.6666666666667%";
}

//next q2
function nextQ2() {
var q2 = document.getElementById("q2");
var q3 = document.getElementById("q3");
var q2A = document.getElementById("q2A");
var q2B = document.getElementById("q2B");
var q2C = document.getElementById("q2C");
var q2D = document.getElementById("q2D");
var prog = document.getElementById('prog');
if (q2A.checked) {
huf += 1;
} else if (q2B.checked) {
sly += 1;
} else if (q2C.checked) {
grf += 1;
} else if (q2D.checked) {
rav += 1;
} else {
alert("Please choose an option");
return
};
q2.classList.add("hidden");
q3.classList.remove("hidden");
prog.style.width = "25%";
}

//next q3
function nextQ3() {
var q3 = document.getElementById("q3");
var q4 = document.getElementById("q4");
var q3A = document.getElementById("q3A");
var q3B = document.getElementById("q3B");
var q3C = document.getElementById("q3C");
var q3D = document.getElementById("q3D");
var prog = document.getElementById('prog');
if (q3A.checked) {
rav += 1;
} else if (q3B.checked) {
sly += 1;
} else if (q3C.checked) {
huf += 1;
} else if (q3D.checked) {
grf += 1;
} else {
alert("Please choose an option");
return
};
q3.classList.add("hidden");
q4.classList.remove("hidden");
prog.style.width = "33.3333333333333%";
}

//next q4
function nextQ4() {
var q4 = document.getElementById("q4");
var q5 = document.getElementById("q5");
var q4A = document.getElementById("q4A");
var q4B = document.getElementById("q4B");
var q4C = document.getElementById("q4C");
var q4D = document.getElementById("q4D");
var prog = document.getElementById('prog');
if (q4A.checked) {
sly += 1;
} else if (q4B.checked) {
rav += 1;
} else if (q4C.checked) {
grf += 1;
} else if (q4D.checked) {
huf += 1;
} else {
alert("Please choose an option");
return
};
q4.classList.add("hidden");
q5.classList.remove("hidden");
prog.style.width = "41.6666666666667%";
}

//next q5
function nextQ5() {
var q5 = document.getElementById("q5");
var q6 = document.getElementById("q6");
var q5A = document.getElementById("q5A");
var q5B = document.getElementById("q5B");
var q5C = document.getElementById("q5C");
var q5D = document.getElementById("q5D");
var prog = document.getElementById('prog');
if (q5A.checked) {
grf += 1;
} else if (q5B.checked) {
huf += 1;
} else if (q5C.checked) {
rav += 1;
} else if (q5D.checked) {
sly += 1;
} else {
alert("Please choose an option");
return
};
q5.classList.add("hidden");
q6.classList.remove("hidden");
prog.style.width = "50%";
}

//next q6
function nextQ6() {
var q6 = document.getElementById("q6");
var q7 = document.getElementById("q7");
var q6A = document.getElementById("q6A");
var q6B = document.getElementById("q6B");
var q6C = document.getElementById("q6C");
var q6D = document.getElementById("q6D");
var prog = document.getElementById('prog');
if (q6A.checked) {
huf += 1;
} else if (q6B.checked) {
grf += 1;
} else if (q6C.checked) {
sly += 1;
} else if (q6D.checked) {
rav += 1;
} else {
alert("Please choose an option");
return
};
q6.classList.add("hidden");
q7.classList.remove("hidden");
prog.style.width = "58.3333333333333%";
}

//next q7
function nextQ7() {
var q7 = document.getElementById("q7");
var q8 = document.getElementById("q8");
var q7A = document.getElementById("q7A");
var q7B = document.getElementById("q7B");
var q7C = document.getElementById("q7C");
var q7D = document.getElementById("q7D");
var prog = document.getElementById('prog');
if (q7A.checked) {
rav += 1;
} else if (q7B.checked) {
huf += 1;
} else if (q7C.checked) {
sly += 1;
} else if (q7D.checked) {
grf += 1;
} else {
alert("Please choose an option");
return
};
q7.classList.add("hidden");
q8.classList.remove("hidden");
prog.style.width = "66.6666666666667%";
}

//next q8
function nextQ8() {
var q8 = document.getElementById("q8");
var q9 = document.getElementById("q9");
var q8A = document.getElementById("q8A");
var q8B = document.getElementById("q8B");
var q8C = document.getElementById("q8C");
var q8D = document.getElementById("q8D");
var prog = document.getElementById('prog');
if (q8A.checked) {
sly += 1;
} else if (q8B.checked) {
grf += 1;
} else if (q8C.checked) {
rav += 1;
} else if (q8D.checked) {
huf += 1;
} else {
alert("Please choose an option");
return
};
q8.classList.add("hidden");
q9.classList.remove("hidden");
prog.style.width = "75%";
}

//next q9
function nextQ9() {
var q9 = document.getElementById("q9");
var q10 = document.getElementById("q10");
var q9A = document.getElementById("q9A");
var q9B = document.getElementById("q9B");
var q9C = document.getElementById("q9C");
var q9D = document.getElementById("q9D");
var prog = document.getElementById('prog');
if (q9A.checked) {
grf += 1;
} else if (q9B.checked) {
sly += 1;
} else if (q9C.checked) {
rav += 1;
} else if (q9D.checked) {
huf += 1;
} else {
alert("Please choose an option");
return
};
q9.classList.add("hidden");
q10.classList.remove("hidden");
prog.style.width = "83.3333333333333%";
}

//next q10
function nextQ10() {
var q10 = document.getElementById("q10");
var q11 = document.getElementById("q11");
var q10A = document.getElementById("q10A");
var q10B = document.getElementById("q10B");
var q10C = document.getElementById("q10C");
var q10D = document.getElementById("q10D");
var prog = document.getElementById('prog');
if (q10A.checked) {
rav += 1;
} else if (q10B.checked) {
sly += 1;
} else if (q10C.checked) {
grf += 1;
} else if (q10D.checked) {
huf += 1;
} else {
alert("Please choose an option");
return
};
q10.classList.add("hidden");
q11.classList.remove("hidden");
prog.style.width = "91.6666666666667%";
}

//next q11
function nextQ11() {
var q11 = document.getElementById("q11");
var q12 = document.getElementById("q12");
var q11A = document.getElementById("q11A");
var q11B = document.getElementById("q11B");
var q11C = document.getElementById("q11C");
var q11D = document.getElementById("q11D");
var prog = document.getElementById('prog');
if (q11A.checked) {
sly += 1;
} else if (q11B.checked) {
rav += 1;
} else if (q11C.checked) {
huf += 1;
} else if (q11D.checked) {
grf += 1;
} else {
alert("Please choose an option");
return
};
q11.classList.add("hidden");
q12.classList.remove("hidden");
prog.style.width = "100%";
}

//next q12
function nextQ12() {
var q12 = document.getElementById("q12");
var results = document.getElementById("results");
var q12A = document.getElementById("q12A");
var q12B = document.getElementById("q12B");
var q12C = document.getElementById("q12C");
var q12D = document.getElementById("q12D");
var prog = document.getElementById('prog');
var progBar = document.getElementById("prog-Bar");
if (q12A.checked) {
rav += 5;
} else if (q12B.checked) {
sly += 5;
} else if (q12C.checked) {
huf += 5;
} else if (q12D.checked) {
grf += 5;
} else {
alert("Please choose an option");
return
};
progBar.classList.add("hidden");
q12.classList.add("hidden");
results.classList.remove("hidden");
quizGo()
}


//results
function quizGo() {

console.log("Gryffindor = " + grf);
console.log("Slytherin = " + sly);
console.log("Hufflepuff = " + huf);
console.log("Ravenclaw = " + rav);

var chckbrd = document.getElementById("results");

if (grf > rav && grf > sly && grf > huf) {
chckbrd.classList.add("grf");
result = "GRYFFINDOR";
descrip = "<span>\"You might belong in Gryffindor, Where dwell the brave at heart, Their daring, nerve, and chivalry Set Gryffindors apart.\"</span><br><br>The Gryffindor house emphasised the traits of courage as well as \"daring, nerve, and chivalry\", and thus its members were generally regarded as brave, though sometimes to the point of recklessness. Some Gryffindors had also been noted to be short-tempered.<br><br>Notably, Gryffindor house contributed many members to Dumbledore's Army and the Order of the Phoenix, although this may have been because the main members made it a point not to associate with other houses.<br><br>According to Phineas Nigellus Black, members of other houses, particularly Slytherin, sometimes felt that Gryffindors engaged in \"pointless heroics\". Another Slytherin, Severus Snape, considered many Gryffindors to be self-righteous and arrogant, with no regard for rules.";
} else if (rav > grf && rav > sly && rav > huf) {
chckbrd.classList.add("rav");
result = "RAVENCLAW";
descrip = "<span>\"Or yet in wise old Ravenclaw, If you've a ready mind, Where those of wit and learning, Will always find their kind.\"</span><br><br>Ravenclaw House prized learning, wisdom, wit, and intellect in its members. Thus, many Ravenclaws tended to be academically motivated and talented students. They also prided themselves on being original in their ideas, and methods. It was not unusual to find Ravenclaw students practising especially different types of magic that other houses might shun.<br><br>Often hard-working and diligent, as often was the case with intellectuals with a predisposition for academics, some of the pupils sorted under the blue-bronzed eagle were known to be inclined to dismiss certain social expectations for the sake of satisfying their own intellectual curiosity. Some of these eventually also ended up being not only accepted but even celebrated, in spite of being initially subjected to scorn for their various oddities.<br><br>Ravenclaws tended to be curious about the world and paid attention to the world around them. Ravenclaws were known to be logical and rational. In addition, Ravenclaw students tended to have abilities regarding Memory.";
} else if (sly > grf && sly > rav && sly > huf) {
chckbrd.classList.add("sly");
result = "SLYTHERIN";
descrip = "<span>\"Or perhaps in Slytherin, You'll make your real friends, Those cunning folk use any means, To achieve their ends.\"</span><br><br>Slytherins tended to be ambitious, shrewd, cunning, strong leaders, and achievement-oriented. They also had highly developed senses of self-preservation. This means that Slytherins tended to hesitate before acting, so as to weigh all possible outcomes before deciding exactly what should be done.<br><br>According to Albus Dumbledore, the qualities which Salazar valued in the students he had chosen included cleverness, resourcefulness, determination, and \"a certain disregard for the rules\". Dumbledore noted that all of these were qualities possessed by Harry Potter, who was a Gryffindor but was almost placed in Slytherin.<br><br>Slytherins tended to take charge and possessed strong leadership skills. They were often self-assured and confident of their own competence and can be very loyal.";
} else if (huf > grf && huf > rav && huf > sly) {
chckbrd.classList.add("huf");
result = "HUFFLEPUFF";
descrip = "<span>\"You might belong in Hufflepuff, Where they are just and loyal, Those patient Hufflepuffs are true, And unafraid of toil.\"</span><br><br>Students belonging to this house were known to be hard-working, friendly, loyal, honest and rather impartial. It might be that due to their values, Hufflepuffs were not as competitive as the other houses, and were more modest about their accomplishments. Hufflepuff was the most inclusive among the four houses; valuing hard work, dedication, patience, loyalty, and fair play rather than a particular aptitude in its students.<br><br>Hufflepuffs were known to have a strong moral code, and a sense of right and wrong. Hufflepuffs were usually accepting of everyone. Students in Hufflepuff were known to value everyone and treat them as equal.<br><br>Hufflepuff appeared to have the least rivalry with the other houses, except in Quidditch, although the Triwizard Tournament did temporarily put a great deal of strain on the relationship between Gryffindor and Hufflepuff, due to unusual circumstances of the selection of both Gryffindor student Harry Potter and Hufflepuff student Cedric Diggory as champions. This was mended by 1998, where a majority of Hufflepuffs rose to defend Harry from Pansy Parkinson and later helped to defend Hogwarts.";
} else {
result = "Oh No!";
desrip = "Somethings Gone Wrong!";
};

document.getElementById("result-display").innerHTML = result;
document.getElementById("descrip-display").innerHTML = descrip;

}