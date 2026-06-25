import {
    getTopSold,
    getTotalProducts,
    getTotalSales,
    getBestSeller,
} from "../services/products.service.js";


export function renderDashboardPage(root) {

    const totalProducts = getTotalProducts();
    const totalSales = getTotalSales()
    const bestSeller = getBestSeller()
    const top = getTopSold(5)


    root.innerHTML = `
        <h2> Dashboard </h2>
        <div style="display:grid; grid-template-columns: repeat(3,1fr);gap: 12px;margin-bottom: 14px;">
            <div style="border:1px solid #ddd;padding: 12px; border-radius: 10px;">
                <div style="opacity: .7; font-size: 12px;"> Total Productos</div>
                <div style="font-size: 12px; font-weight: bold;">${totalProducts} </div>
            </div>
            <div style="border:1px solid #ddd;padding: 12px; border-radius: 10px;">
                <div style="opacity: .7; font-size: 12px;"> Total ventas </div>
                <div style="font-size: 12px; font-weight: bold;">${totalSales} </div>
            </div>
            <div style="border:1px solid #ddd;padding: 12px; border-radius: 10px;">
                <div style="opacity: .7; font-size: 12px;"> Más vendidos</div>
                <div style="font-size: 12px; font-weight: bold;">${bestSeller ? `Vendidos : ${bestSeller.sold ?? 0}`:""} 
                </div>

            </div>
        </div>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
            <div style="border: 1px solid #ddd;padding: 12px; border-radius: 10px;">
                <h3 style="margin: 0  0 10px 0;">Top 5 más vendidos</h3>
                <div id="topList"></div>
            </div>
            <div style="border: 1px solid #ddd;padding: 12px; border-radius: 10px;">
                <h3 style="margin: 0  0 10px 0;">Gráfico (TOP 5)</h3>
                <canvas id="salesChart" width="420" height="260" style="width: 100%; max-width: 520px;"></canvas>
            </div>

        </div>
                `

const topList = root.querySelector("#topList");
if (!top || top.length === 0) {
    topList.innerHTML =`<p>No hay datos de ventas todavia. Ve a productos y usa "+1 venta "</p>`

} else{
    topList.innerHTML =`
    <ol style ="margin:0; padding-left:18px">
    ${
        top.map(
            (p)=>
            `<li><strong> <span style:.7>(${p.category})</span> - vendids :<strong>${p.sold ?? 0}</strong></strong></li>`
        )
        .join("")
    }
    </ol>
    `
}

drawBarChart(root.querySelector("#salesChart"), top)
}

function drawBarChart(canvas, top) {
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0,0, canvas.width,canvas.height)
    if(!top ||top.length ===0){
        ctx.font = "14px Arial"
        ctx.fillText("Sin datos para grafica", 10, 30)
        return
    }

    const padding =30
    const charTW = canvas.width - padding*2
    const charTH = canvas.height - padding*2

    const values = top.map(p=> p.sold ?? 0)
    const max = Math.max(...values, 1)

    //Ejes
    ctx.beginPath()
    ctx.moveTo(padding,padding)
    ctx.lineTo(padding, padding + charTH)
    ctx.lineTo(padding+ charTW, padding.charTH )
    ctx.stroke();

    const barGap = 12;
    const barW = (charTW - barGap * (top.length-1))/ top.length
    top.forEach((p,i) => {
        const v = p.sold ?? 0;
        const barH = (v/max)* (charTH-20) 
        const x = padding +i * (barW + barGap)
        const y = padding + charTH - barH
        ctx.fillRect(x,y, barW, barH)

        ctx.font = "12px Arial"
        ctx.fillText(String(v),x+4, y-6)

        const label = (p.name || "").slice(0,8)
        ctx.fillText(label, x +2, padding + charTH +14)

    });

}