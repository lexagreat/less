<template>
   <div class="header" :class="{ dark: isDark }">
      <div class="container">
         <div class="header__wrapper">
            <div class="header__left">
               <div class="header__burger" :class="{ active: isBurgerOpen }" @click="toggleBurger">
                  <span></span>
               </div>
               <IconSearch />
               <ul class="header__links">
                  <li v-for="link in links" :key="link">
                     <NuxtLink :to="link.to">{{ link.name }}</NuxtLink>
                  </li>
               </ul>
            </div>
            <div class="header__logo">
               <NuxtLink to="/">
                  <svg width="60" height="30" viewBox="0 0 60 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M10.0186 17.9735H17.7092L16.6861 25.5645H0L0.551198 0.5H9.09494L9.84234 17.8303C9.84234 17.9377 9.91283 17.9735 10.0186 17.9735ZM29.2881 17.9735L37.3442 17.8437L38.3088 25.5645H18.7754L21.7727 0.5H35.9661L36.5199 8.09095H29.2881C28.9 8.09095 28.6177 8.37739 28.6177 8.77126C28.6177 9.16514 28.9 9.45159 29.2881 9.45159H32.9345H36.5199L37.2063 16.6128H29.2881C28.9 16.6128 28.6177 16.8994 28.6177 17.2931C28.6177 17.687 28.9 17.9735 29.2881 17.9735ZM49.573 16.3663L54.2941 16.7773C57.5885 17.0587 60 18.8978 60 20.9534C60 23.5066 56.7055 25.562 52.7657 25.562H39.7234L40.164 19.6335L50.0486 20.4341H50.1505C50.7618 20.4341 50.7958 20.0663 50.7958 20.023C50.7958 19.8716 50.6599 19.6551 50.2183 19.6335L45.4294 19.2008C42.2028 18.9196 40.758 16.8892 40.758 14.8337C40.758 12.2804 43.7849 10.4161 47.7928 10.4161H58.3448L59.5862 15.5441H49.7429C49.7089 15.5441 49.6834 15.5387 49.658 15.5334C49.6325 15.5279 49.607 15.5224 49.573 15.5224C49.0976 15.5224 49.0297 15.9336 49.0297 15.9552C49.0297 16.1067 49.1654 16.3014 49.573 16.3663ZM47.178 26.4709H51.3527L51.6508 29.5H46.8799L47.178 26.4709ZM52.4865 4.26615L49.7131 4.02276C49.4737 3.98433 49.3939 3.86903 49.3939 3.77937C49.3939 3.76656 49.4338 3.52317 49.7131 3.52317C49.7331 3.52317 49.7481 3.52637 49.763 3.52958C49.7781 3.53277 49.7929 3.53597 49.8129 3.53597H55.5955L54.8663 0.5H48.6673C46.3129 0.5 44.5346 1.60379 44.5346 3.11538C44.5346 4.33233 45.3834 5.53435 47.2789 5.70088L50.0922 5.95708C50.3516 5.96988 50.4314 6.09798 50.4314 6.18765C50.4314 6.21327 50.4115 6.43104 50.0523 6.43104H49.9925L44.1858 5.95708L43.9269 9.46701H51.5887C53.9032 9.46701 55.8386 8.25007 55.8386 6.73849C55.8386 5.52153 54.4219 4.43268 52.4865 4.26615Z"
                        fill="#FDF9ED" />
                  </svg>
               </NuxtLink>
            </div>
            <div class="header__right">
               <ul class="header__icons">
                  <li>
                     <button>
                        <IconProfile />
                     </button>
                  </li>
                  <li class="header__icons_desktop">
                     <button>
                        <IconHeart />
                     </button>
                  </li>
                  <li>
                     <button>
                        <IconCart />
                     </button>
                  </li>
                  <li class="header__icons_desktop">
                     <button>
                        <IconNotification />
                     </button>
                  </li>
               </ul>
               <UiButton :light="!isDark" :dark="isDark">
                  продать
               </UiButton>
            </div>
         </div>
      </div>
   </div>
