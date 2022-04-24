import { Page } from "../Page";
import { CategoryData, SubcategoryData } from "./Categories";
import { Subcategory } from "./Subcategory";

class Category extends Page {
  categories: NodeList;
  categoryData: CategoryData;
  index: number;
  constructor(categoryData: CategoryData, index: number) {
    super();
    this.categoryData = categoryData;
    this.index = index;
  }

  renderSubcategory() {
    const sucategories: string = new Subcategory(this.index, this.categoryData, super.renderHTML).render();
    return sucategories.replace(",", "");
  }

  returnHTML() {
    const { title } = this.categoryData;
    const html: string = `
    <button class="place-options__option ${this.index === 0 ? "place-options__option--active" : ""}">
        ${title}
    </button>
    `;
    return html;
  }

  render() {
    const subcategoriesWrapper: HTMLElement = document.querySelector(".place-options__score");
    const subcategories = this.renderSubcategory();
    super.renderHTML(subcategoriesWrapper, subcategories);

    const html: string = this.returnHTML();

    return html;
  }
}

export { Category };
