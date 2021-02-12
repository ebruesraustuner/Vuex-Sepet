<template>
<div>
    <h2>CARD</h2>
    <ul>
        <li v-for="item in card" :key="item.id">
            <span class="item__name">
                {{item.name}}
                <button @click="reduceItemCount(item)">-1</button>
                <button @click="removeItem">Remove</button>
            </span>
            <span class="item__count">{{item.count}} X {{item.price}}</span>
            <span class="item__amount">{{formatCurrency(item.count*item.price)}}</span>
        </li>
    </ul>
    <div v-if="card.length ===0 ">
        <h2>No Item </h2>
    </div>
    <div v-else>
        <div class="total-amount">Total : {{formatCurrency(totalAmount)}}</div>
        <button @click="clearAll">Clear All</button>
        <button>CheckOut</button>
    </div>
</div>
    
</template>
<script>
import {mapState, mapMutations,mapGetters} from 'vuex';
export default {
    computed:
    mapState(['card']),
    ...mapGetters(['totalAmount']),
    methods: {
        formatCurrency(price){
            return '$'+price.toFixed(2)
        },
        ...mapMutations(['reduceItemCount', 'removeItem', 'clearAll'])
    }

    
}
</script>
<style lang="sass" scoped>

</style>