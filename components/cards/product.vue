<template>
   <NuxtLink :to="'/product/' + info?.slug" class="product-card">
      <div class="product-card__image">
         <!-- <img :src="info?.image" alt=""> -->
         <Swiper @swiper="onSwiper" :spaceBetween="8" :speed="500" :modules="[Pagination]" :pagination="{
            el: paginationEl
         }">
            <SwiperSlide v-for="image in info?.images" :key="image">
               <img :src="image" alt="">
            </SwiperSlide>
         </Swiper>
         <ul class="product-card__hidden">
            <li v-for="(item, i) in info?.images" :key="i" @mouseenter="onMouseenter(i)"></li>
         </ul>
         <div class="product-card__likes">
            <span class="product-card__count">{{ info?.likes }}</span>
            <IconHeart />
         </div>
         <span class="product-card__sost">
            состояние: хорошее
         </span>
         <div class="app-pagination" ref=paginationEl></div>
      </div>
      <div class="product-card__main">
         <div class="product-card__content">
            <span class="product-card__category">{{ info?.category }}</span>
            <h4 class="product-card__title">{{ info?.title }}</h4>
            <span class="product-card__size" v-if="info?.size.length">{{ info?.size }}</span>
         </div>
         <p class="product-card__price">
            <span class="old" v-if="info?.oldPrice">{{ formatPrice(info?.oldPrice) }}</span>
            <span class="actual"> {{ formatPrice(info?.price) }}</span>
         </p>
      </div>
   </NuxtLink>
</template>
<script setup>
import { isMobile } from '#build/imports';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination } from 'swiper/modules'
import IconHeart from '@/assets/icons/heart.svg'
const props = defineProps({
   info: Object
})

const paginationEl = ref(null)
const swiper = ref(null)
const onSwiper = (s) => {
   swiper.value = s
}
const onMouseenter = (index) => {
   if (isMobile) {
      swiper.value.slideTo(index)
   }

}


</script>



<style lang="scss">
.product-card {
   overflow: hidden;
   display: flex;
   flex-direction: column;
   gap: 8px;

   @media(max-width: $mobile) {
      gap: 6px;
   }

   // .product-card__image
   .app-pagination {
      position: absolute;
      z-index: 3 !important;
      bottom: 45px !important;
      width: fit-content !important;
      left: 50% !important;
      translate: -50% 0 !important;
      top: unset !important;
      opacity: 0;
      transition: $transition;
      display: flex;
      gap: 8px;

      @media(max-width: $tablet) {
         bottom: 15px !important;
      }

   }

   .swiper-pagination-bullet {
      opacity: 1 !important;
      background: #FDF9ED66;
      z-index: 3;
      transition: $transition;
      margin: 0 !important;
      width: 6px !important;
      height: 6px !important;
      flex: 0 0 6px !important;

      &-active {
         background: #FDF9ED;
      }
   }

   &__sost {
      text-align: center;
      position: absolute;
      bottom: 60px;
      left: 50% !important;
      translate: -50% 0 !important;
      @include body-xs-medium;
      color: $text-light-prim;
      opacity: 0;
      z-index: 3;
      transition: $transition;

      @media(max-width: $mobile) {
         display: none;
      }
   }

   &__image {
      position: relative;
      aspect-ratio: 1;
      max-width: 100%;

      @media(hover:hover) {
         &:hover {
            &::after {
               opacity: 1;
            }

            .app-pagination {
               opacity: 1;
            }

            .product-card {
               &__sost {
                  opacity: 1;
               }

               &__likes {
                  color: $text-light-prim;

                  svg {
                     path {
                        fill: $text-light-prim;
                     }
                  }
               }
            }
         }
      }

      &::after {
         content: "";
         display: block;
         position: absolute;
         z-index: 2;
         top: 0;
         width: 100%;
         height: 100%;
         left: 0;
         background: #392B3052;
         opacity: 0;
         pointer-events: none;
         transition: $transition;
      }

      img {
         width: 100%;
         height: 100%;
         object-fit: cover;
      }
   }

   // .product-card__likes
   &__hidden {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      z-index: 2;
      opacity: 0;

      li {
         flex: 1;
      }


   }

   &__likes {
      display: flex;
      align-items: center;
      position: absolute;
      z-index: 3;
      top: 20px;
      right: 20px;
      @include body-xs-regular;
      color: $text-dark-prim;
      transition: 0.3s;

      @media(max-width: $mobile) {
         top: 10px;
         right: 10px;
      }

      svg {
         flex: 0 0 24px;
         width: 24px;
         height: 24px;
      }
   }

   // .product-card__count

   &__count {}

   // .product-card__main

   &__main {
      display: flex;
      flex-direction: column;
      gap: 8px;
   }

   // .product-card__content

   &__content {
      display: flex;
      flex-direction: column;
      gap: 2px;
      color: $text-dark-prim;

   }

   // .product-card__category

   &__category {
      @include body-xs-regular;
   }

   // .product-card__title

   &__title {
      @include body-xs-medium;
   }

   // .product-card__size

   &__size {
      @include body-xs-regular;
   }

   // .product-card__price

   &__price {
      display: flex;
      gap: 8px;

      .old {
         @include body-xs-regular;
         color: $text-dark-sec;
         text-decoration: line-through;
      }

      .actual {
         @include body-xs-bold;
         color: $text-dark-prim;

      }
   }
}
</style>