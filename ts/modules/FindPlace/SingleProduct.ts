import { Page } from "../Page";
import { ProductData } from "./Categories";

export class SingleProduct extends Page {
  product: ProductData;
  constructor(product: ProductData) {
    super();
    this.product = product;
  }

  returnHTML() {
    // const html: string = `
    // <div>
    //   <aside class="aside black-section">
    //     <div class="product-headings">
    //       <h1 class="product-headings__title h3">${title}</h1>
    //       <h1 class="product-headings__price h3">$450,000</h1>
    //     </div>
    //     <div class="product-details">
    //       <p class="product-headings__title">3002 Foster Ave, Brooklyn, NY 11210, USA</p>
    //       <p class="product-headings__price">$2,800/sq ft</p>
    //     </div>
    //   </aside>
    //   <section class="product-details gray-section">
    //       <div class="row gap-2">
    //           <div class="col-12 col-lg-8">
    //             <div class="gallery">
    //                 <div class="gallery__image">
    //                     <img src="${main_picture}" alt="zdjęcie produktu"/>
    //                 </div>
    //             </div>
    //           </div>
    //           <div class="col-12 col-lg-4">
    //               <form class="form">
    //                 <input type="text" id="name" name="name" placeholder="Name">
    //                 <input type="tel" id="phone" name="phone"
    //                   pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
    //                   required placeholder="Phone">
    //                 <input type="email" id="email" name="email" placeholder="Email">
    //                 <textarea rows="7" cols="33" placeholder="Hello, I am interested in…"></textarea>
    //                 <a class="btn btn-secondary" href="#">Learn more</a>
    //               </form>
    //           </div>
    //       </div>

    //       <div class="product-content">

    //         <div class="details card">
    //             <h3 class="card__heading">Details</h3>

    //               <div class="details__features">
    //                   <div class="details__features-feature">
    //                     <img src="./img/icons/hotel-single-bed.svg" alt="pojedyńcze łóżka" />
    //                     <span>${calendars}</span>
    //                   </div>
    //                   <div class="details__features-feature">
    //                     <img src="./img/icons/bathroom-tub-towel.svg" alt="pojedyńcze łóżka" />
    //                     <span>${bathroom_tub_towel}</span>
    //                   </div>
    //                   <div class="details__features-feature">
    //                     <img src="./img/icons/bathroom-tub-towel.svg" alt="pojedyńcze łóżka" />
    //                     <span>2</span>
    //                   </div>
    //                   <div class="details__features-feature">
    //                     <img src="./img/icons/grid-artboard.svg" alt="pojedyńcze łóżka" />
    //                     <span>${grid_artboard}</span>
    //                   </div>
    //                   <div class="details__features-feature">
    //                     <img src="./img/icons/garage.svg" alt="garaż" />
    //                     <span>${garages}</span>
    //                   </div>

    //             </div>
    //         </div>
    //         <div class="description card">
    //             <h3 class="card__heading">Description</h3>
    //             <div class="card__content">
    //                 ${description}
    //             </div>
    //         </div>

    //       </div>
    //     </section>
    //   </div>
    // `;
    return "";
  }

  async render() {
    const SingleProductWrapper: HTMLElement = document.querySelector(".main");
    const singleProduct: string = this.returnHTML();

    await this.renderHTML(SingleProductWrapper, singleProduct);
  }
}
