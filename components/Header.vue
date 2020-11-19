<template>
  <div class="header bg-blue-400 w-full e-h rounded-b-extra" :class="{onScroll : isScrolled}" >
    <div class="block xs:-mt-4">
        <img class="mx-4 py-2  sm:w-12 
                    xs:my-4" :class="{onScroll: isScrolled, enter: !isScrolled}"  src="~/assets/logo/30s.svg" alt="" width="100px"  height="100px">
        <div class="flex justify-end space-x-4 mx-16 contact 
                     sm:mx-2  sm:mt-6
                     xs:mt-0 " :class="{stickLogo: isScrolled, enter: !isScrolled}" >
          <a href="https://www.instagram.com/tiengtrung30giay/"><img class="mt-2 sm:w-6 lg:w-8" src="~/assets/logo/instagram.svg" alt="" width="30px" height="30px"></a>
          <a href="https://www.facebook.com/tiengtrung30giay"><img class="mt-2 sm:w-6 lg:w-8"  src="~/assets/logo/facebook.svg" alt="" width="30px" height="30px"></a>
          <a href="mailto:tiengtrung30s@gmail.com"><img class="mt-2 sm:w-6 lg:w-8" src="~/assets/logo/email.svg" alt="" width="30px" height="30px"></a>
        </div>
    </div>
    
    <div :class="{fadeOnScroll: isScrolled & true, enter: !isScrolled}" class="mx-4 -my-4 ">
      <label for="email"> <p class=" sm:text-base">Tôi muốn học tiếng Trung mỗi ngày</p> </label><br/>
      <input type="text" id="fname" name="email" class="p-2 w-64 rounded-extra sm:w-48  sm:p-1" v-model="email" placeholder="Nhập vào email của bạn....">
      <button class="sml px-2 py-1 mt-2 rounded-extra
                      xl:w-24
                      md:w-20 md:h-8 text-xs text-black submit" @click = "sendEmail">Xác nhận</button>
      
    </div>
    <div :class="{fadeOnScroll: isScrolled, enter: !isScrolled}" class="flex justify-end mx-4 -my-2">
        <img class="transform scale-x-180 -translate-y-20 
                    md:w-48 md:mt-12
                    sm:w-32 sm:-mx-2 sm:my-16 sm:mt-12" src="~/assets/logo/reading-side.svg" alt="" width="320" height="300">
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

.flip{
    transform: rotateY(180deg) translateY(-4rem);
}

input::-webkit-input-placeholder{
  font-family: "Rokkitt";
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
    margin-top: 2px;
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
  visibility: hidden;
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