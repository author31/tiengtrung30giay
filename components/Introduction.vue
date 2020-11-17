<template>
  <div class="block" :class="{scroll : isScrolled, enter: !isScrolled}">
      <div class="flex justify-center mt-8">
          <div class="bg-blue-400 w-48 text-center rounded-extra 
                        xl:text-xl xl:p-2
                        lg:text-2xl lg:w-56
                        sm:text-xs">
              <p class="p-2">Lời giới thiệu</p>
          </div>
      </div>
      <div class="flex justify-center mt-8 sm:px-2">
          <div class="bg-blue-400 e-w text-center rounded-extra 
                        xl:text-xl xl:p-2 sm:text-xs
                        lg:text-2xl">
              <p class="p-4">Chúng mình là du học sinh đang học tập và sinh tại Đài Loan. Mục đích của blog này là muốn chia sẻ những kiến thức mà chúng mình góp nhặt được trong quá trình học tiếng Trung và những điều thú vị bên Đài Loan</p>
          </div>
      </div> 
      <div class="flex justify-center mt-3 mb-2 here">
          <img src="~/assets/logo/arrow.png" alt="">
      </div>
  </div>
</template>

<script>
export default {
    name: "Introduction",
    props: ["isScrolled"],
}
</script>

<style>

.e-w{
    width: 26rem;
}

.scroll{
    visibility: hidden;
    transition: all 0.1s ease-out;
}

.here{
    animation-name: pulse;
    animation-duration: 2s;
    animation-timing-function: linear;
    animation-direction: alternate-reverse;
    animation-iteration-count: infinite;
}

@keyframes pulse {
    0%, 25%, 30%, 40%, 100% { transform: translateY(0px) }
    50%, 51% { transform: translateY(10px) }

}

@media (max-width: 767px), (max-width: 639px), (max-width: 280px) {
    .here{
        visibility: hidden;
    }
}

</style>