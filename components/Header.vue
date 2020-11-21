<template>
  <div class="header bg-blue-400 w-full e-h rounded-b-extra grid grid-cols-6" :class="{onScroll : isScrolled}" >
    <div class="col-span-2 ml-10 mt-2
                md:col-span-1
                sm:col-start-1 sm:w-16 sm:ml-5">
      <img class="" :class="{onScroll: isScrolled, enter: !isScrolled}"  src="~/assets/logo/30s.svg" alt="" width="100px"  height="100px">
    </div>
    <div class="col-start-6 col-span-2 text-3xl ml-16 mt-4 space-x-4 flex justify-end mr-10
                xl:col-start-5 xl:col-span-3 
                lg:col-start-4 lg:col-span-3 
                md:col-start-3 md:col-span-4 
                sm:col-start-2 sm:col-span-5 sm:mr-4 sm:text-xl" :class="{stickLogo: isScrolled, enter: !isScrolled}" >
          <a href="https://www.instagram.com/tiengtrung30giay/"><i class="fab fa-instagram text-orange-700"></i></a>
          <a href="https://www.facebook.com/tiengtrung30giay"><i class="fab fa-facebook-square text-blue-800"></i></a>
          <a href="mailto:tiengtrung30s@gmail.com"><i class="far fa-paper-plane text-indigo-700 "></i></a>
    </div>
    <div class="col-span-2 ml-10 mt-6
                lg:col-span-3
                sm:col-start-1 sm:ml-5
                xs:col-start-1 xs:ml-2" :class="{fadeOnScroll: isScrolled & true, enter: !isScrolled}">
      <label for="email"> <p class=" sm:text-xs">Tôi muốn học tiếng Trung mỗi ngày</p> </label><br/>
      <input type="text" id="fname" name="email" class="p-2 w-64 rounded-extra 
                                                        sm:w-48 sm:p-1 sm:text-xs
                                                        xs:w-32" v-model="email" placeholder="Nhập vào email của bạn....">
      <button class="sml px-2 py-1 mt-2 rounded-extra 
                      xl:w-20 xl:text-base
                      md:w-20 md:h-8 md:text-xs
                      sm:w-20 sm:px-1 sm:py-0 sm:text-xs
                      xs:w-16 xs:text-xs text-black submit" @click = "sendEmail">Xác nhận</button>
      
    </div>
    <div class="col-start-6 col-span-2
                lg:col-start-5 lg:col-span-3 
                md:col-start-5 md:w-48 md:mt-6
                sm:col-start-5 sm:w-5/6 sm:mt-24"  :class="{fadeOnScroll: isScrolled, enter: !isScrolled}">
        <img class="transform scale-x-180" src="~/assets/logo/reading-side.svg" alt="" width="320" height="300">
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
      }
    },
    methods:{
      async sendEmail(){
        this.$apollo.mutate({
          mutation: createEmail,
          variables:{
            email: this.email
          }
        }).then(() => this.email = "")
      },
    },
    mounted(){

    }
}
</script>

<style scoped>

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
  transition: all 0.3s; 
}

@media (max-width: 639px) { 
  .e-h{
    height: 17rem;
  }
  .onScroll{
    height: 6rem;
  }

  .stickLogo{
    margin-top: 10px;
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

.contact{
  transform: translateY(-5rem);
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
  transform: translateY(30px);
}

.submit:focus{
  outline: none;
}

.submit:hover{
  background-color: wheat;
}

.submit:active{
  background-color:black;
  color: white;
}

.submit{
  background-color: white;
  color: black;
}


</style>