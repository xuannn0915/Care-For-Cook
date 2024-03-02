<template>
  <!-- 第一區：banner -->
  <main
    class="index_banner py-lg-6 py-4
    d-flex flex-lg-row flex-column align-items-center position-relative h-100"
  >
    <!-- Swiper -->
    <swiper-wrapper
      :spaceBetween="16"
      :centeredSlides="true"
      :slidesPerView="2.5"
      :loop="true"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }"
      :breakpoints="{
        320: {
          slidesPerView: 1.5,
        },
        992: {
          slidesPerView: 2.5,
        },
      }"
      :modules="modules"
      class="swiper d-flex mx-lg-0"
    >
      <swiper-slide v-for="(item, index) in banner" :key="index">
        <img :src="item" alt="banner" class="rounded" />
      </swiper-slide>
    </swiper-wrapper>
    <div class="banner-wording">
      <h1 class="text-primary fw-bold mb-2 fs-lg-1 fs-2">
        <p class="comma">全方位</p>
        <p>營養照護專家</p>
      </h1>
      <p class="fs-lg-4 fs-5 mb-6">
        以健康為主，營養專業為輔，從日常餐飲到特殊照護滿足你各階段需求
      </p>
      <router-link
        to="/productsList"
        class="btn btn-primary d-inline-flex align-items-center"
      >
        線上購物
        <span class="material-icons"> east </span>
      </router-link>
    </div>
  </main>

  <!-- 第二區：painpoint -->
  <section class="painPoint py-9">
    <div class="container">
      <div class="row flex-lg-row flex-column-reverse align-items-center">
        <div class="col-lg-7">
          <img
            src="../../../public/home/painpoint.svg"
            alt="painpoint"
            class="character d-lg-block d-none"
            data-aos="fade-up"
            data-aos-duration="1500"
          />
          <img
            src="../../../public/home/painpoint_mobile.svg"
            alt="painpoint"
            class="character d-lg-none d-block"
            data-aos="fade-up"
            data-aos-duration="1500"
          />
        </div>
        <div
          class="col-lg-4 ms-auto text-lg-start text-center mb-lg-0 mb-9"
          data-aos="zoom-in-up"
          data-aos-duration="1500"
          data-aos-offset="100"
        >
          <h2 class="text-dark fs-md-2 fs-3 mb-lg-7 mb-4">你是否....</h2>
          <p class="fs-md-3 fs-5 mb-lg-7 mb-4">
            常煩惱三餐該怎麼辦？ <br />
            不知道該怎麼吃才能補充營養？<br />
            如果這正是你的心聲
          </p>
          <h2 class="text-primary fw-bold fs-md-2 fs-4">那你絕不能錯過照料理！</h2>
        </div>
      </div>
    </div>
  </section>

  <!-- 第三區：service -->
  <section class="service py-9">
    <div id="tabs" data-aos="fade-up" data-aos-duration="1000">
      <div class="container">
        <div
          class="section-title
          d-flex flex-lg-row flex-column justify-content-between align-items-center mb-lg-7 mb-6"
        >
          <div class="text-lg-start text-center mb-lg-0 mb-6">
            <h2 class="fw-bold text-primary mb-1 fs-md-2 fs-3">我們提供哪些服務</h2>
            <subtitle class="fw-bold fs-md-4 fs-5"> 專業的態度，健康的食物 </subtitle>
          </div>
          <ul class="nav nav-tabs">
            <li class="nav-item">
              <button
                class="nav-link active show d-flex align-items-center px-6 py-3"
                aria-current="page"
                data-bs-toggle="tab"
                data-bs-target="#product"
              >
                餐點介紹
              </button>
            </li>
            <li class="nav-item">
              <button
                data-bs-toggle="tab"
                data-bs-target="#company"
                class="nav-link d-flex align-items-center px-6 py-3"
              >
                公司介紹
              </button>
            </li>
          </ul>
        </div>
        <div class="tab-content">
          <swiper-wrapper
            :spaceBetween="24"
            :pagination="true"
            :active="0"
            :breakpoints="{
              375: {
                slidesPerView: 1.1,
                spaceBetween: 16,
              },
              768: {
                slidesPerView: 2.1,
              },
              992: {
                slidesPerView: 3,
              },
            }"
            :modules="modules"
            class="product tab-pane fade show active"
            id="product"
          >
            <swiper-slide class="item text-dark"
            v-for="(item, index) in service.product" :key="index">
              <div
                class="pic-box text-center mb-2 rounded overflow-hidden position-relative"
              >
                <img :src="item.imgUrl" alt="customize" />
              </div>
              <div class="d-flex align-items-center justify-content-between px-2">
                <div class="item-info">
                  <div class="title fw-bold fs-4">{{ item.title }}</div>
                  <p class="fs-5">{{ item.slogan }}</p>
                </div>
                <router-link :to="item.route">
                  <button class="btn btn-outline-primary px-3 d-flex align-items-center">
                    <span class="material-icons"> east </span>
                  </button>
                </router-link>
              </div>
            </swiper-slide>
          </swiper-wrapper>
          <swiper-wrapper
            :spaceBetween="24"
            :pagination="true"
            :breakpoints="{
              375: {
                slidesPerView: 1.1,
                spaceBetween: 16,
              },
              768: {
                slidesPerView: 2.1,
              },
              992: {
                slidesPerView: 3,
              },
            }"
            :modules="modules"
            class="company tab-pane fade"
            id="company"
          >
            <swiper-slide v-for="(item, index) in service.company" :key="index">
              <router-link
                :to="item.route"
                class="item d-inline-block position-relative"
              >
                <div class="pic-box text-center rounded overflow-hidden">
                  <img :src="item.imgUrl" alt="service" />
                </div>
                <button
                  class="btn text-white border-white
                  position-absolute end-5 d-flex align-items-center px-3 z-4"
                >
                  <span class="material-icons"> east </span>
                </button>
                <div
                  class="item-info text-white position-absolute px-6 py-4 bottom-0 start-0 z-3"
                >
                  <div class="title fw-bold fs-4">{{item.title}}</div>
                  <p>{{ item.slogan }}</p>
                </div>
              </router-link>
            </swiper-slide>
          </swiper-wrapper>
        </div>
      </div>
    </div>
  </section>

  <!-- 第四區：comment -->
  <section class="comment pt-lg-9 pt-6">
    <div class="container">
      <div class="row">
        <div class="col-lg-8">
          <swiper-wrapper
          :spaceBetween="16"
          :direction="'vertical'"
          :slidesPerView="3.2"
          :loop="true"
          :breakpoints="{
            320: {
              slidesPerView: 1.5,
            },
          }"
          :modules="modules"
          class="swiper"
          >
            <swiper-slide class="swiper-slide rounded position-relative overflow-hidden p-5"
            v-for="(item, index) in comment" :key="index" style="max-height:130px">
              <router-link to="/feedback">
                <div class="mb-2 d-flex align-items-center">
                <span class="badge fw-bold me-3">
                {{ item.tag }}
                </span>
                <p class="fw-bold">{{ item.name }} / {{ item.age }}</p>
                </div>
                <p class="truncate">
                {{ item.content }}
                </p>
                <div class="avatar d-flex align-items-center">
                  <img :src="item.imgUrl" alt="">
                  <span class="material-icons text-white fs-1 ms-2">east</span>
                </div>
              </router-link>
            </swiper-slide>
          </swiper-wrapper>
        </div>
        <div
          class="col-lg-4 d-lg-flex flex-column align-items-center d-none position-relative"
        >
        <div class="text-center mb-7">
        <h2 class="fw-bold text-primary mb-1 fs-lg-2 fs-3">其他人怎麼說</h2>
        <subtitle class="fw-bold fs-lg-4 fs-5"> 他們這樣吃，熱情推薦你！ </subtitle>
      </div>
          <img
            src="../../../public/home/其他人怎麼說＿插圖.svg"
            alt="comment illustration"
            class="illustration position-absolute start-50 translate-middle-x"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Autoplay, Pagination } from 'swiper/modules';

