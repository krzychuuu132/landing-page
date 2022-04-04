interface SlideData {
  title: string;
  image: string;
  description: string;
}

export class Slide {
  slide: SlideData;
  constructor(slide: SlideData) {
    this.slide = slide;
  }

  render(): string {
    const { title, image, description } = this.slide;

    const html = `
        <div class="slide">
            <h2>${title}</h2>
            <img src="${image}" alt="${title}"/>
            ${description}
        </div>
        `;

    return html;
  }
}
