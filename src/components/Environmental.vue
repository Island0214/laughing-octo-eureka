<template>
  <div style="width: 90%; margin-left: 5%;">
    <div class="environmental-intro-wrapper">
      <h1 style="text-align: center;">{{$t('environmental.title_first')}}<span>{{$t('environmental.title_second')}}</span></h1>
      <p>{{$t('environmental.p1')}}</p>
    </div>

    <el-row :gutter="20">
      <el-col :span="8">
        <h3><span>{{$t('environmental.p2')}}</span></h3>
        <p>{{$t('environmental.p3')}}</p>
      </el-col>
      <el-col :span="8">
        <h3><span>{{$t('environmental.p4')}}</span></h3>
        <p>
          {{$t('environmental.p5')}}
        </p>
      </el-col>
      <el-col :span="8">
        <h3><span>{{$t('environmental.p6')}}</span></h3>
        <p>
          {{$t('environmental.p7')}}
        </p>
      </el-col>
    </el-row>

    <img src="../assets/wind.jpg" style="width: 50%" />

    <el-row :gutter="20" style="margin-top: 50px">
      <el-col :span="12" >
        <div class="environmental-info-wrapper">
          <p>
            {{$t('environmental.p8')}}
          </p>
          <p>
            {{$t('environmental.p9')}}
          </p>
        </div>
      </el-col>
      <el-col :span="12" style="text-align: left">
        <h2><span>{{$t('environmental.p10')}}</span></h2>
        <ul>
          <li>{{$t('environmental.p11')}}</li>
          <li>{{$t('environmental.p12')}}</li>
          <li>{{$t('environmental.p13')}}</li>
          <li>{{$t('environmental.p14')}}</li>
          <li>{{$t('environmental.p15')}}</li>
        </ul>
      </el-col>
    </el-row>
  </div>
</template>

<style>
  .environmental-intro-wrapper {
    position: relative;
    width: 70%;
    left: 15%;
    background-color: #eee;
    border-radius: 10px;
    text-align: center;
    margin: 50px;
    padding-bottom: 20px;
    padding-top: 20px;
  }
  .environmental-intro-wrapper p {
    position: relative;
    width: 80%;
    left: 10%;
    margin-bottom: 20px;
  }
  .environmental-info-wrapper {
    background-color: #eee;
    border-radius: 10px;
    padding: 20px;
    font-size: 20px;
    text-align: left;
    margin-bottom: 50px;
  }
</style>
