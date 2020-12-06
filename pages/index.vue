<template>
    <div class="min-h-screen relative">
      <Header :isScrolled=isScrolled class="max-h-screen max-w-screen"></Header>
      <Introduction :isScrolled=isScrolled></Introduction>
      <Thumbnail :isScrolled=isScrolled></Thumbnail>
      <Footer></Footer>
    </div>
</template>

<script>
import Header from '../components/Header'
import Introduction from '../components/Introduction'
import Thumbnail from '../components/BlogThumbnail'
import Popup from '../components/Popup'
import Footer from '../components/Footer.vue'
export default {
  head() {
    return{
      title: this.title,
      meta:[
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { 'http-equiv': 'X-UA-Compatible', content:'ie=edge' },
        
        { name: 'description', hid: 'description', content: this.description},

        { name: 'twitter:title', content: this.title},
        { name: 'twitter:description', content: this.description},
        { name: 'twitter:image', content: '~/assets/logo/30s.svg'},
        
        { property: 'og:title', content: this.title },
        { property: 'og:description', content: this.description },
        { property: 'og:site_name', content: this.title },
        { property: 'og:locale', content: 'VN' }

      ]
    }
  },
  components: {
    Header,
    Introduction,
    Thumbnail,
    Popup,
    Footer
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
      isScrolled: false,
      title: 'Tiếng Trung 30 giây',
      description: 'Chúng mình là du học sinh đang học tập và sinh sống tại Đài Loan. Mục đích của blog này là muốn chia sẻ những kiến thức mà chúng mình góp nhặt được trong quá trình học tiếng Trung và những điều thú vị bên Đài Loan',
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