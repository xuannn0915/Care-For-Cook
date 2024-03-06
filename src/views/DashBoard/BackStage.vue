<template>
  <BackstageSidebar></BackstageSidebar>
  <router-view v-if="checkSuccess"></router-view>
</template>

<script>
import BackstageSidebar from '../../components/BackStage_Sidebar.vue';

const { VITE_URL } = import.meta.env;

export default {
  data() {
    return {
      checkSuccess: false,
    };
  },
  methods: {
    checkUser() {
      const token = document.cookie.replace(
        /(?:(?:^|.*;\s*)CareForCookToken\s*=\s*([^;]*).*$)|^.*$/,
        '$1',
      );
      if (token) {
        this.$http.defaults.headers.common.Authorization = `${token}`;
        const api = `${VITE_URL}/v2/api/user/check`;
        this.$http
          .post(api, { api_token: this.token })
          .then(() => {
            this.checkSuccess = true;
          })
          .catch((err) => {
            alert(err.response.data.message);
            this.$router.push('/login');
          });
      } else {
        alert('您尚未登入。');
        this.$router.push('/login');
      }
    },
  },
  components: {
    BackstageSidebar,
  },
  mounted() {
    this.checkUser();
  },
};
</script>

<style lang="scss">
body {
  padding:0 !important;
}
</style>
