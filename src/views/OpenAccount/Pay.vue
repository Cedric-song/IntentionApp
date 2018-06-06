<template>
  <div class="pay">
    <van-nav-bar title="支付订单激活志愿宝" left-text="后退" left-arrow @click-left="handleLeftClose" />
    <van-row>
      <van-col span="24">
        <van-steps :active="step">
          <van-step>填写入网信息</van-step>
          <van-step>填写邮寄信息</van-step>
          <van-step>支付</van-step>
        </van-steps>
      </van-col>
    </van-row>
    <van-row :gutter="20" style="margin-top: 20px;">
      <van-col :span="24" class="bill">
        支付订单激活志愿宝
        <div>支付金额：¥299.00</div>
      </van-col>
      <van-col :span="24" class="set">
        <div class="set-title">套餐内容及自费说明</div>
        <el-table :data="tableData" style="width: 100%" border>
          <el-table-column prop="name" label="套餐名称" width="150">
          </el-table-column>
          <el-table-column prop="money" label="月租费" width="150">
          </el-table-column>
          <el-table-column label="套餐内资费">
            <el-table-column prop="data" label="流量" width="120">
            </el-table-column>
            <el-table-column prop="voice" label="国内语音（分钟）" width="120">
            </el-table-column>
            <el-table-column prop="range" label="免费接听范围" width="120">
            </el-table-column>
          </el-table-column>
          <el-table-column label="超出后资费">
            <el-table-column prop="fee" label="国内主叫通话资费（元/分钟）" width="120">
            </el-table-column>
            <el-table-column prop="plan" label="达量降速" width="120">
            </el-table-column>
            <el-table-column prop="text" label="短、彩信" width="120">
            </el-table-column>
          </el-table-column>
          <el-table-column prop="gift" label="赠送" width="150">
          </el-table-column>
        </el-table>
      </van-col>

      <van-col span="24" class="info strong">
        套餐说明：
      </van-col>
      <van-col span="24" class="info" v-for="(item,index) in setInfo" :key="index">{{item}}</van-col>
      <van-col :span="24">
        <van-button type="primary" bottom-action class="btn" @click="handlePay">去付款</van-button>
      </van-col>
    </van-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      wxparams: {},
      step: 2,
      checked: '',
      tableData: [
        {
          name: '金榜题名卡套餐',
          money: '69',
          data: '国内不限量',
          voice: '300',
          range: '国内',
          fee: 0.15,
          plan: '当月国内手机上网流量达到20GB后，上网速率降至1Mbps，次月恢复',
          text: '0.1元/条',
          gift: '来显'
        }
      ],
      setInfo: [
        '1.套餐超出资费：国内流量：当月国内手机上网流量达到20GB后，上网速率降至1Mbps，次月恢复。',
        '2.手机上网流量可用于4G、3G、2G上网方式，限在国内使用，不含WLAN（Wi-Fi）上网。',
        '3.首月执行过渡期资费，订购当月套餐月基本费按日计扣（激活当日到月底），费用四舍五入到分，套餐内包含的流量及通话分钟按天折算，向上取整。',
        '4.套餐内流量不适用于流量不清零规则。',
        '5.国内不包括港澳台地区。',
        '6.所有套餐包含内容及相关政策以电信公司解释为准'
      ]
    }
  },
  methods: {
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
    handlePay() {
      this.$dialog
        .confirm({
          title: '去付款',
          message: '共计299元'
        })
        .then(() => {
          this.payAction()
        })
        .catch(() => {
          this.$toast.fail('取消付款')
        })
    },
    runWeixinJS(cb) {
      if (typeof window.WeixinJSBridge === 'undefined') {
        if (document.addEventListener) {
          document.addEventListener('WeixinJSBridgeReady', cb, false)
        } else if (document.attachEvent) {
          document.attachEvent('WeixinJSBridgeReady', cb)
          document.attachEvent('onWeixinJSBridgeReady', cb)
        }
      } else {
        cb()
      }
    },
    wechatpay() {
      const vm = this
      const data = this.wxparams
      window.WeixinJSBridge.invoke(
        'getBrandWCPayRequest',
        {
          appId: data.appId,
          timeStamp: data.timeStamp,
          nonceStr: data.nonceStr,
          package: data.package,
          signType: data.signType,
          paySign: data.paySign
        },
        function(res) {
          if (res.err_msg === 'get_brand_wcpay_request:ok') {
            console.log('get_brand_wcpay_request:ok')
            vm.$toast.success('付款成功')
            vm.$router.push({ name: 'PaySuccess' })
          } else if (res.err_msg === 'get_brand_wcpay_request:cancel') {
            WeixinJSBridge.invoke('closeWindow', {}, function(res) {
              console.log('get_brand_wcpay_request:cancel')
              vm.$toast.success('get_brand_wcpay_request:cancel')
            })
          } else {
            WeixinJSBridge.invoke('closeWindow', {}, function(res) {
              console.log('get_brand_wcpay_request:fail')
              vm.$toast.success('get_brand_wcpay_request:fail')
            })
          }
        }
      )
    },
    payAction() {
      const vm = this

      const params = {
        money: 0.01,
        openid:
          this.$store.state.userinfo.openid || 'oDtJ10RDKfRcoGTUVFySkeztR7Ko',
        orderId: this.$route.query.orderId,
        cardDetailId: this.$route.query.cardDetailId
      }

      this.$api.PayAction(params).then(res => {
        if (res.data.code == '200') {
          this.wxparams = res.data.data
          vm.runWeixinJS(vm.wechatpay)
        }
      })
    }
  }
}
</script>


<style lang="scss" scoped>
.pay {
  text-align: center;
}

.bill {
  color: #cc0000;
  font-size: 20px;
  div {
    color: #cc0000;
  }
}

.info {
  text-align: left;
  font-size: 12px;
  margin: 5px 0;
  &.strong {
    font-weight: bold;
    font-size: 16px;
    margin: 10px 0;
    color: #fb8522;
  }
}
</style>


<style lang="scss" >
.pay {
  .el-table th,
  .el-table tr {
    font-size: 11px;
  }

  .el-table th {
    background: #ffebd8;
    color: #fb8522;
    padding: 5px;
  }
  .el-table td {
    padding: 0;
  }
  .el-table--border {
  }

  .set-title {
    text-align: left;
    color: #fb8522;
    border-left: 6px solid #fb8522;
    padding: 10px 0;
    text-indent: 0.5em;
    width: 160px;
    margin: 10px 0 4px 0;
  }
}
</style>

