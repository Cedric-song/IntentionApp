<template>
  <div>
    <van-nav-bar title="录取概率报告" left-text="返回" right-text="" left-arrow @click-left="$router.back()" />
    <wap-subtitle subtitle="院校信息" style="margin-top: 20px;"></wap-subtitle>
    <van-row :gutter="20" class="info">
      <van-col span="24" class="info-item">院校名称： 天津大学</van-col>
      <van-col span="24" class="info-item">院校代码： 1001</van-col>
      <van-col span="24" class="info-item">院校级别： 985 + 211</van-col>
      <van-col span="24" class="info-item">所在省市： 天津</van-col>
      <van-col span="24" class="info-item">特色专业： 航天学院</van-col>
      <van-col span="24" class="info-item">专业介绍： 计算机学院/法学院/体育学院</van-col>
      <van-col span="24" class="info-item">招办电话： 022-88886888</van-col>
      <van-col span="24" class="info-item">官网：
        <span class="item-blue">http://www.tju.edu.cn/</span>
      </van-col>
      <van-col span="24" class="info-item">院校录取概率： 90%</van-col>
    </van-row>

    <wap-subtitle subtitle="查看历年各专业录取分数表" style="margin-top: 20px;"></wap-subtitle>
    <van-row :gutter="20">
      <van-col :span="24">

      </van-col>
    </van-row>
    <wap-subtitle subtitle="查看历年招生人数折线及录取位次图" style="margin-top: 20px;"></wap-subtitle>
    <wap-subtitle subtitle="查看录取线差图" style="margin-top: 20px;"></wap-subtitle>
    <wap-subtitle subtitle="查看历年录取人数折线图（分一、二、三、征集志愿）" style="margin-top: 20px;"></wap-subtitle>
    <wap-subtitle subtitle="专业录取对比图" style="margin-top: 20px;"></wap-subtitle>

  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {}
    }
  }
}
</script>

