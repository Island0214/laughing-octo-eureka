<template>

  <div>
    <Header/>
    <NavBar/>
    <Environmental/>
    <Footer/>
  </div>

</template>

<script>
  import Header from '../components/Header.vue'
  import NavBar from '../components/NavBar.vue'
  import Environmental from '../components/Environmental.vue'
  import Footer from '../components/Footer.vue'
  export default {
    name: 'EnvironmentalPage',
    components: {
      Header,
      NavBar,
      Environmental,
      Footer
    }
  }
</script>
