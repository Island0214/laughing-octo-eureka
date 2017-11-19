<template>

  <div>
    <Header/>
    <NavBar/>
    <Partners/>
    <Footer/>
  </div>

</template>

<script>
  import Header from '../components/Header.vue'
  import NavBar from '../components/NavBar.vue'
  import Partners from '../components/Partners.vue'
  import Footer from '../components/Footer.vue'
  export default {
    name: 'PartnersPage',
    components: {
      Header,
      NavBar,
      Partners,
      Footer
    }
  }
</script>
