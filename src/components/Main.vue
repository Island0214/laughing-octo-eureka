<template>
  <div class="main-part-wrapper">
    <el-row :gutter="20" style="margin-top: 50px;">
      <el-col :span="12">
        <div>
          <h1>{{$t('main.title_first')}}<span>{{$t('main.title_second')}}</span></h1>

        </div>
      </el-col>
      <el-col :span="12">
      <div class="intro-wrapper">
        <ul>
          <li>
            {{$t('main.firstIntro')}}
          </li>
          <li>
            {{$t('main.secondIntro')}}
          </li>
          <li>
            {{$t('main.thirdIntro')}}
          </li>
        </ul>
      </div>
      </el-col>

    </el-row>
  </div>
</template>

<style>
  .main-part-wrapper{
    position: relative;
    display: inline-block;
  }
  .main-part-wrapper h1{
    z-index: 10;
    margin-left: 47%;
    white-space: nowrap;
  }


  .main-part-wrapper p {
    position: relative;
    display: inline-block;
    width: 60%;
    /*left: 20%;*/
    background-color: rgb(246, 246, 238);
    padding: 100px;
    border-radius: 10px;
  }
  .intro-wrapper {
    position: relative;
    background-color: #eee;
    padding: 100px 50px 50px 50px;
    border-radius: 10px;
    text-align: left;
    width: 60%;
    left: -40%;
    z-index: -1;
    margin-bottom: 30px;
  }

  .intro-wrapper li {
    margin-top: 10px;
    color: #666;
  }

</style>
