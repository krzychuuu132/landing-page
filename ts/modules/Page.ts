import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

export class Page {
  private url: string;
  public data: Array<any>;
  private consumer_key: string;
  private consumer_secret: string;
  constructor() {
    this.url = "http://janusz321.ct8.pl/wp-json/acf/v3/pages/2";
    this.data = [];
    this.consumer_key = "ck_0cdd2a0194a0d88666f0951045811270fce1eac0";
    this.consumer_secret = "cs_4054578c41f7b7d262ac8a1b49b44c1c894787ea";
    this.initWoocommerceAPI();
  }

  initWoocommerceAPI() {
    const WooCommerce = new WooCommerceRestApi({
      url: "https://janusz321.ct8.pl",
      consumerKey: this.consumer_key,
      consumerSecret: this.consumer_secret,
      version: "wc/v3",
    });
    return WooCommerce;
  }

  async getDataFromPage(parentLoaderElementClassName?: string): Promise<Array<any>> {
    const loader: HTMLElement = document.querySelector(`${parentLoaderElementClassName ? parentLoaderElementClassName : ""} .loader`);
    loader ? loader.classList.add("loader--active") : null;
    try {
      const response = await fetch(this.url);
      const { acf } = await response.json();
      this.setData = acf;
      return acf;
    } catch (err) {
      console.log(err);
    } finally {
      loader ? loader.classList.remove("loader--active") : null;
    }
  }

  async fetchData(option: string, params?: Object, parentLoaderElementClassName?: string) {
    const loader: HTMLElement = document.querySelector(`${parentLoaderElementClassName ? parentLoaderElementClassName : ""} .loader`);
    loader ? loader.classList.add("loader--active") : null;
    try {
      const { data } = await this.initWoocommerceAPI().get(option, params);
      return data;
    } catch (err) {
      throw new Error(err);
    } finally {
      loader ? loader.classList.remove("loader--active") : null;
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

  renderHTML(parentElement: HTMLElement, html: string | Array<string>): Element | HTMLElement {
    const parser = new DOMParser();
    if (typeof html !== "string") {
      html.forEach((item) => {
        const htmlDoc = parser.parseFromString(item, "text/html").body.children[0];
        parentElement.appendChild(htmlDoc);
        return htmlDoc
      });
    } else {
      const htmlDoc = parser.parseFromString(html, "text/html").body.children[0];
      parentElement.appendChild(htmlDoc);
      return htmlDoc;
    }
  }
}