export default {
  data() {
    return {
      banner: [
        '../../../public/home/banner1.png',
        '../../../public/home/banner2.png',
        '../../../public/home/banner3.png',
        '../../../public/home/banner4.png',
        '../../../public/home/banner5.png',
        '../../../public/home/banner6.png',
        '../../../public/home/banner7.png',
        '../../../public/home/banner8.png',
      ],
      service: {
        product: [
          {
            imgUrl: '../../../public/home/客製照護餐.png',
            title: '客製照護餐',
            slogan: '悉心客製 x 完善修復',
            route: '/category_customMeal',
          },
          {
            imgUrl: '../../../public/home/高蛋白燉飲.png',
            title: '高蛋白燉飲',
            slogan: '全民健康 x 專業營養',
            route: '/category_highProtein',
          },
          {
            imgUrl: '../../../public/home/機能調理餐.png',
            title: '機能調理餐',
            slogan: '日常餐飲 x 營養元氣',
            route: '/category_lunchBox',
          },
        ],
        company: [
          {
            imgUrl: '../../../public/home/公司介紹-1.png',
            title: '專業團隊分工',
            slogan: '團隊精細分工，因為有各個崗位的專業，才能成就今日的美味料理',
            route: '/about_brand',
          },
          {
            imgUrl: '../../../public/home/公司介紹-2.png',
            title: '嚴選在地食材',
            slogan: '挑選具有安全認證的在地廠商，並選用無毒且友善環境的安心食材',
            route: '/about_quality',
          },
          {
            imgUrl: '../../../public/home/公司介紹-３.png',
            title: '高規品管製程',
            slogan: '在HACCP、ISO22000國際認證廠房生產，並堅守嚴格品質控管',
            route: '/about_quality',
          },
        ],
      },
      comment: [
        {
          imgUrl: '../../../public/home/avatar-1.svg',
          name: '張先生',
          age: '32歲',
          tag: '膽囊切除手術',
          content: '管體中資程！子，強法娥縷回，蛇管體中資程！子，強法娥縷回，蛇管體中資程！子，強法娥縷回，蛇管體中資程！子，強法娥縷回，蛇管體中資程！子，強法娥縷回，蛇管體中資程！子，強法娥縷回，蛇管體中資程！子，強法娥縷回，蛇管體中資程！子，強法娥縷回，蛇管體中資程！子，強法娥縷回，蛇管體中資程！子，強法娥縷回，蛇',
        },
        {
          imgUrl: '../../../public/home/avatar-2.svg',
          name: '張先生',
          age: '32歲',
          tag: '膽囊切除手術',
          content: '管體中資程！子，強法娥縷回，蛇管體中資程！子，強法娥縷回，蛇管體中資程！子，強法娥縷回，蛇管體中資程！子，強法娥縷回，蛇管體中資程！子，強法娥縷回，蛇',
        },
        {
          imgUrl: '../../../public/home/avatar-3.svg',
          name: '張先生',
          age: '32歲',
          tag: '膽囊切除手術',
          content: '管體中資程！子，強法娥縷回，蛇',
        },
        {
          imgUrl: '../../../public/home/avatar-4.svg',
          name: '張先生',
          age: '32歲',
          tag: '膽囊切除手術',
          content: '管體中資程！子，強法娥縷回，蛇',
        },
        {
          imgUrl: '../../../public/home/avatar-5.svg',
          name: '張先生',
          age: '32歲',
          tag: '膽囊切除手術',
          content: '管體中資程！子，強法娥縷回，蛇',
        },
        {
          imgUrl: '../../../public/home/avatar-6.svg',
          name: '張先生',
          age: '32歲',
          tag: '膽囊切除手術',
          content: '管體中資程！子，強法娥縷回，蛇',
        },
        {
          imgUrl: '../../../public/home/avatar-7.svg',
          name: '張先生',
          age: '32歲',
          tag: '膽囊切除手術',
          content: '管體中資程！子，強法娥縷回，蛇',
        },
      ],
    };
  },
  setup() {
    return {
      modules: [Autoplay, Pagination],
    };
  },
};
</script>

