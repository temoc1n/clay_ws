<template>
  <div class="container-fluid pt-2 pe-0 ps-0">
      <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner carousel h-100">
          <div class="carousel-item active" data-bs-interval="3000">
            <img src="../assets/teste3.jpg" class="d-block w-100" alt="first">
          </div>
          <div class="carousel-item" data-bs-interval="3000">
            <img src="../assets/teste3.jpg" class="d-block w-100" alt="second">
          </div>
          <div class="carousel-item" data-bs-interval="3000">
            <img src="../assets/teste3.jpg" class="d-block w-100" alt="third">
          </div>
        </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>
<script>
export default {
    name:'ProductCarousel'
}
</script>
<style scoped>

</style>