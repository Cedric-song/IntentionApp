<template>
  <div>
    <van-nav-bar :title="$route.query.name" left-text="返回" right-text="" left-arrow @click-left="$router.back()" />
    <img src="@/assets/imgs/home.jpeg" alt="" style="width: 100%;">
    <wap-subtitle subtitle="专业介绍" class="pd"></wap-subtitle>
    <van-row>
      <van-col span="24" class="cnts">
        计算机专业涵盖软件工程专业，主要培养具有良好的科学素养，系统地、较好地掌握计算机科学与技术包括计算机硬件、软件与应用的基本理论、基本知识和基本技能与方法，能在科研部门、教育单位、企业、事业、技术和行政管理部门等单位从事计算机教学、科学研究和应用的计算机科学与技术学科的高级科学技术人才。
      </van-col>
    </van-row>
    <wap-subtitle subtitle="主修课程" class="pd"></wap-subtitle>
    <van-row>
      <van-col span="24" class="cnts">
        算法、数据结构、操作系统、编译原理、计算机组成原理、计算机体系结构、计算机网络等。
      </van-col>
    </van-row>
    <wap-subtitle subtitle="就业方向" class="pd"></wap-subtitle>

    <van-row>
      <van-col span="24" class="cnts">
        本专业毕业生可在如百度，阿里等企业中就职研发工程师，测试工程师，运维工程师等岗位。
      </van-col>
    </van-row>
  </div>
</template>


<style lang="scss" scoped>
.pd {
  padding: 20px 0;
}

.cnts {
  color: #9e9e9e;
  font-size: 13px;
  text-indent: 2em;
}
</style>
