export class Page {
  private url: string;
  public data: Array<any>;
  constructor() {
    this.url = "http://janusz321.ct8.pl/wp-json/acf/v3/pages/2";
    this.data = [];
  }

  async getDataFromPage(): Promise<Array<any>> {
    try {
      const response = await fetch(this.url);
      const { acf } = await response.json();
      this.setData = acf;
      return acf;
    } catch (err) {
      throw new Error(err);
    }
  }

  public set setData(data: Array<Object>) {
    this.data = data;
  }

  public get getData() {
    return this.data;
  }

  getDataToComponent(name: string): Array<any> {
    const data: Array<Object> = this.getData;
    return data[name];
  }

  renderHTML(parentElement: HTMLElement, html: string | Array<string>) {
    const parser = new DOMParser();
    if (typeof html !== "string") {
      html.forEach(item => {
        console.log(item);
        const htmlDoc = parser.parseFromString(item, "text/html").body
          .children[0];
        parentElement.appendChild(htmlDoc);
      });
    } else {
      const htmlDoc = parser.parseFromString(html, "text/html").body
        .children[0];
      parentElement.appendChild(htmlDoc);
    }
  }
}
