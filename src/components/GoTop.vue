<template>
  <button
    type="button"
    class="px-5 py-4 rounded-circle bg-white border-0 shadow circle fade"
    ref="GoTopBtn"
    @click="scrollToTop"
  >
    <span class="material-icons">north</span>
  </button>
</template>

<script>
export default {
  data() {
    return {
      mybutton: null,
    };
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
    scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        this.mybutton.style.opacity = '1';
      } else {
        this.mybutton.style.opacity = '0';
      }
    },
  },
  mounted() {
    this.mybutton = this.$refs.GoTopBtn;
    window.onscroll = () => this.scrollFunction();
  },
};
</script>

<style lang="scss">
.circle {
  z-index: 1000;
  span {
    color: $light;
  }
  &::after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    border: 1px solid $primary;
    border-radius: 50%;
    opacity: 0;
    clip-path: polygon(0% 0%, 0% 0%, 0% 0%, 0% 0%);
    transition: all 0.3s;
  }
  &:hover {
    span {
      color: $primary;
    }
    &::after {
      opacity: 1;
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
      transition: all 0.3s;
    }
  }
}
</style>
