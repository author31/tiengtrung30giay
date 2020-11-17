<template>
  <div v-if="isScrolled" :class="{appear: isScrolled}" class="block" >
      <ShareNetwork
        class="social sm:w-6 lg:w-8 pt-0"
        network="facebook"
        :url= "fpath"
        :title ="blogTitle"><img class="social sm:w-6 lg:w-8"  src="~/assets/logo/facebook-sharing.svg" alt="" width="30px" height="30px"></ShareNetwork>
      
      <ShareNetwork
        class="social sm:w-6 lg:w-8 mt-12"
        network="email"
        :url= "fpath"
        :title ="blogTitle"><img class="social sm:w-6 lg:w-8" src="~/assets/logo/email.svg" alt="" width="30px" height="30px"></ShareNetwork>
    
    <ShareNetwork
        class="social sm:w-6 lg:w-8 mt-24"
        network="pinterest"
        :url ="fpath"
        :title ="blogTitle"><img class="social sm:w-6 lg:w-8" src="~/assets/logo/pinterest.svg" alt="" width="30px" height="30px"></ShareNetwork>
      

  </div>
</template>

<script>
import VueSocialSharing from 'vue-social-sharing'
export default {
    name: "FloatingButton",
    components:{
        VueSocialSharing
    },
    props:[
        "isScrolled",
        "path",
        "blogTitle"
    ],
    data(){
        return{
            fpath: ""
        }
    },
    mounted(){
        this.fpath = `https://tiengtrung30giay.com${this.path}`
    }
}
</script>

<style>
.social{
    position: fixed;
}

.appear{
    padding-left: 10px;
    animation-name: f-in;
    animation-duration: 0.5s;
}

@keyframes f-in {
    from {opacity: 0.5;}
    to {opacity: 1;}
}
.social:hover{
    cursor: pointer;
}

</style>