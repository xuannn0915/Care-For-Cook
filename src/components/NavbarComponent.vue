<template>
  <nav class="navbar px-lg-5 py-lg-6 px-4 py-3 position-fixed top-0 start-0 end-0">
  <div class="position-relative vw-100">
    <div
      class="container d-flex align-items-center justify-content-between px-lg-3 px-0"
    >
      <!-- logo -->
      <router-link to="/">
        <img
          src="../../public/logo+title.svg"
          alt="logo"
          class="navbar-brand d-lg-inline-block d-none"
        />
        <img
          src="../../public/logo.svg"
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

          <ul
            class="mobile-menu collapse text-center vw-100 vh-100 position-absolute start-0 top-100"
            id="navbarNav"
          >
            <li
              class="border-bottom border-0"
              @mouseenter="mobileCollapse = false"
              @mouseleave="mobileCollapse = true"
            >
              <a class="nav-link fs-4 py-4" href="#about" role="button"> 關於照料理 </a>
              <div :class="{ collapse: mobileCollapse }" id="about">
                <ul class="d-flex justify-content-center mb-4">
                  <li class="rounded me-2">
                    <router-link to="/about_brand" class="dropdown-item py-1 px-3"
                      >品牌秉初心</router-link
                    >
                  </li>
                  <li class="rounded">
                    <router-link to="/about_quality" class="dropdown-item py-1 px-3"
                      >品質好安心</router-link
                    >
                  </li>
                </ul>
              </div>
            </li>
            <li class="mobile-nav-item nav-item dropdown border-0 border-bottom">
              <a
                class="nav-link fs-4 py-4"
                href="#product"
                data-bs-toggle="collapse"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                好料報你知
              </a>
              <div class="collapse" id="product">
                <ul class="d-flex justify-content-center mb-4">
                  <li class="me-2 rounded">
                    <router-link to="/category_customMeal" class="dropdown-item py-1 px-3"
                      >客制照護餐</router-link
                    >
                  </li>
                  <li class="me-2 rounded">
                    <router-link
                      to="/category_highProtein"
                      class="dropdown-item py-1 px-3"
                      >高蛋白燉飲</router-link
                    >
                  </li>
                  <li class="rounded">
                    <router-link to="/category_lunchBox" class="dropdown-item py-1 px-3"
                      >機能調理餐</router-link
                    >
                  </li>
                </ul>
              </div>
            </li>
            <li class="nav-item border-bottom border-0">
              <router-link to="/productsList" class="nav-link fs-4 py-4"
                >線上買好料</router-link
              >
            </li>
            <li class="mobile-nav-item nav-item dropdown border-bottom border-0">
              <a
                class="nav-link fs-4 py-4"
                href="#article"
                data-bs-toggle="collapse"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                大家怎麼說
              </a>
              <div class="collapse" id="article">
                <ul class="d-flex justify-content-center mb-4">
                  <li class="me-2 rounded">
                    <router-link to="/news" class="dropdown-item py-1 px-3"
                      >健康專欄</router-link
                    >
                  </li>
                  <li class="rounded">
                    <router-link to="/feedback" class="dropdown-item py-1 px-3"
                      >成功案例</router-link
                    >
                  </li>
                </ul>
              </div>
            </li>
            <li class="nav-item">
              <router-link to="/notes" class="nav-link fs-4 py-4">料理怎麼買</router-link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
  </nav>

  <!-- <div class="position-relative">
    <ul
      class="mobile-menu collapse text-center mt-5 vw-100 vh-100 position-absolute start-0"
      id="navbarNav"
    >
      <li
        class="border-bottom border-0"
        @mouseenter="mobileCollapse = false"
        @mouseleave="mobileCollapse = true"
      >
        <a class="nav-link fs-4 py-4" href="#about" role="button"> 關於照料理 </a>
        <div :class="{ collapse: mobileCollapse }" id="about">
          <ul class="d-flex justify-content-center mb-4">
            <li class="rounded me-2">
              <router-link to="/about_brand" class="dropdown-item py-1 px-3"
                >品牌秉初心</router-link
              >
            </li>
            <li class="rounded">
              <router-link to="/about_quality" class="dropdown-item py-1 px-3"
                >品質好安心</router-link
              >
            </li>
          </ul>
        </div>
      </li>
      <li class="mobile-nav-item nav-item dropdown border-0 border-bottom">
        <a
          class="nav-link fs-4 py-4"
          href="#product"
          data-bs-toggle="collapse"
          role="button"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          好料報你知
        </a>
        <div class="collapse" id="product">
          <ul class="d-flex justify-content-center mb-4">
            <li class="me-2 rounded">
              <router-link to="/category_customMeal" class="dropdown-item py-1 px-3"
                >客制照護餐</router-link
              >
            </li>
            <li class="me-2 rounded">
              <router-link to="/category_highProtein" class="dropdown-item py-1 px-3"
                >高蛋白燉飲</router-link
              >
            </li>
            <li class="rounded">
              <router-link to="/category_lunchBox" class="dropdown-item py-1 px-3"
                >機能調理餐</router-link
              >
            </li>
          </ul>
        </div>
      </li>
      <li class="nav-item border-bottom border-0">
        <router-link to="/productsList" class="nav-link fs-4 py-4"
          >線上買好料</router-link
        >
      </li>
      <li class="mobile-nav-item nav-item dropdown border-bottom border-0">
        <a
          class="nav-link fs-4 py-4"
          href="#article"
          data-bs-toggle="collapse"
          role="button"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          大家怎麼說
        </a>
        <div class="collapse" id="article">
          <ul class="d-flex justify-content-center mb-4">
            <li class="me-2 rounded">
              <router-link to="/news" class="dropdown-item py-1 px-3"
                >健康專欄</router-link
              >
            </li>
            <li class="rounded">
              <router-link to="/feedback" class="dropdown-item py-1 px-3"
                >成功案例</router-link
              >
            </li>
          </ul>
        </div>
      </li>
      <li class="nav-item">
        <router-link to="/notes" class="nav-link fs-4 py-4">料理怎麼買</router-link>
      </li>
    </ul>
  </div> -->
</template>

<script>
export default {
  data() {
    return {
      openNavbar: false,
      mobileCollapse: true,
    };
  },
  methods: {},
  mounted() {},
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

  .mobile-menu {
    position: absolute;
    left: 0;
    top: 0;
    background: linear-gradient(
        0deg,
        rgba(254, 227, 197, 0.1) 0%,
        rgba(254, 227, 197, 0.1) 100%
      ),
      var(--white, #fff);
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
