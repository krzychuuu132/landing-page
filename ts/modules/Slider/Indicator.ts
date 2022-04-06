import { Slider } from "./Slider";

export class Indicator {
  index: number;
  slider: Slider;
  constructor(index: number, slider: Slider) {
    this.index = index;
    this.slider = slider;
  }

  render(): string {
    const html: string = `
      <button class="indicators__indicator"></button>
      `;
    return html;
  }
}
