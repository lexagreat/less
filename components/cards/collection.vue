<template>
   <NuxtLink :to="info?.to" class="collection-card">
      <div class="collection-card__image">
         <img :src="info?.image" :alt="info?.title">
      </div>
      <div class="collection-card__text">
         <span>подборка</span>
         <span>{{ info?.text }}</span>
      </div>
      <UiButton dark arrow circle />
   </NuxtLink>
</template>
<script setup>
const props = defineProps({
   info: Object
})

</script>



<style lang="scss">
.collection-card {
   position: relative;
   display: block;

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