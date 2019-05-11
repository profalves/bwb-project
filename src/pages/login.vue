<template>
  <q-page padding id="login">
    <div class="text-center text-h5 q-my-xl">Login</div>
    <q-input outlined v-model.trim="user" label="CNPJ ou Email" />
    <br />
    <q-input type="password" outlined v-model="pass" label="Senha" />
    <br />
    <q-btn
      color="positive"
      class="full-width"
      label="Entrar"
      size="lg"
      @click="$router.push('shop')" />
    <div class="q-my-lg text-center text-subtitle1">Não tem conta?</div>
    <q-btn
      color="positive"
      class="full-width"
      label="Cadastre-se"
      size="lg"
      @click="$router.push('register')" />
  </q-page>
</template>

<script>
export default {
  name: 'Login',
  data(){
    return {
      user: '',
      pass: ''
    }
  }
}
</script>

<style>
#login {
  overflow: hidden;
}
</style>
