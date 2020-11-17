<template>
    <div>
      <Header :isScrolled=isScrolled class="max-h-screen max-w-screen"></Header>
      <Introduction :isScrolled=isScrolled></Introduction>
      <Thumbnail :isScrolled=isScrolled></Thumbnail>
    </div>
</template>

<script>
import Header from '../components/Header'
import Introduction from '../components/Introduction'
import Thumbnail from '../components/BlogThumbnail'
export default {
  head:{
    title: "Tiếng Trung 30 giây",
    meta:[
      {
        hid: 'Chúng mình chia sẻ cách học tiếng Trung hiệu quả',
        name: 'Chúng mình chia sẻ cách học tiếng Trung hiệu quả',
        content: 'Đây là trang web tiếng Trung chuyên về chủ đề đời sống'
      }
    ]
  },
  components: {
    Header,
    Introduction,
    Thumbnail,
  },
  methods: {
      shrink(e){
        var target = document.querySelector(".here")
        var scrollPostion = target.getBoundingClientRect().top
        if(window.scrollY > scrollPostion){
          return this.isScrolled = true
        }
        return this.isScrolled = false
      }
    },

  data(){
    return{
      isScrolled: false
    }
  },

  mounted(){
    document.addEventListener("scroll", this.shrink)
  },

  destroyed(){
    document.removeEventListener("scroll", this.shrink)
  }
}

</script>

<style>

</style>