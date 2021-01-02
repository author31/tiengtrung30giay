<template>
  <div class="block">
      <div class="flex justify-center">
            <div class="my-4 w-64 h-12 bg-blue-400 rounded-extra text-center
                        md:w-48 md:h-10 
                        sm:w-24 
                        xs:w-16" :class="{scrolling: isScrolled}">

               <h2 class="font-semibold text-xl my-2
                            sm:text-base
                            xs:text-xs">Bài đăng</h2>
            </div>
      </div>

      <div class="flex justify-center">
          <div class ="grid grid-cols-4 gap-8
                         xl:grid-cols-3 xl:gap-4 mt-8 
                         md:grid-cols-3 md:gap-4 mt-8  
                         sm:grid-cols-1 sm:gap-2
                         xs:grid-cols-1 xs:gap-1">
            <BlogPost v-for="b in blogs" :key="b._id" :title="b.title" :content="b.body" :url ="b.mainImage.asset._ref" route="post" :slug="b.slug.current"></BlogPost>
            
          </div>
      </div>
  </div>
</template>

<script>
import BlogPost from './BlogPost'
import { groq } from '@nuxtjs/sanity'

export default {
    name: "Thumbnail",
    props: ["isScrolled"],
    async fetch(){
        const query = groq `*[_type == "post"] | order(publishedAt desc)`
        this.blogs = await this.$sanity.fetch(query)
    },
    data: () => ( {blogs: ""} )
}
</script>

<style scoped>
.scrolling{
    position: fixed;
    top: 5px;
}

.scrolling h2{
    font-size: 2rem;
    
}

@media (max-width: 639px) {
    .scrolling h2{
        font-size: 1.2rem;
    }
    .scrolling{
        position: fixed;
        top: 10px;
        
    }
}

@media (max-width: 280px) {
    .scrolling h2{
        font-size: 0.9rem;
    }
    .scrolling{
        position: fixed;
        top: 10px;
    }
}
</style>