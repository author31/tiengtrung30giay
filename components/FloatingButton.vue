<template>
  <div v-if="isScrolled" :class="[isScrolled? 'appear' : 'social']" class="block" >
    <ShareNetwork
        class=" sm:w-6 lg:w-8 pt-0"
        network="facebook"
        :url= "fpath"
        :title ="blogTitle"><i class="fab fa-facebook-square text-blue-800"></i></ShareNetwork>
    
    <ShareNetwork
        class=" sm:w-6 lg:w-8 mt-12"
        network="twitter"
        :url= "fpath"
        :title ="blogTitle"><i class="fab fa-twitter-square text-blue-500"></i></ShareNetwork>
    
    <ShareNetwork
        class=" sm:w-6 lg:w-8 mt-24"
        network="pinterest"
        :url ="fpath"
        :title ="blogTitle"><i class="fab fa-pinterest-square text-red-600"></i></ShareNetwork>
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

<style scoped>

@media (max-width: 759px) {
    .fab{
        display: block;
        font-size:40px;
    }

    .appear{
        right: 2%;
        position: fixed;
        animation-name: f-in;
        animation-duration: 0.5s;
    }

    @keyframes f-in {
        from {opacity: 0.5;  transform:  translateX(100px);}
        to {opacity: 1;}
    }
}

@media (min-width: 1279px), (min-width: 1023px), (min-width: 767px){
    .fab{
        display: block;
        font-size: 40px;
    }

    .social{
        visibility: hidden;
    }

    .appear{
        visibility: visible;
        position: fixed;
        padding-left: 10px;
        animation-name: f-in;
        animation-duration: 0.5s;
    }

    @keyframes f-in {
        from {opacity: 0.5;  transform:  translateX(-100px);}
        to {opacity: 1;}
    }

    .social:hover{
        cursor: pointer;
    }

}
</style>