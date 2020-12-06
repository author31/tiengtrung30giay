<template>
    <div class="bg-blue-400 w-full h-32 grid grid-cols-12 rounded-b-extra">
        <div class="col-start-3 mt-2
            sm:col-start-2 sm:mt-8 sm:w-20">
            <nuxt-link to ="/">
                <img class="" src="~/assets/logo/30s.svg" alt="" width="100px"  height="100px">
            </nuxt-link>
        </div>

        <div class="col-start-10 flex mt-5 space-x-3 text-4xl
                    sm:col-start-9 sm:pt-8 sm:text-2xl ">
          <a href="https://www.instagram.com/tiengtrung30giay/"><i class="fab fa-instagram text-orange-700"></i></a>
          <a href="https://www.facebook.com/tiengtrung30giay"><i class="fab fa-facebook-square text-blue-800"></i></a>
         <nuxt-link :to="`/contact-us`"><i class="far fa-paper-plane text-indigo-700 "></i></nuxt-link> 
        </div>
        
    </div>
</template>

<script>
export default {
    name: "Navbar",
}
</script>

<style>

</style>