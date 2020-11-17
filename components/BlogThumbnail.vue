<template>
  <div class="block">
      <div class="flex justify-center">
            <div class="mt-0 w-64 bg-blue-400 p-2 
                        sm:w-24 rounded-extra" :class="{scrolling: isScrolled}">
             <p class="text-center">Bài đăng</p>
            </div>
      </div>

      <div class="flex justify-center">
          <div class ="grid grid-cols-4 gap-8
                         xl:grid-cols-3 xl:gap-4 mt-8 
                         sm:grid-cols-2 gap-1 
                         xs:grid-cols-1">
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

<style>
.scrolling{
    position: fixed;
    top: -5px;
}

.scrolling p{
    font-size: 2.5rem;
    
}

@media (max-width: 639px) {
    .scrolling p{
        font-size: 1.3rem
    }
    .scrolling{
        position: fixed ;
    }
}
</style>