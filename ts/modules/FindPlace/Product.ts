import { ProductsData } from "./Categories";
import { SingleProduct } from "./SingleProduct";
declare global {
  interface Window {
    handleProductClick: any;
  }
}
export class Product {
  productData: ProductsData;
  index: number;
  constructor(productData: ProductsData, index: number) {
    this.productData = productData;
    this.index = index;
  }

  handleProductClick(): any {
    window.handleProductClick = async (product: any) => {
      window.location.href = "#/product";
      const singleProduct = await new SingleProduct(product);

      setTimeout(() => {
        singleProduct.render();
      }, 100);

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };
  }

  returnHTML(): string {
    const { image, title, id } = this.productData;
    const html: string = `
        <div class="products__product" data-id="${id}" onClick='handleProductClick(${JSON.stringify(this.productData)})'>
            <div class="products__product-picture">
                <img src="${image}" alt="Pierwszy produkt" class="products__product-picture_img"/>
                <div class="products__product-picture_hover">
                <img src="./img/icons/search.svg" alt="Ikona wyszukiwania"/>
                <p>Zobacz</p>
                </div>
            </div>
            <div class="products__product-content">
                <h3 class="products__product-content_title">${title}</h3>
            </div>
        </div>
    `;
    this.handleProductClick();
    return html;
  }

  render() {
    const product = this.returnHTML();

    return product;
  }
}
