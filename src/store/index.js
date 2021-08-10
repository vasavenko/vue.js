import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    paymentsList: [],
    categoryList: [],
  },

  mutations: {
    setPaymentsListData (state, payload) {
      state.paymentsList = payload
    },

    setCategories (state, payload) {
      if (!Array.isArray(payload)) {
        payload = [payload]
      }
      state.categoryList.push(...payload)
    },

    addDataToPaymentList (state, payload) {
      state.paymentsList.push(payload)
    }
  },

  getters: {
    getPaymentList: state => state.paymentsList,
    getPaymentListFullPrice: state => {
      return state.paymentsList
        .reduce((res, cur) => res + cur.price, 0)
    },
    getCategoryList: state => state.categoryList,
    },

  actions: {
    fetchData({ commit }) {
      return new Promise((resolve) => {
          setTimeout(() => {
        const items = [];
        for (let i = 1; i<105; i++) {
          items.push({
          date: "04.08.2021",
          category: "Education",
          price: i,
          })
        }
            resolve(items)
          }, 2000)
        })
        .then(res => {
          commit('setPaymentsListData', res)
        })
    },

    loadCategories ({commit}) {
      return new Promise((resolve) => {
          setTimeout(() => {
          resolve (['Food', 'Transport', 'Sport', 'Education'])
        }, 2000)
      })
      .then(res => {
        commit('setCategories', res)
      })
    }
  }
})