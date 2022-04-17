interface SlideData {
  title: string;
  image: string;
  description: string;
}

export class Slide {
  slide: SlideData;
  index: number;
  counter: number;
  constructor(slide: SlideData, index: number, counter: number) {
    this.slide = slide;
    this.index = index;
    this.counter = counter
  }

  render(): string {
    const { title, image, description } = this.slide;

    const html: string = `
        <div class="slides__slide ${this.index === 0 ? "active" : ""}" style="background-image: url(${image});">
        <div class="slides__slide-content">
            <div class="container">
            <h2 class="slides__slide-title">${title}</h2>
            ${description}
            </div>
        </div>
        </div>
        
        `;

    return html;
  }
}
