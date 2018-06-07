<template>
  <div class="enter-net-info">
    <section v-show="!showTips">
      <van-nav-bar title="填写入网信息" left-text="关闭" right-text="下一步" left-arrow @click-left="handleLeftClose" @click-right="handlePost" />

      <van-row>
        <van-col span="24">
          <van-steps :active="step">
            <van-step>填写入网信息</van-step>
            <van-step>填写邮寄信息</van-step>
            <van-step>支付</van-step>
          </van-steps>
        </van-col>
      </van-row>

      <van-row>
        <van-col span="24" class="tips">
          温馨提示：请填写正确的身份证姓名和身份证号码，验证不通过的用户将无法购买号卡，请认真填写。<br> 如您的身份证已办理移动电话卡达5张，开通后可能无法正常使用，请您核对清楚后填写身份证信息。
        </van-col>

        <van-col span="24">
          <van-cell-group>
            <van-field v-model="form.name" placeholder="请输入机主姓名" label="机主姓名" required/>
          </van-cell-group>
        </van-col>
        <van-col span="24">
          <van-cell-group>
            <van-field v-model="form.id" placeholder="请输入机主身份证" label="身份证" required maxlength="18" :error="idError" :error-message="idErrorMsg" />
          </van-cell-group>
        </van-col>
        <van-col span="24" class="img-cell">
          <van-cell title="※请上传身份证正面（照片面）照片：" value="" required style="flex: 1;" />
          <el-upload style="flex: 1;" class="avatar-uploader" action="/v1/upload.do" :show-file-list="false" :on-success="handleImgFrontSuccess" :before-upload="beforeAvatarUpload" :on-progress="handleOnProgress">
            <img v-if="form.imgFront !== ''" :src="imgs.imgFront" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </van-col>

        <van-col span="24" class="img-cell">
          <van-cell title="※请上传身份证反面（国徽面）照片：" value="" required style="flex: 1;" />
          <el-upload style="flex: 1;" class="avatar-uploader" action="/v1/upload.do" :show-file-list="false" :on-success="handleImgBackSuccess" :before-upload="beforeAvatarUpload" :on-progress="handleOnProgress">
            <img v-if="form.imgBack !== ''" :src="imgs.imgBack" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </van-col>

        <van-col span="24" style="position:relative;" class="img-cell">
          <van-cell title="※请拍摄手持身份证正面（国徽面）照片：" value="" required style="flex: 1;" />
          <el-upload style="flex: 1;" class="avatar-uploader" action="/v1/upload.do" :show-file-list="false" :on-success="handleImgPersonSuccess" :before-upload="beforeAvatarUpload" :on-progress="handleOnProgress">
            <img v-if="form.imgPerson !== ''" :src="imgs.imgPerson" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </van-col>

        <van-col span="24" style="position:relative;" class="img-cell" v-if="$route.query.showSpecial">
          <!-- <van-cell title="※请拍摄手持身份证正面（国徽面）照片：" value="" required /> -->
          <van-cell-group class="img-cell-group">
            <div required>※请拍摄手持身份证正面（国徽面）照片：</div>
            <van-button @click="handleTakePhoto" class="take-photo">拍照</van-button>
            <img v-if="form.imgPerson !== ''" :src="imgs.imgPerson" class="avatar" ref="imgPerson">
            <i v-else class="el-icon-plus avatar-uploader-icon take-photo-icon"></i>
          </van-cell-group>
          <!-- <el-upload style="flex: 1;" class="avatar-uploader" action="/v1/upload.do" :show-file-list="false" :on-success="handleImgPersonSuccess" :before-upload="beforeAvatarUpload" :on-progress="handleOnProgress">
            <img v-if="form.imgPerson !== ''" :src="imgs.imgPerson" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload> -->
          <!-- <van-uploader :after-read="onRead" accept="image/*" multiple>
            <van-icon name="photograph" />
          </van-uploader> -->

        </van-col>
        <van-col span="24">
          <van-checkbox v-model="tipCheck" class="into-tip" shape="square"></van-checkbox>
          <span class="into-tip">阅读并同意入网协议
            <span @click="showTips = true">《 中国电信用户入网协议 》</span>
          </span>
        </van-col>
      </van-row>
    </section>

    <app-tips v-show="showTips" :show.sync="showTips"></app-tips>

  </div>
