<template>
  <div>
    <van-nav-bar title="填写邮寄信息" left-text="后退" right-text="下一步" left-arrow @click-left="$router.back()" @click-right="$router.push({name: 'PayAccount'})" />

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
      <!-- <van-col span="24" class="tips">
        温馨提示：请填写正确的身份证姓名和身份证号码，验证不通过的用户将无法购买号卡，请认真填写。<br> 如您的身份证已办理移动电话卡达5张，开通后可能无法正常使用，请您核对清楚后填写身份证信息。
      </van-col> -->

      <van-col span="24">
        <van-cell-group>
          <van-field v-model="form.name" placeholder="" label="收货人" />
        </van-cell-group>
      </van-col>
      <van-col span="24">
        <van-cell-group>
          <van-field value="吉林" placeholder="" label="省份" disabled/>
        </van-cell-group>
      </van-col>
      <van-col span="24">
        <van-cell-group>
          <van-field v-model="form.cityText" placeholder="" label="地区" @click="showCityPicker = true" />
          <van-picker show-toolbar title="选择城市" :columns="columns" @cancel="onCancel" @confirm="onConfirm" v-show="showCityPicker" />
        </van-cell-group>
      </van-col>
      <van-col span="24">
        <van-cell-group>
          <van-field v-model="form.detail" placeholder="" label="详细地址" />
        </van-cell-group>
      </van-col>
      <van-col span="24">
        <van-cell-group>
          <van-field v-model="form.postal" placeholder="" label="邮政编码" />
        </van-cell-group>
      </van-col>
      <van-col span="24">
        <van-cell-group>
          <van-field v-model="form.number" placeholder="" label="手机号码" />
        </van-cell-group>
      </van-col>
      <van-col span="24">
        <van-cell-group>
          <van-field value="送货上门" placeholder="" label="配送方式" disabled/>
        </van-cell-group>
      </van-col>
      <van-col span="24">
        <van-cell-group style="position:relative;">
          <van-radio-group v-model="form.shipSet" class="radio">
            <van-cell>套餐选择
              <van-radio name="1">只工作日送货（双休日、假期不送货）</van-radio>
              <van-radio name="2">只双休日、假期送货（工作日不送货）</van-radio>
              <van-radio name="3">工作日、双休日与假期均可送货</van-radio>
            </van-cell>

          </van-radio-group>
        </van-cell-group>
      </van-col>

    </van-row>
  </div>
</template>


<script>
export default {
  data() {
    return {
      step: 1,
      form: {},
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
    handlePost() {
      const params = this.form
      this.$api.SaveShipInfo(params).then(res => {
        if (res.data.code == 200) {
          this.$router.push({ name: 'PayAccount' })
        } else {
          this.$toast.fail(res.data.msg)
        }
      })
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

.radio {
  // display: flex;
  // padding: 10px;
  // position: absolute;
  // z-index: 1000;
  // left: 80px;
  // top: 0;
}
</style>
