<template>
   <section class="collection-section">
      <div class="container">
         <div class="collection-section__wrapper">
            <h3 class="collection-section__title h3">
               <slot />
            </h3>
            <div class="collection-section__main">

               <Swiper :space-between="12" slides-per-view="auto" :breakpoints="{
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

.collection-card {
   position: relative;

   .btn {
      bottom: 20px;
      right: 20px;
      position: absolute;

      @media(max-width: $mobile) {
         bottom: 16px;
         right: 16px;
      }
   }

   // .collection-card__image

   &__image {
      height: 330px;
      position: relative;
      z-index: -1;

      @media(max-width: $tablet) {
         height: 248px;
      }

      img {
         width: 100%;
         height: 100%;
         object-fit: cover;
      }
   }

   // .collection-card__text

   &__text {
      color: $text-dark-prim;
      position: absolute;
      top: 20px;
      left: 20px;
      display: flex;
      flex-direction: column;

      @media(max-width: $mobile) {
         top: 16px;
         left: 16px;
      }

      span {
         &:nth-child(1) {
            @include body-xs-regular-italic;
         }

         &:nth-child(2) {
            @include body-xs-medium;

         }
      }
   }

   @media(max-width: $tablet) {
      max-width: 362px;
   }
}
</style>