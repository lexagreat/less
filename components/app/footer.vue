<template>
   <footer class="footer">
      <div class="container">
         <div class="footer__wrapper">
            <div class="footer__upper">
               <NuxtLink class="footer__logo" to="/">
                  <svg width="60" height="30" viewBox="0 0 60 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M10.0186 17.9735H17.7092L16.6861 25.5645H0L0.551198 0.5H9.09494L9.84234 17.8303C9.84234 17.9377 9.91283 17.9735 10.0186 17.9735ZM29.2881 17.9735L37.3442 17.8437L38.3088 25.5645H18.7754L21.7727 0.5H35.9661L36.5199 8.09095H29.2881C28.9 8.09095 28.6177 8.37739 28.6177 8.77126C28.6177 9.16514 28.9 9.45159 29.2881 9.45159H32.9345H36.5199L37.2063 16.6128H29.2881C28.9 16.6128 28.6177 16.8994 28.6177 17.2931C28.6177 17.687 28.9 17.9735 29.2881 17.9735ZM49.573 16.3663L54.2941 16.7773C57.5885 17.0587 60 18.8978 60 20.9534C60 23.5066 56.7055 25.562 52.7657 25.562H39.7234L40.164 19.6335L50.0486 20.4341H50.1505C50.7618 20.4341 50.7958 20.0663 50.7958 20.023C50.7958 19.8716 50.6599 19.6551 50.2183 19.6335L45.4294 19.2008C42.2028 18.9196 40.758 16.8892 40.758 14.8337C40.758 12.2804 43.7849 10.4161 47.7928 10.4161H58.3448L59.5862 15.5441H49.7429C49.7089 15.5441 49.6834 15.5387 49.658 15.5334C49.6325 15.5279 49.607 15.5224 49.573 15.5224C49.0976 15.5224 49.0297 15.9336 49.0297 15.9552C49.0297 16.1067 49.1654 16.3014 49.573 16.3663ZM47.178 26.4709H51.3527L51.6508 29.5H46.8799L47.178 26.4709ZM52.4865 4.26615L49.7131 4.02276C49.4737 3.98433 49.3939 3.86903 49.3939 3.77937C49.3939 3.76656 49.4338 3.52317 49.7131 3.52317C49.7331 3.52317 49.7481 3.52637 49.763 3.52958C49.7781 3.53277 49.7929 3.53597 49.8129 3.53597H55.5955L54.8663 0.5H48.6673C46.3129 0.5 44.5346 1.60379 44.5346 3.11538C44.5346 4.33233 45.3834 5.53435 47.2789 5.70088L50.0922 5.95708C50.3516 5.96988 50.4314 6.09798 50.4314 6.18765C50.4314 6.21327 50.4115 6.43104 50.0523 6.43104H49.9925L44.1858 5.95708L43.9269 9.46701H51.5887C53.9032 9.46701 55.8386 8.25007 55.8386 6.73849C55.8386 5.52153 54.4219 4.43268 52.4865 4.26615Z"
                        fill="#FDF9ED" />
                  </svg>
               </NuxtLink>
               <ul class="footer__list">
                  <li v-for="section in links" :key="section">
                     <span>{{ section.title }}</span>
                     <ul>
                        <li v-for="link in section.items" :key="link">
                           <NuxtLink :to="link.to">{{ link.name }}</NuxtLink>
                        </li>
                     </ul>
                  </li>
               </ul>
               <div class="footer__media">
                  <ul>
                     <li>
                        <NuxtLink to="/" target="_blank">
                           <IconPinterest />
                        </NuxtLink>
                     </li>
                     <li>
                        <NuxtLink to="/" target="_blank">
                           <IconInst />
                        </NuxtLink>
                     </li>
                     <li>
                        <NuxtLink to="/" target="_blank">
                           <IconTiktok />
                        </NuxtLink>
                     </li>
                     <li>
                        <NuxtLink to="/" target="_blank">
                           <IconYoutube />
                        </NuxtLink>
                     </li>
                     <li>
                        <NuxtLink to="/" target="_blank">
                           <IconTg />
                        </NuxtLink>
                     </li>
                  </ul>
                  <p>Instagram принадлежит Meta, признанной экстремистской организацией, которая запрещена в РФ</p>
               </div>
            </div>
            <div class="footer__down">
               <span>© LESs</span><span>Made by <NuxtLink to="/" target="_blank">OKTTA</NuxtLink></span>
            </div>
         </div>
      </div>
   </footer>
