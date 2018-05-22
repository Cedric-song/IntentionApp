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

    <van-tabbar v-model="active">
      <van-tabbar-item icon="shop" :to="{name: 'Home'}">首页</van-tabbar-item>
      <van-tabbar-item icon="chat" :to="{name: 'Mine'}">我的</van-tabbar-item>
    </van-tabbar>
  </div>

</template>

<script>
import img from '@/assets/imgs/home.jpeg'
export default {
  data() {
    return {
      active: 0,
      images: [img, img],
      service: [
        {
          name: '开卡激活',
          icon: '#icon-tianbao',
          to: 'OpenAccount'
        },
        {
          name: '成绩查询',
          icon: '#icon-chengji',
          to: 'Score'
        },
        {
          name: '录取概率测试',
          icon: '#icon-ceshi',
          to: 'Test'
        },
        {
          name: '智能填报',
          icon: '#icon-tianbao',
          to: 'Apply'
        }
      ],
      otherService: [
        {
          name: '专家解读',
          icon: '#icon-zhuanjia',
          to: 'Qrcode'
        },
        {
          name: '咨询热线',
          icon: '#icon-zixun',
          to: 'Qrcode'
        }
      ]
    }
  }
}
</script>


<style lang="scss" scoped>
.home-bg {
  width: 100%;
  margin-bottom: 20px;
  height: 200px;
  img {
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
    color: green;
  }

  span {
    font-size: 14px;
    padding-top: 10px;
  }
}
.icon-font {
  width: 2em;
  height: 2em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
