<template>
  <div>
    <van-nav-bar title="开卡" left-text="首页" right-text="下一步" left-arrow @click-left="$router.push({name: 'Home'})" @click-right="handlePost" />
    <van-row gutter="20">

      <van-col span="24">
        <div>
          <img src="/static/imgs/kaika.png" alt="">
        </div>
        <div class="ad">
          开通电信金榜题名卡， <br> 不浪费1分上好大学！

        </div>
      </van-col>

      <van-col span="24">
        <van-cell-group>
          <van-field value="¥299.00" label="预存款" disabled required/>
        </van-cell-group>
      </van-col>

      <van-col span="24">
        <van-cell-group>
          <van-field value="吉林" label="归属省" disabled required/>
        </van-cell-group>
      </van-col>
      <van-col span="24">
        <van-cell-group style="position:relative;">
          <van-field value="" label="选套餐" disabled required/>
          <van-radio-group v-model="form.set" class="radio">
            <!-- <van-radio name="1" style="padding:0 10px;">49元</van-radio> -->
            <van-radio name="69" style="padding:0 10px;">69元</van-radio>
          </van-radio-group>
        </van-cell-group>
      </van-col>
      <van-col span="24">
        <van-cell-group>
          <van-cell title="选城市" :value="form.cityText" @click="showCityPicker = true" class="sg-form" required/>
        </van-cell-group>
      </van-col>
      <van-col span="24">
        <van-cell-group>
          <van-cell title="选号码" :value="form.number" class="sg-form" required/>
        </van-cell-group>
      </van-col>
      <van-col span="24">
        <van-radio-group v-model="form.numberId">
          <van-row :gutter="20">
            <van-col :span="12" v-for="(item) in list" :key="item.id" class="phonenumber">
              <van-radio :name="item.id">{{item.phoneNo}}</van-radio>
            </van-col>
            <section class="sg-tips">
              <van-col span="24" class="subitle">
                金榜题名卡套餐介绍：
              </van-col>
              <van-col span="24">
                为祝贺广大吉林省考生高考顺利、金榜题名，吉林电信为广大考生量身定做“金榜题名卡套餐”，将原价99元全国不限量套餐直降到69元钜惠推出！
              </van-col>
              <van-col span="24">
                流量不限量、前途不限量。选择“金榜题名卡套餐”，免费开通志愿宝VIP，获得在线测试录取概率60次，最优志愿填报方案5次，更有专家干货精品课程和在线辅导，与高报专家随时连线，报考更保险。（提示：志愿宝VIP客户权限有限期至2018年高考季结束，即2018年8月31日）

              </van-col>
              <van-col span="24">
                月租费：69元
              </van-col>
              <van-col span="24">
                套餐内资费：
              </van-col>
              <van-col span="24">
                国内流量：不限量，国内语音300分钟，国内免费接听，赠送来电显示
              </van-col>
              <van-col span="24">
                超出后资费：
              </van-col>
              <van-col span="24">
                国内主叫通话资费（元/分钟）：0.15
              </van-col>
              <van-col span="24">
                达量降速：当月国内手机上网流量达到20GB后，上网速率降至1Mbps，次月恢复
              </van-col>
              <van-col span="24">
                短、彩信（元/条）：0.1
              </van-col>
              <van-col span="24" class="subitle">
                套餐说明：
              </van-col>
              <van-col span="24">
                1.套餐超出资费：国内流量：当月国内手机上网流量达到20GB后，上网速率降至1Mbps，次月恢复。

              </van-col>
              <van-col span="24">
                2.手机上网流量可用于4G、3G、2G上网方式，限在国内使用，不含WLAN（Wi-Fi）上网。
              </van-col>
              <van-col span="24">
                3.首月执行过渡期资费，订购当月套餐月基本费按日计扣（激活当日到月底），费用四舍五入到分，套餐内包含的流量及通话分钟按天折算，向上取整。
              </van-col>
              <van-col span="24">
                4.套餐内流量不适用于流量不清零规则。
              </van-col>
              <van-col span="24">
                5.国内不包括港澳台地区。
              </van-col>
              <van-col span="24">
                6.所有套餐包含内容及相关政策以电信公司解释为准。
              </van-col>
            </section>

          </van-row>
        </van-radio-group>
      </van-col>
      <van-col span="24" class="btm-picker">
        <van-picker show-toolbar title="选择城市" :columns="columns" @cancel="onCancel" @confirm="onConfirm" v-show="showCityPicker" />
      </van-col>
    </van-row>
  </div>
