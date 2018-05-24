<template>
  <div>
    <van-nav-bar :title="$route.query.name" left-text="返回" right-text="" left-arrow @click-left="$router.back()" />
  </div>
</template>
