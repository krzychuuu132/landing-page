import { Page } from "../Page";
import { CategoryData } from "./Categories";

class Category extends Page {
  categories: NodeList;
  categoryData: CategoryData;
  index: number;
  constructor(categoryData: CategoryData, index: number) {
    super();
    this.categories = document.querySelectorAll(".place-options__option");
    this.categoryData = categoryData;
    this.index = index;
  }

  changeOption(e: any) {
    const categoryClassName = e.target;
    console.log("dziala", this.data);
  }

  addListeners(): void {
    console.log(this.categories);
    this.categories.forEach((category) =>
      category.addEventListener("click", this.changeOption.bind(this))
    );
  }

  renderSubcategory() {}

  render() {
    const { title } = this.categoryData;
    const html: string = `
    <button class="place-options__option ${
      this.index === 0 ? "place-options__option--active" : ""
    }">
        ${title}
    </button>
    `;
    return html;
  }
}

export { Category };
