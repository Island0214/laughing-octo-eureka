<template>
  <div>
    <h1 style="margin-top: 50px">{{$t('experience.title_first')}}<span>{{$t('experience.title_second')}}</span></h1>
    <el-row :gutter="20">
      <el-col :span="12">
        <div class="experience-wrappper">
          <ul>
            <li>{{$t('experience.li_1')}}</li>
            <li>{{$t('experience.li_2')}}</li>
            <li>{{$t('experience.li_3')}}</li>
            <li>{{$t('experience.li_4')}}</li>
          </ul>
        </div>
      </el-col>
      <el-col :span="12">
        <img src="../assets/1511065050043.jpg" style="width: 80%; margin-top: 150px; margin-left: -100px"/>
      </el-col>
    </el-row>
  </div>
</template>

<style>
  .experience-wrappper {
    width: 60%;
    margin-left: 20%;
    margin-top: 50px;
    margin-bottom: 50px;
    background-color: #eee;
    border-radius: 10px;
    padding: 20px;
    text-align: left;
    font-size: 20px;
  }
</style>
