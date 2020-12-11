<template>
  <div class="block">
      <div class="flex justify-center">
            <div class="my-4 w-64 h-12 bg-blue-400 rounded-extra text-center
                        md:w-48 md:h-10 
                        sm:w-24 
                        xs:w-16" :class="{scrolling: isScrolled}">

               <h2 class="font-semibold text-xl my-2
                            sm:text-base ">Bài đăng</h2>
            </div>
      </div>

      <div class="flex justify-center">
          <div class ="grid grid-cols-4 gap-8
                         xl:grid-cols-3 xl:gap-4 mt-8 
                         md:grid-cols-3 md:gap-4 mt-8  
                         sm:grid-cols-2 sm:gap-2
                         xs:grid-cols-1 xs:gap-1">
            <blog-post v-for="b in blogs" :key="b.id" :post="b.Title" :route="'post'" :content="b.Content" :url ="b.Cover[0].url"></blog-post>
            
          </div>
      </div>
  </div>
</template>

<script>
import BlogPost from './BlogPost'
import gql from 'graphql-tag'
export default {
    name: "Thumbnail",
    components: {
        "blog-post": BlogPost
    },
    props: ["isScrolled"],
    data(){
        return{
            blogTitle: []
        }
    },
    apollo:{
        blogs: gql`query{
            blogs(sort: "published_at:DESC"){
                id,
                published_at,
                Title,
                Content,
                Cover{
                    url
                }
            }
        }`
    },
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
</style>