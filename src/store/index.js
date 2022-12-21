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
    // ユーザ情報
    user: (state, data) => (state.user = data),
  },
  actions: {
    /**
     * ユーザ情報を追加
     *
     * @param commit mutationを呼ぶ
     * @param data ユーザのJSON
     */
    setUserData: ({ commit }, data) => {
      commit('user', data)
    },
  },
  modules: {
  }
})
