const app = {
  state: {
    name: '1837491827@qq.com',
    password: '18821715779'
  },
  mutations: {
    SET_NAME: (state, val) => {
      state.name = val
    }
  },
  actions: {
    setName ({ commit }, arr) {
      commit('SET_NAME', arr)
    }
  }
}

export default app
