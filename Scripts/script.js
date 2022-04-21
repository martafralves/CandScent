//Enlarge Thumbnail images - using modal component from bootstrap. Saw this video for the tutorial https://www.youtube.com/watch?v=tmWvwp3rpso

document.addEventListener("click", function (e){
  if(e.target.classList.contains("gallery-item")){
    const src = e.target.getAttribute("src");
    document.querySelector(".modal-img").src = src;
    const myModal = new bootstrap.Modal(document.getElementById('gallery-popup'));
    myModal.show();
  }
})

//CONTACT FORM JS VALIDATION - after watching this video https://www.youtube.com/watch?v=Sgf4lDlKYHg

function validateForm() {
  var fname = document.contactForm.fName.value;
  var phonenr = document.contactForm.phonenr.value;
  var cfemail = document.contactForm.cfEmail.value;
  var contactMsg = document.contactForm.cMsg.value;

  if(fname == null || fname == ""){
    alert("The name can't be blank");
    return false;
  }
  else if(phonenr == null || phonenr == ""){
    alert("Please provide a phone number");
    return false;
  }
  else if(cfemail == null || cfemail == ""){
    alert("Please provide an email address");
    return false;
  }
  else if(contactMsg == null || contactMsg == ""){
    alert("Please write a message");
    return false;
  }
  else if(contactMsg.length>500){
    alert("Please write a shorter message");
    return false;
  }

}
//TO TOP BUTTON JS - taken from W3Schools https://www.w3schools.com/howto/howto_js_scroll_to_top.asp
mybutton = document.getElementById("myBtn");

// Show button when user scrolls down 20px:
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function toTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//Subscribe section
var emailList = [];

function subscribe (){
  var name = document.getElementById("subname").value;
  var email = document.getElementById("subemail").value;

  if (confirm(name+", do you confirm "+email+" is your correct email?") == true) {
    alert("Subscribed successfully!");
    emailList.push(email);//adds the email to the array of emails
  } 
  else {
    alert("Please correct your information.");
  }
}