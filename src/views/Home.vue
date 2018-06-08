<template>
  <div class="Home">
    <van-swipe :autoplay="3000" class="home-bg">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>

    <wap-subtitle subtitle="高考服务"></wap-subtitle>
    <van-row gutter="20" style="padding: 10px 0;">
      <van-col span="8" class="service" @click.native="$router.push({name: item.to})" v-for="item in service" :key="item.name">
        <div class="img">
          <svg class="icon-font" aria-hidden="true">
            <use :xlink:href="item.icon"></use>
          </svg>
        </div>
        <span>{{item.name}}</span>
      </van-col>
    </van-row>

    <wap-subtitle subtitle="其他服务"></wap-subtitle>
    <van-row gutter="20" style="padding: 10px 0;">
      <van-col span="8" class="service" @click.native="$router.push({name: item.to})" v-for="item in otherService" :key="item.name">
        <div class="img">
          <svg class="icon-font" aria-hidden="true">
            <use :xlink:href="item.icon"></use>
          </svg>
        </div>
        <span>{{item.name}}</span>
      </van-col>
    </van-row>
    <van-row gutter="20" style="padding: 10px 0;" class="tips">
      <van-col span="24">
        温馨提示：
      </van-col>
      <van-col span="24">
        1.本系统不含
        <span class="spec-tips">体育类、艺术类院校分数。</span>
        因此体育类、艺术类考生无法使用本系统
      </van-col>
      <van-col span="24">
        2.本系统目前只向吉林省考生开放
      </van-col>
      <van-col span="24">
        3.由于高考填报志愿是一个动态变化的过程，本系统查询历年录取数据及预测数据仅作为填报志愿参考
      </van-col>
    </van-row>

    <van-tabbar v-model="active">
      <van-tabbar-item icon="shop" :to="{name: 'Home'}">首页</van-tabbar-item>
      <van-tabbar-item icon="chat" :to="{name: 'Mine'}">我的</van-tabbar-item>
    </van-tabbar>
  </div>

</template>

<script>
export default {
  data() {
    return {
      active: 0,
      images: [
        '/static/imgs/home1.png',
        '/static/imgs/home2.png',
        '/static/imgs/home3.png',
        '/static/imgs/home4.png',
        '/static/imgs/home5.png'
      ],
      service: [
        {
          name: '成绩查询',
          icon: '#icon-chengji',
          to: 'Score'
        },
        {
          name: '录取概率测试',
          icon: '#icon-ceshi',
          to: 'Test'
          // to: 'Home'
        },
        {
          name: '一键智能填报',
          icon: '#icon-tianbao',
          // to: 'Apply'
          to: 'Home'
        },
        {
          name: '院校查询',
          icon: '#icon-university',
          to: 'UniversityList'
        },
        {
          name: '专业查询',
          icon: '#icon-major',
          to: 'MajorList'
        },

        {
          name: '开卡',
          icon: '#icon-account',
          // to: 'OpenAccount'
          to: 'Home'
        },
        {
          name: '激活',
          icon: '#icon-active',
          to: 'ActiveCard'
        }
      ],
      otherService: [
        {
          name: '专家解读',
          icon: '#icon-zhuanjia',
          to: 'Expert'
        },
        {
          name: '咨询热线',
          icon: '#icon-zixun',
          to: 'Qrcode'
        }
      ]
    }
  },
  methods: {},
  created() {}
}
</script>


<style lang="scss" scoped>
.home-bg {
  width: 100%;
  margin-bottom: 20px;
  height: 200px;
  img {
    height: 200px;
    width: 100%;
  }
}

.service {
  display: flex;
  flex-direction: column;
  text-align: center;
  .img {
    position: relative;
    bottom: -5px;
    color: #1cd4ae;
  }

  span {
    font-size: 13px;
    padding-top: 10px;
    color: #4a4a4a;
  }
}
.icon-font {
  width: 2em;
  height: 2em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

.tips {
  font-size: 12px;
  padding-bottom: 50px !important;
  .spec-tips {
    color: #cc0000;
  }
}
</style>
