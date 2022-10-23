const header = '<div class="topnav" id="myTopnav"><span><a href="index.html">buzz quiz</a></span><div class="dropdown"><button class="dropbtn">Harry Potter <i class="fa fa-caret-down"></i></button><div class="dropdown-content"><a href="index.html">Which Hogwarts House Am You?</a></div></div><a href="contact.html">Contact</a><a href="javascript:void(0);" style="font-size:15px;" class="icon" onclick="mobileMenu()">&#9776;</a></div>'
const footer = '<div id="footer"> <div class="footer-container"><div> <a href="contact.html">Contact</a> | <a href="/privacy-policy">Privacy Policy</a> <br> </div> </div>';
document.getElementById('topMenu').innerHTML = header;
document.getElementById('bottomFooter').innerHTML = footer;

function mobileMenu() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
