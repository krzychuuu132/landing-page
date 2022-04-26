import { Page } from "../Page";
import { Category } from "./Category";

export interface ProductsData {
  image: string;
  title: string;
  description?: string;
}

export interface SubcategoryData {
  title: string;
  products: Array<ProductsData>;
}

export interface CategoryData {
  title: string;
  subcategory: Array<SubcategoryData>;
}

export interface CategoriesData {
  category: Array<CategoryData>;
}

class Categories extends Page {
  data: Array<CategoriesData>;
  categories: NodeList;
  subcategory: NodeList;
  constructor(data: Array<CategoriesData>) {
    super();
    this.data = data;
    this.categories = document.querySelectorAll(".place-options__option");
    this.subcategory = document.querySelectorAll(".place-options__score-wrapper");
  }

  changeOption(index: number, e: any, categories: HTMLCollection) {
    const subcategory: any = [...document.querySelectorAll(".place-options__score-wrapper")];
    const categoryClassName = e.target.className.trim();
    [...categories].forEach((category, index) => {
      category.classList.remove(`${categoryClassName}--active`);
      subcategory[index].classList.remove(`${subcategory[index].className.split(" ")[0]}--active`);
    });
    e.target.classList.toggle(`${categoryClassName}--active`);
    subcategory[index].classList.toggle(`${subcategory[index].className.split(" ")[0]}--active`);
  }

  addListeners(categories: HTMLCollection): void {
    [...categories].forEach((category, index: number) => category.addEventListener("click", (e) => this.changeOption(index, e, categories)));
  }

  renderCategories(): string[] {
    const categories: string[] = this.data[0].category.map((item, index) => new Category(item, index, this.data).render());
    return categories;
  }

  render(): void {
    const categoriesWrapper: HTMLElement = document.querySelector(".place-options");
    const categories: string[] = this.renderCategories();

    super.renderHTML(categoriesWrapper, categories);
    this.addListeners(categoriesWrapper.children);
  }
}

export { Categories };
