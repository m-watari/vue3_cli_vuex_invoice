<template>
  <div class="home">
    <HeaderView/>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div class="content">
      <router-view/>
      contents
    </div>
    <FooterView/>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import HeaderView from '@/components/genaral/Header.vue'
import FooterView from '@/components/genaral/Footer.vue'

export default {
  name: 'HomeView',
  components: {
    // HelloWorld,
    HeaderView,
    FooterView
  }
}
</script>
