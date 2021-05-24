const hamburgerIcon = document.querySelector('.hamburgerIcon');
const navContainer = document.querySelector('.navContainer');

hamburgerIcon.addEventListener('click', () => {
    if (navContainer.clientHeight == 0){
        navContainer.style.display = "block";
        hamburgerIcon.src = "images/icon-close.svg";
    }
    else{
        navContainer.style.display = "none";
        hamburgerIcon.src = "images/icon-hamburger.svg";
    }
});




