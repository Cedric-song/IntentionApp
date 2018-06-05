<template>
  <div>
    <van-nav-bar title="填写邮寄信息" left-text="后退" right-text="下一步" left-arrow @click-left="$router.back()" @click-right="handlePost" />
    <!-- <van-nav-bar title="填写邮寄信息" right-text="下一步" @click-right="handlePost" /> -->

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
      <van-col span="24">
        <van-cell-group>
          <van-field v-model="form.name" placeholder="请输入收货人姓名" label="收货人" required/>
        </van-cell-group>
      </van-col>
      <van-col span="24">
        <van-cell-group>
          <van-field value="吉林省" placeholder="" label="省份" disabled required/>
        </van-cell-group>
      </van-col>
      <van-col span="24">
        <van-cell-group>
          <van-cell title="地区" :value="form.cityText" @click="showCityPicker = true" class="sg-form" required/>
        </van-cell-group>
      </van-col>
      <van-col span="24">
        <van-cell-group>
          <van-field v-model="form.detail" placeholder="请输入收货地址" label="详细地址" required/>
        </van-cell-group>
      </van-col>
      <van-col span="24">
        <van-cell-group>
          <van-field v-model="form.postal" placeholder="请输入6位邮政编码" label="邮政编码" required maxlength="6" :error="postalError" :error-message="postalErrorMsg" />
        </van-cell-group>
      </van-col>
      <van-col span="24" style="position:relative;">
        <van-cell-group>
          <van-field v-model="form.number" placeholder="请输入11位手机号" label="手机号码" required maxlength="11" :error="numberError" :error-message="numberErrorMsg" />
        </van-cell-group>
      </van-col>
      <van-col span="24">
        <van-cell-group>
          <van-field value="送货上门" placeholder="" label="配送方式" disabled required/>
        </van-cell-group>
      </van-col>
      <van-col span="24">
        <van-cell-group style="position:relative;">
          <van-radio-group v-model="form.shipSet" class="radio">
            <van-cell required>套餐选择
              <van-radio name="1">只工作日送货（双休日、假期不送货）</van-radio>
              <van-radio name="2">只双休日、假期送货（工作日不送货）</van-radio>
              <van-radio name="3">工作日、双休日与假期均可送货</van-radio>
            </van-cell>
          </van-radio-group>
        </van-cell-group>
      </van-col>

      <van-col span="24">
        <span class="phone-tip">根据工信部实名制的要求，收货人必须与入网人一致</span>
      </van-col>

      <van-col span="24" class="btm-picker">
        <van-picker show-toolbar title="选择城市" :columns="columns" @cancel="onCancel" @confirm="onConfirm" v-show="showCityPicker" />
      </van-col>
    </van-row>
  </div>
</template>


<script>
const _numberErrorMsg = '请输入正确的手机号码'
const _postalErrorMsg = '请输入正确的邮政编码'

export default {
  data() {
    return {
      step: 1,
      form: {
        shipSet: '1',
        name: '',
        detail: '',
        postal: '',
        number: '',
        cityId: ''
      },
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
      showCityPicker: false,
      numberError: false,
      numberErrorMsg: '',
      postalError: false,
      postalErrorMsg: ''
    }
  },
  watch: {
    'form.number': {
      handler(val, oldVal) {
        this.numberError = false
        this.numberErrorMsg = ''
      }
    },
    'form.postal': {
      handler(val, oldVal) {
        this.postalError = false
        this.postalErrorMsg = ''
      }
    }
  },
  methods: {
    validate() {
      let flag = true
      if (!RegExp(/^(1[0-9])[0-9]{9}$/).test(this.form.number)) {
        this.$toast.fail(_numberErrorMsg)
        this.numberErrorMsg = _numberErrorMsg
        this.numberError = true
        flag = false
      }

      if (!RegExp(/^[1-9]\d{5}(?!\d)$/).test(this.form.postal)) {
        this.$toast.fail(_postalErrorMsg)
        this.postalErrorMsg = _postalErrorMsg
        this.postalError = true
        flag = false
      }

      return flag
    },
    onConfirm(value, index) {
      this.form.cityId = value.id
      this.form.cityText = value.text
      this.showCityPicker = false
    },
    onCancel() {
      this.showCityPicker = false
    },
    handlePost() {
      if (!this.validate()) {
        return false
      }

      const params = this.form

      for (let [key, value] of Object.entries(params)) {
        if (!value) {
          this.$toast.fail(`请补全所有必填信息。`)
          return false
        }
      }

      this.$router.push({ name: 'PayAccount' })

      // this.$api.SaveShipInfo(params).then(res => {
      //   if (res.data.code == 200) {
      //     this.$router.push({ name: 'PayAccount' })
      //   } else {
      //     this.$toast.fail(res.data.msg)
      //   }
      // })
    }
  }
}
</script>


<style lang="scss" scoped>
.tips {
  color: #cc0000;
  font-size: 11px;
  padding: 10px;
}

.phone-tip {
  color: #cc0000;
  padding-left: 10px;
  // position: absolute;
  // top: 30px;
  font-size: 12px;
}
</style>
