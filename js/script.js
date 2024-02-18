

// navbar
class ResponsiveMenu {
    constructor(hamburguer, navList, navLinks) {
        this.hamburguer = document.querySelector(hamburguer);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }
    



    // navbar
    animateLinks() {
        this.navLinks.forEach((link, index) =>{
            link.style.animation
            ?(link.style.animation = "")
            :(link.style.animation = `navLink 0.3s ease forwards  ${index/7 + 0.3}`)
        });
    }

handleClick() {
   
    this.navList.classList.toggle(this.activeClass);
   
    this.animateLinks();
}


addClickEvent() {
    this.hamburguer.addEventListener("click", this.handleClick);
}


init() {
    if(this.hamburguer) {
        this.addClickEvent();
    }
    return this;
}
}

const responsiveMenu = new ResponsiveMenu(
    "#hamburguer",
    "#links-header",
    "#links-header li",
);
responsiveMenu.init();

// Scroll auto
function scrollToElement (elementSelector, instance = 0) {
    const elements = document.querySelectorAll(elementSelector);
    
    if(elements.length > instance) {
        elements[instance].scrollIntoView({behavior: 'smooth'})
    }
}

const home = document.querySelector("#link1")
const about = document.querySelector("#link2")
const hability = document.querySelector("#link3")
const projects = document.querySelector("#link4")
const contacts = document.querySelector("#link5")

home.addEventListener("click", () => {
    scrollToElement("#home")
})

about.addEventListener("click", () => {
    scrollToElement("#sobre-container")
})

hability.addEventListener("click", () => {
    scrollToElement("#habilidades")
})

projects.addEventListener("click", () => {
    scrollToElement("#project-container")
})

contacts.addEventListener("click", () => {
    scrollToElement("#contato")
})