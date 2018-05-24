<template>
  <div class="upload-info">
    <van-nav-bar title="身份证照片上传" left-text="后退" left-arrow @click-left="$router.back()" />

    <van-row>
      <van-col span="24">
        <van-cell-group>
          <van-field v-model="form.name" placeholder="" label="机主姓名" />
        </van-cell-group>
      </van-col>
      <van-col span="24">
        <van-cell-group>
          <van-field v-model="form.name" placeholder="" label="身份证" />
        </van-cell-group>
      </van-col>
      <van-col span="24">
        <van-uploader :after-read="onReadImg1">
          <div>※请上传身份证正面（照片面）照片：</div>
        </van-uploader>
        <div style="text-align: center;padding: 10px;">
          <img :src="img1" alt="" style="height:40px;display:inline-block;">
        </div>
      </van-col>
      <van-col span="24">
        <van-uploader :after-read="onReadImg2">
          <div>※请拍摄身份证反面（国徽面）照片：</div>
        </van-uploader>
        <div style="text-align: center;padding: 10px;">
          <img :src="img2" alt="" style="height:40px;display:inline-block;">
        </div>

      </van-col>
      <van-col span="24">
        <van-uploader :after-read="onReadImg3">
          <div>※请拍摄手持身份证正面（国徽面）照片：</div>
        </van-uploader>
        <div style="text-align:center;padding: 10px;">
          <img :src="img3" alt="" style="height:40px;display:inline-block;">
        </div>
      </van-col>
      <van-col span="24" style="margin-top:20px;">
        <van-button type="primary" bottom-action class="btn" @click="handleSubmit">提交</van-button>
      </van-col>

    </van-row>
  </div>
</template>


<script>
export default {
  data() {
    return {
      form: {},
      img1: ''
    }
  },
  methods: {
    onRead(file, name) {
      this[name] = file.content
    },
    onReadImg1(file) {
      this.onRead(file, 'img1')
    },
    onReadImg2(file) {
      this.onRead(file, 'img2')
    },
    onReadImg3(file) {
      this.onRead(file, 'img3')
    },
    handleSubmit() {
      this.$router.push({ name: 'Home' })
    }
  }
}
</script>


<style lang="scss" scoped>
.tips {
  color: red;
  font-size: 11px;
  padding: 10px;
}
</style>
