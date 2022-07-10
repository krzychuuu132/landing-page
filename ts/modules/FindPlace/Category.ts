import { Page } from "../Page";
import { CategoryData, CategoryIndentifier } from "./interfaces";
import { Subcategory } from "./Subcategory";

class Category extends Page {
  categories: NodeList;
  categoryData: CategoryData;
  index: number;
  categoriesData: Array<CategoryData>;
  categoryIndentifier: CategoryIndentifier;
  constructor(categoryData: CategoryData, index: number, categoriesData: Array<CategoryData>, categoryIndentifier: CategoryIndentifier) {
    super();
    this.categoryData = categoryData;
    this.categoriesData = categoriesData;
    this.index = index;
    this.categoryIndentifier = categoryIndentifier;
  }

  get subcategoryData() {
    const subcategory = this.categoriesData.filter(
      (categoryData) => categoryData.display === "subcategories" && categoryData.parent === this.categoryIndentifier.categoryID
    );
    return subcategory;
  }

  renderSubcategory() {
    const sucategories: string = new Subcategory(this.index, this.subcategoryData).render();
    return sucategories;
  }

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
    const subcategoriesWrapper: HTMLElement = document.querySelector(".place-options__score");
    const subcategories = this.renderSubcategory();
    super.renderHTML(subcategoriesWrapper, subcategories);

    const html: string = this.returnHTML();

    return html;
  }
}

export { Category };
