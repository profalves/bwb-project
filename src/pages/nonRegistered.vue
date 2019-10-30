<template>
  <q-page padding>
    <div class="text-center text-h5 q-my-xl">Cadastro</div>
    <q-input outlined v-model.number="email" label="Email" class="full-width bg-white" />

    <br />
    <q-input type="password" outlined v-model="pass" label="Senha" bg-color="white" />
    <br />
    <q-input type="password" outlined v-model="confirm" label="Repetir Senha" bg-color="white" />

    <q-footer class="bg-default text-secondary text-center q-pa-md q-mb-lg">
      <div class="row q-gutter-sm q-mb-md">
        <div class="col">
          <q-icon name="fas fa-circle" />
        </div>
        <div class="col">
          <q-icon name="fas fa-circle" />
        </div>
        <div class="col">
          <q-icon name="fas fa-circle" />
        </div>
        <div class="col">
          <q-icon name="fas fa-circle" />
        </div>
      </div>
      <q-btn
        color="secondary"
        class="full-width"
        label="Continuar"
        size="lg"
        @click="$router.push('login')"
      />
    </q-footer>
  </q-page>
</template>

<script>
export default {
  name: "NonRegistered",
  data() {
    return {
      email: "",
      pass: "",
      confirm: ""
    };
  }
};
</script>

