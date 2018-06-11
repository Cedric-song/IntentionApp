<template>
  <div class="answer">
    <van-popup v-model="overlay" :close-on-click-overlay="false" class="lay-base">
      <div class="lay-cnt">
        <div class="img"></div>
        <div class="cnt">你共有
          <span class="fs20">{{ list.length + list1.length + list2.length }}</span> 所大学</div>
        <div class="cnt-2 fs20">可以填报</div>
        <div class="lay-box-hold">
          <div class="lay-box lay-box1">
            <div class="lay-box-top">冲一冲</div>
            <div class="lay-box-btm">
              <span class="fs20">{{list.length}}</span> 所</div>
          </div>

          <div class="lay-box lay-box2">
            <div class="lay-box-top">守一守</div>
            <div class="lay-box-btm">
              <span class="fs20">{{list1.length}}</span>所</div>
          </div>

          <div class="lay-box lay-box3">
            <div class="lay-box-top">保一保</div>
            <div class="lay-box-btm">
              <span class="fs20">{{list2.length}}</span>所</div>
          </div>
        </div>
        <div class="lay-btn">
          <van-button type="danger" @click="$router.push({name: 'OpenAccount'})">免费开卡查看结果</van-button>
        </div>
      </div>

    </van-popup>
    <van-nav-bar title="志愿宝智能报告书" left-text="返回" right-text="" left-arrow @click-left="$router.back()" />

    <wap-subtitle subtitle="冲击学校" style="margin: 20px 0 0 0;"></wap-subtitle>
    <van-list>
      <van-cell v-for="item in list" :key="item.name" :title="item.name" :value="'录取概率：' + item.percent + '%'" is-link :to="{name:'ReportItem',params: {categoryCode: $route.params.categoryCode},query: Object.assign($route.query,{testConfigType: '0'})}" />
    </van-list>

    <wap-subtitle subtitle="稳妥学校" style="margin: 20px 0 0 0;"></wap-subtitle>
    <van-list>
      <van-cell v-for="item in list1" :key="item.name" :title="item.name" :value="'录取概率：' + item.percent + '%'" is-link :to="{name:'ReportItem',params: {categoryCode:  $route.params.categoryCode},query: Object.assign($route.query,{testConfigType: '1'})}" />
    </van-list>

    <wap-subtitle subtitle="保底学校" style="margin: 20px 0 0 0;"></wap-subtitle>
    <van-list>
      <van-cell v-for="item in list2" :key="item.name" :title="item.name" :value="'录取概率：' + item.percent + '%'" is-link :to="{name:'ReportItem',params: {categoryCode:  $route.params.categoryCode},query: Object.assign($route.query,{testConfigType: '2'})}" />
    </van-list>

    <van-row :gutter="20">
      <van-col span="24" class="tip-red" style="font-size: 14px;">重要提示</van-col>
      <van-col span="24" class="tip-red" v-for="(item,index) in tipInfo" :key="index">{{item}}</van-col>
    </van-row>
  </div>
</template>


<script>
export default {
  data() {
    return {
      times: '',
      overlay: false,
      tipInfo: [
        '1.本系统依据历年院校录取数据提供高考志愿填报智能模拟功能，不等同于实际的网上填报志愿，建议考生在填报志愿时，结合本系统的推荐以完善志愿表；',
        '2.本系统提供“普通类文理科本一批、本二批、本三批、专科批”4个批次的志愿智能模拟功能;',
        '3.在正式填报时，请以教育考试院公布的最新招生计划为准；',
        '4.由于高考填报志愿是一个动态变化的过程，本系统提供的各种查询数据及预测数据仅作为填报志愿参考，请综合各种信息进行报考，勿仅以此填报志愿。'
      ],
      list: [
        {
          name: '北京大学',
          percent: '60',
          id: '11'
        },
        {
          name: '清华大学',
          percent: '55',
          id: '12'
        }
      ],
      list1: [
        {
          name: '北京理工大学',
          percent: '90',
          id: '21'
        },
        {
          name: '北京化工大学',
          percent: '85',
          id: '22'
        }
      ],
      list2: [
        {
          name: '北京农学院',
          percent: '91',
          id: '31'
        },
        {
          name: '北京技术学院',
          percent: '90',
          id: '32'
        },
        {
          name: '北京职业学院',
          percent: '87',
          id: '33'
        }
      ]
    }
  },

  methods: {},

  watch: {
    times: {
      handler(val) {
        if (val === '' || val == '0') {
          this.overlay = true
        } else if (Number(val) > 0) {
          this.overlay = false
        }
      }
    }
  },
  created() {
    this.$store.commit(this.$types.ShowLoading, true)
    const vm = this

    this.$api
      .GetTestTime({ wxId: this.$store.state.userinfo.openid })
      .then(res => {
        if (res.data.code == '200') {
          vm.times = res.data.data.reportNum
        } else {
          vm.$toast.fail(res.data.message)
        }
        vm.$store.commit(vm.$types.ShowLoading, false)
      })
  }
}
</script>


<style lang="scss" >
.lay-base {
  width: 80%;
  border-radius: 10px;
  .lay-cnt {
    background: #fff;
    color: #fff;
    height: 300px;
    width: 100%;
    border-radius: 10px;

    position: relative;
    .img {
      width: 100%;
      height: 220px;
      background-image: url(/static/imgs/report-bg.jpg);
      background-repeat: no-repeat;
      border-radius: 10px 10px 0 0;
    }
    .cnt {
      position: absolute;
      top: 20px;
      left: 20px;
    }

    .cnt-2 {
      position: absolute;
      top: 60px;
      left: 20px;
    }
    .fs20 {
      font-size: 20px;
    }

    .lay-box-hold {
      position: absolute;
      top: 120px;
      left: 20px;
      width: 86%;
      display: flex;
      justify-content: space-between;

      .lay-box {
        width: 60px;
        text-align: center;
        border-radius: 10px;
        .lay-box-top {
          color: #fff;
          height: 30px;
          line-height: 30px;
          width: 100%;
        }
        .lay-box-btm {
          height: 30px;
          line-height: 30px;
          background: #fff;
          color: #333333;
        }
      }

      .lay-box1 {
        .lay-box-top {
          background-color: #ff0033;
        }

        .lay-box-btm {
          span {
            color: #ff0033;
          }
        }
      }

      .lay-box2 {
        .lay-box-top {
          background-color: #ff9933;
        }

        .lay-box-btm {
          span {
            color: #ff9933;
          }
        }
      }

      .lay-box3 {
        .lay-box-top {
          background-color: #33cc66;
        }

        .lay-box-btm {
          span {
            color: #33cc66;
          }
        }
      }
    }

    .lay-btn {
      text-align: center;
      height: 80px;
      line-height: 80px;
    }
  }
}
</style>
