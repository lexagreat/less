<template>
   <main class="main ">
      <SectionsHomeHero class="dark-hero" />
      <SectionsHomeStories />
      <SectionsHomeWelcome />
      <SectionsCollection :items="styles.items">
         {{ styles.title }}
      </SectionsCollection>
      <SectionsProducts :items="news.items">
         {{ news.title }}
      </SectionsProducts>
      <SectionsCollection :items="favorites.items">
         {{ favorites.title }}
      </SectionsCollection>
      <SectionsBlog :blog="blog" />
   </main>
</template>
<script setup>
const styles = ref({
   title: "подборка по стилям",
   items: [
      {
         image: "/img/home/collection1.png",
         text: "Y2K",
         to: "/catalog/slug"
      },
      {
         image: "/img/home/collection2.png",
         text: "женственный стиль",
         to: "/catalog/slug"
      },
      {
         image: "/img/home/collection3.png",
         text: "стритстайл",
         to: "/catalog/slug"
      },
      {
         image: "/img/home/collection4.png",
         text: "куртки на теплое время",
         to: "/catalog/slug"
      },
      {
         image: "/img/home/collection5.png",
         text: "кроссовки на лето",
         to: "/catalog/slug"
      },
      {
         image: "/img/home/collection6.png",
         text: "сумки на каждый день",
         to: "/catalog/slug"
      },
   ]
})
const news = ref({
   title: "новинки",
   items: [
      {
         images: [
            "/img/product1.png",
            "/img/product2.png",
            "/img/product3.png",
         ],
         category: "туфли",
         title: "Prada Shoes",
         size: "38,5",
         price: 235000,
         oldPrice: 300000,
         slug: "tovar1",
         likes: 5,
      },
      {
         images: [
            "/img/product2.png",
            "/img/product1.png",
            "/img/product3.png",
         ],
         textcategory: "куртка",
         title: "ACNE STUDIOS",
         size: "m 44/46",
         price: 55000,
         oldPrice: 65000,
         slug: "tovar2",
         likes: 5,
      },
      {
         images: [
            "/img/product3.png",
            "/img/product1.png",
            "/img/product2.png",
         ],
         category: "сумка",
         title: "Fendi Peekaboo",
         size: "",
         price: 65000,
         oldPrice: 78000,
         slug: "tovar3",
         likes: 5,
      },
      {
         images: [
            "/img/product4.png",
            "/img/product1.png",
            "/img/product2.png",
         ],
         category: "ремень",
         title: "Hermes Belt",
         size: "m 42",
         price: 80000,
         oldPrice: 88000,
         slug: "tovar4",
         likes: 5,
      },
   ]
})
const favorites = ref({
   title: "фавориты LESs",
   items: [
      {
         image: "/img/home/collection4.png",
         text: "куртки на теплое время",
         to: "/catalog/slug"
      },
      {
         image: "/img/home/collection5.png",
         text: "кроссовки на лето",
         to: "/catalog/slug"
      },
      {
         image: "/img/home/collection6.png",
         text: "сумки на каждый день",
         to: "/catalog/slug"
      },
      {
         image: "/img/home/collection1.png",
         text: "Y2K",
         to: "/catalog/slug"
      },
      {
         image: "/img/home/collection2.png",
         text: "женственный стиль",
         to: "/catalog/slug"
      },
      {
         image: "/img/home/collection3.png",
         text: "стритстайл",
         to: "/catalog/slug"
      },
   ]
})

const blog = ref([
   {
      image: "/img/blog1.png",
      title: "как выбрать мужскую рубашку?",
      subtitle: "собрали 10 советов о том, как выбрать рубашку, которая прослужит вам долго",
   },
   {
      image: "/img/blog2.png",
      title: "топ-10 украшений",
      subtitle: "лучшие украшения от известных брендов",
   },
   {
      image: "/img/blog3.png",
      title: "сумки-инвестиции",
      subtitle: "культовые сумки, которые увеличат свою стоимость",
   },
])
</script>