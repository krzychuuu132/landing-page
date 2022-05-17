import { OpinionsSliderData } from "./OpinionsSlider";

export class OpinionsSlide {
  opinionsSlideData: OpinionsSliderData;
  constructor(opinionsSlideData: OpinionsSliderData) {
    this.opinionsSlideData = opinionsSlideData;
  }

  render() {
    const { name, description } = this.opinionsSlideData;
    const html = `
        <div class="opinions__opinion">
            <div class="heading">
                <div class="name"><p><strong>${name}</strong></p></div>
                <div class="stars">
                    <svg xmlns="http://www.w3.org/2000/svg" width="11.073" height="10.561" viewBox="0 0 11.073 10.561">
                    <g id="star_icon-icons.com_73394_1_" data-name="star_icon-icons.com_73394(1)" transform="translate(0)">
                        <path id="Path_7147" data-name="Path 7147" d="M11.073,15.082q0-.246-.373-.306l-3.34-.486-1.5-3.028q-.126-.273-.326-.273t-.326.273l-1.5,3.028-3.341.486Q0,14.836,0,15.082a.507.507,0,0,0,.166.319l2.422,2.356-.572,3.327A1.081,1.081,0,0,0,2,21.218a.392.392,0,0,0,.07.236.241.241,0,0,0,.21.1.565.565,0,0,0,.266-.08L5.536,19.9l2.988,1.571a.539.539,0,0,0,.266.08.235.235,0,0,0,.2-.1.393.393,0,0,0,.07-.236,1,1,0,0,0-.007-.133l-.572-3.327L10.9,15.4A.481.481,0,0,0,11.073,15.082Z" transform="translate(0 -10.99)" fill="#ffac12"/>
                    </g>
                    </svg>
                </div>
            </div>
            <div class="description">
                <p class="title">Napisal: </p>
                <p>${description}</p>
            </div>
        </div>
        `;
    return html.replace(",", "");
  }
}
