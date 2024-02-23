<template>
  <nav class="navbar px-lg-5 py-lg-6 px-4 py-3 position-fixed top-0 start-0 end-0">
    <div class="container align-items-center justify-content-between px-lg-3 px-0">
      <!-- logo -->
      <router-link to="/">
        <img src="../../public/logo+title.svg" alt="logo" class="navbar-brand
        d-lg-inline-block d-none" />
        <img src="../../public/logo.svg" alt="logo"
        class="navbar-brand d-lg-none d-inline-block" />
      </router-link>

      <!-- menu -->

      <ul class="d-lg-flex d-none">
        <li class="nav-item dropdown">
          <router-link to="">
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
                <a class="dropdown-item" href="about_team.html">品牌秉初心</a>
              </li>
              <li>
                <a class="dropdown-item" href="about_food.html">品質好安心</a>
              </li>
            </ul>
          </router-link>
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
              <a class="dropdown-item" href="product_customize.html">客制照護餐</a>
            </li>
            <li>
              <a class="dropdown-item" href="product_protien.html">高蛋白燉飲</a>
            </li>
            <li>
              <a class="dropdown-item" href="product_lunchbox.html">機能調理餐</a>
            </li>
          </ul>
        </li>
        <li class="nav-item">
          <a href="shopping_mall.html" class="nav-link px-4">線上買好料</a>
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
              <a class="dropdown-item" href="article_healthNews.html">健康專欄</a>
            </li>
            <li>
              <a class="dropdown-item" href="article_feedback.html">成功案例</a>
            </li>
          </ul>
        </li>
        <li class="nav-item">
          <a href="others_manual.html" class="nav-link px-4">料理怎麼買</a>
        </li>
      </ul>

      <!-- icon -->
      <ul class="icons d-flex align-items-center">
        <li>
          <a href="others_contact.html" class="px-4">
            <span class="material-icons"> maps_ugc </span>
          </a>
        </li>
        <li>
          <a href="shopping_shoppingBag.html" class="px-4">
            <span class="material-icons"> local_mall </span>
          </a>
        </li>
        <li>
          <a href="member_login.html" class="px-4">
            <span class="material-icons"> person </span>
          </a>
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

    <!-- mobile menu -->

    <div
      class="mobile-menu collapse d-lg-none position-absolute top-100 end-0 start-0"
      id="navbarNav"
    >
      <div class="container vh-100">
        <ul class="navbar-nav mt-4 text-center">
          <li class="mobile-nav-item nav-item dropdown border-bottom">
            <a
              class="nav-link fs-4 py-4"
              href="#about"
              data-bs-toggle="collapse"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              關於照料理
            </a>
            <div class="collapse" id="about">
              <ul class="d-flex justify-content-center mb-4">
                <li class="rounded me-2">
                  <a class="dropdown-item py-1 px-3" href="about_team.html">品牌秉初心</a>
                </li>
                <li class="rounded">
                  <a class="dropdown-item py-1 px-3" href="about_food.html">品質好安心</a>
                </li>
              </ul>
            </div>
          </li>
          <li class="mobile-nav-item nav-item dropdown border-bottom">
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
                  <a class="dropdown-item py-1 px-3" href="product_customize.html"
                    >客制照護餐</a
                  >
                </li>
                <li class="me-2 rounded">
                  <a class="dropdown-item py-1 px-3" href="product_protien.html"
                    >高蛋白燉飲</a
                  >
                </li>
                <li class="rounded">
                  <a class="dropdown-item py-1 px-3" href="product_lunchbox.html"
                    >機能調理餐</a
                  >
                </li>
              </ul>
            </div>
          </li>
          <li class="nav-item border-bottom">
            <a href="shopping_mall.html" class="nav-link fs-4 py-4">線上買好料</a>
          </li>
          <li class="mobile-nav-item nav-item dropdown border-bottom">
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
                  <a class="dropdown-item py-1 px-3" href="article_healthNews.html"
                    >健康專欄</a
                  >
                </li>
                <li class="rounded">
                  <a class="dropdown-item py-1 px-3" href="article_feedback.html"
                    >成功案例</a
                  >
                </li>
              </ul>
            </div>
          </li>
          <li class="nav-item">
            <a href="others_manual.html" class="nav-link fs-4 py-4">料理怎麼買</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

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
      a {
        color: $primary;
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
  }
}

@media (max-width: 992px) {
  .navbar{
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
