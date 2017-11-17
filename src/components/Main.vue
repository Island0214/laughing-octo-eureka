<template>
  <div class="main-part-wrapper">
    <el-row :gutter="20" style="margin-top: 50px;">
      <el-col :span="12">
        <div>
          <h1> We are <span>S.Y. ventures CAPITAL</span></h1>

        </div>
      </el-col>
      <el-col :span="12">
      <div class="intro-wrapper">
        <ul>
          <li>
            provides specialized real estate and development services, including project management, construction management, urban planning and facilities management supported by a technical team focusing on large scale projects in Africa & all over the world.
          </li>
          <li>
            Our staff are highly-focused and experienced professionals with an exceptional track record of seamlessly delivering even the largest and most complex projects, from planning to construction, with strict adherence to international standards and practices.
          </li>
          <li>
            S.Y. are a relationship-driven business and are dedicated to ensuring that our clients’ best interests are always our highest priority. The strength of our client relationships are the foundation of our success.
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
  .main-part-wrapper h1 span {
    color: #ffd04b;
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
