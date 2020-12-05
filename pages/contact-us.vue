<template>
  <div>
      <Navbar :title="title"></Navbar>
      <div class="flex justify-center my-12 
                sm:my-4">
          <div class="bg-indigo-300 w-120 grid grid-cols-5 rounded-extra p-6
                        sm:w-72">
            <div class="w-80 mx-auto my-auto col-start-1 col-span-3 
                        sm:w-40 ">
                <img src="~/assets/logo/contact-us.svg" alt="">
            </div>
            <div class="col-start-4 col-span-3">
                <label for="username" class="sm:text-xs">Họ và tên: </label><br>
                <input class="sm:text-xs" type="text" name="username" placeholder="Họ và tên của bạn ..." v-model="name"><br>

                <label for="email" class="sm:text-xs">Email: </label><br>
                <input class="sm:text-xs" type="text" name="email" placeholder="Email của bạn ..."  v-model="email"><br>
                
                <label for="content" class="sm:text-xs">Nội dung : </label><br>
                <textarea class="h-32 
                                sm:text-xs sm:h-24" placeholder="Nội dung của bạn ..."  v-model="message"></textarea>
                <button class="bg-black w-16 hover:bg-yellow-200
                                sm:w-12" @click="sendMessage">
                                <p class="text-white p-1 hover:text-black 
                                                    sm:text-xs">Gửi</p>
                </button>
            </div>
          </div>
      </div>
      <Footer class="absolute bottom-0"></Footer>
  </div>
</template>

<script>
import gql from 'graphql-tag'
import createMessage from '../apollo/mutations/createMessage'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
export default {
    data(){
        return {
            title: "Liên hệ với chúng tôi",
            name: "",
            email: "",
            message: ""
        }
    },
    head() {
        return {
            title: this.title,
            meta:[
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { 'http-equiv': 'X-UA-Compatible', content:'ie=edge' },
                
                { name: 'description', hid: 'description', content: 'content'},

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
    methods:{
        async sendMessage(){
            console.log(this.message)
            this.$apollo.mutate({
            mutation: createMessage,
            variables:{
                name: this.name,
                email: this.email,
                message: this.message
            }
            })
        },
    }

}
</script>

<style scoped>

input[type=text], textarea {
    width: 100%;
    padding: 5px;
    margin-bottom: 10px;
}

input[type=text]:focus , textarea:focus {
    border: 3px solid #555;
    outline: none;
}



</style>