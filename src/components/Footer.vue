<template>
  <div class="footer-wrapper">
    <el-row :gutter="20">
      <!--<el-col :span="12">-->
        <!--<div class="grid-content bg-purple">-->
        <!--</div>-->
      <!--</el-col>-->
      <el-col :span="24">
        <div class="grid-content bg-purple">
          <p>S.Y.VENTURES CAPITAL SARL</p>

          <p> Rabat.Morocco</p>
          <p> Office:   Villa Mounia, N° 146, O.L.M. Souissi 2 ; CP 10100 ;  Rabat, Maroc</p>
             

          <p> Company Number: 212 537 65 13 05 </p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<style>
  .footer-wrapper {
    background-color: #eee;
    position: relative;
    width: 100%;
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
    background: #d3dce6;
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
