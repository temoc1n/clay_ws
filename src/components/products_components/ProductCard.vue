<template>
    <div class="container">
        <div class="card product_card w-100" style="width: 19rem;">
            <img src="../../assets/product.jpg" class="card-img-top" alt="...">
            <div class="card-body">
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