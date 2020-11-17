<template>
    <div class="bg-blue-400 h-32">
        <div class="flex justify-items-start">
            <nuxt-link to ="/">
                <img class="mx-4 py-2 sm:w-12 transform sm:translate-y-4" src="~/assets/logo/30s.svg" alt="" width="100px"  height="100px">
            </nuxt-link>
        </div>
        
        <div class="flex justify-end space-x-4 mx-16 transform -translate-y-16 sm:-translate-y-12 sm:mx-6" >
          <img class="sm:w-6 mt-2 lg:w-8" src="~/assets/logo/instagram.svg" alt="" width="30px" height="30px">
          <img class="sm:w-6 mt-2 lg:w-8" src="~/assets/logo/facebook.svg" alt="" width="30px" height="30px">
          <img class="sm:w-6 mt-2 lg:w-8" src="~/assets/logo/email.svg" alt="" width="30px" height="30px">
        </div>
        <div class="flex justify-center -my-32 text-xl sm:text-xs sm:-my-20 sm:-mx-14"><p class="text-center w-1/2">{{title}}</p></div>
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