<template>
  <div class="relative min-h-screen">
      <Navbar></Navbar>
      <h1 class="text-center font-semibold text-3xl my-2
                            sm:text-base ">Bài đăng</h1>
      <div class="flex justify-center pb-40">
        <div class ="grid grid-cols-4 gap-8
                         xl:grid-cols-3 xl:gap-4 mt-8 
                         md:grid-cols-3 md:gap-4 mt-8  
                         sm:grid-cols-2 sm:gap-2
                         xs:grid-cols-1 xs:gap-1">
              <BlogPost v-for="b in blogs" :key="b._id" :title="b.title" :content="b.body" :url ="b.mainImage.asset._ref" route="post" :slug="b.slug.current"></BlogPost>
        </div>
      </div>
      
      <Footer class="absolute bottom-0"></Footer>
  </div>
</template>

<script>
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import BlogPost from '../../components/BlogPost'
import { groq } from '@nuxtjs/sanity'

export default {
  async asyncData({$sanity}){
    const query = groq `*[_type == "post"] | order(publishedAt desc)`
    const blogs = await $sanity.fetch(query)
    return { blogs }
  }

}
</script>

<style>

</style>