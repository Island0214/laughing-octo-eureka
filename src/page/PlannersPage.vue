<template>

  <div>
    <Header/>
    <NavBar/>
    <Planners/>
    <Footer/>
  </div>

</template>

<script>
  import Header from '../components/Header.vue'
  import NavBar from '../components/NavBar.vue'
  import Planners from '../components/Planners.vue'
  import Footer from '../components/Footer.vue'
  export default {
    name: 'PlannersPage',
    components: {
      Header,
      NavBar,
      Planners,
      Footer
    }
  }
</script>
