import { createStore } from 'vuex'
import { gptGenerate } from './api.service'

export default createStore({
  state() {
    return {
      promptGenerated: ''
    }
  },
  mutations: {
    SET_PROMPT(state, promptResponse) {
      state.promptGenerated = promptResponse
    }
  },
  actions: {
    async setPrompt({ commit }, promptFormMessage) {
      try {
        const response = await gptGenerate(promptFormMessage)
        commit('SET_PROMPT', response.data)
      } catch (error) {
        console.error('Erro ao mandar prompt', error)
        throw error
      }
    }
  },
  getters: {
    getPromptGenerated: (state) => state.promptGenerated
  }
})
