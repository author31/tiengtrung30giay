<template>
    <div class="bg-blue-400 w-full h-32 grid grid-cols-12 rounded-b-extra">
        <div class="col-start-3 mt-2
            lg:col-start-3 lg:w-24
            md:col-start-3 md:w-24
            sm:col-start-2 sm:mt-8 sm:w-20">
            <nuxt-link to ="/">
                <img class="" src="~/assets/logo/30s.svg" alt="Trang chủ" width="100px"  height="100px">
            </nuxt-link>
        </div>

        <div class="col-start-10 col-span-3 flex  
                    sm:col-start-9 sm:col-span-4">
            <div class="grid grid-rows-3">
                <div class="row-start-1 flex space-x-3 mt-2 text-white font-medium
                                                                        md:text-sm
                                                                        sm:mt-6 sm:text-xs">
                    <nuxt-link to="/post">Bài đăng</nuxt-link>
                     <nuxt-link to="/resources">Tài liệu</nuxt-link>
                </div>
                <div class="row-start-2 text-4xl space-x-2 -mt-2
                                        md:text-2xl md:mt-2
                                        sm:text-2xl">
                    <a href="https://www.instagram.com/tiengtrung30giay/"><i class="fab fa-instagram text-orange-700"></i></a>
                    <a href="https://www.facebook.com/tiengtrung30giay"><i class="fab fa-facebook-square text-blue-800"></i></a>
                    <nuxt-link :to="`/contact-us`"><i class="far fa-paper-plane text-indigo-700 "></i></nuxt-link>
                </div>
            </div> 
        </div>
        
    </div>
</template>

<script>
export default {
    name: "Navbar",
}
</script>

<style scoped>
a{
    height: 1rem;
}
</style>