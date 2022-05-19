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
  interval: ReturnType<typeof setInterval>;
  constructor(sliderData: Array<OpinionsSliderData>) {
    super();
    this.sliderData = sliderData;
    this.counter = 0;
    this.sliderGap = 30;
    this.slideWidth = 450;
    this.slidesPerView = 2;
    this.interval;
    this.addSliderRWD();
  }

  renderSlides() {
    const lastSlide: OpinionsSliderData = Object.assign({}, this.sliderData[this.sliderData.length - 1]);
    const newSlidesArray: Array<OpinionsSliderData> = [...this.sliderData];
    this.isMobile() ? null : newSlidesArray.unshift(lastSlide);

    const slides: string[] = newSlidesArray.map((slide) => new OpinionsSlide(slide).render());
    return slides;
  }

  renderIndicators() {
    const countIndicatorsLength: number = Math.ceil(
      this.isMobile ? this.sliderData.length / this.slidesPerView : this.sliderData.length / this.slidesPerView
    );
    const range = (start: number, end: number) => {
      return new Array(end - start + 1).fill(0).map((_, index) => start + index);
    };
    const newIndicatorsNumberArray: number[] = range(1, countIndicatorsLength);

    const indicators: string[] = newIndicatorsNumberArray.map((_, index: number) =>
      new OpinionsIndicators(index, this.changeSlide.bind(this), this.addInterval.bind(this), this).render()
    );
    return indicators;
  }

  addInterval() {
    const countSliderValue = Math.ceil(this.sliderData.length / this.slidesPerView);
    this.interval = setInterval(() => {
      this.counter >= countSliderValue - 1 ? (this.counter = 0) : this.counter++;
      this.changeSlide(null, "interval");
      this.addClassToIndicator();
    }, 15000);
  }

  addClassToIndicator() {
    const indicators = [...document.querySelectorAll(".indicator")];
    indicators.forEach((indicator) => indicator.classList.remove("indicator--active"));
    indicators[this.counter].classList.add("indicator--active");
  }

  changeSlide(index?: number, type?: string) {
    if (type !== "interval") {
      index !== undefined ? (this.counter = index) : this.counter++;
    }

    const opinionsWrapper: HTMLElement = document.querySelector(".opinions-slider");
    const moveSlideValue: number = this.counter * (this.slidesPerView * this.slideWidth + this.slidesPerView * this.sliderGap + this.slideWidth / 2);

    const mobileTransform = `translateX(calc(-${this.counter * 100}% - ${this.counter * this.sliderGap}px))`;
    const desktopTransform = `translateX(-${moveSlideValue}px)`;

    opinionsWrapper.style.transform = this.counter === 0 ? null : this.isMobile() ? mobileTransform : desktopTransform;
  }

  isMobile() {
    if (window.innerWidth >= 1200) return false;
    return true;
  }

  addSliderRWD() {
    const setBreakpoints = () => {
      if (window.innerWidth >= 300) {
        this.slidesPerView = 1;
        this.sliderGap = 30;
      }

      if (window.innerWidth >= 768) {
        this.slidesPerView = 2;
        this.sliderGap = 30;
      }
      if (window.innerWidth >= 992) {
        this.slidesPerView = 3;
        this.sliderGap = 30;
      }
    };
    setBreakpoints();
    window.addEventListener("resize", () => {
      setBreakpoints();
    });
  }

  render() {
    this.addInterval();
    this.addSliderRWD();
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
  }
}
