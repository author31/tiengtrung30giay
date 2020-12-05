<template>
    <div class="bg-blue-400 w-screen h-32 grid grid-cols-12
                sm:grid-cols-6">
        <div class="col-span-2 ml-10
            sm:col-span-1 sm:mt-8 sm:p-2">
            <nuxt-link to ="/">
                <img class="" src="~/assets/logo/30s.svg" alt="" width="100px"  height="100px">
            </nuxt-link>
        </div>

        <div class="col-span-8 flex justify-center mt-6
                    sm:col-span-4 sm:mt-10">
                    <h1 class="text-center text-2xl font-semibold w-1/2 
                                            sm:text-base sm:w-40">{{title}}</h1>
        </div>

        <div class="col-span-1 flex space-x-3 mt-4 text-4xl
                    sm:col-span-1 sm:-mr-10 sm:pt-8 sm:text-2xl">
          <a href="https://www.instagram.com/tiengtrung30giay/"><i class="fab fa-instagram text-orange-700"></i></a>
          <a href="https://www.facebook.com/tiengtrung30giay"><i class="fab fa-facebook-square text-blue-800"></i></a>
         <nuxt-link :to="`/contact-us`"><i class="far fa-paper-plane text-indigo-700 "></i></nuxt-link> 
        </div>
        
    </div>
</template>

<script>
export default {
    name: "Navbar",
    props: ["title"]
}
</script>

<style>

</style>