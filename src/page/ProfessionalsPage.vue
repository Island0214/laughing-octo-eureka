<template>

  <div>
    <Header/>
    <NavBar/>
    <Professionals/>
    <Footer/>
  </div>

</template>

<script>
  import Header from '../components/Header.vue'
  import NavBar from '../components/NavBar.vue'
  import Professionals from '../components/Professionals.vue'
  import Footer from '../components/Footer.vue'
  export default {
    name: 'ProfessionalsPage',
    components: {
      Header,
      NavBar,
      Professionals,
      Footer
    }
  }
</script>
