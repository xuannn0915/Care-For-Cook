<template>
  <nav class="navbar px-lg-5 py-lg-6 px-4 py-3 position-fixed top-0 start-0 end-0">
    <div class="position-relative vw-100">
      <div
        class="container d-flex align-items-center justify-content-between px-lg-3 px-0"
      >
        <!-- logo -->
        <router-link to="/">
          <img
            src="../assets/images/logo+title.svg"
            alt="logo"
            class="navbar-brand d-lg-inline-block d-none"
          />
          <img
            src="../assets/images/logo.svg"
            alt="logo"
            class="navbar-brand d-lg-none d-inline-block"
          />
        </router-link>

        <!-- menu -->

        <ul class="d-lg-flex d-none">
          <li class="nav-item dropdown">
            <a
              class="nav-link px-4"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              關於照料理
            </a>
            <ul class="dropdown-menu mt-4" aria-labelledby="navbarDropdown">
              <li>
                <router-link to="/about_brand" class="dropdown-item"
                  >品牌秉初心</router-link
                >
              </li>
              <li>
                <router-link to="/about_quality" class="dropdown-item"
                  >品質好安心</router-link
                >
              </li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link px-4"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              好料報你知
            </a>
            <ul class="dropdown-menu mt-4" aria-labelledby="navbarDropdown">
              <li>
                <router-link to="/category_customMeal" class="dropdown-item">
                  客制照護餐
                </router-link>
              </li>
              <li>
                <router-link to="/category_highProtein" class="dropdown-item">
                  高蛋白燉飲
                </router-link>
              </li>
              <li>
                <router-link to="/category_lunchBox" class="dropdown-item">
                  機能調理餐
                </router-link>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <router-link to="/productsList" class="nav-link px-4">線上買好料</router-link>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link px-4"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              大家怎麼說
            </a>
            <ul class="dropdown-menu text-center mt-4" aria-labelledby="navbarDropdown">
              <li>
                <router-link to="/news" class="dropdown-item">健康專欄</router-link>
              </li>
              <li>
                <router-link to="/feedback" class="dropdown-item">成功案例</router-link>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <router-link to="/notes" class="nav-link px-4">料理怎麼買</router-link>
          </li>
        </ul>

        <!-- icon -->
        <ul class="icons d-flex align-items-center">
          <li>
            <router-link to="/contact">
              <span class="material-icons px-4"> maps_ugc </span>
            </router-link>
          </li>
          <li>
            <router-link to="/cart" class="px-4">
              <span class="material-icons"> local_mall </span>
            </router-link>
          </li>
          <li>
            <router-link to="/userInfo" class="px-4">
              <span class="material-icons"> person </span>
            </router-link>
          </li>
          <li>
            <a
              class="navbar-toggler border-0 d-lg-none d-inline-block py-0 px-4"
              href="#"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="material-icons"> menu </span>
            </a>
          </li>
        </ul>
      </div>
    </div>

    <!-- mobile navbar -->
    <div
      class="mobile-menu collapse d-lg-none position-absolute top-100 end-0 start-0"
      id="navbarNav"
      ref="mobileNavbar"
    >
      <div class="container vh-100">
        <ul class="text-center accordion">
          <li class="mobile-nav-item nav-item border-0 border-bottom">
            <div class="accordion-item">
              <p class="accordion-header">
                <span
                  class="nav-link text-center fs-4 py-4"
                  data-bs-toggle="collapse"
                  data-bs-target="#about"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  關於照料理
                </span>
              </p>
              <div
                id="about"
                class="accordion-collapse collapse"
                aria-labelledby="headingOne"
                data-bs-parent="#navbarNav"
              >
                <ul
                  class="accordion-body mb-3 pt-0 d-flex align-items-center justify-content-center"
                >
                  <li @click="href = this.$route.href">
                    <router-link
                      to="/about_brand"
                      class="btn btn-pill bg-primary text-white py-1 px-3 me-2"
                      >品牌秉初心</router-link
                    >
                  </li>
                  <li @click="href = this.$route.href">
                    <router-link
                      to="/about_quality"
                      class="btn btn-pill bg-primary text-white py-1 px-3"
                      >品質好安心</router-link
                    >
                  </li>
                </ul>
              </div>
            </div>
          </li>

          <li class="mobile-nav-item nav-item border-0 border-bottom">
            <div class="accordion-item">
              <p class="accordion-header">
                <span
                  class="nav-link text-center fs-4 py-4"
                  data-bs-toggle="collapse"
                  data-bs-target="#category"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  好料報你知
                </span>
              </p>
              <div
                id="category"
                class="accordion-collapse collapse"
                aria-labelledby="headingOne"
                data-bs-parent="#navbarNav"
              >
                <ul
                  class="accordion-body mb-3 pt-0 d-flex align-items-center justify-content-center"
                >
                  <li @click="href = this.$route.href">
                    <router-link
                      to="/category_customMeal"
                      class="btn btn-pill bg-primary text-white py-1 px-3 me-2"
                      >客制照護餐</router-link
                    >
                  </li>
                  <li @click="href = this.$route.href">
                    <router-link
                      to="/category_highProtein"
                      class="btn btn-pill bg-primary text-white py-1 px-3 me-2"
                      @click="href = this.$route.href"
                      >高蛋白燉飲</router-link
                    >
                  </li>
                  <li @click="href = this.$route.href">
                    <router-link
                      to="/category_lunchBox"
                      class="btn btn-pill bg-primary text-white py-1 px-3"
                      @click="href = this.$route.href"
                      >機能調理餐</router-link
                    >
                  </li>
                </ul>
              </div>
            </div>
          </li>

          <li class="nav-item border-bottom border-0" @click="href = this.$route.href">
            <router-link to="/productsList" class="nav-link fs-4 py-4"
              >線上買好料</router-link
            >
          </li>

          <li class="mobile-nav-item nav-item border-0 border-bottom">
            <div class="accordion-item">
              <p class="accordion-header">
                <span
                  class="nav-link text-center fs-4 py-4"
                  data-bs-toggle="collapse"
                  data-bs-target="#comment"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  大家怎麼說
                </span>
              </p>
              <div
                id="comment"
                class="accordion-collapse collapse"
                aria-labelledby="headingOne"
                data-bs-parent="#navbarNav"
              >
                <ul
                  class="accordion-body mb-3 pt-0 d-flex align-items-center justify-content-center"
                >
                  <li @click="href = this.$route.href">
                    <router-link
                      to="/news"
                      class="btn btn-pill bg-primary text-white py-1 px-3 me-2"
                      >健康專欄</router-link
                    >
                  </li>
                  <li @click="href = this.$route.href">
                    <router-link
                      to="/feedback"
                      class="btn btn-pill bg-primary text-white py-1 px-3"
                      >成功案例</router-link
                    >
                  </li>
                </ul>
              </div>
            </div>
          </li>

          <li class="nav-item" @click="href = this.$route.href">
            <router-link to="/notes" class="nav-link fs-4 py-4">料理怎麼買</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { Collapse } from 'bootstrap';

