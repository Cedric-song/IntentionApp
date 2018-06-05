<template>
  <div>
    <van-nav-bar title="开卡" left-text="首页" right-text="下一步" left-arrow @click-left="$router.push({name: 'Home'})" @click-right="handlePost" />
    <van-row gutter="20">

      <van-col span="24">
        <div>
          <img src="/static/imgs/home2.png" alt="">
        </div>
        <div class="ad">
          开卡免费使用志愿宝， 不浪费1分上好大学
        </div>
      </van-col>

      <van-col span="24">
        <van-cell-group>
          <van-field value="¥299.00" label="预付金额" disabled required/>
        </van-cell-group>
      </van-col>

      <van-col span="24">
        <van-cell-group>
          <van-field value="吉林" label="归属省" disabled required/>
        </van-cell-group>
      </van-col>
      <van-col span="24">
        <van-cell-group style="position:relative;">
          <van-field value="" label="套餐选择" disabled required/>
          <van-radio-group v-model="form.set" class="radio">
            <!-- <van-radio name="1" style="padding:0 10px;">49元</van-radio> -->
            <van-radio name="1" style="padding:0 10px;">69元</van-radio>
          </van-radio-group>
        </van-cell-group>
      </van-col>
      <van-col span="24">
        <van-cell-group>
          <van-cell title="城市" :value="form.cityText" @click="showCityPicker = true" class="sg-form" required/>
        </van-cell-group>
      </van-col>
      <van-col span="24">
        <van-cell-group>
          <van-cell title="选择号码" :value="form.number" class="sg-form" required/>
        </van-cell-group>
      </van-col>
      <van-col span="24">
        <van-radio-group v-model="form.numberId">
          <van-row :gutter="20">
            <van-col :span="12" v-for="(item) in list" :key="item.id" class="phonenumber">
              <van-radio :name="item.id">{{item.number}}</van-radio>
            </van-col>
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
        set: '1'
      },
      list: [
        {
          number: 12213213123,
          id: 1
        },
        {
          number: 12213213123,
          id: 2
        },
        {
          number: 12213213123,
          id: 3
        },
        {
          number: 12213213123,
          id: 4
        },
        {
          number: 12213213123,
          id: 5
        },
        {
          number: 12213213123,
          id: 6
        },
        {
          number: 12213213123,
          id: 7
        },

        {
          number: 12213213123,
          id: 8
        },
        {
          number: 12213213123,
          id: 9
        },
        {
          number: 12213213123,
          id: 10
        }
      ],
      columns: [
        {
          id: '220100',
          text: '长春市'
        },

        {
          id: '222400',
          text: '延边朝鲜族自治州'
        },
        {
          id: '220300',
          text: '四平市'
        },
        {
          id: '220700',
          text: '松原市'
        },
        {
          id: '220800',
          text: '白城市'
        },
        {
          id: '220000',
          text: '其他'
        }
      ],
      showCityPicker: false
    }
  },

  watch: {
    'form.numberId': {
      immediate: true,
      handler(val) {
        if (val && val !== '') {
          this.form.number = this.$_.find(this.list, { id: val }).number
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
    FetchData() {
      const vm = this
      vm.$api.GetPhoneNumber().then(res => {
        if (res.data.code == '200') {
          vm.list = res.data.data.list
        } else {
          vm.$toast.fail(`获取电话号码列表失败，请稍后刷新再试。`)
        }
      })
    },
    handlePost() {
      const params = {
        province: '吉林',
        money: 299,
        set: this.form.set,
        numberid: this.form.number,
        cityId: this.form.cityId
      }

      for (let [key, value] of Object.entries(params)) {
        if (!value) {
          this.$toast.fail(`请补全所有必填信息。`)
          return false
        }
      }

      this.$router.push({ name: 'InputInfo' })
      const vm = this
      // vm.$api.SaveBaseInfo(params).then(res => {
      //   if (res.data.code == '200') {
      //     vm.$store.commit('SavePhoneInfo', {
      //       money: params.money,
      //       numberid: params.numberid,
      //       number: this.form.number,
      //       orderNo: res.data.data.orderNo
      //     })
      //     vm.$router.push({ name: 'InputInfo' })
      //   } else {
      //     vm.$toast.fail(res.data.msg)
      //   }
      // })
    }
  },
  created() {
    // this.FetchData()
  }
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
}

.ad {
  font-size: 20px;
  color: #cc0000;
  text-align: center;
  padding: 10px;
  margin: 0 20px;
}

img {
  width: 100%;
}
</style>
