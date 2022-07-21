const navSlide = () => {
    const hamburgerMenuOpen = document.getElementsByClassName("navbar__hamburger");
    const hamburgerMenuExit = document.getElementsByClassName("navbar__opt--cross");

    hamburgerMenuOpen.addEventListener("click", ()=>{
        document.getElementsByClassName("navbar__opt").style.display = "block";
    });

    hamburgerMenuExit.addEventListener("click", ()=> {
        document.getElementsByClassName("navbar__opt").style.display = "none";
    });
};

navSlide();