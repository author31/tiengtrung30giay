<template>
  <nuxt-link :to="`/${route}/${slug}`">
    <div class="w-64 h-70 p-2 mb-10 rounded-extra text-center
                  border-2 border-black hover:shadow-2xl
                  xl:w-56
                  md:w-48
                  sm:w-64 sm:h-64 sm:px-10
                  xs:w-48 xs:h-48">
        <div class="w-32 mx-auto
                    md:w-20
                    sm:w-24
                    xs:w-12"> 
          <SanityImage :asset-id=url auto="format" />
        </div>
        <h3 class="xs:text-xs">{{title}}</h3>
        <p class="xs:text-xs">{{previewContent}}</p>
    </div>
  </nuxt-link>
</template>

<script>
import { SanityImage } from '@nuxtjs/sanity/dist/sanity-image'
export default {
    name: "BlogPost",
    props: ["title", "url", "content", "route", "slug"],
    data(){
      return{
        previewContent: "",
      }
    },
    methods:{
      shortenString(){
        this.previewContent = this.content[0].children[0].text.slice(0, 40) + " ..."
      }
    },
    mounted(){
      this.shortenString()
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