import { CategoryData, ProductsData } from "./Categories";

export class Products {
  productsData: ProductsData[];
  constructor(productsData: ProductsData[]) {
    this.productsData = productsData;
  }

  render() {
    console.log(this.productsData);

    return "";
  }
}
