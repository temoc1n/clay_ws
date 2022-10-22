<template>
    <div class="container">
        <div class="best_seller_title text-center pt-5 pb-4">
            <h2 :class="this.$store.getters.getMode ? 'main_product_seller' : 'dark_main_product_seller'">Best Sellers</h2>
        </div>
        <div class="products_placement d-md-flex pt-3 pe-0 pb-5">
            <div class="first_row d-sm-flex">
                <ProductCard class="pb-3"/>
                <ProductCard class="pb-3"/>
            </div>
            <div class="second_row d-sm-flex">
                <ProductCard class="pb-3"/>
                <ProductCard class="pb-3"/>
            </div>
        </div>
    </div>    
</template>
<script>
import ProductCard from './products_components/ProductCard.vue';
export default {
    components: { 
        ProductCard
    },
}
</script>
<style scoped>

</style>