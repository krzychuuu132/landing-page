import { Page } from "../Page";
import { CategoriesData, CategoryData, SubcategoryData } from "./Categories";
import { Subcategory } from "./Subcategory";

class Category extends Page {
  categories: NodeList;
  categoryData: CategoryData;
  index: number;
  categoriesData: Array<CategoriesData>;
  constructor(categoryData: CategoryData, index: number, categoriesData: Array<CategoriesData>) {
    super();
    this.categoryData = categoryData;
    this.categoriesData = categoriesData;
    this.index = index;
  }

  // renderSubcategory() {
  //   const sucategories: string = new Subcategory(this.index, this.categoryData, super.renderHTML, this.categoriesData).render();
  //   return sucategories;
  // }

  returnHTML() {
    const { name } = this.categoryData;
    const html: string = `
    <button class="place-options__option ${this.index === 0 ? "place-options__option--active" : ""}">
        ${name}
    </button>
    `;
    return html;
  }

  render(): string {
    // const subcategoriesWrapper: HTMLElement = document.querySelector(".place-options__score");
    // const subcategories = this.renderSubcategory();
    // super.renderHTML(subcategoriesWrapper, subcategories);

    const html: string = this.returnHTML();

    return html;
  }
}

export { Category };
