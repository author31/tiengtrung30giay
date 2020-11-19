<template>
    <div class="bg-blue-400 w-screen h-32 grid grid-cols-12
                sm:grid-cols-6">
        <div class="col-span-2 p-2
            sm:col-span-1 sm:mt-8 sm:p-2">
            <nuxt-link to ="/">
                <img class="" src="~/assets/logo/30s.svg" alt="" width="100px"  height="100px">
            </nuxt-link>
        </div>

        <div class="col-span-8 flex justify-center mt-6
                    sm:col-span-4"><p class="text-center w-1/2">{{title}}</p></div>

        <div class="col-span-1 flex space-x-4 mt-4 text-4xl
                    sm:col-span-1 sm:-ml-10 sm:pt-8 sm:text-2xl">

          <i class="fab fa-instagram text-orange-700 
                    "></i>
          <i class="fab fa-facebook-square text-blue-800 "></i>
          <i class="far fa-paper-plane text-indigo-700 "></i>
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