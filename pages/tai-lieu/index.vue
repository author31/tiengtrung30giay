<template>
  <div class="relative min-h-screen">
      <Navbar></Navbar>
      <h1 class="text-center font-semibold text-3xl my-2">Tài Liệu</h1>
      <div class="flex justify-center pb-40">
        <div class ="grid grid-cols-4 gap-8
                         xl:grid-cols-3 xl:gap-4 mt-8 
                         md:grid-cols-3 md:gap-4 mt-8  
                         sm:grid-cols-1 sm:gap-2
                         xs:grid-cols-1 xs:gap-1">
              <BlogPost v-for="r in resources" :key="r._id" :title="r.name" :content="r.content" :url ="r.image.asset._ref" route="tai-lieu" :slug="r.slug.current"></BlogPost>
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
    const query = groq `*[_type == "resources"] | order(publishedAt desc)`
    const resources = await $sanity.fetch(query)
    return { resources }
  }
}
</script>

<style>

</style>