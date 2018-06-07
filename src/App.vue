<template>
  <div id="app">
    <van-popup v-model="$store.state.loading.Loading" class="loading-pop" :close-on-click-overlay="false">
      <van-loading type="spinner" />
    </van-popup>
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive" />
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive" />

  </div>
</template>

<script>
export default {
  created() {
    if (this.$route.query.openId) {
      this.$store.commit(this.$types.SetUserinfo, this.$route.query.openId)
      console.log(`openid: ${this.$store.state.userinfo.openid}`)
    } else if (this.$store.state.userinfo.openid) {
      console.log(`openid: ${this.$store.state.userinfo.openid}`)
    } else {
      this.getOpenId()
    }
  },
  methods: {
    getOpenId() {
      this.$api.GetOpenId({ state: location.href.split('?')[0] }).then(res => {
        if (res.data.code == '200') {
          window.location.href = res.data.data
        }
      })
    }
  }
}
</script>

<style lang="postcss" scoped>
#app {
  padding: 10px;
}
</style>

