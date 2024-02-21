<template>
  <div class="container">
    <div class="container-content">
      <div class="side form-area">
        <h1>StartupFy</h1>
        <h4>
          Crie sua ideia de StartUp em poucos cliques, 
          preencha os campos e gere maiores insights sobre como tirar sua ideia do papel!
        </h4>
        <br>
        <GenerationForm />
      </div>
      <div class="side generation-area">
        <h3 id="result-tag">
          Resumo do modelo:
        </h3>
      
        <GenerationContent />
      </div>
    </div>
  </div>
</template>

<script setup>
  import GenerationForm from './components/GenerationForm.vue'
  import GenerationContent from './components/GenerationContent.vue';
  
</script>

<style>

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  .container-content {
    width: 75%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }

  .side {
    width: 50%;
    padding: 2em;
  }


</style>