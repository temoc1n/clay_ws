<template>
        <div :class="this.$store.getters.getMode ? 'footer' : 'dark_footer'">
            <footer class="py-3">
                <ul class="nav justify-content-center pb-3 mb-3" :class=" this.$store.getters.getMode ? 'navbar_line' : 'dark_navbar_line'">
                <li class="nav-item"><a href="#" class="nav-link px-2 text-muted" :class=" this.$store.getters.getMode ? 'footer_element' : 'dark_footer_element'" @click.prevent="$router.push('/home')">Home</a></li>
                <li class="nav-item"><a href="#" class="nav-link px-2 text-muted" :class=" this.$store.getters.getMode ? 'footer_element' : 'dark_footer_element'" @click.prevent="$router.push('/shop')">Shop</a></li>
                <li class="nav-item"><a href="#" class="nav-link px-2 text-muted" :class=" this.$store.getters.getMode ? 'footer_element' : 'dark_footer_element'" @click.prevent="$router.push('/about')">About</a></li>
                <li class="nav-item"><a href="#" class="nav-link px-2 text-muted" :class=" this.$store.getters.getMode ? 'footer_element' : 'dark_footer_element'" @click.prevent="$router.push('/contact')">Contact Us</a></li>
                <li class="nav-item"><a href="#" class="nav-link px-2 text-muted" :class=" this.$store.getters.getMode ? 'footer_element' : 'dark_footer_element'" @click.prevent="$router.push('/donate')">Donate</a></li>
                </ul>
                <p class="text-center text-muted" :class=" this.$store.getters.getMode ? 'footer_element_date' : 'dark_footer_element_date'">© {{date.getFullYear()}} Miraki, Inc</p>
            </footer>
        </div>
</template>
<script>
export default {
    name:"MainFooter",
    data(){
        return{
            date: new Date()
        }
    }
}
</script>
<style scoped>
</style>