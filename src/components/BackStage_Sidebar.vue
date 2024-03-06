<template>
  <section class="backstage-sidebar-desktop p-6 vh-100 border
  d-inline-flex flex-column justify-content-between">
  <div class="d-flex">
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
      <router-link to="/">
        <span class="material-icons py-3"> space_dashboard </span>
      </router-link>
      <router-link to="/">
        <span class="material-icons py-3"> inventory_2 </span>
      </router-link>
      <router-link to="/">
        <span class="material-icons py-3"> newspaper </span>
      </router-link>
      <router-link to="/">
        <span class="material-icons py-3"> mark_chat_unread </span>
      </router-link>
      <router-link to="/">
        <span class="material-icons py-3"> description </span>
      </router-link>
    </div>

    <ul class="collapse collapse-horizontal ms-4" id="sidebar">
      <li style="height: 36px" class="mb-2">
        <img src="../assets/images/logo.svg" alt="logo" class="d-block pb-3 ms-auto" />
      </li>
      <li class="text-nowrap py-3">
        <router-link to="/"> 訂單管理 </router-link>
      </li>
      <li class="text-nowrap py-3">
        <router-link to="/"> 訂單管理 </router-link>
      </li>
      <li class="text-nowrap py-3">
        <router-link to="/"> 訂單管理 </router-link>
      </li>
      <li class="text-nowrap py-3">
        <router-link to="/"> 訂單管理 </router-link>
      </li>
      <li class="text-nowrap py-3">
        <router-link to="/"> 訂單管理 </router-link>
      </li>
    </ul>
  </div>

    <div class="sidebar-bottom collapse collapse-horizontal" id="sidebar">
      <div class="account-info mb-4 text-nowrap">
        <h5 class="mb-1">陳子瑄</h5>
        <p class="fs-6">A4322 資訊單位</p>
      </div>
      <a
        href="backstage_login.html"
        class="btn btn-outline-primary d-flex align-items-center justify-content-end logout-btn"
      >
        <p class="logout text-nowrap">登出</p>
        <span class="material-icons ms-2"> logout </span>
      </a>
    </div>
  </section>
</template>

<script></script>

<style lang="scss">
.backstage-sidebar-desktop {
  img {
    width: 40px;
  }

  li:hover {
    a {
      color: $primary;
    }
  }
}

.active {
  color: $primary;
}
</style>
