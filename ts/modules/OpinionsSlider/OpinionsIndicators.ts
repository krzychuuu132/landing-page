declare global {
  interface Window {
    handeIndicatorClick: any;
  }
}

export class OpinionsIndicators {
  index: number;
  changeSlide: Function;
  addInterval: Function;
  slider: any;
  constructor(index: number, changeSlide: Function, addInterval: Function, slider: any) {
    this.index = index;
    this.changeSlide = changeSlide;
    this.addInterval = addInterval;
    this.slider = slider;
  }

  handleClick() {
    window.handeIndicatorClick = (index: number) => {
      clearInterval(this.slider.interval);
      this.changeSlide(index);
      this.addInterval();
    };
  }

  render() {
    const html = `
        <button class="indicator ${this.index === 0 ? "indicator--active" : ""}" onClick="handeIndicatorClick(${this.index})"></button>
      `;
    this.handleClick();
    return html;
  }
}
