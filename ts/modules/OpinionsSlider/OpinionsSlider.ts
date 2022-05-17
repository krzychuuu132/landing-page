import { Page } from "../Page";
import { OpinionsIndicators } from "./OpinionsIndicators";
import { OpinionsSlide } from "./OpinionsSlide";

export interface OpinionsSliderData {
  name: string;
  stars: string[];
  description: string;
}

export class OpinionsSlider extends Page {
  sliderData: Array<OpinionsSliderData>;
  counter: number;
  sliderGap: number;
  slideWidth: number;
  slidesPerView: number;
  constructor(sliderData: Array<OpinionsSliderData>) {
    super();
    this.sliderData = sliderData;
    this.counter = 0;
    this.sliderGap = 30;
    this.slideWidth = 450;
    this.slidesPerView = 3;
  }

  renderSlides() {
    const lastSlide: OpinionsSliderData = Object.assign({}, this.sliderData[this.sliderData.length - 1]);
    const newSlidesArray: Array<OpinionsSliderData> = [...this.sliderData];
    newSlidesArray.unshift(lastSlide);

    const slides: string[] = newSlidesArray.map((slide) => new OpinionsSlide(slide).render());
    return slides;
  }

  renderIndicators() {
    const indicators: string[] = this.sliderData.map((slide) => new OpinionsIndicators().render());
    return indicators;
  }

  changeSlide() {
    const opinionsWrapper: HTMLElement = document.querySelector(".opinions-slider");
    const moveSlideValue: number = this.slidesPerView * this.slideWidth + this.slidesPerView * this.sliderGap + this.slideWidth / 2;

    document.body.addEventListener("click", () => {
      opinionsWrapper.style.transform = `translateX(-${moveSlideValue}px)`;
    });
  }

  render() {
    const opinionsSliderWrapper: HTMLElement = document.querySelector(".opinions .wrapper");
    const opinionsIndicatorsWrapper: HTMLElement = document.querySelector(".opinions .wrapper");

    const slider: string = `
        <div class="opinions-slider">
                ${this.renderSlides()}
        </div>
      `;

    const indicators = `
        <div class="indicators-wrapper">
                ${this.renderIndicators()}
        </div>
    `;

    this.renderHTML(opinionsSliderWrapper, slider);
    this.renderHTML(opinionsIndicatorsWrapper, indicators);

    this.changeSlide();
  }
}
