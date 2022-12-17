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
    // HelloWorld,
    HeaderView,
    FooterView
  },
  // data() {
  //   return {
  //     texts: [], // 複数入力のデータ（配列）
  //     sum: 0, // 合計金額
  //   }
  // },
  // methods: {
    
  // },
  // mounted () {
  // }
}
</script>