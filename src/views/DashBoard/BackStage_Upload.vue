<template>
  <h2 class="text-center">圖片上傳</h2>
  <form action="#">
    <input
      type="file"
      class="form-control border-0"
      id="upload"
      placeholder="請上傳圖片"
      @change="upload"
    />
  </form>
</template>

<script>
const { VITE_URL, VITE_PATH } = import.meta.env;

export default {
  data() {
    return {
      file: null,
    };
  },
  methods: {
    upload() {
      const formData = new FormData();
      formData.append('file-to-upload', this.file.files[0]);
      this.$http
        .post(`${VITE_URL}/v2/api/${VITE_PATH}/admin/upload`, formData)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.file = document.getElementById('upload');
  },
};
</script>
