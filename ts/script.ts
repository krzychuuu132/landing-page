import "../scss/main.scss";
import { MobileMenu } from "./modules/MobileMenu";




window.addEventListener('DOMContentLoaded', () => {
    const navigation:HTMLElement = document.querySelector('.nav');
    const hamburger:HTMLElement = document.querySelector('.nav-hamburger');


    if(navigation) {
        const mobileMenu = new MobileMenu(hamburger, navigation);
        mobileMenu.addListeners();
    }
})
