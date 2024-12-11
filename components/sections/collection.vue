<template>
   <section class="collection-section">
      <div class="container">
         <div class="collection-section__wrapper">
            <h3 class="collection-section__title h3">
               <slot />
            </h3>
            <div class="collection-section__main">

               <Swiper :modules="[Mousewheel]" :mousewheel="{
                  enabled: true,
                  forceToAxis: true
               }" :space-between="12" slides-per-view="auto" :breakpoints="{
                  1025: {
                     slidesPerView: 3,
                     spaceBetween: 20,
                  }
               }">
                  <SwiperSlide v-for="item in items" :key="item">
                     <CardsCollection :info="item" />
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
.collection-section {
   margin-top: var(--sectionMarginMedium);

   // .collection-section__wrapper

   &__wrapper {}

   // .collection-section__title

   &__title {
      margin-bottom: 16px;

      @media(max-width: $mobile) {
         margin-bottom: 12px;
      }
   }

   // .collection-section__main

   &__main {
      .swiper {
         @media(max-width: $tablet) {
            margin: 0 calc(-1 * var(--containerPadding));
            padding: 0 calc(1 * var(--containerPadding));
         }
      }

      .swiper-slide {
         height: auto;
         width: fit-content;
      }
   }
}
</style>