</template>
<script setup>
import { bodyLock, bodyUnlock } from '~/utils/bodyLocker'
import IconSearch from '@/assets/icons/search.svg'
import IconProfile from '@/assets/icons/user.svg'
import IconHeart from '@/assets/icons/heart.svg'
import IconCart from '@/assets/icons/cart.svg'
import IconNotification from '@/assets/icons/notification.svg'
const isBurgerOpen = ref(false)
const toggleBurger = () => {
   isBurgerOpen.value ? closeBurger() : openBurger()
}
const openBurger = () => {
   isBurgerOpen.value = true
   bodyLock()
}
const closeBurger = () => {
   isBurgerOpen.value = false
   bodyUnlock()
}
const isDark = ref(false)
const links = ref([
   {
      name: "женщины",
      to: "/"
   },
   {
      name: "мужчины",
      to: "/"
   },
   {
      name: "дети",
      to: "/"
   },
   {
      name: "товары для дома",
      to: "/"
   },
   {
      name: "бренды",
      to: "/"
   },
])
const onScroll = () => {
   const hero = document.querySelector('.dark-hero');
   if (!hero) return
   let heroHeight = hero.clientHeight;
   if (window.scrollY > heroHeight) {
      isDark.value = true
   } else {
      isDark.value = false

   }
}
const makeHeroDark = () => {
   if (!document.querySelector('.dark-hero')) {
      isDark.value = true
      return
   }
   window.addEventListener('scroll', onScroll)

   onScroll()
}
const route = useRoute()
watch(() => route.params, () => {
   makeHeroDark()
})
onBeforeRouteLeave(() => {
   window.removeEventListener('scroll', onScroll)
})
onMounted(() => {
   makeHeroDark()
})
</script>


<style lang="scss">
.header {
   &.dark {
      background: white;

      .header__left,
      .header__right,
      .header__logo {
         svg path {
            fill: $text-dark-prim;
         }
      }

      .header__links a {
         color: $text-dark-prim;
      }

      .header__burger {

         span,
         &::after,
         &::before {
            background: $text-dark-prim;
         }
      }
   }

   transition: $transition;
   position: fixed;
   z-index: 100;
   top: 0;
   left: 0;
   right: 0;

   &__burger {
      display: none;
      flex: 0 0 24px;
      height: 24px;
      width: 24px;

      @media(max-width: $tablet) {
         display: block;
         position: relative;

         span,
         &::before,
         &::after {
            content: "";
            display: block;
            width: 18px;
            height: 2px;
            position: absolute;
            background-color: $text-light-prim;
            left: 50%;
            translate: -50% 0;
            transition: $transition;
         }

         &::before {
            top: 4px;
         }

         &::after {
            bottom: 4px;
         }

         span {
            top: 50%;
            translate: -50% -50%;
         }

         &.active {
            span {
               opacity: 0;
            }

            &::after {
               rotate: -45deg;
               translate: -50% -380%;
            }

            &::before {
               translate: -47% 315%;
               rotate: 45deg;
            }
         }
      }
   }

   svg {
      --size: 24px;
      width: var(--size);
      height: var(--size);
      flex: 0 0 var(--size);

      path {
         fill: $text-light-prim;
      }

   }

   &__wrapper {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: var(--headerHeight);
   }

   // .header__left

   &__left {
      display: flex;
      align-items: center;
      gap: 20px;

      @media(max-width: 1440px) {
         gap: calc(10px + 10 * ((100vw - 1024px) / (1440 - 1024)));
      }

      @media(max-width: $tablet) {
         gap: 12px;
      }
   }

   // .header__links

   &__links {
      display: flex;
      align-items: center;
      gap: 20px;

      @media(max-width: 1440px) {
         gap: calc(10px + 10 * ((100vw - 1024px) / (1440 - 1024)));
      }

      @media(max-width: $tablet) {
         display: none;
      }

      a {
         @include body-xs-medium;
         color: $text-light-prim;

         @media(max-width: 1440px) {
            font-size: calc(14px + 2 * ((100vw - 1024px) / (1440 - 1024)));
         }
      }
   }

   // .header__logo

   &__logo {
      position: absolute;
      top: 50%;
      left: 50%;
      translate: -50% -50%;
      width: 60px;

      svg {
         width: 100%;
         height: 100%;
      }
   }

   // .header__right

   &__right {
      display: flex;
      align-items: center;
      gap: 32px;

      @media(max-width: $tablet) {
         gap: 24px;
      }

      @media(max-width: 768px) {
         gap: calc(12px + 12 * ((100vw - 568px) / (768 - 568)));
      }

      @media(max-width: $mobile) {
         &>.btn {
            display: none;
         }
      }
   }

   // .header__icons

   &__icons {
      display: flex;
      align-items: center;
      gap: 20px;

      @media(max-width: 1440px) {
         gap: calc(10px + 10 * ((100vw - 1024px) / (1440 - 1024)));
      }

      @media(max-width: $tablet) {
         gap: 12px;
      }

      @media(max-width: 768px) {
         gap: calc(6px + 6 * ((100vw - 568px) / (768 - 568)));
      }

      @media(max-width: $mobile) {
         gap: 12px;

         &_desktop {
            display: none;
         }
      }
   }
}
</style>