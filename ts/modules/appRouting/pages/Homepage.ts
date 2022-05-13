import "../../../../scss/main.scss";
import { Categories } from "../../../modules/FindPlace/Categories";
import { MobileMenu } from "../../MobileMenu";
import { Page } from "../../Page";
import { Slider } from "../../../modules/Slider/Slider";

export let HomePage = {
  render: async () => {
    let view = /*html*/ `
    <div class="container">
    <div id="root"></div>
    <nav class="nav">
      <div class="nav-wrapper">
        <div class="logo">
          <img src="./img/icons/logo.svg" alt="logo firmy" title="logo firmy" />
        </div>
        <div class="navigation">
          <ul class="navigation-list">
            <li class="navigation-list__item">
              <a href="#" class="navigation-list__link">Nav Link</a>
            </li>
            <li class="navigation-list__item">
              <a href="# " class="navigation-list__link">Nav Link</a>
            </li>
            <li class="navigation-list__item">
              <a href="#" class="navigation-list__link">Nav Link</a>
            </li>
            <li class="navigation-list__item">
              <a href="# " class="navigation-list__link">Nav Link</a>
            </li>
            <li class="navigation-list__item">
              <a href="#" class="btn btn-primary">Work with us</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="nav-wrapper-mobile">
        <div class="logo">
          <img src="./img/icons/logo.svg" alt="logo firmy" title="logo firmy" />
        </div>
        <div class="nav-hamburger">
          <span class="nav-hamburger__item"></span>
        </div>
      </div>
    </nav>
  </div>
  <main>
    <article>
      <div class="slider">
        <div class="container slider-container">
          <div class="slides"></div>
          <div class="indicators"></div>
        </div>
      </div>
    </article>
    <div class="container">
      <section class="about">
        <div class="row gap-2 align-items-center">
          <div class="col-12 col-lg-5">
            <div class="section-image">
              <img src="./img/typography/img-left.jpg" alt="Zdjęcie sekcji" title="zdjęcie sekcji" />
            </div>
          </div>
          <div class="col-12 col-lg-6 offset-lg-1">
            <h2 class="h2">You’re in good hands</h2>
            <div class="section-content">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Consectetur, est culpa odio esse quisquam doloremque nostrum
                nisi, delectus nesciunt modi explicabo aspernatur, voluptate
                voluptas asperiores pariatur? Tempore ab nemo optio.
              </p>
              <a class="btn btn-secondary" href="#">Learn more</a>
            </div>
          </div>
        </div>
      </section>

      <section class="find-place dark-section">
        <h2>Find your next place to live</h2>
        <div class="place-options">
        </div>

        <div class="place-options__score white-section">
          
        </div>

        <div class="products">
              <h3>Wybierz kategorię...</h3>
         </div>
      </section>

      <section class="about">
        <div class="row gap-2 align-items-center">
          <div class="col-12 col-lg-6">
            <h2 class="h2">You’re in good hands</h2>
            <div class="section-content">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Consectetur, est culpa odio esse quisquam doloremque nostrum
                nisi, delectus nesciunt modi explicabo aspernatur, voluptate
                voluptas asperiores pariatur? Tempore ab nemo optio.
              </p>
              <a class="btn btn-secondary" href="#">Learn more</a>
            </div>
          </div>
          <div class="col-12 col-lg-5 offset-lg-1">
            <div class="section-image">
              <img src="./img/typography/img-left.jpg" alt="Zdjęcie sekcji" title="zdjęcie sekcji" />
            </div>
          </div>
        </div>
      </section>
      <section class="content-section black-section">
        <div class="wrapper">
          <h2>You’re in good hands</h2>
          <p>
            Torquatos nostros? quos dolores eos, qui dolorem ipsum per se texit,
            ne ferae quidem se repellere, idque instituit docere sic: omne
            animal, simul atque integre iudicante itaque aiunt hanc quasi
            involuta aperiri, altera occulta quaedam et voluptatem accusantium
            doloremque.
          </p>
          <a class="btn btn-primary" href="#">Learn more</a>
        </div>
    </div>
    </section>
    <section>
      <div class="container">
        <h2>Opinions</h2>
      </div>
    </section>
    <footer class="footer black-section">
      <div class="container">
        <div class="footer__content">
          <h3>Make your dreams a <strong>reality</strong></h3>
          <a class="btn btn-primary" href="#">work with us</a>
        </div>
        <div class="footer__body">
          <div class="row">
            <div class="col-12 col-lg-3">
              <div class="footer__body-logo">
                <img src="./img/icons/logo_white.svg" alt="logo firmy" title="logo firmy" />
              </div>

              <div class="footer__body-socials">
                <img src="./img/icons/facebook.svg" alt="ikona facebooka" title="ikona facebooka" />
                <img src="./img/icons/twitter.svg" alt="ikona twittera" title="ikona twittera" />
                <img src="./img/icons/instagram.svg" alt="ikona instagram" title="ikona instagram" />
              </div>
            </div>
            <div class="col-12 col-lg-8 offset-lg-1">
              <div class="footer__body-links">
                <a href="#" class="footer__body-links_link link link-secondary">Link goes here</a>
                <a href="#" class="footer__body-links_link link link-secondary">Link goes here</a>
                <a href="#" class="footer__body-links_link link link-secondary">Link goes here</a>
                <a href="#" class="footer__body-links_link link link-secondary">Link goes here</a>
                <a href="#" class="footer__body-links_link link link-secondary">Link goes here</a>
                <a href="#" class="footer__body-links_link link link-secondary">Link goes here</a>
                <a href="#" class="footer__body-links_link link link-secondary">Link goes here</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </div>
  </main>
    `;

    return view;
  },

  after_render: async () => {
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

      // FIND YOUR NEXT PLACE;
      const category = new Categories();
      category.render();

      slider.render();
    };
    renderContent();
  },
};
