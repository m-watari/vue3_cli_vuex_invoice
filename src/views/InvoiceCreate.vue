<template>
  <HeaderView/>
  <div class="invoiceCreate">
    <h1>This invoiceCreat page</h1>
  </div>
  <!-- 入力ボックスを表示する場所 ① -->

  <div v-for="(text, index) in texts" :key="text">

    <!-- 各入力ボックス -->
    <input name="detail_name" type="text" :id="'detail_name_' + index" placeholder="項目" value="" class="span5">
    <input name="quantity" type="text" :id="'quantity_' + index" placeholder="数量" @input="funcSum(index)" class="span1">
    <input name="unit" type="text" :id="'unit_' + index" placeholder="単位" value="" class="span1">
    <input name="unit_price" type="text" :id="'unit_price_' + index" placeholder="単価" @input="funcSum(index)" value="" class="span2">
    <input name="total_price" type="text" :id="'total_price_' + index" placeholder="合計" value="" class="span2">

    <!-- 入力ボックスの削除ボタン -->
    <button type="button" @click="removeInput(index)">削除</button>
  </div>
  <button type="button" @click="addInput">入力等生成</button>
  <br><br>
  <div>小計：{{ sum.toLocaleString() }}円</div>
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
      sum: 0, // 合計金額
    }
  },
  methods: {
    funcSum (index) {
      this.texts[index].quantity = document.getElementById('quantity_' + index).value
      this.texts[index].unit = document.getElementById('unit_' + index).value
      this.texts[index].detail_name = document.getElementById('detail_name_' + index).value

      // console.log('quantity', this.texts[index].quantity)
      if (!this.texts[index].quantity) return
      this.texts[index].unit_price = document.getElementById('unit_price_' + index).value
      // console.log('unit_price', unit_price)
      if (!this.texts[index].unit_price) return
      this.texts[index].total_price = this.texts[index].quantity * this.texts[index].unit_price
      document.getElementById('total_price_' + index).value = this.texts[index].total_price
      console.log('funcSum', this.texts)
      // this.textsをlocalstrageに保存する
      localStorage.setItem('texts', JSON.stringify(this.texts))
      this.subtotal()
    },
    // ボタンをクリックしたときのイベント ③
    removeInput(index) {
      this.texts.splice(index, 1);
      console.log('removeInput', this.texts)
      this.subtotal()
    },
    addInput() {

      this.texts.push({
        detail_name: '',
        quantity: 0,
        unit: '',
        unit_price: 0,
        total_price: 0
      });
      console.log('addInput', this.texts)

    },
    subtotal() {
      this.sum = 0;
      for (let i = 0; i < this.texts.length; i++) {
        this.sum += this.texts[i].total_price;
      }
      console.log('isSubtotal', this.sum)
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
    // ブラウザから別のページに移動前にalertを表示する
    window.onbeforeunload = function () {
      return '入力した内容は保存されません。';
    };
  }
}
</script>