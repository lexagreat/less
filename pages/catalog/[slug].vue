<template>
   <main class="main">
      <SectionsBreadcrumbs :path="path" />
      <section class="catalog-page">
         <div class="container">
            <div class="catalog-page__wrapper">
               <h1 class="catalog-page__title">платья
                  <span>(450)</span>
               </h1>
               <div class="catalog-page__main">
                  <div class="catalog-page__header">
                     <button class="catalog-page__filter">
                        <FilterIcon />
                        <span>фильтр</span>
                     </button>
                     <div class="catalog-page__actions">
                        <UiSelect class="catalog-page__sort" :settings="sortSettings"
                           @selectOption="onSelectSortOption" />
                        <button class="catalog-page__view">
                           <ViewIcon />
                        </button>
                     </div>
                  </div>
                  <div class="catalog-page__products">
                     <CardsProduct v-for="item in products" :key="item" :info="item" />
                     <CardsProduct v-for="item in products" :key="item" :info="item" />
                     <CardsProduct v-for="item in products" :key="item" :info="item" />
                  </div>
                  <div class="catalog-page__pagination">
                     <UiButton light>загрузить еще</UiButton>
                  </div>
               </div>
            </div>
         </div>
      </section>
   </main>
</template>
<script setup>
import FilterIcon from "@/assets/icons/filter.svg"
import ViewIcon from "@/assets/icons/gallery-view.svg"
const path = ref([
   {
      name: "главная",
      to: "/",
   },
   {
      name: "платья",
      to: "",
   }

])
const products = ref([
   {
      image: "/img/product1.png",
      category: "туфли",
      title: "Prada Shoes",
      size: "38,5",
      price: 235000,
      oldPrice: 300000,
      slug: "tovar1",
      likes: 5,
   },
   {
      image: "/img/product2.png",
      textcategory: "куртка",
      title: "ACNE STUDIOS",
      size: "m 44/46",
      price: 55000,
      oldPrice: 65000,
      slug: "tovar2",
      likes: 5,
   },
   {
      image: "/img/product3.png",
      category: "сумка",
      title: "Fendi Peekaboo",
      size: "",
      price: 65000,
      oldPrice: 78000,
      slug: "tovar3",
      likes: 5,
   },
   {
      image: "/img/product4.png",
      category: "ремень",
      title: "Hermes Belt",
      size: "m 42",
      price: 80000,
      oldPrice: 88000,
      slug: "tovar4",
      likes: 5,
   },
])

const sortSettings = ref({
   options: [
      {
         name: "по убыванию",
         value: 0,
         selected: true
      },
      {
         name: "по возрастанию",
         value: 1,
      },
   ],
   placeholder: "сортировка"
})
const sortOption = ref(null)
function onSelectSortOption(option) {
   sortOption.value = option
}
</script>



<style lang="scss">
.catalog-page {
   margin-top: 24px;

   @media(max-width: $tablet) {
      margin-top: 20px;
   }

   @media(max-width: $mobile) {
      margin-top: 16px;
   }

   // .catalog-page__wrapper

   &__wrapper {
      display: flex;
      flex-direction: column;
      gap: 40px;

      @media(max-width: $tablet) {
         gap: 32px;
      }

      @media(max-width: $mobile) {
         gap: 28px;
      }
   }

   // .catalog-page__title

   &__title {
      display: flex;
      align-items: center;
      gap: 6px;
      @include h3;

      @media(max-width: $mobile) {
         @include h4;
      }

      span {
         color: $text-dark-sec;
      }
   }

   // .catalog-page__main

   &__main {}

   // .catalog-page__header

   &__header {
      display: flex;
      justify-content: space-between;
      align-items: center;

      svg path {
         fill: $text-dark-prim;
      }
   }

   // .catalog-page__filter

   &__filter {
      display: flex;
      align-items: center;
      gap: 2px;
      color: $text-dark-prim;
      @include body-xs-medium;

      svg {
         width: 24px;
         height: 24px;
         flex: 0 0 24px;
      }
   }

   // .catalog-page__actions

   &__actions {
      display: flex;
      align-items: center;
      gap: 16px;
   }

   &__view {
      width: 24px;
      height: 24px;
      flex: 0 0 24px;

      svg {
         width: 100%;
         height: 100%;
      }
   }

   &__sort {
      @include body-xs-medium;

      .v-select {
         &__wrapper {
            gap: 2px;
         }

         &__icon {
            height: 24px;
         }
      }
   }

   // .catalog-page__products

   &__products {
      margin-top: 24px;
      margin-bottom: 40px;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      column-gap: 20px;
      row-gap: 40px;

      @media(max-width: $tablet) {
         grid-template-columns: repeat(2, 1fr);
         column-gap: 12px;
         row-gap: 32px;
      }

      @media(max-width: $mobile) {
         row-gap: 24px;
      }
   }

   // .catalog-page__pagination

   &__pagination {
      display: flex;
      justify-content: center;
   }
}
</style>