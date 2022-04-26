import { ProductsData } from "./Categories";

export class Product {
  productData: ProductsData;
  constructor(productData: ProductsData) {
    this.productData = productData;
  }

  returnHTML(): string {
    const { image, title, description } = this.productData;
    const html: string = `
        <div class="products__product">
            <div class="products__product-picture">
                <img src="${image}" alt="Pierwszy produkt" />
                <div class="products__product-picture_hover">
                <img src="./img/icons/search.svg" alt="Ikona wyszukiwania" />
                <p>Zobacz</p>
                </div>
            </div>
            <div class="products__product-content">
                <h3 class="products__product-content_title">${title}</h3>
            </div>
        </div>
    `;

    return html;
  }

  render() {
    const product = this.returnHTML();

    return product;
  }
}
