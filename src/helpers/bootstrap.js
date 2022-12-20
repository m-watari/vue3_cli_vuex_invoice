// import { createApp } from 'vue'
import axios from 'axios'
// import config from '@/const.js'
// const app = createApp({});

// import VueCookies from 'vue-cookies'
// import { messageFormatter, getLanguage } from './utils'
// app.use(VueCookies)

/**
 * ユーザデータ取得
 */
const loadUserData = async () => {
  if (!localStorage.getItem('user')) {
    await axios.get(process.env.VUE_APP_API_URL + '/user.php',
      {
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        }
      })
      .then((res) => {
        // localStorageにuser情報を保存する
        localStorage.setItem('user', JSON.stringify(res.data.data))
        // localstrageに60分後の時間を保存
        localStorage.setItem('userExpires', new Date().getTime() + 3600000)
      })
      .catch((error) => {
        console.error('token expired error', error)
      })
  }
}

export default async () => {
  await loadUserData()
}
