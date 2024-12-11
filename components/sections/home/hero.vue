<template>
   <section class="home-hero">
      <NuxtLink to="/catalog/slug">
         <div class="home-hero__image">
            <img src="/img/home/hero-left.png" alt="">
            <p>
               <span>каталог</span>
               <span>женский</span>
            </p>
         </div>
      </NuxtLink>
      <NuxtLink to="/catalog/slug">
         <div class="home-hero__image">
            <img src="/img/home/hero-right.png" alt="">
            <p>
               <span>каталог</span>
               <span>мужской</span>
            </p>
         </div>
      </NuxtLink>
   </section>
</template>
<script setup>
</script>

<style lang="scss">
.home-hero {
   margin-top: calc(-1 * var(--headerHeight));
   display: grid;
   grid-template-columns: repeat(2, 1fr);
   width: 100%;

   @media(max-width: $mobile) {
      grid-template-columns: 1fr;
   }

   a {
      color: $text-light-prim;

      &:nth-child(1) {
         p {
            left: calc((100vw - 1360px) / 2);

            @media(max-width: 1440px) {
               left: var(--containerPadding);
            }
         }
      }
   }

   // .home-hero__image

   &__image {
      position: relative;

      @media(max-width: $tablet) {
         height: 400px;
      }

      @media(max-width: $mobile) {
         height: 202px;
      }


      img {
         width: 100%;
         height: 100%;
         object-fit: cover;
      }

      p {
         position: absolute;
         bottom: var(--containerPadding);
         left: var(--containerPadding);
         display: flex;
         flex-direction: column;
         gap: 0;

         span {
            &:nth-child(1) {
               @include body-xs-regular-italic;
            }

            &:nth-child(2) {
               @include body-xs-medium;

            }
         }
      }
   }
}
</style>