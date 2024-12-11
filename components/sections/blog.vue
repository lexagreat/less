<template>
   <section class="blog-section">
      <div class="container">
         <div class="blog-section__wrapper">
            <h3 class="blog-section__title h3">наш блог</h3>
            <ul class="blog-section__list scrollbar-none">
               <li v-for="item in blog" :key="item">
                  <CardsBlog :info="item" />
               </li>
            </ul>
         </div>
      </div>
   </section>
</template>
<script setup>
const props = defineProps({
   blog: Array
})
</script>

<style lang="scss">
.blog-section {
   margin-top: var(--sectionMarginMedium);

   // .blog-section__wrapper

   &__wrapper {
      position: relative;
   }

   // .blog-section__title

   &__title {
      position: absolute;
      top: 0;
      left: 50%;
      translate: 10px 0;

      @media(max-width: $tablet) {
         position: relative;
         left: unset;
         translate: unset;
         margin-bottom: 16px;
      }

      @media(max-width: $mobile) {
         margin-bottom: 12px;
      }
   }

   // .blog-section__list

   &__list {
      display: grid;
      align-items: flex-end;
      grid-template-columns: repeat(4, 1fr);
      gap: 20px;


      &>li:nth-child(1) {
         grid-column: span 2;
      }

      @media(max-width: $tablet) {
         display: flex;
         overflow: auto;
         width: 100vw;
         margin: 0 calc(-1 * var(--containerPadding));
         padding: 0 calc(1 * var(--containerPadding));

         &>li {
            flex: 0 0 325px
         }

         &>li:nth-child(1) {
            flex: 0 0 549px
         }
      }

      @media(max-width: $mobile) {
         align-items: flex-start;

         &>li {
            flex: 0 0 325px
         }

         &>li:nth-child(1) {
            flex: 0 0 325px
         }
      }
   }
}
</style>