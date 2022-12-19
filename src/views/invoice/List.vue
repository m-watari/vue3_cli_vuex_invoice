<template>
  <HeaderView/>
  <div class="invoice">
    <h1>This invoiceList page</h1>
    <div>
      <router-link to="/invoice-create">create</router-link>
    </div>
  <div>
    <!-- invice_listをループ表示 -->
    <div v-for="invoice in invoice_list" :key="invoice.id">
      <router-link :to="'/invoice-detail/' + invoice.id">{{ invoice.title }}</router-link>
    </div>
  </div>
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
  data() {
    return {
      invoice_list: []
    }
  },
  methods: {
    // invoiceをDBから取得
    getInvoiceList() {
      this.$axios.get('/api/invoice')
        .then((response) => {
          this.invoice_list = response.data
        })
        .catch((error) => {
          console.log(error)
        })
    }

  },
  mounted () {
    console.log('NODE_ENV', process.env.NODE_ENV)
  }
}
</script>