</template>
<script setup>
import IconPinterest from "@/assets/icons/pinterset.svg"
import IconInst from "@/assets/icons/instagram.svg"
import IconTiktok from "@/assets/icons/tiktok.svg"
import IconYoutube from "@/assets/icons/youtube.svg"
import IconTg from "@/assets/icons/telegram.svg"
const links = ref([
   {
      title: "покупателям",
      items: [
         {
            name: "как покупать",
            to: "/"
         },
         {
            name: "доставка и оплата",
            to: "/"
         },
         {
            name: "возврат",
            to: "/"
         },
         {
            name: "гарантия",
            to: "/"
         },
         {
            name: "гайд по размерам",
            to: "/"
         }
      ]
   },
   {
      title: "продавцам",
      items: [
         {
            name: "как продавать",
            to: "/"
         },

      ]
   },
   {
      title: "о компании",
      items: [
         {
            name: "о компании",
            to: "/"
         },
         {
            name: "вакансии",
            to: "/"
         }
      ]
   },
   {
      title: "связаться с нами",
      items: [
         {
            name: "вопросы и ответы",
            to: "/"
         },
         {
            name: "вопросы и ответы",
            to: "/"
         },
      ]
   },
   {
      title: "документы",
      items: [
         {
            name: "договор оферты",
            to: "/"
         },
         {
            name: "политика конфиденциальности",
            to: "/"
         },
      ]
   },
])

</script>



<style lang="scss">
.footer {
   background-color: $text-dark-prim;
   padding: 40px 0;

   // .footer__wrapper
   @media(max-width: $tablet) {
      padding: 24px 0;
   }

   &__wrapper {
      display: flex;
      flex-direction: column;
      gap: 32px;

      @media(max-width: $tablet) {
         gap: 24px;
      }
   }

   // .footer__upper

   &__upper {
      display: flex;
      justify-content: space-between;
      gap: 62px;
      flex-wrap: wrap;

      @media(max-width: $tablet) {
         flex-direction: column;
         grid-template: 24px;
      }
   }

   // .footer__logo

   &__logo {
      svg {
         width: 80px;
      }
   }

   // .footer__list

   &__list {
      width: fit-content;
      display: flex;
      gap: 40px;

      @media(max-width: $tablet) {
         flex-wrap: wrap;
         column-gap: 16px;
         row-gap: 20px;
         width: 100%;
      }

      @media(max-width: $tablet) {
         display: grid;
         gap: 20px;
         grid-template-columns: repeat(2, 1fr);
      }

      &>li {
         display: flex;
         flex-direction: column;
         gap: 10px;

         @media(max-width: $tablet) {
            flex: 1;
         }

         &>span {
            @include body-s-medium;
            color: $text-light-prim;

         }

         ul {
            display: flex;
            flex-direction: column;
            gap: 8px;

            a {
               @include body-xs-regular;
               color: $text-light-prim;
               min-height: 20px;
               display: flex;
            }
         }
      }
   }

   // .footer__media

   &__media {
      display: flex;
      flex-direction: column;
      gap: 12px;
      max-width: 172px;
      @include body-xxs-regular;
      color: $text-light-prim;

      @media(max-width: $tablet) {
         max-width: unset;
      }

      ul {
         display: flex;
         gap: 12px;
      }

      svg {
         width: 24px;

         path {
            fill: $text-light-prim;
         }
      }
   }

   // .footer__down

   &__down {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 32px;
      @include body-xs-regular;
      color: $text-light-prim;
      border-top: 1px solid $border-light-prim;

      a {
         color: $text-light-prim;
      }

      @media(max-width: $tablet) {
         padding-top: 24px;
      }
   }
}
</style>