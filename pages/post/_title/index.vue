<template>
  <div class="block min-h-screen relative">
    <!-- Navbar -->
    <Navbar class="threshold sm:text-xs"></Navbar>
    
    <div class="grid grid-cols-12 pb-32">
      <!-- Publish date -->
      <div class="col-start-3 col-span-8 mt-4
                sm:col-start-2 sm:col-span-9">

        <i class="far fa-clock text-base "> Bài đăng ngày: {{formattedDate}}</i>

        <div class="w-80 h-1/2 bg-black my-2
                    sm:w-56"></div>

        <h1>{{blog.title}}</h1>
      </div>
      <!-- Content -->
      <div class="col-start-3 col-span-8 
                  sm:col-start-2 sm:col-span-9 "><block-content :blocks="child" v-for="child in blog.body" :key="child._id" :projectId=projectId :dataset=dataset /></div>

      <!-- Social Button -->
      <FloatingButton v-if="blog.title" :isScrolled ="this.isScrolled" :path ="this.$route.path" :blogTitle ="blog.title"></FloatingButton> 
    </div>
    <!-- Footer -->
    <Footer class="absolute bottom-0"></Footer>
    
  </div>
</template>

<script>
import FloatingButton from '../../../components/FloatingButton'
import urlBuilder from '../../../converter/urlBuilder'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import { groq } from '@nuxtjs/sanity'
export default {
  async asyncData({$sanity, params}){
        const query = groq`*[_type == "post" && slug.current == "${params.title}"][0] | order(publishedAt desc)`
        const blog = await $sanity.fetch(query)
        const projectId = $sanity.config.projectId
        const dataset = $sanity.config.dataset
        return { blog, projectId, dataset }
    },
  head(){
    return{
      title: this.blog.Title,
      meta:[
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { 'http-equiv': 'X-UA-Compatible', content:'ie=edge' },
        
        { name: 'description', hid: 'description', content: 'content'},

        { name: 'twitter:title', content: this.blog.Title},
        { name: 'twitter:description', content: this.blog.Content},
        { name: 'twitter:image', content: urlBuilder(this.blog.mainImage.asset._ref, this.projectId, this.dataset)},
        
        { property: 'og:title', content: this.blog.Title },
        { property: 'og:description', content: this.blog.Content },
        { property: 'og:site_name', content: this.blog.Title },
        { property: 'og:locale', content: 'VN' }
      ]
    }
  },
  components:{
    Navbar,
    FloatingButton
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
    
  },
  data(){
    return{
      isScrolled: false,
      blog: "",
      formattedDate: "",
    }
  },
  mounted(){
    document.addEventListener("scroll", this.shrink)
    this.formattedDate = this.blog.publishedAt.substring(0,10).split("-").reverse().join("-")
   
  },  
  destroyed(){
    document.removeEventListener("scroll", this.shrink)
  },
}
</script>

<style>
h1{
  font-size: xx-large;
  font-weight: bold;
  padding-bottom: 20px;
}
h2{
  font-size: x-large;
  font-weight: bold;
  padding-bottom: 20px;
}
p{
  padding-top: 5px;
  padding-bottom: 5px;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

</style>
