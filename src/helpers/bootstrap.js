import { createApp } from 'vue'
import store from '@/store'
import axios from 'axios'
// $storeを使うために必要
createApp(store)

/**
 * get user
 */
const loadUserData = async () => {
  // http://localhost:8888/user.phpからユーザー情報を取得する
  const response = await axios.get(process.env.VUE_APP_API_URL + '/user.php')
  console.log(response.data)
  // ユーザー情報をVuexに保存する
  store.dispatch('setUserData', response.data)
}

export default async () => {
  await loadUserData()
}
