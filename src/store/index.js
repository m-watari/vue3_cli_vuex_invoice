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
        name: 'Invoice',
        url: '/invoice'
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
