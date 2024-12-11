<template>
   <section class="breadcrumbs">
      <div class="container">
         <ul class="breadcrumbs__list scrollbar-none">
            <li v-for="item in path">
               <NuxtLink :to="item.to">{{ item.name }}</NuxtLink>
            </li>
         </ul>
      </div>
   </section>
</template>
<script setup>
const props = defineProps({
   path: Array
})

</script>



<style lang="scss">
.breadcrumbs {

   // .breadcrumbs__list

   &__list {
      display: flex;
      align-items: center;
      gap: 4px;

      li:last-child {
         a {
            color: $text-dark-prim;

            &::after {
               display: none;
            }
         }
      }

      a {
         display: flex;
         align-items: center;
         gap: 4px;
         @include body-xs-regular;
         color: $text-dark-tert;

         &::after {
            content: "/";
            @include body-xs-regular;
            color: $text-dark-tert;
         }

      }
   }
}
</style>