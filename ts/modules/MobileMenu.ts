export class MobileMenu {
    hamburger: HTMLElement;
    navigation: HTMLElement;
    navigationClassName: string;
    constructor(hamburger: HTMLElement, navigation: HTMLElement){
        this.hamburger = hamburger;
        this.navigation = navigation;
        this.navigationClassName = this.navigation.className
    }

    addListeners(): void {
        this.hamburger.addEventListener('click',this.handleHamburgerClick.bind(this))
    }

    handleHamburgerClick(): boolean{
        return this.navigation.classList.toggle(`${this.navigationClassName}--active`);
    }
}