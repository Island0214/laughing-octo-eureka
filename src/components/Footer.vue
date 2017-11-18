<template>
  <div class="footer-wrapper">
    <el-row :gutter="20" style="margin-bottom: 0">
      <!--<el-col :span="12">-->
      <!--<div class="grid-content bg-purple">-->
      <!--</div>-->
      <!--</el-col>-->
      <el-col :span="24">
        <div class="grid-content bg-purple">
          <p>{{$t('footer.companyName')}}</p>
          <p>{{$t('footer.personName')}}</p>
          <p>{{$t('footer.office')}}</p>
          <p>{{$t('footer.companyNumber')}}</p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<style>
  .footer-wrapper {
    /*background-color: #eee;*/
    position: relative;
    width: 100%;
    background-color: rgb(246, 246, 238);

  }

  .el-row {
    margin-bottom: 20px;

  }

  .el-col {
    border-radius: 4px;
  }

  .bg-purple-dark {
    background: #99a9bf;
  }

  .bg-purple {
    /*background: #d3dce6;*/

  }

  .bg-purple-light {
    background: #e5e9f2;
  }

  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }

  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
