const user = {
  namespaced: true,
  // 初始化
  state () {
    return {
      token: localStorage.getItem('pc-token')
    }
  },
  // 操作数据的方法
  mutations: {
    // 设置
    set (state, token) {
      localStorage.setItem('pc-token', 'Bearer ' + token) // Dom:浏览器
      state.token = 'Bearer ' + token // 数据中心 数据也要去设置
    },
    // 删除
    del (state, val) {
      localStorage.removeItem('pc-token')
      state.token = null
    }
  }
}

export default user
