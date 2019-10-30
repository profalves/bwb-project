<template>
  <q-page padding>
    <div class="text-center text-h5 q-my-xl">Cadastro</div>
    <q-input outlined v-model="contato" label="Contato" bg-color="white" />
    <br />
    <q-input
      outlined
      v-model="telefone1"
      mask="(##) #########"
      :label="!tel1 ? 'Telefone (DDD + nº telefone)' : 'Telefone'"
      placeholder="DDD + nº telefone"
      class="full-width bg-white"
      @focus="tel1 = true"
      @blur="tel1 = false"
    />
    <br />
    <q-input
      outlined
      v-model="telefone2"
      mask="(##) #########"
      :label="!tel2 ? 'Telefone (DDD + nº telefone)' : 'Telefone'"
      placeholder="DDD + nº telefone"
      class="full-width bg-white"
      @focus="tel2 = true"
      @blur="tel2 = false"
    ></q-input>
    <br />

    <q-footer class="bg-default text-secondary text-center q-pa-md q-mb-lg">
      <div class="row q-gutter-sm q-mb-md">
        <div class="col">
          <q-icon name="fas fa-circle" />
        </div>
        <div class="col">
          <q-icon name="fas fa-circle" />
        </div>
        <div class="col">
          <q-icon name="far fa-circle" />
        </div>
        <div class="col">
          <q-icon name="far fa-circle" />
        </div>
      </div>
      <q-btn
        color="secondary"
        class="full-width"
        label="Continuar"
        size="lg"
        @click="$router.push('registrarendereco')"
      />
    </q-footer>
  </q-page>
</template>

<script>
export default {
  name: "CNPJDados",
  data() {
    return {
      fantasia: "",
      contato: "",
      tel1: false,
      tel2: false,
      telefone1: "",
      telefone2: ""
    };
  }
};
</script>

