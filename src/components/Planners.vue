<template>
  <div>
    <div class="planners-wrapper">
      <h1>{{$t('planners.title_first')}}<span>{{$t('planners.title_second')}}</span></h1>

      <el-row :gutter="20">
        <el-col :span="8">
          <div>
            <p>{{$t('planners.p1')}}</p>
          </div>
        </el-col>
        <el-col :span="8">
          <p>{{$t('planners.p2')}}</p>
        </el-col>
        <el-col :span="8">
          <p>{{$t('planners.p3')}}</p>

        </el-col>
      </el-row>
    </div>
    <el-row :gutter="20">
      <el-col :span="12">
        <h2><span>{{$t('planners.p4')}}</span></h2>
        <ul style="width: 60%; margin-left: 20%; text-align: left">
          <li style="font-size: 20px;">{{$t('planners.p5')}}</li>
          <li style="font-size: 20px;">{{$t('planners.p6')}}</li>
        </ul>
      </el-col>
      <el-col :span="12">
        <h3 style="width: 80%; white-space: normal; text-align: left; margin-left: 10%"><span>{{$t('planners.p7')}}</span></h3>
        <ul style="width: 80%; margin-left: 10%; text-align: left">
          <li>{{$t('planners.p8')}}</li>
          <li>{{$t('planners.p9')}}</li>
          <li>{{$t('planners.p10')}}</li>
          <li>{{$t('planners.p11')}}</li>
        </ul>
        <h3 style="width: 80%; white-space: normal; text-align: left; margin-left: 10%"><span>{{$t('planners.p12')}}</span></h3>
        <ul style="width: 80%; margin-left: 10%; text-align: left">
          <li>{{$t('planners.p13')}}</li>
          <li>{{$t('planners.p14')}}</li>
          <li>{{$t('planners.p15')}}</li>
          <li>{{$t('planners.p16')}}</li>
          <li>{{$t('planners.p17')}}</li>
          <li>{{$t('planners.p18')}}</li>
        </ul>
      </el-col>
    </el-row>
  </div>

</template>

<style>
  .planners-wrapper {
    width: 90%;
    margin-left: 5%;
    background-color: #eee;
    border-radius: 10px;
    padding: 20px;
    margin: 50px;
  }
</style>
