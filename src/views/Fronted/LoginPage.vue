<!-- eslint-disable max-len -->
<template>
  <main class="backstage_login bg-white row gx-0 position-relative">
    <div class="bg-image col-md-6"></div>
    <div class="login bg-white col-md-6 my-auto">
      <div class="row gx-0">
        <div class="col-8 mx-auto">
          <h3 class="text-primary fw-bold mb-6">後台登入</h3>
          <form action="#" @keyup.enter="login">
            <div class="mb-6">
              <label for="login_account" class="form-label">帳號</label>
              <input
                type="text"
                class="form-control"
                id="login_account"
                placeholder="請輸入信箱"
                v-model="username"
                required
              />
              <div class="invalid-feedback">請輸入帳號</div>
            </div>
            <div class="mb-6">
              <label for="login_password" class="form-label">密碼</label>
              <input
                type="password"
                class="form-control"
                id="login_password"
                placeholder="請輸入密碼"
                v-model="password"
                required
              />
            </div>
            <div class="login_button d-flex flex-column align-items-center">
              <router-link to="/admin" class="btn btn-outline-primary mb-3 w-100" @click="login">
                登入
              </router-link>
              <router-link to="/" class="fs-6">回前台首頁</router-link>
            </div>
          </form>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
const { VITE_URL } = import.meta.env;

export default {
  data() {
    return {
      username: '',
      password: '',
      alert: null,
    };
  },
  methods: {
    login() {
      const { username } = this;
      const { password } = this;
      const user = {
        username,
        password,
      };
      this.$http
        .post(`${VITE_URL}/admin/signin`, user)
        .then((res) => {
          const { expired, token } = res.data;
          document.cookie = `CareForCookToken = ${token}; expires = ${new Date(expired)}`;
          alert(res.data.message);
          this.$router.push('/orders');
        })
        .catch((err) => {
          if (this.username === '' || this.password === '') {
            alert('欄位不可為空白！');
          } else {
            alert(`${err.response.data.message},請輸入正確帳號密碼`);
          }
        });
    },
  },
};
</script>

<style lang="scss">
body{
  padding: 0 !important;
}

.backstage_login {
  .bg-image {
    background-image: url('https://raw.githubusercontent.com/xuannn0915/CareForCook/fba05473de4abb168280e01669eba048c6fdb609/assets/images/backstage/login-bg.svg');
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
  }

  @media (max-width: 992px) {
    .bg-image {
      position: absolute;
      top: 0;
      width: 100%;
      background-position: center center;
    }
    .login {
      width: 100%;
      z-index: 1;
      border-radius: 0 0 10px 10px;
      padding: 24px 16px;
      box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.25);
    }
  }
}
</style>
