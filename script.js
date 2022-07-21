const navSlide = () => {
    const hamburgerMenuOpen = document.getElementsByClassName("navbar__hamburger");
    const hamburgerMenuExit = document.getElementsByClassName("navbar__opt--cross");

    hamburgerMenuOpen[0].addEventListener("click", ()=>{
        document.getElementsByClassName("navbar__opt")[0].style.display = "flex";
    });

    hamburgerMenuExit[0].addEventListener("click", ()=> {
        document.getElementsByClassName("navbar__opt")[0].style.display = "none";
    });
};

navSlide();