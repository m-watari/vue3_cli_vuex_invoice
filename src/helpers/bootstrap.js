import axios from 'axios'

/**
 * get user
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
        localStorage.setItem('user', JSON.stringify(res.data.data))
      })
      .catch((error) => {
        console.error('token expired error', error)
      })
  }
}

export default async () => {
  await loadUserData()
}
