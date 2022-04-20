import { CategoryData, SubcategoryData } from "./Categories";

export class Subcategory {
  item: CategoryData;
  index: number;
  constructor(index: number, item: CategoryData) {
    this.item = item;
    this.index = index;
  }
  render() {
    const { subcategory } = this.item;

    const getSubCategory = subcategory.map((item) => `<div class="place-options__score-element">${item.title}</div>`);

    const html: string = `
    <div class="place-options__score-wrapper ${this.index === 0 ? "place-options__score-wrapper--active" : ""}">
        ${getSubCategory}
    </div>
    </div>
    `;
    return html;
  }
}
