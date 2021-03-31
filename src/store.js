import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

export const store= new Vuex.Store({
    state:{
        money:10000
    },
    mutations:{
        BUY_STOCK(state,{price,quantity}){
            state.money=state.money+price*quantity;
        }
    },
    actions:{
        buystock(context,{price,quantity}){
            console.log('in action');
            context.commit('BUY_STOCK',{price,quantity});
        }
    }
})