<template>
  <div class="header-wrapper">
    <img src="../assets/logo.jpg"/>
    <h3>{{$t('header.h3')}}</h3>
    <div class="buttons-wrapper">
      <el-button size="small" round>{{$t('header.English')}}</el-button>
      <el-button size="small" round>{{$t('header.Chinese')}}</el-button>
      <el-button size="small" round>{{$t('header.Arabic')}}</el-button>
    </div>
  </div>
</template>

<script>
  export default {
  }
</script>

<style>
  .header-wrapper {
    background-color: #ffffff;
    width: 100%;
    position: relative;
    /*padding-bottom: 1%;*/
    top: 0;
    text-align: left;
    padding: 0;
    display: inline-block;
    white-space: nowrap;
  }
  .header-wrapper img {
    width: 100px;
    margin: 0;
    margin-left: 60px;
    display: inline-block;
    position: relative;
  }
  .header-wrapper h3 {
    display: inline-block;
    position: absolute;
    padding: 0;
    margin: 0;
    top: 50%;
    transform: translate(0, -50%);
  }
  .header-wrapper .buttons-wrapper {
    right: 60px;
    display: inline-block;
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
  }
</style>
