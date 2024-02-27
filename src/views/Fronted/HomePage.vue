<template>
  <main
    class="index_banner py-lg-6 py-4
    d-flex flex-lg-row flex-column align-items-center position-relative h-100"
  >
    <!-- Swiper -->
    <swiper
      :slides-per-view="3"
      :space-between="50"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide>Slide 1</swiper-slide>
      <swiper-slide>Slide 2</swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
      ...
    </swiper>
    <div class="banner-wording">
      <h1 class="text-primary fw-bold mb-2 fs-lg-1 fs-2">
        <p class="comma">全方位</p>
        <p>營養照護專家</p>
      </h1>
      <p class="fs-lg-4 fs-5 mb-6">
        以健康為主，營養專業為輔，從日常餐飲到特殊照護滿足你各階段需求
      </p>
      <a
        href="shopping_mall.html"
        class="btn btn-primary d-inline-flex align-items-center"
      >
        線上購物
        <span class="material-symbols-rounded"> east </span>
      </a>
    </div>
  </main>
</template>

<script>
export default {
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
    };
    return {
      onSwiper,
      onSlideChange,
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
  .character {
    max-width: 448px;
    margin-left: 72px;
  }
  .bubble {
    max-width: 300px;
  }
  @media (max-width: 992px) {
    .character {
      width: 233px;
      margin-left: 40px;
    }
    .bubble {
      width: 150px;
    }
  }
}

.service {
  @include bg_secondary;
  .active::after {
    @include red_drop;
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
        content: '餐點非完全符合每個客戶狀況，請評估自身狀況與餐點營養成分後再進行購買';
        color: $white;
        opacity: 1;
        padding: 0 48px;
      }
    }
  }

  .swiper-pagination {
    position: relative;
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
    .swiper-wrapper {
      height: 100%;
    }
  }

  .swiper-slide {
    background: rgba(254, 227, 197, 0.2);
    border: 1px solid transparent;
    img {
      width: 60px;
      height: 60px;
    }

    .truncate {
      color: $light;
      @include multiline-ellipsis(2);
    }

    &:hover {
      border: 1px solid $warning;
      background: rgba(255, 180, 69, 0.3);
      .badge {
        background-color: $primary;
        color: $white;
        border: 0px solid transparent;
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
