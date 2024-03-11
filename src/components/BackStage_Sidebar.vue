<template>
  <section
    class="backstage-sidebar-desktop p-6 vh-100 bg-white
    d-inline-flex flex-column justify-content-between"
  >
    <div class="d-flex flex-column align-items-center">
      <div class="d-flex justify-content-center mb-3 w-100 sidebar-top">
        <button
          class="bg-white border-0 p-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target=".multi-collapse"
          aria-expanded="false"
          aria-controls="collapseExample"
          @click="toggleLogo"
        >
          <span class="material-icons align-bottom"> menu </span>
        </button>
        <router-link to="/">
          <img src="../assets/images/logo.svg" alt="logo"
          class="logo collapse collapse-horizontal multi-collapse"/>
        </router-link>
      </div>

      <ul class="collapse collapse-horizontal overflow-hidden multi-collapse">
        <li class="text-nowrap py-3">
          <router-link to="/orders">
            <span class="material-icons align-bottom"> space_dashboard </span>
            訂單管理
          </router-link>
        </li>
        <li class="text-nowrap py-3">
          <router-link to="products">
            <span class="material-icons align-bottom"> inventory_2 </span>
            商品管理
          </router-link>
        </li>
        <li class="text-nowrap py-3">
          <router-link to="articles">
            <span class="material-icons align-bottom"> newspaper </span>
            文章管理
          </router-link>
        </li>
        <li class="text-nowrap py-3">
          <router-link to="comments">
            <span class="material-icons align-bottom"> mark_chat_unread </span>
            留言管理
          </router-link>
        </li>
        <li class="text-nowrap py-3">
          <router-link to="contacts">
            <span class="material-icons align-bottom"> description </span>
            問卷管理
          </router-link>
        </li>
        <li class="text-nowrap py-3">
          <router-link to="upload">
            <span class="material-icons align-bottom"> image </span>
            圖片上傳
          </router-link>
        </li>
      </ul>
    </div>

    <div class="sidebar-bottom">
      <div
        class="account-info mb-4 collapse collapse-horizontal text-nowrap multi-collapse"
      >
        <h5 class="mb-1">陳子瑄</h5>
        <p class="fs-6">程式開發UIUX</p>
      </div>
      <router-link
        to="/"
        href="backstage_login.html"
        class="btn btn-outline-primary px-2 d-flex align-items-center justify-content-center"
        @click.prevent="signout"
      >
        <p class="logout text-nowrap collapse collapse-horizontal multi-collapse">登出</p>
        <span class="material-icons ms-2"> logout </span>
      </router-link>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      sidebar: null,
      sidebarStatus: false,
    };
  },
  methods: {
    signout() {
      document.cookie = 'CareForCookToken=;expires=;';
      alert('token 已清除');
      this.$router.push('/');
    },
    toggleLogo() {
      const sidebarTop = document.querySelector('.sidebar-top');
      sidebarTop.classList.toggle('justify-content-between');
      this.sidebarStatus = !this.sidebarStatus;
      this.$emit('toggleSidebar', this.sidebarStatus);
    },
  },
};
</script>

<style lang="scss">
.backstage-sidebar-desktop {
  ul {
    &.collapse:not(.show) {
      display: block;
      width: 24px;
    }
    &.collapsing {
      display: block;
      width: 24px;
    }
  }
  li:hover{
    a{
      color: $primary;
    }
  }
  img {
    width: 40px;
  }
}
.active {
  color: $primary;
}
</style>
