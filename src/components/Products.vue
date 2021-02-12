<template>
    <div id="products">
        <h2> Products </h2>
        <div class="notification" v-for="(info, key) in infos" :key="key"></div>
        <div :class="{products : products.lenght !==0}">
            <ul v-for="product in products" :key="product.id">
                <li>
                    {{product.name}} {{product.price}}
                    <label>
                        <input type="number" :id="product.id" value="0">
                    </label>
                    <button @click="addToCard(product)">Add To Cats </button>
                </li>
            </ul>
        </div>

    </div>
</template>
<script>
    import {
        mapState
    } from 'vuex';

    export default {
        data() {
            return {
                infos: []
            }
        },
        computed: {
            ...mapState(['products']),
        },
        methods: {
            addToCard(product) {
                if (document.getElementById(product.id).value > 1) {
                    const count = document.getElementById(product.id).value;
                    product = {...product, count };
                    this.$store.state.commit('addToCard', product );
                    const info = product.name + 'added to card';
                    this.infos.push(info);
                    setTimeout(() => {
                            document.getElementById(product.id).value = 0;
                            this.infos.splice(this.infos.indexOf(info), 1);
                        },
                        3000)
                     console.log()   
                } else {
                    const info = 'please enter a valid input';
                    this.infos.push(info);
                    setTimeout(() => {
                            document.getElementById(product.id).value = 0;
                            this.infos.splice(this.infos.indexOf(info), 1);
                        },
                        3000)
                }
            }
        }
    }
</script>
<style>

</style>