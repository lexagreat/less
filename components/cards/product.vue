<template>
   <NuxtLink :to="'/product/' + info?.slug" class="product-card">
      <div class="product-card__image">
         <img :src="info?.image" alt="">
         <div class="product-card__likes">
            <span class="product-card__count">{{ info?.likes }}</span>
            <IconHeart />
         </div>
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
import IconHeart from '@/assets/icons/heart.svg'
const props = defineProps({
   info: Object
})
</script>



<style lang="scss">
.product-card {
   display: flex;
   flex-direction: column;
   gap: 8px;

   @media(max-width: $mobile) {
      gap: 6px;
   }

   // .product-card__image

   &__image {
      position: relative;
      aspect-ratio: 1;

      img {
         width: 100%;
         height: 100%;
         object-fit: cover;
      }
   }

   // .product-card__likes

   &__likes {
      display: flex;
      align-items: center;
      position: absolute;
      top: 20px;
      right: 20px;
      @include body-xs-regular;
      color: $text-dark-prim;

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