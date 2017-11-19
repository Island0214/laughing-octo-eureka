<template>
  <div>
    <el-row :gutter="20" style="margin-top: 50px;">
      <el-col :span="12">
        <div class="manager-info-wrapper">
          <h1>{{$t('managers.we_are')}}<br> <span>{{$t('managers.dev_manager')}}</span></h1>

          <ul>
            <li>
              {{$t('managers.li_one')}}
            </li>
            <li>
              {{$t('managers.li_two')}}
            </li>
            <li>
              {{$t('managers.li_three')}}
            </li>
          </ul>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="manager-right-wrapper">
          <h1><span>{{$t('managers.man_right_h1')}}</span></h1>
          <p>{{$t('managers.man_right_p')}}  </p>
          <img src="../assets/1511023368941.jpg"/>
        </div>
      </el-col>
    </el-row>
    <div style="position: relative; height: auto; text-align: center; width: 80%; left: 10%; white-space: nowrap;">
      <h2 style="text-align: left"><span>{{$t('managers.stages_0')}}</span></h2>
      <el-steps>
        <el-step :title="getStage_1()"></el-step>
        <el-step :title="getStage_2()"></el-step>
        <el-step :title="getStage_3()"></el-step>
        <el-step :title="getStage_4()"></el-step>
        <el-step :title="getStage_5()"></el-step>
        <el-step :title="getStage_6()"></el-step>
        <el-step :title="getStage_7()"></el-step>
        <el-step :title="getStage_8()"></el-step>
      </el-steps>
    </div>
    <div style="position: relative; height: auto; text-align: center; width: 80%; left: 10%; white-space: nowrap">
      <h2 style="text-align: left"><span>{{$t('managers.chart_title')}}</span></h2>
      <el-row :gutter="20">
        <el-col :span="6">
          <div class="inner-col">
            <p>{{$t('managers.chart_0')}}</p>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="inner-col">
            <p>{{$t('managers.chart_1')}}</p>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="inner-col">
            <p>{{$t('managers.chart_2')}}</p>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="inner-col">
            <p>{{$t('managers.chart_3')}}</p>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="6">
          <div class="inner-col">
            <p>{{$t('managers.chart_4')}}</p>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="inner-col">
            <p>{{$t('managers.chart_5')}}</p>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="inner-col">
            <p>{{$t('managers.chart_6')}}</p>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="inner-col">
            <p>{{$t('managers.chart_7')}}</p>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      getStage_1 () {
        return this.$t('managers.stages_1')
      },
      getStage_2 () {
        return this.$t('managers.stages_2')
      },
      getStage_3 () {
        return this.$t('managers.stages_3')
      },
      getStage_4 () {
        return this.$t('managers.stages_4')
      },
      getStage_5 () {
        return this.$t('managers.stages_5')
      },
      getStage_6 () {
        return this.$t('managers.stages_6')
      },
      getStage_7 () {
        return this.$t('managers.stages_7')
      },
      getStage_8 () {
        return this.$t('managers.stages_8')
      }
    }
  }
</script>

<style>
  .manager-info-wrapper {
    position: relative;
    background-color: #eee;
    padding: 50px 50px 50px 50px;
    border-radius: 10px;
    text-align: left;
    width: 60%;
    left: 20%;
    z-index: -1;
    margin-bottom: 30px;
  }

  .manager-info-wrapper h1 {
    margin: 0;
    /*white-space: nowrap;*/
    /*margin-left: -50px;*/
    width: 100%;
    text-align: center;
  }

  .manager-right-wrapper p {
    position: relative;
    width: 80%;
    left: 10%;
  }

  .manager-right-wrapper img {
    position: relative;
    width: 300px;
  }

  .inner-col {
    width: 100%;
    background-color: #eee;
    white-space: normal;
    height: 50px;
    /*padding: 10px;*/
  }

  .inner-col p {
    position: absolute;
    top: 50%;
    transform: translate(0%, -50%);
    padding: 0;
    margin: 0;
    padding: 10px;
  }
</style>
