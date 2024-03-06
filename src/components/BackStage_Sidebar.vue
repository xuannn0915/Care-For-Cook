<template>
  <section
    class="backstage-sidebar-desktop p-6 vh-100 border
    d-inline-flex flex-column justify-content-between"
  >
    <div class="d-flex justify-content-center">
      <div class="d-flex flex-column align-items-center">
        <button
          class="bg-white border-0 p-0 mb-2"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#sidebar"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          <span class="material-icons pb-3"> menu </span>
        </button>
        <ul @mouseover="openSidebar">
          <li>
            <router-link to="/orders">
              <span class="material-icons py-3"> space_dashboard </span>
            </router-link>
          </li>
          <li>
            <router-link to="products">
              <span class="material-icons py-3"> inventory_2 </span>
            </router-link>
          </li>
          <li>
            <router-link to="articles">
              <span class="material-icons py-3"> newspaper </span>
            </router-link>
          </li>
          <li>
            <router-link to="comments">
              <span class="material-icons py-3"> mark_chat_unread </span>
            </router-link>
          </li>
          <li>
            <router-link to="contacts">
              <span class="material-icons py-3"> description </span>
            </router-link>
          </li>
        </ul>
      </div>

      <ul class="collapse collapse-horizontal ms-4" id="sidebar">
        <li style="height: 36px" class="mb-2">
          <img src="../assets/images/logo.svg" alt="logo" class="d-block pb-3 ms-auto" />
        </li>
        <li class="text-nowrap py-3">
          <router-link to="/orders"> 訂單管理 </router-link>
        </li>
        <li class="text-nowrap py-3">
          <router-link to="products"> 商品管理 </router-link>
        </li>
        <li class="text-nowrap py-3">
          <router-link to="articles"> 文章管理 </router-link>
        </li>
        <li class="text-nowrap py-3">
          <router-link to="comments"> 留言管理 </router-link>
        </li>
        <li class="text-nowrap py-3">
          <router-link to="contacts"> 問卷管理 </router-link>
        </li>
      </ul>
    </div>

    <div class="sidebar-bottom">
      <div
        class="account-info mb-4 collapse collapse-horizontal text-nowrap"
        id="sidebar"
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
        <p class="logout text-nowrap collapse collapse-horizontal" id="sidebar">登出</p>
        <span class="material-icons ms-2"> logout </span>
      </router-link>
    </div>
  </section>
</template>

<script>
import { Collapse } from 'bootstrap';

export default {
  data() {
    return {
      sidebar: null,
    };
  },
  methods: {
    signout() {
      document.cookie = 'CareForCookToken=;expires=;';
      alert('token 已清除');
      this.$router.push('/');
    },
    openSidebar() {
      this.sidebar.collapse('show');
    },
    closeSidebar() {
      this.sidebar.collapse('hide');
    },
  },
  mounted() {
    this.sidebar = new Collapse(document.getElementById('sidebar'));
    console.log(this.sidebar);
  },
};
</script>

<style lang="scss">
.backstage-sidebar-desktop {
  img {
    width: 40px;
  }
}

.active {
  color: $primary;
}
</style>
