<template>
  <div class="wrap d-flex flex-lg-row flex-column w-100">
    <BackstageSidebar @toggle-sidebar="toggleContent"></BackstageSidebar>
    <div class="p-lg-6 p-4 backstage-content ms-auto" ref="content">
      <router-view v-if="checkSuccess"></router-view>
    </div>
  </div>
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
    toggleContent(status) {
      if (status) {
        this.$refs.content.classList.add('backstage-content-collapse');
      } else {
        this.$refs.content.classList.remove('backstage-content-collapse');
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
  padding: 0 !important;
}
.backstage-content {
  transition: all 0.5s;
}
</style>
