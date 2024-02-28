<template>
  <footer class="footer">
    <div class="container">
      <div class="row pt-7 pb-lg-9 pb-6">
        <router-link to="/" class="col-2 me-auto d-lg-inline-block d-none">
          <img src="../assets/images/Footer/footer-logo.svg" alt="logo" />
        </router-link>
        <div class="col-lg-2 d-lg-block d-none">
          <router-link to="/login" class="btn btn-outline-dark d-inline-flex"
            >後台登入
            <span class="material-icons ms-2"> east </span>
          </router-link>
        </div>
        <ul
          class="footer-nav col-lg-2 col-12 d-lg-block d-flex align-items-center mb-lg-0 mb-4"
        >
          <li class="mb-lg-4 mb-0">
            <router-link to="/about_brand" class="nav-link px-lg-0 pe-3"
              >關於照料理</router-link
            >
          </li>
          <li class="mb-lg-4 mb-0">
            <router-link
              to="/notes"
              href="others_manual.html"
              class="nav-link px-lg-0 px-3"
              >料理怎麼買</router-link
            >
          </li>
          <li class="mb-lg-4 mb-0">
            <router-link to="/faq" class="nav-link px-lg-0 px-3">常見問題</router-link>
          </li>
          <li class="d-lg-none border-end-0">
            <router-link to="/login" class="nav-link px-lg-0 ps-3">後台登入</router-link>
          </li>
        </ul>
        <div class="contact-info col-lg-3 col-12">
          <p class="mb-2">
            聯絡電話：
            <a target="_blank" href="tel:02-6637-5712">02-6637-5712</a>
          </p>
          <p class="mb-4">服務時間 ：08：30 ~ 17：30</p>
          <ul class="d-flex">
            <li class="me-4">
              <a target="_blank" href="http://line.me/ti/p/@care4cook" class="d-block">
              </a>
            </li>
            <li class="me-4">
              <a target="_blank" href="https://www.facebook.com/care4cook" class="d-block">
              </a>
            </li>
            <li>
              <a target="_blank" href="https://www.instagram.com/careforcook_2010/" class="d-block">
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script></script>

<style lang="scss">
.footer {
  z-index: 100;
  background: $white;
  img {
    max-width: 144px;
  }
  .footer-nav {
    .nav-link:hover {
      color: $primary;
    }
  }

  .contact-info{
    li:nth-child(1){
      a{
        background-image: url(../assets/images/Footer/LINE.svg);
        width: 48px;
        height: 48px;
        &:hover{
          background-image: url(../assets/images/Footer/LINE_hover.svg);
        }
      }
    }
    li:nth-child(2){
      a{
        background-image: url(../assets/images/Footer/FB.svg);
        width: 48px;
        height: 48px;
        &:hover{
          background-image: url(../assets/images/Footer/FB_hover.svg);
        }
    }
    }
    li:nth-child(3){
      a{
        background-image: url(../assets/images/Footer/IG.svg);
        width: 48px;
        height: 48px;
        &:hover{
          background-image: url(../assets/images/Footer/IG_hover.svg);
        }
      }
    }
  }

  @media (max-width: 992px) {
    font-size: 14px;
    svg {
      width: 38px;
    }
    .footer-nav {
      li {
        border-right: 1px solid rgba($color: $dark, $alpha: 0.3);
      }
    }
  }
}
</style>
