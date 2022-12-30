<template>
  <HeaderView/>
  <div class="invoice">
    <h1>This invoiceDetail page</h1>
  </div>
  <div>
    <!-- invice_listをループ表示 -->
    <div>会社名：<input type="text" v-model="invoice.billing_name"></div>
    <div>住所：<span><input type="text" v-model="invoice.billing_zip"></span><input type="text" v-model="invoice.billing_address"></div>

    <!-- invoice_detailをループ表示 -->
    <div v-for="invoice_detail in invoice_detail" :key="invoice_detail.id">
      <span>項目：{{ invoice_detail.title }}</span>
      <span>{{ Number(invoice_detail.unit_price).toLocaleString() }}円</span>
      <span>ｘ{{ invoice_detail.quantity }}{{ invoice_detail.unit }}</span>
      <span>={{ Number(invoice_detail.quantity * invoice_detail.unit_price).toLocaleString() }}円</span>
    </div>

    <div>小計：{{ Number(invoice.subtotal).toLocaleString() }}</div>
    <div>消費税：{{ Number(invoice.tax).toLocaleString() }}</div>
    <div>合計：{{ Number(invoice.billing_amount).toLocaleString() }}</div>
    <button type="button" class="btn btn-primary" @click="onSend">send</button>
  </div>
  <FooterView/>
</template>

<script>
import HeaderView from '@/components/genaral/Header.vue'
import FooterView from '@/components/genaral/Footer.vue'

export default {
  name: 'invoiceEdit',
  components: {
    HeaderView,
    FooterView
  },
  data() {
    return {
      invoice: {
        id: 0,
        amount: 0,
      },
      invoice_detail: {}
    }
  },
  methods: {
    async getInvoice() {
      const response = await fetch(process.env.VUE_APP_API_URL + '/invoice.php?id=' + this.$route.params.id)
      const data = await response.json()
      this.invoice = data
    },
    async getInvoiceDetail() {
      const response = await fetch(process.env.VUE_APP_API_URL + '/invoice_details.php?id=' + this.invoice.estimates_id)
      const data = await response.json()
      this.invoice_detail = data
    },
    onSend() {
      console.log('onSend')
      console.log('billing_name', this.invoice.billing_name)
      console.log('billing_zip', this.invoice.billing_zip)
      console.log('invoice.billing_address', this.invoice.billing_address)

      // 送信データを作成
      const data = {
        id: this.invoice.id,
        billing_name: this.invoice.billing_name,
        billing_zip: this.invoice.billing_zip,
        billing_address: this.invoice.billing_address,
      }
      fetch(process.env.VUE_APP_API_URL + '/invoice_update.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
    }


  },
  async created() {
    this.user = this.$store.state.user
    await this.getInvoice()
    console.log('this.invoice', this.invoice)
    await this.getInvoiceDetail()
    console.log('this.invoice_detail', this.invoice_detail)
    console.log('jquery Ver:', global.$.fn.jquery)
  }
}
</script>