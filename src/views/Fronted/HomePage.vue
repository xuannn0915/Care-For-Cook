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
            class="character"
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
            v-for="(item, index) in service.product" :key="index" >
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
  <section class="comment pt-9">
    <div class="container">
      <div class="row flex-lg-row flex-column-reverse">
        <div class="col-lg-8">
          <swiper-wrapper
          :spaceBetween="16"
          :direction="'vertical'"
          :slidesPerView="3"
          :autoplay="{
            delay: 5000,
            disableOnInteraction: false,
          }"
          :loop="true"
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
                  <span class="material-icons text-white fs-1 ms-lg-2">east</span>
                </div>
              </router-link>
            </swiper-slide>
          </swiper-wrapper>
        </div>
        <div
          class="col-lg-4 d-flex flex-lg-column
          align-items-center justify-content-between"
        >
        <div class="text-lg-center mb-7">
        <h2 class="fw-bold text-primary mb-1 fs-md-2 fs-3">其他人怎麼說</h2>
        <subtitle class="fw-bold fs-md-4 fs-5"> 他們這樣吃，熱情推薦你！ </subtitle>
      </div>
          <img
            src="../../../public/home/其他人怎麼說＿插圖.svg"
            alt="comment illustration"
            class="character"
          />
        </div>
      </div>
    </div>
  </section>

  <!-- 第五區：home_slogan -->

  <section class="home_slogan pt-9 mb-10">
      <div class="container">
        <div class="row">
          <div class="col-8 mx-auto wording text-center d-flex flex-column align-items-center">
            <h2 class="fw-bold text-primary mb-1 fs-lg-2 fs-3 position-relative">
              照料理，用心照料你
            </h2>
            <subtitle class="fw-bold fs-lg-4 fs-5 mb-lg-6 mb-4">
              忽略的平淡，料理你日常的不簡單
            </subtitle>
          <p class="fs-lg-5 fs-6 mb-lg-8 mb-6">我們傳遞專業美味，引領健康生活。快速輕鬆了解我們的優質服務</p>
          <div class="d-flex align-items-center">
            <router-link to="/notes"
            class="btn btn-outline-primary me-lg-6 me-4 text-nowrap">懶人購物包</router-link>
            <router-link to="/productsList" class="btn btn-primary text-nowrap">線上購物
            </router-link>
          </div>
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
        'https://storage.googleapis.com/vue-course-api.appspot.com/careforcook/1710137183866.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=DtQUNGIpc4nE90UN3GX%2BpP6IhfKYnszFQ0UnJSPS1XEcawTS7t4V0BH6fwiA1aIiP%2FmK1n9uTOXlEnXWGk9HurR5vTr4xpgJx8Eg39kLJx3%2Ftp%2BktjVwfdYcr8CCgn2%2F02FmtgJXVHBUoQxz9Cx5f%2Bzk9EA6CzuABr4P1lyxWXA%2BUgi1szUk5bbGxEUBsvfYLI4y2saW186vqJdqviXPXcC2595InMiBtsuUJR%2Boda%2Feit%2FdtOmknLWkszSwmMwtyXdAVujM2mC4oOG2b8M7I3wrTqCMFZMojzNfkPK9OGtMJQQPLncCM0sEcuVkZI43esNffwn8M%2F%2Bom1LtG6VH%2Fg%3D%3D',
        'https://storage.googleapis.com/vue-course-api.appspot.com/careforcook/1710137192109.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=CJaw3SJ086IMhymi7R5rCS8e0xIrarVbaMT%2BcVF6uUecc5yQvAtbWDGhv1w1wWomj74TsnC%2ByD2C07m7tZ3T0rhhv4i3rkzZn2FqEsZWuQBuJ3hPy7n4O4a%2BwONCzrBEtMSEB6j2844wfJDZpDsRkIOmHLiJ15FSdtgpYQMzBq%2Bp3Oaqm%2BZ5tQvZMkgPSks5xuNpeN%2B8%2FKSwk9qv8Yf5m%2BBTZNNQyfwSeUskNX6frI3EX6kvyItzOExnXNqabA9SkwOJOBkYCzxwFmQ2WPXEfBUG63WP8cW3GTZkyC9AHYQvrooQht7a%2FkALm4clM98Od1kY%2Fg3VL9jw8DrAhd9n%2Fw%3D%3D',
        'https://storage.googleapis.com/vue-course-api.appspot.com/careforcook/1710137200746.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=bs5eAWQDnNzc%2BBPczUytmS3XIml%2Fd0JLxHmQomluhqbeBkmK54H1lMUOdA7KmO4jnouiwLm%2FN0lLoU%2BRu6enjvEZa4PUTMrzYC98cNsTmWPytrN5y7zxiWjW3JQ1%2FXn2ilQ8ga6%2Fp5mgfFFa5dK%2BnUOpkYp2MbAIgtUYXr7sIRI4Cdd5VD3rmZYPaJt%2Bc6JVDACICMHwYWacPYlui64Bx9oWS5zzwllnjAUMmDW5PVgAoZHU2jtkHYaKdk%2BWhbElh%2BV1s6V9%2B5%2BW%2FC6LG09i7eFKKtdI%2BbZZEpRsirMbT5rBQsaTZiazi8JFHbnuZEdhUgISPJjd5qIdspO5YglHOw%3D%3D',
        'https://storage.googleapis.com/vue-course-api.appspot.com/careforcook/1710137216287.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=KI6whkXHqLrPyXpMEaqoOQl3dSwYssoolwN1ntfSE%2Fvy8ok89e6lQkQDJQz0qUxp7jlxAuaL8%2Bqn4fWZ%2FXGoIesOQt5EniSUgnFHt%2BogOL33zvgwge8sDHnnPbQw4gvVIK5U0%2F%2FiJngY5KX6lHU1ppaLuwmlYRFxxgc0itsUCuljXE7JsbYoUsBjJvxhbXC0bOh%2BZn7%2FL1l7NDRu2vBs6B8FOUKEH%2FMDpYlRPLg1S7X350B%2BRnChk2011ZkNyOvJpCXB2zfqdcexrX4lCAm7l5xLXu3TuXz0ehoFbRKHuzOuDNOY2Axt52JRjgHNNppGUKtE6%2F5fDtbaHKYTujfLrw%3D%3D',
        'https://storage.googleapis.com/vue-course-api.appspot.com/careforcook/1710137232878.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=Pmnn0o4TqBotkadBKQvnvLgC%2FfCwPMNuJamirQ1JBkNl1G6XbG4%2BffNGp7g3IIc2whsawdyds2wok44efchUVG3fLH1TmlQPra0eUFjO5y2D7AR%2Fs4RG7Bpj4rcmPAgQpXjttkCiN6qXxEhAZe9kTyBOD7MuHlsHAYz4cKCQhGlrNmvHmLLSAcuE6oUEBFZoxiC%2BdUVbNTRUNpCXEULfUAsXvgVNe9hZ7noXDUKlMCdrWA2q05TgqUtxUbSbWXXYsrxWLu9u%2BNxN%2BSUJZfKYN63k7CC4S6Y1ee8wNVHdmj095qPCcwg2fYHoC6YA0qdKMNer%2FqsK3bhjoCKKxXJndw%3D%3D',
        'https://storage.googleapis.com/vue-course-api.appspot.com/careforcook/1710137241419.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=GR%2B5dmQKXUMJGJq0ZIO0kk1Rla5yQ14V1yKRNTnwEFn07hlF%2F%2F0O2G5cJJcmxD0%2F4ceT5Z8rbGeRyMkV57codf%2B4M2wkxKjDUaDMtGD6%2F5M5kQH4aF9g28OxdUhzvR700mrd7b%2BWNutGHlT41HtD8HS8mHW8Ij%2BwJZi69sqHCwhxiu1euKG2iq13GuQR3TwmJJ%2Bi1OppzMYIDSBgUWst6VgO3OzQfhXrxZ6XAavF1h1Vx9nrjxA7pYWMINJIoHjFW8VHdSe2jKXT9soH0LU6wBUeEsPirZW0icIA33U1JIFyZ45DnH9ElRBZQjneTJTs%2FIQ%2FW7yBIGXS7KSHFcMRqA%3D%3D',
        'https://storage.googleapis.com/vue-course-api.appspot.com/careforcook/1710137251019.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=f5YJXG6D7gShZ4Db9pj0nH1L4ine2om9pQEElHp0%2FBSv0rDkmTOPxAeyDetv4qfOBJoyWcuxFgfU0LAKR4ucATcKqr6nFH65QHmlGh8NwYAKbURgYVTAW1BpaEqcwkGMCFOa37yMxYFsiqnwlU%2B3F2pyjRSep0ZjcDCi9w8P7dH1HPgxUii%2BikAcMND%2BfRkMMRfjnvbRvvnU3nqgBpDyQrftRNNEm7KoBuYnfnz8UdvfIxYWON%2BFqnEHDT8AOKT5J4V75GLTC%2FOCR9kyqCtNQF%2BLFiRA8iBwqOoy9f4OEgoKnHSLFsZMXn8tNdpZqJV7EXzYvw%2FWVm5K5eV2PfZEkg%3D%3D',
        'https://storage.googleapis.com/vue-course-api.appspot.com/careforcook/1710137370625.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=YXQSaKrKMbvW8A%2F2vRyUtzbt5O0VPhqq3E8BDzuzROHdFH8ktLdO7hoiALL2pSUBu66MbjpJ5VhzDRCscEc71L%2FrdQ1WHTF6jXrECtdZKko0ls5gdu0Vygauo9aJgdc50h1Joy5pePf6Cq66Ww4LlT8TXC0MGGtxg1sCTca7SFyU08S29GkUgroM%2FU7DuZVFBBOMT1fV0s75OlrkOLqa5ZKXAq7wwWPuWhybnNFT0bK0PgDRA6KP79E0IywUeO6Jh3feKUpJiv%2BoEo5XvITU%2FXVFFYX1Xo3L10g8SJ6XmrgXxVu9k%2FLLrKz60cwJWNqM34X2j4YJKIXydfNHvwlpcg%3D%3D',
      ],
      service: {
        product: [
          {
            imgUrl: 'https://storage.googleapis.com/vue-course-api.appspot.com/careforcook/1710137763786.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=N%2F%2F7m3MgSBD9SdhsN3uv3bDMkpOdfo5iGsPrVYPJAx%2F%2FRsobxSJzsBTsQ%2BlHyk3tgHgZXUPdoLEzdaxCeR8HN3FpSgWAHyIOQBHBlytXN7dl1DhoZ8aoKLpFYObllmwwhJAgkQg0PEXP1geoEsCIFCXvMmvHrdQinV2RGi5UtB%2FlAF28QT39CIMr3W06Ca4YVWktBI6fCQDOTwpufrF%2F2yZsB9PGfxz%2FRuZgD%2B2ZAy1Ca8%2Fxki%2FXJhFczRZLFx3Hz8QiyFaul1ANlRyt7Mg9gzD1AsGBYXQN83EXix%2BnDqoyKohp3TLXEAi1TBlwT%2FS58Yo5weokpR%2Bkh%2Bq%2FJNau2w%3D%3D',
            title: '客製照護餐',
            slogan: '悉心客製 x 完善修復',
            route: '/category_customMeal',
          },
          {
            imgUrl: 'https://storage.googleapis.com/vue-course-api.appspot.com/careforcook/1710137777384.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=MkRGcZXyin%2BthB%2FoRuWNyGBMyPAcgqaW9CMUUhKcM7CUt8sj9r0r8f4L3H%2FHjouKWobmWOmQtU0K65f6Fgw954SOYCdFmi3t8DHPng8JsN0wqtuqEGp6MRi6WkODf5qws6DZkCZ5Z131t2oQHHughrI%2FrljgPPJ3GiwtdX2V2C1z8b9XaJnwCYJanVYRHR8gEtF8ouHs%2F3OTl2Zt8bG5XpIn8ef3uGvuALrh55YSj7dwIiwt7jKqmhC378Lg1QJgQSELsJLnzplnUyF%2B%2FveV3JsRfkLciBMFzbUDfuRcfOgGjllvlboyn0tqONwuZ4M72Ob6WEXmSKXGR22R7fZkPg%3D%3D',
            title: '高蛋白燉飲',
            slogan: '全民健康 x 專業營養',
            route: '/category_highProtein',
          },
          {
            imgUrl: 'https://storage.googleapis.com/vue-course-api.appspot.com/careforcook/1710137784345.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=kNG0YHecKIC61mnvnJCyTHyenB2cSw5a%2F5hIOBmAanfBUYXQ3dH8eUSbbpl9jVpmv2UuTCjHkfNMvNKtLC9ahV%2FCeCUc1mDftUfw5Kelz4dgk2nOwLIFJJbpRkcGqXBYJuJS37XVD6Q5hHegwohrnduj8a3O3pdtPKjOTY%2B1VkKmPeOCYfPpcF3RWVbAX6YVY8D9GgusyhGLdE4%2FN5gIdu1hEkiecye17GuTzpZLNrKYlBLt8%2Bo5NHJXj1CjK4PE27s2FmWHODe5NILEddZMcbVGPQkRIBAB9OEw3yYi5aDToRRvuiJHcyvdfyuxAGOJn271hNRcKXHIhcOed7Nl%2FQ%3D%3D',
            title: '機能調理餐',
            slogan: '日常餐飲 x 營養元氣',
            route: '/category_lunchBox',
          },
        ],
        company: [
          {
            imgUrl: 'https://storage.googleapis.com/vue-course-api.appspot.com/careforcook/1710137824739.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=ipjMDafb5bRWRpoLMC08NysjhwrMYD5KeyDWbsBbum2rgJY7tOtcpEFrtw6%2BCh4ZU0858VKE6UndsrTEj49PrBAXGg3RyJCnmL2jJLmi825WrGtYrX8DMDz2EX%2FDmSm2cVXp8T5qWW%2FHBwlAwdBr1BzKzHdIkdqadG3gE4AY%2F4UWl0zZhEfh%2FaaIF5Y9op10P90pnyOlvCj5fxMb9%2BwFXpIHiCjFJDT7jblBGEE3tNBXJv8rWtdF1a4W2ErccTb%2BQKgqRD28Wweqm1DmINBsRJkcwAXARywhpHnOwPAnPGYWzrEt5qDygbjm3Qh3tXFB0SYU8Xs9Xs8N22XWRLC0iw%3D%3D',
            title: '專業團隊分工',
            slogan: '團隊精細分工，因為有各個崗位的專業，才能成就今日的美味料理',
            route: '/about_brand',
          },
          {
            imgUrl: 'https://storage.googleapis.com/vue-course-api.appspot.com/careforcook/1710137828771.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=e341CMYa13mM5idyjh5Ex7rAtisQZdm1qAwTWkhgKd8sAgSa0%2BRst3kpqw7ejJeaVDflsC9ZRgALou1BpLiXz1THPCVhxx%2Ff3XfCsgpvO14Bb1ErlJZvnzSTlI2Hc9QVffQMs%2Bgo3zV83573mqJ24K4%2FP3VJ7eLxgv0o96TzDS8JFOygCA8h3z46SS4rhOZ7AaISNeGX4%2Fbk5dLYfZPH7BZilttw2E%2BuJtjeDLjiyjFHt8%2Fs%2BbC5xVHxOlBsRV%2FGNeRdGs3XEjv8HS3fKKFHS5gDaDYoGeKynUfiNl%2F%2FlEZ0CxoD6Mem7hZzZ3rpeuktGx1BisRZG6QDLH3WfoC9fA%3D%3D',
            title: '嚴選在地食材',
            slogan: '挑選具有安全認證的在地廠商，並選用無毒且友善環境的安心食材',
            route: '/about_quality',
          },
          {
            imgUrl: 'https://storage.googleapis.com/vue-course-api.appspot.com/careforcook/1710137834600.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=cG9DjJkFMXgEUFCiVt2UgM%2BuBQn%2FSPUTupzGiOIIpcC8a3AU0oaH9CrWcUJzmOsP66dV6ZX18718kM0pTj6zIxguVD5tYsCGDVdDvl3NYBMALF5bOycD7ng2gdAyCAaCcVd127T%2BzJXDVlZjaPFsmoRX%2F79xzJViU5v%2F06RDsQQpdSTx2mqlAvrqYXzfdEOaUTmgFclDIjTu%2BzARYeEbC5K9jV9U1rC%2BtiqJXiCP3toLTNV1%2BY0E%2FCLlThPablntmzKLFC8wPhMieh9%2B0YF5HAB1OuLu677HhztqKu9Mk7kh5IHq2IK2RMk2arNoP8qVdFHXLxupmTXUv5V2SKvZWQ%3D%3D',
            title: '高規品管製程',
            slogan: '在HACCP、ISO22000國際認證廠房生產，並堅守嚴格品質控管',
            route: '/about_quality',
          },
        ],
      },
      comment: [
        {
          imgUrl: 'https://storage.googleapis.com/vue-course-api.appspot.com/careforcook/1710139054506.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=nLIbnppvUQPSpiNS4kKKdFkFbMnPAEvrP%2BGmzkTij5988Hvthv5bIrP2Mp%2BJpmGaOwq9F%2FPvb5%2BlIYQTSipG9XP38GkPtm6uQy%2B6VBwJtJvyLETH1MqfC0HxQRlIQzm4Fim164acl5bto1N5kuesm1H%2F2dRNFt%2B5GZySP1heDTh64R2uXt1HaQwHm0RVp2xhoTkg%2Bu9JeIOynpMf1sC54Intw7ACZlLfW7oaoXermOwGTW6AFQ%2FV9FPa0JTV9QB39wAOSAXEzzmbiePOssO24HTG9q5czst2C%2BOeeUlntznF3EGrA%2B18fFym6Ueu%2BKY5olNXwo%2Bpxem3NSXrKViV0A%3D%3D',
          name: '張先生',
          age: '32歲',
          tag: '膽囊切除手術',
          content: '管體中資程！子，強法娥縷回，蛇管體中資程！子，強法娥縷回，蛇管體中資程！子，強法娥縷回，蛇管體中資程！子，強法娥縷回，蛇管體中資程！子，強法娥縷回，蛇管體中資程！子，強法娥縷回，蛇管體中資程！子，強法娥縷回，蛇管體中資程！子，強法娥縷回，蛇管體中資程！子，強法娥縷回，蛇管體中資程！子，強法娥縷回，蛇',
        },
        {
          imgUrl: 'https://storage.googleapis.com/vue-course-api.appspot.com/careforcook/1710139163608.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=Phev60pQmOMp1TNrKQpFszMX9XZULm796r0KT310k3z8HcQkxbyXiWmhUoITqCV8GbtcpzY%2F3%2Bxjoyushpmj8Lg99Ylgg4C8AWACRhq9%2BqLORxmjv3k5SbNm7AdmftsTyvHL2X%2BCabLB%2FAqGHmXzBTnzM3SpNAL%2BQG89EG1wJLcbuKjueMBvoTCxEYlx5uc8VRgq0u0U5DMv%2F6YePUHNTC%2FV7vPV2XmWBFkCBO6gBLcp%2BpLQtnONLUEM7Bnp9ABdHsj%2B1l3Gm78FEEs9II6DSuoTofoj2eDJ0wHxuMSqF6ee1fMoVQHuN7tNiTWddLYQDQqU0BOH5l%2BTocgUMr6Utw%3D%3D',
          name: '張先生',
          age: '32歲',
          tag: '膽囊切除手術',
          content: '管體中資程！子，強法娥縷回，蛇管體中資程！子，強法娥縷回，蛇管體中資程！子，強法娥縷回，蛇管體中資程！子，強法娥縷回，蛇管體中資程！子，強法娥縷回，蛇',
        },
        {
          imgUrl: 'https://storage.googleapis.com/vue-course-api.appspot.com/careforcook/1710139168276.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=lPkeSpoUtL%2FTuZ1HiAFX8qzO75nO%2F6mHUdplsnci1f5pVFbdWxZjES8vEicM9osq9XV5Sl9kO3kGRbrlB%2F41YbEUzxp%2BuO%2FZP0bNj2zHKXTC2rjtUUitnJ9CyoJNeeHrLinQjJB80KSmugIa1EMQ1oU3Afoa5F47U5ZDmjUwH7b8qYpqCqM%2BZtJvV%2B1njNbkMHZRNpCuTytp1pzOtUb70oR6QKeFCjx9vCJPhJvZmX6YJSKvdm35shscLh9q6SCBRPrWnPjQcerEf%2FEH2jJWjEo2lD6YcO2Vnz5U2TcKRP67a48qO%2F35rV2Ljxr5amCI3uMnf3Djr3ti5h63F1ZIEQ%3D%3D',
          name: '張先生',
          age: '32歲',
          tag: '膽囊切除手術',
          content: '管體中資程！子，強法娥縷回，蛇',
        },
        {
          imgUrl: 'https://storage.googleapis.com/vue-course-api.appspot.com/careforcook/1710139173607.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=qShKeLx4QO7VRYVff0VqhkmTCGImnwjZ4F%2F%2FHTHjNFc%2BWuUCruP%2Bn098t6KrSwKeSevjfDOYUSh%2FwS94u4JmJbskQdwAWhDBC9n2eQFkde5FHJDAHvUXDx1uOQMtiwsBHpPLZV1KXl8fW%2BhRZJHgg9luvYZwlsP1ICPrryydyDjldAOAXuvwnQg6hiHsFNFzvu%2FlvZzcUFXTF3KCzngv2p2lR061%2F27P3eA9t7F2W9fTDfpnWyVf0%2FM99FauRylE7gVy1sPhsNnbF8CI5Ij6U0hrYPcxLeYBRT650by%2BssEnDH250H%2BGKW8gFF2R3rcvu4Z7of7p9JpGpHvmY5jDkQ%3D%3D',
          name: '張先生',
          age: '32歲',
          tag: '膽囊切除手術',
          content: '管體中資程！子，強法娥縷回，蛇',
        },
        {
          imgUrl: 'https://storage.googleapis.com/vue-course-api.appspot.com/careforcook/1710139313414.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=FuYVxo1DDiLavZI3rJDOn%2BgQjoYSl8%2FLuJ0elZfTPOqYlj0Fnj23%2BH37m18N%2B5xv3OBWYn%2FgIROj5AGf4MLC2ch6qYnwcUipmANRqiue5n24%2FS1NBOrqLFlG8B9PCw%2FPozDuxKD4I%2B4AAiiMGNv2k5DLs0MsrwTFdEh7RVePsp%2BDU%2FM0KGJGQ7BlxgsaiVqkszLu8FKD42cO65CesW4ibIP%2F7XpL%2BreTo4f2mQ%2FmmuS1kinbqWLidHZTDS%2FoDeGMwzBGRf%2F57YAgfH3%2FE%2FjgbFb0D%2F5fg3aaRpyjg%2FbaKNiMUpzRI0g%2BNneLXARMLvQtsFe0UyyyWJR0xOGbNFVqXQ%3D%3D',
          name: '張先生',
          age: '32歲',
          tag: '膽囊切除手術',
          content: '管體中資程！子，強法娥縷回，蛇',
        },
        {
          imgUrl: 'https://storage.googleapis.com/vue-course-api.appspot.com/careforcook/1710139317367.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=ZwykR5FSAVr042g8KFiNbTX5%2FcSoWikNWBBHN8X0xg4OfbRC%2B090W4kW35zHBeH5q8HXcIZzOmCGPX5AinSm65sn3ltfEsVO70Aj1ArwSVbmjewvRNkc%2Fo2H8CSdQdydwJovwz6gC7tqeHQ4%2Bh3OCFrfyDplLKyjzzjwYQ45c7aOVKB%2BM37wpLcLlrJPpK6pqLQrIdvmKPd2uZ4QBM3GTxaiF%2B3MreOoNTEL99AggpSfoWOgXrvdyxxZGv5hzRjJX%2FDBLJjWZxVH%2FSFBQSx%2BHsJmWhCcfg%2F6MKA75SeEumqiaeUpVXuf%2BGy%2FPauEBuuIN6Sd8xtn8rEJJ6gAIOY1Yw%3D%3D',
          name: '張先生',
          age: '32歲',
          tag: '膽囊切除手術',
          content: '管體中資程！子，強法娥縷回，蛇',
        },
        {
          imgUrl: 'https://storage.googleapis.com/vue-course-api.appspot.com/careforcook/1710139189966.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=HL%2BSQyxxjd9XBgbNs1k%2BSs9DxTgTEJlUyfGCP0UbJUQNx0fGJNvyhviSexZDCRySJnoWNkhZCKeKU8HG5ToGWXC0eKtGrnUJ8RYbhV%2FgqmYROJlJ8cDdAvkwhRVgYCVAwPafpBR5Gs%2FFzBQoI7j5cKnNNzP9iECiE7RKD3t%2Bi%2BwgGUDV5fvkr%2FT2r4XSJmLaWxaTfTD61w7Il0sXTEH%2Fx00Hwe%2FMGc1wqOgaPB3ytcFRuGS250jDItOb522LYTbfyTQ1ZX%2F%2BcFn%2BryKOsFlUbrLqPJIhE8%2F98853M3xnI1JPN3vYsLzv0fw1y0l%2BAm5E1TlGFSHovzqu4mTY7hLE%2Bg%3D%3D',
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
    max-height: 400px;
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

  .character {
    width: 250px;
  }

  @media (max-width: 992px) {
    .character{
      width: 25%;
    }
  }
}

.home_slogan {
  padding-bottom: 124px;

  .wording::before {
    content: '';
    background-image: url(../../assets/images/drop.svg);
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
