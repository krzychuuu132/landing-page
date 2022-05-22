import { Page } from "../Page";
import { CategoriesData, CategoryData } from "./Categories";
import { Products } from "./Products";

declare global {
  interface Window {
    handleSubcategoryClick: any;
  }
}
export class Subcategory extends Page {
  index: number;
  subcategoryData: Array<CategoryData>;
  constructor(index: number, subcategoryData: Array<CategoryData>) {
    super();
    this.index = index;
    this.subcategoryData = subcategoryData;
  }

  renderProducts(subcategoryID: number) {
    const products: any = new Products(subcategoryID).render();
    return products;
  }

  handleSubcategoryClick() {
    window.handleSubcategoryClick = (index: number, title: string, subcategoryID: number) => {
      document.querySelectorAll(".products__product, .products h3").forEach((items) => items.remove());
      this.renderProducts(subcategoryID);
      const subcategoryElements = document.querySelectorAll(".place-options__score-element");
      let subcategoryClassName;
      subcategoryElements.forEach((subcategoryElement: HTMLElement) => {
        subcategoryClassName = subcategoryElement.className.split(" ")[0];
        subcategoryElement.classList.remove(`${subcategoryClassName}--active`);
        if (subcategoryElement.dataset.title === title) {
          subcategoryElement.classList.add(`${subcategoryClassName}--active`);
        }
      });
    };
  }
  render() {
    this.handleSubcategoryClick();
    const getSubCategory = this.subcategoryData.map((item, index) => {
      return `<div class="place-options__score-element" data-title='${item.slug}' onClick="handleSubcategoryClick(${index},'${item.slug}',${item.id})">${item.name}</div>`;
    }).join("");

    const html: string = `
    <div class="place-options__score-wrapper ${this.index === 0 ? "place-options__score-wrapper--active" : ""}">
        ${getSubCategory}
    </div>
    </div>
    `;

    return html;
  }
}
