<template>
  <div class="relative min-h-screen">
        <!-- Navbar -->
        <Navbar></Navbar>

        <!-- Body -->
        <div class="grid grid-cols-12 mt-4">
            <!-- Cover -->
            <div class="col-start-3 col-span-2 bg-blue-200 flex justify-center items-center
                        lg:col-start-3 lg:col-span-3
                        sm:col-start-2 sm:col-span-5">
                <div class="w-32 h-32  
                            md:w-24 md:h-24" alt="">
                            <SanityImage :asset-id=resources.image.asset._ref auto="format" />
                </div>
            </div>

            <!-- Title -->
            <div class="col-start-5 col-span-4 ml-10 threshold
                        lg:col-start-6 lg:col-span-3 lg:ml-3
                        sm:col-start-7 sm:col-span-5 sm:ml-2">
                <!-- title -->
                <h1 class="font-semibold text-2xl
                            lg:text-xl
                            md:text-xl
                            sm:text-sm">{{resources.name}}</h1>
                <!-- border-line -->
                <div class="h-1/2 bg-black my-2"></div>
                <!-- catergories -->
                <div class="space-y-2
                            sm:text-xs sm:space-y-0">
                    <p>Mức độ: <span class="categories">{{resources.level}}</span></p>
                    <p>Ứng dụng: <span class="categories">{{resources.application}}</span></p>
                    <p>Số lượng từ vựng: <span class="categories">{{resources.wordCount}}</span></p>  
                    <button class="bg-black w-32 hover:bg-blue-400" ><p class="text-white p-2">Tải về</p></button>
                </div>
            </div>

            <!-- Relate block -->
            <div class="col-start-10 col-span-2 mt-4
                        md:col-start-9 md:col-span-3 md:ml-6
                        sm:col-start-2 sm:col-span-10 sm:ml-0">
                <div class="h-1/2 bg-black my-2"></div>
                <h2 class="font-semibold text-xl">Bài đăng liên quan</h2>
                <div class="bg-white border-4 border-black 
                            sm:border-2 ">
                    <div class="font-medium p-3" v-for="r in related" :key=r.id>
                        <nuxt-link :to="`/post/${r.slug.current}`">
                            - {{r.title}}
                        </nuxt-link>
                    </div>
                </div>
            </div>

            <!-- Border Line -->
            <div class="col-start-3 col-span-6 mt-4
                        sm:col-start-2 sm:col-span-10">
                <div class="h-1/2 bg-black my-2"></div>
            </div>

            <!-- Description -->
            <div class="col-start-3 col-span-2
                        sm:col-start-2 sm:col-span-3">
                <h2 class="font-semibold text-xl">Miêu tả</h2>
            </div>

            <!-- Content -->
            <div class="col-start-3 col-span-6 pb-24
                        sm:col-start-2 sm:col-end-11">
                        <block-content :blocks="child" v-for="child in resources.content" :key="child._id" :projectId=projectId :dataset=dataset />
            </div>

            

            <!-- Social media -->
            <FloatingButton v-if="resources.name" :isScrolled ="this.isScrolled" :path ="this.$route.path" :blogTitle ="resources.Name"></FloatingButton> 
            

        </div>
        
        <!-- Footer -->
        <Footer class="absolute bottom-0"></Footer>
  </div>
</template>

<script>
import { groq } from '@nuxtjs/sanity'
import generateRandom from '../../../converter/rand_generator'

export default {
    async asyncData({params, $sanity}){
        // Fetch resources
        const rquery = groq `*[_type == "resources" && slug.current == "${params.title}"][0] | order(publishedAt desc)`
        const resources = await $sanity.fetch(rquery)

        // Generate related blog by rand
        const bquery = groq `*[_type == "post"] | order(publishedAt desc)`
        const blogs = await $sanity.fetch(bquery)
        

        // Generate random indexes
        var sugLinks = []
        var randomIdx = generateRandom(blogs.length, 3)
        randomIdx.forEach(el => sugLinks.push(blogs[el]))
        
        const projectId = $sanity.config.projectId
        const dataset = $sanity.config.dataset

        return {resources, related: sugLinks, projectId, dataset}
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
        },

        
    }
}
    
</script>

<style scoped>
.categories{
    font-weight: bold;
    
}

</style>