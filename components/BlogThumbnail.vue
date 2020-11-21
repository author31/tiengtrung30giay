<template>
  <div class="block">
      <div class="flex justify-center ">
            <div class="mt-0 w-64 bg-blue-400 p-2 rounded-extra
                        md:h-10 md:w-48
                        sm:w-24 sm:pt-4
                        xs:w-16" :class="{scrolling: isScrolled}">
             <p class="text-center sm:-mt-2">Bài đăng</p>
            </div>
      </div>

      <div class="flex justify-center">
          <div class ="grid grid-cols-4 gap-8
                         xl:grid-cols-3 xl:gap-4 mt-8 
                         md:grid-cols-3 md:gap-4 mt-8  
                         sm:grid-cols-2 sm:gap-4
                         xs:grid-cols-1 xs:gap-1">
            <blog-post v-for="p in blogs" :key="p.id" :post="p.Title" :id="p.id"></blog-post>
            
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
            blogs{
                id,
                Title
            }
        }`
    }
}
</script>

<style >
.scrolling{
    position: fixed;
    top: -5px;
}

.scrolling p{
    font-size: 2.5rem;
    
}

@media (max-width: 639px) {
    .scrolling p{
        font-size: 1.2rem;
    }
    .scrolling{
        position: fixed;
        top: 10px;
        
    }
}
</style>