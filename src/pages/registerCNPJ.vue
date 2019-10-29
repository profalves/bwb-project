<template>
  <q-page padding>
    <div class="text-center text-h5 q-my-xl">Cadastro</div>
    <q-input
      outlined
      v-model="cnpj"
      mask="##.###.###/####-##"
      label="CNPJ"
      class="full-width bg-white"
      autofocus
    >
      <template v-slot:append>
        <q-icon
          name="check_circle"
          color="positive"
          class="cursor-pointer"
          v-if="cnpj.length >= 14"
        />
      </template>
    </q-input>
    <br />
    <q-input outlined v-model="insEstadual" label="Inscrição Estadual" bg-color="white" />
    <br />
    <q-input outlined v-model="razaoSocial" label="Razão Social" bg-color="white" />
    <br />
    <q-input outlined v-model="razaoSocial" label="Nome Fantasia" bg-color="white" />

    <q-footer class="bg-transparent text-secondary text-center q-pa-md q-mb-lg">
      <div class="row q-gutter-sm q-mb-md">
        <div class="col">
          <q-icon name="fas fa-circle" />
        </div>
        <div class="col">
          <q-icon name="far fa-circle" />
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
        @click="$router.push('cnpjdados')"
      />
    </q-footer>
  </q-page>
</template>

<script>
export default {
  name: "RegisterCNPJ",
  data() {
    return {
      cnpj: "",
      insEstadual: "",
      razaoSocial: ""
    };
  }
};
</script>

