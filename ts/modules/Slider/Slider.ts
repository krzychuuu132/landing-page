import { Page } from "../Page";
import { Slide } from "./Slide";

interface SliderData {
  title: string;
  description: string;
  image: string;
}

export class Slider extends Page {
  counter: number;
  data: Array<SliderData>;
  constructor(data: Array<SliderData>) {
    super();
    this.data = data;
    this.counter = 1;
  }

  renderSlides() {
    const data = this.data.map(slide => new Slide(slide).render());
    console.log(...data);
    return data;
  }

  renderIndiactors() {}

  render(): void {
    const slides = this.renderSlides();

    super.renderHTML(document.querySelector(".slider"), slides);
  }
}
