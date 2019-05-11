<template>
  <q-page padding id="register">
    <div class="text-center text-h5 q-my-xl">Login</div>
    <q-input
      outlined
      v-model.number="cnpj"
      mask="##.###.###/####-##"
      label="CNPJ" />
    <br />
    <q-btn
      color="positive"
      class="full-width"
      label="Cadastrar"
      size="lg"
      @click="$router.push('nonregistered')" />
    <div class="q-my-lg text-center text-subtitle1">Já tem cadastro?</div>
    <q-btn
      color="positive"
      class="full-width"
      label="Acesse sua conta"
      size="lg"
      @click="$router.push('login')" />
  </q-page>
</template>

<script>
export default {
  name: 'Register',
  data(){
    return {
      cnpj: ''
    }
  }
}
</script>

<style>
#register {
  overflow: hidden;
}
</style>
