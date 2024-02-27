<template>
  <NavbarComponent></NavbarComponent>
  <main>
    <router-view></router-view>
  </main>
  <FooterComponent></FooterComponent>
</template>

<script>
import NavbarComponent from '../../components/NavbarComponent.vue';
import FooterComponent from '../../components/FooterComponent.vue';

export default {
  components: {
    NavbarComponent,
    FooterComponent,
  },
};
</script>