</template>


<script>
import AppTips from './Tips'
const _idErrorMsg = '请输入正确的身份证号'
export default {
  components: {
    AppTips
  },
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
    convertBase64UrlToBlob(base64Data) {
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
    sumitImageFile(imageBase64) {
      var blob = dataURItoBlob(imageBase64)
      alert('file' + JSON.stringify(dataURItoBlob(imageBase64)))
      var canvas = document.createElement('canvas')
      var dataURL = canvas.toDataURL('image/jpeg', 0.5)
      var fd = new FormData(document.forms[0])

      fd.append('file', blob, 'image.png')
      this.$api.uploadImg(fd).then(res => {
        alert(JSON.stringify(12333))

        vm.form.imgPerson = res.data.data
        vm.imgs.imgPerson = res.data.data
      })
    },
    handleTakePhoto() {
      const vm = this
      this.$wx.ready(function() {
        vm.$wx.checkJsApi({
          jsApiList: [
            'chooseImage',
            'previewImage',
            'downloadImage',
            'uploadImage'
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
                sourceType: ['camera'], // 可以指定来源是相册还是相机，默认二者都有
                success: function(res) {
                  // vm.$toast(JSON.stringify(res))
                  vm.$wx.uploadImage({
                    localId: res.localIds[0],
                    success: function(res) {
                      vm.$wx.downloadImage({
                        serverId: res.serverId,
                        success: function(res) {
                          vm.$wx.getLocalImgData({
                            localId: res.localId,
                            success: function(res) {
                              const localData = res.localData
                              // vm.$toast(JSON.stringify(localData))
                              vm.sumitImageFile(localData)
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
    onRead(file, content) {
      const vm = this
      let param = new FormData()
      param.append('file', file.file, file.file.name)
      this.$api.uploadImg(param).then(res => {
        vm.form.imgPerson = res.data.data
        vm.imgs.imgPerson = res.data.data
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
    handleOnProgress() {},
    handleLeftClose() {
      this.$dialog
        .confirm({
          title: '关闭提示',
          message: '关闭后，之前填写的信息将丢失，请谨慎操作。'
        })
        .then(() => {
          this.$router.push({ name: 'OpenAccount' })
        })
        .catch(() => {
          // on cancel
        })
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
    handlePost() {
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
      params.orderId = this.$route.query.orderId || ''
      params.cardDetailId = this.$route.query.cardDetailId || ''
      params.cardId = this.$route.query.cardId || ''

      this.$api.SaveEnterInfo(params).then(res => {
        if (res.data.code == 200) {
          this.$router.push({
            name: 'InputPersonInfo',
            query: this.$route.query
          })
        } else {
          this.$toast.fail(res.data.message)
        }
      })
    },
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
          'uploadImage'
        ]
      })
    }
  },
  created() {
    if (this.$route.query.showSpecial) {
      this.$api.GetWxConfig({ url: location.href }).then(res => {
        if (res.data.code == '200') {
          this.initWxConfig(res.data.data)
        }
      })
    }
  }
}
</script>

<style lang="scss">
.enter-net-info {
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
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    margin-top: 10px;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409eff;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 100px;
    height: 80px;
    line-height: 80px;
    text-align: center;
  }
  .avatar {
    width: 100px;
    height: 80px;
    display: block;
  }

  .img-cell {
    display: flex;
    .van-cell {
      // flex: 1;
      width: 200px;
      display: inline-block;
    }
  }

  .take-photo {
    // position: absolute;
  }

  .take-photo-icon {
    border: 1px solid #8c939d;
  }

  .img-cell-group {
    padding: 10px 0;
  }
}
</style>
