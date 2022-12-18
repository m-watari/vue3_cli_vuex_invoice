<template>
  <HeaderView/>
  <div class="invoice">
    <h1>This invoiceList page</h1>
    <div>
      <router-link to="/invoice-create">create</router-link>
    </div>
  <div>list</div>
  </div>
  <FooterView/>
</template>

<script>
import HeaderView from '@/components/genaral/Header.vue'
import FooterView from '@/components/genaral/Footer.vue'

export default {
  name: 'Invoice_list',
  components: {
    HeaderView,
    FooterView
  },
  // data() {
  //   return {
  //   }
  // },
  // methods: {
    
  // },
  mounted () {
    console.log('NODE_ENV', process.env.NODE_ENV)
  }
}
</script>