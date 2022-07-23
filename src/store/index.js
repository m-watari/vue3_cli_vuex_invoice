import { createStore } from 'vuex'

export default createStore({
  state: {
    test: 'state test1',
    count: 999,
    menu: [
      {
        name: 'Home',
        url: '/'
      },
      {
        name: 'About',
        url: '/about'
      },
      {
        name: 'Contact',
        url: '/contact'
      }
    ]
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})

//  Store 定義
// const store = new Vuex.Store({
//   state: {
//     count1: 0,
//     count2: 0
//   },
// });
