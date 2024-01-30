const accordions = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < accordions.length; i++) {
    accordions[i].addEventListener("click", function() {
        this.classList.toggle("active");

        const panel = this.nextElementSibling;
        if( panel.style.maxHeight ){
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}