import { Page } from "../Page";
import { Category } from "./Category";

export interface ProductsData {
  id: number;
  image: string;
  title: string;
  description?: string;
  bathroom_tub_towel: number;
  bedrooms: number;
  calendars: number;
  garages: number;
  grid_artboard: number;
  main_picture: number;
  features?: String[];
}

export interface SubcategoryData {
  title: string;
  products: Array<ProductsData>;
}

export interface CategoryData {
  title: string;
  id: number;
  name: string;
  slug: string;
  display: string;
  subcategory: Array<SubcategoryData>;
}

export interface CategoriesData {
  category: Array<CategoryData>;
}

class Categories extends Page {
  data: Array<CategoriesData>;
  categories: NodeList;
  subcategory: NodeList;
  categoriesData: Array<CategoryData>;
  constructor(data: Array<CategoriesData>) {
    super();
    this.data = data;
    this.categories = document.querySelectorAll(".place-options__option");
    this.subcategory = document.querySelectorAll(".place-options__score-wrapper");
    this.categoriesData = [];
  }

  changeOption(index: number, e: any, categories: HTMLCollection) {
    const subcategory: any = [...document.querySelectorAll(".place-options__score-wrapper")];
    const categoryClassName = e.target.className.trim();
    [...categories].forEach((category, index) => {
      category.classList.remove(`${categoryClassName}--active`);
      // subcategory[index].classList.remove(`${subcategory[index].className.split(" ")[0]}--active`);
    });
    e.target.classList.toggle(`${categoryClassName}--active`);
    // subcategory[index].classList.toggle(`${subcategory[index].className.split(" ")[0]}--active`);
  }

  addListeners(categories: HTMLCollection): void {
    [...categories].forEach((category, index: number) => category.addEventListener("click", (e) => this.changeOption(index, e, categories)));
  }

  async fetchCategories() {
    const getCategories = await this.fetchData("products/categories");
    this.categoriesData = getCategories;
    return getCategories;
  }

  renderCategories() {
    const getMainCategory = this.categoriesData.filter((category) => category.display === "default" && category.slug !== "bez-kategorii");
    const categories: string[] = getMainCategory.map((item, index) => new Category(item, index, this.data).render());
    return categories;
  }

  async render(): Promise<void> {
    await this.fetchCategories();
    this.renderCategories();
    const categoriesWrapper: HTMLElement = document.querySelector(".place-options");
    const categories: string[] = this.renderCategories();

    super.renderHTML(categoriesWrapper, categories);
    this.addListeners(categoriesWrapper.children);
  }
}

export { Categories };
