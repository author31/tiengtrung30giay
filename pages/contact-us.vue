<template>
  <div>
      <Navbar></Navbar>
      <div class="flex justify-center my-4">
          <h1 class="font-bold text-xl">{{title}}</h1></div>
      <div class="flex justify-center
                sm:my-4">
          <div class="bg-indigo-300 w-120 grid grid-cols-5 rounded-extra p-6
                        sm:w-72">

            <!-- Image -->
            <div class="w-80 mx-auto my-auto col-start-1 col-span-3 image">
                <img src="~/assets/logo/contact-us.svg" alt="">
            </div>

            <!-- Input field -->
            <div class="col-start-4 col-span-5 sm:col-start-1">
                <label for="username" class="sm:text-xs">Họ và tên: </label><br>
                <input class="sm:text-xs" type="text" name="username" placeholder="Họ và tên của bạn..." v-model="name"><br>

                <label for="email" class="sm:text-xs">Email: </label><br>
                <input class="sm:text-xs" type="text" name="email" placeholder="Email của bạn..."  v-model="email"><br>
                
                <label for="content" class="sm:text-xs">Nội dung: </label><br>
                <textarea class="h-32 
                                sm:text-xs sm:h-20" placeholder="Nội dung của bạn..."  v-model="message"></textarea>

                <!-- Button -->
                <button class="bg-black w-16 hover:bg-yellow-200" @click="sendMessage">
                                <p class="text-white p-1 hover:text-black 
                                                    sm:text-xs">Gửi</p>
                </button>
                
            </div>
            <p class="col-start-3 col-span-2  font-bold" :class="[success ? 'green' : 'red']">{{response}}</p>
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
            description: 'Liên hệ với chúng tôi',
            name: "",
            email: "",
            message: "",
            response: "",
            success: true
        }
    },
    head() {
        return {
            title: this.title,
            meta:[
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { 'http-equiv': 'X-UA-Compatible', content:'ie=edge' },
                
                { name: 'description', hid: 'description', content: this.description},

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
            if(this.name != "" && this.email != "" && this.message != ""){
                this.$apollo.mutate({
                mutation: createMessage,
                variables:{
                    name: this.name,
                    email: this.email,
                    message: this.message
                }
                }).then(() => {
                    this.name = "";
                    this.email = "";
                    this.message ="";
                    this.success = true
                    this.response = "Đã gửi thành công";
                }).catch(()=>{
                    this.name = "";
                    this.email = "";
                    this.message ="";
                    this.success = false
                    this.response = "Lỗi định dạng email";
                })
            }
            this.response = "Không được bỏ trống";
            this.success = false;
        },
    }

}
</script>

<style scoped>

.green{
    color: green;
}

.red{
    color: red;
}

input[type=text], textarea {
    width: 100%;
    padding: 5px;
    margin-bottom: 10px;
}

input[type=text]:focus , textarea:focus {
    border: 2px solid #555;
    outline: none;
}

@media (max-width: 639px) {
    .image{
        display: none;
    }
    input[type=text], textarea, button {
        width: 100%;
        padding: 3px;
        margin-bottom: 2px;
        border-radius: 0.7rem;
    }

    input[type=text]:focus , textarea:focus {
        border: 3px solid #555;
        outline: none;
    }
}


</style>