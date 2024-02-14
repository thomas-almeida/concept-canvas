<template>

  <h4 
    v-if="promptResponse === ''"
    class="message-ad"
  >
    Sua ideia tomará forma no quadro abaixo:
  </h4>

  <div class="text-fields">
    <div 
      v-html="promptResponse"
      class="md-response"
    ></div>
  </div>
</template>

<script>
import Marked from 'marked'
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      promptResponse: ''
    }
  },
  computed: {
    ...mapGetters(['getPromptGenerated'])
  },
  watch: {
    getPromptGenerated(newValue) {
      if (newValue && newValue.reply) {
        this.promptResponse = Marked(newValue.reply)
      } else {
        this.promptResponse = ''
      }
    }
  }
}
</script>

<style>
    .text-fields {
      height: 70vh;
      padding: 15px;
      overflow-y: auto;
      border: 1px solid #ddd;
      border-radius: 7px;
    }

    #result-tag {
      padding: 2px;
      margin-bottom: 10px;
      width: 180px;
      border: 1px solid #ddd;
      text-align: center;
      border-radius: 20px;
      font-size: 1rem;
      background-color: #ddd;
    }

    .message-ad {
      color: gray;
      margin: 10px 0px;
      font-size: 0.9rem;
    }

    .text-fields h2 {
      font-size: 1.2rem;
      padding: 10px 0px;
    }

    .text-fields h1 {
      font-size: 1.4rem;
      line-height: 120%;
    }

    .text-fields p {
      font-size: 0.9rem;
    }

    .text-fields ol,
    .text-fields ul {
      padding: 12px;
    }

    .text-fields li {
      font-size: 0.9rem;
      padding: 8px 0px;
    }

</style>