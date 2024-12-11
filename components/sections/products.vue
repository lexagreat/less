<template>
   <section class="product-section">
      <div class="container">
         <div class="product-section__wrapper">
            <h3 class="product-section__title h3">
               <slot />
            </h3>
            <div class="product-section__main">
               <Swiper :modules="[Mousewheel]" :mousewheel="{
                  enabled: true,
                  forceToAxis: true
               }" :space-between="12" slides-per-view="auto" :breakpoints="{
                  1025: {
                     slidesPerView: 4,
                     spaceBetween: 20,
                  }
               }">
                  <SwiperSlide v-for="item in items" :key="item">
                     <CardsProduct :info="item" />
                  </SwiperSlide>
               </Swiper>
            </div>
         </div>
      </div>
   </section>
</template>
<script setup>
import { Mousewheel } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/vue';
const props = defineProps({
   items: Array
})

</script>



<style lang="scss">
.product-section {
   margin-top: var(--sectionMarginMedium);

   // .product-section__wrapper

   &__wrapper {}

   // .product-section__title

   &__title {
      margin-bottom: 16px;

      @media(max-width: $mobile) {
         margin-bottom: 12px;
      }
   }

   // .product-section__main

   &__main {
      @media(max-width: $tablet) {
         .swiper {
            margin: 0 calc(-1 * var(--containerPadding));
            padding: 0 calc(1 * var(--containerPadding));
         }

         .swiper-slide {
            max-width: 362px;
         }

      }

      @media(max-width: $mobile) {
         .swiper-slide {
            max-width: 173px;
         }
      }
   }
}
</style>