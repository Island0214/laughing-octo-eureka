<template>

  <div>
    <Header/>
    <NavBar/>
    <Experience/>
    <Footer/>
  </div>

</template>

<script>
  import Header from '../components/Header.vue'
  import NavBar from '../components/NavBar.vue'
  import Experience from '../components/Experience.vue'
  import Footer from '../components/Footer.vue'
  export default {
    name: 'ExperiencePage',
    components: {
      Header,
      NavBar,
      Experience,
      Footer
    }
  }
</script>
