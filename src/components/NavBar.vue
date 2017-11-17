<template>
  <div class="nav-wrapper">
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      style="text-align: center;position: relative; display: inline-block;"
    >
      <el-menu-item index="1">{{$t('NavBar.HOME')}}</el-menu-item>
      <el-menu-item index="2">{{$t('NavBar.DEVELOPMENT_MANAGERS')}}</el-menu-item>
      <el-menu-item index="3">{{$t('NavBar.CORE_SERVICES')}}</el-menu-item>
      <el-menu-item index="5">{{$t('NavBar.PLANNERS')}}</el-menu-item>
      <el-menu-item index="6">{{$t('NavBar.EXPERIENCE')}}</el-menu-item>
      <el-menu-item index="7">{{$t('NavBar.PROFESSIONALS')}}</el-menu-item>
      <el-menu-item index="8">{{$t('NavBar.ENVIRONMENTAL')}}</el-menu-item>
      <el-menu-item index="9">{{$t('NavBar.PARTNERS')}}</el-menu-item>
    </el-menu>
  </div>

</template>

<script>
  export default {
    data () {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      }
    },
    methods: {
//      handleSelect (key, keyPath) {
//        console.log(key, keyPath)
//      }
    }
  }
</script>

<style>
  .nav-wrapper {
    text-align: center;
    background-color: rgb(246, 246, 238);
    width: 100%;
    position: relative;
    min-height: 60px;

  }
  .nav-wrapper /deep/ .el-menu {
    text-align: center;
    position: relative;
    display: inline-block;
    /*width: 100%;*/
  }
  .nav-wrapper .el-menu /deep/ .el-menu-item{
    position: relative;
    display: inline-block;
  }
</style>
