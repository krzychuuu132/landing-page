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

  toggleActive(index: number) {
    const indicators: any = [...this.slider.indicatorsWrapperElement.children]
    indicators.forEach((indicator: HTMLElement) => indicator.classList.remove('indicator--active'))
    const activeIndicator: any = indicators[index]
    activeIndicator.classList.add('indicator--active')
  }

  setInterval() {
    clearInterval(this.slider.interval);
    this.addInterval();
  }

  handleClick() {
    window.handeIndicatorClick = (index: number) => {
      this.setInterval();
      this.changeSlide(index);
      this.toggleActive(index)
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
