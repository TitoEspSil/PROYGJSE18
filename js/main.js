import { Router } from "./router.js";
import { initProducts } from "./services/products.service.js";

const app= document.getElementById("app")
const router = new Router(app)
initProducts()
//todo  funcion para marcar activo en el sidebar
function setActive(page) { //dashboard
    document.querySelectorAll(".menu-item").forEach((btn)=>{
        btn.classList.toggle("active", btn.dataset.page===page)
    })
} 

//todo  funcion para navegar cuando hacemos click en el sidebar
document.querySelectorAll(".menu-item").forEach(btn=>{
        btn.addEventListener("click",()=>{
            const page = btn.dataset.page //dashboard
            router.navigate(page)
            setActive(page)
        })
})
router.navigate("dashboard")
setActive("dashboard")
