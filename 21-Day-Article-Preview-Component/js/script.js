const shareBtn = document.getElementById("share-btn");
const popover = document.getElementById("popover");


const handleOnClick = () => {
    popover.classList.toggle("popover-content-active")
}

shareBtn.addEventListener('click', handleOnClick)