<template>
  <div id="app">
    <van-popup v-model="$store.state.loading.Loading" class="loading-pop">
      <van-loading type="spinner" />
    </van-popup>
    <router-view/>
  </div>
</template>

<style lang="postcss" scoped>
#app {
  padding: 10px;
}
</style>

