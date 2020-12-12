<template>
  <div class="header bg-blue-400 w-full e-h rounded-b-extra grid grid-cols-12" :class="{onScroll : isScrolled}" >
    <!-- Logo -->
    <div class="col-start-2 col-span-2 mt-2
                md:col-start-2 md:col-span-2
                sm:col-start-2 sm:w-16">
      <img class="" :class="{onScroll: isScrolled, enter: !isScrolled}"  src="~/assets/logo/30s.svg" alt="" width="100px"  height="100px">
    </div>
    <!-- Social media -->
    <div class="col-start-11 col-span-2 
                xl:col-start-11 xl:col-span-3 
                lg:col-start-10 lg:col-span-4
                md:col-start-10 md:col-span-4 
                sm:col-start-9 sm:col-span-4" :class="{stickLogo: isScrolled, enter: !isScrolled}" >
          <div class="grid grid-rows-3">
                <div class="row-start-1 flex space-x-3 text-white font-medium mt-2
                                                                        md:text-sm
                                                                        sm:mt-6 sm:text-xs">
                    <nuxt-link class="hover:text-black focus:underline focus:text-black" to="/post" >Bài đăng</nuxt-link>
                    <nuxt-link class="hover:text-black focus:underline focus:text-black" to="/tai-lieu" >Tài liệu</nuxt-link>
                </div>
                <div class="row-start-2 text-4xl space-x-2 -mt-2
                                        md:text-2xl md:mt-2
                                        sm:text-2xl">
                    <a href="https://www.instagram.com/tiengtrung30giay/" aria-label="Instagram"><i class="fab fa-instagram text-orange-700"></i></a>
                    <a href="https://www.facebook.com/tiengtrung30giay" aria-label="Facebook"><i class="fab fa-facebook-square text-blue-800"></i></a>
                    <nuxt-link :to="`/contact-us`"><i class="far fa-paper-plane text-indigo-700 "></i></nuxt-link>
                </div>
            </div> 
    </div>
    <!-- Email -->
    <div class="col-start-2 col-span-4
                lg:col-start-2 lg:col-span-4
                md:col-start-2 md:col-span-4
                sm:col-start-2 sm:col-span-4 sm:-mt-6
                xs:col-start-2 xs:col-span-4 xs:-mt-8" :class="{fadeOnScroll: isScrolled & true, enter: !isScrolled}">
      <label for="email"> <p class=" sm:text-xs">Tôi muốn học tiếng Trung mỗi ngày</p> </label><br/>
      <input type="text" id="email" name="email" class="p-2 w-64 rounded-extra 
                                                        sm:w-48 sm:p-1 sm:text-xs
                                                        xs:w-32" v-model="email" placeholder="Nhập vào email của bạn....">
      <button class="sml px-2 py-1 mt-2 rounded-extra 
                      xl:w-20 xl:text-base
                      md:w-20 md:h-8 md:text-xs
                      sm:w-20 sm:px-1 sm:py-0 sm:text-xs
                      xs:w-16 xs:text-xs text-black submit
                      bg-white  
                      hover:bg-yellow-200" @click = "sendEmail">Xác nhận</button>
      <p class="text-red-900 font-bold" v-if="error">! Nhập đúng định dạng email</p>
      
    </div>

    <!-- Reading cartoon -->
    <div class="col-start-10 col-span-2 
                lg:col-start-9 lg:col-span-3 
                md:col-start-9 md:w-48
                sm:col-start-9 sm:w-32"  :class="{fadeOnScroll: isScrolled, enter: !isScrolled}">
        <img class="transform scale-x-180" src="~/assets/logo/reading-side.svg" alt="Reading book" width="320" height="300">
    </div>
    
  </div>
  
</template>

<script>
import gql from 'graphql-tag'
import createEmail from '../apollo/mutations/createEmail'
export default {
    name: "Header",
    props: ["isScrolled", "disable"],
    data(){
      return{
        email: "",
        showModal: false,
        error: false
      }
    },
    methods:{
      async sendEmail(){
        this.$apollo.mutate({
          mutation: createEmail,
          variables:{
            email: this.email
          }
        }).then(() => {
          this.$nuxt.$emit('showPopUp')
          this.email = "";
          this.error = false
        }).catch(err => this.error = true)
      },
    },
    mounted(){

    }
}
</script>

<style scoped>

a{
  height: 1rem;
}
.e-h{
  top: 0px;
  height: 21rem;
  transition: all 0.4s;
}

input::-webkit-input-placeholder{
  font-size: 1rem;
}

input:focus{
  outline: none;
}

.onScroll{
  position: fixed;
  height: 6rem;
  transition: all 0.2s ease-out; 
}

img.onScroll{
  width: 80px;
  height: 80px;
  padding-top: 10px;
}

.fadeOnScroll{
  display: none;
}

.enter{
  opacity: 1;
  transition: 0.3s ease-in;
}

.stickLogo{
  transform: translateY(5px);
}

.submit:focus{
  outline: none;
}

@media (max-width: 639px) { 
  .e-h{
    height: 17rem;
  }
  .onScroll{
    height: 6rem;
  }

  .stickLogo{
    transform: translateY(5px);
  }
  .sml{
    display:block;
  }
}

@media (max-width: 300px) {
  p{
    font-size: 0.8rem;
  }
  
  img.onScroll{
    width: 60px !important; 
    height: 60px !important;
  }

  input::-webkit-input-placeholder{
    font-size: 0.6rem;
  }
}





</style>