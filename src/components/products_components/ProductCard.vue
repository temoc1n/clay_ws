<template>
    <div class="container">
        <div class="card w-100"  :class=" this.$store.getters.getMode ? 'product_card' : 'dark_product_card'">
            <img src="../../assets/product.webp" class="card-img-top border-none" alt="...">
            <div class="card-body" >
                <h5 class="card-title">Cool Shoes</h5>
                <p class="card-text">They blue and cool</p>
                <div class="reviews text-end">
                    <span class="reviews_text">0 reviews</span>
                </div>
                <div class="price text-start">
                    <span class="fw-bolder">100$</span>
                </div>
            </div>
        </div>
    </div>    
</template>
<script>
export default {
    name:'ProductCard'
}
</script>
<style scoped>
.card-img-top{
    cursor: pointer;
}
.reviews_text{
    font-size: smaller;
}
</style>