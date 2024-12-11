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