<template>
<div>
    <h1>the stocks component</h1>
    <app-stock
        v-for="company in companys"
        :key="company.cname"
        :cname="company.cname"
        :price="company.cprice"
    >
    </app-stock>
</div>
</template>
<script>
import stock from './stock.vue'

export default {
    components:{
        appStock:stock
    },
    data(){
        return{
            cnames:['name1','name2','name3'],
            cprice:[100,120,130],
            companys:[{
                    cname:'name1',
                    cprice:100,
                },
                {
                    cname:'name2',
                    cprice:120,
                },{
                    cname:'name3',
                    cprice:130,
                }]
        }
    }
}
</script>