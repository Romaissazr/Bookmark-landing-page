const featureContent = document.querySelector(".feature-content");
const tabTitle = featureContent.querySelector("h1");
const paragraphe = featureContent.querySelector("p");
const tabImage = featureContent.querySelector("img");
const activeElement = document.querySelector(".active");
function tabone(event) {    
    const activeElement = document.querySelector(".active");
    if (activeElement) {
        activeElement.classList.remove("active");
    }
    let h5 = event.currentTarget;
    h5.classList.add("active");

    tabTitle.innerText = "Bookmark in one click";
    paragraphe.innerText = "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.";
    tabImage.src = "images/illustration-features-tab-1.svg";
}

function tabtwo(event) {  
    const activeElement = document.querySelector(".active");
    if (activeElement) {
        activeElement.classList.remove("active");
    }
    let h5 = event.currentTarget;
    h5.classList.add("active");

    tabTitle.innerText = "Intelligent search";
    paragraphe.innerText = "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.";
    tabImage.src = "images/illustration-features-tab-2.svg";
}

function tabthree(event) {
    const activeElement = document.querySelector(".active");
    if (activeElement) {
        activeElement.classList.remove("active");
    }
    let h5 = event.currentTarget;
    h5.classList.add("active");

    tabTitle.innerText = "Share your bookmarks";
    paragraphe.innerText = " Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.";
    tabImage.src = "images/illustration-features-tab-3.svg";
}


function showAnswer(event){
 const question= event.currentTarget;
let arrowBlue = question.querySelector("img");


 let number = question.closest(".number")
 let answer = number.querySelector(".answer")

 
 
 if(answer.style.display === "block"){
 answer.style.display = "none";
arrowBlue.src="images/icon-arrow.svg"
 }else{
    answer.style.display = "block";
    arrowBlue.src="images/icon-arrow-up.svg"
 }

 

}
function validateEmail() {
    const email = document.getElementById("emailInput").value;
    const errorIcon = document.getElementById("errorIcon");
    const alertMessage = document.querySelector(".alert");


    // Basic email regex pattern
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (emailPattern.test(email)) {
        errorIcon.style.display = "none";
        alertMessage.style.display = "none";
    } else {
        errorIcon.style.display = "block";
        alertMessage.style.display = "block";
    }
}

   let mobileNav = document.querySelector(".mobile-nav")
function openNav(){

        mobileNav.style.display = "block"

}
function closeNav(){
    mobileNav.style.display = "none"
}
