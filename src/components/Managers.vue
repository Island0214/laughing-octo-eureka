<template>
  <div>
    <el-row :gutter="20" style="margin-top: 50px;">
      <el-col :span="12">
        <div class="manager-info-wrapper">
          <h1> We are<br> <span>Development managers</span></h1>

          <ul>
            <li>
              S.Y. team is able is able to coordinate and mange major development and infrastructure projects across both the public and private sectors, including residential, commercial, retail and leisure users.
            </li>
            <li>
              Acting as the development manager, S.Y.can take control of the masterplan development and complete the project cycle. We make sure the team is effectively coordinated to ensure full financial potential is secured from the scheme.            </li>
            <li>
              S.Y. can be appointed for any type of project and are most effective when we are able to coordinate the appointment of the full professional team, including the sourcing of architects and other key professionals through competition.            </li>
          </ul>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="manager-right-wrapper">
          <h1><span>SHAPING A BETTER WORLD</span></h1>
          <p>S.Y. We are an independent group of visionaries, development managers, construction and project management, urban planning and technical specialists working across every aspect of todays built environment.  </p>
          <img src="../assets/1511023368941.jpg"/>
        </div>
      </el-col>
    </el-row>
    <div style="position: relative; height: auto; text-align: center; width: 80%; left: 10%; white-space: nowrap;">
      <h2 style="text-align: left"><span>Development Stages</span></h2>
      <el-steps >
        <el-step title="Research"></el-step>
        <el-step title="Business Case"></el-step>
        <el-step title="Value Proposition"></el-step>
        <el-step title="Master Plan"></el-step>
        <el-step title="Preliminary Investment Proposal"></el-step>
        <el-step title="Investment Proposal"></el-step>
        <el-step title="Conditions Precedent"></el-step>
        <el-step title="Delivery"></el-step>
      </el-steps>
    </div>
    <div style="position: relative; height: auto; text-align: center; width: 80%; left: 10%; white-space: nowrap">
      <h2 style="text-align: left"><span>Development Control Disciplines</span></h2>
      <el-row :gutter="20">
        <el-col :span="6">
          <div class="inner-col">
            <p>Project Governance</p>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="inner-col">
            <p>Sales & Leasing</p>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="inner-col">
            <p>Sustainability</p>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="inner-col">
            <p>Value Management</p>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="6">
          <div class="inner-col">
            <p>Legal</p>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="inner-col">
            <p>Financial
              Performance</p>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="inner-col">
            <p>Marketing &
              Communications</p>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="inner-col">
            <p>Government, Authorities &
              Stakeholder Engagement</p>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

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
