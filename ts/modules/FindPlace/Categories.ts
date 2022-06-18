import { Page } from "../Page";
import { Category } from "./Category";
import { CategoryData } from "./interfaces";

class Categories extends Page {
  categories: NodeList;
  subcategories: NodeList;
  categoriesData: Array<CategoryData>;
  constructor() {
    super();
    this.categories = document.querySelectorAll(".place-options__option");
    this.subcategories = document.querySelectorAll(".place-options__score-wrapper");
    this.categoriesData = [];
  }

  changeOption(index: number, e: any, category: Element, categories: any) {
    const subcategories: any = [...document.querySelectorAll(".place-options__score-wrapper")];
    const categoryClassName = e.target.className.trim();

    // Category toggler
    categories.forEach((category: HTMLElement) => category.classList.remove(`${categoryClassName}--active`));
    category.classList.add(`${categoryClassName}--active`);

    // Subcategory toggler
    subcategories.forEach((subcategory: HTMLElement) => subcategory.classList.remove(`${subcategories[index - 1].className.split(" ")[0]}--active`));
    subcategories[index - 1].classList.add(`${subcategories[index - 1].className.split(" ")[0]}--active`);
  }

  addListeners(categories: HTMLCollection): void {
    [...categories].forEach((category, index: number) =>
      category.addEventListener("click", (e) => this.changeOption(index, e, category, [...categories]))
    );
  }

  async fetchCategories() {
    const getCategories = await this.fetchData("products/categories", null, ".place-options");
    this.categoriesData = getCategories;
    return getCategories;
  }

  renderCategories() {
    const getMainCategory = this.categoriesData.filter((category) => category.display === "default" && category.slug !== "bez-kategorii");
    const categories: string[] = getMainCategory.map((item, index) =>
      new Category(item, index, this.categoriesData, { categoryTitle: item.slug, categoryID: item.id }).render()
    );
    return categories;
  }

  async render(): Promise<void> {
    await this.fetchCategories();
    const categoriesWrapper: HTMLElement = document.querySelector(".place-options");
    const categories: string[] = this.renderCategories();

    super.renderHTML(categoriesWrapper, categories);
    this.addListeners(categoriesWrapper.children);
  }
}

export { Categories };
