const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

document.getElementById("contactForm")
.addEventListener("submit", function(e){
    e.preventDefault();
    alert("Message Sent Successfully!");
    this.reset();
});

const themeToggle =
document.querySelector(".theme-toggle");

themeToggle.addEventListener("click",()=>{

    document.body.classList.toggle("dark");

    const icon =
    themeToggle.querySelector("i");

    if(document.body.classList.contains("dark")){
        icon.classList.replace("fa-moon","fa-sun");
    }else{
        icon.classList.replace("fa-sun","fa-moon");
    }
});

const texts = [
"Computer Science Student",
"Java Developer",
"Web Developer",
"Angular Developer",
"Full Stack Developer"
];

let count = 0;
let index = 0;

function type(){

    let currentText = texts[count];
    let letter = currentText.slice(0, ++index);

    document.getElementById("typing")
    .textContent = letter;

    if(letter.length === currentText.length){

        count++;

        if(count === texts.length){
            count = 0;
        }

        index = 0;

        setTimeout(type,1500);

    }else{
        setTimeout(type,100);
    }
}

type();