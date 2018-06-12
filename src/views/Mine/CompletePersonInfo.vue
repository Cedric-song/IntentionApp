<template>
  <div class="upload-info">
    <van-nav-bar title="身份证照片补录" left-text="后退" left-arrow @click-left="$router.back()" />

    <van-row>
      <van-col span="24">
        <van-cell-group>
          <van-field v-model="form.name" placeholder="" label="机主姓名" required />
        </van-cell-group>
      </van-col>
      <van-col span="24">
        <van-cell-group>
          <van-field v-model="form.id" placeholder="" label="身份证" required />
        </van-cell-group>
      </van-col>
      <van-col span="24" class="img-cell">
        <van-cell title="※请上传身份证正面（照片面）照片：" value="" required />
        <van-button @click="handleTakePhoto('imgFront')" class="take-photo" type="primary">选择图片</van-button>
        <div class="avatar-uploader">
          <img v-if="form.imgFront !== ''" :src="imgs.imgFront" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </div>
      </van-col>

      <van-col span="24" class="img-cell">
        <van-cell title="※请上传身份证反面（国徽面）照片：" value="" required />
        <van-button @click="handleTakePhoto('imgBack')" class="take-photo" type="primary">选择图片</van-button>
        <div class="avatar-uploader">
          <img v-if="form.imgBack !== ''" :src="imgs.imgBack" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </div>
      </van-col>

      <van-col span="24" style="position:relative;" class="img-cell">
        <van-cell title="※请拍摄手持身份证正面（国徽面）照片：" value="" required />
        <van-button @click="handleTakePhoto('imgPerson')" class="take-photo" type="primary">拍摄图片</van-button>
        <div class="avatar-uploader">
          <img v-if="form.imgPerson !== ''" :src="imgs.imgPerson" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
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
      step: 0,
      form: {
        imgFront: '',
        imgBack: '',
        imgPerson: '',
        id: '',
        name: ''
      },
      imgs: {
        imgFront: '',
        imgBack: '',
        imgPerson: ''
      },
      idError: false,
      idErrorMsg: '',
      tipCheck: true,
      showTips: false
    }
  },
  watch: {
    'form.id': {
      handler(val, oldVal) {
        this.idError = false
        this.idErrorMsg = ''
      }
    }
  },
  methods: {
    initWxConfig(param) {
      this.$wx.config({
        debug: process.env.NODE_ENV !== 'production',
        appId: param.appId,
        timestamp: param.timestamp,
        nonceStr: param.nonceStr,
        signature: param.signature,
        jsApiList: [
          'chooseImage',
          'previewImage',
          'downloadImage',
          'uploadImage',
          'getLocalImgData'
        ]
      })
    },
    dataURItoBlob(base64Data) {
      var byteString
      if (base64Data.split(',')[0].indexOf('base64') >= 0) {
        byteString = atob(base64Data.split(',')[1])
      } else {
        byteString = unescape(base64Data.split(',')[1])
      }
      var mimeString = base64Data
        .split(',')[0]
        .split(':')[1]
        .split(';')[0]
      var ia = new Uint8Array(byteString.length)
      for (var i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i)
      }
      return new Blob([ia], { type: mimeString })
    },
    sumitImageFile(imageBase64, name) {
      const vm = this
      var blob = this.dataURItoBlob(imageBase64)
      var canvas = document.createElement('canvas')
      canvas.setAttribute('width', '20px')
      canvas.setAttribute('height', '20px')
      var dataURL = canvas.toDataURL('image/jpeg', 0.1)
      var fd = new FormData(document.forms[0])

      fd.append('file', blob, 'image.png')
      vm.$toast.success('开始上传')

      this.$api.uploadImg(fd).then(res => {
        this.$toast.success('上传成功')

        vm.form[name] = res.data.data
        vm.imgs[name] = res.data.data
        vm.$store.commit(vm.$types.ShowLoading, false)
      })
    },
    handleTakePhoto(name) {
      const vm = this
      const sourceType = name === 'imgPerson' ? ['camera'] : ['album', 'camera']
      this.$wx.ready(function() {
        vm.$wx.checkJsApi({
          jsApiList: [
            'chooseImage',
            'previewImage',
            'downloadImage',
            'uploadImage',
            'getLocalImgData'
          ],
          success: function(res) {
            if (res.checkResult.getLocation == false) {
              vm.$toast.fail(
                '你的微信版本太低，不支持微信JS接口，请升级到最新的微信版本！'
              )
              return
            } else {
              vm.$wx.chooseImage({
                count: 1, // 默认9
                sizeType: ['compressed'], // 可以指定是原图还是压缩图，默认二者都有
                sourceType: sourceType, // 可以指定来源是相册还是相机，默认二者都有
                success: function(res) {
                  vm.$wx.uploadImage({
                    localId: res.localIds[0],
                    success: function(res) {
                      vm.$store.commit(vm.$types.ShowLoading, true)
                      vm.$wx.downloadImage({
                        serverId: res.serverId,
                        success: function(res) {
                          vm.$wx.getLocalImgData({
                            localId: res.localId,
                            success: function(res) {
                              let localData = res.localData
                              vm.sumitImageFile(localData, name)
                            }
                          })
                        }
                      })
                    }
                  })
                }
              })
            }
          }
        })
      })
      this.$wx.error(function(res) {
        this.$toast.fail('验证失败，请退出重试！')
      })
    },
    handleImgFrontSuccess(res, file) {
      if (res.code == '200') {
        this.form.imgFront = res.data
        this.imgs.imgFront = URL.createObjectURL(file.raw)
      }
      this.$store.commit(this.$types.ShowLoading, false)
    },
    handleImgBackSuccess(res, file) {
      if (res.code == '200') {
        this.form.imgBack = res.data
        this.imgs.imgBack = URL.createObjectURL(file.raw)
      }
      this.$store.commit(this.$types.ShowLoading, false)
    },
    handleImgPersonSuccess(res, file) {
      if (res.code == '200') {
        this.form.imgPerson = res.data
        this.imgs.imgPerson = URL.createObjectURL(file.raw)
      }
      this.$store.commit(this.$types.ShowLoading, false)
    },
    beforeAvatarUpload(file) {
      this.$store.commit(this.$types.ShowLoading, true)
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2

      // if (!isJPG) {
      //   this.$message.error('上传头像图片只能是 JPG 格式!')
      // }
      // if (!isLt2M) {
      //   this.$message.error('上传头像图片大小不能超过 2MB!')
      // }
      // return isJPG && isLt2M
      return true
    },

    validate() {
      let flag = true
      if (!this.tipCheck) {
        this.$toast.fail('请阅读并同意入网协议')
        return false
      }

      if (
        !RegExp(
          /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/
        ).test(this.form.id)
      ) {
        this.$toast.fail(_idErrorMsg)
        this.idErrorMsg = _idErrorMsg
        this.idError = true
        flag = false
      }

      return flag
    },
    handleSubmit() {
      const vm = this
      if (!this.validate()) {
        return false
      }

      const params = {
        name: this.form.name,
        idCard: this.form.id,
        IDFront: this.form.imgFront,
        IDBack: this.form.imgBack,
        IDPerson: this.form.imgPerson
      }

      for (let [key, value] of Object.entries(params)) {
        if (!value) {
          this.$toast.fail(`请补全所有必填信息。`)
          return false
        }
      }

      params.wxId = this.$store.state.userinfo.openid
      params.orderId = this.$route.query.id || ''
      params.cardDetailId = this.$route.query.detailId || ''
      params.cardId = this.$route.query.cardId || ''

      this.$api.CompletePersonInfo(params).then(res => {
        if (res.data.code == 200) {
          vm.$toast.success('补录成功')
          vm.$router.back()
        } else {
          vm.$toast.fail(res.data.message)
        }
      })
    }
  },
  created() {
    alert(location.href)
    this.$api.GetWxConfig({ url: location.href }).then(res => {
      if (res.data.code == '200') {
        this.initWxConfig(res.data.data)
      }
    })
  }
}
</script>

<style lang="scss">
.upload-info {
  .tips {
    color: #cc0000;
    font-size: 11px;
    padding: 10px;
  }
  .into-tip {
    font-size: 12px;
    padding: 10px 0;
    color: #000;
    display: inline-block;
    vertical-align: middle;
    span {
      color: #0066ff;
    }
    .van-checkbox__icon {
      width: 14px;
      height: 14px;
      line-height: 1;
      font-size: 8px;
    }
  }
  .avatar-uploader {
    margin-top: 20px;
  }

  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 100px;
    height: 80px;
    line-height: 80px;
    text-align: center;
    border: 1px dashed #d9d9d9;
  }
  .avatar {
    width: 100px;
    height: 80px;
    display: block;
  }

  .img-cell {
    display: flex;
    position: relative;
    .van-cell {
      width: 220px;
      height: 120px;
      display: inline-block;
    }
  }

  .take-photo {
    position: absolute;
    bottom: 10px;
    // width: 80px;
    left: 10px;
  }

  .take-photo-icon {
    border: 1px solid #8c939d;
  }

  .img-cell-group {
    padding: 10px 0;
  }
}
</style>