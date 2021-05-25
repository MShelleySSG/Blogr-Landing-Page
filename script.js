const hamburgerIcon = document.querySelector('.hamburgerIcon');
const navContainer = document.querySelector('.navContainer');
const arrows = document.querySelectorAll('.arrow-image');
const navHeading = document.querySelectorAll('.mainNavHeading > a');
const dropdowns = document.querySelectorAll('.dropdownMenu');


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

for (let i = 0; i < dropdowns.length; i++){
    navHeading[i].addEventListener('click', function(){
        if(dropdowns[i].style.display == "block"){
            dropdowns[i].style.display = "none";
            this.lastChild.style.transform = "rotate(0deg)";
            this.lastChild.style.transition = "0.6s";
            dropdowns[i].parentElement.style.marginBottom = "0px";
            
        }
        else{
            dropdowns[i].style.display = "block";
            this.lastChild.style.transform = "rotate(180deg)";
            this.lastChild.style.transition = "0.6s";
            let marginBottom = dropdowns[i].children.length * 40;
            dropdowns[i].parentElement.style.marginBottom = `${marginBottom}px`;
        }
    });
}