</template>


<script>
export default {
  data() {
    return {
      form: {
        number: '',
        set: '69',
        cityId: '',
        numberId: ''
      },
      list: [],
      columns: this.$cityList,
      showCityPicker: false
    }
  },

  watch: {
    'form.numberId': {
      immediate: true,
      handler(val) {
        if (val && val !== '') {
          this.form.number = this.$_.find(this.list, { id: val }).phoneNo
        }
      }
    },
    'form.cityId': {
      immediate: true,
      handler(val) {
        if (val && val !== '') {
          this.FetchData({ cityId: val })
        }
      }
    }
  },
  methods: {
    handleSelectNo() {},
    onConfirm(value, index) {
      this.form.cityId = value.id
      this.form.cityText = value.text
      this.showCityPicker = false
    },
    onCancel() {
      this.showCityPicker = false
    },
    FetchData(params) {
      const vm = this
      vm.$store.commit(vm.$types.ShowLoading, true)
      vm.$api
        .GetPhoneNumber(params)
        .then(res => {
          if (res.data.code == '200') {
            vm.list = res.data.data
          } else {
            vm.$toast.fail(`获取电话号码列表失败，请稍后刷新再试。`)
          }
          vm.$store.commit(vm.$types.ShowLoading, false)
        })
        .catch(err => {
          vm.$toast.fail(JSON.stringify(err))
          vm.$store.commit(vm.$types.ShowLoading, false)
        })
    },
    handlePost() {
      const params = {
        money: 299,
        cardType: this.form.set,
        phoneNo: this.form.number,
        cityId: this.form.cityId,
        numberId: this.form.numberId
      }

      for (let [key, value] of Object.entries(params)) {
        if (!value && key === 'numberid') {
          this.$toast.fail(`请选择电话号码`)
          return false
        }
        if (!value) {
          this.$toast.fail(`请补全所有必填信息。`)
          return false
        }
      }

      params.wxId = this.$store.state.userinfo.openid
      const vm = this
      vm.$store.commit(vm.$types.ShowLoading, true)

      vm.$api
        .SaveBaseInfo(params)
        .then(res => {
          if (res.data.code == '200') {
            const query = Object.assign(
              { cardId: vm.form.numberId },
              res.data.data
            )
            console.log(query)
            vm.$store.commit(vm.$types.ShowLoading, false)
            vm.$router.push({ name: 'InputInfo', query: query })
          } else {
            vm.$store.commit(vm.$types.ShowLoading, false)
            vm.$toast.fail(res.data.message)
          }
        })
        .catch(err => {
          vm.$toast.fail(JSON.stringify(err))
          vm.$store.commit(vm.$types.ShowLoading, false)
        })
    }
  },
  created() {}
}
</script>


<style lang="scss" scoped>
.radio {
  display: flex;
  padding: 10px;
  position: absolute;
  z-index: 1000;
  left: 80px;
  top: 0;
}

.phonenumber {
  padding: 5px 0;
  text-align: center;
  font-size: 13px;
}

.ad {
  font-size: 16px;
  color: #cc0000;
  text-align: center;
  padding: 10px;
  margin: 0 20px;
}

img {
  width: 100%;
}
.sg-tips {
  font-size: 12px;
  .subitle {
    font-size: 14px;
    padding: 5px;
    color: #cc0000;
  }
}
</style>
