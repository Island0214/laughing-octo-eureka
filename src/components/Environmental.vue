<template>
  <div style="width: 90%; margin-left: 5%;">
    <div class="environmental-intro-wrapper">
      <h1 style="text-align: center;">We are<span> ENVIRONMENTAL</span></h1>
      <p>S.Y. is guided by requirements of the Sphere Project, in terms of both physical structure and in maximising the use of ecological sourced local materials and energy-efficient buildings. Combing the best of robust modern technology and local materials, S.Y. delivers affordable quality developments at sustainable rates.</p>
    </div>

    <el-row :gutter="20">
      <el-col :span="8">
        <h3><span>Water and Sanitation</span></h3>
        <p>Water is the most important issue in the world today. Access to clean water supplies, sanitation, disposal, treatment and management are vital to the reduction to the reduction of infant mortality and the eradication of poverty with the urban community.

          S.Y. provides and promotes leading-edge technologies in the provision of clean water supplies and management solutions.</p>
      </el-col>
      <el-col :span="8">
        <h3><span>Waste Management</span></h3>
        <p>
          The management and disposal of solid waste is critical to the health and well being of all urban environments. Waste, both human and animal, are reclaimable resource that can provide a sustainable alternative bio-efficient energy source which has additional benefit of reducing the demand on landfill and green house gases. M&M partners with leading technology companies to provide waste management and energy systems that deliver real and sustainable benefits to local communities.
        </p>
      </el-col>
      <el-col :span="8">
        <h3><span>Energy Supply</span></h3>
        <p>
          The provision of renewable energy solutions is central to the concept of sustainable communities and Local Economic Development. Improving access to reliable clean energy promotes commerce and industry, whilst supporting basic services like transport, education, and health. M&M is engaged in the planning and distribution of Solar Power Systems, Photovoltaic Solutions, Biogas, Biofuel, and Wind Power Generation to support the energy needs of local communities.
        </p>
      </el-col>
    </el-row>

    <img src="../assets/wind.jpg" style="width: 50%" />

    <el-row :gutter="20" style="margin-top: 50px">
      <el-col :span="12" >
        <div class="environmental-info-wrapper">
          <p>
            For all destination resort locations, the Modular technology kit is ideal for all of the infrastructure needs. We have proven technologies for Wastewater treatment plants, water treatment plants, garbage disposal (gasification) strategies, energy production strategies (solar, biomass boilers, thermal energy storage, cooling production), as well as district energy. These resorts will all require infrastructure and the kit can create the solutions in a modular, scalable and environmentally friendly way. 
          </p>
          <p>
            For the inner city developments, we can ensure the increase in visitors and population will not create additional pressures on the local infrastructure. In fact, through strategic design of Wastewater Treatment Plants, District Energy Systems, Waste Management Strategies, Aerobic Digesters, we maybe able to reduce the impact on local infrastructure, create cleaner cities and increase the life of existing infrastructure. 
          </p>
        </div>
      </el-col>
      <el-col :span="12" style="text-align: left">
        <h2><span>Key Technologies: </span></h2>
        <ul>
          <li>Modular Wastewater Treatment plants allows for the onsite processing of waste from the community producing valuable, renewable non potable water and thermal energy. </li>
          <li>Modular Gasification Technology to process all the non-recyclable waste and produce valuable thermal energy. (can also have water treatment module attached)</li>
          <li>Modular Aerobic Digester can process all kitchen scraps in to a valuable high quality fertilizer or biofuel. This biofuel can be used in a biomass boiler to produce thermal energy for heating or cooling.</li>
          <li>District Energy Systems allows for the sharing of heating and cooling throughout the community or resort. </li>
          <li>These strategies can successfully reduce the overall community requirement of water by over 50%, energy requirement by 70% and waste to landfill by 100%. All in an environmentally, socially responsible and financially viable way. </li>
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
