<template>
   <NuxtLink to="/" class="blog-card">
      <div class="blog-card__image">
         <img :src="info.image" alt="">
      </div>
      <div class="blog-card__main">
         <span class="blog-card__title">{{ info.title }}</span>
         <p class="blog-card__subtitle">{{ info.subtitle }}</p>
      </div>
   </NuxtLink>

</template>
<script setup>
const props = defineProps({
   info: Object
})
</script>

<style lang="scss">
.blog-card {
   display: flex;
   flex-direction: column;
   gap: 12px;

   // .blog-card__image

   &__image {
      img {
         width: 100%;
         height: 100%;
         object-fit: cover;
      }

      @media(max-width: $mobile) {
         flex: 0 0 220px;
      }
   }

   // .blog-card__main

   &__main {
      color: $text-dark-prim;
      display: flex;
      flex-direction: column;
      gap: 2px;
      max-width: 400px
   }

   // .blog-card__title

   &__title {
      @include body-xs-medium;
   }

   // .blog-card__subtitle

   &__subtitle {
      height: 40px;
      overflow: hidden;
      text-overflow: ellipsis;
      @include body-xs-regular;

      @media(max-width: $mobile) {
         height: unset;
      }
   }
}
</style>