export default {
  data() {
    return {
      mobileNavbar: null,
      href: null,
    };
  },
  methods: {},
  watch: {
    href() {
      this.mobileNavbar = new Collapse(this.$refs.mobileNavbar, {
        toggle: true,
      });
    },
  },
  mounted() {
    this.href = null;
  },
};
</script>

<style lang="scss">
.navbar {
  background: linear-gradient(
      0deg,
      rgba(254, 227, 197, 0.1) 0%,
      rgba(254, 227, 197, 0.1) 100%
    ),
    var(--white, #fff);
  z-index: 999;

  img {
    inline-size: 163px;
  }

  .nav-item:hover {
    .nav-link {
      color: $primary;
    }
  }

  .dropdown-menu {
    min-inline-size: 112px;
  }

  .icons {
    li:nth-child(1),
    li:nth-child(2) {
      border-inline-end: 1px solid rgba(0, 0, 0, 0.1);
    }

    li:hover {
      span {
        color: $primary;
      }
    }
  }
}

.mobile-menu {
  background: linear-gradient(
      0deg,
      rgba(254, 227, 197, 0.1) 0%,
      rgba(254, 227, 197, 0.1) 100%
    ),
    var(--white, #fff);
  z-index: 998;

  a:hover,
  span:hover {
    color: $primary;
  }

  .accordion-button::after {
    content: '';
    background-image: none;
  }

  span {
    cursor: pointer;
  }
}

.active {
  color: $primary;
}

@media (max-width: 992px) {
  .navbar {
    img {
      width: 48px;
    }

    .icons {
      li:nth-child(3) {
        border-inline-end: 1px solid rgba(0, 0, 0, 0.1);
      }
    }

    .mobile-nav-item {
      li:hover {
        color: white;
        background-color: $primary;
      }
    }
  }
}
</style>
