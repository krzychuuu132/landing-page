import { Page } from "../Page";
import { Indicator } from "./Indicator";
import { Slide } from "./Slide";

interface SliderData {
  title: string;
  description: string;
  image: string;
}

export class Slider extends Page {
  counter: number;
  data: Array<SliderData>;
  interval: ReturnType<typeof setInterval>;
  constructor(data: Array<SliderData>) {
    super();
    this.data = data;
    this.counter = 1;
    this.interval = setInterval(null);
  }

  addListeners(): void {
    const indicators = document.querySelectorAll(".indicators__indicator");
    indicators.forEach((indicator) => indicator.addEventListener("click", (e) => this.changeSlideByIndicator(this, e)));

    this.interval = setInterval(() => {
      this.counter++;
      this.counter > this.data.length ? (this.counter = 1) : null;

      this.changeSlide(this.counter - 1);
    }, 5000);
  }

  changeSlide(index: number) {
    const slides = document.querySelectorAll(".slides__slide");
    if (slides.length === 0) {
      clearInterval(this.interval);
      return;
    }
    const indicators = document.querySelectorAll(".indicators__indicator");
    slides.forEach((slide) => slide.classList.remove("active"));
    slides[index].classList.add("active");

    indicators.forEach((indicator) => indicator.classList.remove("active"));
    indicators[index].classList.add("active");

    return index;
  }

  changeSlideByIndicator(slider: any, e: any): void {
    const indicator: any = e.target;
    const { id } = indicator.dataset;
    slider.counter = parseInt(id);
    slider.changeSlide(parseInt(id));
  }

  renderSlides(): string[] {
    const data: string[] = this.data.map((slide, index) => new Slide(slide, index, this.counter).render());
    return data;
  }

  renderIndicators(): string[] {
    const data: string[] = this.data.map((slide, index) => new Indicator(index, this).render());
    return data;
  }

  render(): void {
    const sliderWrapper: HTMLElement = document.querySelector(".slides");
    const indicatorsWrapper: HTMLElement = document.querySelector(".indicators");
    const slides: string[] = this.renderSlides();
    const indicators: string[] = this.renderIndicators();

    super.renderHTML(sliderWrapper, slides);
    super.renderHTML(indicatorsWrapper, indicators);

    this.addListeners();
  }
}
