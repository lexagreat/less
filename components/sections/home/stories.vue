<template>
   <section class="home-stories">
      <div class="container">
         <div class="home-stories__wrapper">
            <ul class="home-stories__list scrollbar-none">
               <li v-for="item in stories" :key="item">
                  <button class="home-story">
                     <div class="home-story__image circle">
                        <img :src="item.img" alt="">
                     </div>
                     <span v-html="item.name">
                     </span>
                  </button>
               </li>
            </ul>
         </div>
      </div>
   </section>
</template>
<script setup>
const stories = ref([
   {
      name: "скидки",
      img: "/img/home/stories1.png"
   },
   {
      name: "обувь <br> на весну",
      img: "/img/home/stories2.png"
   },
   {
      name: "новинки",
      img: "/img/home/stories3.png"
   },
   {
      name: "подарки <br> для девушек",
      img: "/img/home/stories4.png"
   },
   {
      name: "кольца <br> и браслеты",
      img: "/img/home/stories5.png"
   },
   {
      name: "платья",
      img: "/img/home/stories6.png"
   },
   {
      name: "брюки",
      img: "/img/home/stories7.png"
   },
])
</script>


<style lang="scss">
.home-stories {
   margin-top: var(--sectionMarginSmall);

   // .home-stories__wrapper

   &__wrapper {}

   // .home-stories__list

   &__list {
      display: flex;
      justify-content: center;
      gap: 24px;

      @media(max-width: $tablet) {
         gap: 16px;

         width: 100vw;
         justify-content: flex-start;
         overflow: auto;
         margin: 0 calc(-1 * var(--containerPadding));
         padding: 0 calc(1 * var(--containerPadding));
      }

      @media(max-width: $mobile) {
         gap: 4px;
      }
   }
}

.home-story {
   padding: 0 10px;
   display: flex;
   flex-direction: column;

   gap: 4px;
   align-items: center;
   text-align: center;
   color: $text-dark-prim;
   @include body-xs-medium;

   // .home-story__image
   &__image {
      --size: 80px;
      padding: 4px;
      border: 1px solid $border-dark-sec;

      img {
         width: 100%;
         height: 100%;
         object-fit: cover;
         border-radius: 50%;
      }
   }
}
</style>