<template>
  <div class="pay">
    <van-nav-bar title="支付订单激活志愿宝" left-text="后退" left-arrow @click-left="$router.back()" />
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
        <div>支付金额：¥300.00</div>
      </van-col>
      <van-col :span="24" class="set">
        <div class="set-title">套餐内容及自费说明</div>
        <el-table :data="tableData" style="width: 100%" border>
          <el-table-column prop="money" label="月基本费（元）">
          </el-table-column>
          <el-table-column prop="data" label="国内流量">
          </el-table-column>
          <el-table-column prop="min" label="国内语音拨打分钟数（分钟）">
          </el-table-column>
          <el-table-column prop="set" label="套餐内容">
            <template slot-scope="scope">
              {{scope.row.set1}}
              <br> {{scope.row.set2}}

            </template>
          </el-table-column>
        </el-table>
      </van-col>

      <img src="/static/imgs/set-info.png" alt="" style="width:100%;margin-bottom: 10px;">

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
      step: 2,
      checked: '',
      tableData: [
        {
          money: '99元',
          data: '不限量（20GB达量降速）',
          min: 300,
          set: '',
          set1: '1.国内接听免费',
          set2: '2.赠送来电显示和189邮箱'
        }
      ]
    }
  },
  methods: {
    handlePay() {
      this.$dialog
        .confirm({
          title: '去付款',
          message: '共计300元'
        })
        .then(() => {
          this.$toast.success('付款成功')
          this.$router.push({ name: 'PaySuccess' })
        })
        .catch(() => {
          this.$toast.fail('取消付款')
        })
    },
    payAction() {}
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
  }

  .el-table--border {
    /* border-color: #fb8522; */
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

