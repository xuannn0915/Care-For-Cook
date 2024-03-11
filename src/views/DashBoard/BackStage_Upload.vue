<template>
  <h2 class="text-center">圖片上傳</h2>
  <form action="#" class="mb-5">
    <input
      type="file"
      class="form-control border-0"
      id="upload"
      placeholder="請上傳圖片"
      @change="upload"
    />
  </form>
    <div class="table-responsive">
      <div class="overflow-x-scroll">
        <table class="table">
        <thead>
          <tr>
            <th scope="col">圖片</th>
            <th scope="col">圖片網址</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(pic, index) in picData" :key="index">
            <td>
              <img :src="pic" alt="" style="height:100px" class="w-auto" />
            </td>
            <td>
              {{ pic }}
            </td>
          </tr>
        </tbody>
        </table>
      </div>
    </div>
</template>

<script>
const { VITE_URL, VITE_PATH } = import.meta.env;

export default {
  data() {
    return {
      file: null,
      pics: [],
      picData: [],
    };
  },
  methods: {
    upload() {
      const formData = new FormData();
      formData.append('file-to-upload', this.file.files[0]);
      this.$http
        .post(`${VITE_URL}/v2/api/${VITE_PATH}/admin/upload`, formData)
        .then((res) => {
          this.pics.push(res.data.imageUrl);
          localStorage.setItem('myPics', JSON.stringify(this.pics));
          this.renderPic();
        })
        .catch((err) => {
          console.log(err);
        });
    },
    renderPic() {
      this.picData = JSON.parse(localStorage.getItem('myPics'));
    },
  },
  mounted() {
    this.file = document.getElementById('upload');
  },
};
</script>
