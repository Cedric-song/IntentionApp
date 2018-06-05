<template>
  <div id="app">
    <van-popup v-model="$store.state.loading.Loading" class="loading-pop">
      <van-loading type="spinner" />
    </van-popup>
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive" />
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive" />

  </div>
</template>

<style lang="postcss" scoped>
#app {
  padding: 10px;
}
</style>

