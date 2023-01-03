import { createApp } from 'vue'
import store from '@/store'
createApp(store)

/**
 * get user
 */
const loadUserData = async () => {
  const response = await fetch(process.env.VUE_APP_API_URL + '/user.php')
  const data = await response.json()
  // ユーザー情報をVuexに保存する
  store.dispatch('setUserData', data)
}

export default async () => {
  await loadUserData()
}
