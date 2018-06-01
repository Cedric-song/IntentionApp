<template>
  <div>
    <van-nav-bar title="开卡" left-text="返回首页" right-text="下一步" left-arrow @click-left="$router.push({name: 'Home'})" @click-right="handlePost" />
    <van-row gutter="20">

      <van-col span="24" class="ad">
        预存300元话费免费开通电信志愿宝，成功选大学，报考无烦恼
      </van-col>

      <van-col span="24">
        <van-cell-group>
          <van-field value="¥300.00" label="预付款" disabled />
        </van-cell-group>
      </van-col>

      <van-col span="24">
        <van-cell-group>
          <van-field value="吉林" label="归属省" disabled />
        </van-cell-group>
      </van-col>
      <van-col span="24">
        <van-cell-group style="position:relative;">
          <van-field value="" label="套餐选择" disabled />
          <van-radio-group v-model="form.set" class="radio">
            <van-radio name="1" style="padding:0 10px;">49元</van-radio>
            <van-radio name="2" style="padding:0 10px;">69元</van-radio>
          </van-radio-group>
        </van-cell-group>

      </van-col>

      <van-col span="24">
        <van-cell-group>
          <van-field v-model="form.numberId" placeholder="" label="选择号码" />
        </van-cell-group>
      </van-col>

      <van-col span="24">
        <van-cell-group>
          <van-field v-model="form.cityText" placeholder="" label="城市" @click="showCityPicker = true" />
          <van-picker show-toolbar title="选择城市" :columns="columns" @cancel="onCancel" @confirm="onConfirm" v-show="showCityPicker" />
        </van-cell-group>
      </van-col>

      <van-checkbox-group v-model="result" :max="1">
        <van-row :gutter="20">
          <van-col :span="12" v-for="(item) in list" :key="item" class="phonenumber">
            <van-checkbox :name="item.id">
              {{ item.number }}
            </van-checkbox>
          </van-col>
        </van-row>
      </van-checkbox-group>
    </van-row>
  </div>
</template>


<script>
export default {
  data() {
    return {
      form: {},
      list: [],
      result: [],
      columns: [
        {
          id: '220100',
          text: '长春市'
        },
        {
          id: '220200',
          text: '吉林市'
        },
        {
          id: '220300',
          text: '四平市'
        },
        {
          id: '220400',
          text: '辽源市'
        },
        {
          id: '220500',
          text: '通化市'
        },
        {
          id: '220600',
          text: '白山市'
        },
        {
          id: '220700',
          text: '松原市'
        },
        {
          id: '220800',
          text: '白城市'
        }
      ],
      showCityPicker: false
    }
  },
  methods: {
    onConfirm(value, index) {
      this.form.cityId = value.id
      this.form.cityText = value.text
      this.showCityPicker = false
    },
    onCancel() {
      this.showCityPicker = false
    },
    FetchData() {
      this.$api.GetPhoneNumber().then(res => {
        if (res.data.code == 200) {
          this.list = res.data.data.list
        } else {
          this.$dialog
            .alert({
              message: '获取数据失败，点击确定请稍后再试。'
            })
            .then(() => {
              // this.FetchData()
            })
        }
      })
    },
    handlePost() {
      const params = {
        province: '吉林',
        set: this.form.set,
        numberId: this.result[0],
        cityId: this.form.cityId
      }
      const vm = this
      this.$api.SaveBaseInfo(params).then(res => {
        if (res.data.code == 200) {
          vm.$router.push({ name: 'InputInfo' })
        } else {
          this.$toast.fail(res.data.msg)
        }
      })
    }
  },
  created() {
    this.FetchData()
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
  color: #ffcc66;
  text-align: center;
  padding: 10px;
}
</style>
