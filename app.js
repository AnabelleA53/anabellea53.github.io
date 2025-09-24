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