import { CategoryData, ProductsData } from "./Categories";
import { Product } from "./Product";

export class Products {
  productsData: ProductsData[];
  renderHtml: Function;
  constructor(productsData: ProductsData[], renderHtml: Function) {
    this.productsData = productsData;
    this.renderHtml = renderHtml;
  }

  renderProduct() {
    const product: string[] = this.productsData.map((product) => new Product(product).render());

    return product;
  }

  render() {
    const productsWrapper: HTMLElement = document.querySelector(".products");
    const product: string[] = this.renderProduct();

    this.renderHtml(productsWrapper, product);

    return product;
  }
}
