<template>
  <q-page padding id="register" class="bg-default">
    <div class="text-center text-h5 q-my-xl">Login</div>
    <q-input outlined v-model.number="email" label="Email" bg-color="white" />
    <br />
    <q-btn
      color="secondary"
      class="full-width"
      label="Cadastrar"
      size="lg"
      @click="$router.push('requestaccess')"
    />
    <div class="q-my-lg text-center text-subtitle1">Já tem cadastro?</div>
    <q-btn
      color="secondary"
      class="full-width"
      label="Acesse sua conta"
      size="lg"
      @click="$router.push('login')"
    />
  </q-page>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      email: ""
    };
  }
};
</script>

<style>
#register {
  overflow: hidden;
}
</style>
