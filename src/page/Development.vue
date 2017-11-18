<template>
  <div>
    <Header/>
    <NavBar/>
    <Managers/>
    <Footer/>
  </div>
</template>

<script>
  import Header from '../components/Header.vue'
  import NavBar from '../components/NavBar.vue'
  import Managers from '../components/Managers.vue'
  import Footer from '../components/Footer.vue'
  export default {
    name: 'Development',
    components: {
      Header,
      NavBar,
      Managers,
      Footer
    }
  }
</script>
