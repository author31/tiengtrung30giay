<template>
    <div class="fixed z-10 inset-y-0 w-full h-full flex justify-center items-center bg-black bg-opacity-25" v-if="showModal">
        <!-- PopUp -->
        <div class="bg-indigo-200 w-80 h-64 z-30 rounded-extra text-center
                    sm:w-64 sm:h-32">
            <p class="font-bold 
                    sm:text-xs sm:px-2">Cùng nhau học tiếng Trung mỗi ngày</p>
            <div class="w-48 pt-4 mx-auto
                        sm:w-16" >
                <img src="~/assets/logo/work.svg" alt="">
            </div>
            <button class="bg-gray-700 w-32 mt-8 rounded-extra hover:bg-white submit
                        sm:w-20 sm:mt-3 " @click="showModal =false">
                <p class="p-2 text-white hover:text-black
                        sm:text-xs sm:p-1">Đóng</p>            
            </button>
        </div>

    </div>
</template>

<script>
export default {
    name:"PopUp",
    data(){
        return{
            showModal: false
        }
    },
    created(){
        this.$nuxt.$on('showPopUp', () =>{
            this.showModal = true
        })
    },
    beforeDestroy(){
        this.$nuxt.$off('showPopUp')
    }
}


</script>

<style scoped>

</style>