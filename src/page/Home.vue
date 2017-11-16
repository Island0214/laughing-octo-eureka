<template>

  <div>
    <Header/>
    <nav-bar/>
    <main/>
    <footer/>
  </div>

</template>

<script>
  import Header from '../components/Header.vue'
  import NavBar from '../components/NavBar.vue'
  import Main from '../components/Main.vue'
  import Footer from '../components/Footer.vue'
  export default {
    name: 'Home',
    components: {
      Header,
      NavBar,
      Main,
      Footer
    }
  }
</script>
