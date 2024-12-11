<template>
   <section class="home-welcome">
      <div class="container">
         <div class="home-welcome__wrapper">
            <h2 class="home-welcome__title h2">
               добро пожаловать
               <span>на платформу LESs <img src="/public/img/home/title-hover2.png" alt=""></span> <br>
               <span><img src="/public/img/home/title-hover1.png" alt=""> маркетплейс</span>
               одежды и аксессуаров
            </h2>
            <UiButton dark arrow>к покупкам</UiButton>
         </div>
      </div>
   </section>
</template>
<script setup></script>



<style lang="scss">
.home-welcome {
   margin-top: var(--sectionMarginMedium);

   // .home-welcome__wrapper

   &__wrapper {
      display: flex;
      align-items: center;
      flex-direction: column;
      text-align: center;
      gap: 16px;

      @media(max-width: $mobile) {
         gap: 12px;
      }
   }

   // .home-welcome__title

   &__title {
      color: $text-dark-prim;
      line-height: 96px;

      @media(max-width: $tablet) {
         @include h3;
         line-height: 72px;
      }

      @media(max-width: $mobile) {
         @include body-s-medium;
         line-height: 40px;
      }

      span {
         position: relative;

         img {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            opacity: 0;
            transition: $transition;
         }

         &:hover {
            img {
               opacity: 1;
            }
         }

         padding: 16px 24px;
         background-color: $bg-light-prim;
         white-space: nowrap;

         @media(max-width: $tablet) {
            padding: 12px 20px;
         }

         @media(max-width: $mobile) {
            padding: 8px 12px;
         }
      }
   }
}
</style>