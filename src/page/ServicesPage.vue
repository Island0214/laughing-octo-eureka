<template>

  <div>
    <Header/>
    <NavBar/>
    <Services/>
    <Footer/>
  </div>

</template>

<script>
  import Header from '../components/Header.vue'
  import NavBar from '../components/NavBar.vue'
  import Services from '../components/Services.vue'
  import Footer from '../components/Footer.vue'
  export default {
    name: 'ServicesPage',
    components: {
      Header,
      NavBar,
      Services,
      Footer
    }
  }
</script>
