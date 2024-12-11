<template>
   <button class="btn" :class="{ white: white, dark: dark, light: light, circle: circle }">
      <slot />
      <ArrowIcon v-if="arrow" width="24px" height="24px" />
   </button>
</template>
<script setup>
import ArrowIcon from "@/assets/icons/arrow-right.svg"
const props = defineProps({
   white: Boolean,
   dark: Boolean,
   light: Boolean,
   arrow: Boolean,
   circle: Boolean,

})
</script>


<style lang="scss">
.btn {
   padding: 0 16px;
   height: 40px;
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 2px;
   border: 1px solid transparent;
   transition: $transition;
   @include body-xs-medium;

   &.white {
      background-color: $bg-prim;
      border-color: $border-dark-prim;
      color: $text-dark-prim;

      @media(hover:hover) {
         &:hover {
            border-color: $border-dark-sec;
         }
      }

      &:active {
         border-color: $border-dark-sec;
      }
   }

   &.light {
      background-color: $bg-light-prim;
      border-color: $bg-light-prim;
      color: $text-dark-prim;

      @media(hover:hover) {
         &:hover {
            border-color: $bg-light-sec;
            background-color: $bg-light-sec;
         }
      }

      &:active {
         border-color: $bg-light-sec;
         background-color: $bg-light-sec;
      }
   }

   &.dark {
      color: $text-light-prim;
      background-color: $bg-dark-prim;
      border-color: $bg-dark-prim;

      svg path {
         fill: $text-light-prim;
      }

      @media(hover:hover) {
         &:hover {
            border-color: $bg-dark-sec;
            background-color: $bg-dark-sec;
         }
      }

      &:active {
         border-color: $bg-dark-sec;
         background-color: $bg-dark-sec;
      }
   }

   &.circle {
      padding: 0;
      height: 40px;
      width: 40px;
      flex: 0 0 40px;
   }
}
</style>