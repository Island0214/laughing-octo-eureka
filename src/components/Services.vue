<template>
  <div style="position: relative; display: inline-block;">
    <div class="service-intro-wrapper">
      <h1 style="text-align: left; margin-left: -210px">WE PROVIDE <span>CORE SERVICES</span></h1>
      <p>We place client relationships at the forefront of everything we do. We take great care to assemble the right teams around every project to ensure strict adherence to the highest international standards and practices of project management.</p>
    </div>

    <el-row :gutter="20">
      <el-col :span="12">
        <div class="service-content-wrapper">
          <h2><span>Project Management</span></h2>
          <ul style="position: relative;">
            <li>
              Our highly-experienced project managers take full responsibility for all aspects of projects under their care and are accountable for the successful completion and delivery of every project we undertake.
            </li>
            <li>
              Our project managers are dedicated to providing clients with a comprehensive project brief as well as utilising one of the most reliable and cost-effective vendor management services available anywhere in the world.
            </li>
          </ul>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="service-content-wrapper">
          <h2><span>Construction Management</span></h2>
          <ul>
            <li>
              Our managers work directly with contractors to successfully deliver projects to the agreed Project Execution Plan. We lead the management of all package contractors and administer all trade contracts, from commencement to completion, ensuring top quality services delivered to the highest standards and safety requirements. For larger and more complex projects, contracts are split up into smaller packages to be coordinated and managed directly by S.Y. acting as construction manager.
            </li>
          </ul>
          <img src="../assets/1511063188740.jpg"/>
        </div>
      </el-col>
    </el-row>

    <el-row :gutter="20">
      <el-col :span="12">
        <div class="service-content-wrapper" style="margin-top: -200px">
          <h2><span>Technical Services</span></h2>
          <ul>
            <li>
              Our highly-qualified and experienced technical services team provides expert and premium advice focused on a wide range of projects. We are able to ensure up front Design Management is carried out to identify and solve buildability and operational issues early on, creating opportunities to optimise quality and realise time and cost savings.
            </li>
            <li>
              Our strengths extend to conducting comprehensive due diligence inspections and reports on investment or disposal of assets and compiling comprehensive feasibility studies for new construction.
            </li>
          </ul>
          <img src="../assets/1511063738075.jpg"/>
        </div>

      </el-col>
      <el-col :span="12">
        <div class="service-content-wrapper">
          <h2><span>Facilities Management</span></h2>
          <ul style="position: relative;">
            <li>
              S.Y.operates a Facilities Management Division, staffed with professionals with extensive experience in the management of a full range of property types (commercial office, retail hospitality, residential and industrial).
            </li>
            <li>
              Properties are required to be managed to a professional standard to ensure both operational efficiency and, over the long term, value enhancement. Standard operating procedures are prepared for each assigned tasks and a series of checklists devised to ensure these are fully complied with.
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
