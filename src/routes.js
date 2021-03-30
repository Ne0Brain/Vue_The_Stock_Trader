import Home from './component/Home.vue'
import portfolio from './component/portfolio/portfolio.vue'
import stocks from './component/stocks/stocks.vue'

export const routes = [
    {path:'/' , component:Home},
    {path:'/portfolio' , component:portfolio},
    {path:'/stocks' , component:stocks}
]