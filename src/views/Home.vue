<template>
  <div class="Home">
    <img class="home-bg" src="@/assets/imgs/home.jpeg" alt="">
    <van-row gutter="20">
      <van-col span="24" class="subtitle">
        <i class="icon"></i>
        <span>高考服务</span>
      </van-col>
    </van-row>
    <van-row gutter="20" style="padding: 10px 0;">
      <van-col span="8" class="service" @touchstart.native="$router.push({name: 'Score'})">
        <div class="img">
          <svg class="icon-font" aria-hidden="true">
            <use xlink:href="#icon-chengji"></use>
          </svg>
        </div>
        <span>成绩查询</span>
      </van-col>
      <van-col span="8" class="service" @touchstart.native="$router.push({name: 'Test'})">
        <div class="img">
          <svg class="icon-font" aria-hidden="true">
            <use xlink:href="#icon-ceshi"></use>
          </svg>
        </div>
        <span>录取概率测试</span>
      </van-col>
      <van-col span="8" class="service">
        <div class="img">
          <svg class="icon-font" aria-hidden="true">
            <use xlink:href="#icon-tianbao"></use>
          </svg>
        </div>
        <span>智能填报</span>
      </van-col>
    </van-row>

    <van-row gutter="20" style="padding: 20px 0;">
      <van-col span="24" class="subtitle">
        <i class="icon"></i>
        <span>其他服务</span>
      </van-col>
    </van-row>
    <van-row gutter="20" style="padding: 10px 0;">
      <van-col span="8" class="service">
        <div class="img">
          <svg class="icon-font" aria-hidden="true">
            <use xlink:href="#icon-zhuanjia"></use>
          </svg>
        </div>
        <span>专家解读</span>
      </van-col>
      <van-col span="8" class="service">
        <div class="img">
          <svg class="icon-font" aria-hidden="true">
            <use xlink:href="#icon-zixun"></use>
          </svg>
        </div>
        <span>咨询热线</span>
      </van-col>

    </van-row>

  </div>

</template>


<style lang="scss" scoped>
.home-bg {
  width: 100%;
  margin-bottom: 20px;
}

.subtitle {
  height: 20px;
  line-height: 20px;

  span {
    vertical-align: top;
  }
  .icon {
    font-style: normal;
    display: inline-block;
    width: 4px;
    height: 20px;
    background: greenyellow;
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
