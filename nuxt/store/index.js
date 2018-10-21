import Vuex from 'vuex'

const store = () => new Vuex.Store({

  actions: {
    async nuxtServerInit ({ commit, state }) {
      let meta = await this.$axios.get('/wp-json/wp/v2')
      commit('setMeta', meta.data)
    }
  },

  state: {
    post: null,
    posts: [],
    page: null,
    blog: null,
    indexInfiniteLoading: {
      enabled: true,
      page: 1
    },
    meta: {
      description: '',
      name: ''
    }
  },

  mutations: {
    setPost (state, data) {
      state.post = data
    },
    setPosts (state, data) {
      state.posts = state.posts.concat(data)
    },
    setBlogPage (state, data) {
      state.blog = data
    },
    setPage (state, data) {
      state.page = data
    },
    setIndexInfiniteLoading (state, data) {
      state.indexInfiniteLoading = data
    },
    setMeta (state, data) {
      state.meta = data
    }
  }
})

export default store