import { Page } from "../Page";
import { CategoryData, ProductData } from "./Categories";
import { Product } from "./Product";

export class Products extends Page {
  subcategoryID: number;
  products: Array<ProductData>;
  constructor(subcategoryID: number) {
    super();
    this.subcategoryID = subcategoryID;
    this.products = [];
  }

  renderProduct() {
    const product: string[] = this.products.map((product, index) => new Product(product, index).render());
    return product;
  }

  async fetchProducts() {
    const products = await this.fetchData(
      "products",
      {
        category: this.subcategoryID,
      },
      ".products"
    );
    this.products = products;
  }

  async render(): Promise<string> {
    const productsWrapper: HTMLElement = document.querySelector(".products");
    await this.fetchProducts();
    this.renderProduct();
    const product: string[] = this.renderProduct();

    this.renderHTML(productsWrapper, product);

    return "product";
  }
}
