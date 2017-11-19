<template>
  <div class="professionals-wrapper">
    <h1 style="margin-top: 50px">{{$t('professionals.title_first')}}<span>{{$t('professionals.title_second')}}</span></h1>

    <el-row :gutter="20" class="professionals-row">
      <el-col :span="12">
        <h2><span>{{$t('professionals.chairman_name')}}</span></h2>
        <h3>{{$t('professionals.chairman')}}</h3>
        <img src="../assets/wuyi.jpg"/>
      </el-col>
      <el-col :span="12">
        <ul class="professionals-info-wrapper">
          <li>
            {{$t('professionals.chairman_li_1')}}
          </li>
          <li>
            {{$t('professionals.chairman_li_2')}}
          </li>
          <li>
            {{$t('professionals.chairman_li_3')}}
          </li>
          <li>
            {{$t('professionals.chairman_li_4')}}
          </li>
        </ul>
      </el-col>
    </el-row>

    <el-row :gutter="20" class="professionals-row">
      <el-col :span="12">
        <ul class="professionals-info-wrapper">
          <li>
            {{$t('professionals.li_5')}}
          </li>
          <li>
            {{$t('professionals.li_6')}}
          </li>
          <li>
            {{$t('professionals.li_7')}}
          </li>
          <li>
            {{$t('professionals.li_8')}}
          </li>
        </ul>
      </el-col>
      <el-col :span="12" style="text-align: right">
        <h2><span>{{$t('professionals.director_name_1')}}</span></h2>
        <h3>{{$t('professionals.director')}}</h3>
        <img src="../assets/matthew.jpg"/>

      </el-col>
    </el-row>

    <el-row :gutter="20" class="professionals-row">
      <el-col :span="12">
        <h2><span>{{$t('professionals.directorname2')}}</span></h2>
        <h3>{{$t('professionals.director')}}</h3>
        <!--<img src="../assets/wuyi.jpg"/>-->
      </el-col>
      <el-col :span="12">
        <ul class="professionals-info-wrapper">
          <li>
            {{$t('professionals.li_9')}}
          </li>
          <li>
            {{$t('professionals.li_10')}}
          </li>
          <li>
            {{$t('professionals.li_11')}}
          </li>
          <li>
            {{$t('professionals.li_12')}}
          </li>
          <li>
            {{$t('professionals.li_13')}}
          </li>
          <li>
            {{$t('professionals.li_14')}}
          </li>
        </ul>
      </el-col>
    </el-row>

    <el-row :gutter="20" class="professionals-row">
      <el-col :span="12">
        <ul class="professionals-info-wrapper">
          <li>
            {{$t('professionals.li_15')}}
          </li>
          <li>
            {{$t('professionals.li_16')}}
          </li>
          <li>
            {{$t('professionals.li_17')}}
          </li>
          <li>
            {{$t('professionals.li_18')}}
          </li>
        </ul>
      </el-col>
      <el-col :span="12" style="text-align: right">
        <h2><span>{{$t('professionals.president_name')}}</span></h2>
        <h3>{{$t('professionals.president')}}</h3>
        <img src="../assets/tarek.jpg"/>

      </el-col>
    </el-row>

    <el-row :gutter="20" class="professionals-row">
      <el-col :span="12">
        <h2><span>{{$t('professionals.exe_director_name')}}</span></h2>
        <h3>{{$t('professionals.exe_director')}}</h3>
        <img src="../assets/jiao.jpg"/>
      </el-col>
      <el-col :span="12">
        <ul class="professionals-info-wrapper">
          <li>
            {{$t('professionals.li_19')}}
          </li>
          <li>
            {{$t('professionals.li_20')}}
          </li>
          <li>
            {{$t('professionals.li_21')}}
          </li>
          <li>
            {{$t('professionals.li_22')}}
          </li>
        </ul>
      </el-col>
    </el-row>

    <el-row :gutter="20" class="professionals-row">
      <el-col :span="12">
        <ul class="professionals-info-wrapper">
          <li>
            {{$t('professionals.li_23')}}
          </li>
          <li>
            {{$t('professionals.li_24')}}
          </li>
          <li>
            {{$t('professionals.li_25')}}
          </li>
          <li>
            {{$t('professionals.li_26')}}
          </li>
        </ul>
      </el-col>
      <el-col :span="12" style="text-align: right">
        <h2><span>{{$t('professionals.name_1')}}</span></h2>
        <h3>{{$t('professionals.pos_1')}}</h3>
        <img src="../assets/wang.jpg"/>

      </el-col>
    </el-row>

    <el-row :gutter="20" class="professionals-row">
      <el-col :span="12">
        <h2><span>{{$t('professionals.name_2')}}</span></h2>
        <h3>{{$t('professionals.pos_1')}}</h3>
        <img src="../assets/guo.jpg"/>
      </el-col>
      <el-col :span="12">
        <ul class="professionals-info-wrapper">
          <li>
            {{$t('professionals.li_27')}}
          </li>
          <li>
            {{$t('professionals.li_28')}}
          </li>
          <li>
            {{$t('professionals.li_29')}}
          </li>
          <li>
            {{$t('professionals.li_30')}}
          </li>
          <li>
            {{$t('professionals.li_31')}}
          </li>
        </ul>
      </el-col>
    </el-row>

    <el-row :gutter="20" class="professionals-row">
      <el-col :span="12">
        <ul class="professionals-info-wrapper">
          <li>
            {{$t('professionals.li_32')}}
          </li>
          <li>
            {{$t('professionals.li_33')}}
          </li>
          <li>
            {{$t('professionals.li_34')}}
          </li>
        </ul>
      </el-col>
      <el-col :span="12" style="text-align: right">
        <h2><span>{{$t('professionals.name_3')}}</span></h2>
        <h3>{{$t('professionals.pos_1')}}</h3>
        <img src="../assets/liu.png"/>

      </el-col>
    </el-row>

    <el-row :gutter="20" class="professionals-row">
      <el-col :span="12">
        <h2><span>{{$t('professionals.name_4')}}</span></h2>
        <h3>{{$t('professionals.pos_2')}}</h3>
        <img src="../assets/rachid.jpg"/>
      </el-col>
      <el-col :span="12">
        <ul class="professionals-info-wrapper">
          <li>
            {{$t('professionals.li_35')}}
          </li>
          <li>
            {{$t('professionals.li_36')}}
          </li>
          <li>
            {{$t('professionals.li_37')}}
          </li>
          <li>
            {{$t('professionals.li_38')}}
          </li>
        </ul>
      </el-col>
    </el-row>
  </div>
</template>

<style>
  .professionals-row {
    position: relative;
    width: 80%;
    left: 10%;
    text-align: left;
    border-bottom: 1px solid #eee;
    padding-bottom: 20px;
  }
  .professionals-row img {
    height: 200px;
  }
  .professionals-info-wrapper {
    background-color: #eee;
    padding: 30px;
    border-radius: 10px;
  }
</style>
