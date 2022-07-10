import { Page } from "../Page";
import { ProductData } from "./interfaces";

export class SingleProduct extends Page {
  product: ProductData;
  constructor(product?: ProductData) {
    super();
    this.product = product;
  }

  get productParams() {
    const parsedURL = window.location.hash.replace("#", "");
    const startIndexParams = parsedURL.indexOf("?");
    const endIndexParams = parsedURL.length;
    const params = parsedURL.slice(startIndexParams, endIndexParams);
    const urlParams = new URLSearchParams(params);
    const productID = urlParams.get("id");
    return productID;
  }

  async fetchProduct() {
    const product = await this.fetchData(
      "products",
      {
        include: this.productParams,
      },
      ".main"
    );
    return product;
  }

  returnHTML(product = this.product) {
    const {
      name,
      images,
      description,
      price,
      acf: { features, per_month, location },
    } = product;
    const html: string = `
    <div>
      <aside class="aside black-section">
        <div class="product-headings">
          <h1 class="product-headings__title h3">${name}</h1>
          <h1 class="product-headings__price h3">${price} zł</h1>
        </div>
        <div class="product-details">
          <p class="product-headings__title">${location}</p>
          <p class="product-headings__price">${per_month} zł za 1 miesiąc</p>
        </div>
      </aside>
      <section class="product-details gray-section">
          <div class="row gap-2">
              <div class="col-12 col-lg-8">
                <div class="gallery">
                    <div class="gallery__image">
                        <img src="${images[0].src}" alt="zdjęcie produktu"/>
                    </div>
                </div>
              </div>
              <div class="col-12 col-lg-4">
                  <form class="form">
                    <input type="text" id="name" name="name" placeholder="Name">
                    <input type="tel" id="phone" name="phone"
                      pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                      required placeholder="Phone">
                    <input type="email" id="email" name="email" placeholder="Email">
                    <textarea rows="7" cols="33" placeholder="Hello, I am interested in…"></textarea>
                    <a class="btn btn-secondary" href="#">Learn more</a>
                  </form>
              </div>
          </div>
          <div class="product-content">
            <div class="details card">
                <h3 class="card__heading">Details</h3>
                <div class="details__features">
                  <div class="details__features-feature">
                    <img src="./img/icons/hotel-single-bed.svg" alt="pojedyńcze łóżka" />
                    <span>${features[0].title}</span>
                  </div>
                  <div class="details__features-feature">
                    <img src="./img/icons/bathroom-tub-towel.svg" alt="pojedyńcze łóżka" />
                    <span>${features[1].title}</span>
                  </div>
                  <div class="details__features-feature">
                    <img src="./img/icons/bathroom-tub-towel.svg" alt="pojedyńcze łóżka" />
                    <span>2</span>
                  </div>
                  <div class="details__features-feature">
                    <img src="./img/icons/grid-artboard.svg" alt="pojedyńcze łóżka" />
                    <span>${features[2].title}</span>
                  </div>
                  <div class="details__features-feature">
                    <img src="./img/icons/garage.svg" alt="garaż" />
                    <span>${features[3].title}</span>
                  </div>
              </div>
            </div>
            <div class="description card">
                <h3 class="card__heading">Description</h3>
                <div class="card__content">
                    ${description}
                </div>
            </div>
          </div>

          </div>
        </section>
      </div>
    `;
    return html;
  }

  async render(product?: ProductData) {
    const SingleProductWrapper: HTMLElement = document.querySelector(".main");
    const singleProduct: string = this.returnHTML(product);

    await this.renderHTML(SingleProductWrapper, singleProduct);
  }
}
