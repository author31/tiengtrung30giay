<template>
  <div class="relative min-h-screen">
        <!-- Navbar -->
        <Navbar></Navbar>

        <!-- Body -->
        <div class="grid grid-cols-12 mt-4">
            <!-- Cover -->
            <div class="col-start-3 col-span-2 bg-blue-200 h-56 flex justify-center items-center
                        lg:col-start-3 lg:col-span-3
                        sm:col-start-2 sm:col-span-5">
                <img class="w-32 h-32  
                            md:w-16 md:h-16" :src="resources.Cover[0].url" alt="" >
            </div>

            <!-- Title -->
            <div class="col-start-5 col-span-4 ml-10 threshold
                        lg:col-start-6 lg:col-span-3 lg:ml-3
                        sm:col-start-7 sm:col-span-5 sm:ml-2">
                <!-- title -->
                <h1 class="font-semibold text-2xl
                            lg:text-xl
                            md:text-xl
                            sm:text-base">{{resources.Name}}</h1>
                <!-- border-line -->
                <div class="h-1/2 bg-black my-2"></div>
                <!-- catergories -->
                <div class="space-y-2
                            sm:text-sm">
                    <p>Mức độ: <span class="categories">{{resources.Level}}</span></p>
                    <p>Ứng dụng: <span class="categories">{{resources.Application}}</span></p>
                    <p>Số lượng từ vựng: <span class="categories">{{resources.Count}}</span></p>  
                    <button class="bg-black w-32 hover:bg-blue-400" ><p class="text-white p-2">Tải về</p></button>
                </div>
            </div>

            <!-- Border Line -->
            <div class="col-start-3 col-span-6 mt-4
                        sm:col-start-2 sm:col-span-10">
                <div class="h-1/2 bg-black my-2"></div>
            </div>

            <!-- Description -->
            <div class="col-start-3 col-span-1
                        sm:col-start-2 sm:col-span-3">
                <h2 class="font-semibold text-xl">Miêu tả</h2>
            </div>

            <!-- Content -->
            <div class="col-start-3 col-span-6 my-4 pb-20
                        sm:col-start-2 sm:col-end-11" v-html="resources.Content">
            </div>

            <!-- Social media -->
            <FloatingButton v-if="resources.Name" :isScrolled ="this.isScrolled" :path ="this.$route.path" :blogTitle ="resources.Name"></FloatingButton> 

        </div>
        <Footer class="absolute bottom-0"></Footer>
  </div>
</template>

<script>
import axios from 'axios'
import removeVietnameseTones from '../../../converter/converter'
export default {
    async asyncData({params, redirect}){
        const bls = await axios.get("https://tiengtrung30s-cms.herokuapp.com/resources")
        const filterBlog = bls.data.find(
            el => {return el ? removeVietnameseTones(el.Name) === params.title : ''}
        )
        return {resources: filterBlog}
    },

    data(){
        return{
            isScrolled: false,
            resources: "",
        }
    },
    mounted(){
        document.addEventListener("scroll", this.shrink)
    
    },  
    destroyed(){
        document.removeEventListener("scroll", this.shrink)
    },
    methods:{
        shrink(e){
            var target = document.querySelector(".threshold")
            var scrollPosition = target.getBoundingClientRect().top
            if(window.scrollY > scrollPosition){
                return this.isScrolled = true
            }
            return this.isScrolled = false
        }
    }
}
    
</script>

<style scoped>
.categories{
    font-weight: bold;
    
}

</style>