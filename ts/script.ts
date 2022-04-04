import "../scss/main.scss";
import { MobileMenu } from "./modules/MobileMenu";
import { Page } from "./modules/Page";
import { Slider } from "./modules/Slider/Slider";

window.addEventListener("DOMContentLoaded", () => {
  const navigation: HTMLElement = document.querySelector(".nav");
  const hamburger: HTMLElement = document.querySelector(".nav-hamburger");

  if (navigation) {
    const mobileMenu = new MobileMenu(hamburger, navigation);
    mobileMenu.addListeners();
  }

  const renderContent = async () => {
    // PAGE
    const page = new Page();
    await page.getDataFromPage();

    // SLIDER
    const sliderData: Array<any> = page.getDataToComponent("slides");
    const slider = new Slider(sliderData);

    slider.render();
  };
  renderContent();
});
