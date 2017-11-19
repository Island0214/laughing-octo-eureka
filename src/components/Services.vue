<template>
  <div style="position: relative; display: inline-block;">
    <div class="service-intro-wrapper">
      <h1 style="text-align: center;">{{$t('services.title_one')}}<span>{{$t('services.title_two')}}</span></h1>
      <p>{{$t('services.title_intro')}}</p>
    </div>

    <el-row :gutter="20">
      <el-col :span="12">
        <div class="service-content-wrapper">
          <h2><span>{{$t('services.first_title')}}</span></h2>
          <ul style="position: relative;">
            <li>
              {{$t('services.first_li_one')}}
            </li>
            <li>
              {{$t('services.first_li_two')}}
            </li>
          </ul>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="service-content-wrapper">
          <h2><span>{{$t('services.second_title')}}</span></h2>
          <ul>
            <li>
              {{$t('services.second_li_one')}}
            </li>
          </ul>
          <img src="../assets/1511063188740.jpg"/>
        </div>
      </el-col>
    </el-row>

    <el-row :gutter="20">
      <el-col :span="12">
        <div class="service-content-wrapper" style="margin-top: -200px">
          <h2><span>{{$t('services.third_title')}}</span></h2>
          <ul>
            <li>
              {{$t('services.third_li_one')}}
            </li>
            <li>
              {{$t('services.third_li_two')}}
            </li>
          </ul>
          <img src="../assets/1511063738075.jpg"/>
        </div>

      </el-col>
      <el-col :span="12">
        <div class="service-content-wrapper">
          <h2><span>{{$t('services.fourth_title')}}</span></h2>
          <ul style="position: relative;">
            <li>
              {{$t('services.fourth_li_one')}}
            </li>
            <li>
              {{$t('services.fourth_li_two')}}
            </li>
          </ul>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<style>
  .service-intro-wrapper {
    position: relative;
    width: 50%;
    left: 25%;
    background-color: #eee;
    border-radius: 10px;
    text-align: center;
    margin: 50px;
  }

  .service-intro-wrapper p{
    position: relative;
    display: inline-block;
    width: 70%;
  }

  .service-content-wrapper {
    /*background-color: #eee;*/
    position: relative;
    /*text-align: left;*/
    width: 90%;
    margin-left: 5%;
  }

  .service-content-wrapper li {
    text-align: left;
  }

  .service-content-wrapper img {
    height: 200px;
  }
</style>
