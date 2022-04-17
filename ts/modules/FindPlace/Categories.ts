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
  constructor(data: Array<CategoriesData>) {
    super();
    this.data = data;
  }

  renderCategories(): string[] {
    const categories: string[] = this.data[0].category.map((item, index) =>
      new Category(item, index).render()
    );
    return categories;
  }

  render(): void {
    const categoriesWrapper: HTMLElement =
      document.querySelector(".place-options");
    const categories: string[] = this.renderCategories();

    super.renderHTML(categoriesWrapper, categories);
  }
}

export { Categories };
