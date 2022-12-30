<template>
  <HeaderView/>
  <div class="invoice">
    <h1>This invoiceList page</h1>
    <div>
      <div>ユーザー名：{{ user.name }}</div>
      <router-link to="/invoice-create">create</router-link>
    </div>
  <div>
    <!-- invice_listをループ表示 -->
    <div v-for="invoice in invoice_list" :key="invoice.id">
      <router-link :to="'/invoice/detail/' + invoice.id">{{ invoice.id }}</router-link>
      &nbsp;
      {{ invoice.name }}&nbsp;{{ invoice.amount.toLocaleString() }}円
      &nbsp;
      <router-link :to="'/invoice/edit/' + invoice.id">edit</router-link>
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
    async getInvoiceList() {
      const response = await fetch(process.env.VUE_APP_API_URL + '/invoices.php')
      const data = await response.json()
      this.invoice_list = data
    }
  },
  async created() {
    this.user = this.$store.state.user
    await this.getInvoiceList()
  }
}
</script>