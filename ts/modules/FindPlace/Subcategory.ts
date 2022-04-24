import { Page } from "../Page";
import { CategoryData, ProductsData } from "./Categories";
import { Products } from "./Products";

declare global {
  interface Window {
    handleSubcategoryClick: any;
  }
}
export class Subcategory {
  item: CategoryData;
  index: number;
  renderHtml: Function;
  constructor(index: number, item: CategoryData, renderHtml: Function) {
    this.item = item;
    this.index = index;
    this.renderHtml = renderHtml;
  }

  renderProducts(productsData: ProductsData[]) {
    const products: string = new Products(productsData, this.renderHtml).render();
    return products;
  }
  render() {
    const { subcategory } = this.item;
    window.handleSubcategoryClick = (title: string) => {
      subcategory.filter((item) => {
        if (item.title === "550000") {
          this.renderProducts(item.products);
        }
      });
    };
    const getSubCategory = subcategory.map((item, index) => {
      this.renderProducts(item.products);
      return `<div class="place-options__score-element" onClick="handleSubcategoryClick('${item.title}').bind(this)">${item.title}</div>`;
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
