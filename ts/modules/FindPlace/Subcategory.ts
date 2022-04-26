import { Page } from "../Page";
import { CategoriesData, CategoryData, ProductsData } from "./Categories";
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
  categoriesData: Array<CategoriesData>;
  constructor(index: number, item: CategoryData, renderHtml: Function, categoriesData: Array<CategoriesData>) {
    this.item = item;
    this.index = index;
    this.renderHtml = renderHtml;
    this.categoriesData = categoriesData;
  }

  renderProducts(productsData: ProductsData[]) {
    const products: string[] = new Products(productsData, this.renderHtml).render();
    return products;
  }
  handleSubcategoryClick() {
    window.handleSubcategoryClick = (index: number, title: string, subcategoryIndex: number) => {
      const subcategoryElements = document.querySelectorAll(".place-options__score-element");
      const activeSubcategory = this.categoriesData[0].category[index];
      let subcategoryClassName;

      subcategoryElements.forEach((subcategoryElement: HTMLElement) => {
        subcategoryClassName = subcategoryElement.className.split(" ")[0];
        subcategoryElement.classList.remove(`${subcategoryClassName}--active`);

        if (subcategoryElement.dataset.title === title) {
          subcategoryElement.classList.add(`${subcategoryClassName}--active`);
        }
      });

      activeSubcategory.subcategory.filter((item) => {
        if (item.title === title) {
          document.querySelector(".products").innerHTML = "";
          this.renderProducts(item.products);
        }
      });
    };
  }
  render() {
    const { subcategory } = this.item;
    const getSubCategory = subcategory.map((item, index) => {
      this.renderProducts(item.products);
      return `<div class="place-options__score-element" data-title='${item.title}' onClick="handleSubcategoryClick(${this.index},'${item.title}',${index})">${item.title}</div>`;
    });
    this.handleSubcategoryClick();

    const html: string = `
    <div class="place-options__score-wrapper ${this.index === 0 ? "place-options__score-wrapper--active" : ""}">
        ${getSubCategory}
    </div>
    </div>
    `;
    return html;
  }
}
