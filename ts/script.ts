import "../scss/main.scss";
import { Categories } from "./modules/FindPlace/Categories";
import { Category } from "./modules/FindPlace/Category";
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

    // FIND YOUR NEXT PLACE
    const categoryData: Array<any> = page.getDataToComponent("location");
    const category = new Categories(categoryData);
    category.render();

    slider.render();
  };
  renderContent();
});
