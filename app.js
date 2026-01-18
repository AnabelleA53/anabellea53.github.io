const toggleButton = document.getElementById('toggle-btn')
const sidebar = document.getElementById('sidebar')

function toggleSidebar(){
    sidebar.classList.toggle('close');
    toggleButton.classList.toggle('rotate');
}

function filterContent() {
    const yearValue = document.getElementById("yearFilter").value;
    const typeValue = document.getElementById("typeFilter").value;
    const fandomValue = document.getElementById("fandomFilter").value;
    const items = document.querySelectorAll(".item"); // gets all the items into a list

    items.forEach(item => {
        const itemTags = item.getAttribute('data-tags').split(' '); //get the tags for the item
        
        const yearMatch = yearValue=="all" || itemTags.includes(yearValue);
        const typeMatch = typeValue=="all" || itemTags.includes(typeValue);
        const fandomMatch = fandomValue=="all" || itemTags.includes(fandomValue);


        if (yearMatch && typeMatch && fandomMatch) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    })
}

// Slider functions

const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId = null;


document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider(){
    slides[slideIndex].classList.add("displaySlide");
}

function showSlide(index){
    if(index >= slides.length){
        slideIndex=0;
    }
    else if(index < 0){
        slideIndex = slides.length -1;
    }

    slides.forEach(slide => {
        slide.classList.remove("displaySlide")
    })
    slides[slideIndex].classList.add("displaySlide")
}

function prevSlide(){
    slideIndex--;
    showSlide(slideIndex);
}

function nextSlide(){
    slideIndex++;
    showSlide(slideIndex);
}
