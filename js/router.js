import { renderDashboardPage  } from "./pages/dashboard.js";
import { renderProductsPage } from "./pages/products.js";
import { renderAboutPage } from "./pages/about.js";

const routes ={
    dashboard: renderDashboardPage,
    products: renderProductsPage,
    about: renderAboutPage
}

export class Router{
    constructor(root){
        this.root = root
    }
    navigate(pageName){
        const pageFn=routes[pageName]
        if(pageFn){
            this.root.innerHTML = "";
            pageFn(this.root)
        } else {
            this.root.innerHTML = "<p> Página no encontrada</p>"
        }

    }
}