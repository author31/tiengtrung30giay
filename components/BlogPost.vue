<template>
  <nuxt-link :to="`/post/${routes}`">
    <div class="w-64 h-70 p-2 mb-10 rounded-extra text-center
                  border-2 border-black hover:shadow-2xl
                  xl:w-56
                  md:w-48
                  sm:w-36 sm:h-56
                  xs:w-32 xs:h-48">
        <div class="w-32 mx-auto
                    md:w-20
                    sm:w-10"> 
          <img class="" :src="url">
        </div>
        <p class="font-bold p-2 sm:text-xs sm:font-medium">{{post}}</p>
        <p class="sm:text-xs">{{previewContent}}</p>
    </div>
  </nuxt-link>
</template>

<script>
import removeVietnameseTones from '../converter/converter';
export default {
    name: "BlogPost",
    props: ["post", "url", "content"],
    data(){
      return{
        previewContent: "",
        routes: ""
      }
    },
    methods:{
      shortenString(html){
        var parser = new DOMParser()
        var htmlDoc = parser.parseFromString(html, 'text/html')
        this.previewContent = htmlDoc.getElementsByTagName("p")[0].textContent.slice(0, 50) + " ..."
        
      }
    },
    mounted(){
      this.shortenString(this.content)
      this.routes = removeVietnameseTones(this.post)
      console.log(removeVietnameseTones(this.post))
    }
}
</script>

<style scoped>
a:hover {
    text-decoration: none;
    color: black;
}

.postHeight{
  height: 18rem;
}



</style>