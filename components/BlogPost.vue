<template>
  <nuxt-link :to="'/post/' + id">
    <div class="bg-teal-200 w-64 h-64 p-2 mb-10 rounded-extra
                  xl:w-56
                  sm:w-32 sm:text-xs 
                  xs:w-32 xs:h-32 post">
        <p class="text-center p-2">{{post}}</p>
    </div>
  </nuxt-link>
</template>

<script>
export default {
    name: "BlogPost",
    props: ["post", "id"],
}
</script>

<style>
a:hover {
    text-decoration: none;
    color: black;
}


.post:hover{
    box-shadow: 10px 5px 2px grey;
    transform: scale(1.07);
    transition: all 0.3s ease-in;
}



</style>