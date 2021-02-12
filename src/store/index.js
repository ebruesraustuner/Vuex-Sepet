
import Vue from 'vue';
import Vuex from 'vuex';
import {productList} from "../assets/productData"

Vue.use(Vuex);

export const store = new Vuex.Store( {
    state: {
        card: [],
        products: productList,
    },
    mutations: {
        addToCard({card}, product){
            //kartta aynı ürün var mı kontrolü
            const itemIndex = card.findIndex(item =>item.id === product.id)
        //true false durumu dışında elaman varsa elemanın indexini verir
        if (itemIndex === -1){
            card.push(product);
        }else {
            card[itemIndex].count = parseInt(product.count) + parseInt(card[itemIndex].count)
        }
        
        },
        //'reduceItemCount', 'removeItem', 'clearAll'
        reduceItemCount({card},product){
            const itemIndex = card.findIndex(item =>item.id === product.id);
            card[itemIndex].count >1 ? card[itemIndex].count -- :card.splice(itemIndex,1)
        },
        removeItem({card},product){
            const itemIndex = card.findIndex(item =>item.id === product.id);
           card.splice(itemIndex,1)
        },
        clearAll(state){
            state.card = []
        }

    },
    getters: {
        totalAmount(state){
            let amount= 0;
            state.card.map(item=>{
                amount += item.price*item.count
            });
            return amount
        }
    }
})