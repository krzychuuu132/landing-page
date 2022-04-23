import { CategoryData, ProductsData } from "./Categories";
import { Products } from "./Products";

export class Subcategory {
  item: CategoryData;
  index: number;
  constructor(index: number, item: CategoryData) {
    this.item = item;
    this.index = index;
  }

  renderProducts(productsData: ProductsData[]) {
    const products: string = new Products(productsData).render();

    return products;
  }
  render() {
    const { subcategory } = this.item;

    const getSubCategory = subcategory.map((item) => {
      this.renderProducts(item.products);
      return `<div class="place-options__score-element">${item.title}</div>`;
    });

    const html: string = `
    <div class="place-options__score-wrapper ${this.index === 0 ? "place-options__score-wrapper--active" : ""}">
        ${getSubCategory}
    </div>
    </div>
    `;
    return html.replace(",", "");
  }
}
