import { ProductData } from "./Categories";
import { SingleProduct } from "./SingleProduct";
declare global {
  interface Window {
    handleProductClick: any;
  }
}
export class Product {
  productData: ProductData;
  index: number;
  constructor(productData: ProductData, index: number) {
    this.productData = productData;
    this.index = index;
  }

  handleProductClick(id: number): any {
    window.handleProductClick = async (product: any) => {
      window.location.href = `#/product&id=${id}`;
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
    const { images, name, id } = this.productData;
    console.log(this.productData);
    const html: string = `
        <div class="products__product" data-id="${id}" onClick='handleProductClick(${JSON.stringify(this.productData)})'>
            <div class="products__product-picture">
                <img src="${images[0].src}" alt="Pierwszy produkt" class="products__product-picture_img"/>
                <div class="products__product-picture_hover">
                <img src="./img/icons/search.svg" alt="Ikona wyszukiwania"/>
                <p>Zobacz</p>
                </div>
            </div>
            <div class="products__product-content">
                <h3 class="products__product-content_title">${name}</h3>
            </div>
        </div>
    `;
    this.handleProductClick(id);
    return html;
  }

  render() {
    const product = this.returnHTML();

    return product;
  }
}
