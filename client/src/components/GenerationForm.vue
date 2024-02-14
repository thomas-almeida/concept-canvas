<template>
  <form>
    <h4>Qual o Ramo de Atividade?</h4>
    <v-text-field
      v-model="form.businessBranch"
      variant="solo-filled"
      :placeholder="'Exemplo: Comércio Varejo'"
      required
    ></v-text-field>

    <h4>Qual o modelo de público alvo?</h4>
    <v-select
      v-model="form.targetAudienceModel"
      :items="audienceModelOptionsComputed"
      variant="solo-filled"
      placeholder="Selecione"
      required
    ></v-select>

    <h4>Conte-nos um pouco mais sobre sua ideia inovadora:</h4> 
    <v-textarea
      no-resize
      rows="2"
      variant="solo-filled"
      v-model="form.innovativeIdea"
      placeholder="O foco é gerar valor no comércio ambulante, inserindo tecnologia"
    ></v-textarea>

    <v-btn
      :disabled="!isFormValid || loading"
      :loading="loading"
      block
      class="text-none mb-4"
      color="black"
      size="x-large"
      variant="flat"
      @click="createPrompt"
    >
      Gerar Ideia Inovadora!
    </v-btn>
  </form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        businessBranch: '',
        targetAudienceModel: '',
        innovativeIdea: ''
      },
      loading: false,
    }
  },
  computed: {
    audienceModelOptionsComputed() {
      return ['B2B', 'B2C']
    },
    isFormValid() {
      return (
        this.form.businessBranch !== '' &&
        this.form.targetAudienceModel !== '' &&
        this.form.innovativeIdea !== ''
      )
    }
  },
  methods: {
    async createPrompt() {
      this.loading = true

      const b2cIdeaPrompt = {
        message: `Crie uma ideia de startup inovadora no ramo de ${this.form.businessBranch}, com um publico alvo ${this.form.targetAudienceModel}, além disso, ${this.form.innovativeIdea}, devolva sua resposta em formato markdown`
      }

      const b2bIdeaPrompt = {
        message: `Crie uma ideia de startup inovadora no ramo de ${this.form.businessBranch}, com publico alvo sendo empresas, além disso, ${this.form.innovativeIdea}, devolva sua resposta em formato markdown`
      }

      try {
        if (this.form.targetAudienceModel === 'B2C') {
          await this.$store.dispatch('setPrompt', b2cIdeaPrompt)
        } else {
          await this.$store.dispatch('setPrompt', b2bIdeaPrompt)
        }
      } catch (error) {
        console.error('Erro ao criar prompt:', error)
      } finally {
        this.loading = false
      }
    }
  }
}
</script>

<style>
  form > h4 {
    margin-bottom: 10px
  }
</style>
