<template>
  <div class="nav-wrapper">
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      style="text-align: center;position: relative; display: inline-block;"
    >
      <el-menu-item index="1">HOME</el-menu-item>
      <el-menu-item index="2">DEVELOPMENT MANAGERS</el-menu-item>
      <el-menu-item index="3">CORE SERVICES</el-menu-item>
      <el-menu-item index="5">PLANNERS</el-menu-item>
      <el-menu-item index="6">EXPERIENCE</el-menu-item>
      <el-menu-item index="7">PROFESSIONALS</el-menu-item>
      <el-menu-item index="8">ENVIRONMENTAL</el-menu-item>
      <el-menu-item index="9">PARTNERS</el-menu-item>
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
    height: 60px;

  }
  .nav-wrapper /deep/ .el-menu {
    text-align: center;
    position: relative;
    display: inline-block;
  }
</style>
