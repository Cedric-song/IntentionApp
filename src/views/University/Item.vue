<template>
  <div v-if="Object.keys(this.form).length !== 0">
    <van-nav-bar :title="$route.query.name" left-text="返回" right-text="" left-arrow @click-left="$router.back()" />

    <wap-subtitle subtitle="院校信息" style="margin-top: 20px;"></wap-subtitle>
    <van-row :gutter="20" class="info">
      <van-col span="24" class="info-item" style="text-align:center;height:130px;"><img :src="form.logo" alt=""></van-col>
      <van-col span="24" class="info-item">院校名称： {{$route.query.name}}</van-col>
      <van-col span="24" class="info-item">院校代码： {{form.schoolNo}}</van-col>
      <van-col span="24" class="info-item">院校级别： {{form.eduLevel}}</van-col>
      <van-col span="24" class="info-item">所在省市： {{form.provinceName}}</van-col>
      <van-col span="24" class="info-item">详细地址： {{form.address}}</van-col>
      <van-col span="24" class="info-item">所在省市： {{form.provinceName}}</van-col>
      <van-col span="24" class="info-item">分类： {{form.category}}</van-col>
      <van-col span="24" class="info-item">类别： {{form.nature}}</van-col>
      <van-col span="24" class="info-item">招办电话： {{form.callPhone}}</van-col>
      <van-col span="24" class="info-item">邮箱： {{form.emailAddress}}</van-col>
      <van-col span="24" class="info-item">官网：
        <span class="item-blue">{{form.webSite}}</span>
      </van-col>
    </van-row>
    <template v-if="intro !== ''">
      <wap-subtitle subtitle="院校简介" style="margin-top: 20px;"></wap-subtitle>
      <van-row :gutter="20" class="info">
        <van-col span="24" class="info-item info-intro" :class="{'showmore': showMore}" v-html="intro"></van-col>
        <van-col span=" 24 " class="info-item info-more " @click.native="showMore=! showMore "> {{showMore ? '收起' : '查看更多'}}</van-col>
      </van-row>
    </template>

  </div>
</template>


<script>
export default {
  data() {
    return {
      form: {},
      intro: '',
      showMore: false
    }
  },
  methods: {
    getDate() {
      const vm = this
      vm.$store.commit(vm.$types.ShowLoading, true)

      vm.$api
        .GetUniversityById({ id: vm.$route.params.id })
        .then(res => {
          if (res.data.code == '200') {
            vm.form = res.data.data
            vm.intro = vm.form.remark.replace(/<br>/gi, '')
          } else {
            vm.$toast.fail(JSON.stringify(res.data.msg))
          }
          vm.$store.commit(vm.$types.ShowLoading, false)
        })
        .catch(err => {
          vm.$toast.fail(JSON.stringify(err))
          vm.$store.commit(vm.$types.ShowLoading, false)
        })
    }
  },
  created() {
    this.getDate()
  }
}
</script>

<style lang="scss" scoped>
.cell {
  margin: 10px 0;
  line-height: 1.4;
  .icon {
    width: 50px;
    height: 50px;
    margin-right: 15px;
  }
  .tag {
    margin-right: 5px;
  }
  .tag-0 {
    background: #1cd4ae;
  }
  .tag-1 {
    background: #cc0000;
  }
  .tag-2 {
    background: #33ccff;
  }
  .tag-3 {
    background: #cc3333;
  }

  .info {
    color: #333333;
    font-size: 11px;
  }
}

.info {
  font-size: 13px;
  padding-top: 10px;
  .info-item {
    padding-top: 5px;
    .item-red {
      color: #cc0000;
    }

    .item-blue {
      color: #0066ff;
    }

    &.item-tip {
      color: #333333;
      font-size: 9px;
    }

    &.info-intro {
      &.showmore {
        height: auto;
      }
      text-indent: 2em;
      height: 97px;
      text-overflow: ellipsis;
      // white-space: nowrap;
      overflow: hidden;
    }

    &.info-more {
      text-align: center;
      color: #0066ff;
      width: 100%;
    }
  }
}

img {
  width: 120px;
  height: 120px;
}
</style>
