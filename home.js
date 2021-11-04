const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');

//Prevents form from submitting
form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();



});
//Check Input function
function checkInputs() {
    //get the values from the inputs
   const usernameValue = username.value.trim();
   const emailValue = email.value.trim();

   if (usernameValue === '') {
       //show error
       //add error class for username
       setErrorFor(username, 'Name cannot be blank');

   } else {
       //add success class
       setSuccessFor(username);
   }

   //error class for email
   if (emailValue === '') {
       setErrorFor(email, 'Email cannont be blank');
   } else if(!isEmail(emailValue)) {
    setErrorFor(email, 'Email invalid');
   } else {
       setSuccessFor(email);
       form.submit()
   }
}
//Shows error Class
function setErrorFor(input, message) {

    const formController = input.parentElement; //.form-controller
    const small = formController.querySelector('small')

    //add error message inside small
    small.innerText = message;

    //add error class
    formController.className = 'form-controller error';


}
//Shows success class
function setSuccessFor(input) {
    const formController = input.parentElement;
    formController.className = 'form-controller success';
}
//Email Regex
function isEmail(email) {
    return  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);


}
//Event listener 'te pohaku'

let therock = document.getElementById('changeMe')

therock.addEventListener('mouseover', () => therock.style.backgroundImage = 'url(Photos/theRock.webp)')
therock.addEventListener('mouseout', () => therock.style.backgroundImage = '')
    

// countdown timer

let countDownDate = new Date("Dec 25, 2021 16:37:52").getTime();

let myfunc = setInterval(function() {

    let now = new Date().getTime();
    let timeleft = countDownDate - now;
        
    let days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
    
    document.getElementById("days").innerHTML = days + " days "
    document.getElementById("hours").innerHTML = hours + " hours " 
    document.getElementById("mins").innerHTML = minutes + " mins " 
    document.getElementById("secs").innerHTML = seconds + " secs"

    //Once timers Run Out shows this
    
    if (timeleft < 0) {
        clearInterval(myfunc);
        document.getElementById("days").innerHTML = ""
        document.getElementById("hours").innerHTML = "" 
        document.getElementById("mins").innerHTML = ""
        document.getElementById("secs").innerHTML = ""
        document.getElementById("end").innerHTML = "Yay Qualified!";
    }
}, 1000)

//loop 

for (let i = 1; i <= 30; i++) {
    console.log(''),
    console.log('Follow Me on LinkedIn and Github');
}







