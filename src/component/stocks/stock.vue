<template>
    <div class="panel panel-success">
        <div class="panel-heading">{{cname}}(Price:{{price}}) money:{{cash}} </div>
        
        <div class="panel-body">
            <div class="pull-left">
                <input 
                    type="number"
                    class="form-control"
                    v-model="quantity"
                >
            </div>
            <div class="pull-right">
                <button @click="buy">Buy</button>
            </div>
        </div>
    </div>
</template>
<script>

export default{
    props:['cname','price'],
    data(){
        return{
            msg:'stock component',
            quantity:Number,
            currentPrice:this.price,
            packet:0,
        }
    },
    methods:{
        buy(){
            console.log('buy')
            this.$store.dispatch('buystock',{price:this.currentPrice,quantity:this.quantity});
        }
    },
    computed:{
        cash(){
            return this.$store.state.money;
        }
    }
}

</script>
