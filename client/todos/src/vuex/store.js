import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

const http = axios.create({
  baseURL: 'http://localhost:3000'
})

Vue.use(Vuex)

const state = {
  tasks: []
}

const mutations = {
  postTask (state, payload) {
    state.tasks.push(payload)
  },
  getter (state, payload) {
    state.tasks = payload
  },
  done (state, payload) {
    state.tasks.forEach(task => {
      if (task._id === payload._id) {
        task.done = payload.done
      }
    })
  },
  delete (state, payload) {
    console.log(payload)
    state.tasks.forEach((task, index) => {
      if (task._id === payload) {
        state.tasks.splice(index, 1)
      }
    })
  }
}

const actions = {
  addTask ({commit}, payload) {
    http.post('http://localhost:3000/api/tasks/add', payload)
    .then(({data}) => {
      commit('postTask', data)
    })
  },
  getTask ({commit}) {
    http.get('http://localhost:3000/api/tasks/list')
    .then(({data}) => {
      commit('getter', data)
    })
  },
  editTask ({commit}, payload) {
    http.put(`http://localhost:3000/api/tasks/done/${payload}`)
    .then(({data}) => {
      commit('done', data)
    })
  },
  deleteTask ({commit}, payload) {
    http.delete(`http://localhost:3000/api/tasks/remove/${payload}`)
    .then(({data}) => {
      commit('delete', payload)
    })
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions
})

export default store
