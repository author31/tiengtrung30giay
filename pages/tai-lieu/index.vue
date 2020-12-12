<template>
  <div class="relative min-h-screen">
      <Navbar></Navbar>
      <h1 class="text-center font-semibold text-3xl my-2
                            sm:text-base ">Tài Liệu</h1>
      <div class="flex justify-center pb-40">
        <div class ="grid grid-cols-4 gap-8
                         xl:grid-cols-3 xl:gap-4 mt-8 
                         md:grid-cols-3 md:gap-4 mt-8  
                         sm:grid-cols-2 sm:gap-2
                         xs:grid-cols-1 xs:gap-1">
              <BlogPost v-for="b in resources" :key="b.id" :post="b.Name" :route="'tai-lieu'" :content="b.Content" :url ="b.Cover[0].url"></BlogPost>
        </div>
      </div>
      
      <Footer class="absolute bottom-0"></Footer>
  </div>
</template>

<script>
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import BlogPost from '../../components/BlogPost'
import gql from 'graphql-tag'
export default {
  apollo:{
        resources: gql`query{
            resources(sort: "published_at:DESC"){
                id,
                Name,
                Link,
                Content,
                Level,
                Application,
                Count
                Cover{
                    url
                }
            }
        }`
    },

}
</script>

<style>

</style>