<template>
  <div>
    <Navbar class="threshold" :title="blog.Title"></Navbar>
    <FloatingButton :isScrolled ="this.isScrolled" :path ="this.$route.path" :blogTitle ="blog.Title"></FloatingButton>
    <div class="px-32 py-10 
                sm:py-5 sm:px-2" v-html="blog.Content"></div>
    
    
  </div>
</template>

<script>
import FloatingButton from '../../../components/FloatingButton'
import Navbar from '../../../components/Navbar'
import blog from '../../../apollo/queries/blog'
import gql from 'graphql-tag'
export default {
  head:{
    title: blog.Title,
    meta:[
    {
      hid: 'Chúng mình chia sẻ cách học tiếng Trung hiệu quả',
      name: 'Chúng mình chia sẻ cách học tiếng Trung hiệu quả',
      content: 'Đây là trang web tiếng Trung chuyên về chủ đề đời sống'
    }
  ]
  },
  components:{
    Navbar,
    FloatingButton
  },
  methods:{
    shrink(e){
        var target = document.querySelector(".threshold")
        var scrollPostion = target.getBoundingClientRect().top
        if(window.scrollY > scrollPostion){
          return this.isScrolled = true
        }
        return this.isScrolled = false
      }
  },
  data(){
    return{
      isScrolled: false,
      blog: ""
    }
  },
  mounted(){
    document.addEventListener("scroll", this.shrink)
    this.$apollo.query({
      query: blog,
      prefetch: true,
      variables: {
        id: this.$route.params.id
      }
    }).then(resp =>{
      this.blog = resp.data.blog
    })
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
