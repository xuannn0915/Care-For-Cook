<template>
  <GoToTop class="position-fixed bottom-5 end-5"></GoToTop>
  <NavbarComponent></NavbarComponent>
  <main>
    <router-view></router-view>
  </main>
  <FooterComponent></FooterComponent>
</template>

<script>
import NavbarComponent from '../../components/NavbarComponent.vue';
import FooterComponent from '../../components/FooterComponent.vue';
import GoToTop from '../../components/GoTop.vue';

export default {
  components: {
    NavbarComponent,
    FooterComponent,
    GoToTop,
  },
};
</script>
