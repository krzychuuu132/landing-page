import { SingleProduct } from "../../FindPlace/SingleProduct";
import { MobileMenu } from "../../MobileMenu";

export let Product = {
  render: async () => {
    let view = /*html*/ `
    <div class="container">
      <nav class="nav">
        <div class="nav-wrapper">
          <div class="logo">
            <a href="/">
              <img src="./img/icons/logo.svg" alt="logo firmy" title="logo firmy" />
            </a>
          </div>
          <div class="navigation">
            <ul class="navigation-list">
              <li class="navigation-list__item">
                <a href="/#about" class="navigation-list__link">os nas</a>
              </li>
              <li class="navigation-list__item">
                <a href="/#find-home" class="navigation-list__link">Znajdź dom dla siebie</a>
              </li>
              <li class="navigation-list__item">
                <a href="/#why-us" class="navigation-list__link">dlaczego my</a>
              </li>
              <li class="navigation-list__item">
                <a href="/#opinions" class="navigation-list__link">Opinie</a>
              </li>
              <li class="navigation-list__item">
                <a href="/#work-with-us" class="btn btn-primary">pracuj z nami</a>
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
      <main class="main">
        <div class="loader loader--singleProduct"></div>
      </main>
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

    const SingleProductInstance: SingleProduct = new SingleProduct();
    const product = await SingleProductInstance.fetchProduct();
    SingleProductInstance.render(...product);
  },
};