<style lang="scss">
.index_banner {
  @include bg_secondary;

  .swiper {
    z-index: 1;
    width: 70%;
    &::after {
      content: '';
      position: absolute;
      top: 0;
      z-index: 2;
      width: 100%;
      height: 100%;
      background: linear-gradient(270deg, #fffcf9 0%, rgba(255, 249, 243, 0.2) 100%);
    }
  }

  .swiper-slide img {
    max-height: 683px;
    object-fit: cover;
  }

  .banner-wording {
    z-index: 3;
    max-width: 30%;
    margin-left: -96px;
  }

  .comma::after {
    @include red_comma;
  }

  span {
    animation-duration: 1.5s;
    animation-name: arrow;
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }

  @keyframes arrow {
    0% {
      margin-left: 8px;
    }
    100% {
      margin-left: 24px;
    }
  }

  @media (max-width: 992px) {
    .swiper {
      width: 100%;
      &::after {
        background: linear-gradient(0deg, #fffdfa 0%, rgba(255, 253, 250, 0.2) 100%);
      }
    }
    .banner-wording {
      max-width: 80%;
      margin-left: 0px;
      margin-top: -96px;
    }
  }
}

.painPoint {
  @include bg_secondary;
}

.service {
  @include bg_secondary;
  .nav-tabs {
    .active::after {
      @include red_drop;
    }
  }

  h2::after {
    @include red_comma;
  }

  .company {
    .pic-box::after {
      @include mask(0%, 0);
    }

    .item-info {
      margin-bottom: -64px;
      transition: margin-bottom 0.5s;
      .title {
        margin-bottom: 16px;
        transition: margin-bottom 0.5s;
      }
    }
    .btn {
      opacity: 0;
      top: 10%;
      transition: all 0.5s;
    }

    .item:hover {
      .pic-box::after {
        @include mask(100%, 1);
      }
      .item-info {
        margin-bottom: 0;
        .title {
          margin-bottom: 0;
        }
      }
      .btn {
        opacity: 1;
        top: 5%;
        transition: all 0.5s;
      }
    }
  }

  .product {
    .pic-box::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      background: rgba(black, 25%);
      transition: opacity 0.5s;
      display: flex;
      align-items: center;
    }

    .item:hover {
      .pic-box::after {
        content: '請評估餐點營養與內容後再進行購買';
        color: $white;
        opacity: 1;
        padding: 0 48px;
      }
    }
  }

  .swiper-pagination {
    position: relative;
    margin-top: 24px;
    &-bullet {
      background-color: lighten($warning, 1%);
    }
    &-bullet-active {
      background-color: $warning;
    }
  }
}

.comment {
  @include bg_secondary;
  @include swiper-buttons;

  h2::after {
    @include red_comma;
  }

  .swiper {
    max-height: 475px;
  }

  .swiper-slide {
    background: rgba(254, 227, 197, 0.2);
    border: 1px solid transparent;
    height: 150px;

    &::before{
    content: '';
    position: absolute;
    top: 0;
    right: -100px;
    width: 30%;
    height: 100%;
    background-color: transparent;
    clip-path: polygon(30% 0, 100% 0, 100% 100%, 0 100%);
    transition: all 0.5s;
    }

    .truncate {
      color: $light;
      @include multiline-ellipsis(2);
    }

    .avatar{
      position: absolute;
      top: 0;
      right: 0;
      opacity: 0;
      width: 150px;
      transition: all 0.5s;
    }

    &:hover {
      border: 1px solid $warning;
      .badge {
        color: $primary;
        border-color: $primary;
      }
      &::before{
      right: 0;
      background-color: $warning;
      transition: all 0.5s;
      }
      .avatar{
        right: 10%;
        opacity: 1;
        transition: all 0.5s;
      }
    }
  }

  .illustration {
    width: 286px;
    bottom: -8px;
  }

  @media (max-width: 992px) {
    .swiper-slide {
      img {
        width: 48px;
        height: 48px;
      }
    }
  }
}

.home_slogan {
  padding-bottom: 124px;
  .wording::before {
    content: '';
    background-image: url('https://raw.githubusercontent.com/xuannn0915/CareForCook/32bb4620627ff5d81609d364c60615df4a545b62/assets/images/home/drop.svg');
    display: block;
    background-size: contain;
    margin-bottom: 40px;
    width: 24px;
    height: 35px;
    animation-name: drop;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }

  @keyframes drop {
    0% {
      transform: translateY(-16px);
      opacity: 0;
    }
    100% {
      transform: translateY(0px);
      opacity: 1;
    }
  }

  @include bg_wave(64px, 16px);

  @media (max-width: 992px) {
    padding-bottom: 96px;

    .wording::before {
      margin-bottom: 32px;
      width: 16px;
      height: 24px;
    }
  }
}
</style>
