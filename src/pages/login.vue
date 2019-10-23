<template>
  <q-page padding id="login" class="bg-default">
    <div class="text-center text-h5 q-my-xl">Faça login</div>
    <q-input outlined v-model.trim="user" label="Email" bg-color="white" />
    <br />
    <q-input type="password" outlined v-model="pass" label="Senha" bg-color="white" />
    <br />
    <q-btn flat outline class="full-width" size="lg">
      <p class="text-caption">esqueci minha senha</p>
    </q-btn>
    <q-btn
      color="secondary"
      class="full-width"
      label="Continuar"
      size="lg"
      @click="$router.push('shop')"
    />
    <div class="q-my-lg text-center text-subtitle1">ou cadastre-se</div>
    <q-btn
      color="secondary"
      class="full-width q-mb-lg"
      label="Cadastro"
      size="lg"
      @click="$router.push('login')"
    />
  </q-page>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      user: "",
      pass: ""
    };
  }
};
</script>

<style>
#login {
  overflow: hidden;
}
</style>
