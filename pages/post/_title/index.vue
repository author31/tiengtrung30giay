<template>
  <div>
    <Navbar class="threshold sm:text-xs w-screen" :title="blog.Title"></Navbar>
    <div class="grid grid-cols-12
                sm:grid sm:grid-rows-3">
      
      <div class="col-start-2 col-span-10 pt-2
                  sm:row-start-1 row-span-3" v-html="blog.Content"></div>

      <FloatingButton class="col-start-1 col-end-3 px-4 
                            sm:row-ends-3 sm:w-48 sm:p-8" v-if="blog.Title" :isScrolled ="this.isScrolled" :path ="this.$route.path" :blogTitle ="blog.Title"></FloatingButton> 
    </div>
                        
    
  </div>
</template>

<script>
import FloatingButton from '../../../components/FloatingButton'
import removeVietnameseTones from '../../../converter/converter'
import Navbar from '../../../components/Navbar'
export default {
  async asyncData({params, redirect}){
        const bls = await fetch("https://tiengtrung30s-cms.herokuapp.com/blogs").then(res => res.json())
        const filterBlog = bls.find(
            el => {return el ? removeVietnameseTones(el.Title).toLowerCase().split(' ').join('-') === params.title : ''}
        )
        return {blog: filterBlog}
    },
  head(){
    return{
      title: this.blog.Title,
      meta:[
        {
          hid: 'Chúng mình chia sẻ cách học tiếng Trung hiệu quả',
          name: 'Chúng mình chia sẻ cách học tiếng Trung hiệu quả',
          content: this.blog.Content
        }
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
      blog: ""
    }
  },
  mounted(){
    document.addEventListener("scroll", this.shrink)
   
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
