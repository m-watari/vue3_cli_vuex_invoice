<template>
  <HeaderView/>
  <div class="invoiceCreate">
    <h1>This invoiceCreat page</h1>
  </div>
  <!-- 入力ボックスを表示する場所 ① -->

  <div v-for="(text, index) in texts" :key="text">

    <!-- 各入力ボックス -->
    <input name="detail_name" type="text" :id="'billing_address2_' + index" placeholder="項目" value="" class="span5">
    <input name="quantity" type="text" :id="'quantity_' + index" placeholder="数量" @input="funcSum(index)" class="span1">
    <input name="unit" type="text" :id="'unit_' + index" placeholder="単位" value="" class="span1">
    <input name="unit_price" type="text" :id="'unit_price_' + index" placeholder="単価" @input="funcSum(index)" value="" class="span2">
    <input name="total_price" type="text" :id="'total_price_' + index" placeholder="合計" value="" class="span2">

    <!-- 入力ボックスの削除ボタン -->
    <button type="button" @click="removeInput(index)">削除</button>
  </div>
  <button type="button" @click="addInput">追加する</button>
  <br><br>
  <button type="button" @click="onSubmit">送信する</button>
  <FooterView/>
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
  },
  data() {
    return {
      texts: [], // 複数入力のデータ（配列）
      total_price: 0, // 合計金額
    }
  },
  methods: {
    funcSum (index) {
      var quantity = document.getElementById('quantity_' + index).value
      console.log('quantity', quantity)
      if (!quantity) return
      var unit_price = document.getElementById('unit_price_' + index).value
      console.log('unit_price', unit_price)
      if (!unit_price) return
      document.getElementById('total_price_' + index).value = quantity * unit_price
    },
    // ボタンをクリックしたときのイベント ③
    removeInput(index) {

      this.texts.splice(index, 1);

    },
    addInput() {

      this.texts.push('');

    },
    onSubmit() {

      console.log(this.texts);

      // const url = '/multiple_inputs';
      // const params = {
      //     texts: this.texts
      // };
      // axios.post(url, params)
      //     .then(response => {

      //         // 成功した時

      //     })
      //     .catch(error => {

      //         // 失敗した時

      //     });

    }
  },
  mounted () {
    console.log('texts' , this.texts);
  }
}
</script>